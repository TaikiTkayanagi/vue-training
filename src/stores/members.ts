import type Member from "@/interface/Member";
import { defineStore } from "pinia";

let db: IDBDatabase;
async function openIndexDb(): Promise<boolean> {
    const version = 1;
    const promise = new Promise<boolean>((resolve, reject) => {
        const request = indexedDB.open("asyncDb", version)
        request.onsuccess = (event) => {
            const target = event.target as IDBRequest
            db = target.result as IDBDatabase
            resolve(true)
        }
        //onupgradeneeded→onsuccessの順に呼ばれるが、versionがブラウザ内部のversionよりも大きいときのみ実行される
        //つまり、ストアの変更や作成があった時のみ実施される
        request.onupgradeneeded = (event) => {
            const target = event.target as IDBRequest
            db = target.result as IDBDatabase
            db.createObjectStore("members", { keyPath: "id" })
        }
        request.onerror = () => {
            console.log("DB作成失敗")
            reject(new Error("DB作成失敗"))
        }
    })
    return promise
}

export const useMembersStore = defineStore("members", {
    state: () => ({ members: new Map<number, Member>() }),
    getters: {
        getById: (state) => (id: number) => state.members.get(id),
        get: (state) => state.members
    },
    actions: {
        async getLocalStorage(): Promise<boolean> {
            if (db === null || db === undefined) {
                const r = await openIndexDb()
                if (!r) {
                    throw Error("DBが開くことができません")
                }
            }
            const primise = new Promise<boolean>((resolve, reject) => {
                const t = db.transaction("members", "readonly");
                const store = t.objectStore("members");
                const request = store.getAll()
                request.onsuccess = () => {
                    if (request.result !== undefined) {
                        request.result.forEach(value => this.members.set(value.id, value))
                    }
                    resolve(true);
                }
                t.onerror = ((event) => {
                    console.log("Error")
                    reject(new Error("データ取得失敗"))
                })

            })
            return primise

        },
        async add(member: Member) {
            if (db === null || db === undefined) {
                const r = await openIndexDb()
                if (!r) {
                    throw Error("DBが開くことができません")
                }
            }
            const id = this.members.size + 1
            const promise = new Promise<boolean>((resolve, reject) => {
                const t = db.transaction("members", "readwrite");
                const store = t.objectStore("members");
                const newMember = {...member, id};
                const r = store.put(newMember)

                r.onsuccess = () => {
                    this.members.set(id, newMember)
                    resolve(true)
                };
                t.onerror = () => reject(new Error("失敗"))
            })

        },
        isEmpty() {
            return this.members.size === 0
        }
    }
})
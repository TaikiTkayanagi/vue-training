import type Member from "@/interface/Member";
import { defineStore } from "pinia";

export const useMembersStore = defineStore("members", {
    state: () => ({members: new Map<number, Member>()}),
    getters: {
        getById: (state) => (id: number) => state.members.get(id),
        get: (state) => state.members
    },
    actions: {
        isEmpty() {
            return this.members.size === 0
        },
        getLolcalStorage() {
            const items = localStorage.getItem("members")
            if(items != undefined){
                const map = JSON.parse(items);
                this.members = new Map<number, Member>(map)
            }
        },
        add(member: Member) {
            const size = this.members.size;
            this.members.set(size + 1, member)
            localStorage.setItem("members", JSON.stringify([...this.members]));
        }
    }
})
import App2 from "@/App2.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"

describe("App2のテスト", () => {
    test("入力値のテスト", async() => {
        const wrapper = mount(App2)
        await wrapper.get(`[data-testid="num1"]`).setValue(10);
        await wrapper.get(`[data-testid="num2"]`).setValue(10);
        const expected = "1"
        const actual = wrapper.get(`[data-testid="ans"]`).text();

        expect(actual).toBe(expected)
    })

    test("文字の表示のテスト", () => {
        const wrapper = mount(App2)

        const actual1 = wrapper.find(`[data-testid="canCalc"]`).exists()
        const actual2 = wrapper.find(`[data-testid2="init"]`).exists()

        expect(actual1).false
        expect(actual2).true
    })

    test("ボタンクリックのテスト", async() => {
        const wrapper = mount(App2)
        await wrapper.get(`[data-testid="num1"]`).setValue(10);
        await wrapper.get(`[data-testid="num2"]`).setValue(10);
        await wrapper.get(`[data-testid="calc"]`).trigger("click")
        const expected = "100"

        const actual1 = wrapper.get(`[data-testid="ans"]`).text();
        const actual2 = wrapper.find(`[data-testid="canCalc"]`).exists()
        const actual3 = wrapper.find(`[data-testid2="init"]`).exists()

        expect(actual1).toBe(expected)
        expect(actual2).true
        expect(actual3).false
    })
})
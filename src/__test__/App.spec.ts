import { mount } from '@vue/test-utils'
import App from "@/App.vue";
import { describe, expect, test } from "vitest";

describe("App.vueのテスト", () => {
    test("初期表示テスト", () => {
        const wrapper = mount(App)
        const actual = wrapper.get('p').text();
        const expected = "6 × 6 = 36"
        expect(actual).toBe(expected);
    })
})
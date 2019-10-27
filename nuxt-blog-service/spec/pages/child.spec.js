import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import ChildPage from '~/pages/child'
import { testNameToKey } from 'jest-snapshot/build/utils'
import expectExport from 'expect'

const localVue = createLocalVue()

describe('pages/child.vue', () => {
    test('トップページへ戻る導線が存在する', () => {
        const wrapper = mount(ChildPage, {
            localVue,
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })
        expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    })
})

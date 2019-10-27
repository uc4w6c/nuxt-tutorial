import Vuex from 'vuex'
import index from '~/store'
import { createLocalVue } from '@vue/test-utils'
import  cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

/**
 * storeへのテストコード
 */
describe('store/index.js', () => {
    let store

    beforeEach(() => {
        store = new Vuex.Store(cloneDeep(index))
    })

    describe('mutations', () => {
        test('increment ミューテーションがコミットされると、count ステートの値が +1 される)', () => {
            expect(store.getters['count']).toBe(0)
            store.commit('increment')
            expect(store.getters['count']).toBe(1)
        })
    })

    describe('actions', () => {
        test('increment アクションを dispatch するたびに、increment ミューテーションがコミットされる)', () => {
            expect(store.getters['count']).toBe(0)
            store.commit('increment')
            expect(store.getters['count']).toBe(1)
        })
    })
})

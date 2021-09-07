import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store, createLogger } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  actions,
  mutations,
  plugins: [createLogger()] // need to remove for prod
})
// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}

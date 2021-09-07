import { Commit } from "vuex";
import types from "./mutation-types";

export default {
  increment({ commit } : { commit: Commit }) {
    commit(types.INCREMENT);
  }
}; 


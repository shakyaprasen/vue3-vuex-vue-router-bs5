import { State } from ".";
import types from "./mutation-types";

export default {
	[types.INCREMENT] (state: State) {
      state.count += 1;
  }
};

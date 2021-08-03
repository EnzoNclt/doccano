import Vuex from "vuex";
import undoRedo from "undo-redo-vuex";

// NB: The following config is used for namespaced store modules.
// Please see below for configuring a non-namespaced (basic) vuex store
export default new Vuex.Store({
  plugins: [
    undoRedo({
      // The config object for each store module is defined in the 'paths' array
      paths: [
        {
          namespace: "list",
          // Any mutations that you want the undo/redo mechanism to ignore
          ignoreMutations: ["addShadow", "removeShadow"],
        },
      ],
    }),
  ],
  /*
   * For non-namespaced stores:
   * state,
   * actions,
   * mutations,
   */
  // Modules for namespaced stores:
  modules: {
    list,
  },
});
import { scaffoldStore,
    scaffoldState,
    scaffoldActions,
    scaffoldMutations } from "undo-redo-vuex";
 
const state = {
  list: [],
  /**
   * 'resetList' is a placeholder (initially the same as 'list') to 
   * fast-forward 'list' during a 'reset()'
   */
  resetList: [],
  // Define vuex state properties as normal
};
const actions = {
  saveItem: async (({ commit }), item) => {
    await axios.put(PUT_ITEM, item);
    commit("addItem", {
      item,
      // dispatch("deleteItem", { item }) on undo()
      undoCallback: "deleteItem",
      // dispatch("saveItem", { item }) on redo()
      redoCallback: "saveItem"
    });
  },

  deleteItem: async (({ commit }), item) => {
    await axios.delete(DELETE_ITEM, item);
    commit("removeItem", {
      item,
      // dispatch("saveItem", { item }) on undo()
      undoCallback: "saveItem",
      // dispatch("deleteItem", { item }) on redo()
      redoCallback: "deleteItem"
    });
  }
};

const mutations = {
  /*
   * NB: The emptyState mutation HAS to be implemented.
   * This mutation resets the state props to a "base" state,
   * on top of which subsequent mutations are "replayed"
   * whenever undo/redo is dispatched.
   */
  emptyState: state => {
    // Sets some state prop to the 'reset placeholder' value
    state.list = [...(state.resetList || [])];
  },
 
  resetState: state => {
    // Sets the 'reset placeholder' (see state.resetList) prop to the current state
    state.resetList = [...state.list];
  },
 
  // Define vuex mutations as normal
};
 
export default scaffoldStore({
  // Use the respective helper function to scaffold state, actions and mutations
  state: scaffoldState(state),
  actions: scaffoldActions(actions),
  mutations: scaffoldMutations(mutations),
  namespaced: true, // NB: do not include this is non-namespaced stores
});
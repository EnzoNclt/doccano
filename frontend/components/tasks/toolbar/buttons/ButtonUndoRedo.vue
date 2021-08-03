<template>
  <v-row no-gutters>
    <v-btn-toggle>
      <button-undo
        @click:undo="undoAction()"
        @shortkey:undo="undoAction()"
      />
      <button-redo
        @click:redo="redoAction()"
        @shortkey:redo="redoAction()"
      />
    </v-btn-toggle>
  </v-row>
</template>

<script>
import Vue from 'vue'
// import undoRedo from '../../../../store/undoRedoStore.js'
import { mapState } from "vuex";
import ButtonUndo from './ButtonUndo.vue'
import ButtonRedo from './ButtonRedo.vue'

export default Vue.extend({
  components: {
    ButtonUndo,
    ButtonRedo
  },
  computed: {
    ...mapState({
      buttonUndoEnabled: "canUndo",
      buttonRedoEnabled: "canRedo",
    }),
  },
  methods: {
    undoAction() {
      console.log("Undo")
    },
    redoAction() {
      console.log("Redo")
    }
  }
})

</script>
<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        v-shortkey="['ctrl', 'y']"
        icon
        v-on="on"
        @click="$emit('click:redo')"
        @shortkey="$emit('shortkey:redo')"
      >
        <v-icon>
          mdi-redo
        </v-icon>
      </v-btn>
    </template>
    <span>Redo</span>
  </v-tooltip>
</template>

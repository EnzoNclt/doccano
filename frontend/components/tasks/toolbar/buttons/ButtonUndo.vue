<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        v-shortkey="['ctrl', 'z']"
        icon
        v-on="on"
        @click="$emit('click:undo')"
        @shortkey="$emit('shortkey:undo')"
      >
        <v-icon>
          mdi-undo
        </v-icon>
      </v-btn>
    </template>
    <span>Undo</span>
  </v-tooltip>
</template>

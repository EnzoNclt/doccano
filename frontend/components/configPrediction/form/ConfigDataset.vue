<template>
  <v-stepper-content step="3">
    <v-card>
      <v-card-text class="pa-0">
        <v-form v-model="valid">
          <h4 class="text-h6">Select a dataset</h4>
          <p class="font-weight-regular body-1">
            You can select the dataset to import the auto-labeling configuration.
          </p>
          <v-select
            v-model="templateName"
            :items="templateNames"
            :rules="templateNameRules()"
            label="Select a config template"
            outlined
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-spacer />
        <v-btn
          :disabled="!valid"
          color="primary"
          class="text-capitalize"
          @click="$emit('next')"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-stepper-content>
</template>
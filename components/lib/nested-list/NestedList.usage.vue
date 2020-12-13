<template>
  <div style="max-width: 600px; margin: 0 auto;">
    <v-card class="mx-auto pa-3 mb-3" style="position: sticky; top: 0; z-index: 999;">
      <v-text-field v-model="preselected" label="Pre-Selected Item ID" outlined dense hide-details class="mb-3" />
      <v-text-field :value="selectedFilter || 'None'" label="Selected Item ID" readonly outlined dense hide-details class="mb-3" />
      <v-btn color="primary" @click="listItems = listItems.reverse()">Reverse Order</v-btn>
    </v-card>
    <v-card class="mx-auto pa-3">
      <NestedList :list-items="listItems" :preselected="preselected" @selection-changed="onFilterSelectionChanged" />
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-debugger */

import NestedList from './NestedList.vue';
import data from './mockup-data.json';

export default {
  components: {
    NestedList
  },
  data() {
    return {
      preselected: 'range-0-10',
      selectedFilter: null,
      listItems: data.listItems
    };
  },
  methods: {
    onFilterSelectionChanged(selection) {
      this.selectedFilter = (selection[0] || {}).uid;
      console.log(`onFilterSelectionChanged(); selectedFilter = ${this.selectedFilter}`);
    }
  }
};
</script>

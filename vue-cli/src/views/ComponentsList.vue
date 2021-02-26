<template>
  <v-card
    class="mx-auto"
    width="600"
    tile
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Component Pages
          </v-list-item-title>
          <v-list-item-subtitle>Click on the items to preview</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list
      nav
      dense
    >
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(component, i) in $route.meta.components.filter(c => !c.hidden)"
          :key="i"
        >
          <v-list-item-content>
            <router-link :to="component.path">{{ component.filename }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>

export default {
  name: 'ComponentsList'
};
</script>

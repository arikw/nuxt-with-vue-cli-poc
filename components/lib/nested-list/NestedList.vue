<template>
  <v-list>
    <v-list-group v-for="node in items" :key="node.uid" v-model="node.active" :append-icon="null" no-action eager @click.native.stop.prevent="onItemClicked(node)">
      <template #activator pl-0>
        <v-list-item-content>
          <v-list-item-title v-text="node.label" />
        </v-list-item-content>
        <v-list-item-icon v-if="node.active">
          <v-icon>
            mdi-check
          </v-icon>
        </v-list-item-icon>
      </template>
      <NestedList class="py-0 pl-3" :sub-group="true" :list-items="node.$children" />
    </v-list-group>
  </v-list>
</template>
<script>

export default {
  name: 'NestedList',
  props: {
    listItems: {
      type: Array,
      required: true,
      default: () => []
    },
    subGroup: Boolean,
    preselected: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      lastSelectedItem: undefined,
      // work on a copy in the root list
      items: []
    };
  },
  watch: {

    listItems: {
      handler(to, from) {

        this.items = this.subGroup ? this.listItems : JSON.parse(JSON.stringify(this.listItems));

        if (!this.subGroup) {
          this.selectItem(this.preselected);
        }

      },
      immediate: true,
      deep: true
    },

    items: {

      handler(to, from) {

        const isRootGroup = !this.subGroup;
        if (!isRootGroup) { return; }

        // do immediatly after the reactive changes take place
        setTimeout(() => {
          const activeItems = getDescendantItems(this.items).filter(item => item.active);
          let deepestSelectedItem;
          for (const activeItem of activeItems) {
            if (!activeItem.$children.find(item => item.active)) {
              deepestSelectedItem = activeItem;
            }
          }

          if ((Object(deepestSelectedItem).uid) !== this.lastSelectedItemId) {
            this.$emit('selection-changed', deepestSelectedItem ? [ deepestSelectedItem ] : []);
            this.lastSelectedItemId = Object(deepestSelectedItem).uid;
          }
        }, 0);
      },
      immediate: true,
      deep: true
    },
    preselected: {
      handler(to) {

        if (this.subGroup) { return; }

        this.selectItem(to);
      },
      immediate: true
    }
  },
  methods: {
    selectItem(itemId) {

      const allItems = getDescendantItems(this.items);
      for (const item of allItems) {
        if (item.uid !== itemId) {
          this.$set(item, 'active', false);
        }
      }

      // search for preselected item and save as last selection
      this.lastSelectedItemId = Object(allItems.find(item => item.uid === itemId)).uid;

      let preselectedItemId = itemId,
        preselectedItemAncestor;

      // select the item's ancestors
      while (preselectedItemAncestor = allItems.find(item => (item.uid === preselectedItemId))) { // eslint-disable-line no-cond-assign
        this.$set(preselectedItemAncestor, 'active', true);
        preselectedItemId = preselectedItemAncestor.parent;
      }
    },
    onItemClicked(item) {

      // turn off all other selections
      const allItems = getDescendantItems(this.items);
      for (const descendant of allItems) {
        if ((descendant.uid !== item.uid)) {
          this.$set(descendant, 'active', false);
        }
      }

    }
  }
};

function getDescendantItems(parents) {
  const seenNodes = {};
  const nodes = [];
  for (const parent of parents) {
    const children = getDescendantItems(parent.$children);
    for (const child of children) {
      if (!seenNodes[child.uid]) {
        seenNodes[child.uid] = child;
        nodes.push(child);
      }
    }
    nodes.push(parent);
  }
  return nodes;
}

</script>

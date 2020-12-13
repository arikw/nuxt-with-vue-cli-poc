<template>
  <div class="container">
    <div style="border: 2px solid black; border-radius: 5px; padding: 2em;">
      <Logo style="width: 100px; height: 50px;" />
      <h1 class="title">
        Nuxt with Vue CLI
      </h1>
      <div class="components">
        <h2 class="subtitle">Demonstrating a "nested list" component from components/lib/nested-list:</h2>
        <nested-list :list-items="listItems" style="width: 250px;" />
      </div>
    </div>
  </div>
</template>

<script>

import data from '~/components/lib/nested-list/mockup-data.json';

export default {
  data() {
    return {
      listItems: data.listItems
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 2em;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: inline;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.components {
  padding-top: 15px;
}
</style>

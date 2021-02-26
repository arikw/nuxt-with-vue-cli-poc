<template>
  <div id="app">
    <v-app dark>
      <!--div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div-->
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="pa-10">
          <!-- If using vue-router -->
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

</style>

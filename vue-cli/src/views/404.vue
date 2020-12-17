<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-3 my-5">Page not found.</div>
            <div class="grey--text lighten-5">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <div class="paragraph-text mt-2">
              <br>
              <br>Try going back to <router-link to="/">the home page</router-link>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>

export default {
  head: {
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '404 Not Found'
    }
  }
};
</script>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>

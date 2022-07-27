<template>
  <div class="home">
  <v-container>
  <label for="name">Name: </label>
    <input type="text" id="name"/>
    <v-spacer></v-spacer>
    <v-text-field label="Name" type="text"/>
  </v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home-view',
  components: {
    HelloWorld
  }
}
</script>
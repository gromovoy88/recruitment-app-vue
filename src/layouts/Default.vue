<template>
  <div class="layout-default">
    <loader/>
    <v-header :routes="routes" :logo="logo"/>
    <div class="container">
      <sidebar>
        <minicart/>
      </sidebar>
      <v-content>
        <router-view/>
      </v-content>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Loader from '../components/Loader.vue';
import Content from '../components/Content.vue';
import Minicart from '../components/Minicart.vue';

export default {
  components: {
    'v-header': Header,
    'v-content': Content,
    Sidebar,
    Loader,
    Minicart,
  },
  props: {
    routes: Array,
    logo: Object,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <div class="app" id="app">
    <default-layout :logo="logo" :routes="routes"/>
  </div>
</template>

<script>
import Default from './layouts/Default.vue';

export default {
  name: 'App',
  components: {
    'default-layout': Default,
  },
  data() {
    return {
      logo: {
        href: '',
        alt: 'Simple cart',
      },
      routes: [{
        name: 'Catalog',
        link: '/',
      }, {
        name: 'About',
        link: '/about',
      }, {
        name: 'Contact',
        link: '/contact',
      }],
    };
  },
};
</script>

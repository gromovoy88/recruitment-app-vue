<template>
  <ul>
    <li class="nav-link"
      v-for="(route, key) in routes"
      :key="key"
    >
      <router-link :to="route.link">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HeaderNavigation',
  props: {
    routes: Array,
  },
};
</script>

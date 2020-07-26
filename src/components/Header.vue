<template>
  <div id="nav" class="nav">
    <div class="nav-container">
      <header-logo :logo="logo"/>
      <header-navigation
        class="nav-links"
        :routes="routes"
      />
      <header-search class="nav-search"/>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from './HeaderNavigation.vue';
import HeaderSearch from './HeaderSearch.vue';
import HeaderLogo from './HeaderLogo.vue';

export default {
  name: 'Header',
  props: {
    routes: Array,
    logo: Object,
  },
  components: {
    HeaderNavigation,
    HeaderSearch,
    HeaderLogo,
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  border-bottom: 1px solid #E5E5E5;
  padding-left: 15px;
  padding-right: 15px;

  &-container {
    width: 100%;
    max-width: 1350px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    margin: auto;
  }

  &-links {
    display: flex;
    padding: 0px;
    margin: 0px;
    margin-left: auto;
    list-style-type: none;
  }

  &-link {
    margin-right: 30px;

    a {
      text-decoration: none;
      color: #616161;
      font-weight: bold;

      &:hover {
        color: black;
      }
    }
  }

  &-search {
    padding: 0px 30px;
    height: 100%;
    background-color: #d6d6d6;
    display: flex;
    align-items: center;
  }
}
</style>

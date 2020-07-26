<template>
  <div class="homepage">
    <catalog />
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue';

export default {
  name: 'Home',
  components: {
    Catalog,
  },
};
</script>

<style scoped lang="scss">
.homepage {
  padding: 0px 15px;
}
</style>

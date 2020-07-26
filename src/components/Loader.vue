<template>
  <div id="loader">
    <div class="vld-parent">
      <loading
        :active.sync="!toast.show"
        :can-cancel="false"
        :is-full-page="true"
        :height="128"
        :width="128"
        loader="dots"
        color="#155BCC"
      />
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapState } from 'vuex';

export default {
  name: 'Loader',
  props: {
    routes: Array,
    logo: String,
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState([
      'toast',
    ]),
  },
};
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="logo">
    <div class="logo-image" v-if="logo.href">
      <img :src="logo.href" :alt="logo.alt">
    </div>
    <div class="logo-text" v-else>
      <span>{{ logo.alt }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    logo: Object,
  },
};
</script>

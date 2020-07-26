<template>
  <div id="content" class="content">
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style scoped lang="scss">
.content {
  &-container {
    padding-left: 50px;
  }
}
</style>

<template>
  <div id="sidebar" class="sidebar">
    <div class="sidebar-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style lang="scss">
.sidebar {
  background-color: #155BCC;

  &-container {
    padding: 15px;
  }
}
</style>

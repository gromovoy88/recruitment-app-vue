<template>
  <div class="about">
    <div class="about-title">
      <h1>
        <span>About:</span>
      </h1>
    </div>
    <div class="about-content">
      <p>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br>
        when an unknown printer took a galley of type and scrambled it to make a type <br>
        specimen book. It has survived not only five centuries, but also the leap into <br>
        electronic typesetting, remaining essentially unchanged. It was popularised in the<br>
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more <br>
        recently with desktop publishing software like Aldus PageMaker including versions <br>
        of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped lang="scss">
.about {
  &-title {
    text-align: left;
    margin-bottom: 30px;
  }

  &-content {
    text-align: left;
  }
}
</style>

<template>
  <div class="contact">
    <div class="contact-title">
      <h1>
        <span>Contact</span>
      </h1>
    </div>
    <div class="contact-content">
      <div class="info">
        <div class="info-title">
          <h2>
            <span>Yaroslav Hromovyi</span>
          </h2>
        </div>
        <div class="info-subtitle">
          <p>
            Front-end developer
          </p>
        </div>
        <div class="info-content">
          <div class="linkedin">
            <a href="https://linkedin.com/in/yaroslav-hromovyi-57b670152">
              Linkedin
            </a>
          </div>
          <div class="phone">
            <a href="tel:+48733653798">Call me</a>
          </div>
          <div class="mail">
            <a href="mailto:gromovoy88@gmail.com">Mail me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped lang="scss">
.contact {
  &-title {
    text-align: left;
    margin-bottom: 30px;
  }

  &-content {
    text-align: left;
  }

  .info {
      &-title {
        h2 {
          margin-bottom: 10px;
        }
      }

      &-subtitle {
        margin-bottom: 30px;

        p {
          margin-top: 5px;
          margin-bottom: 10px;
        }
      }
    }
}
</style>

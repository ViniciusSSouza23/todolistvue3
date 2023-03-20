<template>
  <footer class="footer-component bg-dark">
    <div class="container text-center py-4">
      <h6 class="mb-0">
        Desenvolvido por
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vinicius-santos-souza/"
          >Vinicius Souza</a
        >
      </h6>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-component{
  a{
    color: #fff;
    text-decoration: none;
    transition: filter 1s;
    &:hover{
      filter: brightness(80%);
      text-decoration: underline;
    }
  }
}
</style>

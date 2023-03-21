<template>
  <header class="header-component">
    <div class="container py-5">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'taskManager' }">Gerenciar tarefas</router-link>
      <router-link :to="{ name: 'login' }"> Login</router-link>
      <router-link :to="{ name: 'register' }"> Cadastre-se</router-link>
    </div>
  </header>
</template>
<script>
export default {
  mounted(){
    console.log(this.$store.state.user)
  }
}
</script>
<style lang="scss" scoped>
.header-component {
  background-color: #000;
  a {
    text-decoration: none;
    color: #fff;
    margin-right: 1.5rem;
    font-size: 18px;
    line-height: 20px;
    transition: filter 1s;
    &:hover {
      filter: brightness(80%);
      text-decoration: underline;
    }
  }
}
</style>

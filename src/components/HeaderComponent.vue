<template>
  <header class="header-component">
    <div class="container py-5">
      <div class="d-flex align-items-center">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'taskManager' }"
          >Gerenciar tarefas</router-link
        >
        <div class="flex-fill"></div>
        <router-link v-if="!hasUser" :to="{ name: 'login' }">
          Login</router-link
        >
        <button class="btn" @click="logout" v-else>Sair</button>
      </div>
    </div>
  </header>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  computed: {
    hasUser() {
      if (this.$store.state.user.user && this.$store.state.user.user.id) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    logout() {
      this.$store.state.user.user = {};
      ElMessage({
        type: "success",
        showClose: true,
        message: "Deslogado com sucesso",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.header-component {
  background-color: #000;
  a,
  .btn {
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

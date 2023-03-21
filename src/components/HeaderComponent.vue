<template>
  <header class="header-component">
    <div class="container py-5">
      <div class="d-flex align-items-center">
        <router-link to="/">Home</router-link>
        <router-link v-if="hasUser" :to="{ name: 'taskManager' }"
          >Minhas tarefas</router-link
        >
        <button v-else @click="showLoginModal = true" class="btn">
          Minhas tarefas
        </button>
        <div class="flex-fill"></div>
        <router-link v-if="!hasUser" :to="{ name: 'login' }">
          Login</router-link
        >
        <button class="btn" @click="logout" v-else>Sair</button>
      </div>
    </div>
    <el-dialog
      :fullscreen="fullscreen"
      v-model="showLoginModal"
      class="bg-dark p-4"
    >
      <h4 class="mb-5 text-center text-white">
        Para acessar essa area você precisa estar logado.
      </h4>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary py-3 w-50" @click="goLogin">
          Ir para Login
        </button>
      </div>
    </el-dialog>
  </header>
</template>
<script>
import { ElMessage } from "element-plus";
import { isMobile } from "@/helpers.js";
export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  computed: {
    hasUser() {
      if (this.$store.state.user.user && this.$store.state.user.user.id) {
        return true;
      } else {
        return false;
      }
    },
    fullscreen() {
      if (isMobile()) {
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
      this.$router.push({ name: "home" });
    },
    goLogin() {
      this.showLoginModal = false;
      this.$router.push({ name: "login" });
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

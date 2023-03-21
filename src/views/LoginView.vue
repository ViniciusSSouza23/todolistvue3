<template>
  <div class="login-view bg-dark">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="text-center">
            <!-- <img
              src="@/assets/images/logo.png"
              alt="Logo"
              class="img-fluid"
              width="200"
            /> -->
            <h1 class="text-uppercase text-decoration-underline mb-5 pb-3">
              Faça seu login
            </h1>
          </div>

          <form class="form-group">
            <label for="email" class="mb-2">E-mail:</label>
            <input
              type="text"
              placeholder="Digite seu email"
              name="email"
              id="email"
              class="form-control py-3 mb-5"
              v-model="payload.login"
            />
            <label for="password" class="mb-2">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-control mb-5 py-3"
              placeholder="Digite sua senha"
              v-model="payload.password"
            />

            <div class="row justify-content-center">
              <div class="col-lg-6">
                <button
                  type="button"
                  @click.prevent="singin"
                  class="btn btn-yellow w-100 py-3"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>

          <p class="mb-0 mt-4 text-center">
            Ainda não tem uma conta?
            <router-link :to="{ name: 'register' }"
              >Cadastre-se aqui</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      payload: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    singin() {
      if (!this.payload.login.length) {
        ElMessage({
          showClose: true,
          message: "Verifique o campo e-mail",
          type: "warning",
        });
        return;
      }
      if (!this.payload.password.length) {
        ElMessage({
          showClose: true,
          message: "Verifique o campo de senha",
          type: "warning",
        });
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view {
  min-height: 74.8vh;
  .btn-yellow {
    background-color: goldenrod;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    transition: filter 1s;
    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>
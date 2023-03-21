<template>
  <div class="register-view bg-dark">
    <div class="container py-5">
      <div class="row justify-content-center">
        <h1
          class="text-center text-decoration-underline text-uppercase mb-5 pb-3"
        >
          Registre-se gratuitamente
        </h1>
        <div class="col-lg-5">
          <form class="form-group">
            <label for="name" class="mb-2">Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              id="name"
              class="form-control mb-4 py-3"
              v-model="payload.name"
            />
            <label for="email" class="mb-2">Email:</label>
            <input
              type="text"
              placeholder="Digite seu email"
              id="email"
              class="form-control mb-4 py-3"
              v-model="payload.login"
            />
            <label for="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="senha"
              class="form-control py-3 mb-4"
              placeholder="Digite sua senha"
              v-model="payload.password"
            />
            <label for="passwordConfirm">Confirme sua senha:</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirme sua senha"
              class="form-control py-3 mb-5"
              v-model="payload.confirmPassword"
            />

            <div class="row justify-content-center mb-4">
              <div class="col-lg-6">
                <button
                  type="button"
                  @click.prevent="singIn"
                  class="btn btn-yellow py-3 w-100"
                >
                  Cadastrar-se
                </button>
              </div>
            </div>
            <p class="text-center">
              Já é cadastrado?
              <router-link :to="{ name: 'login' }">Faça o login</router-link>
            </p>
          </form>
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
        name: "",
        login: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    singIn() {
      if (!this.payload.name.length) {
        ElMessage({
          showClose: true,
          message: "Verifique o campo nome",
          type: "warning",
        });
        return;
      }
      if (!this.payload.login.length) {
        ElMessage({
          showClose: true,
          message: "Verifique o campo de email",
          type: "warning",
        });
        return;
      }
      if (
        !this.payload.password.length ||
        !this.payload.confirmPassword.length
      ) {
        ElMessage({
          showClose: true,
          message:
            "Os campos de senha e confirmar senha precisam ser preenchidos",
          type: "warning",
        });
        return;
      }
      if (this.payload.password != this.payload.confirmPassword) {
        ElMessage({
          showClose: true,
          message: "As senhas precisam ser identicas",
          type: "warning",
        });
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.register-view {
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
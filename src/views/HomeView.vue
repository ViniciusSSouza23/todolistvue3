<template>
  <div class="home-view bg-dark">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-6 order-lg-2">
          <h1 class="mb-5">To Do List App</h1>
          <p>
            Seja bem-vindo ao To Do List App, uma aplicação desenvolvida para
            ajudá-lo a gerenciar suas tarefas de maneira eficiente. Com ela,
            você pode adicionar, editar, concluir e excluir tarefas com
            facilidade.
          </p>
          <p>
            Utilizamos as tecnologias Vue.js 3, Vue Router e Vuex para
            desenvolver essa aplicação. Além disso, optamos por utilizar a
            Options API devido ao tamanho da aplicação, que facilitou sua
            construção.
          </p>
          <p>
            Para utilizar a aplicação, é necessário realizar o login. Caso ainda
            não possua uma conta, você pode criá-la facilmente e começar a
            gerenciar suas tarefas imediatamente. Estamos felizes em tê-lo como
            usuário e esperamos que aproveite ao máximo essa ferramenta útil.
          </p>
        </div>
        <div class="col-lg-6 order-lg-1">
          <img src="@/assets/images/logo.png" alt="Logo" class="img-fluid" width="450" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-view {
  min-height: 74.8vh;
  //background-color: #565656;
}
</style>

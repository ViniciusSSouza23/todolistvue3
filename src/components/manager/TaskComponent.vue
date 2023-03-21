<template>
  <div class="task-component w-100 p-4 d-flex flex-column">
    <div class="d-flex align-items-center">
      <small>Status: <span>Em andamento</span></small>
      <div class="flex-fill"></div>
      <button class="btn btn-danger">X</button>
    </div>
    <h3 class="my-5">Fazer teste da empresa kadsjfljsadkfjasdl fjsadfj sadfjla jflsd</h3>
    <div class="flex-fill"></div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <button class="btn btn-success w-100">Concluir Tarefa</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-component {
  border-radius: 16px;
  background: #485563;
  background: -webkit-linear-gradient(to right, #29323c, #485563);
  background: linear-gradient(to right, #29323c, #485563);
  min-height: 150px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
    small{
      span{
        font-size: 12px;
      }
    }
}
</style>

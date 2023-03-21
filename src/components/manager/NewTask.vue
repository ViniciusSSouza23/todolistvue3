<template>
  <div class="new-task-component w-100">
    <form class="form-group">
      <label for="task-name" class="mb-2 text-white">Nome:</label>
      <input
        type="text"
        class="form-control mb-5"
        id="task-name"
        placeholder="Adicione um nome a sua tarefa"
        v-model="name"
      />
      <label for="taskDesc" class="mb-2 text-white">Descrição:</label>
      <input
        type="text"
        class="form-control mb-5"
        id="task"
        placeholder="Adicione a descrição para sua tarefa"
        v-model="desc"
      />
      <button
        type="button"
        @click.prevent="submit"
        class="btn btn-success w-100"
      >
        Salvar
      </button>
    </form>
  </div>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      desc: "",
      name: "",
    };
  },
  methods: {
    submit() {
      if (this.desc.length && this.name.length) {
        this.$store
          .dispatch("tasks/createTask", {
            data: {
              descricao: this.desc,
              done: false,
              user_id: this.$store.state.user.user.id,
              name: this.name,
            },
          }).then(()=>{
            this.$store.dispatch(
            "tasks/getUserTasks",
            this.$store.state.user.user.id
          );
          })
          .finally(() => {
            this.$emit("close");
          });
      } else {
        ElMessage({
          showClose: true,
          type: "warning",
          message: "Todos os campos precisam estar preenchidos",
        });
      }
    },
  },
};
</script>

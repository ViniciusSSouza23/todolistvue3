<template>
  <div class="task-manager-view bg-dark">
    <div class="container py-5">
      <div class="custom-header pt-5">
        <div class="d-flex align-items-center">
          <h5 class="text-uppercase">Minhas Tarefas</h5>
          <div class="flex-fill"></div>
          <button
            @click="newTaskModal = true"
            class="btn btn-primary mt-4 me-4"
          >
            Criar tarefa
          </button>
          <div class="form-group">
            <label for="options">Filtrar por:</label>
            <select
              v-model="option"
              class="form-control"
              name="options"
              id="options"
            >
              <option value="all">Todos</option>
              <option value="current">Em andamento</option>
              <option value="done">Concluido</option>
            </select>
          </div>
        </div>
        <hr />
      </div>

      <div v-if="tasksList.length" class="row py-3">
        <div
          v-for="task in tasksList"
          :key="task.id"
          class="col-lg-4 col-md-6 mb-5 d-flex"
        >
          <task-component :task="task" />
        </div>
      </div>
      <div class="py-3" v-else>
        <em>Você ainda não cadastrou nenhuma tarefa :(</em>
      </div>
    </div>
    <el-dialog width="30%" v-model="newTaskModal" class="bg-dark p-3">
      <new-task @close="newTaskModal = false" />
    </el-dialog>
  </div>
</template>
<script>
import TaskComponent from "@/components/manager/TaskComponent.vue";
import NewTask from "@/components/manager/NewTask.vue";
import { mapState } from "vuex";
export default {
  components: { TaskComponent, NewTask },
  data() {
    return {
      option: "all",
      newTaskModal: false,
    };
  },
  computed: {
    ...mapState("tasks", ["tasksList"]),
  },
  mounted() {
    this.$store.dispatch("tasks/getUserTasks", this.$store.state.user.user.id);
  },
  methods: {
    save(i) {
      console.log(i);
    },
  },
};
</script>
<style lang="scss" scoped>
.task-manager-view {
  min-height: 75vh;
}
</style>

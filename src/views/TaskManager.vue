<template>
  <div class="task-manager-view bg-dark">
    <div v-if="loading" class="text-center py-5">
      <div
        class="spinner-border text-primary"
        style="width: 5rem; height: 5rem"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="container py-5">
      <div class="custom-header pt-5">
        <div
          :class="[fullscreen ? 'flex-column' : '']"
          class="d-flex align-items-center"
        >
          <h5 :class="[fullscreen ? 'order-1' : '']" class="text-uppercase">
            Minhas Tarefas
          </h5>
          <div class="flex-fill d-none d-lg-flex"></div>
          <button
            :class="[fullscreen ? 'w-100 mb-4 order-3' : '']"
            @click="newTaskModal = true"
            class="btn btn-primary mt-4 me-lg-4"
          >
            Criar tarefa
          </button>
          <div :class="[fullscreen ? 'w-100 order-2' : '']" class="form-group">
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
          v-for="task in tasks"
          :key="task.id"
          class="col-lg-4 col-md-6 mb-5 d-flex"
        >
          <task-component :task="task" @change="updateList" />
        </div>
      </div>
      <div class="py-3" v-else>
        <em>Você ainda não cadastrou nenhuma tarefa :(</em>
      </div>
    </div>
    <el-dialog
      :fullscreen="fullscreen"
      width="30%"
      v-model="newTaskModal"
      class="bg-dark p-3"
    >
      <new-task @close="close" />
    </el-dialog>
  </div>
</template>
<script>
import TaskComponent from "@/components/manager/TaskComponent.vue";
import NewTask from "@/components/manager/NewTask.vue";
import { mapState } from "vuex";
import { isMobile } from "@/helpers.js";
export default {
  components: { TaskComponent, NewTask },
  data() {
    return {
      option: "all",
      newTaskModal: false,
      tasks: [],
      loading: false,
    };
  },
  computed: {
    ...mapState("tasks", ["tasksList"]),
    fullscreen() {
      if (isMobile()) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.updateList();
  },
  methods: {
    filterByTag(type) {
      if (type == "current") {
        this.tasks = this.tasksList.filter((c) => {
          if (!c.done) {
            return c;
          }
        });
      }
      if (type == "done") {
        this.tasks = this.tasksList.filter((c) => {
          if (c.done) {
            return c;
          }
        });
      }
      if (type == "all") {
        this.tasks = this.tasksList;
      }
    },
    updateList() {
      this.loading = true;
      this.$store
        .dispatch("tasks/getUserTasks", this.$store.state.user.user.id)
        .then(() => {
          this.filterByTag(this.option);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    close(){
      this.newTaskModal = false;
      this.updateList();
    }
  },
  watch: {
    option(newV) {
      this.filterByTag(newV);
    },
  },
};
</script>
<style lang="scss" scoped>
.task-manager-view {
  min-height: 85vh;
}
</style>

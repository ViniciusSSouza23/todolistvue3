<template>
  <div class="task-component w-100 p-4 d-flex flex-column">
    <div class="d-flex align-items-center">
      <small
        >Status: <span>{{ status }}</span></small
      >
      <div class="flex-fill"></div>
      <button @click="confirmationModal = true" class="btn btn-danger">
        X
      </button>
    </div>
    <h3 class="mt-5">
      {{ task.name }}
    </h3>
    <p class="mb-4">{{ task.descricao }}</p>
    <div class="flex-fill"></div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <button
          @click="finishTask"
          :class="[task.done ? 'btn-secondary' : 'btn-success']"
          class="btn w-100"
        >
          <div
            v-if="loading"
            class="spinner-border text-primary spinner-border-md"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>{{ textBtn }}</span>
        </button>
      </div>
    </div>
    <el-dialog v-model="confirmationModal" width="30%" class="bg-dark">
      <confirmation-modal
        @cancel="confirmationModal = false"
        @confirm="exclude"
        copy="Deseja mesmo excluir essa tarefa?"
      />
    </el-dialog>
  </div>
</template>
<script>
import ConfirmationModal from "@/components/ConfirmationModal.vue";
export default {
  components: {
    ConfirmationModal,
  },
  data() {
    return {
      loading: false,
      confirmationModal: false,
    };
  },
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    textBtn() {
      if (this.task.done) {
        return "Desmarcar tarefa";
      } else {
        return "Concluir Tarefa";
      }
    },
    status() {
      if (this.task.done) {
        return "concluída";
      } else {
        return "em andamento";
      }
    },
  },
  methods: {
    finishTask() {
      this.loading = true;
      const payload = { ...this.task };
      payload.done = !this.task.done;
      this.$store
        .dispatch("tasks/updateTask", payload)
        .then(() => {
          this.$store.dispatch(
            "tasks/getUserTasks",
            this.$store.state.user.user.id
          );
        })
        .finally(() => {
          this.loading = false;
          this.$emit("change");
        });
    },
    exclude() {
      this.confirmationModal = false;
      this.loading = true;
      this.$store
        .dispatch("tasks/deleteTask", this.task.id)
        .then(() => {
          this.$store.dispatch(
            "tasks/getUserTasks",
            this.$store.state.user.user.id
          );
        })
        .finally(() => {
          this.loading = false;
          this.$emit("change");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.task-component {
  border-radius: 16px;
  background: #485563;
  background: -webkit-linear-gradient(to right, #29323c, #485563);
  background: linear-gradient(to right, #29323c, #485563);
  min-height: 150px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  small {
    span {
      font-size: 12px;
    }
  }
}
</style>

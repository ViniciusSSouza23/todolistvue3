<template>
  <div class="task-manager-view bg-dark">
    <div class="container py-5">
      <h1 class="text-uppercase text-center mb-5 pb-5">
        Gerencie suas tarefas
      </h1>

      <div class="row">
        <div v-for="i in 20" :key="i" class="col-lg-4 mb-5 d-flex">
          <task-component />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TaskComponent from "@/components/manager/TaskComponent.vue";
export default {
  components: { TaskComponent },
};
</script>

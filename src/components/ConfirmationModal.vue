<template>
  <div class="confirmation-modal p-3">
    <h5 class="text-center text-white mb-5">{{ copy }}</h5>
    <div class="d-flex align-items-center justify-content-center flex-column flex-lg-row">
      <button class="btn btn-secondary me-4" @click="cancel">Cancelar</button>
      <button class="btn btn-danger" @click="confirm">Confirmar</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    copy: {
      type: String,
      default: "Tem certeza?",
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

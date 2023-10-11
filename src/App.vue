<template>
  <div>
    <v-alert
      v-show="alert.status"
      class="alert"
      :color="alert.color"
      width="20%"
      :type="alert.type"
      :title="alert.title"
      :text="alert.text"
    ></v-alert>
    <router-view/>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular indeterminate size="60" color="primary"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['isLoading', 'alert']),
  }
}
</script>
<style scoped>
.alert {
  position: fixed;
  right: 3%;
  top: 10%;
  opacity: 1;
  z-index: 20;
  border-radius: 15px;
}
</style>

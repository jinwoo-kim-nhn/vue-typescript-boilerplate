<template>
  <div>
    <Receptor v-model="message" />
    <Expression :message="message" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Receptor from './Receptor.vue';
import Expression from './Expression.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Receptor,
    Expression
  },
  computed: {
    message(): string {
      return this.$store.state.message;
    }
  }
});
</script>

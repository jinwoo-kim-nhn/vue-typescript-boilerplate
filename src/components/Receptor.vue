<template>
  <div>
    Name :
    <input
      v-model="message"
      type="text" />
    <button type="button" class="button" @click="applyMessage">적용</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {setMessage} from '../store/types';
export default Vue.extend({
  name: 'Receptor',
  model: {
    prop: 'origMessage',
    event: 'change'
  },
  props: {
    origMessage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      message: this.origMessage
    };
  },
  methods: {
    applyMessage(): void {
      this.$store.commit(setMessage, this.message)
    }
  }
});
</script>

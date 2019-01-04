<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'Expression',
  functional: true,
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  
  render(h, context) {
    const message = `Hello!! ${context.props.message}!`;

    return h('div', {
      domProps: {
        innerText: message
      }
    });
  }
});
</script>

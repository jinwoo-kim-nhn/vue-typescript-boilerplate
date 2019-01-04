import Vue from 'vue';
import Vuex from 'vuex';

import * as root from './root';
import * as tools from './tools';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tools,
  },
  plugins: [],
  ...root,
});

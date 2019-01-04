import Vue from 'vue';
import store from './store/index';
import './directives';
import '../assets/css/common.css';
import '../assets/css/example.css';
import App from './components/App';

Vue.config.productionTip = false;

interface Options {
  el: HTMLDivElement;
}

/**
 * @param {object} options - app options
 * @returns {object}  vue instance
 */
export function sampleApp(options: Options) {
  return new Vue({
    el: options.el,
    store,
    render: h => h(App)
  });
}

if (document.getElementById('hello-world-control')) {
  const el: HTMLDivElement = <HTMLDivElement>document.getElementById('hello-world-control');
  sampleApp({el});
}

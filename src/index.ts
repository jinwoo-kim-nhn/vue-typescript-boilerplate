import Vue from 'vue';
import store from './store/index';
import './directives';
import '../assets/css/common.css';
import '../assets/css/example.css';
import App from './components/App';

Vue.config.productionTip = false;

/**
 * @param {object} options - app options
 * @returns {object}  vue instance
 */
export function sampleApp(options: any) {
  const vm = new Vue({
    el: options.el,
    store,
    render: h => h(App)
  });

  return {
    vm
  };
}

if (process.env.NODE_ENV === 'development') {
  const el = document.createElement('div');
  document.body.insertBefore(el, document.body.firstChild);

  (<any>window).sampleApp = sampleApp({el});
}

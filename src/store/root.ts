import {setMessage} from './types';

interface State {
  message: string;
}

export const state = {
  message: 'VUE',
};

export const getters = {};
export const actions = {};
export const mutations = {
  [setMessage](rootState: State, message: string) {
    rootState.message = message;
  },
};

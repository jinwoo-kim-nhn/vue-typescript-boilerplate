import {setMessage} from './types';

interface IState {
  message: string;
}

export const state = {
  message: 'VUE',
};

export const getters = {};
export const actions = {};
export const mutations = {
  [setMessage](rootState: IState, message: string) {
    rootState.message = message;
  },
};

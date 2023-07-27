import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            auth: false,
            user: null,
        };
    },
    mutations: {
        SET_AUTH(state, auth) {
            state.auth = auth;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_AUTH(state) {
            state.auth = false;
        },
        CLEAR_USER(state) {
            state.user = null;
        },
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve) => {
                const data = user;
                commit('SET_AUTH', true);
                commit('SET_USER', data);
                resolve();
            });
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('CLEAR_AUTH');
                commit('CLEAR_USER');
                resolve();
            });
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.auth;
        },
        getUser(state) {
            return state.user;
        },
    },
    plugins: [createPersistedState()]
});
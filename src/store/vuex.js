import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        times: []
    },
    actions: {
        //запрос на фейковый базу данных
        GET_TIMES_FROM_API({commit}) {
            return axios('http://localhost:3000/user', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_TIME_TO_VUEX', response.data)
                })
        }
    },
    mutations: {
        SET_TIME_TO_VUEX: (state, times) => {
            state.times = times
        }
    },
    getters: {
        TIMES(state) {
            return state.times;
        }
    },
})

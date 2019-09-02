import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        trashBoxDatas: {
            "11 45 14 19 19": {
                "position": {
                    "lat": 35.114514,
                    "lng": 135.191981
                },
                "space": 81,
                "things": [ "ペットボトル", "缶" ],
                "log": [[1145141919810, 30],
                        [1145141919811, 31],
                        [1145141919812, 32],
                        [1145141919813, 33],
                        [1145141919814, 34],
                        [1145141919815, 35],
                        [1145141919816, 36],
                        [1145141919817, 37]]
            }
        },
        rdbLoaded: false,
    },

    mutations: {
        setTrashBoxDatas: function (state, dataBaseValue) {
            state.trashBoxDatas = dataBaseValue;
        },

        finishLoad: function (state) {
            state.rdbLoaded = true;
        }
    },

    getters: {
        trashBoxDatas: function (state) {
            return state.trashBoxDatas
        },

        trashBoxLogs: function (state) {
            let logs = [];

            Object.keys(state.trashBoxDatas).forEach(key => {
                const data = {
                    name: key,
                    data: state.trashBoxDatas[key].log,
                };
                logs.push(data);
            });

            return logs;
        },

        trashBoxDataKeys: function (state, getters) {
            return Object.keys(getters.trashBoxDatas)
        },

        matchTrashBoxLog: function (state, getters) {
            return key => getters.trashBoxLogs.find( (v) => v.name === key)
        },
        
        rdbLoaded: function (state) {
            return state.rdbLoaded
        },
    }
})
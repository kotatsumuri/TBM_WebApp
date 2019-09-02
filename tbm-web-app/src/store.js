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

        perfectTrashBoxDatas: function (state,getters) {
            let returnObject = {};
            Object.keys(getters.trashBoxDatas).forEach(key => {
                if(getters.existLogData(key) && getters.existPositionData(key) && getters.existSpaceData(key) && getters.existThingsData(key))
                    returnObject[key] = getters.trashBoxDatas[key];
            })
            return returnObject;
        },

        trashBoxLogs: function (state,getters) {
            let logs = [];

            Object.keys(getters.perfectTrashBoxDatas).forEach(key => {
                const data = {
                    name: key,
                    data: getters.perfectTrashBoxDatas[key].log,
                };
                logs.push(data);
            });

            return logs;
        },

        trashBoxDataKeys: function (state, getters) {
            return Object.keys(getters.perfectTrashBoxDatas)
        },

        existLogData: function (state, getters) {
            return trashBoxDataKey => getters.trashBoxDatas[trashBoxDataKey].log != undefined
        },

        existSpaceData: function (state, getters) {
            return trashBoxDataKey => getters.trashBoxDatas[trashBoxDataKey].space != undefined
        },

        existPositionData: function (state, getters) {
            return trashBoxDataKey => (getters.trashBoxDatas[trashBoxDataKey].position != undefined &&
                                       getters.trashBoxDatas[trashBoxDataKey].position.lng != undefined &&
                                       getters.trashBoxDatas[trashBoxDataKey].position.lat != undefined)
        },

        existThingsData : function (state, getters) {
            return trashBoxDataKey => getters.trashBoxDatas[trashBoxDataKey].things != undefined 
        },

        matchTrashBoxLog: function (state, getters) {
            return key => getters.trashBoxLogs.find( (v) => v.name === key)
        },
        
        rdbLoaded: function (state) {
            return state.rdbLoaded
        },
    }
})
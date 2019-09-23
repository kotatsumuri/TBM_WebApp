import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        trashBoxDatas: {
            "01 31 17 e2 53" : {
                "log" : [ [ 1567410114000, 100 ], [ 1567410115000, 90 ], [ 1567410116000, 75 ], [ 1567410117000, 71 ],[ 1567410118000, 70 ],[ 1567410119000, 60 ],[ 1567410120000, 50 ],[ 1567410121000, 45 ],[ 1567410122000, 40 ],[ 1567410123000, 30 ] ],
                "position" : {
                  "lat" : 31.731584,
                  "lng" : 131.072945
                },
                "space" : 30,
                "things" : [ "設定されていません" ]
              }
        },
        thingsList: ['燃えるゴミ'],
        rdbLoaded: false,
        showHeader: true
    },

    mutations: {
        setTrashBoxDatas: function (state, dataBaseValue) {
            state.trashBoxDatas = dataBaseValue.dataList;
            state.thingsList = dataBaseValue.thingsList;
        },

        finishLoad: function (state) {
            state.rdbLoaded = true;
        },

        showHeader: function (state, val) {
            state.showHeader = val
        }
    },

    getters: {
        trashBoxDatas: function (state) {
            return state.trashBoxDatas
        },

        thingsList: function (state) {
            return state.thingsList
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

        showHeader: function (state) {
            return state.showHeader
        }
    }
})
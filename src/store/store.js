import vue from "vue";
import Vuex from "vuex";
vue.use(Vuex);
import api from "../static/js/api.js"
let store = new Vuex.Store({
	state: {
		online: {},
		alarm:{
			time:[],
			data:[]
		},
	},
	getters: {

	},
	mutations: {
		SET_ONLINE(state, data) {
			state.online = data
		},
		SET_ALARM(state, data) {
			if(state.alarm.time.length>10){
				state.alarm.time.shift();
				state.alarm.time.push(parseInt(Math.random()*100))
				state.alarm.data.shift();
				state.alarm.data.push(parseInt(Math.random()*100*80))
			}else{
				state.alarm.time.push(parseInt(Math.random()*100))
				state.alarm.data.push(parseInt(Math.random()*100*80))
			}
			//state.alarm = data
		}
	},
	actions: {
		GET_ONLINE({
			commit
		},callback) {
			api.getOnline("/",{},function(result){
				commit("SET_ONLINE",result);
				callback();
			})
		},
		GET_ALARM({
			commit
		},callback) {
			api.getAlarm("/alarm",{},function(result){
				commit("SET_ALARM",result);
				callback();
			})
		},
	}
});
export default store;
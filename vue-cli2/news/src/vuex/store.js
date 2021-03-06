/**
 * Created by a123 on 2017/12/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const state = {
  count: 1,
  photoData: []

};

const mutations = {
  add(state,num){
    state.count+=num;
  },
  reduce(state){
    state.count--;
  },
  setPhotoData(state,data){
    state.photoData = data;
  }
};

const getters ={
  count2(state){
    return state.count+100;
  }
}
const actions={
  addAction({commit}){
    commit('add',10);
  },
  reduceAction({commit}){
    commit('reduce');
  },
  changeData({commit},data){
    commit('setPhotoData',data);
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})



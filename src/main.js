// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from "axios"
//将axios挂载到原型上
Vue.prototype.$axios = Axios;
//axios.defaults.baseURL="/api"; 

//导入mint-ui模块
import { Progress,Header, Button, Popup, Search, Actionsheet, Cell, Field } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Popup.name, Popup);
Vue.component(Progress.name, Progress);
Vue.component(Search.name, Search);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入 网站，肯定会 调用 index.js 在刚调用的时候，先从本地存储中，把数据读出来，放到 store 中
//名称
 //let localStorageSetupName = JSON.parse(localStorage.getItem('getSetupName') || '广州微体')
// //收款码
// let localStorageSetupPay = JSON.parse(localStorage.getItem('setupPay'))
// //收费设置
// let localStorageSetupCharge = JSON.parse(localStorage.getItem('setupCharge') || '4')
// //尾联
// let localStorageSetupTail = JSON.parse(localStorage.getItem('setupTail') || '欢迎光临')

let store = new Vuex.Store({
  state: {
    //setupName: localStorageSetupName,
    // setupPay: localStorageSetupPay,
    // setupCharge: localStorageSetupCharge,
    // setupTail: localStorageSetupTail
    setupName: '',
    setupPay: '',
    setupCharge: '',
    setupTail: ''
  },
  mutations: {
    //名称
    setupUpdateName(state, getUpdateName) {
      state.setupName = getUpdateName
      // 当 更新 setupName 之后，把 setupName ，存储到 本地的 localStorage 中
      //localStorage.setItem('getSetupName', JSON.stringify(state.setupName))
    },
    //收款码
    updateSetupPaymentCode(state, getpay) {
      state.setupPay = getpay
      // 当 更新 setupPay 之后，把 setupPay ，存储到 本地的 localStorage 中
     // localStorage.setItem('setupPay', JSON.stringify(state.setupPay))
    },
    //收费
    updateSetupCharge(state, getcharge) {
      state.setupCharge = getcharge
      // 当 更新 setupCharge 之后，把 setupCharge，存储到 本地的 localStorage 中
     // localStorage.setItem('setupCharge', JSON.stringify(state.setupCharge))
    },
    //尾联
    updateSetupTailcouplet(state, gettail) {
      state.setupTail = gettail
      // 当 更新 setupTail 之后，把 setupTail，存储到 本地的 localStorage 中
     // localStorage.setItem('setupTail', JSON.stringify(state.setupTail))
    }
  },
  getters: {
    //名称
    getUpdateSetupName (state) {
      return state.setupName
    },
    //收款码
    getUpdateSetupPaymentCode (state) {
      return state.setupPay
    },
    // 收费
    getUpdateSetupCharge (state) {
      return state.setupCharge
    },
    //尾联
    getUpdateSetupTailcouplet (state) {
      return state.setupTail
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

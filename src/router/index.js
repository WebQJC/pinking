import Vue from 'vue'
import Router from 'vue-router'

import StartCar from '@/components/tarber/startCar.vue'
import StopCar from '@/components/tarber/stopCar.vue'
import SetUp from '@/components/tarber/setUp.vue'

import SetUpName from '@/components/setup/name.vue'
import SetUpChargeing from '@/components/setup/chargeing.vue'
import SetUpPaymentcode from '@/components/setup/paymentcode.vue'
import SetUpTailcouplet from '@/components/setup/tailcouplet.vue'

import StartCarCount from '@/components/startcar/startcarCount.vue'


import Printing from '@/components/print/printing.vue'


Vue.use(Router)

export default new Router({
  routes: [
    
    { path: '/', redirect: '/stopcar' },
    { path: '/startcar', component: StartCar },
    { path: '/stopcar', component: StopCar },
    { path: '/setup', component: SetUp },
    { path: '/setup/name', component: SetUpName, name: 'setupname'},
    { path: '/setup/chargeing', component: SetUpChargeing, name: 'setupchargeing'},
    { path: '/setup/paymentcode', component: SetUpPaymentcode, name: 'setuppaymentcode'},
    { path: '/setup/tailcouplet', component: SetUpTailcouplet, name: 'setuptailcouplet'},


    { path: '/startcar/startcarcount', component: StartCarCount },

    { path: '/print/printing/:id', component: Printing, name: 'printing' }
  ],
  linkActiveClass: 'mui-active'
})

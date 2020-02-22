<template>
    <div class="setup-container">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner" @click="getName">
                    <mt-cell title="名称" is-link>
                      <span style="color: green">{{ $store.getters.getUpdateSetupName }}</span>
                    </mt-cell>
				</div>
                <div class="mui-card-content-inner" @click="getPaymentcode">
                    <mt-cell title="收款码" is-link>
                      <span style="color: green"><div class="img"><img :src="$store.getters.getUpdateSetupPaymentCode" /></div></span>
                    </mt-cell>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner" @click="getChargeing">
                    <mt-cell title="收费设置" is-link>
                      <span style="color: green">{{ $store.getters.getUpdateSetupCharge }}</span>
                    </mt-cell>
				</div>
			    <div class="mui-card-content-inner" @click="getTailcouplet">
                    <mt-cell title="尾联" is-link>
                      <span style="color: green">{{ $store.getters.getUpdateSetupTailcouplet }}</span>
                    </mt-cell>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    methods: {
        //名称跳转到components/setup/name.vue
        getName() {
            this.$router.push({name: 'setupname'})
        },
         //收款码跳转到components/setup/paymentcode.vue
        getPaymentcode() {
            this.$router.push({name: 'setuppaymentcode'})
        },
        //收费设置跳转到components/setup/chargeing.vue
        getChargeing() {
            this.$router.push({name: 'setupchargeing'})
        },
        //尾联设置跳转到components/setup/tailcouplet.vue
        getTailcouplet() {
            this.$router.push({name: 'setuptailcouplet'})
        },

    }
}
</script>

<style lang="less" scoped>
.setup-container{
    .mui-card{
        .mui-card-content{
            .mui-card-content-inner{
                padding: 10px;
                padding-bottom: 0px;
                .img{
                    width: 35px;
                    height: 35px;
                    border: 2px solid red;
                    box-sizing: border-box;
                    //background-color: red;
                    img{
                        width: 100%;
                        
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="printing-container">
        <ul>
            <li>{{ $store.getters.getUpdateSetupName }}</li>
            <li>车牌号：{{ printing.carId }}</li>
            <li>进场时间：{{ printing.stopTime }}</li>
            <li>停车时间：{{ printing.inAllTime }}</li>
            <li>需付费： </li>
            <li><div class="img"><img :src="$store.getters.getUpdateSetupPaymentCode" /></div></li>
            <li>{{ $store.getters.getUpdateSetupTailcouplet }}</li>
        </ul>
        <div class="printing-button">
            <mt-button type="primary" size="large" plain @click="printTickertape">打印</mt-button>
            <mt-button type="danger" size="large" plain @click="signOut">退出</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            id: this.$route.params.id,
            printing: [],
        }
    },
    created() {
        
    },
    mounted() {
        this.getPrintList(this.id)
        //console.log(this.printing)
    },
    methods:{
        //获取打印的数据列表
        getPrintList(id) {
            let print = [];
            for(var i=0; i<6; i++){
                let printingList = {
                    "id": i+1,
                    "carId": "DD123"+i,
                    "stopTime": "2020-11-11 12:12:13",
                    "inAllTime": "1:12"
                }
                print.push(printingList)
            }
            this.printing = print[id-1]
        },
        //退出  返回
        signOut() {
            this.$router.go(-1);
        },
        //打印凭条
        printTickertape() {
            console.log("打印凭条")
        }
    }
}
</script>

<style lang="less" scoped>
    .printing-container{
        padding: 10px;
        text-align: center;
        ul{
            list-style-type:none;
            li{
                margin-bottom: 15px; 
                .img{
                    margin: 0 auto;
                    width: 150px;
                    height: 150px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .printing-button{
            margin: 80px auto;
            .mint-button{
                margin-top: 15px;
            }
        }
    }
</style>
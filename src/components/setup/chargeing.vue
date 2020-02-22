<template>
    <div class="setupname-container">
        <div class="setupname-main">
            <h4>收费/h：</h4><input type="text" placeholder="5" v-model="setupCharge">
        </div>
        <mt-button type="primary" size="large" @click="getFinish">完成</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            setupCharge: ''
        }
    },
    methods: {
        getFinish() {
            if(this.setupCharge == '') return
            this.$store.commit("updateSetupCharge", this.setupCharge)
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
.setupname-container{
    padding: 10px;
    .setupname-main{
        display: flex;
         h4{
            width: 120px;
            margin-top: 11px;
           }
        input{
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 2px solid #000000
        }
    }
    
}
</style>
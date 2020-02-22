<template>
    <div class="setupname-container">
        <div class="setupname-main">
            <h4>尾联：</h4><input type="text" placeholder="欢迎再次光临.." v-model="setuptail">
        </div>
        <mt-button type="primary" size="large" @click="getFinish">完成</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            setuptail: ''
        }
    },
    methods: {
        getFinish() {
            if(this.setuptail == '') return
            this.$store.commit("updateSetupTailcouplet", this.setuptail)
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
            width: 80px;
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
<template>
    <div class="setupname-container">
        <div class="setupname-main">
            <h4>名称：</h4><input type="text" placeholder="广州微体" v-model="updateName">
        </div>
        <!-- v-model="setupname" -->
        <mt-button type="primary" size="large" @click="getFinish">完成</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            updateName: ''
        }
    },
    methods: {
        getFinish() {
            if(this.updateName == '') return
            this.$store.commit("setupUpdateName", this.updateName)
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
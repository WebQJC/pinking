<template>
    <div class="setupname-container">
        <div class="paymentcode">
            <img :src="img" />
        </div>
        <mt-button type="danger" size="large" plain class="upload" @click="actionSheet">上传图片</mt-button>
        <mt-button type="primary" size="large" @click="getFinish">完成</mt-button>        
        <mt-actionsheet
            :actions= "actions"
            v-model="sheetVisible">
        </mt-actionsheet>

    </div>
</template>
<script>
export default {
    data(){
        return{
            img: 'https://b-ssl.duitang.com/uploads/item/201412/01/20141201022458_hmwfA.thumb.700_0.jpeg',
            actions: [
                {
                  name: '从相册中选择', 
                  method : this.getLibrary	// 调用methods中的函数
                }
            ],
            // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
            sheetVisible: false
        }
    },
    methods: {
        //手机图片获取
        actionSheet() {
            this.sheetVisible = true;
        },
        getLibrary(){
            console.log("打开相册")
        },
        //完成上传数据与返回
        getFinish() {
            if(this.img == '') return
            this.$store.commit("updateSetupPaymentCode", this.img)
            this.$router.go(-1);
        },

    }
}
</script>
<style lang="less" scoped>
.setupname-container{
    padding: 10px;
    .paymentcode{
        margin: 10px auto;
        width: 300px;
        height: 300px;
        padding: 10px;
        border: 1px solid #000000;
        background-color: #ffffff;
        border-radius: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .upload{
        margin-bottom: 10px
    }

}
</style>
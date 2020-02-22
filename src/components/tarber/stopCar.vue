<template>
    <div class="stopcar-container">
        <!-- stopcar header -->
        <div class="header">
            <!-- 拍照识别车牌模块 -->
            <mt-button type="default" size="small" class="stopcar-scan" @click="scan">
                <span class="mui-icon-extra mui-icon-extra-sweep"></span>
            </mt-button>
            <!-- 查询车牌号模块 -->
            <div class="stopcar-search">
                <input type="text" placeholder="查询车牌号" v-model="keywords"/>
                <span class="mui-icon mui-icon-search"></span>    
            </div>
            <!-- 输入车牌号模块 -->
            <mt-button type="primary" size="small" class="stopcar-input" @click="inputStopCarCard">输入</mt-button>
        </div>
        <!-- stopcar main 显示停车信息模块-->
        <div class="stopcar-main">
            <div class="mui-card" v-for="item in search(keywords)" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="content">
                            <span>车牌号：{{ item.carId }}</span>
                            <span>停车时间：11</span>
                        </div>
                        <div class="content">
                            <span class="in-time">进场时间：{{ item.stopTime }}</span>
                            <mt-button type="danger" size="small" @click="getprints(item.id)">出场</mt-button>
                        </div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    data() {
        return{
            stopcar:[],
            keywords: '',
        }
    },
    created() {
        //this.postInfo()
        //this.register()
        for(var i=0; i<6 ; i++){
            let stopcarList = {
                "id": i+1,
                "carId": "DD123"+i,
                "stopTime": this.getDate(),
                "inAllTime": "1:12"

            }
            this.stopcar.push(stopcarList)
        }
    },
    mounted() {
       this.getData()
    },
    methods: {
        //测试请求
         getData(){
          // 发送请求
          this.$axios.post('./api/printer/car/submitCommand',
          {
            carNumber: 123,
            operationType: 1
          }
          ).then((response) => {
            console.log(response);
          })
        },


        //获取系统时间-年月日
        getDate() {
            let dt = new Date()
            let y = dt.getFullYear() 
            let m = dt.getMonth() + 1 < 10 ? '0'+(dt.getMonth() + 1) : dt.getMonth() + 1
            let d = dt.getDate() < 10 ? '0'+dt.getDate() : dt.getDate()
            let hh = dt.getHours() < 10 ? '0'+dt.getHours() : dt.getHours()
            let mm = dt.getMinutes() < 10 ? '0'+dt.getMinutes() : dt.getMinutes()
            let ss = dt.getSeconds() < 10 ? '0'+dt.getSeconds() : dt.getSeconds()
             return y + '-' + m + '-' + d + ' '+ hh + ':' + mm + ':' + ss            
        },
        //拍照识别车牌
        scan() {
           console.log("打开照相机")
        },
       //车牌查询
        search(keywords) { // 根据关键字，进行数据的搜索
          return this.stopcar.filter(item => {
            if (item.carId.includes(keywords)) {
              return item
            }
          })
        },
        //监听输入车牌号
        inputStopCarCard() {
           MessageBox.prompt('请输入车牌号', {inputPlaceholder: '输入车牌号'}).then(({ value, action }) => {
               if(value == null) return;
                let carId = {id: this.stopcar.length+1, carId: value, stopTime: this.getDate() }
                this.stopcar.push(carId)
                //console.log(this.stopcar)
            }, () => {
                console.log("点击了取消")
            });
        },
       //汽车出场按钮弹框和跳转
        getprints(id){
            MessageBox({
              title: '确认车品牌号',
              message: this.stopcar[id-1].carId,
              showCancelButton: true,
              confirmButtonHighlight: true,
            }).then(action => {
                if(action === 'confirm'){
                    //跳转到打印页面
                    this.$router.push({ name: "printing", params: { id } })
                    this.stopcar.splice(id-1, 1)
                    
		        }
		        if(action === 'cancel'){
		        	console.log("点击了取消");
		        }
            }).catch(err => {
		        console.log("产生的错误",err);
	        })
        },
    }
}
</script>

<style lang="less" scoped>
.stopcar-container{
    .header{
        padding: 10px;
        display: flex;
        .stopcar-scan{
            margin-right: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        .stopcar-search{
            position: relative;
            .mui-icon-search{
                position: absolute;
                top: 3px;
                left: 6px;
            };
            input{
                height: 32px;
                padding-top: 14px;
                padding-left: 38px 
            }
        }
        
        .stopcar-input{
            text-align: center;
            // margin-right: 10px;
            
            margin-left: 5px
        }
    };
    .stopcar-main{
        .mui-card{
            .mui-card-content{
                .mui-card-content-inner{
                    padding: 10px;
                    .content{
                        display: flex;
                        justify-content: space-between;
                        font-size: 16px;
                        //background-color: yellow;
                        padding: 5px;
                        .mint-button--small{
                            height: 30px;
                        }
                        .in-time{
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style> 
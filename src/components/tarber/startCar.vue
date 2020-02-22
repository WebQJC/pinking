<template>
    <div class="startcar-container">
        <!-- header -->
        <div class="startcar-header">
            <router-link to="/startcar/startcarcount">
                <mt-button type="primary">统计</mt-button>
            </router-link>
            <!-- <router-link to="/startcar/startcarsearch">
                <mt-button type="danger">搜索</mt-button>
            </router-link> -->
            <div class="stopcar-search">
                <input type="text" placeholder="查询车牌号或停车时间" v-model="keywords"/>
                <span class="mui-icon mui-icon-search"></span>    
            </div>
        </div>
        <!-- main -->
        <div class="startcar-main">
            <div class="mui-card" v-for="item in search(keywords)" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="content">
                            <span>车牌号：{{ item.carId }}</span>
                            <span>停车时间：<span class="text-color">{{ item.inAllTime }}</span></span>
                        </div>
                        <div class="content">
                            <span>进场时间：{{ item.stopTime }}</span>
                            <span>费用：<span class="text-color">￥{{ item.stopCost }}</span></span>
                        </div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            startcar: [
                
            ],
            keywords: ''
        }
    },
    created() {
        for(var i=0; i<10; i++){
            let startcarList = {
                "id": i+1,
                "carId": "DD123"+i,
                "stopTime": "2020-1-"+(i+1)+" 11:22:11",
                "inAllTime": "1:12",
                "stopCost": i+16
            }
            this.startcar.push(startcarList)
        }
    },
    mounted() {
        //console.log(this.startcar)
    },
    methods:{
        search(keywords) { // 根据关键字，进行数据的搜索
          return this.startcar.filter(item => {
            if (item.carId.includes(keywords)) {
              return item
            }
            else if(item.stopTime.includes(keywords)) {
                return item
            }
          })
        }
    }
}
</script>

<style lang="less" scoped>
.startcar-container{
    .startcar-header{
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
        .stopcar-search{
            position: relative;
            .mui-icon-search{
                position: absolute;
                top: 9px;
                left: 9px;
            };
            input{
                
                padding-top: 14px;
                padding-left: 40px 
            }
        }
    };
    .startcar-main{
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
                        span{
                            .text-color{
                                color: red
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
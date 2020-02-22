<template>
  <div>
      <!-- header -->
      <mt-header fixed title="项目" class="header">
        <span slot="left" @click="goBack" v-show="flag">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
      <!-- main -->
      <div class="main">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      <!-- tabber -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/startcar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">历史车辆</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/stopcar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">停车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/setup">
				<span class="mui-icon mui-icon-gear-filled"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
    data() {
        return{
            flag: false
        }
    },
    created() {
    this.flag = this.$route.path === "/stopcar" ? false : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if(newVal === "/stopcar") {
        this.flag = false
      }else{
        this.flag = true;
      }
    }
  }
}
</script>

<style>
.main{
    width: 100%;
    margin-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }

.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

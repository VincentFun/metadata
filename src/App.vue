<template>
  <div id="app">
        <!-- 头部导航 -->
        <header class="header">
          <el-row>
              <el-col :span="24">
                <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                  <el-menu-item index="1">任务管理</el-menu-item>
                  <el-menu-item index="2">财务管理</el-menu-item>
                  <el-menu-item index="3">培训管理</el-menu-item>
                  <el-menu-item index="4">用户管理</el-menu-item>
                  <el-menu-item index="5">元数据管理</el-menu-item>
                </el-menu>
              </el-col>
          </el-row>
        </header>
<!--         <div style="position: relative;height: 60px;width: 100%;"></div> -->

        <main>
              <!-- 左侧导航 -->
            <div class="main-left">
              <el-menu default-active="/tableTempManage" class="el-menu-vertical-demo" :router="true">
                <el-menu-item index="/tableTempManage" :class="{'isActive': active}">采集模板元素管理</el-menu-item>
                <el-menu-item index="/tableManage" :class="{'isActive': !active}">存储元数据管理</el-menu-item>
                <el-menu-item index="/ruleManage" :class="{'isActive': !active}">规则管理</el-menu-item>
              </el-menu>
            </div>

              <!-- 右侧主内容区 -->
              <div  class="main-right" >
                  <router-view class="view"></router-view>
              </div>
        </main>

  </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'

Vue.use(Element)

export default {
  name: 'app',
  data: function (){
    return {
      active:true
    }
  },
  created: function(){
    // this.$router.push('/tableTempManage');
  },
  
}
</script>

<style>
body{
  margin: 0;padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 300px!important;}

/* 主内容区 */
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }
</style>

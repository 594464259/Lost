<template>
  <el-container>
    <el-header style="padding: 0 0;">

      <!--      <div class="line"></div>-->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">拾遗</el-menu-item>
        <el-menu-item index="3">消息</el-menu-item>
        <el-menu-item index="4">申请</el-menu-item>
        <el-menu-item index="5">资料</el-menu-item>
      </el-menu>
    </el-header>
    <el-container style="margin: 5% 8%">
      <!--aside放好友列表   header放好友名称    main放聊天内容   footer放聊天框   -->
      <el-aside>
        aside
      </el-aside>
      <el-container>
        <el-header>
          header
        </el-header>
        <el-main>
          main
        </el-main>
        <el-footer>
          footer
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Message',
    data(){
        return{
          activeIndex: '3',
          friends:[
            {
              name: "ming",
              message:[
                "123",
                "456",
                "789"
              ]
            },
            {
              name: "Hong",
              message:[
                "one",
                "two",
                "three"
              ]
            }

          ]
        }
    },
    methods:{
        // goHome(){
        //     this.$router.push({name:'Home'})
        // },
        // goAddItem(){
        //     this.$router.push({name:'AddItem'})
        // },

      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        if(key==='1')
          this.$router.push({name: 'Home'});
        else if(key==='2')
          this.$router.push({name:'AddItem'});
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='5')
          this.$router.push({name:'Zone'});
      }
    }

}
</script>

<style>
  /*.bg {*/
  /*  margin-top: -5px;*/
  /*  width: 100%;*/
  /*  height: 250px;*/
  /*  background:url("../../images/bg.jpg") no-repeat center;*/
  /*  background-size:cover;*/
  /*}*/


  /*.el-container{*/
  /*  !*margin-top: 10%;*!*/
  /*}*/

  /*.el-aside{*/
  /*  background-color: crimson;*/
  /*}*/
  /*.el-main{*/
  /*  background-color: #007bff;*/
  /*}*/

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

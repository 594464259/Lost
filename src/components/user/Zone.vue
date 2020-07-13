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
        <el-menu-item index="6">足迹</el-menu-item>
      </el-menu>
    </el-header>
    <el-container style="padding: 0 10%;">
      <!--aside放好友列表   header放好友名称    main放聊天内容   footer放聊天框   -->
<!--      <el-aside>-->
<!--        aside-->
<!--      </el-aside>-->
        <el-header id="zonebg" height="200px">
<!--          header-->
          <el-row class="demo-avatar demo-basic" style="position: relative; padding-top: 100px;">

            <el-col :span="2" style="position: relative; float: left;">
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="70" :src="defaultAvatar"></el-avatar></div>
              </div>
            </el-col>
            <el-col :span="5" style="float: left">
              <div style="position: relative">xiaoming</div>
            </el-col>
          </el-row>

        </el-header>
      <el-container>
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
  export default {
    name: 'zone',
    data(){
      return{
        userId:'',
        activeIndex: '5',
        defaultAvatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      };
    },
    methods:{
      myInit(){
        this.userId=localStorage.getItem("id");
      },
      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        if(key==='1')
          this.$router.push({name: 'Home'});
        else if(key==='2')
          this.$router.push({name:'AddItem'});
        else if(key==='3')
          this.$router.push({name:'Message'});
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      },
    }
  }
</script>

<style scoped>
  #zonebg{
    height: 200px;
    background: url("../../images/zonebg.png") no-repeat center;
    background-size: 100%;
  }
</style>

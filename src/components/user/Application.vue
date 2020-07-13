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
    <el-container style="margin: 5% 8%;">

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
      <el-aside>
        aside
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Application',
    data(){
      return{
        activeIndex: '4',
      };
    },
    methods:{
        handleSelect(key, keyPath) {
          // console.log(key,keyPath);
          if(key==='1')
            this.$router.push({name: 'Home'});
          else if(key==='2')
            this.$router.push({name:'AddItem'});
          else if(key==='3')
            this.$router.push({name:'Message'});
          else if(key==='5')
            this.$router.push({name:'Zone'});
        }
    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>

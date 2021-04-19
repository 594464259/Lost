<template>
  <div class="myHeader" id="nav" style="padding: 0 0;">

    <!--      <div class="line"></div>-->
    <el-menu
      :default-active="this.index"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!--        <el-avtar src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="float: left"></el-avtar>-->
      <!--        <el-menu-item index="-1" style="font-family: 华文隶书; font-size: 20px"><el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="height: 50px; width: 50px; border-radius: 2rem"></el-image> &nbsp;继续教育学院</el-menu-item>-->
      <!--        <ul><li>1234</li></ul>-->
      <span class="nav-logo" style="position: relative; float: left;">
          <el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="height: 52px; width: 52px; border-radius: 2rem;  margin: 2% 1px 1% 10px; display:  inline-block;vertical-align: middle;"></el-image>
          <span index="-1" style="font-family: 华文隶书; font-size: 20px; color: white; ">
            &nbsp;继续教育学院
          </span>
        </span>

      <el-menu-item index="1" style="margin-left: 8px">首页</el-menu-item>
      <!--        <el-divider direction="vertical"></el-divider>-->
      <el-menu-item index="2">预约</el-menu-item>
      <el-menu-item index="3">咨询</el-menu-item>
      <el-menu-item index="4">预约结果</el-menu-item>
      <el-menu-item index="5">个人资料</el-menu-item>
      <el-menu-item index="6">浏览历史</el-menu-item>
      <!--        <el-submenu index="7">-->
      <!--          <template slot="title">校内站点</template>-->
      <!--          <el-menu-item index="2-1">选项1</el-menu-item>-->
      <!--          <el-menu-item index="2-2">选项2</el-menu-item>-->
      <!--          <el-menu-item index="2-3">选项3</el-menu-item>-->
      <!--          <el-submenu index="2-4">-->
      <!--            <template slot="title">选项4</template>-->
      <!--            <el-menu-item index="2-4-1">选项1</el-menu-item>-->
      <!--            <el-menu-item index="2-4-2">选项2</el-menu-item>-->
      <!--            <el-menu-item index="2-4-3">选项3</el-menu-item>-->
      <!--          </el-submenu>-->
      <!--        </el-submenu>-->

      <el-dropdown @command="handleCommand" style="float: right">

        <el-button type="text" style="padding: 0px 5px 0 0; display: inline-block">
          <!--            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg" ></el-avatar></div>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">编辑资料</el-dropdown-item>
          <el-dropdown-item command="0">退出登录</el-dropdown-item>
          <el-dropdown-item command="e" disabled divided> <small style=" font-weight: bold;font-family: 微软雅黑">自强不息 止于至善</small></el-dropdown-item>
          <!--            <el-dropdown-item command="f" disabled ></el-dropdown-item>-->
        </el-dropdown-menu>

      </el-dropdown>
      <el-menu-item disabled style="float: right;">Welcome Back, {{this.username}}</el-menu-item>
    </el-menu>

  </div>

</template>

<script>
  export default {
    props: {
      index: {
        type: String,
        default: "0"
      },
    },
    name: 'Navbar',
    data:function () {
      return{
        activeIndex: '1',
        id:'',
        username:'请登录',
      }

    },
    methods:{
      handleCommand(command){
        if(command==="1")
          this.goZone()
        else
          this.goLogin()
      },
      // handleMenu(key,keyPath){
      //   if(key==='1'){
      //     this.axios({
      //       method:'GET',
      //       url: '/api/items',
      //       // params:{
      //       //   page: 1,
      //       //   limit: 5
      //       // }
      //     }).then(res=>{
      //       // console.log("begin")
      //       // console.log(res.data)
      //       this.items=res.data
      //     })
      //   }
      //   else{
      //     this.axios({
      //         method:'get',
      //         url:'api/items/category/'+ (key-1)
      //       }
      //     ).then(res=>{
      //       this.items=res.data
      //     })
      //   }
      // },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      myInit:function() {
        // console.log("初始化")

        // console.log(document.cookie)
        // console.log(localStorage.getItem('id'))
        this.id = localStorage.getItem('id')
        this.username=localStorage.getItem('userName')
        console.log(this.id)
        // this.axios({
        //   method: 'GET',
        //   url: '/api/items',
        //   // params:{
        //   //   page: 1,
        //   //   limit: 5
        //   // }
        // }).then(res => {
        //   // console.log("begin")
        //   console.log(res.data)
        //   this.items = res.data
        // })

        this.axios({
          method: 'GET',
          url: '/api/user/' + this.id,
        }).then(res => {
          // console.log(res.data)
          this.username = res.data.realname
          localStorage.setItem('userName',this.username)
          this.phone = res.data.phone
          console.log(this.username)
          // this.credit=res.data.rewards
        })
      },
      goLogin(){
        this.$router.push({name:'Login'})
      },
      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        if(key==='1')
          this.$router.push({name: 'Home'});
        if(key==='2')
          this.$router.push({name:'AddItem'});
        else if(key==='3')
          this.$router.push({name:'Message',params:{itemId:''}});
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='5')
          this.$router.push({name:'Zone'});
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      },
      goZone(){
        this.$router.push({name:'Zone'})
      },

      },
    mounted(){
      this.myInit()
    },



  }
</script>

<style scoped>
  .nav-logo:focus{
    outline: none;
  }

</style>

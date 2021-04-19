<template>
  <div class="page" >
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
        <el-menu-item index="2">预约</el-menu-item>
        <el-menu-item index="3">咨询</el-menu-item>
        <el-menu-item index="4">预约结果</el-menu-item>
        <el-menu-item index="5">个人资料</el-menu-item>
        <el-menu-item index="6">浏览历史</el-menu-item>
        <el-dropdown @command="handleCommand" style="float: right">
          <el-button type="text" style="padding: 0px 5px 0 0;">
            <!--            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="http://img1.imgtn.bdimg.com/it/u=1821568931,2238465560&fm=15&gp=0.jpg"></el-avatar></div>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">编辑资料</el-dropdown-item>
            <el-dropdown-item command="0">退出登录</el-dropdown-item>
            <el-dropdown-item command="e" disabled divided>GL&HF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
<!--        <el-menu-item disabled style="float: right;">Welcome Back, {{this.username}}</el-menu-item>-->
      </el-menu>
    </el-header>

    <div class="container-fluid bg " >
      <h1 style="padding-top: 50px; color: #007bff;">LANDF</h1>
    </div>

    <el-affix :offset="120">
    <div class="myCard fixed-left" style="float: left;">
      <div class="infoCard">
        <img src="../../assets/img/logo.png" class="rounded-circle" alt="Cinque Terre" style="height: 50px; width: 50px; align-self: center; margin-left: 30%; margin-right: 20%; ">
        <ul id="info">
          <p>账号：{{username}}</p>
          <p>姓名：{{credit}}</p>
        </ul>
      </div>
    </div>
    </el-affix>

    <div id="demo" class="carousel slide fixed-right" data-ride="carousel">

      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
          <div class="carousel-caption">
            <h3>LANDF</h3>
            <p>Thanks</p>
          </div>
        </div>D
        <div class="carousel-item">
          <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
          <div class="carousel-caption">
            <h3>拾取东西？</h3>
            <p>遗失</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
          <div class="carousel-caption">
            <h3>弄丢物品？</h3>
            <p>寻找</p>
          </div>
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>

    <div class="card" style="margin-top: 30px">
      <div class="card-body" style="text-align: start">
        <h4 class="card-title">{{item.name}}</h4>
        <!--        <a href="" class="card-title card-link" style="font-size: large">{{item.name}}</a>-->
        <p class="card-text">{{item.details}}</p>
        <!--        <p v-html="item.details"></p>-->
        <a href="#" class="card-link">{{item.address}}</a>
        <br>
        <a href="#" class="card-link">{{item.time}}</a>
        <br>
        <el-image style="width: 100%" :src=item.picture >  </el-image>
        <br>
        <a href="#" class="card-link">发布者{{item.publisherName}}</a>
        <div class="category">
          <span v-if="item.publisherId===this.userId"><el-button type="primary" style="color:black;" disabled>无法联系你自己</el-button></span>
          <span v-if="item.publisherId!=this.userId"><el-button type="primary" href="javascript:void(0)"  @click="goMessage(item.publisherId,item.id)" style="color:black;" round>联系他</el-button></span>
        </div>

        <!--<el-button type="primary" href="javascript:void(0)"  @click="goMessage(item.publisherId,item.id)" style="color:black;" round>联系他</el-button>-->
        <!--        <p>{{item.time}}</p>-->
        <!--        <p>{{item.id}}</p>-->
      </div>
    </div>
    <el-footer id="white" style="background-color: transparent"></el-footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'Detail',
    data:function () {
      return{
        fit:'cover',
        activeIndex: '0',
        userId:'',
        username:'',
        credit:'',
        itemId:'',
        item: {
          // id:'5',
          // name:'英语课本',
          // details:'在图书馆捡到的',
          // time:'2020-3-15'
          id:'',
          name:'',
          address:'',
          time:'',
          details:'',
          picture:'',
          status:'',
          publisherId:'',
          type:'',
          publisherName:'',
        }
      }
    },
    methods:{
      handleCommand(command){
        if(command==="1")
          this.goZone()
        else
          this.goLogin()
      },
      goZone(){
        this.$router.push({name:'Zone'})
      },
      goLogin(){
        this.$router.push({name:'Login'})
      },
      myInit(){
        this.id=localStorage.getItem('id')
        this.axios({
           method:'GET',
           url:'/api/user/'+this.id,
         }).then(res=>{
           this.username=res.data.account
           this.credit=res.data.realname
           this.userId=res.data.id
         })
        this.axios({
          method:'GET',
          url:'api/items/id',
          params:{
            id: this.$route.params.itemId,
            userid: this.id
          }
        }).then(res=>{
          console.log(res)
          this.item.id=res.data.id;
          this.item.name=res.data.name;
          this.item.address=res.data.address;
          this.item.time=res.data.time;
          this.item.details=res.data.details;
          this.item.picture=res.data.picture;
          this.item.status=res.data.status;
          this.item.publisherId=res.data.publisherid;
          this.item.type=res.data.type;
          // console.log(res.data.publisherid)
          this.axios({
            method:'GET',
            url:'/api/user/'+res.data.publisherid,
          }).then(res=>{
            this.item.publisherName=res.data.realname
          })
        })


      },

      goHome(){
        this.$router.push({name:'Home'})
      },
      goMessage(userId,itemId){
        // this.$router.push({name: 'Message',params:{friendId:this.item.publisherId,itemId:this.item.id}})
        this.$router.push({name: 'Message',params:{friendId:userId,itemId:itemId}})
      },
      goAddItem(){
        this.$router.push({name:'AddItem'})
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
        else if(key==='5')
          this.$router.push({name:'Zone'});
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      },
    },

    mounted(){
      this.myInit()
    },
    created () {
      // console.log(this.$route.query.itemId)

      // window.document.body.style.backgroundColor = 'rgba(254, 237, 186, 0.64)'
    },
    computed:mapState({
      // id: state=>state.id
    })
  }
</script>

<style scoped>
  nav{
    position:fixed; /* 绝对定位自，fixed是相对于浏览器窗口定位。 */
    top:0; /* 距离窗百口顶部距离 */
    left:0; /* 距离窗口左边的距离 */
    width:100%; /* 宽度设置为100% */
    height:56px; /* 高度 */
    z-index:99; /* 层叠顺序度，数值越大就越高。页面滚动的时候问就不会被其他内容所遮挡。 */
  }
  /* .container-fluid{
    background-color: #00b2ff;
  } */
  .bg {
    margin-top: -5px;
    width: 100%;
    height: 220px;
    background:url("../../images/bg.jpg") no-repeat center;
    background-size:cover;
  }
  [id="demo"]{
    /*position: fixed;*/
    /*float: inherit;*/
    /*top:100px;*/
    float: right;
    position: relative;
    padding: 30px;
    width: 20%;
    /*margin-bottom: 100%;*/
  }
  .carousel-control-prev{
    left: 32px;
  }
  .carousel-control-next{
    right: 32px;
  }
  .carousel-indicators{
    padding-bottom: 12px;
  }
  .myCard{
    /*position: fixed;*/
    padding: 30px;
    width: 20%;
    height: 400px;
    /*margin-bottom: 100%;*/
  }
  .infoCard{
    padding: 25% 12%;
    height: 340px;
    text-align: start;
    background-color: white;
    border-radius: 5px;
    /*padding-left: 12%*/
  }
  ul[id='info']{
    padding-top: 18%;
    font-size: 15px;
  }
  .el-header{
    line-height: 0px;
  }

  #white{
    background-color: #fef3d2;
  }
</style>

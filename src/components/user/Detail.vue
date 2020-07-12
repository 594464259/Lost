<template>
  <div class="page" >
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li>
          <a class="navbar-brand" href="#">LANDF</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goHome">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goAddItem">拾遗</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goMessage">消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">积分明细</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid bg " >
      <h1 style="padding-top: 50px; color: #007bff;">LANDF</h1>
    </div>
    <div class="myCard fixed-left" style="float: left;">
      <div class="infoCard">
        <img src="../../assets/img/logo.png" class="rounded-circle" alt="Cinque Terre" style="height: 50px; width: 50px; align-self: center; margin-left: 30%; margin-right: 20%; ">
        <ul id="info">
          <p>姓名：{{username}}</p>
          <!-- <p>归还：{{times}}</p> -->
          <p>积分：{{credit}}</p>
        </ul>
      </div>
    </div>

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
        <a href="#" class="card-link">{{item.time}}</a>
        <a href="#" class="card-link">{{item.id}}</a>
        <!--        <p>{{item.time}}</p>-->
        <!--        <p>{{item.id}}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'Detail',
    data:function () {
      return{
        username:'',
        credit:'',
        
        item: {
          // id:'5',
          // name:'英语课本',
          // details:'在图书馆捡到的',
          // time:'2020-3-15'
          thingId:'',
          name:'',
          address:'',
          reward:'',
          time:'',
          details:'',
          picture:'',
          userId:'',
          type:'',
        }
      }
    },
    methods:{
      myInit(){
        // console.log("yigei ")
        this.axios({
          method:'GET',
          url:'/api/user/'+this.$store.state.id,
        }).then(res=>{
          // console.log(res.data)
          this.username=res.data.username
          this.credit=res.data.rewards
        })        
      },
      goHome(){
        this.$router.push({name:'Home'})
      },
      goMessage(){
        this.$router.push({name: 'Message'})
      },
      goAddItem(){
        this.$router.push({name:'AddItem'})
      }
    },
    created () {
      this.myInit()
      // window.document.body.style.backgroundColor = 'rgba(254, 237, 186, 0.64)'
    },
    computed:mapState({
      id: state=>state.id
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
    margin-bottom: 100%;
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
    margin-bottom: 100%;
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
</style>

<template>
  <div class="page" >
    <div class="header">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li>
          <a class="navbar-brand" href="#">LANDF</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">首页</a>
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
      <h1 style="padding-top: 125px; color: #007bff;">LANDF</h1>
    </div>
  </div>
  <el-row :gutter="0">
    <div class="myContainer">
    <el-col :span="5" style="height: 100%;">
    <div class="myCard" style=" height: 100%;">
      <div class="infoCard">
        <img src="../../assets/img/logo.png" class="rounded-circle" alt="Cinque Terre" style="height: 50px; width: 50px; align-self: center; margin-left: 30%; margin-right: 20%; ">
        <ul id="info">
            <!-- <p>ID:{{this.$store.state.id}}</p> -->
            <!-- <p>ID: {{id}}</p> -->
            <p>姓名：{{username}}</p>
            <!-- <p>归还：{{times}}</p> -->
            <p>积分：{{credit}}</p>
        </ul>
      </div>
    </div>
    </el-col>
    <el-col :span="14">
    <div class="things" style="position: relative;">
      <div class="card" v-for="item in items" :key="item.thingId" style="margin-top: 30px;">
        <div class="card-body" style="text-align: start">
          <!-- <h4 class="card-title"><a href="javascript:void(0)">{{item.name}}</a></h4> -->
          <h3 class="card-titile"><a class="card-link" href="javascript:void(0)"  @click="goDetail" style="color:black;">{{item.name}}</a></h3>
          <br>
          <p><a v-html="item.details"></a></p>
          <small>{{transferTime(item.time)}}</small>
          <!-- <a href="javascript:void(0)" class="card-link">{{transferTime(item.time)}}</a>  -->
          <!-- <a href="javascript:void(0)" class="card-link">{{item.thingid}}</a> -->

        </div>
      </div>
    </div>      
    </el-col>
    <el-col :span="5">
    <div id="demo" class="carousel slide" data-ride="carousel" style="">

  
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>


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


      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>
    </el-col>

</div>
  </el-row>
    <div class="footer">
      <el-pagination
      @current-change="changePage"
        background
        layout="prev, pager, next"
        :total="100" style="height: 100%;">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
  export default {
    name: 'Home',
    data:function () {
      return{
        id:'',
        username:'请登录',
        credit:0,
        items:[],
// {
//           id: 1,
//           name: '智能手机',
//           details: '黑色的',
//           time: '2020-5-20'
//         },{
//           id: 2,
//           name: '羽毛球牌',
//           details: '<img src="https://i0.hdslb.com/bfs/archive/e62b6b095ef38dfb742687f11e4b570dde420b5d.png">',
//           time: '2020-5-11'
//         },{
//           id:3,
//           name:'海豹',
//           details: '该杀',
//           time: '2020-5-10'
//         },
//         {
//           id: 4,
//           name: '智能手机',
//           details: '黑色的',
//           time: '2020-5-20'
//         },{
//           id: 5,
//           name: '羽毛球牌',
//           details: '<img src="https://i0.hdslb.com/bfs/archive/e62b6b095ef38dfb742687f11e4b570dde420b5d.png">',
//           time: '2020-5-11'
//         },{
//           id:6,
//           name:'海豹',
//           details: '该杀',
//           time: '2020-5-10'
//         }
        page: 1,
        limit: 10,
        
        currentPage:1,
      }
    },
    methods:{
      myInit:function(){
        console.log("初始化")

        // console.log(document.cookie)
        // console.log(localStorage.getItem('id'))
        this.id=localStorage.getItem('id')
        this.axios({
          method:'GET',
          url: '/api/items',
          // params:{
          //   page: 1,
          //   limit: 5
          // }
        }).then(res=>{
          // console.log("begin")
          console.log(res.data)
        this.items=res.data
        })

        this.axios({
          method:'GET',
          url:'/api/user/'+this.id,
        }).then(res=>{
          // console.log(res.data)
          this.username=res.data.username
          this.credit=res.data.rewards
        })
      },
      goAddItem:function() {
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name:'AddItem'})
      },
      goMessage:function() {
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name:'Message'})
      },
      goDetail(){
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name:'Detail'})
      },
      changePage:function (currentPage) {
          this.axios({
          method:'GET',
          url: '/api/items',
          params:{
            page: currentPage,
            limit: 5
          }
        }).then(res=>{
          // console.log("begin")
          // console.log(res.data)
        this.items=res.data
        })
      },

      transferTime:function(cTime){
       var jsonDate = new Date(parseInt(cTime));
       Date.prototype.format = function (format){
             var  o = {
                  "y+": this.getFullYear(),
                  "M+": this.getMonth()+1,
                  "d+": this.getDate(),
                  "h+": this.getHours(),
                  "m+": this.getMinutes(),
                  "s+": this.getSeconds()
             };

             if(/(y+)/.test(format)){
                  format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
             }

             for(var k in o){
                  if(new RegExp("("+k+")").test(format)){
                      format = format.replace(RegExp.$1, RegExp.$1.length == 1?o[k] : ("00" + o[k]).substr("" + o[k].length));
                  }
             }
             return format;
       };
       var newDate = jsonDate.format("yyyy-M-d h:m:s");
       return newDate
    }

    },
    mounted(){
      this.myInit()
    },
    created() {

    },
  }
</script>

<style scoped>
html{
  height: 100%;
  width: 100%;
}
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
    height: 250px;
    background:url("../../images/bg.jpg") no-repeat center;
    background-size:cover;
  }
  #demo{
    /*position: fixed;*/
    /*float: inherit;*/
    /*top:100px;*/

    top: 5%;
    position: sticky;
    padding: 30px;
    width: 100%;
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
  .myContainer{
    position: relative;
  }
  .myCard{
    top: 5%;
    position: sticky;

    padding: 30px;
    width: 100%;
    height: 400px;
    margin-bottom: 100%;
  }
  .infoCard{
    padding: 25% 12%;
    height: 340px;
    text-align: start;
    background-color: white;
    border-radius: 5px;
  }
  ul[id='info']{
    padding-top: 18%;
    font-size: 15px;
  }

  .footer{
    position: relative;
    height: 50px;
    margin: 30px 0;
  }
  

</style>

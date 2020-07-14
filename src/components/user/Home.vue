<template>
  <div class="page" >
    <el-header id="nav" style="padding: 0 0;">

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
        <el-menu-item disabled style="float: right;">Welcome Back, {{this.username}}</el-menu-item>
      </el-menu>

    </el-header>

    <div class="container-fluid bg " >
      <h1 style="padding-top: 125px; color: #007bff;">LANDF</h1>
    </div>
<!--  </div>-->
  <el-row :gutter="0">
    <div class="myContainer">
    <el-col :span="5" style="height: 100%;">
      <el-col :span=18 style="margin: 10% 8%;">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleMenu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-money"></i>
            <span slot="title">现金</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-headset"></i>
            <span slot="title">电子</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-bank-card"></i>
            <span slot="title">证件</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-shopping-bag-1"></i>
            <span slot="title">衣服</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">文具</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-loading"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-col>
<!--    <div class="myCard" style=" height: 100%;">-->
<!--      <div class="infoCard">-->
<!--        <img src="../../assets/img/logo.png" class="rounded-circle" alt="Cinque Terre" style="height: 50px; width: 50px; align-self: center; margin-left: 30%; margin-right: 20%; ">-->
<!--        <ul id="info">-->
<!--            &lt;!&ndash; <p>ID:{{this.$store.state.id}}</p> &ndash;&gt;-->
<!--            &lt;!&ndash; <p>ID: {{id}}</p> &ndash;&gt;-->
<!--            <p>姓名：{{username}}</p>-->
<!--            &lt;!&ndash; <p>归还：{{times}}</p> &ndash;&gt;-->
<!--            <p>电话：{{phone}}</p>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
    </el-col>
    <el-col :span="14">
    <div class="things" style="position: relative;width: 100%">
      <div class="card" v-for="item in items" :key="item.Id" style="margin-top: 30px;">
        <div class="card-body" style="text-align: start">
          <div class="category" style="float: right">类别:
            <span v-if="item.type===1"><i class="el-icon-money"></i>现金</span>
            <span v-if="item.type===2"><i class="el-icon-headset"></i>电子</span>
            <span v-if="item.type===3"><i class="el-icon-bank-card"></i>证件</span>
            <span v-if="item.type===4"><i class="el-icon-shopping-bag-1"></i>衣服</span>
            <span v-if="item.type===5"><i class="el-icon-notebook-1"></i>文具</span>
            <span v-if="item.type===6"><i class="el-icon-loading"></i>其他</span>
          </div>
          <!-- <h4 class="card-title"><a href="javascript:void(0)">{{item.name}}</a></h4> -->
          <h3 class="card-titile"><a class="card-link" href="javascript:void(0)"  @click="goDetail(item.id)" style="color:black;">{{item.name}}</a></h3>

          <br>
          <el-image style="float: left;margin-right:10px;width: 100px; height: 100px" :src=item.picture :fit="fit" lazy>  </el-image>
          <p><a v-html="item.details"></a></p>
          <br>
          <br>
          <br>
          <small>{{item.time}}</small>
<!--          <small>{{transferTime(item.time)}}</small>-->
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
        fit:'cover',
        activeIndex: '1',
        id:'',
        username:'请登录',
        phone:'',
        // credit:0,
        items:[],
        page: 1,
        limit: 10,

        currentPage:1,
      }
    },
    methods:{
      handleCommand(command){
        if(command==="1")
          this.goZone()
        else
          this.goLogin()
      },
      handleMenu(key,keyPath){
        if(key==='1'){
          this.axios({
            method:'GET',
            url: '/api/items',
            // params:{
            //   page: 1,
            //   limit: 5
            // }
          }).then(res=>{
            // console.log("begin")
            // console.log(res.data)
            this.items=res.data
          })
        }
        else{
          this.axios({
            method:'get',
            url:'api/items/category/'+ (key-1)
            }
          ).then(res=>{
            this.items=res.data
          })
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      myInit:function(){
        // console.log("初始化")

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
          this.username=res.data.realname
          this.phone=res.data.phone
          // this.credit=res.data.rewards
        })


      },
      goLogin(){
        this.$router.push({name:'Login'})
      },
      goDetail(itemId){
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name:'Detail',params:{itemId:itemId}})
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

        this.items=res.data
        })
      },
      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        // if(key==='1')
        //   this.$router.push({name: 'Home'});
        if(key==='2')
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
      goZone(){
        this.$router.push({name:'Zone'})
      },
      transferTime:function(cTime){

       // var jsonDate = new Date(parseInt(cTime));
       // Date.prototype.format = function (format){
       //       var  o = {
       //            "y+": this.getFullYear(),
       //            "M+": this.getMonth()+1,
       //            "d+": this.getDate(),
       //            "h+": this.getHours(),
       //            "m+": this.getMinutes(),
       //            "s+": this.getSeconds()
       //       };
       //
       //       if(/(y+)/.test(format)){
       //            format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
       //       }
       //
       //       for(var k in o){
       //            if(new RegExp("("+k+")").test(format)){
       //                format = format.replace(RegExp.$1, RegExp.$1.length == 1?o[k] : ("00" + o[k]).substr("" + o[k].length));
       //            }
       //       }
       //       return format;
       // };
       // var newDate = jsonDate.format("yyyy-M-d h:m:s");
       // return newDate
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
  #nav{
    line-height: 0px;
  }

</style>

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

    <div class="container-fluid footprintbg ">
      <h1 style="padding-top: 125px;">我的足迹</h1>
    </div>


    <el-row :gutter="0">
      <div class="myContainer">
        <el-col :span="5" style="height: 100%;">
          <div class="myCard" style=" height: 100%;">
            <div class="infoCard">
              <img src="../../assets/img/logo.png" class="rounded-circle" alt="Cinque Terre"
                   style="height: 50px; width: 50px; align-self: center; margin-left: 30%; margin-right: 20%; ">
              <ul id="info">
                <!-- <p>ID:{{this.$store.state.id}}</p> -->
                <!-- <p>ID: {{id}}</p> -->
                <p>ID: {{id}}</p>
                <p>姓名：{{username}}</p>
                <!-- <p>归还：{{times}}</p> -->
                <p>积分：{{credit}}</p>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="things" style="position: relative;">
            <div class="card" v-for="(item,index) in items" :key="item.Id" style="margin-top: 30px;">
              <div class="card-body" style="text-align: start">
                <!-- <h4 class="card-title"><a href="javascript:void(0)">{{item.name}}</a></h4> -->
                <h3 class="card-titile">
                  <a class="card-link" href="javascript:void(0)" @click="goDetail(item.id)"
                                           style="color:black;">{{item.name}}
                  </a>
                  <el-button type="danger" icon="el-icon-delete" circle style="float:right;" @click="delFootprint(index,item.id)"></el-button>
                </h3>
                <br>
                <p><a v-html="item.details"></a></p>
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
              </div>
              D
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

  </el-container>
</template>

<script>
  export default {
    name: 'Footprint',
    data: function () {
      return {
        activeIndex: '6',
        id: '',
        username: '请登录',
        credit: 0,
        items: [],
        page: 1,
        limit: 10,

        currentPage: 1,
      }
    },
    methods:{

      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        if(key==='1')
          this.$router.push({name: 'Home'});
        else if(key==='2')
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
      myInit: function () {
        console.log('初始化')

        // console.log(document.cookie)
        // console.log(localStorage.getItem('id'))
        this.id = localStorage.getItem('id')
        this.axios({
          method: 'GET',
          // url: '/api/items',
          url: '/api/footprint',
          params:{
            userid:this.id

          }
          // params:{
          //   page: 1,
          //   limit: 5
          // }
        }).then(res => {
          // console.log("begin")
          console.log(res.data)
          this.items = res.data
        })

        this.axios({
          method: 'GET',
          url: '/api/user/' + this.id,
        }).then(res => {
          // console.log(res.data)
          this.username = res.data.account
          this.credit = 0
          this.username = res.data.account
          console.log(res.data)
        })
      },
      //
      // goAddItem:function() {
      //   // this.$store.dispatch('getUser',this.$store.state.id)
      //   this.$router.push({name:'AddItem'})
      // },
      // goMessage:function() {
      //   // this.$store.dispatch('getUser',this.$store.state.id)
      //   this.$router.push({name:'Message'})
      // },
      goDetail (itemId) {
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name: 'Detail', params: {itemId: itemId}})
      },
      delFootprint(index,itemid){
        this.$confirm('将删除该足迹, 是否确定?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(index,itemid);
          this.axios({
            method: 'DELETE',
            url: '/api/footprint',
            params:{
              userid:this.id,
              itemid:itemid
            }
          }).then(res => {
            // console.log("begin")
            console.log(res.data)
            // if(res.data === 1){
            //   this.toast('删除成功');    //轻提示
            //   this.items.splice(index, 1);    //删除数组中的该条数据
            // }
            if(res.data == 1){
              // this.toast('删除成功');    //轻提示
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              this.items.splice(index, 1);    //删除数组中的该条数据
            }
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        // }).then(() => {
        //   that.$ajax.get('https://Trainee/delTrainee',
        //     {
        //       params: {
        //         trainee_id: id
        //       }
        //     }).then(
        //     res => {
        //       if(res.data.code === 1){
        //         that.$toast('删除成功');    //轻提示
        //         that.data.splice(index, 1);    //删除数组中的该条数据
        //       }
        //     }
        //   )
        // }).catch(() => {
        //   // on cancel
        // });
      },
      changePage: function (currentPage) {
        this.axios({
          method: 'GET',
          url: '/api/items',
          params: {
            page: currentPage,
            limit: 5
          }
        }).then(res => {
          // console.log("begin")
          // console.log(res.data)
          this.items = res.data
        })
      },
      transferTime: function (cTime) {

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
    mounted () {
      this.myInit()
    },
    created () {

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
  .footprintbg {
    margin-top: -5px;
    width: 100%;
    height: 250px;
    background:url("../../images/footprintbg.jpg") no-repeat center;
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

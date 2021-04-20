<template>
  <div class="page">
<!--    <el-header id="nav" style="padding: 0 0;">-->

<!--      &lt;!&ndash;      <div class="line"></div>&ndash;&gt;-->
<!--      <el-menu-->
<!--        :default-active="activeIndex"-->
<!--        class="el-menu-demo"-->
<!--        mode="horizontal"-->
<!--        @select="handleSelect"吧-->
<!--        background-color="#545c64"-->
<!--        text-color="#fff"-->
<!--        active-text-color="#ffd04b"-->
<!--      >-->
<!--        <el-menu-item index="1">首页</el-menu-item>-->
<!--        <el-menu-item index="2">预约</el-menu-item>-->
<!--        <el-menu-item index="3">咨询</el-menu-item>-->
<!--        <el-menu-item index="4">预约结果</el-menu-item>-->
<!--        <el-menu-item index="5">个人资料</el-menu-item>-->
<!--        <el-menu-item index="6">浏览历史</el-menu-item>-->
<!--        <el-dropdown @command="handleCommand" style="float: right">-->
<!--          <el-button type="text" style="padding: 0 5px 0 0;">-->
<!--            &lt;!&ndash;            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>&ndash;&gt;-->
<!--            <div class="block" style="float: right; margin: 5px 5px 0 0">-->
<!--              <el-avatar :size="50"-->
<!--                         src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg"></el-avatar>-->
<!--            </div>-->
<!--          </el-button>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item command="1">编辑资料</el-dropdown-item>-->
<!--            <el-dropdown-item command="0">退出登录</el-dropdown-item>-->
<!--            <el-dropdown-item command="e" disabled divided>GL&HF</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </el-dropdown>-->
<!--      </el-menu>-->
<!--    </el-header>-->
    <Navbar index="4"></Navbar>

    <div class="container-fluid applicationbg ">
      <h1 style="padding-top: 125px; color: #FFFFFF;">历史申请记录</h1>
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
        <el-col :span="14" style="border: 1px solid transparent">
          <div class="things" style="position: relative;">
            <div class="card" v-for="item in items" :key="item.Id" style="margin-top: 30px;">
              <div class="card-body" style="text-align: start">
                <!-- <h4 class="card-title"><a href="javascript:void(0)">{{item.name}}</a></h4> -->
                <h3 class="card-titile">
                  <a class="card-link" href="javascript:void(0)" @click="goDetail(item.itemid)"
                     style="color:black;">{{item.itemName}}
                  </a>
                  <div v-if="item.status === 0">
                    <el-button type="info" style="float: right" round>预约中</el-button>
                  </div>
                  <div v-else-if="item.status === -1">
                    <el-button type="danger" style="float: right" round>已取消</el-button>
                  </div>
                  <div v-else-if="item.status === 1">
                    <el-button type="success" style="float: right" round>预约失败</el-button>
                  </div>
                </h3>
                <br>
                <div v-if="item.status === '-1'">
                  <el-button type="success" style="float: right">成功</el-button>
                </div>
<!--                <p><a v-html="item.picture"></a></p>-->

                <el-image style="float: left;margin-right:10px;width: 100px; height: 100px" :src=item.picture :fit="fit" lazy>  </el-image>
                <small>{{item.time}}</small>
                <p>我的证据</p>
                <br>
                <small>拾主: {{item.finderName}}</small>
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




          </div>
        </el-col>

      </div>
    </el-row>
<Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default {
    components:{
      Navbar,
      Footer
    },
    name: 'Application',
    data: function () {
      return {
        fit: 'cover',
        activeIndex: '4',
        id: '',
        username: '请登录',
        credit: 0,
        items: [],
        page: 1,
        limit: 10,

        currentPage: 1,
      }
    },

    methods: {

        myInit: function () {
          console.log('初始化')

          // console.log(document.cookie)
          // console.log(localStorage.getItem('id'))
          this.id = localStorage.getItem('id')
          this.axios({
            method: 'GET',
            url: '/api/application/'+this.id,
            // params:{
            //   userid:this.id
            //
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
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleCommand (command) {
        if (command === '1') {
          this.goZone()
        } else {
          this.goLogin()
        }
      },
      goZone () {
        this.$router.push({name: 'Zone'})
      },
      goLogin () {
        this.$router.push({name: 'Login'})
      },
      goDetail (itemId) {
        // this.$store.dispatch('getUser',this.$store.state.id)
        this.$router.push({name: 'Detail', params: {itemId: itemId}})
      },
      handleSelect (key, keyPath) {
        // console.log(key,keyPath);
        if (key === '1') {
          this.$router.push({name: 'Home'})
        } else if (key === '2') {
          this.$router.push({name: 'AddItem'})
        } else if (key === '3') {
          this.$router.push({name: 'Message', params: {itemId: ''}})
        } else if (key === '5') {
          this.$router.push({name: 'Zone'})
        } else if (key === '6') {
          this.$router.push({name: 'Footprint'})
        }
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
  .applicationbg {
    margin-top: -5px;
    width: 100%;
    height: 250px;
    background:url("../../images/applicationbg.jpg") no-repeat center;
    background-size:cover;
  }
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

  #nav {
    line-height: 0px;
  }

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

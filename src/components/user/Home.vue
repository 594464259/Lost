<template>
  <div class="page">
<!--    https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E7%99%BE%E5%B9%B4%E6%A0%A1%E5%BA%861.jpeg-->
<!--    <div class="myHeader" id="nav" style="padding: 0 0;">-->

<!--      &lt;!&ndash;      <div class="line"></div>&ndash;&gt;-->
<!--      <el-menu-->
<!--        :default-active="activeIndex"-->
<!--        class="el-menu-demo"-->
<!--        mode="horizontal"-->
<!--        @select="handleSelect"-->
<!--        background-color="#545c64"-->
<!--        text-color="#fff"-->
<!--        active-text-color="#ffd04b"-->
<!--      >-->
<!--&lt;!&ndash;        <el-avtar src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="float: left"></el-avtar>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-menu-item index="-1" style="font-family: 华文隶书; font-size: 20px"><el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="height: 50px; width: 50px; border-radius: 2rem"></el-image> &nbsp;继续教育学院</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;        <ul><li>1234</li></ul>&ndash;&gt;-->
<!--        <span class="nav-logo" style="position: relative; float: left;">-->
<!--          <el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="height: 52px; width: 52px; border-radius: 2rem;  margin: 2% 1px 1% 10px; display:  inline-block;vertical-align: middle;"></el-image>-->
<!--          <span index="-1" style="font-family: 华文隶书; font-size: 20px; color: white; ">-->
<!--            &nbsp;继续教育学院-->
<!--          </span>-->
<!--        </span>-->

<!--        <el-menu-item index="1">首页</el-menu-item>-->
<!--&lt;!&ndash;        <el-divider direction="vertical"></el-divider>&ndash;&gt;-->
<!--        <el-menu-item index="2">预约</el-menu-item>-->
<!--        <el-menu-item index="3">咨询</el-menu-item>-->
<!--        <el-menu-item index="4">预约结果</el-menu-item>-->
<!--        <el-menu-item index="5">个人资料</el-menu-item>-->
<!--        <el-menu-item index="6">浏览历史</el-menu-item>-->
<!--&lt;!&ndash;        <el-submenu index="7">&ndash;&gt;-->
<!--&lt;!&ndash;          <template slot="title">校内站点</template>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item index="2-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item index="2-2">选项2</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item index="2-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-submenu index="2-4">&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">选项4</template>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="2-4-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="2-4-2">选项2</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item index="2-4-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-submenu>&ndash;&gt;-->

<!--        <el-dropdown @command="handleCommand" style="float: right">-->

<!--          <el-button type="text" style="padding: 0px 5px 0 0; display: inline-block">-->
<!--&lt;!&ndash;            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>&ndash;&gt;-->
<!--            <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg" ></el-avatar></div>-->
<!--          </el-button>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item command="1">编辑资料</el-dropdown-item>-->
<!--            <el-dropdown-item command="0">退出登录</el-dropdown-item>-->
<!--            <el-dropdown-item command="e" disabled divided> <small style=" font-weight: bold;font-family: 微软雅黑">自强不息 止于至善</small></el-dropdown-item>-->
<!--&lt;!&ndash;            <el-dropdown-item command="f" disabled ></el-dropdown-item>&ndash;&gt;-->
<!--          </el-dropdown-menu>-->

<!--        </el-dropdown>-->
<!--        <el-menu-item disabled style="float: right;">Welcome Back, {{this.username}}</el-menu-item>-->
<!--      </el-menu>-->

<!--    </div>-->
    <Navbar index="1"></Navbar>

<!--    div高度一直为351，图片高度显示不全；放缩窗口，div高度高于img-->
  <div  style=" margin-top: -1px; ">
    <el-carousel style="">
      <el-carousel-item v-for="pic in XM" :key="pic.index" style=" display: flex;justify-content: center ;">
        <el-image :src="pic.image" style="width:100%;max-width: 100%; display: -webkit-flex;vertical-align:bottom; float: left;"></el-image>
        <!--            <h3 class="small" style="z-index: 2;">{{ pic.title }}</h3>-->
      </el-carousel-item>
    </el-carousel>
  </div>

  <el-row :gutter="0" style="">

    <div class="myContainer" style="min-width: 750px;">

    <el-col id="0" :span="4" style="margin-top:45px;margin-left:3%;border: 1px solid transparent;min-width: 120px;">
      <affix  :offset="20">
      <el-col id="1" :span=18 style=" width: 90%; ">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleMenu"
          background-color="#1e2228"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="border-radius: 0 1rem 0 1rem;"
          >

          <el-menu-item index="1" style="background-color: transparent;border-radius: 0 1rem 0 0;">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
          </el-menu-item>
          <el-menu-item index="2" style="background-color: transparent">
            <i class="el-icon-s-opportunity"></i>
            <span slot="title">植发</span>
          </el-menu-item>
          <el-menu-item index="3" style="background-color: transparent">
            <i class="el-icon-headset"></i>
            <span slot="title">儿科</span>
          </el-menu-item>
          <el-menu-item index="4" style="background-color: transparent">
            <i class="el-icon-bank-card"></i>
            <span slot="title">外科</span>
          </el-menu-item>
          <el-menu-item index="5" style="background-color: transparent">
            <i class="el-icon-shopping-bag-1"></i>
            <span slot="title">内科</span>
          </el-menu-item>
          <el-menu-item index="6" style="background-color: transparent">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">神经</span>
          </el-menu-item>
          <el-menu-item index="7" style="background-color: transparent;border-radius: 0 0 0 1rem;">
            <i class="el-icon-loading"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      </affix>
    </el-col>

    <el-col :span="13" style="border: 1px solid transparent">
    <div class="things" style="position: relative;width: 100%;">
      <div class="card" v-for="item in items" :key="item.Id" style="margin-top: 30px;">
        <div class="card-body" v-if="item!==null" style="text-align: start">
          <div class="category" style="float: right">类别:
            <span v-if="item.type===1"><i class="el-icon-money"></i>植发</span>
            <span v-if="item.type===2"><i class="el-icon-headset"></i>儿科</span>
            <span v-if="item.type===3"><i class="el-icon-bank-card"></i>外科</span>
            <span v-if="item.type===4"><i class="el-icon-shopping-bag-1"></i>内科</span>
            <span v-if="item.type===5"><i class="el-icon-notebook-1"></i>神经</span>
            <span v-if="item.type===6"><i class="el-icon-loading"></i>其他</span>
          </div>
          <!-- <h4 class="card-title"><a href="javascript:void(0)">{{item.name}}</a></h4> -->
          <h3 class="card-titile"><a class="card-link" href="javascript:void(0)"  @click="goDetail(item.id)" style="color:black;">{{item.name}}</a></h3>

          <br>
          <el-image style="float: left;margin-right:2%;width: 100px; height: 100px;" :src=item.picture :fit="fit" lazy>  </el-image>
          <p><a v-html="item.details"></a></p>
          <br>
          <br>
          <br>
          <small style="float: right">{{transferTime(item.time)}}</small>
<!--          <small>{{transferTime(item.time)}}</small>-->
          <!-- <a href="javascript:void(0)" class="card-link">{{transferTime(item.time)}}</a>  -->
          <!-- <a href="javascript:void(0)" class="card-link">{{item.thingid}}</a> -->

        </div>
<!--        <div class="card-body" v-if="item===''" style="text-align: start">-->
<!--          <span>NULL</span>-->
<!--          <span>abc</span>-->
<!--        </div>-->
      </div>


    </div>
    </el-col>

      <el-col :span="4" style="margin-top: 45px; margin-left: 2% ; position: sticky;float: top;width: 20%;min-width: 150px; ">
        <affix :offset="55">
<!--        <span class="demonstration">Click 指示器触发</span>-->
        <el-carousel  >
          <el-carousel-item v-for="pic in titles" :key="pic.title" style="z-index: 1">
            <el-image :src="pic.image" style="border-radius: 0.5rem"></el-image>
<!--            <h3 class="small" style="z-index: 2;">{{ pic.title }}</h3>-->
          </el-carousel-item>
        </el-carousel>
        </affix>
      </el-col>

  </div>
  </el-row>
    <div class="footer">
      <el-pagination
      @current-change="changePage"
        background
        layout="prev, pager, next"
        :total="100" style="height: 100%; ">
      </el-pagination>
    </div>
    <Footer></Footer>

<!--    回到顶部-->
<!--    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
  </div>

</template>

<script>
// import {mapState} from 'vuex'
import Footer from '@/components/Footer'
import Affix from '@/components/Affix';
import Navbar from '@/components/Navbar'
  export default {
    components: {
      Affix,
      Navbar,
      Footer
    },
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
        limit: 5,

        currentPage:1,


        XM:[
          {
            index:1,
            image:"https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E7%99%BE%E5%B9%B4%E6%A0%A1%E5%BA%861.jpeg"
          },
          {
            index:2,
            image:"https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/百年校庆2.jpeg"
          }

        ],
        titles:[
          {
            title:"XM",
            image:"https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E8%BD%AE%E6%92%AD/d774961bae2ddbc68993b1dfea6e1c3d.jpeg"
          },

          {
            title:"DSB",
            image:"https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E8%BD%AE%E6%92%AD/62aa517d9d16212d9823ce84d043de43.jpeg"
          },

          {
            title:"爪八",
            image:"https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E8%BD%AE%E6%92%AD/215edeb56dfa241ca54ad2b6644dacf9.jpeg"
          }
        ],

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
      transferTime:function(cTime){
        // return cTime;
        let DateString = cTime.toString()
        let cDate = new Date(DateString);
        // 注意js里面的getMonth是从0开始的
        let FormattedDateTime =
          cDate.getFullYear() + '年' +
          (cDate.getMonth() + 1) + '月' +
          cDate.getDate() + '日 ' +
          cDate.getHours() + ':' +
          cDate.getMinutes() + ':' +
          cDate.getSeconds();
        return FormattedDateTime;
       // var jsonDate = new Date(parseInt(cTime));
       // console.log(jsonDate)
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
    computed: {
      indexs() {
        this.activeIndex=this.index;
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
    height: 425px;
    min-height: 33%;
    background:url("https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/%E7%99%BE%E5%B9%B4%E6%A0%A1%E5%BA%861.jpeg") no-repeat center;
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

  .nav-logo:focus{
    outline: none;
  }


</style>


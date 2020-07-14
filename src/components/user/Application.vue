<template>
  <el-container>
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
          <el-button type="text" style="padding: 0 5px 0 0;">
            <!--            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="http://img1.imgtn.bdimg.com/it/u=1821568931,2238465560&fm=15&gp=0.jpg"></el-avatar></div>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">编辑资料</el-dropdown-item>
            <el-dropdown-item command="0">退出登录</el-dropdown-item>
            <el-dropdown-item command="e" disabled divided>GL&HF</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </el-header>
    <el-container style="margin: 5% 8%;">

<!--      <el-aside>-->
<!--        aside-->
<!--      </el-aside>-->
      <el-container>
        <el-header style="line-height: 60px;text-align: start; background-color: aliceblue">
<!--          header-->
          <span style=" font-family: 华文仿宋,serif; font-size: 35px; font-weight: bolder">历史申请记录</span>
        </el-header>
        <el-main>
<!--          main-->
          <el-table
            :data="application.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>
          <small> <i class="el-icon-message"></i> 反馈：123456@163.com</small>
        </el-footer>
      </el-container>
<!--      <el-aside>-->
<!--        aside-->
<!--      </el-aside>-->
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Application',
    data(){
      return{
        userId:'',
        activeIndex: '4',
        myApplication:[],


        application: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
          {
            id:'',
            userId:''
          },
          {

          },
          {

          }],

        search: ''


      };
    },
    methods:{
      myInit(){
        this.userId=localStorage.getItem('id')
        this.axios({
          method:'GET',
          url:'api/application',
          data:{
            userId: this.userId
          }

        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
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
          else if(key==='6')
            this.$router.push({name:'Footprint'});
        }
    },
    mounted () {

    }
  }
</script>

<style scoped>
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
  #nav{
    line-height: 0px;
  }
</style>

<template>
  <div class="page">
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
<!--    <div class="header">-->
<!--    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">-->
<!--      <ul class="navbar-nav">-->
<!--        <li>-->
<!--          <a class="navbar-brand" href="#">LANDF</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" href="#" @click="goHome">首页</a>-->
<!--        </li>-->
<!--        <li class="nav-item active">-->
<!--          <a class="nav-link" href="#" >拾遗</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" href="#" @click="goMessage">消息</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <a class="nav-link disabled" href="#">积分明细</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
    <div class="container-fluid bg " >
      <h1 style="padding-top: 125px; color: #007bff;">LANDF</h1>
    </div>
<!--  </div>-->
    <!-- <div class="top_text">失物招领统计</div>  el-col-24 -->
    <div class="myForm">
    <div>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="物品 类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <!-- <el-radio v-for="item in type" :key="item.key" :label="item.key">{{item.value}}</el-radio> -->
            <el-radio label="0">拾取</el-radio>
            <el-radio label="1">遗失</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="物品 名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="拾/遗区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择拾取/丢失区域">
            <el-option label="学生公寓" value="学生公寓"></el-option>
            <el-option label="海韵教学楼" value="海韵教学楼"></el-option>
            <el-option label="图书馆" value="图书馆"></el-option>
            <el-option label="海韵食堂" value="海韵食堂"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="拾/遗时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->

        <el-form-item label="详细 描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>


  </div>
</template>

<script>
// import {mapState} from 'vuex'
  export default {
    name: 'AddItem',
    data(){
      return{
        activeIndex:'2',
        userId:'',
        ruleForm:{
          userId:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
        // delivery: false,
        // type: [{
        //   key: 0,
        //   value: '拾取'
        // },
        // {
        //   key:1,
        //   value:'丢失'
        // }],
        type: '0',
        // resource: '',
        desc: '',
        },
         rules: {
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择丢失/拾取区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          // type: [
          //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          // ],
          // resource: [
          //   { required: true, message: '请选择活动资源', trigger: 'change' }
          // ],
          desc: [
            { required: true, message: '请填写详细描述', trigger: 'blur' }
          ]
        },


//
        item:{
          thingId:'',
          name:'',
          address:'',
          time:'',
          details:'',
          picture:'',
          isFound:false,
        },
      }
    },
    created(){
      console.log(localStorage.getItem("id"))
      this.userId=localStorage.getItem("id")
      // console.log(this.$store.state.id)
      // console.log(this.ruleForm.type)
    },
    methods:{
    submitForm(formName) {
      let myForm={
                //后端问题，没有将userId插入
                name:this.ruleForm.name,
                address:this.ruleForm.region,
                reward: 10,
                time:this.ruleForm.date1,
                details:this.ruleForm.desc,
                userId:this.userId,
                type:this.ruleForm.type
              };
        console.log(myForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.axios({
              method:'post',
              url:'/api/items',
              data:myForm
            }).then(res=>{
              console.log(res);
              if(res.data===1){
                this.message.success("上传成功")
                this.$router.push({name:'Home'})
              }
            })
          } else {
            console.log('error submit!!');
            this.message.warning("填写错误")
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      //
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },


      addImg:function(){

      },
      upload:function () {
        this.addImg();
      },

      goHome(){
        this.$router.push({name:'Home'})
      },
      goMessage(){
        this.$router.push({name: 'Message'})
      },
      handleSelect(key, keyPath) {
        // console.log(key,keyPath);
        if(key==='1')
          this.$router.push({name: 'Home'});
        // if(key==='2')
        //   this.$router.push({name:'AddItem'});
        else if(key==='3')
          this.$router.push({name:'Message'});
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='5')
          this.$router.push({name:'Zone'})
      },
    }
  }
</script>
<style scoped>
  /* @import url(); */

  @import "../../css/add.css";
  @import "../../css/main.css";
  /*@import "http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css";*/
  /* .navbar{
    margin-top: -60px;
    height: 65px;
  } */
  .page{
    text-align: center;
    align-items: center;
  }
  .bg {
    margin-top: -5px;
    width: 100%;
    height: 250px;
    background:url("../../images/bg.jpg") no-repeat center;
    background-size:cover;
  }

  .myForm{
    border-radius: 0.2rem;
    background: white;
    padding: 2%;
    padding-right: 3%;
    margin: 5% 35%;
    width: 30%;
    text-align: start;
  }

</style>

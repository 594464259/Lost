<template>
  <div class="page">
<!--    <el-header style="padding: 0 0;">-->

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
<!--        <el-menu-item index="1">首页</el-menu-item>-->
<!--        <el-menu-item index="2">预约</el-menu-item>-->
<!--        <el-menu-item index="3">咨询</el-menu-item>-->
<!--        <el-menu-item index="4">预约结果</el-menu-item>-->
<!--        <el-menu-item index="5">个人资料</el-menu-item>-->
<!--        <el-menu-item index="6">浏览历史</el-menu-item>-->
<!--        <el-dropdown @command="handleCommand" style="float: right">-->
<!--          <el-button type="text" style="padding: 0px 5px 0 0;">-->
<!--            &lt;!&ndash;            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>&ndash;&gt;-->
<!--            <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg"></el-avatar></div>-->
<!--          </el-button>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item command="1">编辑资料</el-dropdown-item>-->
<!--            <el-dropdown-item command="0">退出登录</el-dropdown-item>-->
<!--            <el-dropdown-item command="e" disabled divided>GL&HF</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </el-dropdown>-->
<!--&lt;!&ndash;        <el-menu-item disabled style="float: right;">Welcome Back, {{this.username}}</el-menu-item>&ndash;&gt;-->
<!--      </el-menu>-->
<!--    </el-header>-->

    <Navbar index="2"></Navbar>

    <div class="container-fluid bg " >
      <h1 style="padding-top: 125px; color: #007bff;"></h1>
    </div>
<!--  </div>-->
    <!-- <div class="top_text">失物招领统计</div>  el-col-24 -->
    <div class="myForm">
    <div>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<!--        <el-form-item label="物品 类型" prop="type">-->
<!--          <el-radio-group v-model="ruleForm.type">-->
<!--            &lt;!&ndash; <el-radio v-for="item in type" :key="item.key" :label="item.key">{{item.value}}</el-radio> &ndash;&gt;-->
<!--            <el-radio label="0">拾取</el-radio>-->
<!--            <el-radio label="1">遗失</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
        <el-form-item label="疾病名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="预约类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择类别">
            <el-option label="植发" value="1"></el-option>
            <el-option label="儿科" value="2"></el-option>
            <el-option label="外科" value="3"></el-option>
            <el-option label="内科" value="4"></el-option>
            <el-option label="神经" value="5"></el-option>
            <el-option label="其他" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择预约区域">
            <el-option label="演武分院" value="演武分院"></el-option>
            <el-option label="翔安分院" value="翔安分院"></el-option>
<!--            <el-option label="图书馆" value="图书馆"></el-option>-->
<!--            <el-option label="海韵食堂" value="海韵食堂"></el-option>-->
<!--            <el-option label="其他" value="其他"></el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item label="预约时间" required>
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

        <el-upload
          class="upload-demo"
          ref="upload"
          action
          :limit="limitNum"
          :before-upload="beforeAvatarUpload"
          :on-remove="handleRemove2"
          :http-request="myUpload"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">(请先等待图片上传成功，再提交病例)</div>
        </el-upload>

        <el-form-item label="症状描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即预约</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>


  </div>
</template>

<script>
// import {mapState} from 'vuex'
  import Navbar from '@/components/Navbar'
export default {
    name: 'AddItem',
  components: {Navbar},
  data(){
      return{
        limitNum:1,
        fileList:[],
        pictureUrl:'',
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
          type: '',
          status: '0',
        // resource: '',
          desc: '',
        },
         rules: {
          name: [
            { required: true, message: '请输入物品名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择拾取区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            {required: true, message: '请至少选择一种类型', trigger: 'change' }
          ],
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
      // console.log(localStorage.getItem("id"))
      this.userId=localStorage.getItem("id")
      // console.log(this.$store.state.id)
      // console.log(this.ruleForm.type)
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
    submitForm(formName) {
      let myForm={
                //后端问题，没有将userId插入
                name:this.ruleForm.name,
                address:this.ruleForm.region,
                // reward: 10,
                time:this.ruleForm.date1,
                details:this.ruleForm.desc,
                publisherid:this.userId,
                // status: this.ruleForm.status,
                type:this.ruleForm.type,
                picture: this.pictureUrl
              };
        // console.log(myForm)
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
                this.$message.success("上传成功")
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
          this.$router.push({name:'Message',params:{itemId:''}});
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='5')
          this.$router.push({name:'Zone'});
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      },
      // 手动上传操作
      submitUpload() {
        // 触发自定义的上传方法 myUpload
        this.$refs.upload.submit();
      },
      // 覆盖默认的上传行为，自定义上传的实现，有几个文件就会调用这个方法几次
      myUpload(fileObj) {
        var myDate = new Date()
        this.$message.warning("正在上传，请耐心等候")
        let formData = new FormData();
        formData.set('key', "images/"+fileObj.file.name);
        formData.set('file', fileObj.file);
        console.log(formData)
        this.axios({
          method:'POST',
          url:'https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/',
          data: formData
        }).then(res=>{
          console.log(res)
          if(res.status===204)
            this.$message.success("上传成功")
          this.pictureUrl='https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/'+fileObj.file.name;
        }).catch(err=>{
          // this.$message.error("上传失败")
          this.$message.success("上传成功")
        })
      },
      // 上传前的钩子函数
      beforeAvatarUpload(file) {
        // 文件格式
        const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
        // 文件大小
        const size = file.size / 1024 / 1024;
        if (size > 100) {
          this.$notify({
            title: '警告',
            message: '文件大小不得超过100MB！',
            type: 'warning'
          });
        }
      },
      handleRemove2(file, fileList) {
        let fileLists = [];
        fileList.forEach(function (elem) {
          let item = {
            name: elem.name,
            url: ''
          };
          fileLists.push(item);
        });
        this.fileList = fileLists;
      }
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
  .el-header{
    line-height: 0px;
  }
  .upload-demo{
    margin-left: 100px;
  }
</style>

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
    <el-container style="padding: 0 10%;">
      <!--aside放好友列表   header放好友名称    main放聊天内容   footer放聊天框   -->
<!--      <el-aside>-->
<!--        aside-->
<!--      </el-aside>-->
        <el-header id="zonebg" height="200px">
<!--          header-->
          <el-row class="demo-avatar demo-basic" style="position: relative; padding-top: 100px;">

            <el-col :span="2" style="position: relative; float: left;width: 80px">
              <div class="demo-basic--circle" style="width: 70px">
                <div class="block"><el-avatar :size="70" :src="defaultAvatar"></el-avatar></div>
              </div>
            </el-col>
            <el-col :span="8" style="float: left">
<!--              {{username}}-->
              <div style="position: relative;float: left;"  id="username">{{basic.account}}</div>
            </el-col>
          </el-row>

        </el-header>
      <el-container>
        <el-main style="padding: 80px 30% 0 30%;">
<!--          main-->
          <el-form ref="basic" :model="basic" :rules="basicRule" label-width="80px">
            <el-form-item label="真实姓名">
              <el-input v-model="basic.realName"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="basic.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存修改</el-button>
              <el-button type="primary" @click="dialogFormVisible = true">修改密码</el-button>
            </el-form-item>
          </el-form>

<!--          <el-button type="primary" @click="dialogFormVisible = true">修改密码</el-button>-->
          <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="40%"  @close="closeDialog">
            <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-form">
              <el-form-item label="原密码" prop="password">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="form.newPassword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPassword">
                <el-input type="password" v-model="form.checkPassword" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="changePass">确 定</el-button>
            </div>
          </el-dialog>


        </el-main>
        <el-footer>
          <small> <i class="el-icon-message"></i> 反馈：123456@163.com</small>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'zone',
    data(){
      var validateOld = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入原密码'));
          }else {
            callback();
          }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.form.checkPassword !== '') {
            this.$refs.form.validateField('checkPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        dialogFormVisible: false,
        userId:'',
        activeIndex: '5',
        defaultAvatar:'http://img1.imgtn.bdimg.com/it/u=1821568931,2238465560&fm=15&gp=0.jpg',
        basic:{
          account:'',
          realName:'',
          phone:''
        },
        form:{
          password:'',
          newPassword:'',
          checkPassword:''
        },


        basicRule:{
          phone:[
            {required:true, message:'手机号不能为空',trigger:'blur'},
          //  手机号规则
          ]
        },

        rules: {
          password:[
            {validator:validateOld, trigger:'blur'}
          ],
          newPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };

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
      closeDialog(){
        this.$refs.form.resetFields()
      },
      onSubmit() {
        // console.log('submit!');
        this.axios({
          method:'PUT',
          url:'api/user/modify',
          data:{
            // user: {
              id: this.userId,
              realname: this.basic.realName,
              phone: this.basic.phone
            // }
          }
        }).then(res=>{
          // console.log(res)
          if(res.data===1)
            this.$message.success("修改成功")
          else
            this.$message.error("修改失败")
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      changePass(){
        if(this.form.newPassword===this.form.checkPassword){
          this.axios({
            method: 'PUT',
            url: 'api/user/modifyPassword',
            data:{
              id: localStorage.getItem("id"),
              oldPass: this.form.password,
              newPass: this.form.checkPassword
            }
          }).then(res=>{
            // console.log(res)
            if(res.data===1){
              this.dialogFormVisible=false;
              this.$message.success("修改成功")
            }
            else{
              this.dialogFormVisible=false;
              this.$message.error("修改失败")
            }
          })
        }
      },
      myInit(){
        this.userId=localStorage.getItem("id");
        this.axios.get('api/user/'+ this.userId).then(res=>{
          // console.log(res);
          // this.$message.warning("我们不会泄露您的信息")
          this.basic.account=res.data.account;
          this.basic.realName=res.data.realname;
          this.basic.phone=res.data.phone;
        })
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
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      },
    },
    mounted () {
      this.myInit();
    }
  }
</script>

<style scoped>
  #zonebg{
    height: 200px;
    background: url("../../images/zonebg.png") no-repeat center;
    background-size: 100%;
    line-height: 60px;
  }
  #username{
    font-size: 27px;
    font-weight: 700;
    color: #ffffff;
    font-family: "微软雅黑",serif;
  }
  .el-main{
    background-color: #E9EEF3;
  }
  .el-footer{
    background-color: #B3C0D1;
  }
  #nav{
    line-height: 0;
  }
</style>

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
        <el-dropdown @command="handleCommand" style="float: right">
          <el-button type="text" style="padding: 0px 5px 0 0;">
            <!--            更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <div class="block" style="float: right; margin: 5px 5px 0 0"><el-avatar :size="50" src="https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg"></el-avatar></div>
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
    <el-container  style="margin: 5% 15%;height: 550px;">
      <!--aside放好友列表   header放好友名称    main放聊天内容   footer放聊天框   -->
      <el-aside >
        <el-col :span="24">
          <h6 style="margin: 15px 0 5px 25px;text-align: start">好友列表</h6>
          <el-divider></el-divider>
          <el-menu
            @select="handleMenu"
            :default-active="(activeFriend+'')"
            class="el-menu-vertical-demo"
            background-color="rgb(211, 220, 230)"
            text-color="#fff"
            active-text-color="blue"
            v-for="friend in recentFriends" :key="friend.id"
          >
                <el-menu-item  :index="(friend.id+'')">

                  <i class="el-icon-message"></i>
                  <span slot="title" style="font-weight: 800;font-size: 20px;">{{friend.realname}}</span>
                </el-menu-item>
<!--            <el-menu-item index="2">-->
<!--              <i class="el-icon-menu"></i>-->
<!--              <span slot="title">导航二</span>-->
<!--            </el-menu-item>-->
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header  style="line-height: 60px;text-align: start">
          正在聊天
        </el-header>
        <el-main id="Message">
<!--          main-->
<!--          {{this.messageRecord}}-->

          <div v-for="mess in messageRecord" :key="mess.id" style="">
            <div v-if="(mess.receiver+'') === userId" style="width: 60%;text-align: start;float: left;">
              <el-col :span="3" style="">
                <br>
                <br>
                <el-avatar src="http://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/friend.gif" style=" "> </el-avatar>
              </el-col>
              <el-col :span="19">
                <small><span style="color: red; font-weight: 700">{{currentFriend.realname}}</span> </small>

                <el-card shadow="always">
                  {{mess.content}}
                </el-card>
              </el-col>
            </div>

            <div v-else style="width: 60%;text-align: end;float: right;">
              <el-col :span="19">
              <small> <span style="color: red;font-weight: 700">{{userName}}</span></small>
                <el-card shadow="always">
                  {{mess.content}}
                </el-card>
              </el-col>
              <el-col :span="3">
                <br>
                <br>
              <el-avatar src="http://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/anjielina.jpg"></el-avatar>
              </el-col>
            </div>
          </div>
        </el-main>
        <el-footer id="textArea" height="160px" style="padding: 0;">

<!--          footer-->
<!--          <small> <i class="el-icon-message"></i> 反馈：123456@163.com</small>-->
          <el-form ref="form" :model="form" label-width="0">
            <el-col :span="19">
            <el-form-item style="">
              <el-input type="textarea" :rows="7"  v-model="form.content"></el-input>
            </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item style="margin-top: 20%">
                <el-button type="primary" @click="onSubmit">立即发送</el-button>
              </el-form-item>
            <el-form-item v-show="itemFinder!==''" style="margin-top: 0">
              <el-button type="primary" @click="dialogFormVisible = true">申请认领</el-button>
            </el-form-item>
            </el-col>
          </el-form>

          <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="40%"  @close="closeDialog">
<!--            <el-form :model="applicationForm" status-icon ref="form" label-width="100px" class="demo-form">-->
<!--              <el-form-item label="原密码" prop="password">-->
<!--                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item label="新密码" prop="newPassword">-->
<!--                <el-input type="password" v-model="form.newPassword" autocomplete="off"></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item label="确认密码" prop="checkPassword">-->
<!--                <el-input type="password" v-model="form.checkPassword" autocomplete="off"></el-input>-->
<!--              </el-form-item>-->
<!--            </el-form>-->
<!--            <div slot="footer" class="dialog-footer">-->
<!--              <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--              <el-button type="primary" @click="changePass">确 定</el-button>-->
<!--            </div>-->

            <el-upload
              class="upload-demo"
              ref="upload"
              action
              :limit="limitNum"
              :before-upload="beforeAvatarUpload"
              :on-remove="handleRemove"
              :http-request="myUpload"
              :file-list="fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">服务器容量有限，尽量不要上传大文件！</div>
            </el-upload>
          </el-dialog>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Message',
    data(){
        return{
          limitNum:1,
          fileList:[],

          dialogFormVisible: false,
          userId:'',
          userName:'',

          activeIndex: '3',

          activeFriend:'',
          currentFriend:'',

          sourceItemId:'',
          itemFinder:'',
          recentFriends:[],

          messageRecord:[],

          form:{
            sender:'',
            receiver:'',
            content:'',
          },
          applicationForm:{
            userid:'',
            finderid:'',
            itemid:'',
            picture:''
          },
        }
    },
    methods:{
      closeDialog(){
        this.$refs.form.resetFields()
      },
      // 手动上传操作
      submitUpload() {
        // 触发自定义的上传方法 myUpload
        this.$refs.upload.submit();
      },
      // 覆盖默认的上传行为，自定义上传的实现，有几个文件就会调用这个方法几次
      myUpload(fileObj) {
        this.$message.warning("正在上传，请耐心等候")
        let formData = new FormData();
        formData.set('key', "images/"+fileObj.file.name);
        formData.set('file', fileObj.file);
        console.log(formData)
        this.axios({
          method:'POST',
          url:'https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/',
          data: formData
        }).then(res=>{
          // console.log(res)
          if(res.status===204)
            this.$message.success("上传成功,请等待提交")
          this.applicationForm.userid=this.userId
          this.applicationForm.finderid=this.activeFriend
          this.applicationForm.itemid=this.sourceItemId

          console.log(this.applicationForm)
          this.applicationForm.picture='https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/'+fileObj.file.name;
          this.axios({
            method:'POST',
            url:'api/application',
            data:this.applicationForm
          }).then(res=>{
            if((res.data+'')==='1')
              this.$message.success("申请提交成功")
            else
              this.$message.error("申请提交失败")
          }).catch(err=>{
            this.$message.error("申请提交失败")
            console.log(err)
          })
          // this.pictureUrl='https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/'+fileObj.file.name
        }).catch(err=>{
          this.$message.error("图片上传失败")
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
      handleRemove(file, fileList) {
        let fileLists = [];
        fileList.forEach(function (elem) {
          let item = {
            name: elem.name,
            url: ''
          };
          fileLists.push(item);
        });
        this.fileList = fileLists;
      },

      onSubmit(){
        this.form.sender=this.userId
        this.form.receiver=this.activeFriend

        let temp=this.form
        this.axios({
          method:'POST',
          url:'api/letter',
          data: this.form,
        }).then(res=>{
          if((res.data+'')==='1'){
            this.$notify({
              title: '成功',
              message: '消息发送成功',
              type: 'success'
            });

            this.messageRecord=this.messageRecord.concat([temp])

            // this.form.content=''
          }
        })

      },
      handleMenu(key,keyPath){
        this.activeFriend=key

        this.axios({
          method:'GET',
          url:'api/user/'+key,

        }).then(res=>{
          // console.log(res)
          this.currentFriend=res.data
        })

        // console.log("key="+key)
          this.axios({
            method:'GET',
            url:'api/letter/friend/'+ key,
            params:{
              userId: this.userId
            }
          }).then(res=>{
            // console.log(res)
            this.messageRecord=res.data;

            let div=document.getElementById('Message');
            console.log(div.className)
            div.scrollTop=div.scrollHeight;
          })
      },
      myInit(){
        this.userId=localStorage.getItem('id')
        // this.getRecentFriends();

        this.axios({
          method:'GET',
          url:'api/user/'+this.userId,

        }).then(res=>{
          // console.log(res)
          this.userName=res.data.realname
        });

        this.axios({
          method:'GET',
          url:'api/letter/friend',
          params:{
            userId: this.userId,
          }
        }).then(res=>{
          this.recentFriends=res.data;
          this.activeFriend=this.recentFriends[0].id.toString();

          // console.log(this.activeFriend)
          this.sourceItemId=this.$route.params.itemId;
          // this.$route.params.friendId;
          if(this.sourceItemId===null||this.sourceItemId===''){
            // this.$message.success("哦耶色")
            // console.log(this.recentFriends)
            // console.log(this.recentFriends[0])
            this.activeFriend=this.recentFriends[0].id;
            this.axios({
              method:'GET',
              url:'api/letter/friend/'+ this.activeFriend,
              params:{
                userId: this.userId
              }
            }).then(res=>{
              // console.log(res)
              this.messageRecord=res.data;

              let div=document.getElementById('Message');
              div.scrollTop=div.scrollHeight
              console.log(div.scrollTop)
            })
          }else {
            // console.log(this.sourceItemId)
            // this.$message.success("你一定是从天堂来的美人")
            this.axios({
              method: 'get',
              url: 'api/user/' + this.$route.params.friendId,
            }).then(res => {
              console.log(res)
              this.itemFinder = res.data;
              this.activeFriend=this.itemFinder.id
              console.log(this.itemFinder)
              this.recentFriends=[this.itemFinder].concat(this.recentFriends)

              this.axios({
                method:'GET',
                url:'api/letter/friend/'+ this.activeFriend,
                params:{
                  userId: this.userId
                }
              }).then(res=>{
                // console.log(res)
                this.messageRecord=res.data;

                let div=document.getElementById('Message');
                console.log(div.className)
                div.scrollTop=div.scrollHeight;
              })


            })
          }
          this.axios({
            method:'GET',
            url:'api/user/'+this.activeFriend,

          }).then(res=>{
            // console.log(res)
            this.currentFriend=res.data
          })
        })




      },
      getRecentFriends(){
        this.axios({
          method:'GET',
          url:'api/letter/friend',
          params:{
            userId: this.userId,
          }
        }).then(res=>{
          this.recentFriends=res.data;
          // console.log(this.recentFriends[0].id)
          this.activeFriend=this.recentFriends[0].id.toString();
          console.log(this.activeFriend)
        })
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
        else if(key==='4')
          this.$router.push({name:'Application'});
        else if(key==='5')
          this.$router.push({name:'Zone'});
        else if(key==='6')
          this.$router.push({name:'Footprint'});
      }
    },
  mounted () {

  },
  created () {
      this.myInit();
  }

}
</script>

<style>
  /*.bg {*/
  /*  margin-top: -5px;*/
  /*  width: 100%;*/
  /*  height: 250px;*/
  /*  background:url("../../images/bg.jpg") no-repeat center;*/
  /*  background-size:cover;*/
  /*}*/


  /*.el-container{*/
  /*  !*margin-top: 10%;*!*/
  /*}*/

  /*.el-aside{*/
  /*  background-color: crimson;*/
  /*}*/
  /*.el-main{*/
  /*  background-color: #007bff;*/
  /*}*/

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
  .el-header{
    line-height: 0px;
  }
  #Message{
    line-height: 15px;
  }

</style>

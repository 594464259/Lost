<template>
  <el-container>
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


    <el-button @click="RSA">RSA加密文件名</el-button>
  </el-container>
</template>

<script>
  // import {JSEncrypt} from '"https://cdn.bootcss.com/jsencrypt/3.0.0-beta.1/jsencrypt.js"'

  export default {
    name: 'Upload',
    data(){
      return{
        limitNum:1,
        fileList:[]
      }
    },
    methods: {
      RSA(){
        let PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8HMr2CBpoZPm3t9tCVlrKtTmI4jNJc7/HhxjIEiDjC8czP4PV+44LjXvLYcSV0fwi6nE4LH2c5PBPEnPfqp0g8TZeX+bYGvd70cXee9d8wHgBqi4k0J0X33c0ZnW7JruftPyvJo9OelYSofBXQTcwI+3uIl/YvrgQRv6A5mW01QIDAQAB';
        let encrypt = new JSEncrypt();
        encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
        let str = {
          "uid":"1223334",
          "pwd":"asd"
        }
        let encrypted = encrypt.encrypt(JSON.stringify(str));
        console.log('加密前数据:%o', str);
        console.log('加密后数据:%o', encrypted);
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
            this.$message.success("上传成功")
          // this.pictureUrl='https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/'+fileObj.file.name
        }).catch(err=>{
          this.$message.error("上传失败")
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
      }
    }
  }
</script>

<style scoped>

</style>

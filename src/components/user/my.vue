<template>
<!--  <div>-->
<!--    &lt;!&ndash; 123456 &ndash;&gt;-->
<!--    <el-upload-->
<!--     action="api/upload"-->
<!--     :on-preview="handlePreview"-->
<!--     :auto-upload="false"-->
<!--     :multiple="false"-->
<!--     accept=".jpg, .png"-->
<!--     :on-change="ImgReq"-->
<!--     >-->
<!--     <el-button size="small" type="primary">上传对比表</el-button>-->
<!--     <div slot="tip">按模板上传对比表</div>-->
<!--   </el-upload>-->
<!--    <a href="javascript:void(0)" @click="getItem">123</a>-->
<!--</div>-->
<el-container>
<!--  https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/-->
  <el-upload
    ref="upload"
    action="https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/"
    :headers="myHeaders"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :data="config"
    :auto-upload="autoUpload" >
    <i class="el-icon-plus"></i>
<!--    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>



  <el-upload
    class="avatar-uploader"
    action=""
    :show-file-list="false"
    :http-request="selectPicUpload"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="iconVal" width="85px" height="85px" :src="iconVal" class="avatar" alt="">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
<!--  <el-button @click="getAvatar" >获取头像</el-button>-->

<!--  <el-upload-->
<!--    class="upload-demo"-->
<!--    ref="upload"-->
<!--    action="https://jsonplaceholder.typicode.com/posts/"-->
<!--    :on-preview="handlePreview"-->
<!--    :on-remove="handleRemove"-->
<!--    :file-list="fileList"-->
<!--    :auto-upload="false">-->
<!--    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
<!--    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
<!--    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--  </el-upload>-->

</el-container>
</template>

<script>
export default {

    name:'test',
    data(){
        return{
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
          autoUpload: false,

          myHeaders:{'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data; boundary={boundary} ',
            // 'Content-Type': 'image/png',
            // 'Content-Disposition': 'form-data; name="file"; filename="images.png"'
          },
          config:{
            'key': '123.jpg'
          },


          fileList: [
            // {
            //   name: 'food.jpeg',
            //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            // }, {
            //   name: 'food2.jpeg',
            //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            // }
          ]

        }
    },
    methods: {
      selectPicUpload(obj) {
        let fd = new FormData();  //参数的格式是formData格式的
        fd.append('file', obj.file); //参数
        console.log(obj)
        console.log(obj.file)
        console.log(fd);
        this.axios({
          method:'POST',
          headers:{'Access-Control-Allow-Origin':'*',
                  'Content-Type':'multipart/form-data',
                  'Content-Disposition':'multipart/form-data'},
          url:'https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/',
          data: {
            key: obj.file.name,
            file: obj.file
          },
        }).then(res=>{
          console.log(res);
        })
        // this.$api.StoreDiodeUpload(fd).then(res => {
        //   if (res) {
        //     this.iconVal =res;
        //     this.message('上传成功', 1)
        //   } else {
        //     this.message('上传失败', -1)
        //   }
        // }).catch(error => {
        // })
      },
// 对上传图片的大小、格式进行限制
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isJPG2 = file.type === 'image/jpg';
        const isPNG = file.type === 'image/png';
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isJPG && !isJPG2 && !isPNG) {
          this.$message.warning('只支持jpg或png格式图片');
        }
        if (!isLt5M) {
          this.$message.warning('请上传5MB以内的图片!');
        }
        return (isJPG || isJPG2 || isPNG) && isLt5M;
      },
      getAvatar(){
        this.axios({
          method:'GET',
          //例如，如果您有一个位于cn-north-4区域的名为test-bucket的桶，
          // 期望访问桶中一个名为test-object对象的acl，
          // 正确的访问URL为https://test-bucket.obs.cn-north-4.myhuaweicloud.com/test-object?acl
          url:'https://cjdbucket.obs.cn-north-4.myhuaweicloud.com/images/0cefda096e061d95ad4d330775f40ad163d9caf2.jpg'
        }).then(res=>{

        })
      },
      submitUpload() {
        // this.$refs.upload.submit();

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        // console.log(file.url)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>

<style>

</style>

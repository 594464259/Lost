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
  <el-upload
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :headers="myHeaders"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"

    :auto-upload="autoUpload" >
    <i class="el-icon-plus"></i>
<!--    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>


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

          myHeaders:{'Access-Control-Allow-Origin':'*'},

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
      submitUpload() {
        this.$refs.upload.submit();
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

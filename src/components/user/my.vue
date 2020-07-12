<template>
  <div>
    <!-- 123456 -->
    <el-upload
     action="api/upload"
     :on-preview="handlePreview"
     :auto-upload="false"
     :multiple="false"
     accept=".jpg, .png"
     :on-change="ImgReq"
     >
     <el-button size="small" type="primary">上传对比表</el-button>
     <div slot="tip">按模板上传对比表</div>
   </el-upload>
    <a href="javascript:void(0)" @click="getItem">123</a>
</div>
</template>

<script>
export default {
  
    name:'test',
    data(){
        return{

        }
    },
    methods:{
      getItem(){
        // console.log("起飞")
        // this.$jsonp('http://localhost:8888/hello',{
        //   callbackQuery: "callbackParam",
        //   callbackName: "jsonpCallback"
        // }).then((json)=>{
        //   console.log(json)
        // })
        console.log("梅开二度")
        this.axios({
          url:'api/items',
          method:'get',
          // url:'/api/login',
          // headers:{
          //   "Access-Control-Allow-Origin":'*'
          // },
          // dataType: 'jsonp',
          // method:'post',
          // data:{
          //   account: '1234',
          //   password: '1234'
          // }
        }).then(res=>{
          console.log(res.data);
        })
      },
      login(){
        this.axios({
          method:'post',
          url:'/api/login',
          data:{
            account:'liming',
            password:'liming'
          }
        }).then(res=>{
          console.log(res.data)
        })
      },
      
      handlePreview(file) {
        console.log(file);
      },
      ImgReq(req){
        // uid 作为唯一标识，方便上传完成后精准地替换图片 url
        const uid = req.file.uid 
        // 获取文件后缀名的函数
        const ext = getFileExt(req.file.name) 
        // 自定义 key ，上传时对图片的重命名会用到
        let keyname = this.$formatDate(new Date(), 'yyyyMMddhhmmss') + Math.floor(Math.random() * 1000) + '.' + ext
        // 压缩图片
        let newFile = null
        lrz(req.file, {
          quality: 0.7
        }).then(rst => {
          // 压缩完成
          newFile = rst.file
          // 创建form对象，上传七牛云所需要的参数
          const fileData = new FormData() 
          fileData.append('file', newFile)
          fileData.append('token', this.token)
          fileData.append('key', keyname)
          const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
            // 这一段代码解决进度条不显示的问题，属于 axios 的使用知识。具体可以看文末的参考链接。
            onUploadProgress: progressEvent => {
            const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
            req.onProgress({ percent: percentCompleted })
          }
          }
          // 请求七牛云的接口，具体看自己怎么配置
          // 这里的 action 是请求地址，fileData 是请求发送的内容，config 是 http 的相关配置
          // 官方的请求地址可以查看这个链接：https://developer.qiniu.com/kodo/manual/1671/region-endpoint
          axios.post($config[this.bucket].action, fileData, config).then(res => {
            const url = 'http://8.129.163.25:8888/api/upload'
            // 修改 url
            this.fileList.forEach((item) => {
              if (item.uid === uid) {
                item.url = url
              }
            })
            req.onSuccess(res)
          }).catch(err => {
            req.onError(err)
          })
        }).catch(err => {
          console.log(err)
        })
      },



      changeFile (file) {
      let fd = new FormData()
      fd.append('file', file)
      fd.append('aid', this.selecta)
      fd.append('bid', this.selectb)
      fd.append('fileName', file.name)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        //   'enctype':"multipart/form-data"
        }
      }
    //   this.axios.post('localhost:8999/upload2', fd, config).then(data => {
    //     if (data.code === 200) {
    //       this.$message.info('成功上传')
    //     }
    //     // this.axios.post('http://8.129.163.25:8999/upload2', file, config).then(data => {
    //     // if (data.code === 200) {
    //     //   this.$message.info('成功上传')
    //     // }
    //   })
    this.axios({
        headers: {
        // 'Content-Type': 'multipart/form-data'
        },
        // url: 'localhost:8999/upload2',
        url: 'http://8.129.163.25:8888/api/upload',
        // dataType: 'jsonp',
        crossDomain:true,
        method:'post',
        data: file,
    })
    }
    }
}
</script>

<style>

</style>
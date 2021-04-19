<template>
<!--  参考链接 ：https://blog.csdn.net/wandoumm/article/details/80256139?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase-->
<!--具体可见Zone页面，pageHeight函数即Footer兄弟容器的:style，函数中的数字=header+footer高度-->
  <el-footer style="background-color: #000000">

  </el-footer>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    name: 'Footer',
    components:{
      Navbar
    }
  }
</script>

<style scoped>
  /*html,body{height: 100%;}*/
  .wrapper{display: flex;flex-direction: column;min-height: 100%;}
  .header{flex: 0;background: blue;}
  .section{flex: 1;background: #dedede;}
  .footer{flex: 0;background: red}

</style>

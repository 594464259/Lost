<template>
<!--  参考链接 ：https://blog.csdn.net/wandoumm/article/details/80256139?utm_medium=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-baidujs-1.nonecase-->
<!--具体可见Zone页面，pageHeight函数即Footer兄弟容器的:style，函数中的数字=header+footer高度-->
    <div class="myFooter" style="margin-top: 40px; min-width: 960px;">
      <el-row style="background-color: #545c64;  padding: 40px 5%">
        <el-col :span="7" style="">
<!--          <div class="infoarea">-->
            <div class="title" style="float: left;display: block">
<!--              <el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/XM.jpg" style="border-radius: 2rem; width: 55px; height: 55px; display:  inline-block;vertical-align: middle;"></el-image>-->
              <el-image src="https://lpcbucket.obs.cn-north-4.myhuaweicloud.com/images/logo-jixujiaoyu.png"></el-image>
<!--              <span style="font-family: 微软雅黑,sans-serif; font-size: 22px;color: #2e9eeb; margin-left: 10px; font-weight: bold">继续教育学院答疑系统</span>-->
            </div>

            <div class="content" style="display: inline-block; text-align: left;  color: #fdffea;font-size: 15px;">
              <br>
              厦门大学继续教育学院是厦门大学组织实施在职继续教育的专门办学机构，是我校开展网络学历教育、高端培训和职业技术教育的教学单位。
<!--              <br>-->
<!--              <br>-->
<!--              学院依托厦门大学雄厚的师资团队、教学力量和科研成果，围绕国家人才强国战略目标，坚持致力于国家经济建设和社会发展需要的人才培养。学院坚持依法办学，注重质量、结构、品牌、效益均衡发展，已形成了多种办学形式、多种培养层次、多种专业设置、多种培养对象的综合办学体系，与我校普通高等教育的发展形成了相互补充、彼此促进的办学格局，成为厦门大学服务社会的重要窗口。-->
            </div>

<!--          </div>-->
        </el-col>
        <el-col :span="4" :offset="2" style="text-align: left;font-size: 15px;">
          <div class="title" style="font-size: 42px; color: #ffdd51; font-weight: bold">
            Info
          </div>
          <br>
            <el-link :underline="false" icon="el-icon-edit" href="https://s.xmu.edu.cn" style="color: white">师生服务门户</el-link>
            <br>
            <el-link :underline="false" icon="el-icon-medal" href="https://gs.xmu.edu.cn" style="margin-top: 10px; color: white">研究生院</el-link>
            <br>
            <el-link :underline="false" icon="el-icon-office-building" href="https://jwc.xmu.edu.cn" style="margin-top: 10px; color: white">教务处</el-link>
            <br>
            <el-link :underline="false" icon="el-icon-notebook-1" href="https://xsc.xmu.edu.cn" style="margin-top: 10px; color: white">学生处</el-link>

        </el-col>
        <el-col :span="6" :offset="1" style="text-align: left">
          <div class="title" style="font-size: 42px; color: #ffdd51; font-weight: bold">
            Contact us
          </div>
          <br>
          <i class="el-icon-position" style="color: #d4af7a;font-size: 20px;"></i>
          <span style="color: white;font-size: 15px;">福建省厦门市思明区思明南路422号　邮政编码：361005</span>
          <br>
          <br>
          <i class="el-icon-message" style="color: #d4af7a; font-size: 20px"></i>
          <span style="color:#f1f1f1; font-size: 15px;">Email: 123456@xmu.edu.cn</span>
        </el-col>
      </el-row>
      <el-footer style="background-color: #1e2228; align-items: center;display: flex  ">
        <span style="color: #e8c860; margin: auto;display: block; text-align: center;">Copyright © 2021 - 本平台由厦门大学继续教育学院提供</span>
      </el-footer>
    </div>
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

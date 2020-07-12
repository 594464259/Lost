<template>
  <div class="page" >
    <div class="header">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li>
          <a class="navbar-brand" href="#">LANDF</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="goHome">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  @click="goAddItem">拾遗</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">积分明细</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid bg " >
      <h1 style="padding-top: 125px; color: #007bff;">LANDF</h1>
    </div>
  </div>
  <div class="container" style="margin-top:15%; ">
    <span >开发中</span>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Message',
    data(){
        return{

        }
    },
    methods:{
        goHome(){
            this.$router.push({name:'Home'})
        },
        goAddItem(){
            this.$router.push({name:'AddItem'})
        },
    }

}
</script>

<style>
  .bg {
    margin-top: -5px;
    width: 100%;
    height: 250px;
    background:url("../../images/bg.jpg") no-repeat center;
    background-size:cover;
  }
</style>
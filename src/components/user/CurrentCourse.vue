<template>
  <div class="page">
    <Navbar index="2">

    </Navbar>

    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default {
    components:{
      Navbar,
      Footer
    },
    name: 'CurrentCourse'
  }
</script>

<style scoped>

</style>

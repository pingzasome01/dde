<template>
 <div class="relative" >
  
<div class="bg-[#FC881D] clipoutline">
   
<div class="bg-[#0D0E25] pb-[200px] md:pb-[300px] clipnjir">
  <!-- <NavComponent/>
   <HeaderComponent/> -->
 
</div>
</div>
  <img src="/dashboard.png" class="absolute w-[750px] left-0 right-0 top-0 -bottom-[800px] md:-bottom-[1100px] m-auto" alt="">
  
  </div>
<router-view/>
</template>
<script>
import NavComponent from './components/NavComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import Home from './views/Home.vue'
export default {
  
  components: {
    NavComponent,
    HeaderComponent,
    Home
    
}
}
</script>

<style>
  
</style>
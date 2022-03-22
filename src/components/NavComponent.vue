<template>
<!-- start desktop nav -->
  <nav class="hidden md:flex items-center justify-around py-[45px]">
      <div class="flex items-center">
          <img src="kmitl12.png" class="img-fluid" alt="profil" width="55">
          <p class="font-title text-xl ml-3 font-semibold text-white" >RTK Positioning For 5G </p>
      </div>

      <div class="font-dmsans text-white">
          
          <a   href="" class="mx-4" >Atmospheric Changes and EPBs > </a> 
          <a href="" class="mx-4">Plasma Bubbles</a>
          <a href="" class="mx-4">Description</a>
          <a href="" class="mx-4">Plasma Bubbles Request</a>
            
      </div>

      <div>
          
          <button router-link to="/Atmospheric"  class="py-2 px-4 rounded-full bg-white font-dmsans">Login</button>
          
      </div>
  </nav>
  <!-- end desktop nav -->

  <!-- start mobile nav -->
<nav class="flex justify-between px-7 py-5 items-center md:hidden">
    <img src="/profil.png" width="43" alt="">
    <img src="/white-hamburger.png" width="37" alt="">
</nav>

</template>

<script>
export default {

}
</script>
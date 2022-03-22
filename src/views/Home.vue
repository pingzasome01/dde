<template>
<div>heee</div>
<Kenafah /> 
 <TerusGimana /> 
 <HeaderComponent />
  <!-- <Alternative />
  <Footer /> -->
</template>
<script>

import Kenafah from '../components/Kenafah.vue'
import TerusGimana from '../components/TerusGimana.vue'
import Footer from '../components/Footer.vue'
import Alternative from '../components/Alternative.vue'
export default {
  components: {
  
    Kenafah,
    TerusGimana,
    Footer,
    Alternative
  }
}
</script>

<style>
  .clipnjir{
    clip-path: polygon(0 0, 100% 0, 100% 98%, 1% 93%);
  }
  .clipoutline{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  }
</style>
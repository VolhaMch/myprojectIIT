<template>
    <div class="flex flex-col border-b-gray-400 text-base md:flex-row items-center justify-between border-2 pb-4">
      <img src="../assets/icon.png" class="h-28 w-28 rounded-lg mt-8 mb-2 md:ml-4 xl:ml-16" alt="logo"> 

    <ul class="sm:flex flex-col text-center gap-x-6 md:flex-row mx-4 gap-x-16">
      <div><li class="text-xl font-medium"><router-link to="/">Home</router-link></li></div>
      <div><li class="text-xl font-medium"><router-link to="/experience">Experience</router-link></li></div>
      <div><li class="text-xl font-medium"><router-link to="/skills">Skills & expertice</router-link></li></div>
      <div><li class="text-xl font-medium"><router-link to="/contactMe">Contact me</router-link></li></div>
    </ul>
   
<div>
  <selectLang></selectLang>
</div>
</div>
 
<router-view></router-view>
</template>
<script>
 import selectLang from "./selectLang.vue"

 export default {
  components: {
    selectLang
}
}


</script>

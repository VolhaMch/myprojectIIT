<template>
<div class="lg:mx-10">
  <div class="flex overflow-y-auto ml-6 mr-6 py-4 px-4  md: shadow shadow-2xl py-10 lg: my-32 mr-20 ml-20">
    <div class="m-2 p-2">
     <img class="h-42 w-40 md:h-70 w-68 max-w-full rounded-lg " src="../assets/photo.png" alt="photo">
    <br>
     <div x-data>
     <button x-on:click="alert('PDF file will be downloaded')" class="w-40 h-8 py-2 px-4 font-normal rounded border border-gray-400 rounded shadow hover:bg-gray-100 inline-flex items-center">
         <a href="files/cv.pdf" download> <i class="fa-solid fa-download mr-2"></i>  Download CV</a>
      </button>
     </div>
   </div>
  <div class="md:ml-14">
   <article>
     <h1 class="font-medium text-center">Volha Machys</h1>
       <br>
      <p> Marketing enthusiast. Work in IT industry since 2018, have experience in the following directions:</p>
        <ul>
           <br>
             <li> > lead generation, </li>
             <li> > social networking, </li>
             <li> > and business development.</li> </ul>
  <br>  
   <p>Glad to see you on my personal website. </p>
    </article>
     <br>
      <button class="py-2 px-4 font-medium rounded border border-gray-400 rounded shadow hover:bg-gray-100 inline-flex items-center lg:ml-64 mt-4"><router-link to="/contactMe">Hire me</router-link>
      </button>
   </div>
  </div>
 </div>
    <router-view></router-view>
</template>

 
 <!--
  <div x-data="{ open: false }" class="items-center text-xl font-medium md:text-2xl mr-4 ml-4">
  <button x-on:click="open = ! open">
    <svg class="w-6 h-6 mr-2"  fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M6 8h18M6 14h18M6 20h18"></path>
    </svg> </button>

 
  </div>

     -->   


<!-- <script> 
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> 

components: navigation, buttons, footer
-->
<!--<script> 
// @ is an alias to /src
import navigation from '@/components/navigation.vue'

export default {
  name: 'navigation',
  components: {
    navigation
  }
}
</script> -->
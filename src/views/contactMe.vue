<template>
<h1 class="text-center text-xl m-14">Have any additional questions? Feel free to ask!</h1>
<div class="sm:grid grid-cols-1 text-xl my-4 gap-10 overflow-y-auto place-items-center lg:grid grid-cols-2 mx-8">
    <div class="m-4">
      <div>
          <h2 class="text-center"><b>Contact info</b></h2>
              <p><a href="https://goo.gl/maps/wt9izk6SuwdxiRsEA"><b><i class="fa-solid fa-location-dot"></i> Location</b> Minsk, Belarus</a></p>
              <p><a href="mailto:v.machys@gmail.co"><b><i class="fa-solid fa-envelope"></i> Email</b> v.machys@gmail.com </a></p>
              <p><a href="tel:+375-29-6875896"><b><i class="fa-solid fa-phone"></i> Phone</b> +375-29-6875896</a></p>
              <p><a href="http://localhost:8080/"><b><i class="fa-solid fa-desktop"></i> Website</b> vmachys.com</a></p>
          </div>
          <div class="grid grid-cols-4 justify-items-center my-6 mx-16">
            <div><a href="https://github.com/VolhaMch"><i class="fa-brands fa-github"></i></a></div>
            <div><a href="https://join.skype.com/invite/DET1MeLS29RU"><i class="fa-brands fa-skype"></i></a></div>
            <div><a href="https://linkedin.com/in/olga-romanchik"><i class="fa-brands fa-linkedin"></i></a></div>
            <div><a href="https://www.facebook.com/olchik.romanchik?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a></div>
          </div>
        </div>
      <div class="right my-4">  
        <div class="text-center"><b>Send me a message</b>
        </div>
    <div class="m-4">
     <form action="#">
        <div>
          <label class="label" for="name">Your name</label>
          <br>
             <input class="border-2 border-black h-10 w-80 mb-2" type="text" name="name" id="name" placeholder="Ivan"   maxlength="20" required>
         </div>
         <!-- v-model="name" -->
         <div>
          <label class="label" for="email">Your email</label>
          <br>
             <input class="border-2 border-black h-10 w-80 mb-2" type="email" name="email" id="email" placeholder="ivan.ivanov@gmail.com" maxlength="40" required
            >
            <!-- :class="{ email , error: !email.valid }"
               v-model="email.value" -->
         </div>
         <div>
          <label class="label" for="number">Phone number</label>
          <br>
            <input class="border-2 border-black h-10 w-80 p-2 mb-2" type="digit" name="number" id="number" placeholder="+8-000-*********" maxlength="20" required>
         </div>
         <label>Write your meassage</label>
         <br>
         <div class="input-box message-box">
            <textarea class="border-2 border-black h-40 w-80 mb-2" placeholder="Text" maxlength="500" required></textarea>
        </div>

        <div x-data>
         <button x-on:click="alert('This function will be available soon')" class="py-2 px-4 font-medium rounded border border-gray-400 rounded shadow hover:bg-gray-100 inline-flex items-center" input type="button" value="Send">Submit
         </button> 
        </div>
         
    </form>
 </div>
 </div>
 </div>
</template>
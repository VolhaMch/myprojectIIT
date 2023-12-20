<template>
    <script>
function myFunction() {
  let text;
  let person = prompt("Send me the details of your proposal");
  if (person == null || person == "") {
    text = "Maybe next time";
  } else {
    text = "Thank you! I'll get back to you soon";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
</template>
<div class="md:mr-4 xl:mr-16">
  <label for="select" class="font-semibold block py-2 lg:text-lg">Language:</label> 

  <div class="relative">
    <div class="h-10 w-44 bg-white flex border rounded items-center lg:w-56"> <!-- стилизация стрелки -->
      <input value="English" name="select" id="select" class="px-4 appearance-none outline-none text-gray-800 w-full" checked />
      <label for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
        <svg class="w-6 h-6 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline> <!-- координаты точек стрелки -->
        </svg>
      </label>
    </div>
    <input type="checkbox" name="show_more" id="show_more" class="hidden peer" checked />
    
    <div class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 lg:w-44">
      <div x-data> <!-- <div class="cursor-pointer group"></div> вставить, если будут еще языки-->
      <button x-on:click="alert('Попробуйте позже')" class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Russian</button>
    </div>
   </div>
  </div>
</div>
<template>
  <div class="md:mr-4 xl:mr-16">
     <div class="font-semibold block py-2 lg:text-lg"  x-data="{ open: false }">
      <button x-on:click="open = true" style="text-transform: inherit" class="flex items-center">
        Language:
        <svg class="w-6 h-6 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline> <!-- координаты точек стрелки -->
        </svg>
       </button>
        <div class="block pb-1 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" x-show="open"
           x-on:click="alert('Try later')">
          <div class="p-2 bg-gray-200 text-gray-700" x-data="{ open: false }"> English</div>
          </div>
          <div class="block  border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" x-show="open"
           x-on:click="alert('Попробуйте позже')">
           <div class="p-2 bg-gray-200 text-gray-700" x-data="{ open: false }"> Russian</div>
        </div>
      </div> 
    </div>  
   </template>
   <!-- <div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>
 
    <div :class="open ? '' : 'hidden'">
        Dropdown Contents...
    </div>
</div> -->

<!-- x-on:click.outside="open = false" 
<a href="#"></a>-->
<!-- <div x-data="dropdown()">
  <button x-bind="trigger">Open Dropdown</button>

  <span x-bind="dialogue">Dropdown Contents</span>
</div>

<script>
  document.addEventListener('alpine:init', () => {
      Alpine.data('dropdown', () => ({
          open: false,

          trigger: {
              ['x-ref']: 'trigger',
              ['@click']() {
                  this.open = true
              },
          },

          dialogue: {
              ['x-show']() {
                  return this.open
              },
              ['@click.outside']() {
                  this.open = false
              },
          },
      }))
  })
</script> -->
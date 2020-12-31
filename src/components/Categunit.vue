<template>
  
  
  <div class="p-1 w-1/2 sm:w-1/3">
        <router-link :to="{name: 'InsideCategory', params:{id:catego.title}}"> 
             <button class="bg-gray-100 w-full rounded-md shadow focus:outline-none"  >
                <img class="rounded-t-lg w-full h-28 object-cover md:h-36" :src="this.img">
                <h1 class="py-2 uppercase font-bold text-gray-700 rounded-b-lg ">{{catego.title}}</h1>
            </button>
        </router-link> 
 </div>
  
  
</template>

<script>
export default {
    props: {
        catego:{
            type: Object,
            required: true
        },
    },
    data(){
        return{
            img : this.catego.img
        }
    }

}
</script>

<style>

</style>
<template>
  <router-link :to="{name: 'Dish', params:{id:dish.nameid}}" class="w-full sm:w-1/2">
                <div class="p-2 w-full">
                    <button
                        class="bg-gray-100 w-full rounded-md shadow focus:outline-none  flex flex-row-reverse items-center text-center">
                        <img :src="this.img"
                            class="rounded-md p-1 w-1/3 h-28 object-cover md:h-36">
                        <h1 class=" w-full p-2 uppercase font-bold text-gray-700">{{dish.name}}</h1>
                    </button>

                </div>
              </router-link>
</template>

<script>
export default {
props: {
        dish:{
            type: Object,
            required: true
        },
    },
    data(){
        return{
            img: this.dish.img
        }
    },
    create(){
        
    }
}
</script>

<style>

</style>
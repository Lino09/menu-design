<template>

    <main v-if="dish" class="w-full flex flex-col items-center">
        <Navbar></Navbar>
        <div class="flex flex-wrap max-w-4xl justify-center w-full">
            <!--DISHE-->

            <div class="w-full flex flex-col">
                <img :src="this.img" class="w-full md:w-10/12 object-cover self-center mb-12">

                <h1 class="px-2 pt-2 uppercase font-bold text-gray-700 ">{{dish.name}}</h1>
                <p class="px-2 text-gray-500 text-sm">{{dish.calories}} Cal | ${{dish.price}}</p>
                <ul class="p-4 text-gray-500 text-sm">
                    <li v-for="(ingredient,index) in dish.ingredients" :key="index">&#8226; {{ingredient}}</li>
                </ul>
            </div>
            <div v-if="dish.radioptions" class="mt-8 w-full flex flex-col">

            <Radioptions  v-for="group in dish.radioptions" :key="group.name" :group="group"></Radioptions>
            </div>

            <div v-if="dish.extras" class="mt-8 w-full flex flex-col">
                
                <h1 class="px-2 pt-2 mb-2 uppercase font-bold text-gray-700">Opciones extra</h1>
                
                <Extraoption @click.prevent="addExtra(extra)" v-for="extra in dish.extras" :key="extra.name" :extra="extra"></Extraoption>
            </div>
            

        </div>


<!-- PRUEBA PANTALLA GRANDE BOTON A UN COSTADO lg:fixed lg:w-36 lg:bottom-1/2 lg:right-3 lg:shadow-xl-->
        <button class="z-20 bg-indigo-600 text-gray-100 p-4 w-full mt-4 sticky bottom-0 uppercase font-bold">Ordenar</button>

    </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import MenuService from "@/services/MenuService.js"
import Radioptions from '../components/Radioptions.vue'
import Extraoption from '../components/Extraoption.vue'
export default{
components:{
    Navbar,
Radioptions,
Extraoption
},
props:{
    'id':{}
},
data(){
    return{
        dish: null,
        img: null,
    }
},
created(){
        MenuService.getDish(this.id).then(response =>{
            this.dish = response.data
            this.img = response.data.img

        }).catch(error => {
            console.log(error)
        })   

     },
     methods:{
         addExtra: function(extra){
             extra.selected = !extra.selected;
             console.log(this.dish.extras)
         }

     }
}
</script>

<style>

</style>
<template>
  <div class="w-full">
                <h1 class="px-2 pt-2 uppercase font-semibold text-gray-700">{{group.name}}</h1>

                <fieldset>
                    <legend class="sr-only">
                        Tamaño
                    </legend>
                    <ul class="relative bg-white rounded-md -space-y-px">
                        <Radiobutton @click.prevent="selectOption(option)" v-for="option in group.options" :key="option.name" :option="option"></Radiobutton>               
                    </ul>
                </fieldset>
    </div>
    <div class="w-full">
    </div>
</template>

<script>
import Radiobutton from "@/components/Radiobutton.vue"
export default {
    data(){
        return{
            preoption: null,
            selectedOption: null
        }
    },
    created(){
        for (let opt in this.group.options){
            if(opt.selected == true){
                this.selectedOption = opt.name
            }
        }
    },
props: {
        group:{
            type: Object,
            required: true
        },
},
components:{
    Radiobutton
},
methods:{
    selectOption: function(option){
       
        for (let eachOption of this.group.options){
           this.preoption = eachOption
           this.preoption.selected = false
        }
        option.selected = true;
        this.selectedOption = option.name
    }
}
}
</script>

<style>

</style>
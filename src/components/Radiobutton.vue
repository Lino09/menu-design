<template>
    <li>
        <!-- On: "bg-indigo-50 border-indigo-200 z-10", Off: "border-gray-200" -->
        <div :class="{'bg-indigo-50 border-indigo-200 z-10': option.selected}"
            class="relative border rounded-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
            <label  class="flex items-center text-sm cursor-pointer">
                <div :class="{'bg-indigo-600': option.selected}" class="border border-indigo-300 w-4 h-4 rounded-full"></div>
                <span class="ml-3 font-medium text-gray-900">{{option.name}}</span>
            </label>
            <p id="plan-option-pricing-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                <!-- On: "text-indigo-900", Off: "text-gray-900" -->
                <span class="font-medium text-gray-500">Extra: ${{option.extraprice}} | {{option.extracal}} Cal</span></p>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
        option:{
            type: Object,
            required: true
        },
},
data(){
    return{
        
    }
},
methods:{
    
}
    }
</script>

<style>
</style>
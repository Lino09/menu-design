<template>
    <div :class="{'bg-indigo-50': extra.selected}" class="px-2 flex items-center justify-between  py-2 border border-gray-200 rounded-md">
        <span class="flex-grow flex flex-col" id="toggleLabel">
            <span class="text-sm font-medium text-gray-900">{{extra.name}}</span>
            <span class="text-sm leading-normal text-gray-500">Extra: ${{extra.extraprice}} | {{extra.extracal}} Cal</span>
        </span>
        <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
        <button :class="{'bg-indigo-600': extra.selected}" type="button" aria-pressed="false" aria-labelledby="toggleLabel"
            class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">ingrediente extra: {{extra.name}}</span>
            <!-- On: "translate-x-5", Off: "translate-x-0" -->
            <span :class="{'translate-x-5': extra.selected, 'tranlsate-x-0': !extra.selected}"  aria-hidden="true"
                class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
        </button>
    </div>
</template>

<script>
    export default {
   props: {
        extra:{
            type: Object,
            required: true
        },
},
    }
</script>

<style>

</style>
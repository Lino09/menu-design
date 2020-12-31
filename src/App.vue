<template>
  <div id="mainApp" class="w-full flex justify-center bg-gray-100">
        <div class="flex w-full max-w-4xl shadow-sm py-2 uppercase font-semibold text-sm ">

            <router-link to="/about" class="w-1/4 flex flex-col items-center justify-center">
                <img class="w-10" src="">
                <span>Home</span>
            </router-link>
            <router-link to="/" class="w-1/4 flex flex-col items-center">
                <img class="w-10" src="">
                <span>Menu</span>
            </router-link>
            <router-link to="/about" class="w-1/4 flex flex-col items-center">
                <img class="w-10" src="">
                <span>Del Día</span>
            </router-link>
            <router-link to="/about" class="w-1/4 flex flex-col items-center">
                <img class="w-10" src="">
                <span>Cuenta</span>
            </router-link>
        </div>
  </div>
  <router-view />
</template>

<style>

</style>

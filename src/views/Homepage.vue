<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { ref } from 'vue'

const isDark = ref(false);

const switchTheme = () => isDark.value = !isDark.value;

const getImageUrl = (path: string) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

type recipe = {
    id: number;
    name: string;
    category: string;
    timeToPrepare: number;
    calories: number;
    image: string;
}

const meals: Array<recipe> = [
    {
        id: 1,
        name: 'Spaghetti bolognese',
        category: 'DINNER',
        timeToPrepare: 15,
        calories: 150,
        image: 'spaghetti.jpg'
    },
    {
        id: 2,
        name: 'Steak',
        category: 'DINNER',
        timeToPrepare: 45,
        calories: 400,
        image: 'steak.jpg'
    },
    {
        id: 3,
        name: 'Pancakes',
        category: 'BREAKFAST',
        timeToPrepare: 30,
        calories: 400,
        image: 'pancakes.jpg'
    },
    {
        id: 4,
        name: 'Baguettes',
        category: 'BAKED',
        timeToPrepare: 200,
        calories: 400,
        image: 'baguettes.jpg'
    },
    {
        id: 5,
        name: 'Banana bread',
        category: 'BAKED',
        timeToPrepare: 60,
        calories: 240,
        image: 'banana-bread.jpg'
    },
    {
        id: 6,
        name: 'Pan fried chicken',
        category: 'DINNER',
        timeToPrepare: 30,
        calories: 200,
        image: 'chicken.jpg'
    },
    {
        id: 7,
        name: 'Hamburger',
        category: 'DINNER',
        timeToPrepare: 30,
        calories: 300,
        image: 'burger.jpg'
    },
    {
        id: 8,
        name: 'Ceasar salad',
        category: 'LUNCH',
        timeToPrepare: 10,
        calories: 200,
        image: 'salad.jpg'
    },
];

const timeUnit = (minutes: number) => {
    if (minutes < 60) {
        if (minutes == 1) {
            return `${minutes} minute`;
        }
        return `${minutes} minutes`;
    }    
    minutes = Math.round(minutes / 60);
    if (minutes == 1) {
        return `${minutes} hour`;
    }
    return `${minutes} hours`;
}

</script>


<template>
<div :class="isDark ? 'dark' : ''">
    <div class="bg-background dark:bg-background-dark transition-colors">
        <nav class="flex justify-between p-3">
            <h1 class="text-2xl text-black dark:text-white">Lavory</h1>
            <div class="flex gap-4">
                <button v-on:click="switchTheme()" class="text-lg text-black dark:text-white">
                    <img v-if="isDark" :src="getImageUrl('brightness-high-fill.svg')" alt="dark mode" class="invert transition-colors">
                    <img v-else :src="getImageUrl('moon-fill.svg')" alt="dark mode">
                </button>
            </div>
        </nav>
        
        <div class="flex w-full justify-center">
            <div class="w-full max-w-screen-lg mx-8">
                <div class="flex justify-between my-10">
                    <input type="text" placeholder="Search" class="h-10 w-1/3 rounded-lg p-3 transition-all bg-white dark:bg-secondary-dark text-black dark:text-white  focus:outline outline-primary">
                    <p class="text-black dark:text-white">category</p>
                </div>
            
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-center gap-8 sm:gap-12 mb-10">
                    <RecipeCard v-for="meal in meals" :category="meal.category" :name="meal.name" :timeToPrepare="timeUnit(meal.timeToPrepare)" :calories="meal.calories" :image="meal.image"></RecipeCard>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
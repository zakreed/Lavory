<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RecipeCard from '@/components/RecipeCard.vue'

type recipe = {
    id: number;
    name: string;
    category: string;
    timeToPrepare: number;
    calories: number;
    image: string;
}

const meals: object[] = [
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
        timeToPrepare: 180,
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

console.log(meals[1].category);

</script>


<template>
<nav class="flex justify-between m-3">
    <h1 class="text-2xl">Lavory</h1>
    <h1 class="text-lg">About</h1>
</nav>

<div class="flex w-full justify-center">
    <div class="w-full max-w-screen-lg mx-8">
        <div class="flex justify-between my-10">
            <input type="text" class="border">
            <p>category</p>
        </div>
    
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 mb-10">
            <RecipeCard v-for="meal in meals" :category="meal.category" :name="meal.name" :timeToPrepare="meal.timeToPrepare" :calories="meal.calories" :image="meal.image"></RecipeCard>
        </div>
    </div>
</div>
</template>
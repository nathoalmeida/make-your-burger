<template>
    <div class="main-container">
        <Banner />
        <h1>Monte o seu burger:</h1>
        <BurgerForm />
    </div>
</template>

<script setup lang="ts">
    import Banner from '@/components/Banner.vue';
    import BurgerForm from '@/components/BurgerForm.vue';
    defineOptions({ name: 'Home' })
</script>
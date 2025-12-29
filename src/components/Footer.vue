<template>
    <footer id="footer">
        <p>Make Your Burger &copy; 2025</p>
    </footer>
</template>

<script setup lang="ts">
  defineOptions({ name: 'Footer'})
</script>

<style scoped typed="scss">
    #footer {
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #fcba03;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>
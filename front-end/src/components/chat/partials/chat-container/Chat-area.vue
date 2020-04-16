<template>
    <div class="chatapp__conversations">
        <router-view @switch="$emit('switch')"></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
<script setup>
import { ref, computed } from 'vue'

defineProps({
    message: String
})

const display_flg = ref(false)
const pos_x = ref(0)
const pos_y = ref(0)
const handleMouseMove = ( event ) => {
    pos_x.value = event.clientX
    pos_y.value = event.clientY
}
const message_styles = computed(() => ({
    top: `${pos_y.value}px`,
    left: `${pos_x.value}px`
}))

</script>
<template lang="pug">
.osa-tooltip_container(
    @mouseenter="display_flg = true"
    @mouseleave="display_flg = false"
    @mousemove="handleMouseMove"
)
    .osa-tooltip_message(v-if="display_flg" :style="message_styles") {{ message }}
    slot
</template>
<style>
.osa-tooltip_message {
    font-family: sans-serif;
    font-weight: bold;
    padding: 5px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 5px;
    position: fixed;
}
</style>
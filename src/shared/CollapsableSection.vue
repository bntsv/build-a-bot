<template>
    <div>
        <div class="header">
            <span v-if="open" @click="toggle()" @keyup.enter="toggle()" tabindex="0">
                <slot name="collapse">&#x25B2; Collapse</slot>
            </span>
            <span v-if="!open" @click="toggle()" @keyup.enter="toggle()" tabindex="0">
                <slot name="expand">&#x25BC; Expand</slot>
            </span>
        </div>
    </div>
    <slot v-if="open">

    </slot>
</template>

<script setup>
import { ref } from "vue";

const open = ref(true);
const toggle = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
    font-size: 22px;
}
</style>

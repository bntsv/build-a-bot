<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import parts from "../data/parts";

const props = defineProps(["partType", "id"]);
const part = computed(() => {
//   const route = useRoute();
//   const { partType, id } = route.params;
  const { partType, id } = props;

  return parts[partType].find((p) => p.id === +id);
});
</script>

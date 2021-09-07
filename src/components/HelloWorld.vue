
<template >
  <div class="mb-3">Hello World</div>
  <button type="button" class="btn btn-primary" @click="increment">Count is {{ count }}</button>
</template>

<script lang="ts">import { computed } from "@vue/reactivity";
import { useStore } from "../store"


export default {
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.count),
      increment: () => store.dispatch('increment')
    }
  }
}

</script>


<style scoped>
</style>

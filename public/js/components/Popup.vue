<template>
    <div class="wrapper">
        <h1 class="title">{{ counter }}</h1>
        <div class="buttons-container">
            <button @click="increment">Increase</button>
            <button @click="decrement">Decrease</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    created() {
        
    },
    methods: {
        increment() {
          this.counter++;
        },
        decrement() {
          this.counter--;
        }
    }
}
</script>
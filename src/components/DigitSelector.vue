<template>
<div class="digit-selector">
    <button v-on:click="increment()">^</button>
    <h3>{{ value }}</h3>
    <button v-on:click="decrement()">v</button>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class DigitSelector extends Vue {
    private static autoIncrementID: number = 0;
    public value: number = 0;
    public id!: number;

    public DigitSelector() {
        this.id = DigitSelector.autoIncrementID++;
        console.log("oasdpfks");
    }

    private increment(): void {
        if (this.value === 9) {
            this.value = 0;
        } else {
            this.value++;
        }
    }

    private decrement(): void {
        if (this.value === 0) {
            this.value = 9;
        } else {
            this.value--;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
<template>
<div class="digit-selector">
    <button @click.exact="increment()" @click.shift="incrementFour()">^</button>
    <h3>{{ value }}</h3>
    <button @click.exact="decrement()"  @click.shift="decrementFour()">v</button>
</div>
</template>


<script lang="ts">
import {Component, Prop, Watch, Vue} from "vue-property-decorator";
import {PlayerDigit} from "@/classes/Player.ts";
import GameManager from "@/classes/GameManager.ts";

@Component
export default class DigitSelector extends Vue {
    @Prop() public props!: PlayerDigit;
    private value: number = 0;

    public created() {
        this.sync();
    }

    public increment(): void {
        if (this.value === 9) {
            this.value = 0;
        } else {
            this.value++;
        }
        this.playSound();
    }

    public decrement(): void {
        if (this.value === 0) {
            this.value = 9;
        } else {
            this.value--;
        }
        this.playSound();
    }

    public incrementFour(): void {
        if (this.value >= 6) {
            this.value -= 10;
        }
        this.value += 4;
        this.playSound();
    }

    public decrementFour(): void {
        if (this.value <= 3) {
            this.value += 10;
        }
        this.value -= 4;
        this.playSound();
    }

    private playSound(): void {
        GameManager.playSound("MROLLOV2");
    }

    @Watch("props.value")
    private sync(): void {
        this.value = this.props.value;
    }

    @Watch("value")
    private changed(): void {
        this.$emit("changed", this.value);
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

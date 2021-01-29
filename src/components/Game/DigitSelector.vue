<template>
<div class="digit-selector">
    <button @click="increment()" @click.prevent="playSound('sfx/MROLLOV2.WAV')">^</button>
    <h3>{{ value }}</h3>
    <button @click="decrement()" @click.prevent="playSound('sfx/MROLLOV2.WAV')">v</button>
</div>
</template>


<script lang="ts">
import {Component, Prop, Watch, Vue} from "vue-property-decorator";
import {PlayerDigit} from "@/classes/Player.ts";

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
    }

    public decrement(): void {
        if (this.value === 0) {
            this.value = 9;
        } else {
            this.value--;
        }
    }

    public playSound(sound: string): void {
        if (sound) {
            const audio = new Audio(sound);
            audio.play();
        }
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

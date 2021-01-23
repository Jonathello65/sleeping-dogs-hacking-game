<template>
<div class="game-logic">
    
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class GameLogic extends Vue {
    private static digitArray: number[] = [];

    public static generateCode(digitCount: number): void {
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < digitCount; i++) {
            this.digitArray.push(numbers.splice(this.getRandomInt(0, numbers.length), 1)[0]);
        }
        console.log(this.digitArray);
    }

    private static getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // Max is exclusive, min is inclusive
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
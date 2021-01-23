<template>
<div class="digit-guess">
    <h3>{{ value }}</h3>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class DigitGuess extends Vue {
    private static autoIncrementID: number = 0;
    private ID!: number;
    private value: number = 0;
    private matchesDigit: boolean = false;
    private matchesPosition: boolean = false;

    public DigitGuess() {
        this.ID = DigitGuess.autoIncrementID++;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
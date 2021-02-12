<template>
<div class="digit-guess-state">
    <div :class="{'digit': true, 'incorrect-digit': !isCorrectDigit, 'incorrect-position': !isCorrectPosition}">{{ value }}</div>
</div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GuessDigit} from "@/classes/Guess.ts";

@Component
export default class DigitGuessState extends Vue {
    @Prop() public props!: GuessDigit;
    protected value: number = 0;
    protected isCorrectDigit = false;
    protected isCorrectPosition = false;

    public created() {
        this.value = this.props.value;
        this.isCorrectDigit = this.props.isCorrectDigit;
        this.isCorrectPosition = this.props.isCorrectPosition;
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.digit {
    display: block;
    width: 50px;
    margin: 0 auto;
    font-size: 42px;
    font-weight: 500;
    line-height: 1.2;
    color: green;
}
.incorrect-position {
    color: black;
    background-color: orange;
    border-radius: 50%;
}
.incorrect-digit {
    color: black;
    background-color: red;
    border-radius: 50%;
}
</style>

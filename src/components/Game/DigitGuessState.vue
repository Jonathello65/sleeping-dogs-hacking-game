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
    color: rgb(53, 245, 66);
    text-shadow: rgba(53, 245, 66, 0.5) 0 0 6px;
    opacity: 0;
    animation: fade-in 0.5s ease-in-out 0s forwards;
}
.incorrect-position {
    color: black;
    background-color: rgb(182, 131, 34);
    border-radius: 50%;
    text-shadow: unset;
    animation: fade-in 0.5s ease-in-out 0.25s forwards;
}
.incorrect-digit {
    width: 46px;
    padding: 0 2px;
    color: black;
    background-color: rgb(128, 0, 0);
    border-radius: 5px;
    box-shadow: black inset 0px 0px 6px;
    text-shadow: unset;
    animation: fade-in 0.5s ease-in-out 0.5s forwards;
}
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

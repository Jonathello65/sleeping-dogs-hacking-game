<template>
    <div class="digit-guess-state">
        <h3 :class="{ 'incorrect-digit': !isCorrectDigit, 'incorrect-position': !isCorrectPosition}">{{ value }}</h3>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GuessDigit} from "@/classes/Guess.ts";

@Component
export default class DigitGuessState extends Vue {
    @Prop() public props!: GuessDigit;
    private value: number = 0;
    private isCorrectDigit = false;
    private isCorrectPosition = false;

    public created() {
        this.sync();
    }

    private sync(): void {
        this.value = this.props.value;
        this.isCorrectDigit = this.props.isCorrectDigit;
        this.isCorrectPosition = this.props.isCorrectPosition;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        color: green;
    }

    .incorrect-position {
        color: black;
        background-color: orange;
        border-radius: 50%;
        width: 33.6px;
        margin: 0 auto;
    }

    .incorrect-digit {
        color: black;
        background-color: red;
        border-radius: 50%;
        width: 33.6px;
        margin: 0 auto;
    }
</style>

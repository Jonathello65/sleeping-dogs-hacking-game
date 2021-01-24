<template>
    <div class="digit-guess-state">
        <h3>{{ value }}</h3>
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

</style>

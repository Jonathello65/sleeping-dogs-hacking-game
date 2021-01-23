<template>
    <div class="hack-game">
        <b-container>
            <b-row>
                <b-col v-for="(digit, index) in player.digits" :key="`digit-${index}`">
                    <DigitSelector/>
                </b-col>
                <button v-on:click="guessPassword()">-></button>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DigitSelector from "@/components/DigitSelector.vue";
import DigitGuess from "@/components/DigitGuess.vue";
import GameLogic from "@/components/GameLogic.vue";

@Component({
    components: {
        DigitSelector, DigitGuess, GameLogic
    }
})

export default class HackGame extends Vue {
    public static readonly DIGIT_COUNT: number = 4;
    public player = {
        digits: [] as DigitSelector[]
    };

    private guessPassword(): void {
        console.log(this.player);
        this.player.digits.forEach((digit) => console.log(digit.value));
    }

    private mounted(): void {
        for (let i = 0; i < HackGame.DIGIT_COUNT; i++) {
            this.player.digits.push(new DigitSelector());
        }
        GameLogic.generateCode(HackGame.DIGIT_COUNT);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
</style>

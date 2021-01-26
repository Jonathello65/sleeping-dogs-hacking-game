<template>
    <div class="hack-game">
        <b-container>
            <b-row>
                <b-col>
                    <h4>PREVIOUS ATTEMPTS:</h4>
                </b-col>
            </b-row>
            <b-row v-for="guess in guesses" :key="guess.id">
                <b-col>
                    <DigitGuessModule :props="guess"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h4>ATTEMPTS REMAINING: {{remainingAttempts}}</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col v-for="digit in player.digits" :key="digit.id">
                    <DigitSelector :props="digit" @changed="player.update(digit, ...arguments)"/>
                </b-col>
                <button @click="guessPassword()">-></button>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Player, PlayerDigit} from "@/classes/Player.ts";
import {Guess} from "@/classes/Guess.ts";
import Config from "@/classes/Config.ts";
import GameManager from "@/classes/GameManager.ts";
import DigitSelector from "@/components/Game/DigitSelector.vue";
import DigitGuessModule from "@/components/Game/DigitGuessModule.vue";

@Component({
    components: {
        DigitSelector, DigitGuessModule
    }
})
export default class HackGame extends Vue {
    public player = new Player();
    public guesses: Guess[] = [];
    public remainingAttempts: number = 6;

    public mounted(): void {
        GameManager.generateCode(Config.DIGIT_COUNT);

        for (let i = 0; i < Config.DIGIT_COUNT; i++) {
            this.player.digits.push({id: i, value: 0} as PlayerDigit);
        }
    }

    public guessPassword(): void {
        console.log(`Player guess: ${this.player.digitsToString()}`);
        const guess = new Guess(this.player.digitsAsArray(), GameManager.digitArray);
        this.guesses.push(guess);

        if (guess.guessIsCorrect) {
            GameManager.codeSuccess = true;
        } else {
            this.remainingAttempts--;
            if (this.remainingAttempts === 0) {
                GameManager.codeFailure = true;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
</style>
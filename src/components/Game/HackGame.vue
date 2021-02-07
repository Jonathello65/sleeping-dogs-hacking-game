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
                <digit-guess-module :props="guess"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h4>ATTEMPTS REMAINING: {{remainingAttempts}}</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="digit in player.digits" :key="digit.id">
                <digit-selector :props="digit" @changed="player.update(digit, ...arguments)"/>
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
import GameState from "@/enums/GameState";

@Component({
    components: {
        DigitSelector, DigitGuessModule
    }
})
export default class HackGame extends Vue {
    public player = new Player();
    public guesses: Guess[] = [];
    public remainingAttempts: number = 6;

    public created(): void {
        for (let i = 0; i < Config.DIGIT_COUNT; i++) {
            this.player.digits.push({id: i, value: 0} as PlayerDigit);
        }
    }

    public guessPassword(): void {
        console.log(`Player guess: ${this.player.digitsToString()}`);
        const guess = new Guess(this.player.digitsAsArray(), GameManager.digitArray);
        this.guesses.push(guess);

        if (guess.guessIsCorrect) {
            this.$store.commit("setGameState", GameState.Success);
            GameManager.playSound("HACKSUCC");
        } else {
            this.remainingAttempts--;
            GameManager.playSound("MSELECT1");
            if (this.remainingAttempts === 0) {
                this.$store.commit("setGameState", GameState.Failure);
                GameManager.playSound("MDONE");
            }
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";

.hack-game {
    opacity: 0;
    visibility: hidden;
    animation: hack-game-fade-in 0.35s ease-in 3.65s forwards;
}
@keyframes hack-game-fade-in {
    from {
        opacity: 0;
        visibility: visible;
    }
    to {
        opacity: 1;
        visibility: visible;
    }
}
</style>

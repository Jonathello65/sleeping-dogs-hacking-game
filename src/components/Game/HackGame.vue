<template>
<div class="hack-game">
    <div class="digit-selector-bg"></div>
    <b-container>
        <b-row>
            <b-col>
                <h4>PREVIOUS ATTEMPTS:</h4>
            </b-col>
        </b-row>
        <b-row class="digit-module-row" v-for="guess in guesses" :key="guess.id">
            <b-col>
                <digit-guess-module :props="guess"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h4>ATTEMPTS REMAINING: {{remainingAttempts}}</h4>
            </b-col>
        </b-row>
        <b-row class="digit-row">
            <b-col v-for="digit in player.digits" :key="digit.id">
                <digit-selector :props="digit" @changed="player.update(digit, ...arguments)"/>
            </b-col>
        </b-row>
    </b-container>
    <button @click="guessPassword()">-></button>
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
@import "@/styles/Game.scss";
@import "@/styles/Graphic.scss";
$image-folder: "../../assets/image";

.hack-game {
    height: $game-height;
    opacity: 0;
    visibility: hidden;
    animation: hack-game-fade-in 0.35s ease-in 3.65s forwards;
    user-select: none;
}
.digit-selector-bg {
    @include graphic();
    bottom: 0;
    width: $game-width;
    height: 230px;
    background-image: url("#{$image-folder}/InputBlockBGOnly.webp");
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: rgba(89, 136, 203, 0.08) inset 0px 0px 16px 8px;
}
.digit-row {
    margin: 0 auto;
    width: $game-width;
    padding: 0 100px;
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

<template>
<div class="hack-game">
    <div class="digit-selector-bg"></div>
    <b-container>
        <div class="previous" :class="{
            reveal: guessStep === 0,
            step1: guessStep === 1,
            step2: guessStep === 2,
            step3: guessStep >= 3
        }">
            PREVIOUS ATTEMPTS:
        </div>
        <b-row v-for="guess in guesses" :key="guess.id">
            <b-col>
                <digit-guess-module :props="guess" :remainingAttempts="remainingAttempts"/>
            </b-col>
        </b-row>
        <div class="rules-block" :class="{
            reveal: guessStep >= 0
        }">
            <div class="invalid-placement shape"></div>
            <div class="invalid-placement text">INVALID PLACEMENT</div>
            <div class="invalid-digit shape"></div>
            <div class="invalid-digit text">INVALID DIGIT</div>
        </div>
        <div class="digit-row-text digit-row-tip">ENTER 4 UNIQUE DIGITS</div>
        <div class="digit-row-text digit-row-attempts">ATTEMPTS REMAINING: {{remainingAttempts}}</div>
        <b-row class="digit-row">
            <b-col v-for="digit in player.digits" :key="digit.id">
                <digit-selector :props="digit" @changed="player.update(digit, ...arguments)"/>
            </b-col>
        </b-row>
    </b-container>
    <div class="guess" @mousedown.prevent="" @click="guessPassword()" @keydown.enter.prevent="guessPassword()" tabindex="0"></div>
</div>
</template>


<script lang="ts">
import {Component, Watch, Vue} from "vue-property-decorator";
import {Player, PlayerDigit} from "@/classes/Player.ts";
import Guess from "@/classes/Guess.ts";
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
    public remainingAttempts: number = Config.TOTAL_ATTEMPTS;
    public guessStep: number = -1;

    public created(): void {
        for (let i = 0; i < Config.DIGIT_COUNT; i++) {
            this.player.digits.push({id: i, value: 0, guessed: false} as PlayerDigit);
        }
    }

    public guessPassword(): void {
        console.log(`Player guess: ${this.player.digitsToString()}`);
        const guess = new Guess(this.player.digitsAsArray(), GameManager.digitArray);
        this.guesses.push(guess);

        for (let i = 0; i < Config.DIGIT_COUNT; i++) {
            console.log(`Loop ${i}`);
            const playerDigit = this.player.digits[i];
            console.log(playerDigit);

            if (playerDigit.guessed) {
                continue;
            }

            const guessDigit = guess.digits[i];
            console.log(guessDigit);

            if (guessDigit.isCorrectPosition) {
                console.log("Digit is correct!");
                playerDigit.guessed = true;
            }
        }

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

    @Watch("remainingAttempts")
    public updateGuessStep(): void {
        this.guessStep = Config.TOTAL_ATTEMPTS - this.remainingAttempts - 1;
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
@import "@/styles/Game.scss";
@import "@/styles/Graphic.scss";
$image-folder: "../../assets/image";
$previous-offset-x: -96px;

@mixin digit-row-text-visible() {
    opacity: 1;
    visibility: visible;
}
@mixin digit-row-text-hidden() {
    opacity: 0;
    visibility: hidden;
}

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
.digit-row-text {
    @include graphic();
    top: 612px;
    font-size: 1.5rem;
    color: white;
}
.digit-row-tip {
    @include digit-row-text-visible();
    animation: digit-row-text-phase-1 9s ease-in-out 4s infinite;
}
.digit-row-attempts {
    @include digit-row-text-hidden();
    animation: digit-row-text-phase-2 9s ease-in-out 4s infinite;
}
.guess {
    @include graphic();
    top: 706px;
    width: 51px;
    height: 51px;
    background-image: url("#{$image-folder}/EnterButton.webp");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(180px);
    cursor: pointer;
    &:hover,
    &:focus {
        filter: brightness(1.5);
    }
    &:active {
        filter: brightness(0.75);
    }
}
.previous {
    @include graphic();
    bottom: 230px;
    transform: translate($previous-offset-x, 0px);
    font-size: 1.5rem;
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px, rgba(0, 0, 0, 0.5) -1px -1px 3px;
    opacity: 0;
    visibility: hidden;
    &.reveal {
        animation: previous-slide-in-reveal 0.5s ease-out 0s forwards;
    }
    &.step1 {
        animation: previous-slide-in-step1 0.5s ease-out 0s forwards;
    }
    &.step2 {
        animation: previous-slide-in-step2 0.5s ease-out 0s forwards;
    }
    &.step3 {
        animation: previous-slide-in-step3 0.5s ease-out 0s forwards;
    }
}
.rules-block {
    @include graphic();
    top: 0;
    width: $game-width;
    height: 70px;
    background-image: url("#{$image-folder}/RulesBlockBG.webp");
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: rgba(89, 136, 203, 0.08) inset 0px 0px 16px 8px;
    opacity: 0;
    visibility: hidden;
    &.reveal {
        animation: fade-in 0.5s ease-in-out 0s forwards;
    }
    & > div {
        @include graphic();
        &.shape {
            width: 27px;
            height: 27px;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 3px;
            transform: translateX(-215px);
            &.invalid-placement {
                background-image: url("#{$image-folder}/RulesBlockYellowCircle.webp");
                top: 4px;
            }
            &.invalid-digit {
                background-image: url("#{$image-folder}/RulesBlockRedSquare.webp");
                top: 35px;
            }
        }
        &.text {
            font-size: 1.5rem;
            text-align: left;
            transform: translateX(55px);
            &.invalid-digit {
                top: 30px;
            }
        }
    }
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
@keyframes digit-row-text-phase-1 {
    0%   { @include digit-row-text-visible(); }
    44%  { @include digit-row-text-visible(); }
    47%  { @include digit-row-text-hidden();  }
    97%  { @include digit-row-text-hidden();  }
    100% { @include digit-row-text-visible(); }
}
@keyframes digit-row-text-phase-2 {
    0%   { @include digit-row-text-hidden();  }
    47%  { @include digit-row-text-hidden();  }
    50%  { @include digit-row-text-visible(); }
    94%  { @include digit-row-text-visible(); }
    97%  { @include digit-row-text-hidden();  }
    100% { @include digit-row-text-hidden();  }
}
@keyframes previous-slide-in-reveal {
    from {
        opacity: 0;
        transform: translate($previous-offset-x, 0px);
        visibility: visible;
    }
    to {
        opacity: 1;
        transform: translate($previous-offset-x, -132px);
        visibility: visible;
    }
}
@keyframes previous-slide-in-step1 {
    from {
        opacity: 1;
        transform: translate($previous-offset-x, -132px);
        visibility: visible;
    }
    to {
        opacity: 1;
        transform: translate($previous-offset-x, -264px);
        visibility: visible;
    }
}
@keyframes previous-slide-in-step2 {
    from {
        opacity: 1;
        transform: translate($previous-offset-x, -264px);
        visibility: visible;
    }
    to {
        opacity: 1;
        transform: translate($previous-offset-x, -396px);
        visibility: visible;
    }
}
@keyframes previous-slide-in-step3 {
    from {
        opacity: 1;
        transform: translate($previous-offset-x, -396px);
        visibility: visible;
    }
    to {
        opacity: 0;
        transform: translate($previous-offset-x, -528px);
        visibility: hidden;
    }
}
@keyframes fade-in {
    from {
        opacity: 0;
        visibility: hidden;
    }
    to {
        opacity: 1;
        visibility: visible;
    }
}
</style>

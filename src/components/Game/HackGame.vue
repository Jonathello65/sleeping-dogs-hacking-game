<template>
    <div class="hack-game">
        <b-container>
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
import Config from "@/classes/Config.ts";
import GameManager from "@/classes/GameManager.ts";
import DigitSelector from "@/components/Game/DigitSelector.vue";
import DigitGuess from "@/components/Game/DigitGuess.vue";

@Component({
    components: {
        DigitSelector, DigitGuess
    }
})
export default class HackGame extends Vue {
    public player = new Player();

    public mounted(): void {
        GameManager.generateCode(Config.DIGIT_COUNT);

        for (let i = 0; i < Config.DIGIT_COUNT; i++) {
            this.player.digits.push({id: i, value: 0} as PlayerDigit);
        }
    }

    public guessPassword(): void {
        // this.player.digits.forEach((digit) => console.log(digit.value));
        console.log(`Player guess: ${this.player.digitsToString()}`);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
</style>

<template>
<div class="digit-guess-module">
    <div class="module">
        <b-container class="module-container">
            <b-row>
                <b-col v-for="digit in digits" :key="digit.id" class="p-0">
                    <digit-guess-state :props="digit"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>


<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import {Guess, GuessDigit} from "@/classes/Guess.ts";
import DigitGuessState from "@/components/Game/DigitGuessState.vue";

@Component({
    components: {
        DigitGuessState
    }
})
export default class DigitGuessModule extends Vue {
    @Prop() public props!: Guess;
    private digits: GuessDigit[] = [];

    public created() {
        this.sync();
    }

    private sync(): void {

        this.digits = this.props.digits;
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Game.scss";
@import "@/styles/Graphic.scss";
$image-folder: "../../assets/image";

.digit-guess-module {
    @include graphic();
    height: $game-height;
}
.module {
    @include graphic();
    bottom: 230px;
    width: $game-width;
    height: 132px;
    background-image: url("#{$image-folder}/GuessBlock.webp");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgba(89, 136, 203, 0.08) inset 0px 0px 16px 8px;
}
.module-container {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 50px;
    margin: auto 0;
    padding: 0 140px;
}
</style>

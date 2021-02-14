<template>
<div class="digit-guess-module">
    <div class="module" :style="{zIndex}" :class="{
        step1: step === 1,
        step2: step === 2,
        step3: step >= 3
    }">
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
import {Component, Prop, Watch, Vue} from "vue-property-decorator";
import Guess, {GuessDigit} from "@/classes/Guess.ts";
import DigitGuessState from "@/components/Game/DigitGuessState.vue";
import Config from "@/classes/Config.ts";

@Component({
    components: {
        DigitGuessState
    }
})
export default class DigitGuessModule extends Vue {
    @Prop() public props!: Guess;
    @Prop() public remainingAttempts!: number;
    protected digits: GuessDigit[] = [];
    protected id: number = 0;
    protected zIndex: number = -Config.TOTAL_ATTEMPTS;
    protected step: number = 0;

    public created() {
        this.digits = this.props.digits;
        this.id = this.props.id;
        this.zIndex = -this.props.id - 1;
    }

    @Watch("remainingAttempts")
    protected updateStep(): void {
        this.step = Config.TOTAL_ATTEMPTS - this.remainingAttempts - this.id - 1;
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
    opacity: 0;
    transform: translateY(132px);
    animation: module-slide-in-reveal 0.5s ease-out 0s forwards;
    &.step1 {
        animation: module-slide-in-step1 0.5s ease-out 0s forwards;
    }
    &.step2 {
        animation: module-slide-in-step2 0.5s ease-out 0s forwards;
    }
    &.step3 {
        animation: module-slide-in-step3 0.5s ease-out 0s forwards;
    }
}
.module-container {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 50px;
    margin: auto 0;
    padding: 0 140px;
}
@keyframes module-slide-in-reveal {
    from {
        opacity: 0;
        transform: translateY(132px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}
@keyframes module-slide-in-step1 {
    from {
        opacity: 1;
        transform: translateY(0px);
    }
    to {
        opacity: 1;
        transform: translateY(-132px);
    }
}
@keyframes module-slide-in-step2 {
    from {
        opacity: 1;
        transform: translateY(-132px);
    }
    to {
        opacity: 1;
        transform: translateY(-264px);
    }
}
@keyframes module-slide-in-step3 {
    from {
        opacity: 1;
        transform: translateY(-264px);
    }
    to {
        opacity: 0;
        transform: translateY(-396px);
        visibility: hidden;
    }
}
</style>

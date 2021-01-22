<template>
    <div class="hack-game">
        <b-container>
            <b-row>
                <b-col v-for="digit in player.digits" :key="digit.ID">
                    <DigitSelector/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DigitSelector from "@/components/DigitSelector.vue";

@Component({
    components: {
        DigitSelector
    }
})

export default class HackGame extends Vue {
    public static readonly DIGIT_COUNT: number = 4;
    private player = {
        digits: [] as DigitSelector[]
    };

    private mounted(): void {
        for (let i = 0; i < HackGame.DIGIT_COUNT; i++) {
            this.player.digits.push(new DigitSelector());
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
</style>

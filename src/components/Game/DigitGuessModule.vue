<template>
    <div class="digit-guess-module">
        <b-container>
            <b-row>
                <b-col v-for="digit in digits" :key="digit.id">
                    <DigitGuessState :props="digit"/>
                </b-col>
            </b-row>
        </b-container>
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

</style>

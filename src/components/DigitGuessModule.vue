<template>
<div class="digit-guess-module">
    
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DigitGuess from "@/components/DigitGuess.vue";

@Component({
    components: {
        DigitGuess
    }
})
export default class DigitGuessModule extends Vue {
    private static autoIncrementID: number = 0;
    private ID!: number;

    public DigitGuessModule() {
        this.ID = DigitGuessModule.autoIncrementID++;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
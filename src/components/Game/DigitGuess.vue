<template>
<div class="digit-guess">
    <h3>{{ value }}</h3>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class DigitGuess extends Vue {
    private static autoIncrementID: number = 0;
    public id!: number;
    public value: number = 0;
    public matchesDigit: boolean = false;
    public matchesPosition: boolean = false;

    public created() {
        this.id = DigitGuess.autoIncrementID++;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

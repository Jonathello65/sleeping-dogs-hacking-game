<template>
<div class="outro-game">
    <h1>{{ $store.getters.getCorrectCode }} </h1>
    <h1 v-if="$store.getters.isSuccess">ACCESS GRANTED</h1>
    <h1 v-if="$store.getters.isFailure">ACCESS DENIED</h1>
</div>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Outro extends Vue {

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
</style>

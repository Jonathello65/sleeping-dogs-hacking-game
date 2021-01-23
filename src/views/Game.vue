<template>
<div id="game">
    <IntroGame/>
    <HackGame/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IntroGame from "@/components/IntroGame.vue";
import HackGame from "@/components/HackGame.vue";

@Component({
    components: {
        IntroGame,
        HackGame
    }
})
export default class Game extends Vue {}
</script>

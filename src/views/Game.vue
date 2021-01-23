<template>
<div id="game">
    <Intro/>
    <HackGame/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Game/Intro.vue";
import HackGame from "@/components/Game/HackGame.vue";

@Component({
    components: {
        Intro,
        HackGame
    }
})
export default class Game extends Vue {}
</script>

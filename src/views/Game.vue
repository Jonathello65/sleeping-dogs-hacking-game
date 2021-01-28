<template>
    <div id="game">
        <Intro/>
        <HackGame v-if="$store.getters.isPlaying"/>
        <Outro v-if="!$store.getters.isPlaying"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Game/Intro.vue";
import HackGame from "@/components/Game/HackGame.vue";
import Outro from "@/components/Game/Outro.vue";

@Component({
    components: {
        Intro,
        HackGame,
        Outro
    }
})
export default class Game extends Vue {}
</script>

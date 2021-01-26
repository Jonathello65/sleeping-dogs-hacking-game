<template>
    <div id="game">
        <Intro/>
        <HackGame v-if="!GameManager.codeSuccess && !GameManager.codeFailure"/>
        <Outro v-if="GameManager.codeSuccess || GameManager.codeFailure"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Game/Intro.vue";
import HackGame from "@/components/Game/HackGame.vue";
import Outro from "@/components/Game/Outro.vue";
import GameManager from "@/classes/GameManager.ts";

@Component({
    components: {
        Intro,
        HackGame,
        Outro
    }
})
export default class Game extends Vue {
    public GameManager = GameManager;
}
</script>

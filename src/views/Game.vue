<template>
<div id="game">
    <background/>
    <intro/>
    <hack-game v-if="$store.getters.isPlaying"/>
    <outro v-if="!$store.getters.isPlaying"/>
</div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Background from "@/components/Game/Background.vue";
import Intro from "@/components/Game/Intro.vue";
import HackGame from "@/components/Game/HackGame.vue";
import Outro from "@/components/Game/Outro.vue";

@Component({
    components: {
        Background, Intro, HackGame, Outro
    }
})
export default class Game extends Vue {

}
</script>

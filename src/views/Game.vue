<template>
<div id="game">
    <Intro/>
    <HackGame/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Intro.vue"; // @ is an alias to /src
import HackGame from "@/components/HackGame.vue";

@Component({
    components: {
        Intro, HackGame
    }
})
export default class Home extends Vue {}
</script>

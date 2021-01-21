<template>
    <div id="game">
        <Intro/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Intro from "@/components/Intro.vue"; // @ is an alias to /src

@Component({
    components: {
        Intro
    }
})
export default class Home extends Vue {}
</script>

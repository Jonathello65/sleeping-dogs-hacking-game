<template>
<div class="outro-game">
    <div class="correct-code">
        <span>{{ $store.getters.getCorrectCode }}</span>
    </div>
    <div class="ending-message">
        <span class="success-message" v-if="$store.getters.isSuccess">ACCESS<br>GRANTED</span>
        <span class="failure-message" v-if="$store.getters.isFailure">ACCESS<br>DENIED</span>
    </div>
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
@import "@/styles/Game.scss";
@import "@/styles/Graphic.scss";

.outro-game {
    @include graphic();
    height: $game-height;
    width: $game-width;
    & > .correct-code {
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 6rem;
        width: 100%;
        position: absolute;
        display: block;
        font-size: 5rem;
        letter-spacing: 8px;
        font-weight: 500;
        line-height: 1.2;
        transform: translateY(-70px);
        color: white;
        animation: fade-in-code 0.5s ease-in-out 0.1s forwards;
    }
    & > .ending-message {
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 6rem;
        width: 100%;
        position: absolute;
        display: block;
        font-size: 4rem;
        font-weight: 500;
        line-height: 1;
        transform: translateY(22px);
        & > .success-message {
            color: white;
            animation: fade-in-success 0.5s ease-in-out 0.1s forwards;
        }
        & > .failure-message {
            color: white;
            animation: fade-in-failure 0.5s ease-in-out 0.1s forwards;
        }
    }
}
@keyframes fade-in-code {
    from {
        color: white;
    }
    to {
        color: #6090d7;
    }
}
@keyframes fade-in-success {
    from {
        color: white;
    }
    to {
        color: #1f68ad;
    }
}
@keyframes fade-in-failure {
    from {
        color: white;
    }
    to {
        color: #ad1f1f;
    }
}
</style>

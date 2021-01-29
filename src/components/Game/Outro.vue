<template>
<div class="outro-game">
    <span>{{ $store.getters.getCorrectCode }}</span>
    <span v-if="$store.getters.isSuccess">ACCESS GRANTED</span>
    <span v-if="$store.getters.isFailure">ACCESS DENIED</span>
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

.outro-game {
    position: absolute;
    left: 0;
    right: 0;
    > span {
        display: block;
        font-size: 2.5rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
}
</style>

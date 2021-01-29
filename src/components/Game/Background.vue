<template>
<div class="background">
    <div class="badge">&zwnj;</div>
</div>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Background extends Vue {

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";

.badge {
    width: 448px;
    height: 424px;
    margin: 0 auto;
    background-image: url("../../assets/image/HKPDLogoMask.webp");
    mix-blend-mode: color-dodge;
    // filter: blur(3px) brightness(116);
}
</style>

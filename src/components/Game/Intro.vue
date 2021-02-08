<template>
<div class="intro-game">
    <div class="loading-bar">
        <div class="background"></div>
        <div class="foreground"></div>
    </div>
    <div class="status-text">
        <div class="connecting">CONNECTING...</div>
        <div class="complete">COMPLETE</div>
    </div>
</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Body.scss";
@import "@/styles/Game.scss";
@import "@/styles/Graphic.scss";
$image-folder: "../../assets/image";
$loading-bar-width: 386px;
$loading-bar-height: 4px;

.intro-game {
    animation: intro-fade-out 0.35s ease-in 3.65s forwards;
    > div {
        @include graphic();
        > div {
            position: absolute;
        }
    }
}
.loading-bar {
    & {
        top: 500px;
        width: $loading-bar-width;
        height: $loading-bar-height;
        border-radius: 2px;
        overflow: hidden;
        opacity: 0;
        animation: loading-bar-fade-in 0.35s ease-out 0s forwards;
    }
    > .background {
        width: $loading-bar-width;
        height: $loading-bar-height;
        background-image: url("#{$image-folder}/LoadingBar.webp");
        background-size: contain;
        background-repeat: no-repeat;
    }
    > .foreground {
        width: 0px;
        height: $loading-bar-height;
        background-image: url("#{$image-folder}/LoadingBarComplete.webp");
        background-size: cover;
        background-repeat: no-repeat;
        animation: loading-bar-increment 3s linear 0s forwards;
    }
}
.status-text {
    top: 520px;
    width: $game-width;
    height: 80px;
    font-size: 150%;
    overflow: hidden;
    > .connecting,
    > .complete {
        width: 100%;
    }
    > .connecting {
        opacity: 0;
        animation: connecting-slide-in 0.25s linear 0s forwards,
                   connecting-slide-out 0.25s linear 0.75s forwards,
                   connecting-slide-in 0.25s linear 1.5s forwards,
                   connecting-slide-out 0.25s linear 2.25s forwards;
    }
    > .complete {
        top: 40px;
        opacity: 0;
        visibility: hidden;
        animation: complete-slide-in 0.25s linear 2.75s forwards;
    }
}
@keyframes connecting-slide-in {
    from {
        opacity: 0;
        left: 330px;
        visibility: visible;
    }
    to {
        opacity: 1;
        left: 0px;
        visibility: visible;
    }
}
@keyframes connecting-slide-out {
    from {
        opacity: 1;
        left: 0px;
        visibility: visible;
    }
    to {
        opacity: 0;
        left: -330px;
        visibility: hidden;
    }
}
@keyframes complete-slide-in {
    from {
        opacity: 0;
        top: 40px;
        visibility: visible;
    }
    to {
        opacity: 1;
        top: 0px;
        visibility: visible;
    }
}
@keyframes loading-bar-fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes loading-bar-increment {
    from {
        width: 0px;
    }
    to {
        width: $loading-bar-width;
    }
}
@keyframes intro-fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>

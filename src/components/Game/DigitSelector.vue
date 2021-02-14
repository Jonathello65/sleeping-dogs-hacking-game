<template>
<div class="digit-selector">
    <div
        class="digit bg"
        :class="{guessed}"
        @keydown.up.exact.prevent="increment()"
        @keydown.down.exact.prevent="decrement()"
        @keydown.up.shift.prevent="incrementFour()"
        @keydown.down.shift.prevent="decrementFour()"
        @mousedown.prevent=""
        :tabindex="guessed ? '' : 0"
    >
        <div
            class="digit up"
            v-if="!guessed"
            @mousedown.prevent=""
            @click.exact="increment()"
            @click.shift="incrementFour()"
        ></div>
        <div class="digit value">{{ value }}</div>
        <div
            class="digit down"
            v-if="!guessed"
            @mousedown.prevent=""
            @click.exact="decrement()"
            @click.shift="decrementFour()"
        ></div>
    </div>
</div>
</template>


<script lang="ts">
import {Component, Prop, Watch, Vue} from "vue-property-decorator";
import {PlayerDigit} from "@/classes/Player.ts";
import GameManager from "@/classes/GameManager.ts";

@Component
export default class DigitSelector extends Vue {
    @Prop() public props!: PlayerDigit;
    protected value: number = 0;
    protected guessed: boolean = false;

    public created() {
        this.sync();
    }

    public increment(): void {
        if (this.value === 9) {
            this.value = 0;
        } else {
            this.value++;
        }
        this.playSound();
    }

    public decrement(): void {
        if (this.value === 0) {
            this.value = 9;
        } else {
            this.value--;
        }
        this.playSound();
    }

    public incrementFour(): void {
        if (this.value >= 6) {
            this.value -= 10;
        }
        this.value += 4;
        this.playSound();
    }

    public decrementFour(): void {
        if (this.value <= 3) {
            this.value += 10;
        }
        this.value -= 4;
        this.playSound();
    }

    protected playSound(): void {
        GameManager.playSound("MROLLOV2");
    }

    @Watch("props.value")
    @Watch("props.guessed")
    protected sync(): void {
        this.value = this.props.value;
        this.guessed = this.props.guessed;
    }

    @Watch("value")
    protected changed(): void {
        this.$emit("changed", this.value);
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/Graphic.scss";
$image-folder: "../../assets/image";
$digit-updown-half-length: 32px;
$digit-updown-height: 15px;
$digit-updown-offset: -18px;
$digit-updown-color: rgb(162, 193, 217);
$digit-updown-color-hover: rgb(226, 236, 243);
$digit-updown-color-active: rgb(125, 168, 202);

.digit {
    @include graphic();
    background-size: cover;
    background-repeat: no-repeat;
    &.bg {
        top: 692px;
        width: 66px;
        height: 78px;
        background-image: url("#{$image-folder}/NumInput.webp");
        &.guessed {
            background-image: url("#{$image-folder}/NumInputCorrect.webp");
            > .value {
                color: rgb(53, 245, 66);
                text-shadow: rgba(53, 245, 66, 0.5) 0 0 6px;
            }
        }
        &:focus .digit.up {
            border-bottom: $digit-updown-height solid $digit-updown-color-hover;
        }
        &:focus .digit.down {
            border-top: $digit-updown-height solid $digit-updown-color-hover;
        }
    }
    &.up {
        top: $digit-updown-offset;
        border-bottom: $digit-updown-height solid $digit-updown-color;
        &:hover,
        &:focus {
            border-bottom: $digit-updown-height solid $digit-updown-color-hover;
        }
        &:active {
            border-bottom: $digit-updown-height solid $digit-updown-color-active;
        }
    }
    &.value {
        color: rgb(16, 17, 19);
        font-size: 64px;
        line-height: 75px;
    }
    &.down {
        bottom: $digit-updown-offset;
        border-top: $digit-updown-height solid $digit-updown-color;
        &:hover,
        &:focus {
            border-top: $digit-updown-height solid $digit-updown-color-hover;
        }
        &:active {
            border-top: $digit-updown-height solid $digit-updown-color-active;
        }
    }
    &.up,
    &.down {
        width: 0px;
        height: 0px;
        border-left: $digit-updown-half-length solid transparent;
        border-right: $digit-updown-half-length solid transparent;
        cursor: pointer;
    }
}
</style>

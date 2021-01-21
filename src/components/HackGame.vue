<template>
    <div class="hello">
        <button v-on:click="incrementNumber(1)">Up1</button>
        <button v-on:click="incrementNumber(2)">Up2</button>
        <button v-on:click="incrementNumber(3)">Up3</button>
        <button v-on:click="incrementNumber(4)">Up4</button>
        
        <ul>
            <li><h3>{{ digit1 }}</h3></li>
            <li><h3>{{ digit2 }}</h3></li>
            <li><h3>{{ digit3 }}</h3></li>
            <li><h3>{{ digit4 }}</h3></li>
        </ul>

        <button v-on:click="decrementNumber(1)">Down1</button>
        <button v-on:click="decrementNumber(2)">Down2</button>
        <button v-on:click="decrementNumber(3)">Down3</button>
        <button v-on:click="decrementNumber(4)">Down4</button>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    private digit1: number = 0;
    private digit2: number = 0;
    private digit3: number = 0;
    private digit4: number = 0;

    private incrementNumber(digit: number): void {
        switch (digit) {
            case 1:
                this.digit1++;
                break;
            case 2:
                this.digit2++;
                break;
            case 3:
                this.digit3++;
                break;
            case 4:
                this.digit4++;
                break;
            default:
                break;
        }
        this.loopDigits();
    }

    private decrementNumber(digit: number): void {
        switch (digit) {
            case 1:
                this.digit1--;
                break;
            case 2:
                this.digit2--;
                break;
            case 3:
                this.digit3--;
                break;
            case 4:
                this.digit4--;
                break;
            default:
                break;
        }
        this.loopDigits();
    }

    private loopDigits(): void {
        const digits = [this.digit1, this.digit2, this.digit3, this.digit4];

        digits.forEach((value, index) => {
            digits[index] = this.checkDigit(value);
        });
    }

    private checkDigit(digit: number): number {
        console.log(digit);
        if (digit > 9) {
            return 0;
        } else if (digit < 0 ) {
            return 9;
        } else {
            return digit;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

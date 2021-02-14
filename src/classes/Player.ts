export interface PlayerDigit {
    id: number;
    value: number;
    guessed: boolean;
}

export class Player {
    public digits: PlayerDigit[] = [];

    public digitsAsArray(): number[] {
        return this.digits.map((digit) => digit.value);
    }

    public digitsToString(): string {
        return `[${this.digitsAsArray().join(", ")}]`;
    }

    public update(digit: PlayerDigit, value: number): void {
        digit.value = value;
    }
}

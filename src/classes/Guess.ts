export interface GuessDigit {
    id: number;
    value: number;
    isCorrectDigit: boolean;
    isCorrectPosition: boolean;
}

export class Guess {
    public static autoIncrementId: number = 0;
    public digits: GuessDigit[] = [];
    public correctDigits: number[] = [];
    public id!: number;

    public constructor(values: number[], correctValues: number[]) {
        this.id = Guess.autoIncrementId++;
        this.digits = this.convertToDigits(values);
        this.correctDigits = correctValues;
    }

    public convertToDigits(values: number[]): GuessDigit[] {
        return values.map((value, index) => ({id: index, value} as GuessDigit));
    }

    public digitsAsArray(): number[] {
        return this.digits.map((digit) => digit.value);
    }

    public digitsToString(): string {
        return `[${this.digitsAsArray().join(", ")}]`;
    }
}

export interface GuessDigit {
    id: number;
    value: number;
    isCorrectDigit: boolean;
    isCorrectPosition: boolean;
}

export default class Guess {
    public static resetAutoIncrementId(): void { Guess.autoIncrementId = 0; }
    protected static autoIncrementId: number = 0;
    public digits: GuessDigit[] = [];
    public correctDigits: number[] = [];
    public id!: number;
    public guessIsCorrect: boolean = false;

    public constructor(values: number[], correctValues: number[]) {
        this.id = Guess.autoIncrementId++;
        this.digits = this.convertToDigits(values);
        this.correctDigits = correctValues;
        this.compareCodes(values, correctValues);
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

    public compareCodes(values: number[], correctValues: number[]) {
        this.guessIsCorrect = true;

        for (let i = 0; i < values.length; i++) {
            this.digits[i].isCorrectDigit = correctValues.includes(values[i]);
            this.digits[i].isCorrectPosition = (values[i] === correctValues[i]);
            if (!this.digits[i].isCorrectPosition) {
                this.guessIsCorrect = false;
            }
        }
    }
}

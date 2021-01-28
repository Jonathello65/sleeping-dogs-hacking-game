export default class GameManager {
    public static digitArray: number[];

    public static generateCode(digitCount: number): void {
        this.digitArray = [];
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < digitCount; i++) {
            this.digitArray.push(numbers.splice(this.getRandomInt(0, numbers.length), 1)[0]);
        }
        console.log(`Password: [${this.digitArray.join(", ")}]`);
    }

    public static getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // Max is exclusive, min is inclusive
    }
}

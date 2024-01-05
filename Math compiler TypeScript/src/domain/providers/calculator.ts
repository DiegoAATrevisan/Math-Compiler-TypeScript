type Input = {
    num1: number, num2: number, operador: "+" | "-" | "/" | "*"
}
export interface Calculator {

    exec: (input: Input) => number;
} 
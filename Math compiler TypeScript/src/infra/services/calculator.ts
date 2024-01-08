import { Calculator } from "../../domain/providers/calculator";

export class DefaultCalculator implements Calculator {
    public exec(input: { num1: number; num2: number; operador: "+" | "-" | "/" | "*"; }): number {
        switch (input.operador) {
            case "*":
                return input.num1 * input.num2
            case "+":
                return input.num1 + input.num2
            case "-":
                return input.num1 - input.num2
            case "/":
                if (input.num2 == 0) {
                    throw new Error("NÃO PODE DIVIDIR POR 0");
                } else {
                    return input.num1 / input.num2
                }
        }
    }
}
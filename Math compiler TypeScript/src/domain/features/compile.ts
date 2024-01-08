// feature : compile an equation and returns its value

import { Equation } from "../entities/equation"
import { Calculator } from "../providers/calculator"
import { Convert } from "../providers/convert"
import { Validator } from "../providers/validator"

type Input = Equation
type Output = { result: number }
export type MathCompiler = (input: Input) => Promise<Output>
type SetupProps = {
    validator: Validator,
    convert: Convert,
    calculator: Calculator
}
type Setup = (props: SetupProps) => MathCompiler


export const setMathCompiler: Setup = ({ calculator, convert, validator }: SetupProps) => async (input) => {
    const splitedBody: Array<string | number> = input.body.split("");
    for (let index = 0; index < splitedBody.length; index++) {
        if (validator.exec(splitedBody[index] as string)) {
            splitedBody[index] = convert.exec(splitedBody[index] as string);
        }
    }
    const [num1, operador, num2] = splitedBody
    const result = calculator.exec({ num1: num1 as number, operador: operador as string as "+" | "-" | "/" | "*", num2: num2 as number })
    return { result }
}
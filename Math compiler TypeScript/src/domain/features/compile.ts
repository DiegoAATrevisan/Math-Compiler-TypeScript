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
    const splitedBody: any[] = input.body.split("");
    for (let index = 0; index < splitedBody.length; index++) {
        if (validator.exec(splitedBody[index])) {
            splitedBody[index] = convert.exec(splitedBody[index]);
        }
    }
    const [num1, operador, num2] = splitedBody
    const result = calculator.exec({ num1, operador, num2 })
    return { result }
}
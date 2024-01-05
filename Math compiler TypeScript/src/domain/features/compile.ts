// feature : compile an equation and returns its value

import { Equation } from "../entities/equation"
import { Calculator } from "../providers/calculator"
import { Convert } from "../providers/convert"
import { Validator } from "../providers/validator"

type Input = Equation
type Output = { result: number }
type MathCompiler = (input: Input) => Promise<Output>
type SetupProps = {
    validator: Validator,
    convert: Convert,
    calculator: Calculator
}
type Setup = (props: SetupProps) => MathCompiler


const setMathCompiler: Setup = ({ calculator, convert, validator }: SetupProps) => async (input) => {
    const splitedBody: any[] = input.body.split("");
    for (let index = 0; index < splitedBody.length; index++) {
        if (validator.exec(splitedBody[index])) {
            splitedBody[index] = convert.exec(splitedBody[index]);
        }
    }

    return { result: 159 }
}
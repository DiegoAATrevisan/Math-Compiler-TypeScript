// feature : compile an equation and returns its value

import { Equation } from "../entities/equation"

type Input = Equation
type Output = { result: number }
type MathCompiler = (input: Input) => Promise<Output>
type SetupProps = {}
type Setup = (props: SetupProps) => MathCompiler


const setMathCompiler: Setup = ({ }: SetupProps) => async () => {

    return { result: 159 }
}
import { MathCompiler, setMathCompiler } from "./src/domain/features/compile";
import { DefaultCalculator } from "./src/infra/services/calculator";
import { DefaultConvert } from "./src/infra/services/convert";
import { DefaultValidator } from "./src/infra/services/validator";

const mathCompiler: MathCompiler = setMathCompiler({
    calculator: new DefaultCalculator,
    convert: new DefaultConvert,
    validator: new DefaultValidator
})
console.log(await mathCompiler({ body: process.argv[2] }));
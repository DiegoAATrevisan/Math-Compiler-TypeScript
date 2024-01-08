import { Validator } from "../../domain/providers/validator";

export class DefaultValidator implements Validator {
    public exec(caracter: string): boolean {
        return /[0-9]/.test(caracter)
    }

}
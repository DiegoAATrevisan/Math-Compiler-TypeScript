import { Convert } from "../../domain/providers/convert";

export class DefaultConvert implements Convert {
    public exec(caracter: string): number {
        return Number(caracter);
    }
}
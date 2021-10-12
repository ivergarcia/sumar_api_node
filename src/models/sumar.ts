import { model, Schema, Document } from "mongoose";

export interface IResult extends Document {
    result: number;
}

const sumarSchema = new Schema({
    result: {
        type: Number,
        required: true,
    }
});

export default model<IResult>('Sumar', sumarSchema);
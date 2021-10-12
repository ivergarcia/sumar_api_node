import { Request, Response } from "express";
import Sumar, { IResult } from "../models/sumar";


export const sumar = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.valor1 || !req.body.valor2) {
        return res
            .status(400)
            .json({ msg: "Porfavor, ingrese valores al valor1 y valor2" });
    }
    const newResult: IResult = req.body.valor1 + req.body.valor2;
    const newSumar = new Sumar({ result: newResult});
    await newSumar.save();
    return res.status(201).json(newSumar);
}
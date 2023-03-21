import axios from "axios";
import { Request, Response } from "express";
import { config } from './config';


export const readThemes = async (req: Request, res: Response) => {
    try {
        const data = await axios(config.url);
        const themes = data.data.results;
        res.status(200).send(themes);
      } catch (e:any) {
        console.log(e.message);
        return
      }

}
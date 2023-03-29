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



export const readMovieThemes = async (req: Request, res: Response) => {
  const moviesId: number[] = [18, 133, 136, 158, 209, 246, 263, 264, 269, 270, 271, 272, 274, 275, 287, 317,388, 549, 550, 555, 561, 562, 566, 578, 592, 593, 596,597, 602,603, 606, 607, 608, 609, 615,616,617,618, 620, 633, 635, 640, 641, 653, 656, 667, 670, 675, 680, 684, 687, 690, 691, 695, 696, 697, 700, 701, 702,705, 706, 707, 708, 711, 714, 715, 720, 722, 724 ];
  try {
      const data = await axios(config.url);
      const themes = data.data.results;
      const movies = themes.filter((el:any) => moviesId.find((num:number)=>num === el.id))
      res.status(200).send(movies);
    } catch (e:any) {
      console.log(e.message);
      return
    }
}

export const readCityThemes = async (req: Request, res: Response) => {
  const moviesId: number[] = [50, 52, 53, 54, 55,56,59,60,61,63,64,66,67,104,105,106,233,252,253,257, 372, 3373, 397, 413,415,417,418,419,420,421,510,632,634,];
  try {
      const data = await axios(config.url);
      const themes = data.data.results;
      const city = themes.filter((el:any) => moviesId.find((num:number)=>num === el.id))
      res.status(200).send(city);
    } catch (e:any) {
      console.log(e.message);
      return
    }
}

export const readSpaceThemes = async (req: Request, res: Response) => {
  const moviesId: number[] = [126, 127,128,129,130,131,132,133,134,135,137,139,140,141,143,144,145,146,];
  try {
      const data = await axios(config.url);
      const themes = data.data.results;
      const space = themes.filter((el:any) => moviesId.find((num:number)=>num === el.id))
      res.status(200).send(space);
    } catch (e:any) {
      console.log(e.message);
      return
    }
  }


  export const readSets = async (req: Request, res: Response) => {
    try {
        const data = await axios(config.set_url);        
        const sets = data.data.results;
        res.status(200).send(sets);
      } catch (e:any) {
        console.log(e.message);
        return
      }

}

  export const readSetId = async(req: Request, res: Response) => {
    try {      
      let id = req.params.id;
      let page:any = req.query.page || 1;
      const itemsPerPage:any = 12;
      const startIndex = (page - 1) * itemsPerPage;
      const data = await axios(`${config.set_url}&theme_id=${id}`);
      const sets = data.data.results;
      const totalItems = sets.length-1;
      const totalPages = Math.ceil(totalItems / itemsPerPage)
      const items = sets.slice(startIndex, startIndex + parseInt(itemsPerPage));
      res.status(200).send(sets);
    } catch (e:any) {
      console.log(e.message);
      return
    }  
  
  }
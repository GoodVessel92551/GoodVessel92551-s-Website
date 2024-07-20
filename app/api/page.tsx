import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("Booogle_Revise");
        const movies = await db
            .collection("View_Count")
            .find({})
        res.json(movies);
        console.log(movies)
    } catch (e) {
        console.error(e);
    }
}
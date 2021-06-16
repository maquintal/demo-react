import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const tutorials = await db
    .collection("tutorials")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(tutorials);
};
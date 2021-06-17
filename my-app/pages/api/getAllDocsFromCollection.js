import { connectToDatabase } from "../../util/mongodb";

const GetAllDocsFromCollection = async (req, res) => {
  const { db } = await connectToDatabase();

  const tutorials = await db
    .collection("tutorials")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return res.json(tutorials);
};

export default GetAllDocsFromCollection
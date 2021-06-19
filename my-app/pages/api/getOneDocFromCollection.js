import { connectToDatabase } from "../../util/mongodb";

import { ObjectID } from "mongodb"

const GetOneDocFromCollection = async (req, res) => {
  const { db } = await connectToDatabase();

  const id = req.query.id

  var objectId = new ObjectID(id);

  const tutorials = await db
    .collection("tutorials")
    .findOne({ _id: objectId })

  return res.json(tutorials);
};

export default GetOneDocFromCollection
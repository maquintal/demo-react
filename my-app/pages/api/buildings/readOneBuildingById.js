/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../util/mongodb";

import { ObjectID } from "mongodb"

const ReadOneBuildingById = async (req, res) => {
  const { db } = await connectToDatabase();

  const id = req.query.id

  var objectId = new ObjectID(id);

  const tutorials = await db
    .collection("tutorials")
    .findOne({ _id: objectId })

  return res.json(tutorials);
};

export default ReadOneBuildingById
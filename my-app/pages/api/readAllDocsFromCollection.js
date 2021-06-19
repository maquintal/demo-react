/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read ALL DOCUMENTS from a specific collection

 */

import { connectToDatabase } from "../../util/mongodb";

const ReadAllDocsFromCollection = async (req, res) => {
  const { db } = await connectToDatabase();

  const tutorials = await db
    .collection("tutorials")
    .find({})
    .limit(20)
    .toArray();

  return res.json(tutorials);
};

export default ReadAllDocsFromCollection
/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../util/mongodb";

const CreateOneDocIntoCollection = async (req, res) => {
  const { db } = await connectToDatabase();

  const data = req.body.data

  const tutorials = await db
    .collection("tutorials")
    .insertOne( {formData: data} )

  return res.json(tutorials);
};

export default CreateOneDocIntoCollection
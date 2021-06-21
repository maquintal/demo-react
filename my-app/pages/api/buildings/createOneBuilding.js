/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../../util/mongodb";

const CreateOneBuilding = async (req, res) => {

  const { db } = await connectToDatabase();
  
  const formData = req.body.formData

  const tutorials = await db
    .collection("tutorials")
    .insertOne( {formData} )

  return res.json(tutorials);

};

export default CreateOneBuilding
/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../../util/mongodb";

import { ObjectID } from "mongodb"

const UpdateManyAppartments = async (req, res) => {
  const { db } = await connectToDatabase();

  // Definition
  // db.collection.updateOne(filter, update, options)
  
  const id = req?.body?.selectedBuilding?._id
  const { appartments } = req.body.appartmentsFormData
  const objectId = new ObjectID(id);

  try {

    const updatedAppartemnts = await db
    .collection("tutorials")
    .updateMany(
      { _id: objectId },
      { $set: { "appartments": appartments } },
      { upsert: true }
    )

    return res.json(updatedAppartemnts);

  } catch (error) {
    throw new Error(error)
  }

};

export default UpdateManyAppartments
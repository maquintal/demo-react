/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../../util/mongodb";

import { ObjectID } from "mongodb"

const UpdateOneBuildingInfo = async (req, res) => {
  const { db } = await connectToDatabase();

  // Definition
  // db.collection.updateOne(filter, update, options)
  
  const id = req?.body?.selectedBuilding?._id
  const objectId = new ObjectID(id);

  try {

    const updatedBuildingInfo = await db
    .collection("tutorials")
    .updateOne(
      { _id: objectId },
      { $set: { "buildingInfo": req.body.buildingFormData } },
      { upsert: true }
    )

    return res.json(updatedBuildingInfo);

  } catch (error) {
    throw new Error(error)
  }

};

export default UpdateOneBuildingInfo
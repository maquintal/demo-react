/*
  Read Operations
  Read operations retrieve documents from a collection; i.e. query a collection for documents.

  This function with read Only ONE DOCUMENT from a specific collection

 */

import { connectToDatabase } from "../../util/mongodb";

const CreateOneDocIntoCollection = async (req, res) => {

  // try {
    const { db } = await connectToDatabase();
    
    const formData = req.body.formData

    // try {
      const tutorials = await db
        .collection("tutorials")
        .insertOnIe( {formData} )

        return res.json(tutorials);

  //   } catch (error) {
  //     console.log(`Opereation: Create FAILED: ${error}`)
  //     return res
  //   }

  // } catch(error) {
  //   console.log(`Connection to database FAILED: ${error}`)
  //   return res
  // }

};

export default CreateOneDocIntoCollection
import Place from "@/db/models/place.js";
import dbConnect from "@/db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(place);
  }
  if (request.method === "PUT") {
    const updatedPlace = request.body;
    await Place.findByIdAndUpdate(id, updatedPlace);
    response.status(200).json({ status: "updated Place" });
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: "deleted Place" });
  }
}

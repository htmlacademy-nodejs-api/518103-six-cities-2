import { readFileSync } from "node:fs";
import { FileReader } from "./file-reader.interface.js";
import { Amenity, City, HousingType, Offer } from "../../types/offer.type.js";

export class TSVFileReader implements FileReader {
  private rawData = "";

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: "utf-8" });
  }

  private rawDataToOffer(rawData: string): Offer {
    const [
      title,
      description,
      publishDate,
      city,
      previewImageUrl,
      imagesUrl,
      isPremium,
      isFavorite,
      rating,
      housingType,
      roomsCount,
      guestsCount,
      price,
      amenities,
      author,
      commentsCount,
      coordinates,
    ] = rawData.split("\t");
    return {
      title,
      description,
      publishDate: new Date(publishDate),
      city: city as City,
      previewImageUrl,
      imagesUrl: imagesUrl.split(";"),
      isPremium: isPremium === "true",
      isFavorite: isFavorite === "true",
      rating: parseFloat(rating),
      housingType: housingType as HousingType,
      roomsCount: parseInt(roomsCount, 10),
      guestsCount: parseInt(guestsCount, 10),
      price: parseInt(price, 10),
      amenities: amenities.split(";") as Amenity[],
      author: JSON.parse(author),
      commentsCount: parseInt(commentsCount, 10),
      coordinates: JSON.parse(coordinates),
    };
  }

  public toArray(): Offer[] {
    return this.rawData
      .split("\n")
      .filter((row) => row.trim().length > 0)
      .map((data) => this.rawDataToOffer(data));
  }
}

import { User } from "./user.types.js";

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum HousingType {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel'
}

export enum Amenity {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export const CityCoordinates: Record<City, Coordinates> = {
  [City.Paris]: { latitude: 48.85661, longitude: 2.351499 },
  [City.Cologne]: { latitude: 50.938361, longitude: 6.959974 },
  [City.Brussels]: { latitude: 50.846557, longitude: 4.351697 },
  [City.Amsterdam]: { latitude: 52.370216, longitude: 4.895168 },
  [City.Hamburg]: { latitude: 53.550341, longitude: 10.000654 },
  [City.Dusseldorf]: { latitude: 51.225402, longitude: 6.776314 }
}; 

export interface Offer {
  title: string; // 10-100 symbols
  description: string; // 20-1024 symbols
  publishDate: Date;
  city: City;
  previewImageUrl: string;
  imagesUrl: string[]; // alwayes 6 photos
  isPremium: boolean;
  isFavorite: boolean;
  rating: number; // 1-5 (with 1 optional decimal place
  housingType: HousingType;
  roomsCount: number; // 1-8
  guestsCount: number; // 1-10
  price: number; // 100-100000
  amenities: Amenity[]; // one ore more
  author: User;
  commentsCount?: number;
  coordinates: Coordinates;
}
import { ObjectId } from "mongodb";

export interface Product {
  name: string;
  price: number;
  slug: string;
  description: string;
  thumbnailUrl: string;
}

export interface ProductDocument extends Product {
  _id?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

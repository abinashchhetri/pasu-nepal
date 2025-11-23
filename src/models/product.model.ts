import { connect } from "@/lib/mongodb";
import { Product, ProductDocument } from "@/interface/product.interface";
import { ObjectId } from "mongodb";


const COLLECTION_NAME = "products";

export async function getProducts(): Promise<ProductDocument[]> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  return collection.find({}).toArray();
}

export async function getProductById(
  id: string
): Promise<ProductDocument | null> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  return collection.findOne({ _id: new ObjectId(id) });
}

export async function getProductBySlug(
  slug: string
): Promise<ProductDocument | null> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  return collection.findOne({ slug });
}

export async function createProduct(
  product: Product
): Promise<ProductDocument> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  const newProduct: ProductDocument = {
    ...product,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await collection.insertOne(newProduct);
  return { ...newProduct, _id: result.insertedId };
}

export async function updateProduct(
  id: string,
  updates: Partial<Product>
): Promise<ProductDocument | null> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: "after" }
  );
  return result || null;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const db = await connect();
  const collection = db.collection<ProductDocument>(COLLECTION_NAME);
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

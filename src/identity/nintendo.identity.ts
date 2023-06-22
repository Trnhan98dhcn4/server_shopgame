import { InferSchemaType, Schema, model } from "mongoose";

const NintendoSchema = new Schema(
  {
    title: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    version: String,
    BH: String,
    colorJoyCon: String,
    screen: String,
    data: String,
    Pin: String,
    price: String,
    code: String,
    des: String,
  },
  {
    timestamps: true,
  }
);

type Nintendo = InferSchemaType<typeof NintendoSchema>;
export default model<Nintendo>("Nintendos", NintendoSchema);

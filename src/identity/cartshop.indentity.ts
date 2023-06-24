import { InferSchemaType, Schema, model } from "mongoose";

export const cartShopSchema = new Schema(
    {
        img1: String,
        title: String,
        price: String,
        SL: String,
    },
    {
        timestamps: true,
    }
);

type cartShop = InferSchemaType<typeof cartShopSchema>;
export default model<cartShop>("CartShops", cartShopSchema);

import { InferSchemaType, Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user: String,
        password: String,
        name: String,
        address: String,
        avatar: String,
        pricePrev: String,
        //lich su mua hang
        historyUser: [
            {
                img1: String,
                title: String,
                price: String,
                SL: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

type Users = InferSchemaType<typeof UserSchema>;
export default model<Users>("Users", UserSchema);

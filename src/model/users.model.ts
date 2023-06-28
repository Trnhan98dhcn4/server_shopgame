export interface IUsersModel {
    user: string;
    password: string;
    name: string;
    address: string;
    pricePrev: string;
    avatar: string;

    historyUser: {
        img1: string;
        title: string;
        price: string;
        SL: string;
    }[];
}

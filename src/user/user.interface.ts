export interface UserData {
    no: number;
    email: string;
    token: string;
    name: string;
    image?: string;
}

export interface UserRO {
    user: UserData;
}

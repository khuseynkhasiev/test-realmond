export interface IUser {
    id: number;
    email: string;
    username: string;
    phone: string;
}

export interface IError {
    isError: boolean;
    message: string;
}

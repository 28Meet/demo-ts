export const initialState = {
    name: "",
    address: "",
    mail: "",
    number: "",
    gender: "",
    city: "--Select--",
    permission : false,
    isDeleted : false,
    id: 0
}

export const initialErrorState = {
    nameError: false,
    addressError: false,
    mailError: false,
    numberError: false,
    genderError: false,
    cityError: false,
    permissionError : false,
}

export interface IUser {
    id: number;
    name: string;
    address: string;
    number: string;
    mail: string;
    gender: string;
    city: string;
    permission: boolean;
    isDeleted: boolean;
}
import { useState, useEffect, FormEvent } from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";
import { IDropdownOption } from "@fluentui/react/lib/Dropdown";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Checkbox } from '@fluentui/react';
import { GenderOptions } from "../common/constants/Constants";
import Input from "../common/input/Input";
import DropDown from "../common/dropdown/DropDown";
import RadioButton from "../common/radiogroup/RadioButton";
import NumberTxtFeild from "../common/numbertxtField/NumberTxtFeild";

type StateTypes = {
    name: string,
    address: string,
    mail: string,
    number: string,
    gender: string | undefined,
    city: string,
    id: number
}

type errorTypes = {
    nameError: boolean,
    addressError: boolean,
    mailError: boolean,
    numberError: boolean,
    genderError: boolean,
    cityError: boolean
}

type errorMsgTypes = {
    nameMsg: string,
    addressMsg: string,
    mailMsg: string,
    numberMsg: string,
    genderMsg: string,
    cityMsg: string
}

const options: IChoiceGroupOption[] = [
    { key: 'male', text: 'Male' },
    { key: 'female', text: 'Female' }
];

const selectOptions: IDropdownOption[] = [
    {key : "", text : "--Select--"},
    {key : "Ahmedabad", text : "Ahmedabad"},
    {key : "Rajkot", text : "Rajkot"},
    {key : "Bhavnagar", text : "Bhavnagar"},
    {key : "Baroda", text : "Baroda"},
    {key : "Surat", text : "Surat"},
]


const Form = () => {
    const [data, setData] = useState<StateTypes>({
        name: "",
        address: "",
        mail: "meetpanchal@gmail.com",
        number: "1234567890",
        gender: "male",
        city: "",
        id: 0
    });
    const [error, setError] = useState<errorTypes>({
        nameError: false,
        addressError: false,
        mailError: false,
        numberError: false,
        genderError: false,
        cityError: false
    });
    const [errorMsg, setErrorMsg] = useState<errorMsgTypes>({
        nameMsg: "Please enter your name",
        addressMsg: "Please enter your address",
        mailMsg: "Please enter your mail",
        numberMsg: "Please enter your number",
        genderMsg: "Please select your gender",
        cityMsg: "Please select your city"
    });

    let { name, address, mail, number, gender, city, id } = data;
    let { nameError, addressError, mailError, numberError, genderError, cityError } = error;
    let { nameMsg, addressMsg, mailMsg, numberMsg, genderMsg, cityMsg } = errorMsg;

    const genderStyles : React.CSSProperties = {
        display : 'flex',
        flexDirection : "row",
        textAlign : "left",
        margin : 0,
        padding : 0,
        width : "100%"
    }

    const CGStyles: IChoiceGroupStyles = {
        label: {
            display: "inline"
        },
        flexContainer: {
            columnGap: "1em",
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }
    }

    const checkError = (fieldName: string) => {
        if (fieldName == "name") {
            (name == "" && setError({ ...error, nameError: true }));
        } else if (fieldName == "address") {
            (address == "" && setError({ ...error, addressError: true }));
        } else if (fieldName == "mail") {
            if (mail == "") {
                setError({ ...error, mailError: true });
            } else {
                let containes = mail.includes('.' || '@');
                if (!containes) {
                    setError({ ...error, mailError: true });
                    setErrorMsg({ ...errorMsg, mailMsg: "Please enter valid email address" });
                }
            }
        } else if (fieldName == "number") {
            if (number == "") {
                setError({ ...error, numberError: true });
            } else {
                if (number.length != 10) {
                    setError({ ...error, numberError: true });
                    setErrorMsg({ ...errorMsg, numberMsg: "Mobile number should be 10 digits" });
                }
            }
        } else if (fieldName == "gender") {
            (gender == "" && setError({ ...error, genderError: true }))
        } else if (fieldName == "city") {
            (city == "" && setError({ ...error, cityError: true }))
        } else { }
    }

    const removeError = (fieldName: string) => {
        if (fieldName == "name") {
            setError({ ...error, nameError: false });
        } else if (fieldName == "address") {
            setError({ ...error, addressError: false });
        } else if (fieldName == "mail") {
            setError({ ...error, mailError: false });
        } else if (fieldName == "number") {
            setError({ ...error, numberError: false });
        } else if (fieldName == "gender") {
            setError({ ...error, genderError: false });
        } else if (fieldName == "city") {
            setError({ ...error, cityError: false });
        } else {

        }
    }

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setData({ ...data, [name]: value })
    }

    const setGenderValue = (value: string) => {
        setData({ ...data, gender: value });
    }

    const setCity = (value: string) => {
        setData({...data, city : value});
    }

    const parentStyle : Partial<IStackStyles> = {
            root : {
                width : "40%",
                display : "block",
                border : '2px solid black',
                padding : "2rem",
                margin : "auto"
            }
    }

    return (
        <Stack styles={parentStyle}>
            <Input name="name" Label="Name" value={name} multiline={false} error={nameError} errorMsg={nameMsg} onKeyPress={() => removeError('name')} onLeave={() => checkError("name")} onchange={handleChange} />

            <Input name="address" Label="Address" value={address} multiline={true} error={addressError} errorMsg={addressMsg} onKeyPress={() => removeError("address")} onLeave={() => checkError("address")} onchange={handleChange} />

            <Input name="mail" Label="Email" value={mail} multiline={false} error={mailError} errorMsg={mailMsg} onKeyPress={() => removeError("mail")} onLeave={() => checkError("mail")} onchange={handleChange} />

            <Input name="number" Label="Mobile" value={number} multiline={false} error={numberError} errorMsg={numberMsg} onKeyPress={() => removeError("number")} onLeave={() => checkError("number")} onchange={handleChange} />

            <Stack.Item style={genderStyles}>
                <ChoiceGroup
                    name="gender"
                    value={gender}
                    options={options}
                    label="Gender"
                    styles={CGStyles}
                    onChange={(ev?: FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
                        let value = option?.text;
                        setData({ ...data, gender: value });
                    }}
                    required
                />
            </Stack.Item>

            <DropDown label="City" options={selectOptions} setCity={setCity} value={city} />

        </Stack>
    );
}

export default Form;
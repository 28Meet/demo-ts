import { useState, useEffect, FormEvent } from "react";
import { FontSizes } from '@fluentui/theme';
import { Checkbox, initializeIcons, Text } from '@fluentui/react';
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";
import { IDropdownOption } from "@fluentui/react/lib/Dropdown";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { GenderOptions } from "../common/constants/Constants";
import Input from "../common/input/Input";
import DropDown from "../common/dropdown/DropDown";
import Button from "../common/button/Button";
import RadioButton from "../common/radiogroup/RadioButton";
import NumberTxtFeild from "../common/numbertxtField/NumberTxtFeild";
import { json } from "stream/consumers";

initializeIcons();

type formPropTypes = {
    editid: number;
}

type StateTypes = {
    name: string,
    address: string,
    mail: string,
    number: string,
    gender: string | undefined,
    city: string,
    permission : boolean,
    id: number
}

type errorTypes = {
    nameError: boolean,
    addressError: boolean,
    mailError: boolean,
    numberError: boolean,
    genderError: boolean,
    cityError: boolean,
    permissionError : boolean
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
    { key: "--Select--", text: "--Select--" },
    { key: "Ahmedabad", text: "Ahmedabad" },
    { key: "Rajkot", text: "Rajkot" },
    { key: "Bhavnagar", text: "Bhavnagar" },
    { key: "Baroda", text: "Baroda" },
    { key: "Surat", text: "Surat" },
]


const Form = (props: formPropTypes) => {
    let { editid } = props;
    let initialState = {
        name: "",
        address: "",
        mail: "",
        number: "",
        gender: "",
        city: "--Select--",
        permission : false,
        id: 0
    }
    let initialErrorState = {
        nameError: false,
        addressError: false,
        mailError: false,
        numberError: false,
        genderError: false,
        cityError: false,
        permissionError : false,
    }
    const [data, setData] = useState<StateTypes>(initialState);
    const [error, setError] = useState<errorTypes>(initialErrorState);
    const [errorMsg, setErrorMsg] = useState<errorMsgTypes>({
        nameMsg: "Please enter your name",
        addressMsg: "Please enter your address",
        mailMsg: "Please enter your mail",
        numberMsg: "Please enter your number",
        genderMsg: "Please select your gender",
        cityMsg: "Please select your city"
    });
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    let { name, address, mail, number, gender, city, id, permission } = data;
    let { nameError, addressError, mailError, numberError, genderError, cityError, permissionError } = error;
    let { nameMsg, addressMsg, mailMsg, numberMsg, genderMsg, cityMsg } = errorMsg;

    const genderStyles: React.CSSProperties = {
        display: 'block',
        flexDirection: "row",
        textAlign: "left",
        margin: 0,
        padding: 0,
        width: "100%"
    }

    const errorTextStyle : React.CSSProperties = {
        color : "#a4262c",
        display : "block",
        fontSize : "12px"
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
            (city == "--Select--" && setError({ ...error, cityError: true }))
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
        } else if(fieldName == "permission") {
            setError({...error, permissionError : false })
        } else {

        }
    }

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setData({ ...data, [name]: value })
    }

    // const setGenderValue = (event: string, value: string) => {
    //     // console.log(value);
    //     // setData({ ...data, gender: value });
    //     console.log(data);
    // }

    const setCity = (event: string, option: string) => {
        let value = option;
        setData({ ...data, city: value });
    }

    const parentStyle: Partial<IStackStyles> = {
        root: {
            width: "35%",
            display: "block",
            border: '2px solid black',
            padding: "1rem",
            paddingTop: "0.1rem",
            margin: "auto"
        }
    }

    const buttonStyles = {
        display: "flex",
        justifyContent: "space-evenly"
    }

    const handleSubmit = () => {
        if (name == "" && address == "" && mail == "" && number == "" && gender == "" && city == "--Select--" && permission == false) {
            setError({
                nameError: true,
                addressError: true,
                mailError: true,
                numberError: true,
                genderError: true,
                cityError: true,
                permissionError : true
            });
        } else if (name == "") {
            setError({ ...error, nameError: true });
        } else if (address == "") {
            setError({ ...error, addressError: true });
        } else if (mail == "") {
            setError({ ...error, mailError: true });
        } else if (number == "") {
            setError({ ...error, numberError: true });
        } else if (gender == "") {
            setError({ ...error, genderError: true });
        } else if (city == "") {
            setError({ ...error, cityError: true });
        } else if(permission == false) {
            setError({ ...error, permissionError : true})
        } else {
            if (isUpdate) {
                let user = new Array();
                user = JSON.parse(localStorage.getItem("RECORD")!);
                for(let i = 0 ; i < user.length; i++){
                    if(user[i].id == editid){
                        user[i].name = data.name;
                        user[i].address = data.address;
                        user[i].mail = data.mail;
                        user[i].number = data.number;
                        user[i].gender = data.gender;
                        user[i].city = data.city;
                        user[i].permission = data.permission;
                    }
                }
                localStorage.setItem("RECORD", JSON.stringify(user));
                setIsUpdate(false);
            } else {
                let ID = Number(localStorage.getItem("ID"));
                let record = new Array();

                /* here getIterm() return string or {} so ts generate an error 
                    so when we sure about that the data come from localstorage in 
                    not an empty so that time we declare ! sign to tell ts that
                    it not be null
                */
                record = JSON.parse(localStorage.getItem("RECORD")!);

                if (record.length != 0) {
                    data.id = ID;
                    record.push(data);
                    ID++;
                    localStorage.setItem("RECORD", JSON.stringify(record));
                    localStorage.setItem("ID", JSON.stringify(ID));
                } else {
                    data.id = 1;
                    ID = 2;
                    record = [];
                    record.push(data);
                    localStorage.setItem("RECORD", JSON.stringify(record));
                    localStorage.setItem("ID", JSON.stringify(ID));
                }
            }
        }
    }

    const handleReset = () => {
       setData(initialState);
       setError(initialErrorState);
    }

    const getUserData = () => {
        setIsUpdate(true);
        let user = new Array();
        user = JSON.parse(localStorage.getItem("RECORD")!);
        let userrecord = user.find((record) => {
            return record.id == editid;
        });
        setData(userrecord);
    }

    useEffect(() => {
        (editid != 0 && getUserData());
    }, [editid]);

    return (
        <Stack styles={parentStyle}>
            <h2 style={{ fontSize: FontSizes.size28, fontFamily: "Monaco" }}>
                {
                    (isUpdate) ? "Update" : "Registration"
                }
            </h2>
            <Input name="name" Label="Name" value={name} multiline={false} error={nameError} errorMsg={nameMsg} onKeyPress={() => removeError('name')} onLeave={() => checkError("name")} onchange={handleChange} />

            <Input name="address" Label="Address" value={address} multiline={true} error={addressError} errorMsg={addressMsg} onKeyPress={() => removeError("address")} onLeave={() => checkError("address")} onchange={handleChange} />

            <Input name="mail" Label="Email" value={mail} multiline={false} error={mailError} errorMsg={mailMsg} onKeyPress={() => removeError("mail")} onLeave={() => checkError("mail")} onchange={handleChange} />

            <Input name="number" Label="Mobile" value={number} multiline={false} error={numberError} errorMsg={numberMsg} onKeyPress={() => removeError("number")} onLeave={() => checkError("number")} onchange={handleChange} />

            <Stack.Item style={genderStyles}>
                <ChoiceGroup
                    name="gender"
                    // value={gender}
                    defaultSelectedKey={gender}
                    selectedKey={gender}
                    options={options}
                    label="Gender"
                    styles={CGStyles}
                    onChange={(ev?: FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
                        let value = option?.key;
                        setData({ ...data, gender: value });
                    }}
                    required
                />
                <Stack.Item>
                {
                    (genderError && <Text style={errorTextStyle}>Please select your gender</Text>)
                }
                </Stack.Item>
            </Stack.Item>

            {/* <RadioButton name="gender" value={gender} options={options} label="Gender" setGender={setGenderValue} /> */}

            <DropDown label="City" options={selectOptions} setCity={setCity} value={city} error={cityError} errorMsg={cityMsg} onLeave={() => checkError("city")} removeError={() => removeError("city")} />

            <Stack.Item style={{ marginTop: "10px" }}>
                <Checkbox checked={permission} onChange={() => {removeError('permission'); setData({...data, permission : true})}} label="I have read and understand company terms and conditions." />
                <Stack.Item>
                    {
                        (permissionError && <Text style={{ color: "#a4262c", display : "block", fontSize : "12px", textAlign : "left"}}>You must accept terms and conditions</Text>)
                    }
                </Stack.Item>
            </Stack.Item>

            <Stack.Item style={buttonStyles}>
                <Button  {...(isUpdate ? { text: "Update" } : { text: "Sign Up" })} color="#0078d4" textColor="white" onclick={handleSubmit} />
                <Button text="Reset" color="#9c27b0" textColor="white" onclick={handleReset} />
            </Stack.Item>
        </Stack>
    );
}

export default Form;
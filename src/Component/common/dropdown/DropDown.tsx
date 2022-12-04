import React,{ FormEvent } from "react";
import { Dropdown, IDropdownOption, IDropdownStyles } from "@fluentui/react/lib/Dropdown";

type DropwdownProps = {
    options: IDropdownOption[],
    label: string,
    setCity: Function,
    value : string,
    error : boolean,
    errorMsg : string,
    onLeave : Function,
    removeError : Function
}

const dropDownStyle:Partial<IDropdownStyles> = {
    root : {
        textAlign : "left"
    }
}

const DropDown = (props: DropwdownProps) => {
    let { options, label, setCity, value, error, errorMsg, onLeave, removeError} = props;
    return (
        <>
            <Dropdown 
                styles={dropDownStyle}
                options={options}
                label = {label}
                onChange = {(event: FormEvent<HTMLDivElement>, option?:IDropdownOption) => {
                    let value = option?.text;
                    setCity(event,value);
                    removeError();
                }}
                defaultSelectedKey={value}
                selectedKey={value}
                {...(error && {errorMessage : errorMsg})}
                onBlur={() => onLeave()}
                required
            />
        </>
    );
}

export default DropDown;
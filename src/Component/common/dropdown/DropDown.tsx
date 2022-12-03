import React,{ FormEvent } from "react";
import { Dropdown, IDropdownOption, IDropdownStyles } from "@fluentui/react/lib/Dropdown";

type DropwdownProps = {
    options: IDropdownOption[],
    label: string,
    setCity: Function,
    value : string
}

const dropDownStyle:Partial<IDropdownStyles> = {
    root : {
        textAlign : "left"
    }
}

const DropDown = (props: DropwdownProps) => {
    let { options, label, setCity, value} = props;
    return (
        <>
            <Dropdown 
                styles={dropDownStyle}
                options={options}
                label = {label}
                onChange = {(event: FormEvent<HTMLDivElement>, option?:IDropdownOption) => {
                    let value = option?.text;
                    setCity(value);
                }}
                defaultSelectedKey={value}
                required
            />
        </>
    );
}

export default DropDown;
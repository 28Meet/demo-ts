import React, { FormEvent } from "react";
import { Stack } from "@fluentui/react";
import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";

type propsType = {
    name: string,
    value: string,
    options: IChoiceGroupOption[],
    label: string,
    setGender: Function
}

const RadioButton = (props: propsType) => {
    let { name, value, options, label, setGender } = props;

    const genderStyels: React.CSSProperties = {
        display: 'flex',
        flexDirection: "row",
        textAlign: "left",
        margin: 0,
        padding: 0,
        width: "100%"
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

    return (
        <>
            <Stack.Item style={genderStyels}>
                <ChoiceGroup
                    name={name}
                    value={value}
                    options={options}
                    label={label}
                    onChange={(ev?: FormEvent<HTMLElement | HTMLInputElement>, option?:IChoiceGroupOption) => {
                        let value = option?.key;
                        setGender(ev,value);
                    }}
                    defaultSelectedKey={"male"}
                    required
                />
            </Stack.Item>
        </>
    );
}

export default RadioButton;
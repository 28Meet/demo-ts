import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";
import { GenderType } from "../constants/Constants";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { FormEvent } from "react";

type radioPropsType = {
    name : string,
    options : IChoiceGroupOption[],
    label : string,
    onchange : Function
}

const CGStyles: IChoiceGroupStyles = {
    root: {
        display: 'inline',
        alignItems: 'left'
    }
}

const RadioButton = (props : radioPropsType) => {
    let { name, options, label, onchange} = props;
    return(
        <>
            <Stack.Item>
                <ChoiceGroup 
                    name={name}
                    label={label}
                    options={options}
                    styles={CGStyles}
                    onChange={(ev?: FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
                        let value = option?.value;
                        onchange(option?.value);
                    }}
                    required
                />
            </Stack.Item>
        </>
    );
}

export default RadioButton;
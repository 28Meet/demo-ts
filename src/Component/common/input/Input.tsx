import { ITextFieldStyleProps, ITextFieldStyles, TextField } from "@fluentui/react/lib/TextField";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import React, { FormEvent } from "react";

type InputProps = {
    name: string,
    Label: string,
    value?: string,
    multiline: boolean,
    error: boolean,
    errorMsg: string,
    onLeave: Function,
    onKeyPress: Function,
    onchange: Function
}

const stackStyles:React.CSSProperties = {
    textAlign : "left"
}

// const styles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
//     root: {
//         width: '300px'
//     }
// })

const Input = (props: InputProps) => {
    let { name, Label, value, multiline, error, errorMsg, onLeave, onKeyPress, onchange } = props;

    return (
        <>
            <Stack.Item style={stackStyles}>
                <TextField
                    name={name}
                    label={Label}
                    value={value}
                    multiline={multiline}
                    {...(error && { errorMessage: errorMsg })}
                    onBlur={() => onLeave()}
                    onChange={(e: FormEvent) => { onchange(e) }}
                    onKeyUp={() => onKeyPress()}
                    required
                />
            </Stack.Item>
        </>
    );
}

export default Input;
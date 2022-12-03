import { ITextFieldStyleProps, ITextFieldStyles, TextField } from "@fluentui/react/lib/TextField";
import React , {FormEvent} from "react";
import { MethodSignature } from "typescript";

type InputProps = {
    name : string,
    Label : string,
    value? : string ,
    multiline : boolean,
    error : boolean,
    errorMsg : string,
    onchange : Function,
    onLeave : Function,
    onKeyPress : Function
}

const styles = ( props : ITextFieldStyleProps) : Partial<ITextFieldStyles> => ({
    root : {
         width : '300px'
    }
 })

const Input = (props : InputProps) => {
    let { name, Label, value, multiline, error, errorMsg, onchange,onLeave, onKeyPress} = props;

    return(
        <>
            <TextField 
                name ={name}
                label={Label}
                value={value}
                styles={styles}
                multiline={multiline}
                {...(error && {errorMessage : errorMsg})}
                onBlur={() => onLeave()}
                onKeyUp={() => onKeyPress()}
            />
        </>
    );
}

export default Input;
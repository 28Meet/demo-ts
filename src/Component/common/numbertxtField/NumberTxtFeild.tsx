import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";

type NumberProps = {
    name : string,
    label : string,
    value : string,
    error : boolean,
    errorMsg : string ,
    onLeave : Function
    onchange : (event : React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onKeypress : Function
}

const numberStyles = () => {
    return {
        root : {
            width : '300px'
        }
    }
}

const NumberTxtFeild = (props : NumberProps) => {
    let { name, label, value, error, errorMsg, onLeave, onchange, onKeypress} = props;

    return(
        <>
            <MaskedTextField 
                name={name}
                label={label}
                mask={"12345 09876"}
                value={value}
                styles={numberStyles}
                onChange={(event) => onchange(event)}
                onBlur={() => onLeave()}
                {...(error && {errorMessage : errorMsg})}
                onKeyUp={() => onKeypress()}
            />
        </>
    );
}

export default NumberTxtFeild;
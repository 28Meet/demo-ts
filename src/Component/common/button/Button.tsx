import { DefaultButton } from "@fluentui/react/lib/Button";

type buttonPropsType = {
    text : string,
    color : string,
    textColor : string,
    margin : string | number,
    onclick : Function,
}

const Button = (props : buttonPropsType) => {
    let { text, color, textColor,  margin, onclick, } = props;
    return(
        <>
            <DefaultButton 
                style={{ backgroundColor : color, color : textColor, margin : margin }}
                text={text}
                onClick={() => onclick()}
            />
        </>
    );
}

export default Button;
import { DefaultButton } from "@fluentui/react/lib/Button";

type buttonPropsType = {
    text : string,
    color : string,
    textColor : string,
    onclick : Function
}

const Button = (props : buttonPropsType) => {
    let { text, color, textColor, onclick } = props;
    return(
        <>
            <DefaultButton 
                style={{ backgroundColor : color, color : textColor }}
                text={text}
                onClick={() => onclick()}
            />
        </>
    );
}

export default Button;
import { DefaultButton } from "@fluentui/react/lib/Button";

type buttonPropsType = {
    text : string,
    color : string,
    textColor : string
}

const Button = (props : buttonPropsType) => {
    let { text, color, textColor } = props;
    return(
        <>
            <DefaultButton 
                style={{ backgroundColor : color, color : textColor }}
                text={text}
            />
        </>
    );
}

export default Button;
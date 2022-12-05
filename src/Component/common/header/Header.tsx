import React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";

const Header = () => {
    const parentStyle : React.CSSProperties = {
        width : "80%",
        border : "1px solid black"
    }
    
    return(
        <>
            <Stack.Item style={parentStyle}>
                
            </Stack.Item>
        </>
    );
}

export default Header;
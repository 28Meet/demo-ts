import { useState, useEffect } from "react";
import { Announced } from '@fluentui/react/lib/Announced';
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { MarqueeSelection } from "@fluentui/react/lib/MarqueeSelection";

const Table = () => {
    const cols = [
        {
            key: "id",
            name: "Id",
            fieldName: "id",
            minWidth: 30,
            maxWidth: 50,
            isResizable: true
        },
        {
            key: "name",
            name: "Name",
            fieldName: "name",
            minWidth: 70,
            maxWidth: 130,
            isResizable: true
        },
        {
            key: "address",
            name: "Address",
            fieldName: "address",
            minWidth: 100,
            maxWidth: 280,
            isResizable: true
        },
        {
            key: "mail",
            name: "Email",
            fieldName: "mail",
            minWidth: 50,
            maxWidth: 180,
            isResizable: true
        },
        {
            key: "number",
            name: "Number",
            fieldName: "number",
            minWidth: 50,
            maxWidth: 100,
            isResizable: true
        },
        {
            key: "gender",
            name: "Gender",
            fieldName: "gender",
            minWidth: 30,
            maxWidth: 90,
            isResizable: true
        },
        {
            key: "city",
            name: "City",
            fieldName: "city",
            minWidth: 30,
            maxWidth: 50,
            isResizable: true
        }
    ]
    const [items, setItems] = useState<[]>([])
    const [selectionCount, setSelectionCount] = useState<Number>(0);



    const getSelectionCount = () => {

    }
    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("RECORD")!));
    }, []);

    return (
        <>
            <DetailsList
                items={items}
                columns={cols}
            // selection={}
            />
        </>
    );
}

export default Table;
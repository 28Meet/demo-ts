import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";

export type GenderType = {
    key : string,
    value : string
}[]

export const GenderOptions = [
    {key : "Male", value : "male"},
    {key : "Female", value : "female"}
];

export const Columns = [
    { key: 'id', name: 'Id', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'address', name: 'Address', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'mail', name: 'Email', fieldName: 'mail', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'mobile', name: 'Mobile', fieldName: 'mobile', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'gender', name: 'Gender', fieldName: 'gender', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'city', name: 'City', fieldName: 'city', minWidth: 100, maxWidth: 200, isResizable: true },
]
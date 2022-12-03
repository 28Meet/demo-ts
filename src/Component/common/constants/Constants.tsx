import { ChoiceGroup, IChoiceGroupOption, IChoiceGroupStyles } from "@fluentui/react/lib/ChoiceGroup";

export type GenderType = {
    key : string,
    value : string
}[]

export const GenderOptions = [
    {key : "Male", value : "male"},
    {key : "Female", value : "female"}
];
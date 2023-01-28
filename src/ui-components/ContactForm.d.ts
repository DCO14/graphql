/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormInputValues = {
    input?: {
        age?: string;
        birthDate?: string;
        email?: string;
        name?: string;
    };
};
export declare type ContactFormValidationValues = {
    input?: {
        age?: ValidationFunction<string>;
        birthDate?: ValidationFunction<string>;
        email?: ValidationFunction<string>;
        name?: ValidationFunction<string>;
    };
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormOverridesProps = {
    ContactFormGrid?: PrimitiveOverrideProps<GridProps>;
    input?: PrimitiveOverrideProps<HeadingProps>;
    "input.age"?: PrimitiveOverrideProps<TextFieldProps>;
    "input.birthDate"?: PrimitiveOverrideProps<TextFieldProps>;
    "input.email"?: PrimitiveOverrideProps<TextFieldProps>;
    "input.name"?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormProps = React.PropsWithChildren<{
    overrides?: ContactFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ContactFormInputValues) => void;
    onChange?: (fields: ContactFormInputValues) => ContactFormInputValues;
    onValidate?: ContactFormValidationValues;
} & React.CSSProperties>;
export default function ContactForm(props: ContactFormProps): React.ReactElement;

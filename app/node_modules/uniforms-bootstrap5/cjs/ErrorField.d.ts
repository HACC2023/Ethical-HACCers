import React, { HTMLProps } from 'react';
import { Override } from 'uniforms';
export declare type ErrorFieldProps = Override<Omit<HTMLProps<HTMLDivElement>, 'onChange'>, {
    error?: any;
    errorMessage?: string;
}>;
declare const _default: import("uniforms").ConnectedField<{
    error?: any;
    errorMessage?: string | undefined;
} & Omit<Omit<React.HTMLProps<HTMLDivElement>, "onChange">, "error" | "errorMessage">, string | number | readonly string[] | undefined>;
export default _default;

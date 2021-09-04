import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

type variantType = 'filled' | 'outlined' | 'standard';
type Margin = 'none' | 'dense' | 'normal';


/**
 * 
 * @type onChange -> validate input text on forcus text input
 * @type helperTextError -> show error text input validate
 */
interface TextFieldBaseProps {
    className?: string;
    id?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    variant?: variantType | 'standard';
    margin?: Margin | 'normal';
    autoComplete?: string;
    required?: boolean | false;
    fullWidth?: boolean | false;
    autoFocus?: boolean | false;
    type?: string;
    helperTextError?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export interface TextFieldBaseRef{
    getValue(): void;
    setValue(value: string): void;
}

export interface TextFieldBaseComponent extends React.ForwardRefRenderFunction<TextFieldBaseRef, TextFieldBaseProps>{};

const TextFieldBase: TextFieldBaseComponent = (props, ref) =>{
    const inputRef = React.useRef<TextFieldProps>(null);

    const {
        variant,
        margin,
        required,
        fullWidth,
        id,
        label,
        name,
        placeholder,
        autoFocus,
        autoComplete,
        type,
        helperTextError,
        onChange
    } = props;

    React.useImperativeHandle(ref, () => ({
        getValue: () => inputRef.current?.value ?? '',
        setValue: (value) =>  inputRef.current?.defaultValue
    }));
    
    return (

        <TextField
            id={id}
            label={label}
            name={name}
            placeholder={placeholder}
            variant={variant} 
            margin={margin}
            required={required}
            fullWidth={fullWidth}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            inputRef={inputRef}
            type={type}
            helperText={helperTextError}
            onChange={onChange}
        />
    )

}

export default React.forwardRef(TextFieldBase);
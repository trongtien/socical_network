import React from 'react';
import Button from '@material-ui/core/Button';

type ButtonType =  'submit' | 'reset' | 'button' | undefined;
type VariantType = 'text' | 'outlined' | 'contained';
type Color = 'inherit' | 'primary' | 'secondary' | 'default';

interface ButtonBaseProps {
    className?: string;
    label?: string;
    type?: ButtonType;
    variant?: VariantType;
    color?: Color;
    fullWidth?: boolean;
}

const ButtonBase: React.FunctionComponent<ButtonBaseProps> = (props) =>{

    const { className, label, type, variant, color, fullWidth} = props;

    return(
        <Button
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            color={color}
            className={className}
        >
            {label ? label : ""}
        </Button>
    )
}

export default ButtonBase;
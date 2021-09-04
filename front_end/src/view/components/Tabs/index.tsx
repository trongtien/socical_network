import React from 'react';
import Tabs from '@material-ui/core/Tabs';

type scrollButton = 'auto' | 'desktop' | 'on' | 'off';
type indicatorColor = "secondary" | "primary";
type textColor = "secondary" | "primary" | "inherit";

interface TabsBaseProps {
    className?: string;
    value?: number;
    indicatorColor?: indicatorColor;
    textColor?: textColor;
    scrollButtons?: scrollButton;
    onChange?:(event: React.ChangeEvent<{}>, newValue: number) => void;
}


const TabsBase: React.FunctionComponent<TabsBaseProps> = (props) => {

    const {
        className,
        value,
        indicatorColor,
        textColor,
        scrollButtons,
        onChange,
        children
    } = props;

    const onHandleChange = (event: React.ChangeEvent<{}>, newValue: number) =>{
        onChange && onChange(event, newValue);
    }

    return (
        <Tabs
            scrollButtons = {scrollButtons}
            className={className}
            value={value}
            indicatorColor={indicatorColor}
            textColor={textColor}
            onChange={onHandleChange}
        >
            {children}
        </Tabs>
    )
}

export default TabsBase
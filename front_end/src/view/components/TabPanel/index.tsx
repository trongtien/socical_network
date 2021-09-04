import React from 'react';


interface TabPanelBaseProps {
    index: number;
    value: number;
}

const TabPanelBase: React.FunctionComponent<TabPanelBaseProps> =  (props) =>{
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
        >
        {value === index && (
            {children}
        )}
        </div>
    )
}

export default TabPanelBase;
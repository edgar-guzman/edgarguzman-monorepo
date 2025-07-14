'use client';

import React from 'react';

interface QuantityProps {
    value: number;
    onQuantityChange: (value: number) => void;
    disabled?: boolean;
}

export const QuantitySelector: React.FC = () => {
    let [value, setValue] = React.useState(1);

    return (
        <div>
            <Quantity
                value={value}
                onQuantityChange={setValue}
            />
        </div>
    );
};

const Quantity: React.FC<QuantityProps> = (props) => {
    function handleIncrement() {
        props.onQuantityChange(props.value + 1);
    }

    function handleDecrement() {
        if (props.value > 1) props.onQuantityChange(props.value - 1);
    }

    return (
        <div className='grid grid-cols-3 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-0 max-w-full'>
            <span className='cursor-default hover:cursor-pointer font-semibold text-4xl min-h-full border border-solid border-black selection:text-black selection:bg-transparent grid place-items-center' onClick={handleDecrement}>-</span>
            <QuantityInput {...props} disabled aria-disabled />
            <span className='cursor-default hover:cursor-pointer font-semibold text-4xl min-h-full border border-solid border-black selection:text-black selection:bg-transparent grid place-items-center' onClick={handleIncrement}>+</span>
        </div>
    );
};

const QuantityInput: React.FC<QuantityProps> = (props) => {
    let [value, setValue] = React.useState(props.value);

    React.useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    function handleBlur() {
        props.onQuantityChange(value);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let qt = e.target.value.replace(/[^0-9]/, '');
        qt = qt == '' ? '1' : parseInt(qt).toString();
        setValue(parseInt(qt));
    }

    return (
        <div className='min-w-full'>
            <span
                className='cursor-default font-semibold text-xl min-h-full border border-solid border-black selection:text-black selection:bg-transparent grid place-items-center'
                onBlur={handleBlur}
                onChange={handleChange}
            >
                {value}
            </span>
        </div>
    );
};

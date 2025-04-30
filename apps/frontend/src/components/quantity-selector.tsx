'use client';

import { Button } from '@edgarguzman/ui/button';
import { Input } from '@edgarguzman/ui/input';
import React from 'react';

interface QuantitySelectorProps {
    // initialQuantity?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = (
        {
            // initialQuantity = 1,
            min = 1,
            max = 999,
            onChange
        }
    ) => {
        let [quantity, setQuantity] = React.useState<number>(1);

        function handleIncreaseButtonClick(quantity: number, setQuantity: (quantity: number) => void) {
            if (quantity < max) {
                setQuantity(quantity + 1);
                onChange?.(quantity + 1);
              }
        }

        function handleDecreaseButtonClick(quantity: number, setQuantity: (quantity: number) => void) {
            if (quantity > min) {
                setQuantity(quantity - 1);
                onChange?.(quantity - 1);
              }
        }

        function handleButtonClick(e: React.ChangeEvent<HTMLInputElement>) {
            let value = parseInt(e.target.value)

            if (!isNaN(value) && value >= min && value <= max) {
                setQuantity(value);
                onChange?.(value);
              } else if (e.target.value === "") {
                setQuantity(min);
                onChange?.(min);
              }
        }

        return (
            <section>
                <div className='font-semibold hover:cursor-default grid grid-cols-3 grid-rows-1'>
                    <Button
                        className='font-semibold hover:cursor-pointer'
                        onClick={(e) => {
                                e.preventDefault();

                                return handleDecreaseButtonClick(quantity, setQuantity);
                            }
                        }
                    >
                        Prev
                    </Button>
                    <div className='font-semibold hover:cursor-default grid place-items-center mx-4'>
                        <Input
                            className='md:text-4xl'
                            type='button'
                            value={quantity}
                            min={min}
                            max={max}
                            onChange={handleButtonClick}
                        />
                    </div>
                    <Button
                        className='font-semibold hover:cursor-pointer'
                        onClick={(e) => {
                                e.preventDefault();

                                return handleIncreaseButtonClick(quantity, setQuantity);
                            }
                        }
                    >
                        Next
                    </Button>
                </div>
            </section>
        );
    }

QuantitySelector.displayName = 'QuantitySelector';

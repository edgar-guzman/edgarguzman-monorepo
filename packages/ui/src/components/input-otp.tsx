'use client';

import { cn } from '@edgarguzman/lib/class-name';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Minus } from 'lucide-react';
import * as React from 'react';

export const InputOTP = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => {
    return (
        <OTPInput
            className={cn('disabled:cursor-not-allowed', className)}
            containerClassName={cn(
                'flex items-center gap-2 has-[:disabled]:opacity-50',
                containerClassName,
            )}
            ref={ref}
            {...props}
        />
    );
});

InputOTP.displayName = 'InputOTP';

export const InputOTPGroup = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
    return (
        <div
            className={cn('flex items-center', className)}
            ref={ref}
            {...props}
        />
    );
});

InputOTPGroup.displayName = 'InputOTPGroup';

export const InputOTPSlot = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
    let inputOTPContext = React.useContext(OTPInputContext);
    let { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
        <div
            className={cn(
                'relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                isActive && 'z-10 ring-1 ring-ring',
                className,
            )}
            ref={ref}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                    <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />
                </div>
            )}
        </div>
    );
});

InputOTPSlot.displayName = 'InputOTPSlot';

export const InputOTPSeparator = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => {
    return (
        <div role='separator' ref={ref} {...props}>
            <Minus />
        </div>
    );
});

InputOTPSeparator.displayName = 'InputOTPSeparator';

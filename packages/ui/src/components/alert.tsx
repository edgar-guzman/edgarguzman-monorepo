import { cn } from '@edgarguzman/lib/class-name';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const alertVariants = cva(
    'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive:
                    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => {
    return (
        <div
            className={cn(alertVariants({ variant }), className)}
            role='alert'
            ref={ref}
            {...props}
        />
    );
});

Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
    return (
        <h5
            className={cn(
                'mb-1 font-semibold leading-none tracking-tight',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            className={cn('text-sm [&_p]:leading-relaxed', className)}
            ref={ref}
            {...props}
        />
    );
});

AlertDescription.displayName = 'AlertDescription';

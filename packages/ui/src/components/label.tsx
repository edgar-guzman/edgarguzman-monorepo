'use client';

import { cn } from '@edgarguzman/lib/class-name';
import * as LabelPrimitive from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const labelVariants = cva(
    'text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

export const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => {
    return (
        <LabelPrimitive.Root
            className={cn(labelVariants(), className)}
            ref={ref}
            {...props}
        />
    );
});

Label.displayName = LabelPrimitive.Root.displayName;

'use client';

import { cn } from '@edgarguzman/lib/class-name';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

import { Label } from '@edgarguzman/ui/components/label';

export const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue,
);

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};

export const useFormField = () => {
    let fieldContext = React.useContext(FormFieldContext);
    let itemContext = React.useContext(FormItemContext);
    let { getFieldState, formState } = useFormContext();

    let fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext)
        throw new Error('useFormField should be used within <FormField>');

    let { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

type FormItemContextValue = {
    id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue,
);

export const FormItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    let id = React.useId();

    return (
        <FormItemContext.Provider value={{ id }}>
            <div className={cn('space-y-2', className)} ref={ref} {...props} />
        </FormItemContext.Provider>
    );
});

FormItem.displayName = 'FormItem';

export const FormLabel = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
    let { error, formItemId } = useFormField();

    return (
        <Label
            className={cn(error && 'text-destructive', className)}
            htmlFor={formItemId}
            ref={ref}
            {...props}
        />
    );
});

FormLabel.displayName = 'FormLabel';

export const FormControl = React.forwardRef<
    React.ElementRef<typeof Slot>,
    React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
    let { error, formItemId, formDescriptionId, formMessageId } =
        useFormField();

    return (
        <Slot
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
            ref={ref}
            {...props}
        />
    );
});

FormControl.displayName = 'FormControl';

export const FormDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
    let { formDescriptionId } = useFormField();

    return (
        <p
            id={formDescriptionId}
            className={cn('text-[0.8rem] text-muted-foreground', className)}
            ref={ref}
            {...props}
        />
    );
});

FormDescription.displayName = 'FormDescription';

export const FormMessage = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    let { error, formMessageId } = useFormField();
    let body = error ? String(error?.message ?? '') : children;

    if (!body) return null;

    return (
        <p
            id={formMessageId}
            className={cn(
                'text-[0.8rem] font-semibold text-destructive',
                className,
            )}
            ref={ref}
            {...props}
        >
            {body}
        </p>
    );
});

FormMessage.displayName = 'FormMessage';

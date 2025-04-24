'use client';

import { cn } from '@edgarguzman/lib/class-name';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

export function MenubarMenu({
    ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
    return <MenubarPrimitive.Menu {...props} />;
}

export function MenubarGroup({
    ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
    return <MenubarPrimitive.Group {...props} />;
}

export function MenubarPortal({
    ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
    return <MenubarPrimitive.Portal {...props} />;
}

export function MenubarRadioGroup({
    ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
    return <MenubarPrimitive.RadioGroup {...props} />;
}

export function MenubarSub({
    ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
    return <MenubarPrimitive.Sub data-slot='menubar-sub' {...props} />;
}

export const Menubar = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Root
            className={cn(
                'flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

Menubar.displayName = MenubarPrimitive.Root.displayName;

export const MenubarTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Trigger
            className={cn(
                'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-semibold outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export const MenubarSubTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => {
    return (
        <MenubarPrimitive.SubTrigger
            className={cn(
                'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                inset && 'pl-8',
                className,
            )}
            ref={ref}
            {...props}
        >
            {children}
            <ChevronRight className='ml-auto h-4 w-4' />
        </MenubarPrimitive.SubTrigger>
    );
});

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

export const MenubarSubContent = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.SubContent
            className={cn(
                'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

export const MenubarContent = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
    (
        {
            className,
            align = 'start',
            alignOffset = -4,
            sideOffset = 8,
            ...props
        },
        ref,
    ) => {
        return (
            <MenubarPrimitive.Portal>
                <MenubarPrimitive.Content
                    className={cn(
                        'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]',
                        className,
                    )}
                    align={align}
                    alignOffset={alignOffset}
                    sideOffset={sideOffset}
                    ref={ref}
                    {...props}
                />
            </MenubarPrimitive.Portal>
        );
    },
);

MenubarContent.displayName = MenubarPrimitive.Content.displayName;

export const MenubarItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => {
    return (
        <MenubarPrimitive.Item
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                inset && 'pl-8',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

MenubarItem.displayName = MenubarPrimitive.Item.displayName;

export const MenubarCheckboxItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
    return (
        <MenubarPrimitive.CheckboxItem
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className,
            )}
            checked={checked}
            ref={ref}
            {...props}
        >
            <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
                <MenubarPrimitive.ItemIndicator>
                    <Check className='h-4 w-4' />
                </MenubarPrimitive.ItemIndicator>
            </span>
            {children}
        </MenubarPrimitive.CheckboxItem>
    );
});

MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

export const MenubarRadioItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
    return (
        <MenubarPrimitive.RadioItem
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className,
            )}
            ref={ref}
            {...props}
        >
            <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
                <MenubarPrimitive.ItemIndicator>
                    <Circle className='h-4 w-4 fill-current' />
                </MenubarPrimitive.ItemIndicator>
            </span>
            {children}
        </MenubarPrimitive.RadioItem>
    );
});

MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

export const MenubarLabel = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => {
    return (
        <MenubarPrimitive.Label
            className={cn(
                'px-2 py-1.5 text-sm font-semibold',
                inset && 'pl-8',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

export const MenubarSeparator = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Separator
            className={cn('-mx-1 my-1 h-px bg-muted', className)}
            ref={ref}
            {...props}
        />
    );
});

MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

export const MenubarShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                'ml-auto text-xs tracking-widest text-muted-foreground',
                className,
            )}
            {...props}
        />
    );
};

MenubarShortcut.displayName = 'MenubarShortcut';

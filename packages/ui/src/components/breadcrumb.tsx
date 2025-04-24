import { cn } from '@edgarguzman/lib/class-name';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

export const Breadcrumb = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<'nav'> & {
        separator?: React.ReactNode;
    }
>(({ ...props }, ref) => {
    return <nav aria-label='breadcrumb' ref={ref} {...props} />;
});

Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = React.forwardRef<
    HTMLOListElement,
    React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => {
    return (
        <ol
            className={cn(
                'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => {
    return (
        <li
            className={cn('inline-flex items-center gap-1.5', className)}
            ref={ref}
            {...props}
        />
    );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & {
        asChild?: boolean;
    }
>(({ className, asChild, ...props }, ref) => {
    let Comp = asChild ? Slot : 'a';

    return (
        <Comp
            className={cn('transition-colors hover:text-foreground', className)}
            ref={ref}
            {...props}
        />
    );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
    return (
        <span
            className={cn('font-normal text-foreground', className)}
            role='link'
            aria-disabled='true'
            aria-current='page'
            ref={ref}
            {...props}
        />
    );
});

BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = ({
    children,
    className,
    ...props
}: React.ComponentProps<'li'>) => {
    return (
        <li
            className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
            role='presentation'
            aria-hidden='true'
            {...props}
        >
            {children ?? <ChevronRight />}
        </li>
    );
};

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = ({
    className,
    ...props
}: React.ComponentProps<'span'>) => {
    return (
        <span
            className={cn(
                'flex h-9 w-9 items-center justify-center',
                className,
            )}
            role='presentation'
            aria-hidden='true'
            {...props}
        >
            <MoreHorizontal className='h-4 w-4' />
            <span className='sr-only'>More</span>
        </span>
    );
};

BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

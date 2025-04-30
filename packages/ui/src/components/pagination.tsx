import { cn } from '@edgarguzman/lib/class-name';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { ButtonProps, buttonVariants } from '@edgarguzman/ui/components/button';

export const Pagination = ({
    className,
    ...props
}: React.ComponentProps<'nav'>) => {
    return (
        <nav
            className={cn('mx-auto flex w-full justify-center', className)}
            role='navigation'
            aria-label='pagination'
            {...props}
        />
    );
};

Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => {
    return (
        <ul
            className={cn('flex flex-row items-center gap-1', className)}
            ref={ref}
            {...props}
        />
    );
});

PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<'li'>
>(({ className, ...props }, ref) => {
    return <li className={cn('', className)} ref={ref} {...props} />;
});

PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
    React.ComponentProps<'a'>;

export const PaginationLink = ({
    className,
    isActive,
    size = 'icon',
    ...props
}: PaginationLinkProps) => {
    return (
        <a
            className={cn(
                buttonVariants({
                    variant: isActive ? 'outline' : 'ghost',
                    size,
                }),
                className,
            )}
            aria-current={isActive ? 'page' : undefined}
            {...props}
        />
    );
};

PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => {
    return (
        <PaginationLink
            className={cn('gap-1 pl-2.5', className)}
            aria-label='Go to previous page'
            size='default'
            {...props}
        >
            <ChevronLeft className='h-4 w-4' />
            <span>Previous</span>
        </PaginationLink>
    );
};

PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => {
    return (
        <PaginationLink
            className={cn('gap-1 pr-2.5', className)}
            size='default'
            aria-label='Go to next page'
            {...props}
        >
            <span>Next</span>
            <ChevronRight className='h-4 w-4' />
        </PaginationLink>
    );
};

PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = ({
    className,
    ...props
}: React.ComponentProps<'span'>) => {
    return (
        <span
            className={cn(
                'flex h-9 w-9 items-center justify-center',
                className,
            )}
            aria-hidden
            {...props}
        >
            <MoreHorizontal className='h-4 w-4' />
            <span className='sr-only'>More pages</span>
        </span>
    );
};

PaginationEllipsis.displayName = 'PaginationEllipsis';

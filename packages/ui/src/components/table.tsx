import { cn } from '@edgarguzman/lib/class-name';
import * as React from 'react';

export const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
    return (
        <div className='relative w-full overflow-auto'>
            <table
                className={cn('w-full caption-bottom text-sm', className)}
                ref={ref}
                {...props}
            />
        </div>
    );
});

Table.displayName = 'Table';

export const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
    return (
        <thead
            className={cn('[&_tr]:border-b', className)}
            ref={ref}
            {...props}
        />
    );
});

TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
    return (
        <tbody
            className={cn('[&_tr:last-child]:border-0', className)}
            ref={ref}
            {...props}
        />
    );
});

TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
    return (
        <tfoot
            className={cn(
                'border-t bg-muted/50 font-semibold [&>tr]:last:border-b-0',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
    return (
        <tr
            className={cn(
                'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
    return (
        <th
            className={cn(
                'h-10 px-2 text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
    return (
        <td
            className={cn(
                'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});

TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => {
    return (
        <caption
            className={cn('mt-4 text-sm text-muted-foreground', className)}
            ref={ref}
            {...props}
        />
    );
});

TableCaption.displayName = 'TableCaption';

'use client';

import { updateStoreSchema } from '@edgarguzman/lib/schema/store';
import type { Store } from '@edgarguzman/prisma';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@edgarguzman/ui/alert-dialog';
import { Button } from '@edgarguzman/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@edgarguzman/ui/form';
import { Input } from '@edgarguzman/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface SettingsFormProps {
    initialData: Store;
}

type SettingsFormValues = z.infer<typeof updateStoreSchema>;

// const storeTitleSchema = updateStoreParams.pick({
//     title: true
// });

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
    let params = useParams();
    let router = useRouter();
    let form = useForm<SettingsFormValues>({
        resolver: zodResolver(updateStoreSchema),
        defaultValues: initialData,
    });

    async function handleOnSubmit(data: SettingsFormValues) {
        try {
            await fetch(`/api/stores/${params.storeId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            router.refresh();

            toast.success('Store Title Updated');
        } catch (error) {
            let err = error as Error;

            console.error('Something went wrong', err.message);

            toast.error('Something went wrong');
        }
    }

    async function handleOnDelete() {
        try {
            await fetch(`/api/stores/${params.storeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            router.refresh();

            toast.success('Successfully Deleted Store');
        } catch (error) {
            let err = error as Error;

            console.error('Something went wrong', err.message);

            toast.error('Something went wrong');
        }
    }

    return (
        <>
            <div className=''>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant='destructive' size='sm'>
                            <Trash className='w-4 h-4' />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will reset the form to its initial state.
                                Any unsaved changes will be lost.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleOnDelete}>
                                Confirm
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <Form {...form}>
                <form className='' onSubmit={form.handleSubmit(handleOnSubmit)}>
                    <div className=''>
                        <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Store Title'
                                                aria-placeholder='Store Title'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </div>

                    <div className=''>
                        <FormField
                            control={form.control}
                            name='userId'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>User Id</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Store User Id'
                                                aria-placeholder='Store User Id'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </div>

                    <div className=''>
                        <FormField
                            control={form.control}
                            name='published'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Publication</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Store Publication'
                                                aria-placeholder='Store Publication'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </div>

                    <div className=''>
                        <Button className='' type='submit'>
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

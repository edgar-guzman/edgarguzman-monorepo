import { zodResolver } from '@hookform/resolvers/zod';
import type { UseFormProps } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function useZodForm<TSchema extends z.ZodType>(
    inputs: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
        schema: TSchema;
    }
) {
    return useForm({
        ...inputs,
        resolver: zodResolver(inputs.schema, undefined)
    });
}

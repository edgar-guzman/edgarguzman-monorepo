'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

export const ThemeProvider: React.FC<
    React.ComponentProps<typeof NextThemesProvider>
> = ({ children, ...props }) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

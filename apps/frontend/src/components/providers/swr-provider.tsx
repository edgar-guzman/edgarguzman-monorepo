'use client';

import type { ChildrenProps } from '@edgarguzman/types/children';
import React from 'react';
import { SWRConfig } from 'swr';

export const SWRProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <SWRConfig>{children}</SWRConfig>
};

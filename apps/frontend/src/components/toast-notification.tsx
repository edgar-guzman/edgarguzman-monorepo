'use client';

import { Button } from '@edgarguzman/ui/button';
import React from 'react';
import { toast } from 'sonner';

export const ToastNotification: React.FC = () => {
    return (
        <div className='my-4'>
            <Button
                onClick={() => {
                    toast('Order is Processing', {
                        description: 'Tuesday, April 22, 2025 at 9:00 AM',
                        action: {
                            label: 'Undo',
                            onClick() {
                                return console.log('Undo');
                            }
                        }
                    });
                }}
            >
                Toast Notification Button
            </Button>
        </div>
    );
};

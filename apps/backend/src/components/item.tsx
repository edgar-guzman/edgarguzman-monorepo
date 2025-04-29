'use client'

import { User } from '@edgarguzman/prisma'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    user: User
}

export const Item: React.FC<Props> = ({ user }) => {
    let router = useRouter()

    async function handleDelete(id: string) {
        await fetch(`/api/users?id=${  id}`, {
            method: 'DELETE'
        })

        router.refresh()
    }

    return (
        <div className='border-2 border-black p-3 rounded-md'>
            <h2 className='mb-2'>ID: {user.id}</h2>
            <h1 className='text-xl font-semibold'>{user.name}</h1>
            <p>{user.email}</p>

            <div className='flex justify-end gap-3 mt-4 text-sm'>
                <button className='font-semibold' onClick={() => {return router.push(`/update/${user.id}`)}}>Update</button>
                <button className='font-semibold text-red-500' onClick={() => {return handleDelete(user.id)}}>Delete</button>
            </div>
        </div>
    )
}

'use server'
import { applicationName } from '@/app-config';
import { CAregisterUser } from '@/core-actions/users';
import { validateRequest } from '@/lib/auth'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}
async function addMeAsFirstUserSA(formData: FormData) {
    'use server'
    console.log("Adding first user");
    await CAregisterUser('admin@admin.com', 'Tye', "nandos123", "password");
    console.log("Done!")
}
async function AdminPage({ }: Props) {
    const user = await validateRequest();
    if (!user || !user.user || user.user.email !== 'admin@admin.com') {
        redirect('/forbidden')
    }
    return (
        <main className='bg-black w-full h-full flex flex-col'>
            <h1 className='text-white'>{applicationName} admin page</h1>
            <div className="flex flex-wrap"></div>
            <form className='border-white border-2 flex p-4' action={addMeAsFirstUserSA}>
                <button className='bg-white' type='submit'>Add me as first user</button>
            </form>
        </main>
    )
}

export default AdminPage
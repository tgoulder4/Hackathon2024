'use server'
import React from 'react'
import { Button } from './mainPageButton'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/lib/auth'

type Props = {}

async function AppNameLandingPage({ }: Props) {
    const user = await validateRequest();
    // if (user && user.user) {
    //     redirect('/brand/' + user.user.brandId)
    // } else {
    //     redirect('/login')
    // }

    // //no landing page yet...
    // return (
    //     <main className='w-full h-full bg-primary relative flex flex-col gap-8'>
    //         <nav className="absolute bg-black opacity-20 flex justify-between rounded-lg">
    //             <h2 className='font-bold'>tablehog</h2>
    //             <div className="flex gap-12">
    //                 <Button>Register interest</Button>
    //                 <Button className='bg-[var(--attention)] text-black'>Client login</Button>
    //             </div>
    //         </nav>
    //     </main>
    // )
}

export default AppNameLandingPage
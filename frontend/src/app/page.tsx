'use server'
import React from 'react'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/lib/auth'
import { Button } from '@/components/ui/button'

type Props = {}

async function AppNameLandingPage({ }: Props) {
    // const session = await validateRequest();
    // if (!session.user) {
    //     return undefined;
    // }
    return (
        <main className='w-full h-full relative flex flex-col gap-8 text-black'>
            <h2 className='font-bold'>Whackwinnerz</h2>
            <nav className="absolute bg-black flex justify-between rounded-lg">
                <div className="flex gap-12">
                    <Button>Register interest</Button>
                    <Button className='bg-[var(--attention)] text-black'>Client login</Button>
                </div>
            </nav>
        </main>
    )
}

export default AppNameLandingPage
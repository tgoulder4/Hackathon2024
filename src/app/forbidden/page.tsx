import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

function ForbiddenPage({ }: Props) {
    return (
        <main className='bg-primary grid place-items-center h-full'>
            <div className="flex flex-col gap-4">
                <h1 className='text-white'>403 Forbidden</h1>
                <p className='text-white'>Looks like something went wrong.</p>

            </div>
            <Button className='text-black' asChild variant={'outline'}>
                <a className='text-black' href='/'>Back to home</a>
            </Button>
        </main>
    )
}

export default ForbiddenPage
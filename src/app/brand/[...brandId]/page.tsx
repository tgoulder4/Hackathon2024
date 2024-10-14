import React from 'react'

type Props = {
    searchParams: { [key: string]: string | string[] | undefined },
}

function MainArea({ searchParams }: Props) {
    const view = searchParams.view || 'queue'
    return (
        <div>MainArea</div>
    )
}

export default MainArea
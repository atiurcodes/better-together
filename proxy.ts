// import { auth } from '@/lib/auth'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function proxy(request: NextRequest) {
//     const session = await auth.api.getSession({
//         headers: request.headers
//     })

//     console.log("Session:", session)

//     if (!session) {
//         return NextResponse.redirect(new URL('/sign-in', request.url))
//     }
//     return NextResponse.next()
// }

// export const config = {
//     matcher: ['/event/add-event', '/joined-event', '/manage-events'],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
    return NextResponse.next()
}

export const config = {
    matcher: ['/event/add-event', '/joined-event', '/manage-events'],
}
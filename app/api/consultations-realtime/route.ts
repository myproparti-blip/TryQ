import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Real-time subscription management
interface Subscription {
    controller: ReadableStreamDefaultController
    userId?: string
}

let subscriptions: Subscription[] = []

// Main SSE endpoint for real-time updates
export async function GET(request: NextRequest) {
    const encoder = new TextEncoder()
    let controller: ReadableStreamDefaultController

    const stream = new ReadableStream({
        start(ctrl) {
            controller = ctrl
            
            // Add subscription
            subscriptions.push({ controller })
            
            // Send connection confirmation
            ctrl.enqueue(
                encoder.encode(
                    `data: ${JSON.stringify({ type: 'connected', message: 'Connected to real-time consultation stream' })}\n\n`
                )
            )

            // Send heartbeat every 30 seconds to keep connection alive
            const heartbeatInterval = setInterval(() => {
                try {
                    ctrl.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'heartbeat' })}\n\n`))
                } catch (error) {
                    clearInterval(heartbeatInterval)
                }
            }, 30000)

            // Cleanup on client disconnect
            const originalClose = ctrl.close.bind(ctrl)
            ctrl.close = function () {
                clearInterval(heartbeatInterval)
                subscriptions = subscriptions.filter(sub => sub.controller !== controller)
                return originalClose()
            }
        },
        cancel() {
            subscriptions = subscriptions.filter(sub => sub.controller !== controller)
        },
    })

    return new NextResponse(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    })
}

// Broadcast function - called from consultation creation
export function broadcastConsultation(data: any) {
    const encoder = new TextEncoder()
    const message = `data: ${JSON.stringify(data)}\n\n`

    // Broadcast to all connected clients
    subscriptions.forEach((subscription, index) => {
        try {
            subscription.controller.enqueue(encoder.encode(message))
        } catch (error) {
            // Remove dead subscription
            subscriptions.splice(index, 1)
        }
    })
}

// Optional OPTIONS for CORS preflight
export async function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    })
}

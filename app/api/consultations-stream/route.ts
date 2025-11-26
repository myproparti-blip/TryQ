import { NextRequest, NextResponse } from 'next/server'

// Mark this route as dynamic (cannot be statically generated)
export const dynamic = 'force-dynamic'

// In-memory store for demo (replace with database in production)
let subscriptions: ReadableStreamDefaultController[] = []

export async function GET(request: NextRequest) {
    // Create a stream for real-time updates
    const encoder = new TextEncoder()
    
    let controller: ReadableStreamDefaultController

    const stream = new ReadableStream({
        start(ctrl) {
            controller = ctrl
            subscriptions.push(ctrl)
            
            // Send initial connection message
            ctrl.enqueue(encoder.encode(`data: {"type":"connected","message":"Connected to consultation stream"}\n\n`))
        },
        cancel() {
            // Remove subscription when client disconnects
            subscriptions = subscriptions.filter(sub => sub !== controller)
        },
    })

    return new NextResponse(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
        },
    })
}

// Function to broadcast new consultations to all subscribers
export function broadcastConsultation(data: any) {
    const encoder = new TextEncoder()
    const message = `data: ${JSON.stringify(data)}\n\n`
    
    subscriptions.forEach(controller => {
        try {
            controller.enqueue(encoder.encode(message))
        } catch (error) {
            console.error('Error broadcasting to subscriber:', error)
        }
    })
}

const handlers = new Map()

function useNui(action, handler) {
    // console.log('Called useNui for handler registration');
    if(!handlers.has(action)) {
        // console.log(`[FiveM] Registered handler for ${action}`)
        handlers.set(action, [])
    }

    handlers.get(action).push(handler)
}

function callNui(action, data, handler) {
    fetch(`https://${GetParentResourceName()}/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(resp => {
        if(handler !== undefined) {
            handler(resp)
        }
    })
}

window.addEventListener('message', (event) => {
    const action = event.data.action
    const data = event.data.data

    // console.log(`[FiveM] Received message ${action} with data: ${JSON.stringify(data)}`)

    if(action === undefined) {
        return
    }
    if(!handlers.has(action)) {
        // console.log(`[FiveM] No handler for ${action}`)
        return
    }

    handlers.get(action).forEach(handler => {
        handler(data)
    })
})


export {useNui,callNui}
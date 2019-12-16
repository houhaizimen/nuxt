// async 将同步变为异步
function takeLong () {
    return new Promise (resolve => {
        setTimeout(() => resolve('long _time_value'), 1000)
    })
}

async function test () {
    const res = await takeLong()
    console.log(res)
}

test()
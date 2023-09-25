let alamat = {
    "::1": 0
}

function rateLimiter(request, response, next) {
    console.log(alamat)
    if(request.ip) {
        alamat[request.ip]++
        if(alamat[request.ip] >= 5) {
            response.json({
                message: "ANDA BERUSAHA DDOS!"
            })
            return
        }
    }

    next()
}

module.exports = rateLimiter

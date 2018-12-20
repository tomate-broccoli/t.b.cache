// index.js
const f = fn=>{
    let initialized = false
    let cache
    return (...args)=>{
        if(!initialized){
            initialized = true
            cache = fn()
	}
        return cache.apply(null, args)
    }
}
module.exports = f

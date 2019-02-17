// index.js
const cache = f=>{
    let initialized = false
    let cache
    return (...args)=>{
        if(!initialized){
            initialized = true
            cache = f()
	}
        return cache.apply(null, args)
    }
}
module.exports = cache

if(module.parent) return

// sample
const f = cache(()=>{
    const dt = Date.now()
    console.log(`${dt}: called.`)
    return v=>`${Date.now()}: v=[${v}], dt=[${dt}].`
})

console.log(f('foo'))
console.log(f('bar'))

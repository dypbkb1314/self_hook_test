Function.prototype.mycall = function(context=window, ...args){
    if(this === Function.prototype){
        return undefined
    }
    const fn = Symbol()
    console.log('symbol',fn)
    context[fn] = this;
    console.log('context[fn]',context[fn])
    const result = context[fn](...args)
    console.log('res', result)
    delete context[fn]
    return result;
}
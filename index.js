module.exports = splitCamelCase = string=> {
    if(string.length === 0) return string
    let regEx = /[A-Z]/g, indices = [], res = string.slice().split('')
    while ((match = regEx.exec(string)) != null) indices.push(match.index)  
    indices.reverse().forEach(el=> res.splice(el,0,' '))
    return res.join('')
}

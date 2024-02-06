const splitCamel = require('./index')
test('split apart a found camelCase within a string', ()=>{
    expect(splitCamel("camelCasingTest and moreCamels within something else")).toBe("camel Casing Test and more Camels within something else")
})



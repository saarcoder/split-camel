const splitCamelCase = require('./index')
test('split apart a found camelCase within a string', ()=>{
    expect(splitCamelCase("camelCasingTest and moreCamels within something else")).toBe("camel Casing Test and more Camels within something else")
})



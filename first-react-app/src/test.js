var continent = 'Africa'

export default continent   // export default allows you to import the variable using any name

//  now what if we have other items we want to export
var kez = 'Keziah is based in Pluto'

var car = "cars"

function add() {
    2+4;
}
export {kez, car, add}
// notice how we didnt include the () to add to indicate that it is a function, that is because
// including it will invoke the function
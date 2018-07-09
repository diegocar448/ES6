//ES5
var showName = function(name){
    return name.toUpperCase()
}

//console.log(showName('Diego'))




//ES6
/* let showName6 = (name) => {
    return name.toUpperCase()
} */

let showName6 = name =>  name.toUpperCase()
//console.log(showName('Diego'))

let showNameTwo6 = () => console.log('Show log')
//showNameTwo6()

let fullName = (name, lastName) => {
    name = name.toUpperCase()
    lastName = lastName.toUpperCase()

    let fullN = name + ' ' + lastName

    return fullN
    
    //console.log(name, lastName)
}

fullName('Diego', 'Cardoso')

console.log(fullName('Diego', 'Cardoso'))



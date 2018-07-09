//ES5

var diego = {
    name: 'Diego',
    lastName: 'Cardoso',

    fullName: function(){
        return this.name + " " + this.lastName
    },

    showMe: function(){
        var cont = this

        setTimeout(function (){
            console.log(cont.fullName())
        },
        3000)
    },
}

//diego.showMe()


//ES6

let company = {
    name: 'Especializa',
    lastName: 'Ti',

    fullName(){
        return this.name + " " + this.lastName
    },

    showMe(){
        setTimeout(() => console.log(this.fullName()), 3000)        
    }
}

company.showMe()
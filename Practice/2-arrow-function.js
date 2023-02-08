// const square = (x) =>{
//     return x*x
// }

//console.log(square(12))

const event = {
    name: "Bday Party",
    guestList:['Chanty','Andres','Ching','Diana'],
    printGuestList(){
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
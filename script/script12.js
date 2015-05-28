/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var batwing = {
    status: "Ready",
    rescueBatman: function() {
        document.write("Locating his transponder ... initiating launch ...");
    }
}

if (batwing.status === "Ready"){
    batwing.rescueBatman();
}

var utilities = {
    printAllMembers: function(targetObject){
        for(i in targetObject){
            document.write("<br />" + targetObject[i]);
        }
    }
}

utilities.printAllMembers(batwing);

var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function(){
            document.write("<br />" + "Nex alliance ... unite!");
        }
    },
    cities: [
        { locationId: 15, name: "Gladius" },
        { locationId: 16, name: "Chalybs" },
        { locationId: 17, name: "Ensys"}
    ]
};

planet.faction.notification();

if(typeof planet.defense === "undefined"){
    planet.defense = "Ion Canon";
}

document.write("<br />" + planet.defense);

for(member in planet){
    document.write("<br />" + member + " ==> " + planet[member]);
}

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new car("Eagle", "Talon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);


car.prototype.print = function(){
    document.write("<br/>" + "Starting print()");
    for(member in this){
        if(typeof this[member] !== "undefined" ){
            document.write("<br/>" + this[member]);
        }
    }
    document.write("<br/>" + "Ending print()");
};

myCar.print();

var myNewCar = new car("Nissan", "Xterra", 2006);
myNewCar.print();
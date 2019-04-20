//Array that contains information for all dexes
//Index 0 is the national dex, indexes 1-x are dexes for each generation's region
var dexes = [
    {
        name:"National",
        count:807,
        nationalStart:1,
        nationalEnd:807,
        regionalDex:JSON.parse(JSON.stringify(pokemonArray)),
        
        caught:0,
        caughtPercent:0.00,
        selector:"national",
        generation: "Total"
    },
    {
        name:"Kanto",
        count: 151,
        nationalStart:1,
        nationalEnd:151,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen1",
        generation: "Gen 1"
    },
    {
        name:"Johto",
        count: 100,
        nationalStart:152,
        nationalEnd:251,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen2",
        generation: "Gen 2"
    },
    {
        name:"Hoenn",
        count: 135,
        nationalStart:252,
        nationalEnd:386,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen3",
        generation: "Gen 3"
    },
    {
        name:"Sinnoh",
        count: 107,
        nationalStart:387,
        nationalEnd:493,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen4",
        generation: "Gen 4"
    },
    {
        name:"Unova",
        count: 156,
        nationalStart:494,
        nationalEnd:649,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen5",
        generation: "Gen 5"
    },
    {
        name:"Kalos",
        count: 72,
        nationalStart:650,
        nationalEnd:721,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen6",
        generation: "Gen 6"
        
    },
    {
        name:"Alola",
        count: 86,
        nationalStart:722,
        nationalEnd:807,
        regionalDex:[],
        
        caught:0,
        caughtPercent:0.00,
        selector:"gen7",
        generation: "Gen 7"
    }
    //ADD A NEW ENTRY HERE FOR EACH NEW GENERATION
];

//Array holding the modes the dex can be in. National or one of x regions
var modes = ["National", "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola" /* ADD MORE REGIONS HERE IF NECESSARY*/];

//Array that holds information for the various hunting methods available
var methods = [
    {
        name:"Friend Safari",
        odds:"1/512",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Hordes",
        odds:"1/273",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Breeding",
        odds:"1/512",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"SOS Chain",
        odds:"1/273 (@30)",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Full Odds (Pre Gen 6)",
        odds:"1/8192",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Full Odds (Post Gen 6)",
        odds:"1/4096",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Soft-Reset",
        odds:"1/1365",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"DexNav",
        odds:"1/201",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Chain Fishing",
        odds:"1/100 (@20)",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"PokeRadar",
        odds:"1/200 (@40)",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Wormhole",
        odds:"1/???",
        count:0,
        totalAttempts:0,
        average:0
    },
    {
        name:"Gift Resets",
        odds:"1/4096",
        count:0,
        totalAttempts:0,
        average:0
    },
];

//Set the current dex to national
var currentDex = dexes[0].regionalDex;
var currentMode = "National"

//Don't understand how this works
//But it allows sorting based on a given parameter
//https://stackoverflow.com/questions/8537602/any-way-to-extend-javascripts-array-sort-method-to-accept-another-parameter
//LtoG - least to greatest
//GtoL - greatest to least
const propComparatorLtoG = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

const propComparatorGtoL = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] > b[propName] ? -1 : 1

function fillPercentBars() {
    for(var i = 0; i < dexes.length; i++) {
        
        //Calculate the percent completion of the given dex
        dexes[i].caughtPercent = ((dexes[i].caught/dexes[i].count)*100).toFixed(2);
        
        //Create a statement that shows how many pokemon of the dex have been caught. Display it above the percent bar
        document.querySelector('.'+dexes[i].selector+'Text').innerHTML = dexes[i].generation + ": " + dexes[i].caught + "/" + dexes[i].count;
        
        //Create a statement that shows the percent completion of the dex. Display it in the bar
        document.querySelector('.'+dexes[i].selector+'BarText').innerHTML = dexes[i].caughtPercent + "%";
        
        //Create the bar with a width equal to the percent completion of the dex
        $('#'+dexes[i].selector+'Bar').css('width', dexes[i].caughtPercent + "%")
    }

    
    //Display the current mode
    document.querySelector('.mode').innerHTML = "Mode: " + currentMode;
}

function gatherData() {
    //Check every pokemon from the pokedex.js file
    for(var i = 0; i < currentDex.length; i++) {
        
        //rename the current pokemon being checked for ease
        var currentPokemon = currentDex[i];
        
        //This Pokemon has a nickname, therefore it has been obtained
        if(currentPokemon.nickname !== "") {
            
            //Always increment the total number caught
            dexes[0].caught++
            
            //Check which gen it's from using its national dex and increment the according regional count
            for(var j = 1; j < dexes.length; j++) {
                if(currentPokemon.national >= dexes[j].nationalStart && currentPokemon.national <= dexes[j].nationalEnd) {
                    dexes[j].caught++;
                    break;
                }
            }
        }
        //If the Pokemon is a part of this regional dex, add it to that array
        if(currentPokemon.kanto !== undefined) {
            dexes[1].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.johto !== undefined) {
            dexes[2].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.hoenn !== undefined) {
            dexes[3].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.sinnoh !== undefined) {
            dexes[4].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.unova !== undefined) {
            dexes[5].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.kalos !== undefined) {
            dexes[6].regionalDex.push(currentPokemon);
        }
        if(currentPokemon.alola !== undefined) {
            dexes[7].regionalDex.push(currentPokemon);
        }
        
        //Search through the methods to see which one the caught Pokemon matches with. Increment data accordingly
        for(var j = 0; j < methods.length; j++) {
            if(currentPokemon.method === methods[j].name) {
                methods[j].count++;
                methods[j].totalAttempts += currentPokemon.attempts;
                break;
            }
        }
    }
}

function fillMethodTable() {
    
    //Sort the method array based on which method has the most use
    methods.sort(propComparatorGtoL('count'));
    
    //Get the table
    var table = document.getElementById("method");
    
    //For each method...
    for(var i = 0; i < methods.length; i++) {
        var entry = methods[i];
        var row = document.createElement('tr');
        for(var j = 0; j < 4; j++) {
            var cell = document.createElement('td');
            
            //Add corresponding info the various tiles
            if(j === 0) {
                cell.innerHTML = entry.name;
            }
            else if(j === 1) {
                cell.innerHTML = entry.odds;
            }
            else if(j===2) {
                cell.innerHTML = entry.count;
            }
            
            //Calculate the average
            else if(j === 3) {
                entry.average = Math.round(entry.totalAttempts/entry.count)
                if(isNaN(entry.average)) {
                    entry.average = 0;
                }
                cell.innerHTML = entry.average;
            }
            cell.style.backgroundColor = "white";
            
            //Add the cell to the row
            row.appendChild(cell);
        }
        //Add the row to the table
        table.appendChild(row);
    }
}

function createTable(addEmpty) {
    
    //Save the table
    var table = document.getElementById("shiny");
    
    //Empty the table to refill it
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    
    //Iterate through each Pokemon in the current Pokedex
    for(var i = 0; i < currentDex.length; i++) {
        
        //Pokemon to be added to the table
        var pokemonEntry = currentDex[i];
        
        //Row to hold the information about the current Pokemon
        var row = document.createElement('tr');

        //Boolean representing if the Pokemon has been caught or not
        var caught = false;
        if(pokemonEntry.nickname !== "") {
            caught = true;
        }
        
        //Filling in the six columns for the current Pokemon
        for(var j = 0; j < 8; j++) {
            
            //Current cell being worked on
            var cell = document.createElement('td');
            
            //Cell 1: Shows the national/regional Pokedex number of the Pokemon
            if(j === 0) {
                if(currentMode === "National") {
                    cell.innerHTML = pokemonEntry.national;
                }
                else if(currentMode === "Kanto") {
                    cell.innerHTML = pokemonEntry.kanto;
                }
                else if(currentMode === "Johto") {
                    cell.innerHTML = pokemonEntry.johto;
                }
                else if(currentMode === "Hoenn") {
                    cell.innerHTML = pokemonEntry.hoenn;
                }
                else if(currentMode === "Sinnoh") {
                    cell.innerHTML = pokemonEntry.sinnoh;
                }
                else if(currentMode === "Unova") {
                    cell.innerHTML = pokemonEntry.unova;
                }
                else if(currentMode === "Kalos") {
                    cell.innerHTML = pokemonEntry.kalos;
                }
                else if(currentMode === "Alola") {
                    cell.innerHTML = pokemonEntry.alola;
                }
                else{
                    cell.innerHTML = "Error";
                }
            }
            
            //Cell 2: Displays a Check mark based on if the Pokemon has been caught or not
            else if(j === 1) {
                if(caught) {
                    cell.innerHTML = "✓";
                }
                else {
                    cell.innerHTML = "";
                }
            }
            
            //Cell 3: Displays the Pokemon's name if it has one
            else if(j === 2) {
                cell.innerHTML = pokemonEntry.name;
            }
            
            //Cell 4: Displays the Pokemon's Species
            else if(j === 3) {
                cell.innerHTML = pokemonEntry.nickname;
            }
            
            //Cell 5: Displays the Pokemon's Nickname if it has one
            else if(j === 4) {
                cell.innerHTML = pokemonEntry.method;
            }
            
            //Cell 6: Displays the Order the Pokemon was caught if it has one
            else if(j === 5) {
                if(caught) {
                    cell.innerHTML = pokemonEntry.order;
                }
            }
            
            //Cell 7: Displays the Number of Attemps if the Pokemon has one
            else if(j === 6) {
                if(caught) {
                    cell.innerHTML = pokemonEntry.attempts;
                }
            }
            
            //Cell 8: Displays a gif of the Pokemon if it has been caught. Scales the image based on a size parameter of the Pokemon
            else {
                if(caught) {
                    var img = document.createElement('img');
                    img.style.height = pokemonEntry.size
                    img.src = pokemonEntry.gif;
                    cell.appendChild(img)
                }
            }
            
            //If the Pokemon has been caught, color the cell dark gray
            if(caught) {
                cell.style.backgroundColor = "darkgray";
            }
            else{
                cell.style.backgroundColor = "white";
            }
            
            //Add the cell to the row
            row.appendChild(cell);
        }
        
        //Add the row to the table
        if(addEmpty === undefined || caught === true) {
            table.appendChild(row);
        }
        
    }
}

function sortDexByParameter(parameter) {
    //Sort by the dex number, keep blank entries
    if(parameter === undefined) {
        currentDex.sort(propComparatorLtoG(currentMode.toLowerCase()));
        createTable();
    }
    //Sort by species name, keep blank entries
    else if(parameter === "name") {
        currentDex.sort(propComparatorLtoG(parameter.toLowerCase()));
        createTable();
    }
    //Sort by some other parameter. Pass in a 0 to filter out blank entries
    else {
        currentDex.sort(propComparatorLtoG(parameter.toLowerCase()));
        createTable(0);
    }
    
    
}

function displayNewDex(dexToShow) {
    
    //Set the current dex array to a dex passed in to the function
    currentDex = dexes[dexToShow].regionalDex;
    
    //Set the current mode to the new dex
    currentMode = modes[dexToShow];
    
    //Sort the dex based on the the mode
    currentDex.sort(propComparatorLtoG(currentMode.toLowerCase()));
    
    //Recreate the table
    createTable();
}

function main() {
    gatherData();
    fillPercentBars();
    fillMethodTable();
    createTable();
}

//Start here
main();
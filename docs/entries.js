function pokemon(number, check, name, nickname, method, order, attempts, gif, johto, hoenn, sinnoh, unova, kalos, alola) {
    this.number = number;
    this.check = check;
    this.name = name;
    this.nickname = nickname;
    this.method = method;
    this.order = order;
    this.attempts = attempts;
    this.gif = gif;
    this.johto = johto;
    this.hoenn = hoenn;
    this.sinnoh = sinnoh;
    this.unova = unova;
    this.kalos = kalos;
    this.alola = alola;
}

function method(name, odds, number, average) {
    this.name = name;
    this.odds = odds;
    this.number = number;
    this.average = average;
}


function saveTable() {
    var everything = "";
    var y = 0;
    var x = 0;
    while(x < pokemonArray.length) {
        if(y === 0) {
            everything = everything + pokemonArray[x].number + "\t";
            y++;
        }
        else if(y === 1) {
            everything = everything + pokemonArray[x].check + "\t";
            y++;
        }
        else if(y === 2) {
            everything = everything + pokemonArray[x].name + "\t";
            y++;
        }
        else if(y === 3) {
            everything = everything + pokemonArray[x].nickname + "\t";
            y++;
        }
        else if(y === 4) {
            everything = everything + pokemonArray[x].method + "\t";
            y++;
        }
        else if(y === 5) {
            everything = everything + pokemonArray[x].order + "\t";
            y++;
        }
        else if(y === 6) {
            everything = everything + pokemonArray[x].attempts + "\t";
            y++;
        }
        else if(y === 7) {
            everything = everything + pokemonArray[x].gif + "\t";
            y=0;
            x++;
        }
    }
    localStorage.setItem("Bran", everything);
}
function loadTable(){
    fullTable = localStorage.getItem("Bran");
    var array = fullTable.split('\t');
    var y = 0;
    var z = 0;
    for(var x = 0; x < array.length && z < pokemonArray.length; x++) {
        if(y === 0) {
            pokemonArray[z].number = array[x];
            y++;
        }
        else if(y === 1) {
            pokemonArray[z].check = array[x];
            y++;
        }
        else if(y === 2) {
            pokemonArray[z].name = array[x];
            y++;
        }
        else if(y === 3) {
            pokemonArray[z].nickname = array[x];
            y++;
        }
        else if(y === 4) {
            pokemonArray[z].method = array[x];
            y++;
        }
        else if(y === 5) {
            pokemonArray[z].order = parseInt(array[x]);
            y++;
        }
        else if(y === 6) {
            pokemonArray[z].attempts = parseInt(array[x]);
            y++;
        }
        else if(y === 7) {
            pokemonArray[z].gif = array[x];
            y=0;
            z++;
        }
    }
    updateTable();
}
function newEntry() {
    for(var x = 0; x < pokemonArray.length; x++) {
        if(document.getElementById('identifier').value === pokemonArray[x].name || document.getElementById('identifier').value === pokemonArray[x].number) {
            pokemonArray[x].check = "✓";
            pokemonArray[x].nickname = document.getElementById('nickname').value;
            pokemonArray[x].method = document.getElementById('method').value;
            pokemonArray[x].order = document.getElementById('order').value;
            pokemonArray[x].attempts = parseInt(document.getElementById('attempts').value);
            pokemonArray[x].gif = "Shiny/" + pokemonArray[x].name + ".gif";
        }
    }
    document.getElementById('identifier').value = "";
    document.getElementById('nickname').value = "";
    document.getElementById('method').value = "";
    document.getElementById('order').value = "";
    document.getElementById('attempts').value = "";
    updateTable();
}
function deleteEntry() {
    for(var x = 0; x < pokemonArray.length; x++) {
        if(document.getElementById('identifierDelete').value === pokemonArray[x].name || document.getElementById('identifierDelete').value === pokemonArray[x].number) {
            pokemonArray[x].check = "";
            pokemonArray[x].nickname = "";
            pokemonArray[x].method = "";
            pokemonArray[x].order = "";
            pokemonArray[x].attempts = "";
            pokemonArray[x].gif = "";
            console.log(pokemonArray[x].nickname)
        }
    }
    document.getElementById('identifierDelete').value = "";
    updateTable();
}

function swap(x, y) {
    var temp = arrayCopy[x];
    arrayCopy[x] = arrayCopy[y];
    arrayCopy[y] = temp;
}

function nationalDex() {
    arrayCopy = [];
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    mode = "National"
    createTable();
    data();
}
function kantoDex() {
    arrayCopy = [];
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    for(var i = 0; i < 151; i++) {
        arrayCopy[i] = jQuery.extend(true, {}, pokemonArray[i]);
    }
    mode = "Kanto";
    createTable();
    data();
}
function johtoDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortByJohto();
    arrayCopy.splice(256, 546);
    mode = "Johto";
    createTable();
    data();
}
function hoennDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortByHoenn();
    arrayCopy.splice(211, 591);
    mode = "Hoenn";
    createTable();
    data();
}
function sinnohDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortBySinnoh();
    arrayCopy.splice(210, 592);
    mode = "Sinnoh";
    createTable();
    data();
}
function unovaDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortByUnova();
    arrayCopy.splice(301, 501);
    mode = "Unova";
    createTable(); 
    data();
}
function kalosDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortByKalos();
    arrayCopy.splice(457, 345);
    mode = "Kalos";
    createTable();   
    data();
}
function alolaDex() {
    arrayCopy = JSON.parse(JSON.stringify(pokemonArray));
    var table = document.getElementById("shiny");
    while(table.rows.length > 1) {
        table.deleteRow(1);
    }
    sortByAlola();
    arrayCopy.splice(302, 500);
    mode = "Alola";
    createTable();  
    data();
}

function data() {
    var caught = 0;
    var gen1 = 0;
    var gen2 = 0;
    var gen3 = 0;
    var gen4 = 0;
    var gen5 = 0;
    var gen6 = 0;
    var gen7 = 0;
    for(var x = 0; x < pokemonArray.length; x++) {
        if(pokemonArray[x].check === "✓") {
            caught++;
            if(pokemonArray[x].number <= 151) {
                gen1++;
            }
            else if(pokemonArray[x].number <= 251 && pokemonArray[x].number > 151) {
                gen2++;
            }
            else if(pokemonArray[x].number <= 386 && pokemonArray[x].number > 251) {
                gen3++;
            }
            else if(pokemonArray[x].number <= 493 && pokemonArray[x].number > 386) {
                gen4++;
            }
            else if(pokemonArray[x].number <= 649 && pokemonArray[x].number > 493) {
                gen5++;
            }
            else if(pokemonArray[x].number <= 721 && pokemonArray[x].number > 649) {
                gen6++;
            }
            else{
                gen7++;
            }
        }
    }
    
    //Record Percentage values for progress bars
    var nationalPercent = ((caught/802)*100).toFixed(2);
    var gen1Percent = ((gen1/151)*100).toFixed(2);
    var gen2Percent = ((gen2/100)*100).toFixed(2);
    var gen3Percent = ((gen3/135)*100).toFixed(2)
    var gen4Percent = ((gen4/107)*100).toFixed(2)
    var gen5Percent = ((gen5/156)*100).toFixed(2)
    var gen6Percent = ((gen6/72)*100).toFixed(2)
    var gen7Percent = ((gen7/81)*100).toFixed(2)
    
    //Send Numerical values to be displayed
    document.querySelector('.total').innerHTML = "Total: " + caught + "/802";
    document.querySelector('.totalPercent').innerHTML = nationalPercent + "%";

    document.querySelector('.gen1').innerHTML = "Gen 1: " + gen1 + "/151";
    document.querySelector('.gen1percent').innerHTML = gen1Percent + "%";
    
    document.querySelector('.gen2').innerHTML = "Gen 2: " + gen2 + "/100";
    document.querySelector('.gen2percent').innerHTML = gen2Percent + "%";
    
    document.querySelector('.gen3').innerHTML = "Gen 3: " + gen3 + "/135";
    document.querySelector('.gen3percent').innerHTML =  gen3Percent + "%";
    
    document.querySelector('.gen4').innerHTML = "Gen 4: " + gen4 + "/107";
    document.querySelector('.gen4percent').innerHTML =  gen4Percent + "%";
    
    document.querySelector('.gen5').innerHTML = "Gen 5: " + gen5 + "/156";
    document.querySelector('.gen5percent').innerHTML = gen5Percent+ "%";
    
    document.querySelector('.gen6').innerHTML = "Gen 6: " + gen6 + "/72";
    document.querySelector('.gen6percent').innerHTML = gen6Percent + "%";
    
    document.querySelector('.gen7').innerHTML = "Gen 7: " + gen7 + "/81";
    document.querySelector('.gen7percent').innerHTML = gen7Percent + "%";
    
    //Overwrite Progress bar width with percentage values
    $('#natPercent').css('width', nationalPercent + "%")
    $('#Percent1').css('width', gen1Percent + "%")
    $('#Percent2').css('width', gen2Percent + "%")
    $('#Percent3').css('width', gen3Percent + "%")
    $('#Percent4').css('width', gen4Percent + "%")
    $('#Percent5').css('width', gen5Percent + "%")
    $('#Percent6').css('width', gen6Percent + "%")
    $('#Percent7').css('width', gen7Percent + "%")
    
    //Display the current mode
    document.querySelector('.mode').innerHTML = "Mode: " + mode;
}
function methodTable() {
    var breeding = 0;
    var breedSum = 0;
    
    var friendSafari = 0;
    var safariSum = 0;
    
    var sosChain = 0;
    var sosSum = 0;
    
    var hordes = 0;
    var hordeSum = 0;
    
    var fullOdds = 0;
    var fullSum = 0;
    
    var softReset = 0;
    var resetSum = 0;
    
    var dexNav = 0;
    var dexSum = 0;
    
    var chainFish = 0;
    var fishSum = 0;
    
    var pokeRadar = 0;
    var radarSum = 0;
    
    for(var i = 0; i < pokemonArray.length; i++) {
        if(pokemonArray[i].method === "SOS Chain") {
            sosChain++;
            sosSum = sosSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Breeding") {
            breeding++;
            breedSum = breedSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Friend Safari") {
            friendSafari++;
            safariSum = safariSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Hordes") {
            hordes++;
            hordeSum = hordeSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Full Odds") {
            fullOdds++;
            fullSum = fullSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Soft-Reset") {
            softReset++;
            resetSum = resetSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "DexNav") {
            dexNav++;
            dexSum = dexSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "Chain Fishing") {
            chainFish++;
            fishSum = fishSum + pokemonArray[i].attempts;
        }
        else if(pokemonArray[i].method == "PokeRadar") {
            pokeRadar++;
            radarSum = radarSum + pokemonArray[i].attempts;
        }
    }
    
    
    methodArray[0] = new method("SOS Chain", "1/683 (@70)", sosChain, Math.round(sosSum/sosChain));
    methodArray[1] = new method("Breeding", "1/512", breeding, Math.round(breedSum/breeding));
    methodArray[2] = new method("Friend Safari", "1/512", friendSafari,  Math.round(safariSum/friendSafari));
    methodArray[3] = new method("Hordes", "1/273", hordes, Math.round(hordeSum/hordes));
    methodArray[4] = new method("Full Odds", "1/8192", fullOdds,  Math.round(fullSum/fullOdds));
    methodArray[5] = new method("Soft-Reset", "1/1365", softReset,  Math.round(resetSum/softReset));
    methodArray[6] = new method("DexNav", "1/201", dexNav,  Math.round(dexSum/dexNav));
    methodArray[7] = new method("Chain Fishing", "1/100 (@20)", chainFish,  Math.round(fishSum/chainFish));
    methodArray[8] = new method("PokeRadar", "1/200 (@40)", pokeRadar,  Math.round(radarSum/pokeRadar));
    
    sortMethods();
    
    var table = document.getElementById("method");
    for(var x = 0; x < methodArray.length; x++) {
        var entry = methodArray[x];
        var row = document.createElement('tr');
        var properties = 4;
        for(var y = 0; y < 4; y++) {
            var cell = document.createElement('td');
            if(y === 0) {
                cell.innerHTML = entry.name;
            }
            else if(y === 1) {
                cell.innerHTML = entry.odds;
            }
            else if(y===2) {
                cell.innerHTML = entry.number;
            }
            else if(y === 3) {
                if(isNaN(entry.average)) {
                    entry.average = 0;
                }
                cell.innerHTML = entry.average;
            }
            cell.style.backgroundColor = "white";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
}
function sortMethods() {
    for(var i = 0; i < methodArray.length; i++) {
        for(var j = 0; j < methodArray.length-1-i; j++) {
            if(methodArray[j].number < methodArray[j+1].number) {
                swapMethod(j, j+1);
            }
        }
    }
}
function swapMethod(x, y) {
    var temp = methodArray[x];
    methodArray[x] = methodArray[y];
    methodArray[y] = temp;
}

function createTable() {
    var table = document.getElementById("shiny");
    for(var x = 0; x < arrayCopy.length; x++) {
        var entry = arrayCopy[x];
        var row = document.createElement('tr');
        var properties = 8;
        var gray = false;
        if(entry.check === "✓") {
            gray = true;
        }
        for(var y = 0; y < 8; y++) {
            var cell = document.createElement('td');
            if(y === 0) {
                if(mode == "Johto") {
                    cell.innerHTML = entry.johto;
                }
                else if(mode == "Hoenn") {
                    cell.innerHTML = entry.hoenn;
                }
                else if(mode == "Sinnoh") {
                    cell.innerHTML = entry.sinnoh;
                }
                else if(mode == "Unova") {
                    cell.innerHTML = entry.unova;
                }
                else if(mode == "Kalos") {
                    cell.innerHTML = entry.kalos;
                }
                else if(mode == "Alola") {
                    cell.innerHTML = entry.alola;
                }
                else{
                    cell.innerHTML = entry.number;
                }
            }
            else if(y === 1) {
                cell.innerHTML = entry.check;
            }
            else if(y === 2) {
                cell.innerHTML = entry.name;
            }
            else if(y === 3) {
                cell.innerHTML = entry.nickname;
            }
            else if(y === 4) {
                cell.innerHTML = entry.method;
            }
            else if(y === 5) {
                cell.innerHTML = entry.order;
            }
            else if(y === 6) {
                cell.innerHTML = entry.attempts;
            }
            else {
                var img = document.createElement('img');
                img.src = entry.gif;
                cell.appendChild(img);
            }
            if(gray) {
                cell.style.backgroundColor = "darkgray";
            }
            else{
                cell.style.backgroundColor = "white";
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function sortByNumber() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].number > arrayCopy[j+1].number) {
                swap(j, j+1);
            }
        }
    }
    updateTable();
}
function sortByJohto() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].johto > arrayCopy[j+1].johto) {
                swap(j, j+1);
            }
        }
    }
}
function sortByHoenn() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].hoenn > arrayCopy[j+1].hoenn) {
                swap(j, j+1);
            }
        }
    }
}
function sortBySinnoh() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].sinnoh > arrayCopy[j+1].sinnoh) {
                swap(j, j+1);
            }
        }
    }
}
function sortByUnova() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].unova > arrayCopy[j+1].unova) {
                swap(j, j+1);
            }
        }
    }
}
function sortByKalos() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].kalos > arrayCopy[j+1].kalos) {
                swap(j, j+1);
            }
        }
    }
}
function sortByAlola() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].alola > arrayCopy[j+1].alola) {
                swap(j, j+1);
            }
        }
    }
}
function sortByName() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-i-1; j++) {
            if(arrayCopy[j].name > arrayCopy[j+1].name) {
                swap(j, j+1);
            }
        }
    }
    
    updateTable();
}
function sortByNickname() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-i-1; j++) {
            if(arrayCopy[j].nickname === "" && arrayCopy[j+1].nickname !== "") {
                swap(j, j+1)
            }
            else if(arrayCopy[j].nickname !== "" && arrayCopy[j+1].nickname === "") {
            }
            else if(arrayCopy[j].nickname === "" && arrayCopy[j+1].nickname === "") {
            }
            else if(arrayCopy[j].nickname !== "" && arrayCopy[j+1].nickname !== "") {
                if(arrayCopy[j].nickname > arrayCopy[j+1].nickname) {
                    swap(j, j+1);
                }
            }
        }
    }
    updateTable();
}
function sortByMethod() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].method === "" && arrayCopy[j+1].method !== "") {
                swap(j, j+1)
            }
            else if(arrayCopy[j].method !== "" && arrayCopy[j+1].method === "") {
            }
            else if(arrayCopy[j].method === "" && arrayCopy[j+1].method === "") {
            }
            else if(arrayCopy[j].method !== "" && arrayCopy[j+1].method !== "") {
                if(arrayCopy[j].method > arrayCopy[j+1].method) {
                    swap(j, j+1);
                }
            }
        }
    }
    updateTable();
}
function sortByOrder() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].order === "" && arrayCopy[j+1].order !== "") {
                swap(j, j+1)
            }
            else if(arrayCopy[j].order !== "" && arrayCopy[j+1].order === "") {
            }
            else if(arrayCopy[j].order === "" && arrayCopy[j+1].order === "") {
            }
            else if(arrayCopy[j].order !== "" && arrayCopy[j+1].order !== "") {
                if(arrayCopy[j].order > arrayCopy[j+1].order) {
                    swap(j, j+1);
                }
            }
        }
    }
    updateTable();
}
function sortByAttempts() {
    for(var i = 0; i < arrayCopy.length; i++) {
        for(var j = 0; j < arrayCopy.length-1-i; j++) {
            if(arrayCopy[j].attempts === "" && arrayCopy[j+1].attempts !== "") {
                swap(j, j+1)
            }
            else if(arrayCopy[j].attempts !== "" && arrayCopy[j+1].attempts === "") {
            }
            else if(arrayCopy[j].attempts === "" && arrayCopy[j+1].attempts === "") {
            }
            else if(arrayCopy[j].attempts !== "" && arrayCopy[j+1].attempts !== "") {
                if(arrayCopy[j].attempts > arrayCopy[j+1].attempts) {
                    swap(j, j+1);
                }
            }
        }
    }
    updateTable();
}

function updateTable() {
    for(var x = 1; x < arrayCopy.length+1; x++) {
        var entry = arrayCopy[x-1];
        var table = document.getElementById("shiny").rows[x].cells;
        if(entry.check === "✓") {
            var gray = true;
        }
        else {
            gray = false;
        }
        for(var y = 0; y < 8; y++) {
            if(y === 0) {
                if(mode == "Johto") {
                    table[y].innerHTML = entry.johto;
                }
                else if(mode == "Hoenn") {
                    table[y].innerHTML = entry.hoenn;
                }
                else if(mode == "Sinnoh") {
                    table[y].innerHTML = entry.sinnoh;
                }
                else if(mode == "Unova") {
                    table[y].innerHTML = entry.unova;
                }
                else if(mode == "Kalos") {
                    table[y].innerHTML = entry.kalos;
                }
                else if(mode == "Alola") {
                    table[y].innerHTML = entry.alola;
                }
                else{
                    table[y].innerHTML = entry.number;
                }
            }
            else if(y === 1) {
                table[y].innerHTML = entry.check;
            }
            else if(y === 2) {
                table[y].innerHTML = entry.name;
            }
            else if(y === 3) {
                table[y].innerHTML = entry.nickname;
            }
            else if(y === 4) {
                table[y].innerHTML = entry.method;
            }
            else if(y === 5) {
                if(isNaN(entry.order)) {
                    entry.order = "";
                }
                table[y].innerHTML = entry.order;
            }
            else if(y === 6) {
                if(isNaN(entry.attempts)) {
                    entry.attempts = "";
                }
                table[y].innerHTML = entry.attempts;
            }
            else {
                var img = document.createElement('img');
                img.src = entry.gif;
                table[y].innerHTML = "";
                table[y].appendChild(img);
            }
            if(gray) {
                table[y].style.backgroundColor = "darkgray";
            }
            else{
                table[y].style.backgroundColor = "white";
            }
        }
    }
    data();
}

var pokemonArray = [];
var methodArray = [];

//All Pokemon in here
{
pokemonArray[0] = new pokemon("001", "✓", "Bulbasaur", "Smitty", "Breeding", 41, 392, "Shiny/bulbasaur.gif", "231", "z", "z", "z", "Central: 080", "z");
pokemonArray[1] = new pokemon("002", "✓", "Ivysaur", "Harvard", "Friend Safari", 62, 693, "Shiny/ivysaur.gif", "232", "z", "z", "z", "Central: 081", "z");
pokemonArray[2] = new pokemon("003", "✓", "Venusaur", "I Mean", "Friend Safari", 64, 30, "Shiny/venusaur.gif", "233", "z", "z", "z", "Central: 082", "z");
pokemonArray[3] = new pokemon("004", "", "Charmander", "", "", "", "", "", "234", "z", "z", "z", "Central: 083", "z");
pokemonArray[4] = new pokemon("005", "✓", "Charmeleon", "ChAumeleon", "Friend Safari", 55, 14, "Shiny/charmeleon.gif", "235", "z", "z", "z", "Central: 084", "z");
pokemonArray[5] = new pokemon("006", "✓", "Charizard", "Genwunner", "Friend Safari", 235, 190, "Shiny/charizard.gif", "236", "z", "z", "z", "Central: 085", "z");
pokemonArray[6] = new pokemon("007", "", "Squirtle", "", "", "", "", "", "237", "z", "z", "z", "Central: 086", "z");
pokemonArray[7] = new pokemon("008", "✓", "Wartortle", "Ludwig", "Friend Safari", 211, 961, "Shiny/wartortle.gif", "238", "z", "z", "z", "Central: 087", "z");
pokemonArray[8] = new pokemon("009", "", "Blastoise", "", "", "", "", "", "239", "z", "z", "z", "Central: 088", "z");
pokemonArray[9] = new pokemon("010", "✓", "Caterpie", "Dijon", "SOS Chain", 180, 87, "Shiny/caterpie.gif", "024", "z", "z", "z", "Central: 023", "017");
pokemonArray[10] = new pokemon("011", "✓", "Metapod", "The Meta", "SOS Chain", 249, 235, "Shiny/metapod.gif", "025", "z", "z", "z", "Central: 024", "018");
pokemonArray[11] = new pokemon("012", "✓", "Butterfree", "CubanMFree", "Friend Safari", 248, 176, "Shiny/butterfree.gif", "026", "z", "z", "z", "Central: 025", "019");
pokemonArray[12] = new pokemon("013", "", "Weedle", "", "", "", "", "", "027", "z", "z", "z", "Central: 026", "z");
pokemonArray[13] = new pokemon("014", "✓", "Kakuna", "Pistachio", "Friend Safari", 250, 1285, "Shiny/kakuna.gif", "028", "z", "z", "z", "Central: 027", "z");
pokemonArray[14] = new pokemon("015", "", "Beedrill", "", "", "", "", "", "029", "z", "z", "z", "Central: 028", "z");    
pokemonArray[15] = new pokemon("016", "✓", "Pidgey", "Hugh", "Friend Safari", 247, 1894, "Shiny/pidgey.gif", "010", "z", "z", "z", "Central: 017", "z");
pokemonArray[16] = new pokemon("017", "", "Pidgeotto", "", "", "", "", "", "011", "z", "z", "z", "Central: 018", "z");
pokemonArray[17] = new pokemon("018", "", "Pidgeot", "", "", "", "", "", "012", "z", "z", "z", "Central: 019", "z");
pokemonArray[18] = new pokemon("019", "✓", "Rattata", "Chucky Jesus", "DexNav", 243, 118, "Shiny/rattata.gif", "017", "z", "z", "059", "z", "015");
pokemonArray[19] = new pokemon("020", "✓", "Raticate", "Miracle", "DexNav", 38, 283, "Shiny/raticate.gif", "018", "z", "z", "060", "z", "016");
pokemonArray[20] = new pokemon("021", "✓", "Spearow", "SPARROW", "Friend Safari", 72, 202, "Shiny/spearow.gif", "013", "z", "z", "z", "Mountain: 109", "073");
pokemonArray[21] = new pokemon("022", "", "Fearow", "", "", "", "", "", "014", "z", "z", "z", "Mountain: 110", "074");
pokemonArray[22] = new pokemon("023", "✓", "Ekans", "Kens", "PokeRadar", 223, 8, "Shiny/ekans.gif", "050", "z", "z", "z", "Mountain: 037", "z");
pokemonArray[23] = new pokemon("024", "✓", "Arbok", "Orbok", "Full Odds", 233, 17, "Shiny/arbok.gif", "051", "z", "z", "z", "Mountain: 038", "z");
pokemonArray[24] = new pokemon("025", "✓", "Pikachu", "Zoo Race", "Friend Safari", 107, 1116, "Shiny/pikachu.gif", "022", "163", "104", "z", "Central: 036", "025");
pokemonArray[25] = new pokemon("026", "✓", "Raichu", "Esam", "Friend Safari", 252, 138, "Shiny/raichu.gif", "023", "164", "105", "z", "Central: 037", "026");
pokemonArray[26] = new pokemon("027", "✓", "Sandshrew", "Cashrew", "Hordes", 48, 122, "Shiny/sandshrew.gif", "048", "117", "z", "113", "Mountain: 097", "251");
pokemonArray[27] = new pokemon("028", "✓", "Sandslash", "Sanchez", "Friend Safari", 148, 41, "Shiny/sandslash.gif", "049", "118", "z", "114", "Mountain: 098", "252");
pokemonArray[28] = new pokemon("029", "", "Nidoran♀", "", "", "", "", "", "095", "z", "z", "z", "Coastal: 104", "z");
pokemonArray[29] = new pokemon("030", "", "Nidorina", "", "", "", "", "", "096", "z", "z", "z", "Coastal: 105", "z");
pokemonArray[30] = new pokemon("031", "", "Nidoqueen", "", "", "", "", "", "097", "z", "z", "z", "Coastal: 106", "z");
pokemonArray[31] = new pokemon("032", "✓", "Nidoran♂", "Dusty", "Hordes", 30, 94, "Shiny/nidoran_m.gif", "098", "z", "z", "z", "Coastal: 107", "z");
pokemonArray[32] = new pokemon("033", "✓", "Nidorino", "Neatoreeno!", "Hordes", 208, 158, "Shiny/nidorino.gif", "099", "z", "z", "z", "Coastal: 108", "z");
pokemonArray[33] = new pokemon("034", "", "Nidoking", "", "", "", "", "", "100", "z", "z", "z", "Coastal: 109", "z");
pokemonArray[34] = new pokemon("035", "", "Clefairy", "", "", "", "", "", "041", "z", "100", "089", "z", "211");
pokemonArray[35] = new pokemon("036", "", "Clefable", "", "", "", "", "", "042", "z", "101", "090", "z", "212");
pokemonArray[36] = new pokemon("037", "✓", "Vulpix", "Rawrzi", "DexNav", 37, 388, "Shiny/vulpix.gif", "127", "160", "z", "248", "z", "253");
pokemonArray[37] = new pokemon("038", "", "Ninetales", "", "", "", "", "", "128", "161", "z", "249", "z", "254");
pokemonArray[38] = new pokemon("039", "✓", "Jigglypuff", "Mattles", "DexNav", 21, 23, "Shiny/jigglypuff.gif", "044", "143", "z", "282", "Mountain: 120", "135");
pokemonArray[39] = new pokemon("040", "", "Wigglytuff", "", "", "", "", "", "045", "144", "z", "283", "Mountain: 121", "136");
pokemonArray[40] = new pokemon("041", "✓", "Zubat", "ZuBatman", "Hordes", 88, 182, "Shiny/zubat.gif", "037", "065", "028", "061", "Central: 145", "068");
pokemonArray[41] = new pokemon("042", "✓", "Golbat", "Olive", "Hordes", 152, 202, "Shiny/golbat.gif", "038", "066", "029", "062", "Central: 146", "069");
pokemonArray[42] = new pokemon("043", "✓", "Oddish", "420", "Friend Safari", 63, 484, "Shiny/oddish.gif", "083", "091", "z", "z", "Central: 105", "z");
pokemonArray[43] = new pokemon("044", "✓", "Gloom", "Drool", "Hordes", 129, 144, "Shiny/gloom.gif", "084", "092", "z", "z", "Central: 106", "z");
pokemonArray[44] = new pokemon("045", "", "Vileplume", "", "", "", "", "", "085", "093", "z", "z", "Central: 107", "z");
pokemonArray[45] = new pokemon("046", "", "Paras", "", "", "", "", "", "070", "z", "z", "z", "z", "147");
pokemonArray[46] = new pokemon("047", "", "Parasect", "", "", "", "", "", "071", "z", "z", "z", "z", "148");
pokemonArray[47] = new pokemon("048", "", "Venonat", "", "", "", "", "", "109", "z", "z", "z", "z", "z");
pokemonArray[48] = new pokemon("049", "", "Venomoth", "", "", "", "", "", "110", "z", "z", "z", "z", "z");
pokemonArray[49] = new pokemon("050", "", "Diglett", "", "", "", "", "", "134", "z", "z", "z", "Mountain: 001", "071");
pokemonArray[50] = new pokemon("051", "", "Dugtrio", "", "", "", "", "", "135", "z", "z", "z", "Mountain: 002", "072");
pokemonArray[51] = new pokemon("052", "", "Meowth", "", "", "", "", "", "138", "z", "z", "z", "z", "045");
pokemonArray[52] = new pokemon("053", "✓", "Persian", "Giovanni", "DexNav", 145, 367, "Shiny/persian.gif", "139", "z", "z", "z", "z", "046");
pokemonArray[53] = new pokemon("054", "", "Psyduck", "", "", "", "", "", "140", "165", "043", "028", "Central: 059", "089");
pokemonArray[54] = new pokemon("055", "", "Golduck", "", "", "", "", "", "141", "166", "044", "029", "Central: 060", "090");
pokemonArray[55] = new pokemon("056", "✓", "Mankey", "MenFolk", "Friend Safari", 155, 910, "Shiny/mankey.gif", "136", "z", "z", "z", "z", "079");
pokemonArray[56] = new pokemon("057", "", "Primeape", "", "", "", "", "", "137", "z", "z", "z", "z", "080");
pokemonArray[57] = new pokemon("058", "✓", "Growlithe", "Pupper", "Friend Safari", 56, 846, "Shiny/growlithe.gif", "129", "z", "z", "051", "z", "052");
pokemonArray[58] = new pokemon("059", "", "Arcanine", "", "", "", "", "", "130", "z", "z", "052", "z", "053");
pokemonArray[59] = new pokemon("060", "", "Poliwag", "", "", "", "", "", "072", "z", "z", "z", "Mountain: 033", "149");
pokemonArray[60] = new pokemon("061", "✓", "Poliwhirl", "Sugimori", "Chain Fishing", 77, 44, "Shiny/poliwhirl.gif", "073", "z", "z", "z", "Mountain: 034", "150");
pokemonArray[61] = new pokemon("062", "✓", "Poliwrath", "Bradley", "Chain Fishing", 110, 33, "Shiny/poliwrath.gif", "074", "z", "z", "z", "Mountain: 035", "151");
pokemonArray[62] = new pokemon("063", "", "Abra", "", "", "", "", "", "089", "040", "020", "z", "Central: 102", "042");
pokemonArray[63] = new pokemon("064", "", "Kadabra", "", "", "", "", "", "090", "041", "021", "z", "Central: 103", "043");
pokemonArray[64] = new pokemon("065", "", "Alakazam", "", "", "", "", "", "091", "042", "022", "z", "Central: 104", "044");
pokemonArray[65] = new pokemon("066", "✓", "Machop", "Cheeky Chops", "Hordes", 51, 231, "Shiny/machop.gif", "142", "075", "040", "z", "Coastal: 057", "095");
pokemonArray[66] = new pokemon("067", "✓", "Machoke", "Alicks", "Friend Safari", 26, 630, "Shiny/machoke.gif", "143", "076", "041", "z", "Coastal: 058", "096");
pokemonArray[67] = new pokemon("068", "", "Machamp", "", "", "", "", "", "144", "077", "042", "z", "Coastal: 059", "097");
pokemonArray[68] = new pokemon("069", "", "Bellsprout", "", "", "", "", "", "064", "z", "z", "z", "Mountain: 026", "z");
pokemonArray[69] = new pokemon("070", "✓", "Weepinbell", "Willow", "Hordes", 79, 338, "Shiny/weepinbell.gif", "065", "z", "z", "z", "Mountain: 027", "z");
pokemonArray[70] = new pokemon("071", "✓", "Victreebel", "Umpire", "Hordes", 219, 19, "Shiny/victreebel.gif", "066", "z", "z", "z", "Mountain: 028", "z");
pokemonArray[71] = new pokemon("072", "✓", "Tentacool", "Jellyfloat", "Chain Fishing", 23, 63, "Shiny/tentacool.gif", "164", "068", "136", "z", "Coastal: 025", "106");
pokemonArray[72] = new pokemon("073", "", "Tentacruel", "", "", "", "", "", "165", "069", "137", "z", "Coastal: 026", "107");
pokemonArray[73] = new pokemon("074", "✓", "Geodude", "Dwayne", "Hordes", 90, 139, "Shiny/geodude.gif", "034", "058", "031", "z", "Mountain: 009", "229");
pokemonArray[74] = new pokemon("075", "", "Graveler", "", "", "", "", "", "035", "059", "032", "z", "Mountain: 010", "230");
pokemonArray[75] = new pokemon("076", "", "Golem", "", "", "", "", "", "036", "060", "033", "z", "Mountain: 011", "231");    
pokemonArray[76] = new pokemon("077", "", "Ponyta", "", "", "", "", "", "206", "z", "090", "z", "z", "z");
pokemonArray[77] = new pokemon("078", "", "Rapidash", "", "", "", "", "", "207", "z", "091", "z", "z", "z");
pokemonArray[78] = new pokemon("079", "✓", "Slowpoke", "Reggae", "Hordes", 33, 123, "Shiny/slowpoke.gif", "080", "z", "z", "z", "Coastal: 133", "037");
pokemonArray[79] = new pokemon("080", "", "Slowbro", "", "", "", "", "", "081", "z", "z", "z", "Coastal: 134", "038");
pokemonArray[80] = new pokemon("081", "✓", "Magnemite", "Mitey No9", "Hordes", 61, 126, "Shiny/magnemite.gif", "119", "084", "178", "048", "Mountain: 069", "047");
pokemonArray[81] = new pokemon("082", "✓", "Magneton", "Magnegram", "Friend Safari", 75, 51, "Shiny/magneton.gif", "120", "085", "179", "049", "Mountain: 070", "048"); 
pokemonArray[82] = new pokemon("083", "", "Farfetch'd", "", "", "", "", "", "160", "z", "z", "z", "Central: 061", "z");
pokemonArray[83] = new pokemon("084", "", "Doduo", "", "", "", "", "", "204", "095", "z", "z", "Central: 094", "z");
pokemonArray[84] = new pokemon("085", "", "Dodrio", "", "", "", "", "", "205", "096", "z", "z", "Central: 095", "z");
pokemonArray[85] = new pokemon("086", "", "Seel", "", "", "", "", "", "178", "z", "z", "265", "z", "z");
pokemonArray[86] = new pokemon("087", "", "Dewgong", "", "", "", "", "", "179", "z", "z", "266", "z", "z");  
pokemonArray[87] = new pokemon("088", "", "Grimer", "", "", "", "", "", "117", "111", "z", "064", "z", "050");
pokemonArray[88] = new pokemon("089", "", "Muk", "", "", "", "", "", "118", "112", "z", "065", "z", "051");
pokemonArray[89] = new pokemon("090", "", "Shellder", "", "", "", "", "", "171", "z", "z", "z", "Coastal: 036", "115");
pokemonArray[90] = new pokemon("091", "", "Cloyster", "", "", "", "", "", "172", "z", "z", "z", "Coastal: 037", "116");
pokemonArray[91] = new pokemon("092", "✓", "Gastly", "G-ass", "SOS Chain", 181, 74, "Shiny/gastly.gif", "058", "z", "069", "z", "Mountain: 030", "061");
pokemonArray[92] = new pokemon("093", "", "Haunter", "", "", "", "", "", "059", "z", "070", "z", "Mountain: 031", "062");
pokemonArray[93] = new pokemon("094", "", "Gengar", "", "", "", "", "", "060", "z", "071", "z", "Mountain: 032", "063");
pokemonArray[94] = new pokemon("095", "", "Onix", "", "", "", "", "", "062", "z", "034", "071", "Coastal: 053", "z");   
pokemonArray[95] = new pokemon("096", "", "Drowzee", "", "", "", "", "", "087", "z", "z", "z", "z", "054");
pokemonArray[96] = new pokemon("097", "", "Hypno", "", "", "", "", "", "088", "z", "z", "z", "z", "055");
pokemonArray[97] = new pokemon("098", "✓", "Krabby", "Eugene", "Friend Safari", 210, 50, "Shiny/krabby.gif", "166", "z", "z", "z", "z", "z");
pokemonArray[98] = new pokemon("099", "", "Kingler", "", "", "", "", "", "167", "z", "z", "z", "z", "z");
pokemonArray[99] = new pokemon("100", "✓", "Voltorb", "Blue Ball", "Hordes", 47, 11, "Shiny/voltorb.gif", "121", "087", "z", "z", "Mountain: 072", "z");
pokemonArray[100] = new pokemon("101", "", "Electrode", "", "", "", "", "", "122", "088", "z", "z", "Mountain: 073", "z");
pokemonArray[101] = new pokemon("102", "", "Exeggcute", "", "", "", "", "", "105", "z", "z", "z", "Coastal: 136", "269");
pokemonArray[102] = new pokemon("103", "", "Exeggutor", "", "", "", "", "", "106", "z", "z", "z", "Coastal: 137", "270");
pokemonArray[103] = new pokemon("104", "✓", "Cubone", "Skullkid", "SOS Chain", 253, 461, "Shiny/cubone.gif", "208", "z", "z", "z", "Coastal: 060", "163");
pokemonArray[104] = new pokemon("105", "✓", "Marowak", "Lima Bone", "Friend Safari", 58, 288, "Shiny/marowak.gif", "209", "z", "z", "z", "Coastal: 061", "164");
pokemonArray[105] = new pokemon("106", "", "Hitmonlee", "", "", "", "", "", "146", "z", "z", "z", "z", "z");
pokemonArray[106] = new pokemon("107", "", "Hitmonchan", "", "", "", "", "", "147", "z", "z", "z", "z", "z");
pokemonArray[107] = new pokemon("108", "", "Lickitung", "", "", "", "", "", "180", "z", "161", "284", "Mountain: 134", "z");
pokemonArray[108] = new pokemon("109", "", "Koffing", "", "", "", "", "", "115", "113", "z", "046", "z", "z");
pokemonArray[109] = new pokemon("110", "", "Weezing", "", "", "", "", "", "116", "114", "z", "047", "z", "z");
pokemonArray[110] = new pokemon("111", "", "Rhyhorn", "", "", "", "", "", "211", "176", "186", "z", "Coastal: 050", "z");
pokemonArray[111] = new pokemon("112", "", "Rhydon", "", "", "", "", "", "212", "177", "187", "z", "Coastal: 051", "z");
pokemonArray[112] = new pokemon("113", "", "Chansey", "", "", "", "", "", "222", "z", "097", "z", "z", "033");
pokemonArray[113] = new pokemon("114", "", "Tangela", "", "", "", "", "", "182", "z", "181", "217", "z", "z");
pokemonArray[114] = new pokemon("115", "", "Kangaskhan", "", "", "", "", "", "210", "z", "z", "z", "Coastal: 062", "165");
pokemonArray[115] = new pokemon("116", "✓", "Horsea", "Seabiscuit", "Chain Fishing", 230, 57, "Shiny/horsea.gif", "190", "193", "z", "z", "Coastal: 039", "z");
pokemonArray[116] = new pokemon("117", "", "Seadra", "", "", "", "", "", "191", "194", "z", "z", "Coastal: 040", "z");
pokemonArray[117] = new pokemon("118", "", "Goldeen", "", "", "", "", "", "078", "051", "078", "z", "Central: 053", "153");
pokemonArray[118] = new pokemon("119", "", "Seaking", "", "", "", "", "", "079", "052", "079", "z", "Central: 054", "154");
pokemonArray[119] = new pokemon("120", "", "Staryu", "", "", "", "", "", "169", "148", "z", "238", "Coastal: 034", "184");
pokemonArray[120] = new pokemon("121", "", "Starmie", "", "", "", "", "", "170", "149", "z", "239", "Coastal: 035", "185");
pokemonArray[121] = new pokemon("122", "", "Mr. Mime", "", "", "", "", "", "158", "z", "095", "z", "Coastal: 114", "z");
pokemonArray[122] = new pokemon("123", "", "Scyther", "", "", "", "", "", "111", "z", "195", "z", "Mountain: 136", "275");
pokemonArray[123] = new pokemon("124", "", "Jynx", "", "", "", "", "", "155", "z", "z", "z", "Mountain: 084", "z");
pokemonArray[124] = new pokemon("125", "✓", "Electabuzz", "Tony", "Friend Safari", 94, 39, "Shiny/electabuzz.gif", "157", "z", "198", "057", "z", "227");
pokemonArray[125] = new pokemon("126", "✓", "Magmar", "Banter", "Friend Safari", 132, 1443, "Shiny/magmar.gif", "153", "z", "201", "054", "z", "167");
pokemonArray[126] = new pokemon("127", "✓", "Pinsir", "Cerulean", "Friend Safari", 117, 197, "Shiny/pinsir.gif", "113", "174", "z", "146", "Coastal: 130", "175");
pokemonArray[127] = new pokemon("128", "", "Tauros", "", "", "", "", "", "150", "z", "z", "z", "Coastal: 125", "137");
pokemonArray[128] = new pokemon("129", "✓", "Magikarp", "Goldeen", "Chain Fishing", 157, 31, "Shiny/magikarp.gif", "076", "053", "023", "z", "Central: 049", "091");
pokemonArray[129] = new pokemon("130", "", "Gyarados", "", "", "", "", "", "077", "054", "024", "z", "Central: 050", "092");
pokemonArray[130] = new pokemon("131", "✓", "Lapras", "Air Jordan", "Friend Safari", 225, 467, "Shiny/lapras.gif", "224", "z", "z", "242", "Coastal: 150", "268");
pokemonArray[131] = new pokemon("132", "✓", "Ditto", "MeTooThanks", "Friend Safari", 136, 274, "Shiny/ditto.gif", "092", "z", "z", "261", "Mountain: 138", "209");
pokemonArray[132] = new pokemon("133", "", "Eevee", "", "", "", "", "", "184", "z", "163", "091", "Coastal: 077", "123");
pokemonArray[133] = new pokemon("134", "✓", "Vaporeon", "Vape Nation", "DexNav", 22, 225, "Shiny/vaporeon.gif", "185", "z", "164", "092", "Coastal: 078", "124");
pokemonArray[134] = new pokemon("135", "✓", "Jolteon", "Limewire", "DexNav", 4, 63, "Shiny/jolteon.gif", "186", "z", "165", "093", "Coastal: 079", "125");
pokemonArray[135] = new pokemon("136", "✓", "Flareon", "FalseProphet", "DexNav", 105, 42, "Shiny/flareon.gif", "187", "z", "166", "094", "Coastal: 080", "126");
pokemonArray[136] = new pokemon("137", "✓", "Porygon", "Haris", "DexNav", 135, 441, "Shiny/porygon.gif", "220", "z", "192", "z", "z", "217");
pokemonArray[137] = new pokemon("138", "✓", "Omanyte", "Lord Helix", "Breeding", 108, 433, "Shiny/omanyte.gif", "225", "z", "z", "z", "z", "z");
pokemonArray[138] = new pokemon("139", "", "Omastar", "", "", "", "", "", "226", "z", "z", "z", "z", "z");
pokemonArray[139] = new pokemon("140", "", "Kabuto", "", "", "", "", "", "227", "z", "z", "z", "z", "z");
pokemonArray[140] = new pokemon("141", "", "Kabutops", "", "", "", "", "", "228", "z", "z", "z", "z", "z");
pokemonArray[141] = new pokemon("142", "", "Aerodactyl", "", "", "", "", "", "229", "z", "z", "z", "Coastal: 068", "284");
pokemonArray[142] = new pokemon("143", "", "Snorlax", "", "", "", "", "", "230", "z", "113", "z", "Central: 139", "036");
pokemonArray[143] = new pokemon("144", "", "Articuno", "", "", "", "", "", "240", "z", "z", "z", "Coastal: 151", "z");
pokemonArray[144] = new pokemon("145", "", "Zapdos", "", "", "", "", "", "241", "z", "z", "z", "Coastal: 152", "z");
pokemonArray[145] = new pokemon("146", "", "Moltres", "", "", "", "", "", "242", "z", "z", "z", "Coastal: 153", "z");
pokemonArray[146] = new pokemon("147", "", "Dratini", "", "", "", "", "", "246", "z", "z", "z", "Mountain: 145", "281");
pokemonArray[147] = new pokemon("148", "", "Dragonair", "", "", "", "", "", "247", "z", "z", "z", "Mountain: 146", "282");
pokemonArray[148] = new pokemon("149", "", "Dragonite", "", "", "", "", "", "248", "z", "z", "z", "Mountain: 147", "283");
pokemonArray[149] = new pokemon("150", "", "Mewtwo", "", "", "", "", "", "254", "z", "z", "z", "Mountain: 151", "z");
pokemonArray[150] = new pokemon("151", "", "Mew", "", "", "", "", "", "255", "z", "z", "z", "z", "z");
pokemonArray[151] = new pokemon("152", "✓", "Chikorita", "Autumn", "Breeding", 17, 593, "Shiny/chikorita.gif", "001", "z", "z", "z", "z", "z");
pokemonArray[152] = new pokemon("153", "", "Bayleef", "", "", "", "", "", "002", "z", "z", "z", "z", "z");
pokemonArray[153] = new pokemon("154", "", "Meganium", "", "", "", "", "", "003", "z", "z", "z", "z", "z");
pokemonArray[154] = new pokemon("155", "✓", "Cyndaquil", "Prussian", "Breeding", 7, 1292, "Shiny/cyndaquil.gif", "004", "z", "z", "z", "z", "z");
pokemonArray[155] = new pokemon("156", "", "Quilava", "", "", "", "", "", "005", "z", "z", "z", "z", "z");
pokemonArray[156] = new pokemon("157", "", "Typhlosion", "", "", "", "", "", "006", "z", "z", "z", "z", "z");
pokemonArray[157] = new pokemon("158", "✓", "Totodile", "Crocs", "Breeding", 3, 360, "Shiny/totodile.gif", "007", "z", "z", "z", "z", "z");
pokemonArray[158] = new pokemon("159", "", "Croconaw", "", "", "", "", "", "008", "z", "z", "z", "z", "z");
pokemonArray[159] = new pokemon("160", "", "Feraligatr", "", "", "", "", "", "009", "z", "z", "z", "z", "z");
pokemonArray[160] = new pokemon("161", "", "Sentret", "", "", "", "", "", "019", "z", "z", "z", "Central: 109", "z");
pokemonArray[161] = new pokemon("162", "✓", "Furret", "Nat", "Breeding", 99, 451, "Shiny/furret.gif", "020", "z", "z", "z", "Central: 110", "z");
pokemonArray[162] = new pokemon("163", "", "Hoothoot", "", "", "", "", "", "015", "z", "106", "z", "Mountain: 117", "z");
pokemonArray[163] = new pokemon("164", "", "Noctowl", "", "", "", "", "", "016", "z", "107", "z", "Mountain: 118", "z");
pokemonArray[164] = new pokemon("165", "", "Ledyba", "", "", "", "", "", "030", "z", "z", "z", "Central: 074", "020");
pokemonArray[165] = new pokemon("166", "", "Ledian", "", "", "", "", "", "031", "z", "z", "z", "Central: 075", "021");
pokemonArray[166] = new pokemon("167", "✓", "Spinarak", "Webster", "SOS Chain", 193, 65, "Shiny/spinarak.gif", "032", "z", "z", "z", "Mountain: 107", "022");
pokemonArray[167] = new pokemon("168", "", "Ariados", "", "", "", "", "", "033", "z", "z", "z", "Mountain: 108", "023");
pokemonArray[168] = new pokemon("169", "", "Crobat", "", "", "", "", "", "039", "067", "030", "063", "Central: 147", "070");
pokemonArray[169] = new pokemon("170", "", "Chinchou", "", "", "", "", "", "176", "190", "z", "z", "Coastal: 147", "201");
pokemonArray[170] = new pokemon("171", "✓", "Lanturn", "Saint Walker", "DexNav", 39, 119, "Shiny/lanturn.gif", "177", "191", "z", "z", "Coastal: 148", "202");
pokemonArray[171] = new pokemon("172", "", "Pichu", "", "", "", "", "", "021", "162", "103", "z", "Central: 035", "024");
pokemonArray[172] = new pokemon("173", "", "Cleffa", "", "", "", "", "", "040", "z", "099", "088", "z", "210");
pokemonArray[173] = new pokemon("174", "", "Igglybuff", "", "", "", "", "", "043", "142", "z", "281", "Mountain: 119", "134");
pokemonArray[174] = new pokemon("175", "", "Togepi", "", "", "", "", "", "046", "z", "173", "z", "z", "z");
pokemonArray[175] = new pokemon("176", "", "Togetic", "", "", "", "", "", "047", "z", "174", "z", "z", "z");
pokemonArray[176] = new pokemon("177", "", "Natu", "", "", "", "", "", "161", "169", "z", "z", "z", "z");
pokemonArray[177] = new pokemon("178", "", "Xatu", "", "", "", "", "", "162", "170", "z", "z", "z", "z");
pokemonArray[178] = new pokemon("179", "✓", "Mareep", "Cotton Candy", "Hordes", 97, 308, "Shiny/mareep.gif", "053", "z", "z", "025", "Coastal: 127", "z");
pokemonArray[179] = new pokemon("180", "✓", "Flaaffy", "Kracko", "Hordes", 147, 638, "Shiny/flaaffy.gif", "054", "z", "z", "026", "Coastal: 128", "z");
pokemonArray[180] = new pokemon("181", "", "Ampharos", "", "", "", "", "", "055", "z", "z", "027", "Coastal: 129", "z");
pokemonArray[181] = new pokemon("182", "", "Bellossom", "", "", "", "", "", "086", "094", "z", "z", "Central: 108", "z");
pokemonArray[182] = new pokemon("183", "", "Marill", "", "", "", "", "", "132", "056", "125", "031", "Central: 042", "z");
pokemonArray[183] = new pokemon("184", "✓", "Azumarill", "Golden Egg", "Friend Safari", 119, 304, "Shiny/azumarill.gif", "133", "057", "126", "032", "Central: 043", "z");
pokemonArray[184] = new pokemon("185", "", "Sudowoodo", "", "", "", "", "", "107", "z", "093", "z", "Mountain: 130", "031");
pokemonArray[185] = new pokemon("186", "✓", "Politoed", "Slippy", "Chain Fishing", 194, 24, "Shiny/politoed.gif", "075", "z", "z", "z", "Mountain: 036", "152");
pokemonArray[186] = new pokemon("187", "✓", "Hoppip", "Hane", "Hordes", 28, 37, "Shiny/hoppip.gif", "067", "z", "z", "z", "Central: 135", "z");
pokemonArray[187] = new pokemon("188", "✓", "Skiploom", "Zyq", "Hordes", 137, 118, "Shiny/skiploom.gif", "068", "z", "z", "z", "Central: 136", "z");
pokemonArray[188] = new pokemon("189", "✓", "Jumpluff", "Jigglypluff", "Hordes", 203, 959, "Shiny/jumpluff.gif", "069", "z", "z", "z", "Central: 137", "z");
pokemonArray[189] = new pokemon("190", "✓", "Aipom", "Arnold", "Friend Safari", 120, 193, "Shiny/aipom.gif", "123", "z", "063", "z", "z", "z");
pokemonArray[190] = new pokemon("191", "", "Sunkern", "", "", "", "", "", "103", "z", "z", "020", "z", "z");
pokemonArray[191] = new pokemon("192", "", "Sunflora", "", "", "", "", "", "104", "z", "z", "021", "z", "z");
pokemonArray[192] = new pokemon("193", "", "Yanma", "", "", "", "", "", "101", "z", "183", "286", "Coastal: 087", "z");
pokemonArray[193] = new pokemon("194", "", "Wooper", "", "", "", "", "", "056", "z", "117", "z", "Mountain: 017", "z");
pokemonArray[194] = new pokemon("195", "", "Quagsire", "", "", "", "", "", "057", "z", "118", "z", "Mountain: 018", "z");
pokemonArray[195] = new pokemon("196", "", "Espeon", "", "", "", "", "", "188", "z", "167", "095", "Coastal: 081", "127");
pokemonArray[196] = new pokemon("197", "✓", "Umbreon", "Tenebrae", "DexNav", 5, 210, "Shiny/umbreon.gif", "189", "z", "168", "096", "Coastal: 082", "128");
pokemonArray[197] = new pokemon("198", "", "Murkrow", "", "", "", "", "", "213", "z", "074", "z", "Mountain: 051", "277");
pokemonArray[198] = new pokemon("199", "✓", "Slowking", "Pants", "DexNav", 151, 183, "Shiny/slowking.gif", "082", "z", "z", "z", "Coastal: 135", "039");
pokemonArray[199] = new pokemon("200", "✓", "Misdreavus", "BootyJo", "DexNav", 42, 18, "Shiny/misdreavus.gif", "219", "z", "072", "z", "z", "066");
pokemonArray[200] = new pokemon("201", "✓", "Unown", "YEEESSSS!!", "DexNav", 154, 583, "Shiny/unown.gif", "061", "z", "114", "z", "z", "z");
pokemonArray[201] = new pokemon("202", "", "Wobbuffet", "", "", "", "", "", "108", "168", "z", "z", "Coastal: 119", "z");
pokemonArray[202] = new pokemon("203", "", "Girafarig", "", "", "", "", "", "149", "171", "121", "z", "z", "z");
pokemonArray[203] = new pokemon("204", "", "Pineco", "", "", "", "", "", "093", "z", "z", "z", "z", "z");
pokemonArray[204] = new pokemon("205", "", "Forretress", "", "", "", "", "", "094", "z", "z", "z", "z", "z");
pokemonArray[205] = new pokemon("206", "✓", "Dunsparce", "Delicious", "Friend Safari", 25, 235, "Shiny/dunsparce.gif", "052", "z", "z", "035", "Central: 040", "z");
pokemonArray[206] = new pokemon("207", "✓", "Gligar", "Ginger", "Hordes", 91, 146, "Shiny/gligar.gif", "193", "z", "153", "221", "Mountain: 115", "z");
pokemonArray[207] = new pokemon("208", "", "Steelix", "", "", "", "", "", "063", "z", "035", "072", "Coastal: 054", "z");
pokemonArray[208] = new pokemon("209", "✓", "Snubbull", "Snuggles", "Friend Safari", 126, 779, "Shiny/snubbull.gif", "125", "z", "z", "z", "Coastal: 071", "258");
pokemonArray[209] = new pokemon("210", "", "Granbull", "", "", "", "", "", "126", "z", "z", "z", "Coastal: 072", "259");
pokemonArray[210] = new pokemon("211", "", "Qwilfish", "", "", "", "", "", "163", "z", "z", "z", "Coastal: 038", "z");
pokemonArray[211] = new pokemon("212", "", "Scizor", "", "", "", "", "", "112", "z", "196", "z", "Mountain: 137", "276");
pokemonArray[212] = new pokemon("213", "✓", "Shuckle", "Monado Boy", "Friend Safari", 122, 73, "Shiny/shuckle.gif", "168", "z", "z", "232", "Mountain: 014", "z");
pokemonArray[213] = new pokemon("214", "✓", "Heracross", "Robobot", "Friend Safari", 85, 63, "Shiny/heracross.gif", "114", "175", "062", "145", "Coastal: 131", "z");
pokemonArray[214] = new pokemon("215", "✓", "Sneasel", "Alolan Mew", "Friend Safari", 123, 49, "Shiny/sneasel.gif", "218", "z", "144", "252", "Mountain: 091", "249");
pokemonArray[215] = new pokemon("216", "✓", "Teddiursa", "Smokey", "Friend Safari", 196, 443, "Shiny/teddiursa.gif", "198", "z", "z", "z", "Mountain: 132", "z");
pokemonArray[216] = new pokemon("217", "", "Ursaring", "", "", "", "", "", "199", "z", "z", "z", "Mountain: 133", "z");
pokemonArray[217] = new pokemon("218", "", "Slugma", "", "", "", "", "", "216", "108", "z", "z", "Mountain: 012", "z");
pokemonArray[218] = new pokemon("219", "", "Magcargo", "", "", "", "", "", "217", "109", "z", "z", "Mountain: 013", "z");
pokemonArray[219] = new pokemon("220", "", "Swinub", "", "", "", "", "", "195", "z", "203", "258", "Mountain: 076", "z");
pokemonArray[220] = new pokemon("221", "", "Piloswine", "", "", "", "", "", "196", "z", "204", "259", "Mountain: 077", "z");
pokemonArray[221] = new pokemon("222", "", "Corsola", "", "", "", "", "", "173", "189", "z", "237", "Coastal: 146", "112");
pokemonArray[222] = new pokemon("223", "✓", "Remoraid", "Wrasse", "Chain Fishing", 8, 27, "Shiny/remoraid.gif", "174", "z", "132", "235", "Coastal: 144", "z");
pokemonArray[223] = new pokemon("224", "✓", "Octillery", "DJ Octavio", "Friend Safari", 68, 2895, "Shiny/octillery.gif", "175", "z", "133", "236", "Coastal: 145", "z");
pokemonArray[224] = new pokemon("225", "", "Delibird", "", "", "", "", "", "194", "z", "z", "254", "Mountain: 090", "081");
pokemonArray[225] = new pokemon("226", "", "Mantine", "", "", "", "", "", "202", "z", "141", "234", "Coastal: 140", "z");
pokemonArray[226] = new pokemon("227", "✓", "Skarmory", "Gillette", "Friend Safari", 150, 600, "Shiny/skarmory.gif", "203", "120", "z", "203", "Mountain: 112", "208");
pokemonArray[227] = new pokemon("228", "", "Houndour", "", "", "", "", "", "214", "z", "176", "z", "Coastal: 075", "z");
pokemonArray[228] = new pokemon("229", "", "Houndoom", "", "", "", "", "", "215", "z", "177", "z", "Coastal: 076", "z");
pokemonArray[229] = new pokemon("230", "", "Kingdra", "", "", "", "", "", "192", "195", "z", "z", "Coastal: 041", "z");
pokemonArray[230] = new pokemon("231", "", "Phanpy", "", "", "", "", "", "200", "172", "z", "z", "z", "z");
pokemonArray[231] = new pokemon("232", "✓", "Donphan", "Donfam", "DexNav", 40, 115, "Shiny/donphan.gif", "201", "173", "z", "z", "z", "z");
pokemonArray[232] = new pokemon("233", "✓", "Porygon2", "DLC", "DexNav", 134, 16, "Shiny/porygon2.gif", "221", "z", "193", "z", "z", "218");
pokemonArray[233] = new pokemon("234", "✓", "Stantler", "Caribouger", "DexNav", 45, 127, "Shiny/stantler.gif", "131", "z", "z", "z", "z", "z");
pokemonArray[234] = new pokemon("235", "", "Smeargle", "", "", "", "", "", "159", "z", "z", "z", "Central: 124", "058");
pokemonArray[235] = new pokemon("236", "✓", "Tyrogue", "Aqua Man", "DexNav", 80, 262, "Shiny/tyrogue.gif", "145", "z", "z", "z", "z", "z");
pokemonArray[236] = new pokemon("237", "", "Hitmontop", "", "", "", "", "", "148", "z", "z", "z", "z", "z");
pokemonArray[237] = new pokemon("238", "", "Smoochum", "", "", "", "", "", "154", "z", "z", "z", "Mountain: 083", "z");
pokemonArray[238] = new pokemon("239", "", "Elekid", "", "", "", "", "", "156", "z", "197", "056", "z", "226");
pokemonArray[239] = new pokemon("240", "", "Magby", "", "", "", "", "", "152", "z", "200", "053", "z", "166");
pokemonArray[240] = new pokemon("241", "", "Miltank", "", "", "", "", "", "151", "z", "z", "z", "Coastal: 126", "138");
pokemonArray[241] = new pokemon("242", "", "Blissey", "", "", "", "", "", "223", "z", "098", "z", "z", "034");
pokemonArray[242] = new pokemon("243", "✓", "Raikou", "ZipZap Cat", "Soft-Reset", 66, 142, "Shiny/raikou.gif", "243", "z", "z", "z", "z", "z");
pokemonArray[243] = new pokemon("244", "✓", "Entei", "Jim Crow", "Soft-Reset", 125, 208, "Shiny/entei.gif", "244", "z", "z", "z", "z", "z");
pokemonArray[244] = new pokemon("245", "✓", "Suicune", "Aquafina", "Soft-Reset", 93, 1913, "Shiny/suicune.gif", "245", "z", "z", "z", "z", "z");
pokemonArray[245] = new pokemon("246", "", "Larvitar", "", "", "", "", "", "249", "z", "z", "292", "Mountain: 102", "z");
pokemonArray[246] = new pokemon("247", "", "Pupitar", "", "", "", "", "", "250", "z", "z", "293", "Mountain: 103", "z");
pokemonArray[247] = new pokemon("248", "", "Tyranitar", "", "", "", "", "", "251", "z", "z", "294", "Mountain: 104", "z");
pokemonArray[248] = new pokemon("249", "", "Lugia", "", "", "", "", "", "252", "z", "z", "z", "z", "z");
pokemonArray[249] = new pokemon("250", "", "Ho-Oh", "", "", "", "", "", "253", "z", "z", "z", "z", "z");
pokemonArray[250] = new pokemon("251", "", "Celebi", "", "", "", "", "", "256", "z", "z", "z", "z", "z");
pokemonArray[251] = new pokemon("252", "", "Treecko", "", "", "", "", "", "z", "001", "z", "z", "z", "z");
pokemonArray[252] = new pokemon("253", "", "Grovyle", "", "", "", "", "", "z", "002", "z", "z", "z", "z");
pokemonArray[253] = new pokemon("254", "", "Sceptile", "", "", "", "", "", "z", "003", "z", "z", "z", "z");
pokemonArray[254] = new pokemon("255", "✓", "Torchic", "Soon?", "Breeding", 220, 906, "Shiny/torchic.gif", "z", "004", "z", "z", "z", "z");
pokemonArray[255] = new pokemon("256", "", "Combusken", "", "", "", "", "", "z", "005", "z", "z", "z", "z");
pokemonArray[256] = new pokemon("257", "", "Blaziken", "", "", "", "", "", "z", "006", "z", "z", "z", "z");
pokemonArray[257] = new pokemon("258", "✓", "Mudkip", "Cheese", "Breeding", 146, 225, "Shiny/mudkip.gif", "z", "007", "z", "z", "z", "z");
pokemonArray[258] = new pokemon("259", "", "Marshtomp", "", "", "", "", "", "z", "008", "z", "z", "z", "z");
pokemonArray[259] = new pokemon("260", "", "Swampert", "", "", "", "", "", "z", "009", "z", "z", "z", "z");
pokemonArray[260] = new pokemon("261", "", "Poochyena", "", "", "", "", "", "z", "010", "z", "z", "Mountain: 044", "z");
pokemonArray[261] = new pokemon("262", "✓", "Mightyena", "Air Bud", "Friend Safari", 100, 26, "Shiny/mightyena.gif", "z", "011", "z", "z", "Mountain: 045", "z");
pokemonArray[262] = new pokemon("263", "✓", "Zigzagoon", "Ziggy Pop", "Hordes", 87, 30, "Shiny/zigzagoon.gif", "z", "012", "z", "z", "Central: 012", "z");
pokemonArray[263] = new pokemon("264", "✓", "Linoone", "Chevron", "Hordes", 199, 418, "Shiny/linoone.gif", "z", "013", "z", "z", "Central: 013", "z");
pokemonArray[264] = new pokemon("265", "✓", "Wurmple", "Nurmple", "Hordes", 86, 31, "Shiny/wurmple.gif", "z", "014", "048", "z", "z", "z");
pokemonArray[265] = new pokemon("266", "", "Silcoon", "", "", "", "", "", "z", "015", "049", "z", "z", "z");
pokemonArray[266] = new pokemon("267", "✓", "Beautifly", "Wormy", "Friend Safari", 124, 367, "Shiny/beautifly.gif", "z", "016", "050", "z", "z", "z");
pokemonArray[267] = new pokemon("268", "✓", "Cascoon", "Flubber", "Friend Safari", 84, 41, "Shiny/cascoon.gif", "z", "017", "051", "z", "z", "z");
pokemonArray[268] = new pokemon("269", "", "Dustox", "", "", "", "", "", "z", "018", "052", "z", "z", "z");
pokemonArray[269] = new pokemon("270", "", "Lotad", "", "", "", "", "", "z", "019", "z", "z", "Mountain: 055", "z");
pokemonArray[270] = new pokemon("271", "", "Lombre", "", "", "", "", "", "z", "020", "z", "z", "Mountain: 056", "z");
pokemonArray[271] = new pokemon("272", "", "Ludicolo", "", "", "", "", "", "z", "021", "z", "z", "Mountain: 057", "z");
pokemonArray[272] = new pokemon("273", "✓", "Seedot", "Deez", "Hordes", 50, 55, "Shiny/seedot.gif", "z", "022", "z", "z", "z", "z");
pokemonArray[273] = new pokemon("274", "", "Nuzleaf", "", "", "", "", "", "z", "023", "z", "z", "z", "z");
pokemonArray[274] = new pokemon("275", "", "Shiftry", "", "", "", "", "", "z", "024", "z", "z", "z", "z");
pokemonArray[275] = new pokemon("276", "✓", "Taillow", "Billy", "DexNav", 162, 353, "Shiny/taillow.gif", "z", "025", "z", "z", "Coastal: 019", "z");
pokemonArray[276] = new pokemon("277", "", "Swellow", "", "", "", "", "", "z", "026", "z", "z", "Coastal: 020", "z");
pokemonArray[277] = new pokemon("278", "✓", "Wingull", "Peeko", "Hordes", 31, 55, "Shiny/wingull.gif", "z", "027", "119", "212", "Coastal: 017", "040");
pokemonArray[278] = new pokemon("279", "", "Pelipper", "", "", "", "", "", "z", "028", "120", "213", "Coastal: 018", "041");
pokemonArray[279] = new pokemon("280", "", "Ralts", "", "", "", "", "", "z", "029", "157", "z", "Central: 064", "z");
pokemonArray[280] = new pokemon("281", "", "Kirlia", "", "", "", "", "", "z", "030", "158", "z", "Central: 065", "z");
pokemonArray[281] = new pokemon("282", "", "Gardevoir", "", "", "", "", "", "z", "031", "159", "z", "Central: 066", "z");
pokemonArray[282] = new pokemon("283", "✓", "Surskit", "Sir Skit", "DexNav", 161, 186, "Shiny/surskit.gif", "z", "033", "z", "z", "Central: 047", "139");
pokemonArray[283] = new pokemon("284", "", "Masquerain", "", "", "", "", "", "z", "034", "z", "z", "Central: 048", "140");
pokemonArray[284] = new pokemon("285", "", "Shroomish", "", "", "", "", "", "z", "035", "z", "z", "z", "z");
pokemonArray[285] = new pokemon("286", "", "Breloom", "", "", "", "", "", "z", "036", "z", "z", "z", "z");
pokemonArray[286] = new pokemon("287", "✓", "Slakoth", "China", "DexNav", 116, 496, "Shiny/slakoth.gif", "z", "037", "z", "276", "z", "z");
pokemonArray[287] = new pokemon("288", "", "Vigoroth", "", "", "", "", "", "z", "038", "z", "277", "z", "z");
pokemonArray[288] = new pokemon("289", "", "Slaking", "", "", "", "", "", "z", "039", "z", "278", "z", "z");
pokemonArray[289] = new pokemon("290", "✓", "Nincada", "Nugget", "Hordes", 34, 613, "Shiny/nincada.gif", "z", "043", "z", "z", "Central: 111", "z");
pokemonArray[290] = new pokemon("291", "", "Ninjask", "", "", "", "", "", "z", "044", "z", "z", "Central: 112", "z");
pokemonArray[291] = new pokemon("292", "", "Shedinja", "", "", "", "", "", "z", "045", "z", "z", "Central: 113", "z");
pokemonArray[292] = new pokemon("293", "✓", "Whismur", "Pumbloom", "Hordes", 27, 27, "Shiny/whismur.gif", "z", "046", "z", "z", "Central: 140", "z");
pokemonArray[293] = new pokemon("294", "✓", "Loudred", "Pumbluss", "Hordes", 49, 475, "Shiny/loudred.gif", "z", "047", "z", "z", "Central: 141", "z");
pokemonArray[294] = new pokemon("295", "", "Exploud", "", "", "", "", "", "z", "048", "z", "z", "Central: 142", "z");
pokemonArray[295] = new pokemon("296", "", "Makuhita", "", "", "", "", "", "z", "049", "z", "z", "Coastal: 095", "056");
pokemonArray[296] = new pokemon("297", "", "Hariyama", "", "", "", "", "", "z", "050", "z", "z", "Coastal: 096", "057");
pokemonArray[297] = new pokemon("298", "", "Azurill", "", "", "", "", "", "z", "055", "124", "030", "Central: 041", "z");
pokemonArray[298] = new pokemon("299", "✓", "Nosepass", "Squidward", "Hordes", 29, 4, "Shiny/nosepass.gif", "z", "061", "155", "164", "Coastal: 093", "198");
pokemonArray[299] = new pokemon("300", "✓", "Skitty", "Bianca", "DexNav", 131, 398, "Shiny/skitty.gif", "z", "063", "z", "078", "Central: 078", "z");
pokemonArray[300] = new pokemon("301", "", "Delcatty", "", "", "", "", "", "z", "064", "z", "079", "Central: 079", "z");
pokemonArray[301] = new pokemon("302", "", "Sableye", "", "", "", "", "", "z", "070", "z", "z", "Coastal: 123", "102");
pokemonArray[302] = new pokemon("303", "", "Mawile", "", "", "", "", "", "z", "071", "z", "z", "Coastal: 063", "z");
pokemonArray[303] = new pokemon("304", "", "Aron", "", "", "", "", "", "z", "072", "z", "166", "Mountain: 099", "z");
pokemonArray[304] = new pokemon("305", "", "Lairon", "", "", "", "", "", "z", "073", "z", "167", "Mountain: 100", "z");
pokemonArray[305] = new pokemon("306", "", "Aggron", "", "", "", "", "", "z", "074", "z", "168", "Mountain: 101", "z");
pokemonArray[306] = new pokemon("307", "", "Meditite", "", "", "", "", "", "z", "078", "086", "z", "Central: 143", "z");
pokemonArray[307] = new pokemon("308", "", "Medicham", "", "", "", "", "", "z", "079", "087", "z", "Central: 144", "z");
pokemonArray[308] = new pokemon("309", "", "Electrike", "", "", "", "", "", "z", "080", "z", "z", "Coastal: 073", "z");
pokemonArray[309] = new pokemon("310", "", "Manectric", "", "", "", "", "", "z", "081", "z", "z", "Coastal: 074", "z");
pokemonArray[310] = new pokemon("311", "", "Plusle", "", "", "", "", "", "z", "082", "z", "z", "Central: 096", "z");
pokemonArray[311] = new pokemon("312", "", "Minun", "", "", "", "", "", "z", "083", "z", "z", "Central: 097", "z");
pokemonArray[312] = new pokemon("313", "", "Volbeat", "", "", "", "", "", "z", "089", "z", "z", "Central: 133", "z");
pokemonArray[313] = new pokemon("314", "", "Illumise", "", "", "", "", "", "z", "090", "z", "z", "Central: 134", "z");
pokemonArray[314] = new pokemon("315", "✓", "Roselia", "Curie", "PokeRadar", 205, 42, "Shiny/roselia.gif", "z", "098", "026", "134", "Central: 072", "z");
pokemonArray[315] = new pokemon("316", "", "Gulpin", "", "", "", "", "", "z", "100", "z", "z", "Central: 098", "z");
pokemonArray[316] = new pokemon("317", "", "Swalot", "", "", "", "", "", "z", "101", "z", "z", "Central: 099", "z");
pokemonArray[317] = new pokemon("318", "✓", "Carvanha", "Amazon", "Chain Fishing", 9, 6, "Shiny/carvanha.gif", "z", "102", "z", "z", "Central: 055", "264");
pokemonArray[318] = new pokemon("319", "", "Sharpedo", "", "", "", "", "", "z", "103", "z", "z", "Central: 056", "265");
pokemonArray[319] = new pokemon("320", "✓", "Wailmer", "Wales", "Chain Fishing", 74, 120, "Shiny/wailmer.gif", "z", "104", "z", "240", "Coastal: 027", "266");
pokemonArray[320] = new pokemon("321", "✓", "Wailord", "MobyVag", "Chain Fishing", 159, 29, "Shiny/wailord.gif", "z", "105", "z", "241", "Coastal: 028", "267");
pokemonArray[321] = new pokemon("322", "✓", "Numel", "YellowStone", "Hordes", 18, 86, "Shiny/numel.gif", "z", "106", "z", "204", "z", "z");
pokemonArray[322] = new pokemon("323", "", "Camperupt", "", "", "", "", "", "z", "107", "z", "205", "z", "z");
pokemonArray[323] = new pokemon("324", "", "Torkoal", "", "", "", "", "", "z", "110", "z", "z", "Mountain: 096", "223");
pokemonArray[324] = new pokemon("325", "", "Spoink", "", "", "", "", "", "z", "115", "z", "206", "Coastal: 007", "z");
pokemonArray[325] = new pokemon("326", "✓", "Grumpig", "Porky", "Friend Safari", 153, 1132, "Shiny/grumpig.gif", "z", "116", "z", "207", "Coastal: 008", "z");
pokemonArray[326] = new pokemon("327", "✓", "Spinda", "Wine Club", "Hordes", 65, 144, "Shiny/spinda.gif", "z", "119", "z", "z", "Mountain: 131", "105");
pokemonArray[327] = new pokemon("328", "✓", "Trapinch", "Lockjaw", "Friend Safari", 245, 103, "Shiny/trapinch.gif", "z", "121", "z", "121", "Mountain: 003", "235");
pokemonArray[328] = new pokemon("329", "", "Vibrava", "", "", "", "", "", "z", "122", "z", "122", "Mountain: 004", "236");
pokemonArray[329] = new pokemon("330", "", "Flygon", "", "", "", "", "", "z", "123", "z", "123", "Mountain: 005", "237");
pokemonArray[330] = new pokemon("331", "", "Cacnea", "", "", "", "", "", "z", "124", "z", "z", "z", "z");
pokemonArray[331] = new pokemon("332", "", "Cacturne", "", "", "", "", "", "z", "125", "z", "z", "z", "z");
pokemonArray[332] = new pokemon("333", "✓", "Swablu", "Birb", "Hordes", 140, 73, "Shiny/swablu.gif", "z", "126", "171", "246", "Mountain: 139", "z");
pokemonArray[333] = new pokemon("334", "", "Altaria", "", "", "", "", "", "z", "127", "172", "247", "Mountain: 140", "z");
pokemonArray[334] = new pokemon("335", "✓", "Zangoose", "Zangief", "DexNav", 15, 569, "Shiny/zangoose.gif", "z", "128", "z", "186", "Coastal: 005", "z");
pokemonArray[335] = new pokemon("336", "", "Seviper", "", "", "", "", "", "z", "129", "z", "187", "Coastal: 006", "z");
pokemonArray[336] = new pokemon("337", "", "Lunatone", "", "", "", "", "", "z", "130", "z", "214", "Coastal: 012", "z");
pokemonArray[337] = new pokemon("338", "", "Solrock", "", "", "", "", "", "z", "131", "z", "215", "Coastal: 013", "z");
pokemonArray[338] = new pokemon("339", "", "Barboach", "", "", "", "", "", "z", "132", "080", "z", "Mountain: 040", "093");
pokemonArray[339] = new pokemon("340", "", "Whiscash", "", "", "", "", "", "z", "133", "081", "z", "Mountain: 041", "094");
pokemonArray[340] = new pokemon("341", "✓", "Corphish", "Crawdaddy", "Chain Fishing", 158, 21, "Shiny/corphish.gif", "z", "134", "z", "279", "Central: 051", "z");
pokemonArray[341] = new pokemon("342", "", "Crawdaunt", "", "", "", "", "", "z", "135", "z", "280", "Central: 052", "z");
pokemonArray[342] = new pokemon("343", "", "Baltoy", "", "", "", "", "", "z", "136", "z", "169", "z", "z");
pokemonArray[343] = new pokemon("344", "", "Claydol", "", "", "", "", "", "z", "137", "z", "170", "z", "z");
pokemonArray[344] = new pokemon("345", "", "Lileep", "", "", "", "", "", "z", "138", "z", "z", "z", "z");
pokemonArray[345] = new pokemon("346", "", "Cradily", "", "", "", "", "", "z", "139", "z", "z", "z", "z");
pokemonArray[346] = new pokemon("347", "", "Anorith", "", "", "", "", "", "z", "140", "z", "z", "z", "z");
pokemonArray[347] = new pokemon("348", "", "Armaldo", "", "", "", "", "", "z", "141", "z", "z", "z", "z");
pokemonArray[348] = new pokemon("349", "✓", "Feebas", "Blueberry", "Chain Fishing", 160, 187, "Shiny/feebas.gif", "z", "145", "138", "z", "z", "155");
pokemonArray[349] = new pokemon("350", "", "Milotic", "", "", "", "", "", "z", "146", "139", "z", "z", "156");
pokemonArray[350] = new pokemon("351", "", "Castform", "", "", "", "", "", "z", "147", "z", "163", "z", "181");
pokemonArray[351] = new pokemon("352", "", "Kecleon", "", "", "", "", "", "z", "150", "z", "z", "Central: 116", "z");
pokemonArray[352] = new pokemon("353", "", "Shuppet", "", "", "", "", "", "z", "151", "z", "210", "Mountain: 122", "z");
pokemonArray[353] = new pokemon("354", "", "Banette", "", "", "", "", "", "z", "152", "z", "211", "Mountain: 123", "z");
pokemonArray[354] = new pokemon("355", "", "Duskull", "", "", "", "", "", "z", "153", "189", "z", "z", "z");
pokemonArray[355] = new pokemon("356", "", "Dusclops", "", "", "", "", "", "z", "154", "190", "z", "z", "z");
pokemonArray[356] = new pokemon("357", "", "Tropius", "", "", "", "", "", "z", "156", "185", "288", "z", "z");
pokemonArray[357] = new pokemon("358", "", "Chimecho", "", "", "", "", "", "z", "158", "083", "z", "Coastal: 112", "z");
pokemonArray[358] = new pokemon("359", "", "Absol", "", "", "", "", "", "z", "159", "209", "216", "Coastal: 009", "245");
pokemonArray[359] = new pokemon("360", "", "Wynaut", "", "", "", "", "", "z", "167", "z", "z", "Coastal: 118", "z");
pokemonArray[360] = new pokemon("361", "", "Snorunt", "", "", "", "", "", "z", "179", "206", "z", "z", "246");
pokemonArray[361] = new pokemon("362", "", "Glalie", "", "", "", "", "", "z", "180", "207", "z", "z", "247");
pokemonArray[362] = new pokemon("363", "", "Spheal", "", "", "", "", "", "z", "182", "z", "243", "z", "z");
pokemonArray[363] = new pokemon("364", "", "Sealeo", "", "", "", "", "", "z", "183", "z", "244", "z", "z");
pokemonArray[364] = new pokemon("365", "", "Walrein", "", "", "", "", "", "z", "184", "z", "245", "z", "z");
pokemonArray[365] = new pokemon("366", "✓", "Clamperl", "Clambake", "DexNav", 195, 735, "Shiny/clamperl.gif", "z", "185", "z", "z", "Coastal: 141", "z");
pokemonArray[366] = new pokemon("367", "", "Huntail", "", "", "", "", "", "z", "186", "z", "z", "Coastal: 142", "z");
pokemonArray[367] = new pokemon("368", "", "Gorebyss", "", "", "", "", "", "z", "187", "z", "z", "Coastal: 143", "z");
pokemonArray[368] = new pokemon("369", "", "Relicanth", "", "", "", "", "", "z", "188", "z", "z", "Coastal: 042", "262");
pokemonArray[369] = new pokemon("370", "✓", "Luvdisc", "Heartgold", "Chain Fishing", 231, 33, "Shiny/luvdisc.gif", "z", "192", "z", "z", "Coastal: 029", "111");
pokemonArray[370] = new pokemon("371", "", "Bagon", "", "", "", "", "", "z", "196", "z", "z", "Coastal: 014", "117");
pokemonArray[371] = new pokemon("372", "", "Shelgon", "", "", "", "", "", "z", "197", "z", "z", "Coastal: 015", "118");
pokemonArray[372] = new pokemon("373", "", "Salamence", "", "", "", "", "", "z", "198", "z", "z", "Coastal: 016", "119");
pokemonArray[373] = new pokemon("374", "", "Beldum", "", "", "", "", "", "z", "199", "z", "262", "z", "214");
pokemonArray[374] = new pokemon("375", "", "Metang", "", "", "", "", "", "z", "200", "z", "263", "z", "215");
pokemonArray[375] = new pokemon("376", "", "Metagross", "", "", "", "", "", "z", "201", "z", "264", "z", "216");
pokemonArray[376] = new pokemon("377", "✓", "Regirock", "BodyIsReady", "Soft-Reset", 11, 190, "Shiny/regirock.gif", "z", "202", "z", "z", "z", "z");
pokemonArray[377] = new pokemon("378", "✓", "Regice", "Freeze-Aime", "Soft-Reset", 35, 5027, "Shiny/regice.gif", "z", "203", "z", "z", "z", "z");
pokemonArray[378] = new pokemon("379", "✓", "Registeel", "Fils-A-Mech", "Soft-Reset", 12, 1515, "Shiny/registeel.gif", "z", "204", "z", "z", "z", "z");
pokemonArray[379] = new pokemon("380", "✓", "Latias", "Margarita", "Soft-Reset", 190, 2372, "Shiny/latias.gif", "z", "205", "z", "z", "z", "z");
pokemonArray[380] = new pokemon("381", "✓", "Latios", "Boeing", "Soft-Reset", 189, 186, "Shiny/latios.gif", "z", "206", "z", "z", "z", "z");
pokemonArray[381] = new pokemon("382", "", "Kyogre", "", "", "", "", "", "z", "207", "z", "z", "z", "z");
pokemonArray[382] = new pokemon("383", "", "Groudon", "", "", "", "", "", "z", "208", "z", "z", "z", "z");
pokemonArray[383] = new pokemon("384", "", "Rayquaza", "", "", "", "", "", "z", "209", "z", "z", "z", "z");
pokemonArray[384] = new pokemon("385", "", "Jirachi", "", "", "", "", "", "z", "210", "z", "z", "z", "z");
pokemonArray[385] = new pokemon("386", "", "Deoxys", "", "", "", "", "", "z", "211", "z", "z", "z", "z");
pokemonArray[386] = new pokemon("387", "✓", "Turtwig", "Donatello", "Breeding", 239, 323, "Shiny/turtwig.gif", "z", "z", "001", "z", "z", "z");
pokemonArray[387] = new pokemon("388", "✓", "Grotle", "Raphael", "Breeding", 254, 869, "Shiny/grotle.gif", "z", "z", "002", "z", "z", "z");
pokemonArray[388] = new pokemon("389", "", "Torterra", "", "", "", "", "", "z", "z", "003", "z", "z", "z");
pokemonArray[389] = new pokemon("390", "✓", "Chimchar", "Chimpotle", "Breeding", 19, 762, "Shiny/chimchar.gif", "z", "z", "004", "z", "z", "z");
pokemonArray[390] = new pokemon("391", "", "Monferno", "", "", "", "", "", "z", "z", "005", "z", "z", "z");
pokemonArray[391] = new pokemon("392", "", "Infernape", "", "", "", "", "", "z", "z", "006", "z", "z", "z");
pokemonArray[392] = new pokemon("393", "", "Piplup", "", "", "", "", "", "z", "z", "007", "z", "z", "z");
pokemonArray[393] = new pokemon("394", "", "Prinplup", "", "", "", "", "", "z", "z", "008", "z", "z", "z");
pokemonArray[394] = new pokemon("395", "", "Empoleon", "", "", "", "", "", "z", "z", "009", "z", "z", "z");
pokemonArray[395] = new pokemon("396", "✓", "Starly", "All-Star", "PokeRadar", 214, 41, "Shiny/starly.gif", "z", "z", "010", "z", "Coastal: 099", "z");
pokemonArray[396] = new pokemon("397", "✓", "Staravia", "Revalli", "PokeRadar", 217, 41, "Shiny/staravia.gif", "z", "z", "011", "z", "Coastal: 100", "z");
pokemonArray[397] = new pokemon("398", "✓", "Staraptor", "Vah Medoh", "PokeRadar", 218, 42, "Shiny/staraptor.gif", "z", "z", "012", "z", "Coastal: 101", "z");
pokemonArray[398] = new pokemon("399", "✓", "Bidoof", "Daggett", "PokeRadar", 224, 41, "Shiny/bidoof.gif", "z", "z", "013", "z", "Central: 038", "z");
pokemonArray[399] = new pokemon("400", "✓", "Bibarel", "Norbert", "Friend Safari", 221, 1055, "Shiny/bibarel.gif", "z", "z", "014", "z", "Central: 039", "z");
pokemonArray[400] = new pokemon("401", "✓", "Kricketot", "Sienna", "PokeRadar", 209, 41, "Shiny/kricketot.gif", "z", "z", "015", "z", "z", "z");
pokemonArray[401] = new pokemon("402", "✓", "Kricketune", "Delelewooop", "DexNav", 46, 202, "Shiny/kricketune.gif", "z", "z", "016", "z", "z", "z");
pokemonArray[402] = new pokemon("403", "✓", "Shinx", "Kimba", "PokeRadar", 202, 42, "Shiny/shinx.gif", "z", "z", "017", "z", "z", "z");
pokemonArray[403] = new pokemon("404", "✓", "Luxio", "Simba", "PokeRadar", 201, 41, "Shiny/luxio.gif", "z", "z", "018", "z", "z", "z");
pokemonArray[404] = new pokemon("405", "", "Luxray", "", "", "", "", "", "z", "z", "019", "z", "z", "z");
pokemonArray[405] = new pokemon("406", "✓", "Budew", "Bobadew", "PokeRadar", 204, 41, "Shiny/budew.gif", "z", "097", "025", "133", "Central: 071", "z");
pokemonArray[406] = new pokemon("407", "✓", "Roserade", "Poison", "PokeRadar", 206, 43, "Shiny/roserade.gif", "z", "099", "027", "135", "Central: 073", "z");    
pokemonArray[407] = new pokemon("408", "", "Cranidos", "", "", "", "", "", "z", "z", "036", "z", "z", "188");
pokemonArray[408] = new pokemon("409", "", "Rampardos", "", "", "", "", "", "z", "z", "037", "z", "z", "189");
pokemonArray[409] = new pokemon("410", "", "Shieldon", "", "", "", "", "", "z", "z", "038", "z", "z", "190");
pokemonArray[410] = new pokemon("411", "", "Bastiodon", "", "", "", "", "", "z", "z", "039", "z", "z", "191");
pokemonArray[411] = new pokemon("412", "", "Burmy", "", "", "", "", "", "z", "z", "045", "z", "Central: 044", "z");
pokemonArray[412] = new pokemon("413", "", "Wormadam", "", "", "", "", "", "z", "z", "046", "z", "Central: 045", "z");
pokemonArray[413] = new pokemon("414", "", "Mothim", "", "", "", "", "", "z", "z", "047", "z", "Central: 046", "z");
pokemonArray[414] = new pokemon("415", "", "Combee", "", "", "", "", "", "z", "z", "053", "142", "Central: 076", "z");
pokemonArray[415] = new pokemon("416", "✓", "Vespiquen", "Bee Movie", "Friend Safari", 191, 421, "Shiny/vespiquen.gif", "z", "z", "054", "143", "Central: 077", "z");
pokemonArray[416] = new pokemon("417", "", "Pachirisu", "", "", "", "", "", "z", "z", "055", "z", "Coastal: 132", "z");
pokemonArray[417] = new pokemon("418", "", "Buizel", "", "", "", "", "", "z", "z", "056", "149", "Mountain: 058", "z");
pokemonArray[418] = new pokemon("419", "✓", "Floatzel", "Lifeguard", "Hordes", 242, 864, "Shiny/floatzel.gif", "z", "z", "057", "150", "Mountain: 059", "z");
pokemonArray[419] = new pokemon("420", "", "Cherubi", "", "", "", "", "", "z", "z", "058", "z", "z", "z");
pokemonArray[420] = new pokemon("421", "✓", "Cherrim", "Cheren", "DexNav", 104, 158, "Shiny/cherrim.gif", "z", "z", "059", "z", "z", "z");
pokemonArray[421] = new pokemon("422", "", "Shellos", "", "", "", "", "", "z", "z", "060", "z", "z", "260");
pokemonArray[422] = new pokemon("423", "", "Gastrodon", "", "", "", "", "", "z", "z", "061", "z", "z", "261");
pokemonArray[423] = new pokemon("424", "", "Ambipom", "", "", "", "", "", "124", "z", "064", "z", "z", "z");
pokemonArray[424] = new pokemon("425", "✓", "Drifloon", "Free Balloon", "SOS Chain", 229, 704, "Shiny/drifloon.gif", "z", "z", "065", "208", "Coastal: 001", "064");
pokemonArray[425] = new pokemon("426", "", "Drifblim", "", "", "", "", "", "z", "z", "066", "209", "Coastal: 002", "065");
pokemonArray[426] = new pokemon("427", "✓", "Buneary", "Strawbunny", "DexNav", 156, 208, "Shiny/buneary.gif", "z", "z", "067", "080", "z", "z");
pokemonArray[427] = new pokemon("428", "", "Lopunny", "", "", "", "", "", "z", "z", "068", "081", "z", "z");
pokemonArray[428] = new pokemon("429", "", "Mismagius", "", "", "", "", "", "z", "z", "073", "z", "z", "067");
pokemonArray[429] = new pokemon("430", "", "Honchkrow", "", "", "", "", "", "z", "z", "075", "z", "Mountain: 052", "278");
pokemonArray[430] = new pokemon("431", "✓", "Glameow", "Purrple", "DexNav", 96, 75, "Shiny/glameow.gif", "z", "z", "076", "z", "z", "z");
pokemonArray[431] = new pokemon("432", "✓", "Purugly", "Big Bertha", "DexNav", 149, 353, "Shiny/purugly.gif", "z", "z", "077", "z", "z", "z");
pokemonArray[432] = new pokemon("433", "", "Chingling", "", "", "", "", "", "z", "157", "082", "z", "Coastal: 111", "z");
pokemonArray[433] = new pokemon("434", "✓", "Stunky", "Pepé Le Pew", "Hordes", 109, 1086, "Shiny/stunky.gif", "z", "z", "084", "z", "Coastal: 102", "z");
pokemonArray[434] = new pokemon("435", "✓", "Skuntank", "Skunkweef", "Hordes", 213, 212, "Shiny/skuntank.gif", "z", "z", "085", "z", "Coastal: 103", "z");
pokemonArray[435] = new pokemon("436", "✓", "Bronzor", "Bronzer", "DexNav", 130, 8, "Shiny/bronzor.gif", "z", "z", "088", "250", "z", "z");
pokemonArray[436] = new pokemon("437", "✓", "Bronzong", "Isabelle", "Friend Safari", 144, 110, "Shiny/bronzong.gif", "z", "z", "089", "251", "z", "z");
pokemonArray[437] = new pokemon("438", "", "Bonsly", "", "", "", "", "", "z", "z", "092", "z", "Mountain: 129", "030");
pokemonArray[438] = new pokemon("439", "✓", "Mime Jr.", "Krusty", "Hordes", 227, 19, "Shiny/mime_jr.gif", "z", "z", "094", "z", "Coastal: 113", "z");
pokemonArray[439] = new pokemon("440", "✓", "Happiny", "Nurse Joy", "DexNav", 121, 574, "Shiny/happiny.gif", "z", "z", "096", "z", "z", "032");
pokemonArray[440] = new pokemon("441", "✓", "Chatot", "Iago", "DexNav", 163, 382, "Shiny/chatot.gif", "z", "z", "102", "z", "Coastal: 138", "z");
pokemonArray[441] = new pokemon("442", "✓", "Spiritomb", "Betelgeuse", "Friend Safari", 95, 836, "Shiny/spiritomb.gif", "z", "z", "108", "z", "z", "z");
pokemonArray[442] = new pokemon("443", "", "Gible", "", "", "", "", "", "z", "z", "109", "z", "Mountain: 006", "238");
pokemonArray[443] = new pokemon("444", "✓", "Gabite", "Bruce", "Friend Safari", 43, 403, "Shiny/gabite.gif", "z", "z", "110", "z", "Mountain: 007", "239");
pokemonArray[444] = new pokemon("445", "✓", "Garchomp", "Cynthia", "Friend Safari", 103, 796, "Shiny/garchomp.gif", "z", "z", "111", "z", "Mountain: 008", "240");
pokemonArray[445] = new pokemon("446", "✓", "Munchlax", "Munchie", "SOS Chain", 179, 163, "Shiny/munchlax.gif", "z", "z", "112", "z", "Central: 138", "035");
pokemonArray[446] = new pokemon("447", "", "Riolu", "", "", "", "", "", "z", "z", "115", "033", "Central: 062", "279");
pokemonArray[447] = new pokemon("448", "", "Lucario", "", "", "", "", "", "z", "z", "116", "034", "Central: 063", "280");
pokemonArray[448] = new pokemon("449", "", "Hippopotas", "", "", "", "", "", "z", "z", "122", "z", "Coastal: 048", "z");
pokemonArray[449] = new pokemon("450", "", "Hippowdon", "", "", "", "", "", "z", "z", "123", "z", "Coastal: 049", "z");
pokemonArray[450] = new pokemon("451", "✓", "Skorupi", "13th Street", "DexNav", 14, 43, "Shiny/skorupi.gif", "z", "z", "127", "201", "Mountain: 015", "z");
pokemonArray[451] = new pokemon("452", "✓", "Drapion", "Dreadlock", "Hordes", 216, 363, "Shiny/drapion.gif", "z", "z", "128", "202", "Mountain: 016", "z");
pokemonArray[452] = new pokemon("453", "✓", "Croagunk", "CockBlock", "PokeRadar", 115, 40, "Shiny/croagunk.gif", "z", "z", "129", "290", "Central: 125", "z");
pokemonArray[453] = new pokemon("454", "✓", "Toxicroak", "and Knuckles", "Friend Safari", 143, 2095, "Shiny/toxicroak.gif", "z", "z", "130", "291", "Central: 126", "z");
pokemonArray[454] = new pokemon("455", "", "Carnivine", "", "", "", "", "", "z", "z", "131", "289", "Mountain: 029", "z");
pokemonArray[455] = new pokemon("456", "✓", "Finneon", "Espresso", "DexNav", 52, 110, "Shiny/finneon.gif", "z", "z", "134", "z", "z", "108");
pokemonArray[456] = new pokemon("457", "", "Lumineon", "", "", "", "", "", "z", "z", "135", "z", "z", "109");
pokemonArray[457] = new pokemon("458", "", "Mantyke", "", "", "", "", "", "z", "z", "140", "233", "Coastal: 139", "z");
pokemonArray[458] = new pokemon("459", "✓", "Snover", "Thats Enough", "Friend Safari", 70, 377, "Shiny/snover.gif", "z", "z", "142", "z", "Mountain: 088", "z");
pokemonArray[459] = new pokemon("460", "", "Abomasnow", "", "", "", "", "", "z", "z", "143", "z", "Mountain: 089", "z");
pokemonArray[460] = new pokemon("461", "", "Weavile", "", "", "", "", "", "z", "z", "145", "253", "Mountain: 092", "250");
pokemonArray[461] = new pokemon("462", "", "Magnezone", "", "", "", "", "", "z", "086", "180", "050", "Mountain: 071", "049");
pokemonArray[462] = new pokemon("463", "", "Lickilicky", "", "", "", "", "", "181", "z", "162", "285", "Mountain: 135", "z");
pokemonArray[463] = new pokemon("464", "", "Rhyperior", "", "", "", "", "", "z", "178", "188", "z", "Coastal: 052", "z");
pokemonArray[464] = new pokemon("465", "", "Tangrowth", "", "", "", "", "", "183", "z", "182", "218", "z", "z");
pokemonArray[465] = new pokemon("466", "✓", "Electivire", "Big City", "DexNav", 16, 544, "Shiny/electivire.gif", "z", "z", "199", "058", "z", "228");
pokemonArray[466] = new pokemon("467", "", "Magmortar", "", "", "", "", "", "z", "z", "202", "055", "z", "168");
pokemonArray[467] = new pokemon("468", "", "Togekiss", "", "", "", "", "", "z", "z", "175", "z", "z", "z");
pokemonArray[468] = new pokemon("469", "", "Yanmega", "", "", "", "", "", "102", "z", "184", "287", "Coastal: 088", "z");
pokemonArray[469] = new pokemon("470", "✓", "Leafeon", "Extremely", "DexNav", 10, 48, "Shiny/leafeon.gif", "z", "z", "169", "097", "Coastal: 083", "129");
pokemonArray[470] = new pokemon("471", "", "Glaceon", "", "", "", "", "", "z", "z", "170", "098", "Coastal: 084", "130");
pokemonArray[471] = new pokemon("472", "", "Gliscor", "", "", "", "", "", "z", "z", "154", "222", "Mountain: 116", "z");
pokemonArray[472] = new pokemon("473", "", "Mamoswine", "", "", "", "", "", "197", "z", "205", "260", "Mountain: 078", "z");
pokemonArray[473] = new pokemon("474", "✓", "Porygon-Z", "Error 404", "DexNav", 133, 147, "Shiny/porygon-z.gif", "z", "z", "194", "z", "z", "219");
pokemonArray[474] = new pokemon("475", "", "Gallade", "", "", "", "", "", "z", "032", "160", "z", "Central: 067", "z");
pokemonArray[475] = new pokemon("476", "✓", "Probopass", "Nigel", "Hordes", 32, 651, "Shiny/probopass.gif", "z", "062", "156", "165", "Coastal: 094", "199");
pokemonArray[476] = new pokemon("477", "", "Dusknoir", "", "", "", "", "", "z", "155", "191", "z", "z", "z");
pokemonArray[477] = new pokemon("478", "", "Froslass", "", "", "", "", "", "z", "181", "208", "z", "z", "248");
pokemonArray[478] = new pokemon("479", "", "Rotom", "", "", "", "", "", "z", "z", "152", "z", "Mountain: 068", "z");
pokemonArray[479] = new pokemon("480", "", "Uxie", "", "", "", "", "", "z", "z", "146", "z", "z", "z");
pokemonArray[480] = new pokemon("481", "", "Mesprit", "", "", "", "", "", "z", "z", "147", "z", "z", "z");
pokemonArray[481] = new pokemon("482", "", "Azelf", "", "", "", "", "", "z", "z", "148", "z", "z", "z");
pokemonArray[482] = new pokemon("483", "", "Dialga", "", "", "", "", "", "z", "z", "149", "z", "z", "z");
pokemonArray[483] = new pokemon("484", "", "Palkia", "", "", "", "", "", "z", "z", "150", "z", "z", "z");
pokemonArray[484] = new pokemon("485", "", "Heatran", "", "", "", "", "", "z", "z", "z", "z", "z", "z");
pokemonArray[485] = new pokemon("486", "✓", "Regigigas", "Bill?!", "Soft-Reset", 53, 1713, "Shiny/regigigas.gif", "z", "z", "z", "z", "z", "z");
pokemonArray[486] = new pokemon("487", "", "Giratina", "", "", "", "", "", "z", "z", "210", "z", "z", "z");
pokemonArray[487] = new pokemon("488", "✓", "Cresselia", "Blue Moon", "Soft-Reset", 186, 1396, "Shiny/cresselia.gif", "z", "z", "z", "z", "z", "z");
pokemonArray[488] = new pokemon("489", "", "Phione", "", "", "", "", "", "z", "z", "z", "z", "z", "z");
pokemonArray[489] = new pokemon("490", "", "Manaphy", "", "", "", "", "", "z", "z", "151", "z", "z", "z");
pokemonArray[490] = new pokemon("491", "", "Darkrai", "", "", "", "", "", "z", "z", "z", "z", "z", "z");
pokemonArray[491] = new pokemon("492", "", "Shaymin", "", "", "", "", "", "z", "z", "z", "z", "z", "z");
pokemonArray[492] = new pokemon("493", "", "Arceus", "", "", "", "", "", "z", "z", "z", "z", "z", "z");
pokemonArray[493] = new pokemon("494", "", "Victini", "", "", "", "", "", "z", "z", "z", "000", "z", "z");
pokemonArray[494] = new pokemon("495", "✓", "Snivy", "Excalibur", "Breeding", 2, 296, "Shiny/snivy.gif", "z", "z", "z", "001", "z", "z");
pokemonArray[495] = new pokemon("496", "", "Servine", "", "", "", "", "", "z", "z", "z", "002", "z", "z");
pokemonArray[496] = new pokemon("497", "", "Serperior", "", "", "", "", "", "z", "z", "z", "003", "z", "z");
pokemonArray[497] = new pokemon("498", "", "Tepig", "", "", "", "", "", "z", "z", "z", "004", "z", "z");
pokemonArray[498] = new pokemon("499", "", "Pignite", "", "", "", "", "", "z", "z", "z", "005", "z", "z");
pokemonArray[499] = new pokemon("500", "", "Emboar", "", "", "", "", "", "z", "z", "z", "006", "z", "z");
pokemonArray[500] = new pokemon("501", "", "Oshawott", "", "", "", "", "", "z", "z", "z", "007", "z", "z");
pokemonArray[501] = new pokemon("502", "", "Dewott", "", "", "", "", "", "z", "z", "z", "008", "z", "z");
pokemonArray[502] = new pokemon("503", "", "Samurott", "", "", "", "", "", "z", "z", "z", "009", "z", "z");
pokemonArray[503] = new pokemon("504", "", "Patrat", "", "", "", "", "", "z", "z", "z", "010", "Mountain: 046", "z");
pokemonArray[504] = new pokemon("505", "", "Watchog", "", "", "", "", "", "z", "z", "z", "011", "Mountain: 047", "z");
pokemonArray[505] = new pokemon("506", "", "Lillipup", "", "", "", "", "", "z", "z", "z", "022", "z", "120");
pokemonArray[506] = new pokemon("507", "", "Herdier", "", "", "", "", "", "z", "z", "z", "023", "z", "121");
pokemonArray[507] = new pokemon("508", "", "Stoutland", "", "", "", "", "", "z", "z", "z", "024", "z", "122");
pokemonArray[508] = new pokemon("509", "", "Purrloin", "", "", "", "", "", "z", "z", "z", "012", "Mountain: 042", "z");
pokemonArray[509] = new pokemon("510", "", "Liepard", "", "", "", "", "", "z", "z", "z", "013", "Mountain: 043", "z");
pokemonArray[510] = new pokemon("511", "", "Pansage", "", "", "", "", "", "z", "z", "z", "037", "Central: 029", "z");
pokemonArray[511] = new pokemon("512", "", "Simisage", "", "", "", "", "", "z", "z", "z", "038", "Central: 030", "z");
pokemonArray[512] = new pokemon("513", "", "Pansear", "", "", "", "", "", "z", "z", "z", "039", "Central: 031", "z");
pokemonArray[513] = new pokemon("514", "", "Simisear", "", "", "", "", "", "z", "z", "z", "040", "Central: 032", "z");
pokemonArray[514] = new pokemon("515", "✓", "Panpour", "Muffintop", "Friend Safari", 232, 618, "Shiny/panpour.gif", "z", "z", "z", "041", "Central: 033", "z");
pokemonArray[515] = new pokemon("516", "", "Simipour", "", "", "", "", "", "z", "z", "z", "042", "Central: 034", "z");
pokemonArray[516] = new pokemon("517", "", "Munna", "", "", "", "", "", "z", "z", "z", "086", "z", "z");
pokemonArray[517] = new pokemon("518", "", "Musharna", "", "", "", "", "", "z", "z", "z", "087", "z", "z");
pokemonArray[518] = new pokemon("519", "", "Pidove", "", "", "", "", "", "z", "z", "z", "014", "z", "z");
pokemonArray[519] = new pokemon("520", "✓", "Tranquill", "Kiwi", "Friend Safari", 246, 5, "Shiny/tranquill.gif", "z", "z", "z", "015", "z", "z");
pokemonArray[520] = new pokemon("521", "", "Unfezant", "", "", "", "", "", "z", "z", "z", "016", "z", "z");
pokemonArray[521] = new pokemon("522", "", "Blitzle", "", "", "", "", "", "z", "z", "z", "147", "z", "z");
pokemonArray[522] = new pokemon("523", "", "Zebstrika", "", "", "", "", "", "z", "z", "z", "148", "z", "z");
pokemonArray[523] = new pokemon("524", "✓", "Roggenrola", "Elvis", "Hordes", 98, 123, "Shiny/roggenrola.gif", "z", "z", "z", "068", "Coastal: 120", "098");
pokemonArray[524] = new pokemon("525", "", "Boldore", "", "", "", "", "", "z", "z", "z", "069", "Coastal: 121", "099");
pokemonArray[525] = new pokemon("526", "", "Gigalith", "", "", "", "", "", "z", "z", "z", "070", "Coastal: 122", "100");
pokemonArray[526] = new pokemon("527", "", "Woobat", "", "", "", "", "", "z", "z", "z", "066", "Coastal: 055", "z");
pokemonArray[527] = new pokemon("528", "", "Swoobat", "", "", "", "", "", "z", "z", "z", "067", "Coastal: 056", "z");
pokemonArray[528] = new pokemon("529", "", "Drilbur", "", "", "", "", "", "z", "z", "z", "076", "z", "z");
pokemonArray[529] = new pokemon("530", "✓", "Excadrill", "Kamina", "Friend Safari", 76, 353, "Shiny/excadrill.gif", "z", "z", "z", "077", "z", "z");
pokemonArray[530] = new pokemon("531", "✓", "Audino", "Idunno", "DexNav", 57, 328, "Shiny/audino.gif", "z", "z", "z", "036", "Central: 123", "z");
pokemonArray[531] = new pokemon("532", "", "Timburr", "", "", "", "", "", "z", "z", "z", "073", "Mountain: 093", "z");
pokemonArray[532] = new pokemon("533", "", "Gurdurr", "", "", "", "", "", "z", "z", "z", "074", "Mountain: 094", "z");
pokemonArray[533] = new pokemon("534", "", "Conkeldurr", "", "", "", "", "", "z", "z", "z", "075", "Mountain: 095", "z");
pokemonArray[534] = new pokemon("535", "", "Tympole", "", "", "", "", "", "z", "z", "z", "228", "z", "z");
pokemonArray[535] = new pokemon("536", "✓", "Palpitoad", "Palpotato", "Friend Safari", 113, 461, "Shiny/palpitoad.gif", "z", "z", "z", "229", "z", "z");
pokemonArray[536] = new pokemon("537", "✓", "Seismitoad", "Narutoad", "Friend Safari", 200, 295, "Shiny/seismitoad.gif", "z", "z", "z", "230", "z", "z");
pokemonArray[537] = new pokemon("538", "", "Throh", "", "", "", "", "", "z", "z", "z", "267", "Coastal: 097", "z");
pokemonArray[538] = new pokemon("539", "✓", "Sawk", "Shoo", "Friend Safari", 198, 591, "Shiny/sawk.gif", "z", "z", "z", "268", "Coastal: 098", "z");
pokemonArray[539] = new pokemon("540", "", "Sewaddle", "", "", "", "", "", "z", "z", "z", "017", "z", "z");
pokemonArray[540] = new pokemon("541", "✓", "Swadloon", "Sacred", "DexNav", 20, 200, "Shiny/swadloon.gif", "z", "z", "z", "018", "z", "z");
pokemonArray[541] = new pokemon("542", "", "Leavanny", "", "", "", "", "", "z", "z", "z", "019", "z", "z");
pokemonArray[542] = new pokemon("543", "", "Venipede", "", "", "", "", "", "z", "z", "z", "043", "Central: 120", "z");
pokemonArray[543] = new pokemon("544", "✓", "Whirlipede", "Spindash", "Friend Safari", 212, 1993, "Shiny/whirlipede.gif", "z", "z", "z", "044", "Central: 121", "z");
pokemonArray[544] = new pokemon("545", "", "Scolipede", "", "", "", "", "", "z", "z", "z", "045", "Central: 122", "z");
pokemonArray[545] = new pokemon("546", "", "Cottonee", "", "", "", "", "", "z", "z", "z", "082", "z", "087");
pokemonArray[546] = new pokemon("547", "", "Whimsicott", "", "", "", "", "", "z", "z", "z", "083", "z", "088");
pokemonArray[547] = new pokemon("548", "", "Petilil", "", "", "", "", "", "z", "z", "z", "084", "z", "085");
pokemonArray[548] = new pokemon("549", "", "Lilligant", "", "", "", "", "", "z", "z", "z", "085", "z", "086");
pokemonArray[549] = new pokemon("550", "", "Basculin", "", "", "", "", "", "z", "z", "z", "104", "Mountain: 060", "z");
pokemonArray[550] = new pokemon("551", "✓", "Sandile", "Sangator", "Friend Safari", 238, 240, "Shiny/sandile.gif", "z", "z", "z", "099", "Coastal: 043", "232");
pokemonArray[551] = new pokemon("552", "", "Krokorok", "", "", "", "", "", "z", "z", "z", "100", "Coastal: 044", "233");
pokemonArray[552] = new pokemon("553", "", "Krookodile", "", "", "", "", "", "z", "z", "z", "101", "Coastal: 045", "234");
pokemonArray[553] = new pokemon("554", "", "Darumaka", "", "", "", "", "", "z", "z", "z", "102", "z", "z");
pokemonArray[554] = new pokemon("555", "✓", "Darmanitan", "Charlotte", "DexNav", 81, 174, "Shiny/darmanitan.gif", "z", "z", "z", "103", "z", "z");
pokemonArray[555] = new pokemon("556", "✓", "Maractus", "EvilTurnip", "DexNav", 71, 257, "Shiny/maractus.gif", "z", "z", "z", "119", "z", "z");
pokemonArray[556] = new pokemon("557", "✓", "Dwebble", "Doobie", "Friend Safari", 59, 1159, "Shiny/dwebble.gif", "z", "z", "z", "115", "Coastal: 023", "z");
pokemonArray[557] = new pokemon("558", "✓", "Crustle", "Lasaga", "Friend Safari", 184, 281, "Shiny/crustle.gif", "z", "z", "z", "116", "Coastal: 024", "z");
pokemonArray[558] = new pokemon("559", "✓", "Scraggy", "Turnip", "DexNav", 6, 992, "Shiny/scraggy.gif", "z", "z", "z", "117", "Central: 100", "z");
pokemonArray[559] = new pokemon("560", "✓", "Scrafty", "Kraft", "Hordes", 89, 62, "Shiny/scrafty.gif", "z", "z", "z", "118", "Central: 101", "z");
pokemonArray[560] = new pokemon("561", "✓", "Sigilyph", "Floatempole", "Friend Safari", 73, 191, "Shiny/sigilyph.gif", "z", "z", "z", "120", "Coastal: 090", "z");
pokemonArray[561] = new pokemon("562", "", "Yamask", "", "", "", "", "", "z", "z", "z", "124", "z", "z");
pokemonArray[562] = new pokemon("563", "", "Cofagrigus", "", "", "", "", "", "z", "z", "z", "125", "z", "z");
pokemonArray[563] = new pokemon("564", "", "Tirtouga", "", "", "", "", "", "z", "z", "z", "126", "z", "194");
pokemonArray[564] = new pokemon("565", "", "Carracosta", "", "", "", "", "", "z", "z", "z", "127", "z", "195");
pokemonArray[565] = new pokemon("566", "", "Archen", "", "", "", "", "", "z", "z", "z", "128", "z", "192");
pokemonArray[566] = new pokemon("567", "", "Archeops", "", "", "", "", "", "z", "z", "z", "129", "z", "193");
pokemonArray[567] = new pokemon("568", "✓", "Trubbish", "me irl", "DexNav", 60, 452, "Shiny/trubbish.gif", "z", "z", "z", "105", "Mountain: 074", "206");
pokemonArray[568] = new pokemon("569", "", "Garbodor", "", "", "", "", "", "z", "z", "z", "106", "Mountain: 075", "207");
pokemonArray[569] = new pokemon("570", "✓", "Zorua", "Mirage", "DexNav", 114, 16, "Shiny/zorua.gif", "z", "z", "z", "151", "Mountain: 124", "z");
pokemonArray[570] = new pokemon("571", "", "Zoroark", "", "", "", "", "", "z", "z", "z", "152", "Mountain: 125", "z");
pokemonArray[571] = new pokemon("572", "", "Minccino", "", "", "", "", "", "z", "z", "z", "107", "z", "z");
pokemonArray[572] = new pokemon("573", "", "Cinccino", "", "", "", "", "", "z", "z", "z", "108", "z", "z");
pokemonArray[573] = new pokemon("574", "", "Gothita", "", "", "", "", "", "z", "z", "z", "136", "Mountain: 126", "z");
pokemonArray[574] = new pokemon("575", "", "Gothorita", "", "", "", "", "", "z", "z", "z", "137", "Mountain: 127", "z");
pokemonArray[575] = new pokemon("576", "", "Gothitelle", "", "", "", "", "", "z", "z", "z", "138", "Mountain: 128", "z");
pokemonArray[576] = new pokemon("577", "", "Solosis", "", "", "", "", "", "z", "z", "z", "139", "Coastal: 115", "z");
pokemonArray[577] = new pokemon("578", "", "Duosion", "", "", "", "", "", "z", "z", "z", "140", "Coastal: 116", "z");
pokemonArray[578] = new pokemon("579", "", "Reuniclus", "", "", "", "", "", "z", "z", "z", "141", "Coastal: 117", "z");
pokemonArray[579] = new pokemon("580", "", "Ducklett", "", "", "", "", "", "z", "z", "z", "153", "Central: 127", "z");
pokemonArray[580] = new pokemon("581", "", "Swanna", "", "", "", "", "", "z", "z", "z", "154", "Central: 128", "z");
pokemonArray[581] = new pokemon("582", "✓", "Vanillite", "Ichigo", "Hordes", 127, 110, "Shiny/vanillite.gif", "z", "z", "z", "255", "Mountain: 085", "255");
pokemonArray[582] = new pokemon("583", "", "Vanillish", "", "", "", "", "", "z", "z", "z", "256", "Mountain: 086", "256");
pokemonArray[583] = new pokemon("584", "", "Vanilluxe", "", "", "", "", "", "z", "z", "z", "257", "Mountain: 087", "257");
pokemonArray[584] = new pokemon("585", "", "Deerling", "", "", "", "", "", "z", "z", "z", "159", "z", "z");
pokemonArray[585] = new pokemon("586", "✓", "Sawsbuck", "Buckette", "Friend Safari", 207, 398, "Shiny/sawsbuck.gif", "z", "z", "z", "160", "z", "z");
pokemonArray[586] = new pokemon("587", "✓", "Emolga", "Elesa", "Friend Safari", 128, 170, "Shiny/emolga.gif", "z", "z", "z", "144", "Coastal: 086", "274");
pokemonArray[587] = new pokemon("588", "", "Karrablast", "", "", "", "", "", "z", "z", "z", "155", "Mountain: 022", "z");
pokemonArray[588] = new pokemon("589", "", "Escavalier", "", "", "", "", "", "z", "z", "z", "156", "Mountain: 023", "z");
pokemonArray[589] = new pokemon("590", "✓", "Foongus", "Shroob", "Hordes", 78, 53, "Shiny/foongus.gif", "z", "z", "z", "161", "Mountain: 053", "z");
pokemonArray[590] = new pokemon("591", "", "Amoonguss", "", "", "", "", "", "z", "z", "z", "162", "Mountain: 054", "z");
pokemonArray[591] = new pokemon("592", "", "Frillish", "", "", "", "", "", "z", "z", "z", "180", "z", "z");
pokemonArray[592] = new pokemon("593", "", "Jellicent", "", "", "", "", "", "z", "z", "z", "181", "z", "z");
pokemonArray[593] = new pokemon("594", "", "Alomomola", "", "", "", "", "", "z", "z", "z", "182", "Coastal: 149", "157");
pokemonArray[594] = new pokemon("595", "✓", "Joltik", "Smol Spooder", "DexNav", 36, 533, "Shiny/joltik.gif", "z", "z", "z", "173", "z", "z");
pokemonArray[595] = new pokemon("596", "", "Galvantula", "", "", "", "", "", "z", "z", "z", "174", "z", "z");
pokemonArray[596] = new pokemon("597", "✓", "Ferroseed", "Burrito", "Friend Safari", 101, 82, "Shiny/ferroseed.gif", "z", "z", "z", "175", "Coastal: 069", "z");
pokemonArray[597] = new pokemon("598", "", "Ferrothorn", "", "", "", "", "", "z", "z", "z", "176", "Coastal: 070", "z");
pokemonArray[598] = new pokemon("599", "✓", "Klink", "Link", "DexNav", 141, 249, "Shiny/klink.gif", "z", "z", "z", "130", "z", "z");
pokemonArray[599] = new pokemon("600", "", "Klang", "", "", "", "", "", "z", "z", "z", "131", "z", "z");
pokemonArray[600] = new pokemon("601", "", "Klinklang", "", "", "", "", "", "z", "z", "z", "132", "z", "z");
pokemonArray[601] = new pokemon("602", "✓", "Tynamo", "Man Pollen", "DexNav", 69, 252, "Shiny/tynamo.gif", "z", "z", "z", "177", "z", "z");
pokemonArray[602] = new pokemon("603", "✓", "Eelektrik", "Boogaloo", "DexNav", 138, 171, "Shiny/eelektrik.gif", "z", "z", "z", "178", "z", "z");
pokemonArray[603] = new pokemon("604", "✓", "Eelektross", "Albatross", "DexNav", 139, 251, "Shiny/eelektross.gif", "z", "z", "z", "179", "z", "z");
pokemonArray[604] = new pokemon("605", "", "Elgyem", "", "", "", "", "", "z", "z", "z", "188", "z", "z");
pokemonArray[605] = new pokemon("606", "", "Beheeyem", "", "", "", "", "", "z", "z", "z", "189", "z", "z");
pokemonArray[606] = new pokemon("607", "", "Litwick", "", "", "", "", "", "z", "z", "z", "190", "Mountain: 065", "z");
pokemonArray[607] = new pokemon("608", "✓", "Lampent", "Cursed", "Friend Safari", 44, 666, "Shiny/lampent.gif", "z", "z", "z", "191", "Mountain: 066", "z");
pokemonArray[608] = new pokemon("609", "✓", "Chandelure", "Scarlet", "Friend Safari", 251, 415, "Shiny/chandelure.gif", "z", "z", "z", "192", "Mountain: 067", "z");
pokemonArray[609] = new pokemon("610", "", "Axew", "", "", "", "", "", "z", "z", "z", "183", "Central: 148", "z");
pokemonArray[610] = new pokemon("611", "✓", "Fraxure", "Frasier", "Friend Safari", 112, 591, "Shiny/fraxure.gif", "z", "z", "z", "184", "Central: 149", "z");
pokemonArray[611] = new pokemon("611", "", "Haxorus", "", "", "", "", "", "z", "z", "z", "185", "Central: 150", "z");
pokemonArray[612] = new pokemon("612", "", "Cubchoo", "", "", "", "", "", "z", "z", "z", "195", "Mountain: 081", "z");
pokemonArray[613] = new pokemon("613", "", "Beartic", "", "", "", "", "", "z", "z", "z", "196", "Mountain: 082", "z");
pokemonArray[614] = new pokemon("614", "", "Cryogonal", "", "", "", "", "", "z", "z", "z", "197", "Mountain: 111", "z");
pokemonArray[615] = new pokemon("615", "", "Shelmet", "", "", "", "", "", "z", "z", "z", "157", "Mountain: 024", "z");
pokemonArray[616] = new pokemon("616", "", "Accelgor", "", "", "", "", "", "z", "z", "z", "158", "Mountain: 025", "z");
pokemonArray[617] = new pokemon("618", "✓", "Stunfisk", "Tully's", "Friend Safari", 67, 376, "Shiny/stunfisk.gif", "z", "z", "z", "231", "Mountain: 039", "z");
pokemonArray[618] = new pokemon("619", "✓", "Mienfoo", "Jackie Chan", "Friend Safari", 228, 1048, "Shiny/mienfoo.gif", "z", "z", "z", "219", "Coastal: 003", "z");
pokemonArray[619] = new pokemon("620", "", "Mienshao", "", "", "", "", "", "z", "z", "z", "220", "Coastal: 004", "z");
pokemonArray[620] = new pokemon("621", "", "Druddigon", "", "", "", "", "", "z", "z", "z", "270", "Mountain: 141", "z");
pokemonArray[621] = new pokemon("622", "", "Golett", "", "", "", "", "", "z", "z", "z", "271", "Coastal: 091", "z");
pokemonArray[622] = new pokemon("623", "", "Golurk", "", "", "", "", "", "z", "z", "z", "272", "Coastal: 092", "z");
pokemonArray[623] = new pokemon("624", "✓", "Pawniard", "SoFlo", "Friend Safari", 102, 262, "Shiny/pawniard.gif", "z", "z", "z", "223", "Mountain: 048", "z");
pokemonArray[624] = new pokemon("625", "", "Bisharp", "", "", "", "", "", "z", "z", "z", "224", "Mountain: 049", "z");
pokemonArray[625] = new pokemon("626", "✓", "Bouffalant", "Wings", "DexNav", 106, 310, "Shiny/bouffalant.gif", "z", "z", "z", "269", "z", "z");
pokemonArray[626] = new pokemon("627", "✓", "Rufflet", "Rowlet", "Friend Safari", 24, 1057, "Shiny/rufflet.gif", "z", "z", "z", "109", "z", "075");
pokemonArray[627] = new pokemon("628", "", "Braviary", "", "", "", "", "", "z", "z", "z", "110", "z", "076");
pokemonArray[628] = new pokemon("629", "", "Vullaby", "", "", "", "", "", "z", "z", "z", "111", "z", "077");
pokemonArray[629] = new pokemon("630", "", "Mandibuzz", "", "", "", "", "", "z", "z", "z", "112", "z", "078");
pokemonArray[630] = new pokemon("631", "", "Heatmor", "", "", "", "", "", "z", "z", "z", "193", "Mountain: 105", "z");
pokemonArray[631] = new pokemon("632", "✓", "Durant", "Kevin", "Hordes", 92, 140, "Shiny/durant.gif", "z", "z", "z", "194", "Mountain: 106", "z");
pokemonArray[632] = new pokemon("633", "", "Deino", "", "", "", "", "", "z", "z", "z", "273", "Mountain: 142", "z");
pokemonArray[633] = new pokemon("634", "", "Zweilous", "", "", "", "", "", "z", "z", "z", "274", "Mountain: 143", "z");
pokemonArray[634] = new pokemon("635", "", "Hydreigon", "", "", "", "", "", "z", "z", "z", "275", "Mountain: 144", "z");
pokemonArray[635] = new pokemon("636", "", "Larvesta", "", "", "", "", "", "z", "z", "z", "171", "z", "z");
pokemonArray[636] = new pokemon("637", "", "Volcarona", "", "", "", "", "", "z", "z", "z", "172", "z", "z");
pokemonArray[637] = new pokemon("638", "", "Cobalion", "", "", "", "", "", "z", "z", "z", "225", "z", "z");
pokemonArray[638] = new pokemon("639", "", "Terrakion", "", "", "", "", "", "z", "z", "z", "226", "z", "z");
pokemonArray[639] = new pokemon("640", "", "Virizion", "", "", "", "", "", "z", "z", "z", "227", "z", "z");
pokemonArray[640] = new pokemon("641", "", "Tornadus", "", "", "", "", "", "z", "z", "z", "198", "z", "z");
pokemonArray[641] = new pokemon("642", "", "Thundurus", "", "", "", "", "", "z", "z", "z", "199", "z", "z");
pokemonArray[642] = new pokemon("643", "✓", "Reshiram", "Jesus", "Soft-Reset", 236, 1661, "Shiny/reshiram.gif", "z", "z", "z", "295", "z", "z");
pokemonArray[643] = new pokemon("644", "✓", "Zekrom", "Usaine Bolt", "Soft-Reset", 142, 3043, "Shiny/zekrom.gif", "z", "z", "z", "296", "z", "z");
pokemonArray[644] = new pokemon("645", "", "Landorus", "", "", "", "", "", "z", "z", "z", "200", "z", "z");
pokemonArray[645] = new pokemon("646", "", "Kyurem", "", "", "", "", "", "z", "z", "z", "297", "z", "z");
pokemonArray[646] = new pokemon("647", "", "Keldeo", "", "", "", "", "", "z", "z", "z", "298", "z", "z");
pokemonArray[647] = new pokemon("648", "", "Meloetta", "", "", "", "", "", "z", "z", "z", "299", "z", "z");
pokemonArray[648] = new pokemon("649", "", "Genesect", "", "", "", "", "", "z", "z", "z", "300", "z", "z");
pokemonArray[649] = new pokemon("650", "", "Chespin", "", "", "", "", "", "z", "z", "z", "z", "Central: 001", "z");
pokemonArray[650] = new pokemon("651", "✓", "Quilladin", "Quincy", "Friend Safari", 244, 265, "Shiny/quilladin.gif", "z", "z", "z", "z", "Central: 002", "z");
pokemonArray[651] = new pokemon("652", "", "Chesnaught", "", "", "", "", "", "z", "z", "z", "z", "Central: 003", "z");
pokemonArray[652] = new pokemon("653", "", "Fennekin", "", "", "", "", "", "z", "z", "z", "z", "Central: 004", "z");
pokemonArray[653] = new pokemon("654", "✓", "Braixen", "Brexit", "Friend Safari", 54, 32, "Shiny/braixen.gif", "z", "z", "z", "z", "Central: 005", "z");
pokemonArray[654] = new pokemon("655", "", "Delphox", "", "", "", "", "", "z", "z", "z", "z", "Central: 006", "z");
pokemonArray[655] = new pokemon("656", "", "Froakie", "", "", "", "", "", "z", "z", "z", "z", "Central: 007", "z");
pokemonArray[656] = new pokemon("657", "", "Frogadier", "", "", "", "", "", "z", "z", "z", "z", "Central: 008", "z");
pokemonArray[657] = new pokemon("658", "", "Greninja", "", "", "", "", "", "z", "z", "z", "z", "Central: 009", "z");
pokemonArray[658] = new pokemon("659", "", "Bunnelby", "", "", "", "", "", "z", "z", "z", "z", "Central: 010", "z");
pokemonArray[659] = new pokemon("660", "✓", "Diggersby", "Thugs Bunny", "Friend Safari", 188, 108, "Shiny/diggersby.gif", "z", "z", "z", "z", "Central: 011", "z");
pokemonArray[660] = new pokemon("661", "", "Fletchling", "", "", "", "", "", "z", "z", "z", "z", "Central: 014", "158");
pokemonArray[661] = new pokemon("662", "", "Fletchinder", "", "", "", "", "", "z", "z", "z", "z", "Central: 015", "159");
pokemonArray[662] = new pokemon("663", "", "Talonflame", "", "", "", "", "", "z", "z", "z", "z", "Central: 016", "160");
pokemonArray[663] = new pokemon("664", "✓", "Scatterbug", "Albino", "PokeRadar", 118, 41, "Shiny/scatterbug.gif", "z", "z", "z", "z", "Central: 020", "z");
pokemonArray[664] = new pokemon("665", "", "Spewpa", "", "", "", "", "", "z", "z", "z", "z", "Central: 021", "z");
pokemonArray[665] = new pokemon("666", "✓", "Vivillon", "Vivian", "Friend Safari", 215, 1082, "Shiny/vivillon.gif", "z", "z", "z", "z", "Central: 022", "z");
pokemonArray[666] = new pokemon("667", "", "Litleo", "", "", "", "", "", "z", "z", "z", "z", "Central: 057", "z");
pokemonArray[667] = new pokemon("668", "✓", "Pyroar", "Nala", "Friend Safari", 240, 405, "Shiny/pyroar-f.gif", "z", "z", "z", "z", "Central: 058", "z");
pokemonArray[668] = new pokemon("669", "", "Flabébé", "", "", "", "", "", "z", "z", "z", "z", "Central: 068", "z");
pokemonArray[669] = new pokemon("670", "", "Floette", "", "", "", "", "", "z", "z", "z", "z", "Central: 069", "z");
pokemonArray[670] = new pokemon("671", "", "Florges", "", "", "", "", "", "z", "z", "z", "z", "Central: 070", "z");
pokemonArray[671] = new pokemon("672", "", "Skiddo", "", "", "", "", "", "z", "z", "z", "z", "Central: 089", "z");
pokemonArray[672] = new pokemon("673", "", "Gogoat", "", "", "", "", "", "z", "z", "z", "z", "Central: 090", "z");
pokemonArray[673] = new pokemon("674", "", "Pancham", "", "", "", "", "", "z", "z", "z", "z", "Central: 091", "220");
pokemonArray[674] = new pokemon("675", "", "Pangoro", "", "", "", "", "", "z", "z", "z", "z", "Central: 092", "221");
pokemonArray[675] = new pokemon("676", "", "Furfrou", "", "", "", "", "", "z", "z", "z", "z", "Central: 093", "z");
pokemonArray[676] = new pokemon("677", "✓", "Espurr", "Mob", "Friend Safari", 241, 1497, "Shiny/espurr.gif", "z", "z", "z", "z", "Central: 114", "z");
pokemonArray[677] = new pokemon("678", "", "Meowstic", "", "", "", "", "", "z", "z", "z", "z", "Central: 115", "z");
pokemonArray[678] = new pokemon("679", "", "Honedge", "", "", "", "", "", "z", "z", "z", "z", "Central: 117", "z");
pokemonArray[679] = new pokemon("680", "", "Doublade", "", "", "", "", "", "z", "z", "z", "z", "Central: 118", "z");
pokemonArray[680] = new pokemon("681", "", "Aegislash", "", "", "", "", "", "z", "z", "z", "z", "Central: 119", "z");
pokemonArray[681] = new pokemon("682", "", "Spritzee", "", "", "", "", "", "z", "z", "z", "z", "Central: 129", "z");
pokemonArray[682] = new pokemon("683", "", "Aromatisse", "", "", "", "", "", "z", "z", "z", "z", "Central: 130", "z");
pokemonArray[683] = new pokemon("684", "", "Swirlix", "", "", "", "", "", "z", "z", "z", "z", "Central: 131", "z");
pokemonArray[684] = new pokemon("685", "", "Slurpuff", "", "", "", "", "", "z", "z", "z", "z", "Central: 132", "z");
pokemonArray[685] = new pokemon("686", "", "Inkay", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 010", "z");
pokemonArray[686] = new pokemon("687", "", "Malamar", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 011", "z");
pokemonArray[687] = new pokemon("688", "", "Binacle", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 021", "z");
pokemonArray[688] = new pokemon("689", "", "Barbaracle", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 022", "z");
pokemonArray[689] = new pokemon("690", "✓", "Skrelp", "Zoidberg", "Breeding", 1, 2, "Shiny/skrelp.gif", "z", "z", "z", "z", "Coastal: 030", "z");
pokemonArray[690] = new pokemon("691", "", "Dragalge", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 031", "z");
pokemonArray[691] = new pokemon("692", "", "Clauncher", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 032", "z");
pokemonArray[692] = new pokemon("693", "", "Clawitzer", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 033", "z");
pokemonArray[693] = new pokemon("694", "✓", "Helioptile", "Sunburn", "Friend Safari", 82, 126, "Shiny/helioptile.gif", "z", "z", "z", "z", "Coastal: 046", "z");
pokemonArray[694] = new pokemon("695", "✓", "Heliolisk", "Bernie", "Friend Safari", 83, 65, "Shiny/heliolisk.gif", "z", "z", "z", "z", "Coastal: 047", "z");
pokemonArray[695] = new pokemon("696", "", "Tyrunt", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 064", "z");
pokemonArray[696] = new pokemon("697", "", "Tyrantrum", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 065", "z");
pokemonArray[697] = new pokemon("698", "", "Amaura", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 066", "z");
pokemonArray[698] = new pokemon("699", "", "Aurorus", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 067", "z");
pokemonArray[699] = new pokemon("700", "✓", "Sylveon", "Cosmo", "DexNav", 13, 377, "Shiny/sylveon.gif", "z", "z", "z", "z", "Coastal: 085", "131");
pokemonArray[700] = new pokemon("701", "✓", "Hawlucha", "TinyWrestler", "Friend Safari", 185, 144, "Shiny/hawlucha.gif", "z", "z", "z", "z", "Coastal: 089", "z");
pokemonArray[701] = new pokemon("702", "", "Dedenne", "", "", "", "", "", "z", "z", "z", "z", "Coastal: 110", "z");
pokemonArray[702] = new pokemon("703", "✓", "Carbink", "Diancie?", "SOS Chain", 182, 250, "Shiny/carbink.gif", "z", "z", "z", "z", "Coastal: 124", "101");
pokemonArray[703] = new pokemon("704", "", "Goomy", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 019", "178");
pokemonArray[704] = new pokemon("705", "", "Sliggoo", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 020", "179");
pokemonArray[705] = new pokemon("706", "", "Goodra", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 021", "180");
pokemonArray[706] = new pokemon("707", "✓", "Klefki", "Boo-Boo Keys", "Friend Safari", 226, 220, "Shiny/klefki.gif", "z", "z", "z", "z", "Mountain: 050", "241");
pokemonArray[707] = new pokemon("708", "", "Phantump", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 061", "196");
pokemonArray[708] = new pokemon("709", "", "Trevenant", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 062", "197");
pokemonArray[709] = new pokemon("710", "", "Pumpkaboo", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 063", "z");
pokemonArray[710] = new pokemon("711", "", "Gourgeist", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 064", "z");
pokemonArray[711] = new pokemon("712", "✓", "Bergmite", "Yellow Snow", "Friend Safari", 111, 9, "Shiny/bergmite.gif", "z", "z", "z", "z", "Mountain: 079", "z");
pokemonArray[712] = new pokemon("713", "✓", "Avalugg", "Coffee Table", "Friend Safari", 192, 367, "Shiny/avalugg.gif", "z", "z", "z", "z", "Mountain: 080", "z");
pokemonArray[713] = new pokemon("714", "✓", "Noibat", "Laylee", "Friend Safari", 237, 362, "Shiny/noibat.gif", "z", "z", "z", "z", "Mountain: 113", "z");
pokemonArray[714] = new pokemon("715", "", "Noivern", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 114", "z");
pokemonArray[715] = new pokemon("716", "", "Xerneas", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 148", "z");
pokemonArray[716] = new pokemon("717", "", "Yveltal", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 149", "z");
pokemonArray[717] = new pokemon("718", "", "Zygarde", "", "", "", "", "", "z", "z", "z", "z", "Mountain: 150", "205");
pokemonArray[718] = new pokemon("719", "", "Diancie", "", "", "", "", "", "z", "z", "z", "z", "Central: 151", "z");
pokemonArray[719] = new pokemon("720", "", "Hoopa", "", "", "", "", "", "z", "z", "z", "z", "Central: 152", "z");
pokemonArray[720] = new pokemon("721", "", "Volcanion", "", "", "", "", "", "z", "z", "z", "z", "Central: 153", "z");
pokemonArray[721] = new pokemon("722", "✓", "Rowlet", "SPHERICAL", "Breeding", 168, 226, "Shiny/rowlet.gif", "z", "z", "z", "z", "z", "001");
pokemonArray[722] = new pokemon("723", "", "Dartrix", "", "", "", "", "", "z", "z", "z", "z", "z", "002");
pokemonArray[723] = new pokemon("724", "", "Decidueye", "", "", "", "", "", "z", "z", "z", "z", "z", "003");
pokemonArray[724] = new pokemon("725", "✓", "Litten", "ChairmanMeow", "Breeding", 171, 202, "Shiny/litten.gif", "z", "z", "z", "z", "z", "004");
pokemonArray[725] = new pokemon("726", "", "Torracat", "", "", "", "", "", "z", "z", "z", "z", "z", "005");
pokemonArray[726] = new pokemon("727", "", "Incineroar", "", "", "", "", "", "z", "z", "z", "z", "z", "006");
pokemonArray[727] = new pokemon("728", "✓", "Popplio", "Razzmatazz", "Breeding", 176, 364, "Shiny/popplio.gif", "z", "z", "z", "z", "z", "007");
pokemonArray[728] = new pokemon("729", "", "Brionne", "", "", "", "", "", "z", "z", "z", "z", "z", "008");
pokemonArray[729] = new pokemon("730", "", "Primarina", "", "", "", "", "", "z", "z", "z", "z", "z", "009");
pokemonArray[730] = new pokemon("731", "✓", "Pikipek", "Pearl", "SOS Chain", 164, 66, "Shiny/pikipek.gif", "z", "z", "z", "z", "z", "010");
pokemonArray[731] = new pokemon("732", "", "Trumbeak", "", "", "", "", "", "z", "z", "z", "z", "z", "011");
pokemonArray[732] = new pokemon("733", "", "Toucannon", "", "", "", "", "", "z", "z", "z", "z", "z", "012");
pokemonArray[733] = new pokemon("734", "✓", "Yungoos", "Lilac", "SOS Chain", 175, 26, "Shiny/yungoos.gif", "z", "z", "z", "z", "z", "013");
pokemonArray[734] = new pokemon("735", "", "Gumshoos", "", "", "", "", "", "z", "z", "z", "z", "z", "014");
pokemonArray[735] = new pokemon("736", "✓", "Grubbin", "Snackkin", "SOS Chain", 165, 191, "Shiny/grubbin.gif", "z", "z", "z", "z", "z", "027");
pokemonArray[736] = new pokemon("737", "", "Charjabug", "", "", "", "", "", "z", "z", "z", "z", "z", "028");
pokemonArray[737] = new pokemon("738", "", "Vikavolt", "", "", "", "", "", "z", "z", "z", "z", "z", "029");
pokemonArray[738] = new pokemon("739", "✓", "Crabrawler", "Meaty Claws", "SOS Chain", 167, 623, "Shiny/crabrawler.gif", "z", "z", "z", "z", "z", "059");
pokemonArray[739] = new pokemon("740", "", "Crabominable", "", "", "", "", "", "z", "z", "z", "z", "z", "060");
pokemonArray[740] = new pokemon("741", "✓", "Oricorio", "Flamencorio", "SOS Chain", 173, 66, "Shiny/oricorio.gif", "z", "z", "z", "z", "z", "082");
pokemonArray[741] = new pokemon("742", "✓", "Cutiefly", "Cutieful", "SOS Chain", 187, 534, "Shiny/cutiefly.gif", "z", "z", "z", "z", "z", "083");
pokemonArray[742] = new pokemon("743", "", "Ribombee", "", "", "", "", "", "z", "z", "z", "z", "z", "084");
pokemonArray[743] = new pokemon("744", "✓", "Rockruff", "Coral Blue", "SOS Chain", 166, 159, "Shiny/rockruff.gif", "z", "z", "z", "z", "z", "103");
pokemonArray[744] = new pokemon("745", "", "Lycanroc", "", "", "", "", "", "z", "z", "z", "z", "z", "104");
pokemonArray[745] = new pokemon("746", "✓", "Wishiwashi", "FlippyFloppy", "SOS Chain", 170, 102, "Shiny/wishiwashi.gif", "z", "z", "z", "z", "z", "110");
pokemonArray[746] = new pokemon("747", "", "Mareanie", "", "", "", "", "", "z", "z", "z", "z", "z", "113");
pokemonArray[747] = new pokemon("748", "", "Toxapex", "", "", "", "", "", "z", "z", "z", "z", "z", "114");
pokemonArray[748] = new pokemon("749", "✓", "Mudbray", "Kenneth", "SOS Chain", 177, 98, "Shiny/mudbray.gif", "z", "z", "z", "z", "z", "132");
pokemonArray[749] = new pokemon("750", "", "Mudsdale", "", "", "", "", "", "z", "z", "z", "z", "z", "133");
pokemonArray[750] = new pokemon("751", "✓", "Dewpider", "Dewriots", "SOS Chain", 169, 31, "Shiny/dewpider.gif", "z", "z", "z", "z", "z", "141");
pokemonArray[751] = new pokemon("752", "", "Araquanid", "", "", "", "", "", "z", "z", "z", "z", "z", "142");
pokemonArray[752] = new pokemon("753", "✓", "Fomantis", "Sick Grass", "SOS Chain", 234, 136, "Shiny/fomantis.gif", "z", "z", "z", "z", "z", "143");
pokemonArray[753] = new pokemon("754", "", "Lurantis", "", "", "", "", "", "z", "z", "z", "z", "z", "144");
pokemonArray[754] = new pokemon("755", "", "Morelull", "", "", "", "", "", "z", "z", "z", "z", "z", "145");
pokemonArray[755] = new pokemon("756", "", "Shiinotic", "", "", "", "", "", "z", "z", "z", "z", "z", "146");
pokemonArray[756] = new pokemon("757", "", "Salandit", "", "", "", "", "", "z", "z", "z", "z", "z", "161");
pokemonArray[757] = new pokemon("758", "", "Salazzle", "", "", "", "", "", "z", "z", "z", "z", "z", "162");
pokemonArray[758] = new pokemon("759", "", "Stufful", "", "", "", "", "", "z", "z", "z", "z", "z", "169");
pokemonArray[759] = new pokemon("760", "", "Bewear", "", "", "", "", "", "z", "z", "z", "z", "z", "170");
pokemonArray[760] = new pokemon("761", "", "Bounsweet", "", "", "", "", "", "z", "z", "z", "z", "z", "171");
pokemonArray[761] = new pokemon("762", "", "Steenee", "", "", "", "", "", "z", "z", "z", "z", "z", "172");
pokemonArray[762] = new pokemon("763", "✓", "Tsareena", "WoMangosteen", "SOS Chain", 174, 82, "Shiny/tsareena.gif", "z", "z", "z", "z", "z", "173");
pokemonArray[763] = new pokemon("764", "", "Comfey", "", "", "", "", "", "z", "z", "z", "z", "z", "174");
pokemonArray[764] = new pokemon("765", "", "Oranguru", "", "", "", "", "", "z", "z", "z", "z", "z", "176");
pokemonArray[765] = new pokemon("766", "", "Passimian", "", "", "", "", "", "z", "z", "z", "z", "z", "177");
pokemonArray[766] = new pokemon("767", "", "Wimpod", "", "", "", "", "", "z", "z", "z", "z", "z", "182");
pokemonArray[767] = new pokemon("768", "", "Golisopod", "", "", "", "", "", "z", "z", "z", "z", "z", "183");
pokemonArray[768] = new pokemon("769", "✓", "Sandygast", "Florida", "SOS Chain", 197, 638, "Shiny/sandygast.gif", "z", "z", "z", "z", "z", "186");
pokemonArray[769] = new pokemon("770", "", "Palossand", "", "", "", "", "", "z", "z", "z", "z", "z", "187");
pokemonArray[770] = new pokemon("771", "✓", "Pyukumuku", "Pukumber", "SOS Chain", 178, 244, "Shiny/pyukumuku.gif", "z", "z", "z", "z", "z", "200");
pokemonArray[771] = new pokemon("772", "", "Type: Null", "", "", "", "", "", "z", "z", "z", "z", "z", "203");
pokemonArray[772] = new pokemon("773", "", "Silvally", "", "", "", "", "", "z", "z", "z", "z", "z", "204");
pokemonArray[773] = new pokemon("774", "✓", "Minior", "Gordo", "Breeding", 183, 821, "Shiny/minior-violet.gif", "z", "z", "z", "z", "z", "213");
pokemonArray[774] = new pokemon("775", "", "Komala", "", "", "", "", "", "z", "z", "z", "z", "z", "222");
pokemonArray[775] = new pokemon("776", "", "Turtonator", "", "", "", "", "", "z", "z", "z", "z", "z", "224");
pokemonArray[776] = new pokemon("777", "", "Togedemaru", "", "", "", "", "", "z", "z", "z", "z", "z", "225");
pokemonArray[777] = new pokemon("778", "✓", "Mimikyu", "Bad Cosplay", "SOS Chain", 222, 114, "Shiny/mimikyu.gif", "z", "z", "z", "z", "z", "242");
pokemonArray[778] = new pokemon("779", "✓", "Bruxish", "Lip Service", "SOS Chain", 172, 104, "Shiny/bruxish.gif", "z", "z", "z", "z", "z", "243");
pokemonArray[779] = new pokemon("780", "", "Drampa", "", "", "", "", "", "z", "z", "z", "z", "z", "244");
pokemonArray[780] = new pokemon("781", "", "Dhelmise", "", "", "", "", "", "z", "z", "z", "z", "z", "263");
pokemonArray[781] = new pokemon("782", "", "Jangmo-o", "", "", "", "", "", "z", "z", "z", "z", "z", "271");
pokemonArray[782] = new pokemon("783", "", "Hakamo-o", "", "", "", "", "", "z", "z", "z", "z", "z", "272");
pokemonArray[783] = new pokemon("784", "", "Kommo-o", "", "", "", "", "", "z", "z", "z", "z", "z", "273");
pokemonArray[784] = new pokemon("785", "", "Tapu Koko", "", "", "", "", "", "z", "z", "z", "z", "z", "285");
pokemonArray[785] = new pokemon("786", "", "Tapu Lele", "", "", "", "", "", "z", "z", "z", "z", "z", "286");
pokemonArray[786] = new pokemon("787", "", "Tapu Bulu", "", "", "", "", "", "z", "z", "z", "z", "z", "287");
pokemonArray[787] = new pokemon("788", "", "Tapu Fini", "", "", "", "", "", "z", "z", "z", "z", "z", "288");
pokemonArray[788] = new pokemon("789", "", "Cosmog", "", "", "", "", "", "z", "z", "z", "z", "z", "289");
pokemonArray[789] = new pokemon("790", "", "Cosmoem", "", "", "", "", "", "z", "z", "z", "z", "z", "290");
pokemonArray[790] = new pokemon("791", "", "Solgaleo", "", "", "", "", "", "z", "z", "z", "z", "z", "291");
pokemonArray[791] = new pokemon("792", "", "Lunala", "", "", "", "", "", "z", "z", "z", "z", "z", "292");
pokemonArray[792] = new pokemon("793", "", "Nihilego", "", "", "", "", "", "z", "z", "z", "z", "z", "293");
pokemonArray[793] = new pokemon("794", "", "Buzzwole", "", "", "", "", "", "z", "z", "z", "z", "z", "294");
pokemonArray[794] = new pokemon("795", "", "Pheremosa", "", "", "", "", "", "z", "z", "z", "z", "z", "295");
pokemonArray[795] = new pokemon("796", "", "Xurkitree", "", "", "", "", "", "z", "z", "z", "z", "z", "296");
pokemonArray[796] = new pokemon("797", "", "Celesteela", "", "", "", "", "", "z", "z", "z", "z", "z", "297");
pokemonArray[797] = new pokemon("798", "", "Kartana", "", "", "", "", "", "z", "z", "z", "z", "z", "298");
pokemonArray[798] = new pokemon("799", "", "Guzzlord", "", "", "", "", "", "z", "z", "z", "z", "z", "299");
pokemonArray[799] = new pokemon("800", "", "Necrozma", "", "", "", "", "", "z", "z", "z", "z", "z", "300");
pokemonArray[800] = new pokemon("801", "", "Magearna", "", "", "", "", "", "z", "z", "z", "z", "z", "301");
pokemonArray[801] = new pokemon("802", "", "Marshadow", "", "", "", "", "", "z", "z", "z", "z", "z", "302");
}

var arrayCopy = JSON.parse(JSON.stringify(pokemonArray))
var mode = "National";

function main() {
    data();
    methodTable();
    createTable();
}

main();
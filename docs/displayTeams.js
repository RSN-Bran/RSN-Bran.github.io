function main() {
    var i = 1;
    
    //Loop through each team
    teams.forEach((team) => {
        console.log(team)
        //Div for a team with id and classname
        var teamElement = document.createElement('div');
        teamElement.id = "team-" + i;
        teamElement.className = "teams"
        
        //Add name of the team
        var header = document.createElement("H3");
        var text = document.createTextNode(team.game);
        header.appendChild(text);
        teamElement.appendChild(header);
        
        //Loop through each member of the team
        team.pokemon.forEach((pokemon) => {
            
            //Create a div inside the team for each team member
            var pokemonElement = document.createElement('div');
            pokemonElement.className = "pokemon"
            
            //Within each team member, create a div for the image
            var imageElement = document.createElement('div');
            var name = "image"
            imageElement.className = name;
            if(pokemon.dead) {
                name = name + " dead"
                imageElement.className = name;
            }
            var img = document.createElement('img');
            if(pokemon.species !== "Wishiwashi") {
                img.style.height = '105px'
            }
            else {
                img.style.height = '25px';
                name = name + " wishiwashi"
                imageElement.className = name;
            }
            img.src = pokemon.image;
            imageElement.appendChild(img)
            pokemonElement.append(imageElement);

            if(pokemon.extra !== undefined) {
                var imageElement2 = document.createElement('div');
                imageElement2.className = "image";
                if(pokemon.dead) {
                    imageElement2.className = "dead";
                }
                var img2 = document.createElement('img');
                img2.style.height = '105px';
                img2.src = pokemon.extra;
                imageElement2.appendChild(img2);
                pokemonElement.append(imageElement2);
            }
            
            
            //Within each team member, create a div for the species
            var speciesElement = document.createElement('div');
            speciesElement.className = "species"
            speciesElement.innerHTML = pokemon.species;
            pokemonElement.append(speciesElement);
            teamElement.append(pokemonElement)
        })
        document.body.appendChild(teamElement);
        i++;
    })
}



var teams = JSON.parse(JSON.stringify(teamArray));

main();
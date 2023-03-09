fetch('animals.json')
.then(response => response.json())
.then( jsonData => parseAnimalData(jsonData));


function parseAnimalData(animalObject){
    createAnimalGallery(animalObject);
};

//function to make the animal table in html
//Each row of the table will look like this
/*  
    <table id="animalGallery">
            <tr>
                <th>
                    <div class="animalItem">
                        <a target="_blank" href="images/croco.jpg">
                        <img src="images/croco.jpg">
                        </a>
                        <div class="species">Animal Species</div>
                    </div>
                </th>
                <th>
                    <p class = "animalDesc">
                        Hi I'm `name`, I'm often found in the `habitats` of `distribution`.
                        My favourite food is `favouriteFood` and my hobbies include `hobbies[0]` and `hobbies[1]`
                    </p>
                </th>
            <tr>
        </table>

*/
function createAnimalGallery(animalObject){
    //get the table element from the html
    let tableElement = document.getElementById("animalGallery");

    //for every animal object in the json array do code with 'animal' being the current animal object
    //there are 3 animals in the json so this will run 3 times, the first pass with the crocodile, second with the lion etc
    animalObject.forEach(animal=> {

        //make a table row for this entry of animal
        let tableRowElement = document.createElement('tr');

        //and append it to the table
        tableElement.append(tableRowElement);

        //in each table row there will be two tableHeaders
        let animalImageTableHeader = document.createElement('th');
        let animalDescriptionTableHeader = document.createElement('th');

        //appending those to the tableRow element
        tableRowElement.append(animalImageTableHeader);
        tableRowElement.append(animalDescriptionTableHeader);

        //The first Header will have a div called animal item
        let animalItemElement = document.createElement('div');
        //it will have the class 'animalItem' so it can be seen by the css
        animalItemElement.className = "animalItem"
        //append that to the first table header
        animalImageTableHeader.append(animalItemElement);

        //In this div there's a link wrapped around an image and another div for the species name
        let imageLinkElement = document.createElement('a')
        //get the animal image from the animalObject
        let imageUrl = animal.image
        //and set the links href to it
        imageLinkElement.href = imageUrl;
        //set target to blank so it opens the image in a new window
        imageLinkElement.target = '_blank';

        //again appending to the relevant spot.
        animalItemElement.append(imageLinkElement)

        //repeat this proccess with all the other elements

        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageLinkElement.append(imageElement);

        let speciesDiv = document.createElement('div');
        speciesDiv.className = "species";
        //getting dynamic data from the animal object when needed
        let animalSpecies = animal.animal;
        //innerHTML is the text between the HTML tags
        speciesDiv.innerHTML = animalSpecies;

        //making sure to append to the right element. The one I want its parent to be.
        animalItemElement.append(speciesDiv);

        //The second Header is for description
        animalDescriptionElementOne = document.createElement('p');
        animalDescriptionElementOne.className = "animalDesc";

        animalDescriptionElementTwo = document.createElement('p');
        animalDescriptionElementTwo.className = "animalDesc";

        //Making a string of our description with some dynamic data.
        //Hi I'm `name`, I'm often found in the `habitats` of `distribution`. \n My favourite fodd is `favouriteFood` and my hobbies include `hobbies[0]` and `hobbies[1]
        
        //I want something like that but for things like `name` to be replaced by a variable.

        let name = animal.name;
        let habitat = animal.habitat;
        let distribution = animal.distribution;
        let favoriteFood = animal.favoriteFood;
        let firstHobby =  animal.hobbies[0];
        let secondHobby =  animal.hobbies[1]; 
     

        //in javascript ${variableName} would allow me to add variables to strings using the backtick `. \n <-- and this is a new line character to make a new line

        let descriptionOne = `Hi, I'm ${name}. I'm found in the ${habitat} of ${distribution}.`
        let descriptionTwo = `My favorite food is ${favoriteFood}, and my hobbies include ${firstHobby} and ${secondHobby}`

        animalDescriptionElementOne.innerHTML = descriptionOne;
        animalDescriptionElementTwo.innerHTML = descriptionTwo;

        animalDescriptionTableHeader.append(animalDescriptionElementOne);
        animalDescriptionTableHeader.append(animalDescriptionElementTwo);

    });
    
};


const an1 = new animalInfo('Carl', 'West African Dwarf Crocodile', 'African Kingdom, habitat 102')


console.log(an1.name) // Carl
console.log(an1.species) // West African Dwarf Crocodile
console.log(an1.location) // African Kingdom, habitat 102

//use console.log(id); + console.log(rockData) to ensure the right id is being retrieved --> true 

const rockData ={ //note: this MUST remain at the top of the code in order for the entire code to work 
    i: {
        classification:['Igneous rock'],
        sizeShape: ['9.5cm × 9cm × 5cm', 'Irregular, nodular form with various protrusions and indentations'],
        colour: ['Combination of brownish-grey, pale taupe, charcoal black, and peachy tones that sparkles in the light'],
        texture: ['Rough, uneven surface; extremely coarse to the touch']
    },
    ii: {
        classification: ['Igneous rock'],
        sizeShape: ['3.4cm × 2.4cm × 2.9cm', 'Imperfect tetrahedron'],
        colour: ['Dusty grey colour'],
        texture: ['Notably porous with a rough exterior']
    },
    iii: {
        classification: ['Sedimentary rock'],
        sizeShape: ['3.5cm × 3.8cm × 2.8cmcm', 'Ovoid with an inward taper on 2 sides'],
        colour: ['Warm dove grey base with hints of coral and dark taupe'],
        texture: ['Soft, smooth feel with a few fracture lines']
    }
}

const anecdotalData ={
    i:{
        anecdote: ['During Grade 12, my high school had organized a week-long trip to New York; all of my friends would be in attendance except for me as I was unable to afford the trip expenses.', 'One of my friends offered to bring back a memento or souvenir from the city — I simply asked for any rock that catches his attention while out on one of the excursions.', 'This was the rock he brought back to me.'],
        locTime: ['found in new york city, ny | may 2023']
    },
    ii:{
        anecdote: [''],
        locTime: ['']
    },
    iii:{
        anecdote: ['When I look at this rock, I am reminded of the two lovely ladybugs that crawled all over my hands and the unsettling Spongebob popsicle that my sister had.'],
        locTime: ['found in woodbine beach park · toronto, on | july 2023']
    }
}

const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");
const rock = rockData[id];


//classification
const rockType = document.getElementById("class");
const li1 = document.createElement("li"); 
li1.innerText = rock.classification[0]; //replace rockType.innerText with a list element, ensure information appears in bullet point form
rockType.appendChild(li1); //line of code that makes the element visible on the page

//size and shape
const rockSizeShape = document.getElementById("ss");
rock.sizeShape.forEach (function(item){ //creates a new bullet point for each item, looping through array for each set of information
    const li = document.createElement("li");
    li.innerText = item;
    rockSizeShape.appendChild(li);
});
/*const li2 = document.createElement("li");
li2.innerText = rock.sizeShape[0];
rockSizeShape.appendChild(li2);*/

//colour
const rockColour = document.getElementById("col");
const li3 = document.createElement("li");
li3.innerText = rock.colour[0];
rockColour.appendChild(li3);

//texture
const rockTexture = document.getElementById("tex");
const li4 = document.createElement("li");
li4.innerText = rock.texture[0];
rockTexture.appendChild(li4);

//anecdotal data
const personal = anecdotalData[id];
const anecData = document.getElementById("anecdote");
personal.anecdote.forEach (function(item){
    const p = document.createElement("p");
    p.innerText = item;
    anecData.appendChild(p);
});
const locTime = document.getElementById("locTime");
locTime.innerText = personal.locTime[0];


document.getElementById("rock-image").src = "../images/" + id + ".jpg";
document.getElementById("rock-title").innerText = "Rock " + id;
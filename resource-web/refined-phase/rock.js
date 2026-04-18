//use console.log(id); + console.log(rockData) to ensure the right id is being retrieved --> true 

const rockData ={ //note: this MUST remain at the top of the code in order for the entire code to work 
    i:{
        name: '...',
        classification:['Igneous rock', 'Granite'],
        sizeShape: ['9.5cm × 9cm × 5cm', 'Irregular, nodular form with various protrusions and indentations'],
        colour: ['Combination of brownish-grey, pale taupe, charcoal black, and peachy tones that sparkles in the light'],
        texture: ['Rough, uneven surface; extremely coarse to the touch']
    },
    ii:{
        name: 'Swiss Cheese',
        classification: ['Igneous rock', 'Pumice'],
        sizeShape: ['3.4cm × 2.4cm × 2.9cm', 'Imperfect tetrahedron'],
        colour: ['Dusty grey colour'],
        texture: ['Notably porous with a rough exterior']
    },
    iii:{
        name: 'Peaches',
        classification: ['Sedimentary rock', 'Quartz river pebble'],
        sizeShape: ['3.5cm × 3.8cm × 2.8cmcm', 'Ovoid with an inward taper on 2 sides'],
        colour: ['Warm dove grey base with hints of coral and dark taupe'],
        texture: ['Soft, smooth feel with a few fracture lines']
    },
    iv:{
        name: 'Yarn Ball',
        classification: ['Chemical sedimentary rock', 'Desert rose'],
        sizeShape: ['1.4cm × 1.1cm × 1.3cm high  × 3.5cm', 'Circular rosette-like form'],
        colour: ['Various shades of sandstone with white highlights'],
        texture: ['Imbricating lattice pattern with a gritty feel']
    }, 
    v:{
        name: '...',
        classification: ['Metamorphic rock', 'Tumbled slate'],
        sizeShape: ['2.3cmcm × 1.6cm × 0.9cm', 'Rounded trigonal form with a concave indentation along one of its edges'],
        colour: ['Stone brown on one side, charcoal grey on the other with light grey stripes on both sides'],
        texture: ['Satin smooth texture']
    },
    vi:{
        name: 'Honey Nugget',
        classification: ['Metamorphic rock', 'Ferruginous quartz'],
        sizeShape: ['1.3cm × 1.2cm × 1.25cm', 'Compact nodule with softened edges'],
        colour: ['Marbled honey orange with blots of burnt amber'],
        texture: ['Waxy satin finish with a glass-like hardness; surprisingly dense for its small size'] 
    },
    vii:{
        name: 'The Perfect Pebble',
        classification: ['Sedimentary rock', 'Greywacke pebble'],
        sizeShape: ['1.9cm × 1.6cm × 0.4cm', 'A perfectly flat oval'],
        colour: ['Olive grey encompassed by two shadowy, parallel bands'],
        texture: ['Slick, matte surface']
    },
    viii:{
        name: '...',
        classification: ['Igneous rock', 'Milky quartz'],
        sizeShape: ['1.9cm × 1.55cm × 1.2cm', 'Asymmetric pyriform'],
        colour: ['Milky white with golden undertones, marked by two distinct 2 charcoal black smudges'],
        texture: ['Frosted sea glass smoothness interrupted by tiny shallow indentations']
    },
    ix:{
        name: '...',
        classification: ['Sedimentary rock', 'Siltstone'],
        sizeShape: ['2.6cm × 1.4cm × 1.1cm', 'Truncated wedge '],
        colour: ['Lavender grey with distinct white crackle lines and charcoal grey inclusions'],
        texture: ['Relatively slick with a raised jagged ridge on its side']
    },
    x:{
        name: '...',
        classification: ['Sedimentary rock', 'Ironstone'],
        sizeShape: ['2.2cm × 2.1cm × 0.6cm', 'Reuleaux triangle (rounded equilateral triangle)'],
        colour: ['Russet brown featuring dusty white hairline striations and slate-black flecks'],
        texture: ['Mellowed smoothness met with subtle pits and dips']
    },
    xi:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xii:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xiii:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xiv:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xv:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xvi:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xvii:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xviii:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xix:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xx:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xxi:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    },
    xxii:{
        name: '',
        classification: ['abc'],
        sizeShape: ['abc'],
        colour: ['abc'],
        texture: ['abc']
    }   
}

const anecdotalData ={
    i:{
        anecdote: ['During Grade 12, my high school had organized a week-long trip to New York; all of my friends would be in attendance except for me as I was unable to afford the trip expenses.', 'One of my friends offered to bring back a memento or souvenir from the city — I simply asked for any rock that catches his attention while out on one of the excursions.', 'This was the rock he brought back to me.'],
        locTime: ['found in new york city, ny | may 2023']
    },
    ii:{
        anecdote: ['This right here is my favourite rock. The look and texture kind of remind me of swiss cheese.', 'Maybe that is why I like it so much.'],
        locTime: ['found in toronto, on | date unknown']
    },
    iii:{
        anecdote: ['When I look at this rock, I am reminded of the two lovely ladybugs that crawled all over my hands and the unsettling Spongebob popsicle that my sister had.'],
        locTime: ['found in woodbine beach park · toronto, on | july 2023']
    },
    iv:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    v:{
        anecdote: ['abc'],
        locTime: ['abc']
    }, 
    vi:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    vii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    viii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    ix:{
        anecdote: ['abc'],
        locTime: ['abc']
    }, 
    x:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xi:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xiii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xiv:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xv:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xvi:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xvii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xviii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xix:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xx:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xxi:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
    xxii:{
        anecdote: ['abc'],
        locTime: ['abc']
    },
}

const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");
const rock = rockData[id];


//classification
const rockType = document.getElementById("class");
rock.classification.forEach (function(item){
    const li = document.createElement("li");
    li.innerText = item;
    rockType.appendChild(li);
})
 

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


document.getElementById("rock-image").src = "../images/covers/" + id + ".jpg";
document.getElementById("rock-title").innerText = rock.name;
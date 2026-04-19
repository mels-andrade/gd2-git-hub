//use console.log(id); + console.log(rockData) to ensure the right id is being retrieved --> true 

const rockData ={ //note: this MUST remain at the top of the code in order for the entire code to work 
    i:{
        name: 'Jaws',
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
        name: 'Dune',
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
        name: 'Cough Drop',
        classification: ['Igneous rock', 'Milky quartz'],
        sizeShape: ['1.9cm × 1.55cm × 1.2cm', 'Asymmetric pyriform'],
        colour: ['Milky white with golden undertones, marked by two distinct 2 charcoal black smudges'],
        texture: ['Frosted sea glass smoothness interrupted by tiny shallow indentations']
    },
    ix:{
        name: 'Eraserhead',
        classification: ['Sedimentary rock', 'Siltstone'],
        sizeShape: ['2.6cm × 1.4cm × 1.1cm', 'Truncated wedge '],
        colour: ['Lavender grey with distinct white crackle lines and charcoal grey inclusions'],
        texture: ['Relatively slick with a raised jagged ridge on its side']
    },
    x:{
        name: 'Caramel',
        classification: ['Sedimentary rock', 'Ironstone'],
        sizeShape: ['2.2cm × 2.1cm × 0.6cm', 'Reuleaux triangle (rounded equilateral triangle)'],
        colour: ['Russet brown featuring dusty white hairline striations and slate-black flecks'],
        texture: ['Mellowed smoothness met with subtle pits and dips']
    },
    xi:{
        name: 'Sneaker',
        classification: ['Igneous rock', 'Pegmatite'],
        sizeShape: ['3.1cm × 1.9cm × 1.4cm', 'Complex angular form defined by sharp edges and a pronounced structural arch'],
        colour: ['Blush pink with erratic patches of forest green and bright white'],
        texture: ['Rigid, faceted surface with hard-edged, reflective planes']
    },
    xii:{
        name: 'Salmon',
        classification: ['Igneous rock', 'Granite'],
        sizeShape: ['2.7cm × 1.9cm × 1.2cm', 'Asymmetric inflated trigonal form'],
        colour: ['Warm salmon pink base mottled with burnt sienna,  taupe, and other earthy tones'],
        texture: ['Inconsistent, undulating surface; somewhat slippery']
    },
    xiii:{
        name: 'Black Hole Sun',
        classification: ['Metamorphic rock', 'Black tourmaline'],
        sizeShape: ['2.25cm × 1.4cm × 1.9cm', 'Slender prismatic form with a blunt base'],
        colour: ['Saturated jet black all throughout with a glassy sheen'],
        texture: ['Jagged, deeply striated surface; brittle']
    },
    xiv:{
        name: 'Salt Lamp',
        classification: ['Igneous rock', 'Sunstone'],
        sizeShape: ['1.9cm × 1.3cm × 1.85cm', 'Geometric form defined by a distinct, elevated point'],
        colour: ['Various shades of peachy orange transitioning into a frosted, translucent white tip'],
        texture: ['Glassy, sharp-edged surface']
    },
    xv:{
        name: 'Seafoam',
        classification: ['Sedimentary rock', 'Quartz geode'],
        sizeShape: ['2.8cm × 1.35cm × 3.15cm', 'Globular cluster with a projecting point'],
        colour: ['Sepia tan exterior contrasting a sparkling, smokey white interior'],
        texture: ['Abrasive, gritty surface; similar to sugar/salt crystals']
    },
    xvi:{
        name: 'Crimpy',
        classification: ['Igneous rock', 'Beryl'],
        sizeShape: ['2.3cm × 1.6cm × 0.8cm', 'Wide-angle tabular wedge'],
        colour: ['Translucent mint green and frosted white base, offset by charcoal black specks'],
        texture: ['Structurally rigid; significantly dry']
    },
    xvii:{
        name: 'Listerine',
        classification: ['Igneous rock', 'Chevron amethyst'],
        sizeShape: ['1.85cm × 1.3cm × 1.1cm', 'Oblique scalene-pyramidal fragment'],
        colour: ['Deep plum stratified with milky white bands'],
        texture: ['Rigid and layered; feels like stacks of slates fused together']
    },
    xviii:{
        name: 'Graffiti Slab',
        classification: ['Sedimentary rock', 'Orbicular jasper'],
        sizeShape: ['2.2cm × 0.5cm × 1.3cm', 'Flattened scalene shard'],
        colour: ['Crimson red and off-white overlaid with moss green organic, circular marks'],
        texture: ['Starkly gritty surface paired with a serrated edge']
    },
    xix:{
        name: 'Kaleidoscope ',
        classification: ['Sedimentary rock', 'Leopard skin jasper'],
        sizeShape: ['2.2cm × 1.6cm × 1.1cm', 'Abstract, irregular form; jagged perimeter'],
        colour: ['Mosaic of scarlet red, pastel orange, and terracotta bounded by charcoal black rings'],
        texture: ['Tactilely dry and exceptionally rigid']
    },
    xx:{
        name: 'Red Pine',
        classification: ['Igneous rock', 'Mahogany Obsidian'],
        sizeShape: ['4.1cm × 2.3cm × 0.3cm', 'Arrowhead with a deep, symmetrically ribbed perimeter'],
        colour: ['Jet black base with mahogany marbling'],
        texture: ['Physically sleek across the planes, with aggressively jagged edges']
    },
    xxi:{
        name: 'Cursor 1.0',
        classification: ['Sedimentary rock', 'Chert'],
        sizeShape: ['4.3cm × 2.2cm × 0.45cm', 'Arrowhead'],
        colour: ['Burnt sienna with hints of ash brown'],
        texture: ['Waxy smooth feel accompanied by a sharp splintered point']
    },
    xxii:{
        name: 'Meatball',
        classification: ['Metamorphic rock', 'Amphibolite'],
        sizeShape: ['3.9cm × 2.4cm × 3.2cm', 'Ovoid mound'],
        colour: ['Muted charcoal grey peppered with earthy brown tones in a non-uniform pattern'],
        texture: ['Rough-grained and unyielding; dense weight']
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
        anecdote: ['It feels like only yesterday that I went up to Blue Mountain with my family, begging them to let me go to the Gemstone Mining Tower.', 'There, you can engage in a very physical process, sifting through sand and debris to uncover random hidden treasures.', 'I remember the childlike joy I felt taking the extremely rusty screening tray to the wooden water sluice, ready to get my hands dirty.', 'Many of the rocks in this archive were found in that specific location and on that very day, with the people I love most.'],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    v:{
        anecdote: [''],
        locTime: ['found in toronto, on | date unknown']
    }, 
    vi:{
        anecdote: ['When Winnie-the-Pooh asks for a smackerel of honey, this is immediately what comes to mind for me (in rock form, of course).'],
        locTime: ['found in toronto, on | date unknown']
    },
    vii:{
        anecdote: ['In my personal opinon, no rock in the world will ever surpass the perfection of this pebble.', 'Truly one of my best rock finds.'],
        locTime: ['found in toronto, on | date unknown']
    },
    viii:{
        anecdote: [''],
        locTime: ['found in toronto, on | date unknown']
    },
    ix:{
        anecdote: [''],
        locTime: ['found in toronto, on | date unknown']
    }, 
    x:{
        anecdote: [''],
        locTime: ['found in toronto, on | date unknown']
    },
    xi:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xii:{
        anecdote: [''],
        locTime: ['found in toronto, on | date unknown']
    },
    xiii:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xiv:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xv:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xvi:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xvii:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xviii:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xix:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xx:{
        anecdote: [''],
        locTime: ['found in the blue mountains, on | august 2022']
    },
    xxi:{
        anecdote: ['This rock served as a major inspiration for the creation of my website. Immediately, I knew it would function exceptionally well as a cursor for this site.', 'And that is exactly what I did.'],
        locTime: ['found in the blue mountains, on | summer 2016']
    },
    xxii:{
        anecdote: ['The most recent rock added to my collection.', 'While on my way home from school, I came across this absolute beauty hidden under a bush.', 'I was having a particularly difficult day; overwhelming feelings and just being consumed by work and stress.', 'For me, this rock signified a reason to continue pushing forward. It served as a reminder that while life may move quickly, I need to stay strong and grounded, just like that rock.'],
        locTime: ['found on algonquin avenue · toronto, on | march 2026']
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
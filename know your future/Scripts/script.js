let lunaglowHasCheckedFuture = false;
let lunaglowSelectedGender = 'boy';

function lunaglowSelectGender(gender) {
    lunaglowSelectedGender = gender;
    document.getElementById('lunaglow-boy-button').classList.toggle('active', gender === 'boy');
    document.getElementById('lunaglow-girl-button').classList.toggle('active', gender === 'girl');
}

function lunaglowCheckFuture() {
    const name = document.getElementById('lunaglow-name-input').value;
    if (!name) return;

    if (lunaglowHasCheckedFuture) {
        alert("Hey! You already saw your future. No peeking again!");
        return;
    }

    const boyFutures = [
        "You'll teach dogs to ride skateboards. Woof wheels!",
        "You'll make a robot that does your homework. Smart move!",
        "You'll find a treasure map in your cereal box. Lucky breakfast!",
        "You'll invent a car that runs on banana peels. Slippery ride!",
        "You'll become best friends with a friendly alien. Space buddy!",
        "You'll discover a new planet made of candy. Sweet space!",
        "You'll teach penguins to play soccer. Icy goal!",
        "You'll make a phone that translates animal sounds. Pet talk!",
        "You'll grow a tree that grows pizza. Tasty branches!",
        "You'll build a rollercoaster in your backyard. Home thrills!",
        "You'll invent shoes that make you jump super high. Bounce boy!",
        "You'll train a pet dinosaur. Jurassic pal!",
        "You'll make a hat that gives you super brain power. Smart cap!",
        "You'll discover a cave full of talking crystals. Shiny chat!",
        "You'll become the world's youngest pirate captain. Yarr, matey!",
        "You'll invent a machine that makes any food taste like ice cream. Yummy trick!",
        "You'll teach fish to walk on land. Fin feet!",
        "You'll start a band with friendly monsters. Growl tunes!",
        "You'll make a flying bicycle. Pedal in the sky!",
        "You'll discover a new sport: underwater basketball. Splash hoops!",
        "You'll invent a shrink ray and explore your toy box. Tiny adventure!",
        "You'll become the first kid mayor of Candyland. Sweet leader!",
        "You'll make friends with a family of clouds. Fluffy buddies!",
        "You'll discover a hidden world inside your closet. Secret realm!",
        "You'll invent a machine that turns veggies into candy. Trick treats!"
    ];

    const girlFutures = [
        "You'll teach cats to sing opera. Meow music!",
        "You'll invent a pen that writes in ice cream. Cool notes!",
        "You'll discover a unicorn hiding in your garden. Magic pet!",
        "You'll make a dress that changes colors with your mood. Feeling fashion!",
        "You'll become the first girl to walk on Mars. Red planet steps!",
        "You'll grow flowers that glow in the dark. Night bloom!",
        "You'll invent bubble gum that lets you float. Floaty fun!",
        "You'll teach elephants to paint pictures. Trunk art!",
        "You'll make a mirror that shows you your future. Time glass!",
        "You'll discover a new type of rainbow with extra colors. Super spectrum!",
        "You'll invent a hairbrush that styles hair by itself. Easy do!",
        "You'll become best friends with a mermaid. Ocean bestie!",
        "You'll make a teddy bear that comes to life. Cuddly magic!",
        "You'll discover a cave made entirely of crystals. Sparkle space!",
        "You'll invent shoes that let you walk up walls. Sticky steps!",
        "You'll teach butterflies to spell words with their flight. Flutter letters!",
        "You'll make a perfume that makes plants grow super fast. Bloom boom!",
        "You'll discover a new star and name it after your pet. Twinkle friend!",
        "You'll invent a wand that turns anything into chocolate. Sweet magic!",
        "You'll become the first person to have a tea party on a cloud. Sky sips!",
        "You'll make a playground that floats in the air. Sky swings!",
        "You'll discover a way to talk to dolphins. Flipper chat!",
        "You'll invent a tiara that gives you super strength. Princess power!",
        "You'll make friends with friendly ghosts. Boo buddies!",
        "You'll create a theme park inside a giant bubble. Float fun!"
    ];

    const futures = lunaglowSelectedGender === 'boy' ? boyFutures : girlFutures;
    const future = futures[Math.floor(Math.random() * futures.length)];
    document.getElementById('lunaglow-result').innerHTML = `${name}, cosmic revelation alert! ${future}`;
    lunaglowCreateSparkles();
    lunaglowHasCheckedFuture = true;
}

function lunaglowCreateSparkles() {
    const ball = document.querySelector('.lunaglow-crystal-ball');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'lunaglow-sparkle';
        sparkle.style.width = `${Math.random() * 5 + 2}px`;
        sparkle.style.height = sparkle.style.width;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        ball.appendChild(sparkle);
    }
}



let quote = document.querySelector("#quote");
const date = new Date();
let days = date.getDate();

quoteGenerator();

function quoteGenerator(){
    const quotes = [
        "If this is a dream then i dont want to wake up again",
        "Loving you is like seeing sunset for the first time",
        "Mahiwaga, Pipiliin ka sa Araw Araw",
        "I won't give up on us, even if the skies get rough",
        "You're still the one that i love, the only one that i dream of",
        "Its always the Golden Hour for me <3",
        "Look at the stars, look how they shine for you",
        "Time feels slow when im with you",
        "You look so beautiful in white(Puhon) HAHHAHHA",
        "The Early precious gift",
        "And I'd give up forever to touch you, cause I know that you feel me somehow. You're the closest to heaven that I'll ever be and I don't wanna go home right now.",
        "When you put your arms around me, you let me know there's nothing in this world I can't do",
        "I love you best. You're not like the rest.",
        "If you fall I will catch you, I'll be waiting...time after time",
        "And when you smile, the whole world stops and stares for a while..",
        "Well, I found a woman stronger than anyone I know. She shares my dreams; I hope that someday I'll share her home.",
        "I hope you don't mind that I put down in words how wonderful life is while you're in the world.",
        "How sweet it is to be loved by you...",


    ];

    let i = Math.floor(Math.random() * quotes.length);
    let iPic = Math.floor(Math.random() * 3);
    
    console.log(i);
    if(days == 16){
        quote.innerHTML = "Happy Monthsarry Langga";
    }
    else {
        quote.innerHTML = quotes[i];
        document.body.style.background= `url(\"pictures/picture${iPic}.jpg\") no-repeat center fixed`;
    }

}




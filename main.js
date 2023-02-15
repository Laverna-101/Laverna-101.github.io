
let quote = document.querySelector("#quote");
let message = document.querySelector(".message");
const date = new Date();
let days = date.getDate();
let hours = date.getHours();
let month = date.getMonth();
let iPic = Math.floor(Math.random() * 4);
let carousel = document.querySelector(".carousel-wrapper");
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
        "I can feel you when your near amongst the crowds",
        "I've known it from the moment that we met no doubt in my mind where you belong",
        "You're my end and my beginning, Even when i lose i'm winning",
        "In all the world you'll never find a love as true as mine",
        "Your lips are made to be kissed. Let's not let them be wasted.",
        "Your lips look lonely. Can mine keep them company?",
        "I’ve never experienced having my dreams come true until the day I met you.",
        "Someone call 9-1-1 because you make my heart stop every time I am around you.",
        "Wanna flip a coin? Heads, I’m yours tails your mine!",
        "Are you tired? Because you have been running through my mind all day.",
        "Gihigugma taka (uwu)",
        "I'm sorry for everything but really my love is true than ever",
        "I knew na ikaw na jhud para sa akoa tungod sa imong pagka maldita HAHAHHAH (uwu)",
        "The Best Couple has an annoying and idiot boyfriend and an impatient and always-angry girlfriend",
        "Pag huwat ghod, hapakon takag singsing ron HAHAHHAH",
        "Kung mo abot ang panahon na di na ikaw akong makuyog, awh makig kuyog kos mga iring nako sus",
        "I love you my Love",
        "I wish you're okay everyday even if i'm not by your side.",
        "Hoping our dreams come true!",
        "When you feel lost or alone, just visit this site and read this letters for you my love",
        "Remember when we name our kids, Nate, Seth and Aurora? AHHAHHAH jjmon",
        "Challenges may come but our love is stronger than anything",
        "Pakaslan taka kung imo na jhud kan on ang piso sa balot HAHHAHHAHA",
        "Can't wait to have a fishball date with you again",
        "Gusto kong tumakas kasama mo, kapit lang lilipad tayo",
        "Gusto kitang makasama sa araw-araw",
        "Wishing for everything to be in place, a future for us to claim",
        "Everything is in monochrome until you came",
        
        
    ];
    
    
    if(days == 15){
        quote.innerHTML = "Happy 5.7 Monthsarry Langga";
        quote.style.transform = "translate" + "(" + -50 + "%" + "," +  -180 + "%" + ")";
        carousel.style.display = "block";
        message.style.display = "block";
        dayAndNightBackground(iPic);
    }
    else if(month == 2-1 && days == 14){
        
        document.body.style.backgroundImage= `url(\"pictures/valentines.jpg\")`;
        
    }
    else if(month == 2-1 && days == 13){
        quote.innerHTML = "Kay Impatient man kang Dako so yeah, I will be your Valentine";
        dayAndNightBackground(iPic);
    }
    else {
        quote.innerHTML = quotes[days-1];
        dayAndNightBackground(iPic);
    }
    console.log(quotes.length);
}

function dayAndNightBackground(background_theme){
    document.body.style.background= `url(\"pictures/day${background_theme}.jpg\") no-repeat center fixed`;
    // if(hours > 6 && hours < 18){
    //     document.body.style.background= `url(\"pictures/night${background_theme}.jpg\") no-repeat center fixed`;
    // }
    // else{
    // }
}

console.log(iPic);
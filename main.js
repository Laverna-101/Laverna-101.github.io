let quote = document.querySelector("#quote");
let message = document.querySelector(".message");
const date = new Date();
let days = date.getDate();
let hours = date.getHours();
let month = date.getMonth();
let iPic = Math.floor(Math.random() * 4);
let carousel = document.querySelector(".carousel-wrapper");
quoteGenerator();

function quoteGenerator() {
    /**making a 365 days format through month multiplied 
    by average days and add the total days of the current month
    */
    let daily_quote = Math.floor(month * 30.437 + days);

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
        "Ikaw ang kahati sa twin pack ko. UWU",
        "I wish i can hug you right now. I miss you a lottt",
        "You are my heart, my life, my one and only thought",
        "You should be kissed and often, and by someone who knows how.",
        "I’ve never had a moment’s doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.",
        "You are sunlight through a window, which I stand in, warmed. My darling",
        "Soul meets soul on lovers’ lips.",
        "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
        "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams",
        "Take my hand, take my whole life too. For I can’t help falling in love with you",
        "We fight often and love even more",
        "You’re the closest to heaven, that I’ll ever be.",
        "I have found the one whom my soul loves.",
        "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        "Love is when you sit beside someone doing nothing, yet you feel perfectly happy.",
        "You are, and always have been, my dream.",
        "Love is composed of a single soul inhabiting two bodies.",
        "Our love is like the wind. I can’t see it, but I can feel it.",
        "I would rather spend one lifetime with you, than face all the ages of this world alone.",
        "When I see your face, there’s not a thing that I would change, ’cause you’re amazing – just the way you are.",
        "Its always us against the world my love",
        "I love you because the entire universe conspired to help me find you.",
        "Immature love says: ‘I love you because I need you.’ Mature love says: ‘I need you because I love you.",
        "You are my Peace in this chaotic world",
        "I love you more than there are stars in the sky and fish in the sea.",
        "I love you 3000",
        "I fell in love the way you fall asleep: slowly, and then all at once.",
        "So it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.",
        "You are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I have treasured our life together.",
        "You are, and always have been, my dream.",
        "I am really looking forward for the day that i become successful because of you",
        "Its weird that you always caught my attention when you smile",
        "Seeing you doing cute and weird stuffs makes me fall for you even more",
        "I love you so much langga, Every single day",
        "Mwuah mwuah mwuah mwuah mwuah",
        "Cause all of me loves all of you. Love your curves and all your edges, all your perfect imperfections.",
        "And I can’t help but stare, cause I see truth somewhere in your eyes.",
        "I am thinking of you in my sleepless solitude tonight, if it’s wrong to love you then my heart just won’t let me be right.",
        "And when you’re needing your space to do some navigating, I’ll be here patiently waiting to see what you find.",
        "Well I found a woman, stronger than anyone I know. She shares my dreams, I hope that someday I'll share her home.",
        "When you left I lost a part of me. It's still so hard to believe. Come back baby please 'cause we belong together",
        "Have Fun learning langga, Don't forget to relax and the reason why naning kaayo ka, I love you baby",
        "Do your best baby, Ace the exam okay",
        "Me so proud of you no matter the score you get baby!!!",
        "Believe in yourself okay, dont doubt your knowledge and imo skills. I love you baby"

    ];

    if (days == 16) {
        quote.innerHTML = "Happy 5.7 Monthsarry Langga";
        quote.style.transform =
            "translate" + "(" + -50 + "%" + "," + -180 + "%" + ")";
        carousel.style.display = "block";
        message.style.display = "block";
        dayAndNightBackground(iPic);
    } else if (month == 2 - 1 && days == 14) {
        document.body.style.backgroundImage = `url(\"pictures/valentines.jpg\")`;
    } else if (month == 2 - 1 && days == 13) {
        quote.innerHTML =
            "Kay Impatient man kang Dako so yeah, I will be your Valentine";
        dayAndNightBackground(iPic);
    } else {
        message.style.display = "none";
        quote.innerHTML = quotes[daily_quote];
        dayAndNightBackground(iPic);
    }
}

function dayAndNightBackground(background_theme) {
    document.body.style.background = `url(\"pictures/day${background_theme}.jpg\") no-repeat center fixed`;
    // if(hours > 6 && hours < 18){
    //     document.body.style.background= `url(\"pictures/night${background_theme}.jpg\") no-repeat center fixed`;
    // }
    // else{
    // }
}

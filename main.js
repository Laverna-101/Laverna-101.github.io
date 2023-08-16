let quote = document.querySelector("#quote");
let message = document.querySelector(".message");
let directMessage = document.querySelector(".directMessage");
let floatSticker = document.querySelector(".circles div:nth-child(1)");
let floatSticker1 = document.querySelector(".circles div:nth-child(4)");
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
        "Believe in yourself okay, dont doubt your knowledge and imo skills. I love you baby",
        "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
        "I could make you happy, make your dreams come true. Nothing that I wouldn't do. Go to the ends of the earth for you to make you feel my love.",
        "I like you very much, just as you are.",
        "I love you' begins by I, but it ends up by you.",
        "Your love shines in my heart as the sun that shines upon the earth",
        "I am so in love with you that there isn’t anything else.",
        "I knew the second I met you that there was something about you I needed. Turns out it wasn't something about you at all. It was just you.",
        "A hundred hearts would be too few to carry all my love for you.",
        "Being with you and not being with you is the only way I have to measure time",
        "I find the most beautiful moments of life aren't just with you but because of you.",
        "I love you more than I can express, or can ever hope to express.",
        "You don’t love someone for their looks, or their clothes or for their fancy car, but because they sing a song only you can hear.",
        "Miss, Google ka ba? Kasi, nasa iyo ang lahat ng hinahanap ko.",
        "Apoy ka ba? Kasi ‘alab’ you",
        "Para kang traffic sa EDSA! ‘Coz I just can’t move on!",
        "Ice ka ba? Crush kita eh.",
        "Para kang tindera ng sigarilyo. You give me ‘hope’ and ‘more’…",
        "Calculator ka ba? Kasi, sa ‘yo pa lang, solved na ko.",
        "Keyboard ka ba? Kasi type kita.",
        "Pustiso ka ba? ‘Coz I can’t smile without you.",
        "Kung posporo ka at posporo ako, eh di, match tayo!",
        "When you put your arms around me, you let me know there's nothing in this world I can't do",
        "Your love is better than ice cream.",
        "Take me to your heart, for it's there that I belong.",
        "Some day, when I'm awfully low, when the world is cold, I will feel a glow just thinking of you and the way you look tonight.",
        "At last...my love has come along. My lonely days are over. And life is like a song.",
        "Here's to you, the one that always pulls us through, always do what you gotta do. You're one of a kind. Thank God you're mine.",
        "You fill my life with laughter, and somehow you make it better... Ease my troubles, that's what you do.",
        "Hit me like a ray of sun burning through my darkest night. You're the only one that I want. Think I'm addicted to your light.",
        "At first, I thought it was infatuation...but, oh, it's lasted so long. Now, I find myself wanting to marry you, and take you home...",
        "You’re my downfall, you’re my muse\nMy worst distraction, my rhythm and blues\nI can’t stop singing, it’s ringing, in my head for you",
        "I’m so in love with you\nAnd I hope you know\nDarling your love is more than worth its weight in gold\nWe’ve come so far my dear\nLook how we’ve grown\nAnd I wanna stay with you until we’re grey and old\nJust say you won’t let go",
        "I want to stand with you on a mountain\nI want to bathe with you in the sea\nI want to lay like this forever\nUntil the sky falls down on me",
        "I promise you,\nFrom the bottom of my heart…\nI will love you,",
        "Til’ death do us part…\nAs a lover and a friend,\nI will love you like I never love again.",
        "You were my strength when I was weak\nYou were my voice when I couldn’t speak\nYou were my eyes when I couldn’t see\nYou saw the best there was in me\nLifted me up when I couldn’t reach\nYou gave me faith ’cause you believed\nI’m everything I am\nBecause you loved me.",
        "I’ve got sunshine on a cloudy day <br> When it’s cold outside, I’ve got the month of May",
        "I guess you’d say, ‘What can make me feel this way?<br>’ My girl, my girl, my girl. Talkin’ ’bout my girl. My girl.",
        "We can talk all night, we can talk all day, <br> We can play charades when there is nothing to say. <br> You turn me on to the idea of growing old.",
        "So tonight I’ll ask the stars above <br> “How did I ever win your love?”  <br> What did I do? What did I say To turn your angel eyes my way?",
        "You know our love was meant to be <br> The kind of love that lasts forever <br> And I want you here with me <br> From tonight until the end of time",
        "They say that the road ain’t no place to start a family <br> Right down the line it’s been you and me <br> And lovin’ a music man ain’t always what it’s supposed to be <br> Oh, girl, you stand by me <br> I’m forever yours",
        "And your heart’s against my chest, <br> your lips pressed to my neck <br> I’m falling for your eyes, but they don’t know me yet <br> And with a feeling I’ll forget, <br> I’m in love now.",
        "I don’t know how you do what you do <br> I’m so in love with you <br> It just keeps getting better <br> I want to spend the rest of my life with you by my side <br>Forever and ever",
        "I love to love you baby<br>When you’re laying so close to me<br>There’s no place I’d rather you be than with me…",
        "And I want to wake up with the rain<br>Falling on a tin roof<br>While I’m safe there in your arms<br>So all I ask is for you<br>To come away with me in the night<br>Come away with me.",
        "I have died every day waiting for you<br>Darling, don’t be afraid<br>I have loved you for a thousand years<br>I’ll love you for a thousand more.",
        "And darling I will be loving you ’til we’re 70<br>And baby my heart could still fall as hard at 23<br>And I’m thinking ’bout how people fall in love in mysterious ways<br>Maybe just the touch of a hand<br>Oh me I fall in love with you every single day<br>And I just wanna tell you I am.",
        "“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more",
        "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
        "The best thing to hold onto in life is each other",
        "I need you like a heart needs a beat.",
        "I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.",
        "If I had a flower for every time I thought of you... I could walk through my garden forever.",
        "Take my hand, take my whole life too. For I can’t help falling in love with you.",
        "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you",
        "You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.",
        "I will never stop trying. Because when you find the one... you never give up.",
        "It’s always better when we’re together.",
        "I love you for all that you are, all that you have been and all that you will be.",
        "I wasn’t expecting you. I didn’t think that we would end up together. The single most extraordinary thing I’ve ever done with my life is fall in love with you. I’ve never been seen so completely, loved so passionately and protected so fiercely.",
        "To the world you may be one person, but to one person you are the world.",
        "Two are better than one.",
        "I’ve tried so many times to think of a new way to say it, and it’s still I love you.",
        "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
        "I hope you keep on smiling even in bad times my tough wife",
        "You've always been my light and my shield",
        "Thank you for everything my babe",
        "Laag nya ta dabon sunod <3",
        "Ikaw og Ikaw lang gihapon hantod sa hantod",
        "My love, my heart, my everything. I love you",
        "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches",
        "I've never had a moment's doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.",
        "You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on",
        "I love you more than I have ever found a way to say to you.",
        "I do know some things. I know I love you. I know you love me.",
        "I love you the way a drowning man loves air. And it would destroy me to have you just a little.",
        "Thank you for making me the happiest!",
        "So, I love you because the entire universe conspired to help me find you.",
        "Storm clouds may gather and stars may collide, but I love you until the end of time.",
        "Whatever happens tomorrow, or for the rest of my life, I'm happy now…because I love you.",
        "I love you. I knew it the minute I met you. I'm sorry it took so long for me to catch up. I just got stuck.",
        "I can always find you amongst the crowd <3",
        "Loving you makes me sleep peacefully at night",
        "For all the things my hands have held, the best by far is you.",
        "You think you're one of millions but you're one in a million to me.",
        "But the you who you are tonight is the same you I was in love with yesterday, the same you I'll be in love with tomorrow.",
        "Aking sinta, ikaw na ang tahanan at mundo.",
        "Wala naman na kong hiling pa bastat kasama ka habang buhay na.",
        "Tumingin ka sa aking mga mata at hindi mo na kailangan pang magtanong nang paulit–ulit. Ikaw lang ang iniibig",
        "Pinapawi lahat ng iyong mga ngiti.",
        "Ikaw ang tanging gustong pagmasdan",
        "Paninindigan kita, oo. Mamahalin kitang buong buo. ",
        "Tulad ng mundong hindi tumitigil sa pag-ikot, pag-ibig (ko’y) di mapapagod.",
        "Alam kong kailan lang tayo nagkatagpo ngunit parang sa ‘yo ayaw nang lumayo.",
        "Gusto ko lamang sa buhay ay yakapin mo ako.",
        "Ibubuhos ko ang buong puso ko sa isang munting harana para sa ‘yo.",
        "Ang mundo ay papanaw din ngunit hindi ang aking puso; ngunit hindi ang pag-ibig ko sa ‘yo.",
        "Thank You for loving me, my love",
        "You changed my life for the better",
        "A Happy wife is a Happy Life lagi HAHHAHAH",
        "There's no one else like you",
        "Nabibighani ako sa taglay mong ganda",
        "Time will come that your dreams and plans will come true, you will always have my support my love",
        "I know you are bound to greatness my love",
        "I love you with all my heart",
        "Even if dugay nata, im still amazed how our crazy relationship is created",
        "I love you Pangga",
        "Kaon ka daghan ha mapa breakfast, lunch and dinner. Always take care of yourself",
        "ALways ka mag amping ha, especially na nag immersion ka",
        "Bear with it for now, you will be successful someday. Laban Pangga",
        "You always makes my day crazy, Gorgeous",
        "Any flower you put in your ear looks beautiful on you",
        "I wish you the best on everything",
        "You'll make it, trust me",
        "I'll be with you in ups and downs",
        "Smile, for the world can't give it to you",
        "I am always here",
        "I love you my pachichay",
        "Ikaw naba ang icing sa ibabaw ng cupcake ko?",
        "Wishing all our dreams come true",
        "Its us against the world",
        "You will never be alone",
        "I love you even in sunshine and rain",
        "I love how you do crazy stuffs when we eat",
        "To you my love, everything is more than enough",
        "Cook me Fried rice sa ato home pweassee hehe",
        "Can't wait ako ma cook for youu",
        "Wakey Wakey Sunshine, Start your day with a smile, I love you <3",
        "Trust the process my love <3",
        "My teanie tiny evil sweetheart",
        "Always take care, unsaon nalang kung wala ka inig kasal",
        "I love you my Baby",
        "You're the cutest and most annoying girlfriend",
        "I'll teach you how to swin basta di lang ka mahadlok AHHAHHA",
        "Wakey wakey bahog lubot",
        "I love you honey",
        "Good morning My little Villainess",
        "There's no day na di ko ma sipok sa imo but i still love you",
        "Thank you for everything my Angel",
        "What's on your mind today, i hope your doing well. ILY<3",
        "Lets have a date nya puhon puhon my babi",
        "You deserve an ice cream sa init nimo na ulo HAHAHA",
        "Sorry for messing up, im sorry",
        "I miss you sweetheart"
        

        
        
    ];

    if (days == 16) {
        quote.innerHTML = annivMaker();
        quote.style.transform =
            "translate" + "(" + -50 + "%" + "," + -180 + "%" + ")";
        floatSticker.style.background = `url(\"pictures/calendar.png\") center fixed no-repeat`;
        floatSticker.style.backgroundSize = "contain";
        floatSticker1.style.background = `url(\"pictures/hearts.png\") center fixed no-repeat`;
        floatSticker1.style.backgroundSize = "contain";
        directMessage.style.display = "block";
        carousel.style.display = "block";
        message.style.display = "block";
        document.body.style.background = `url(\"pictures/day4.jpg\") no-repeat center fixed`;
        document.body.style.backgroundSize = "cover";
        

    } else if (month == 2 - 1 && days == 14) {
        document.body.style.backgroundImage = `url(\"pictures/valentines.jpg\")`;
        directMessage.style.display = "none";
        
        
    } else if (month == 2 - 1 && days == 13) {
        directMessage.style.display = "none";
        quote.innerHTML =
        "Kay Impatient man kang Dako so yeah, I will be your Valentine";
        dayAndNightBackground(iPic);


    } else {
        directMessage.style.display = "none";
        message.style.display = "none";
        quote.innerHTML = quotes[daily_quote];
        dayAndNightBackground(iPic);
    }

    
// Making the Anniversary and Monthsarry Greetings
    function annivMaker(){
        let numYear = date.getFullYear() - 2017 ;
        let anniversary = 7;
    
        if((month + 1) < anniversary){
            let monthS = (12-7) + (month + 1);
            numYear-= 1;
            let show = `Happy ${numYear}.${monthS}th Monthsarry Sweetheart`; 
            return show;
        }
        
        else if ((month + 1) === anniversary){
            let show = `Happy ${numYear}th Anniversary Sweetheart`;
            return show;
        }
        else {
            let monthS = (month + 1) - 7;
            let show = `Happy ${numYear}.${monthS}th Monthsarry Sweetheart`; 
            return show;
        }
    
        return show;
    }
}

function dayAndNightBackground(background_theme) {
    document.body.style.background = `url(\"pictures/day${background_theme}.jpg\") no-repeat center fixed`;
    document.body.style.backgroundSize = "cover";
    // if(hours > 6 && hours < 18){
    //     document.body.style.background= `url(\"pictures/night${background_theme}.jpg\") no-repeat center fixed`;
    // }
    // else{
    // }
}

function analyzeText() {

    // Get the text entered by the user
    const text =
        document.getElementById("textInput").value.trim();


    // Check if text is empty
    if (text === "") {

        alert("Please enter some text first! 😭");

        return;
    }


    // --------------------------------
    // BASIC TEXT ANALYSIS
    // --------------------------------

    const lowerText =
        text.toLowerCase();


    // Count words
    const words =
        text.split(/\s+/).length;


    // Count sentences
    const sentences =
        text.split(/[.!?]+/).filter(Boolean).length;


    // --------------------------------
    // HUMOR
    // --------------------------------

    const funnyWords = [
        "lol",
        "haha",
        "😂",
        "😭",
        "lmao",
        "funny",
        "joke",
        "🤣",
        "💀"
    ];


    let humor = 0;


    funnyWords.forEach(function(word) {

        if (lowerText.includes(word)) {

            humor += 15;

        }

    });


    humor = Math.min(humor, 100);


    // --------------------------------
    // EMOTION
    // --------------------------------

    const emotionWords = [
        "love",
        "hate",
        "happy",
        "sad",
        "excited",
        "angry",
        "amazing",
        "terrible",
        "😭",
        "❤️",
        "🔥",
        "awesome"
    ];


    let emotion = 0;


    emotionWords.forEach(function(word) {

        if (lowerText.includes(word)) {

            emotion += 10;

        }

    });


    emotion = Math.min(emotion, 100);


    // --------------------------------
    // COMPLEXITY
    // --------------------------------

    let complexity = 20;


    if (words > 15) {
        complexity += 20;
    }

    if (words > 30) {
        complexity += 20;
    }

    if (words > 50) {
        complexity += 20;
    }


    complexity = Math.min(
        complexity,
        100
    );


    // --------------------------------
    // READABILITY
    // --------------------------------

    let readability = 90;


    if (words > 30) {
        readability -= 15;
    }

    if (words > 60) {
        readability -= 20;
    }


    readability = Math.max(
        readability,
        20
    );


    // --------------------------------
    // DRYNESS
    // --------------------------------

    let dryness = 70;


    // Less dry if humorous
    dryness -= humor * 0.3;


    // Less dry if emotional
    dryness -= emotion * 0.2;


    // Longer complicated text is usually drier
    dryness += complexity * 0.2;


    // Formal words increase dryness
    const formalWords = [
        "dear",
        "students",
        "please",
        "regarding",
        "hereby",
        "therefore",
        "accordingly",
        "notice",
        "meeting",
        "scheduled",
        "commence",
        "attendance"
    ];


    formalWords.forEach(function(word) {

        if (lowerText.includes(word)) {

            dryness += 5;

        }

    });


    // Keep score between 0 and 100
    dryness = Math.round(
        Math.max(
            0,
            Math.min(100, dryness)
        )
    );


    // --------------------------------
    // ENGAGEMENT
    // --------------------------------

    let engagement =
        100 - dryness;


    engagement = Math.max(
        0,
        Math.min(100, engagement)
    );


    // --------------------------------
    // SHOW RESULTS
    // --------------------------------

    document.getElementById(
        "drynessScore"
    ).textContent =
        dryness + "%";


    document.getElementById(
        "drynessBar"
    ).style.width =
        dryness + "%";


    document.getElementById(
        "humor"
    ).textContent =
        humor + "%";


    document.getElementById(
        "emotion"
    ).textContent =
        emotion + "%";


    document.getElementById(
        "complexity"
    ).textContent =
        complexity + "%";


    document.getElementById(
        "readability"
    ).textContent =
        readability + "%";


    document.getElementById(
        "engagement"
    ).textContent =
        engagement + "%";


    // --------------------------------
    // FUNNY VERDICT
    // --------------------------------

    let verdict;


    if (dryness >= 85) {

        verdict =
            "This text has the emotional energy of a PDF. 💀";

    }

    else if (dryness >= 70) {

        verdict =
            "We're entering the emotional desert. 🏜️";

    }

    else if (dryness >= 50) {

        verdict =
            "A little dry. Someone bring the seasoning. 🧂";

    }

    else if (dryness >= 30) {

        verdict =
            "Not bad! There is some personality in there. 😎";

    }

    else {

        verdict =
            "🔥 This text is actually alive. Respect.";

    }


    document.getElementById(
        "verdict"
    ).textContent =
        verdict;


    // --------------------------------
    // SUGGESTED VERSION
    // --------------------------------

    let improvedText;


    if (dryness >= 70) {

        improvedText =
            "🔥 Quick reminder! " +
            text +
            " — You've got this! 😭";

    }

    else {

        improvedText =
            "✨ " +
            text +
            " — Let's make it even more interesting!";

    }


    document.getElementById(
        "improvedText"
    ).textContent =
        improvedText;


    // Show results
    document.getElementById(
        "results"
    ).classList.remove("hidden");


    // Scroll to results
    document.getElementById(
        "results"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// =================================
// COPY BUTTON
// =================================

function copyText() {

    const text =
        document.getElementById(
            "improvedText"
        ).textContent;


    navigator.clipboard.writeText(text);


    alert(
        "Copied! ✨"
    );

}
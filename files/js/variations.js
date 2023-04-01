let fabricH1Top = 0
let fabricH1TopMargin = 10

let fabricH1left = 0
let fabricH1LeftMargin = 6.5 * 2

let fabricPTop = 0
let fabricPTopMargin = 10


let fabricMoveFactor = 6.5
let fabricMargin = 6.5 * 2

let textSample1 = "Under mötet kommer vi att diskutera hur vi kan ta hand om vår trädgård på bästa sätt. Trädgården på BO100 är en av våra största tillgångar, och vi vill se till att den är en plats där vi kan njuta och koppla av. Vi kommer att diskutera olika förbättringar som kan göras, såsom plantering av nya blommor eller träd, skötsel av gräsmattan och underhåll av trädgårdsredskap."

let textSample2 = "Under mötet på BO100 kommer vi också att diskutera hur vi kan planera och organisera evenemang för alla som bor på BO100. Det kan vara allt från fester och grillkvällar till gemensamma städdagar och andra aktiviteter. Genom att engagera oss i sådana gemensamma aktiviteter kan vi lära känna varandra bättre och skapa en starkare gemenskap på BO100."

let textSample3 = "Under mötet på BO100 kommer vi också att diskutera hur vi kan ta hand om våra gemensamma utrymmen, såsom trapphuset och tvättstugan. Dessa utrymmen används dagligen av alla hyresgäster på BO100, och det är viktigt att de är rena och väl underhållna för att skapa en trivsam miljö för alla. Tillsammans ansvarar vi för att upprätthålla BO100 som Malmös bästa bostadshus."

let h2Sample = "Under mötet kommer vi diskutera hur vi tillsammans kan göra vårt hem ännu bättre. Vi välkomnar alla familjer som bor på BO100 att delta i diskussionen och dela sina tankar och idéer. Vi kommer att diskutera olika ämnen som kan påverka vår gemenskap, såsom underhåll av trädgården, förbättringar i lägenheterna och organisation av gemensamma aktiviteter."

function Template(h1Left, h1Top, h2Left, h2Top, p1HLeft, p1HTop, p1Left, p1Top, p2HLeft, p2HTop, p2Left, p2Top, p3HLeft, p3HTop, p3Left, p3Top, title) {
    this.h1 = [h1Left, h1Top];
    this.h2 = [h2Left, h2Top];
    this.p1H = [p1HLeft, p1HTop];
    this.p1 = [p1Left, p1Top];
    this.p2H = [p2HLeft, p2HTop];
    this.p2 = [p2Left, p2Top];
    this.p3H = [p3HLeft, p3HTop];
    this.p3 = [p3Left, p3Top];
    this.title = title
}

let layout1 = new Template(
    fabricMargin - 6.5,
    fabricMargin,

    fabricMoveFactor * 48,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor * 64,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor * 66,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor * 64,
    110 + fabricMargin * 3,

    fabricMoveFactor * 66,
    110 + fabricMargin * 3,

    fabricMoveFactor * 64,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 66,
    220 + fabricMargin * 4.5,

    "BO100\nMöte\n7/5 19:00"
)

let layout2 = new Template(
    fabricMargin * 20,
    fabricMargin,

    fabricMoveFactor,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor * 64,
    5000 + fabricMargin * 4.5,

    fabricMoveFactor * 66,
    5000 + fabricMargin * 4.5,

    fabricMoveFactor * 30,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 32,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 52,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 54,
    220 + fabricMargin * 4.5,

    "BO100\nMöte\n7/5 19:00"
)

let layout3 = new Template(
    fabricMargin * 20,
    fabricMargin,

    fabricMoveFactor,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor * 20,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 22,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 42,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 44,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 64,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 66,
    220 + fabricMargin * 4.5,

    "Att\nbo i\nhuset"
)

let layout4 = new Template(
    fabricMargin * 20,
    fabricMargin,

    fabricMoveFactor * 25,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor + fabricMargin,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor + fabricMargin + fabricMargin,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor + fabricMargin,
    110 + fabricMargin * 3,

    fabricMoveFactor + fabricMargin + fabricMargin,
    110 + fabricMargin * 3,

    fabricMoveFactor + fabricMargin,
    220 + fabricMargin * 4.5,

    fabricMoveFactor + fabricMargin + fabricMargin,
    220 + fabricMargin * 4.5,

    "Att\nbo i\nhuset"
)

let layout5 = new Template(
    fabricMargin * 27.5,
    fabricMargin,

    fabricMoveFactor * 69,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor + fabricMargin,
    220 + fabricMargin * 4.5,

    fabricMoveFactor + fabricMargin + fabricMargin,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 25,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 27,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 47,
    220 + fabricMargin * 4.5,

    fabricMoveFactor * 49,
    220 + fabricMargin * 4.5,

    "BO100"
)

let layout6 = new Template(
    fabricMargin - 6.5,
    fabricMargin,

    fabricMoveFactor * 15,
    fabricMargin + (fabricMargin / 2),

    fabricMoveFactor * 64,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor * 66,
    fabricMoveFactor + fabricMargin,

    fabricMoveFactor * 64,
    5000 + fabricMargin * 3,

    fabricMoveFactor * 66,
    5000 + fabricMargin * 3,

    fabricMoveFactor * 64,
    5000 + fabricMargin * 4.5,

    fabricMoveFactor * 66,
    5000 + fabricMargin * 4.5,

    "BO100"
)


let layoutArr = [layout1, layout2, layout3, layout4, layout5, layout6]
let randomNumber = Math.floor(Math.random() * (layoutArr.length - 1))


let h1
let h2
let pH
let p
let p2H
let p2
let p3H
let p3


function generateLayout() {
    h1 = new fabric.Textbox(layoutArr[randomNumber].title, {
        fontFamily: "Inter",
        fontSize: 100 * .8,
        width: $("#fabric-container").width() - fabricMargin * 3,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        padding: -10,
        top: layoutArr[randomNumber].h1[0],
        left: layoutArr[randomNumber].h1[1],
    })

    h2 = new fabric.Textbox(h2Sample, {
        fontFamily: "Inter",
        fontSize: 16 * .65,
        width: $("#fabric-container").width() - fabricMargin * 4.5,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].h2[0],
        left: layoutArr[randomNumber].h2[1],
    })

    pH = new fabric.Textbox("Trädgård och utemiljöer", {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p1H[0],
        left: layoutArr[randomNumber].p1H[1],
    })

    p = new fabric.Textbox(textSample1, {
        fontFamily: "Inter",
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p1[0],
        left: layoutArr[randomNumber].p1[1],
    })

    p2H = new fabric.Textbox("Gemensamma aktiviteter", {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p2H[0],
        left: layoutArr[randomNumber].p2H[1],
    })

    p2 = new fabric.Textbox(textSample2, {
        fontFamily: "Inter",
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p2[0],
        left: layoutArr[randomNumber].p2[1],
    })

    p3H = new fabric.Textbox("Allmänna utrymmen", {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p3H[0],
        left: layoutArr[randomNumber].p3H[1],
    })

    p3 = new fabric.Textbox(textSample3, {
        fontFamily: "Inter",
        fontSize: 10 * .65,
        width: 150 * .65,
        minHeight: 200,
        editable: true,
        lockSkewingY: true,
        lockSkewingX: true,
        top: layoutArr[randomNumber].p3[0],
        left: layoutArr[randomNumber].p3[1],
    })
}

generateLayout()

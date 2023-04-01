$(document).ready(function () {
    $(this).scrollTop(0);
    $("body").css({
        overflow: "hidden",
        opacity: 1
    })
})

$("#machine_start").click(function () {

    createSvgBodies()

    $("body").css({
        overflow: "scroll",
        opacity: 1
    })

    $("#stepOne").get(0).scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(function () {
        $("body").css({
            overflow: "hidden"
        })
    }, 1000)
})

$("#posterStart").click(function () {

    $("body").css({
        overflow: "scroll"
    })

    $("#scrollTo").get(0).scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(function () {
        $("body").css({
            overflow: "scroll"
        })
    }, 1000)
});






var canvasFabric
let canvasContent = []



var canvas = document.querySelector("#matter-container canvas")
var canvasUrl
document.getElementById('posterStart').addEventListener('click', function (e) {


    $("body").css({
        overflow: "scroll",
        opacity: 1
    })

    $("#duplicate").get(0).scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(function () {
        $("body").css({
            overflow: "scroll"
        })
    }, 500)

    canvasUrl = canvas.toDataURL("image/png", 1)
    var background = "img.png"

    canvasFabric = new fabric.Canvas("fabric-canvas", {})
    canvasFabric.setWidth($("#fabric-container").width())
    canvasFabric.setHeight($("#fabric-container").height())


    canvasFabric.setBackgroundImage(canvasUrl, canvasFabric.renderAll.bind(canvasFabric), {
        scaleX: .25,
        scaleY: .25,
    });

    canvasFabric.setBackgroundColor("white", canvasFabric.renderAll.bind(canvasFabric), {
        scaleX: .33,
        scaleY: .33
    });


    gridCreate()

    canvasContent.push(h1)
    canvasContent.push(h2)
    canvasContent.push(pH)
    canvasContent.push(p)
    canvasContent.push(p2H)
    canvasContent.push(p2)
    canvasContent.push(p3H)
    canvasContent.push(p3)

    canvasContent.forEach(function (item, index) {
        canvasFabric.add(item)
        item.setControlsVisibility({
            mt: false,
            mb: false,
            ml: true,
            mr: true,
            rb: true,
            lb: true

        });

    })
    initAligningGuidelines(canvasFabric);


    setTimeout(function () {

        $("body").css({
            overflow: "scroll"
        })

        $("#scrollTo").get(0).scrollIntoView({
            behavior: 'smooth'
        });
    }, 100)

    setTimeout(function () {
        $("body").css({
            overflow: "hidden"
        })
    }, 1100)

});

function startFabric() {


    $("body").css({
        overflow: "scroll",
        opacity: 1
    })

    $("#scrollTo").get(0).scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(function () {
        $("body").css({
            overflow: "hidden"
        })
    }, 500)

    let canvasUrl = canvas.toDataURL("image/png", 1)
    //    var background = new Image();
    var background = "img.png"
    //    background.src = "img.png";

    canvasFabric = new fabric.Canvas("fabric-canvas", {})
    canvasFabric.setWidth($("#fabric-container").width())
    canvasFabric.setHeight($("#fabric-container").height())


    canvasFabric.setBackgroundImage(canvasUrl, canvasFabric.renderAll.bind(canvasFabric), {
        scaleX: 2,
        scaleY: 2
    });


    //
    //$("#fabric-canvas").css({
    //    background: "url(" + canvasUrl + ")",
    //    backgroundPosition: "center",
    //    backgroundSize: "cover"
    //})

    canvasContent.push(h1)
    //    canvasContent.push(h2)
    canvasContent.push(p)
    canvasContent.push(p2)

    canvasContent.forEach(function (item, index) {
        canvasFabric.add(item)
        item.setControlsVisibility({
            mt: false, // middle top disable
            mb: false, // midle bottom
            ml: true, // middle left
            mr: true, // I think you get it
        });

    })
    initAligningGuidelines(canvasFabric);
}

//startFabric()

$("#clear").click(function () {
    canvasFabric.remove(canvasContent[0])

})

document.getElementById('finalDownload').addEventListener('click', function (e) {
    gridLinesArr.forEach(function (item, index) {
        item.visible = false
    })
    isVisible = false

    let canvasUrl = canvasFabric.toDataURL({
        format: 'png',
        multiplier: 10
    })

    const createEl = document.createElement('a')
    createEl.href = canvasUrl

    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '');

    createEl.download = "BILD100_" + utc

    $("body").css({
        overflow: "scroll"
    })

    $(".posterSaved_null").get(0).scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(function () {
        $("body").css({
            overflow: "hidden"
        })

        $(".hero_h2").css({
            opacity: 1
        })
        createEl.click()
        createEl.remove()
    }, 1000)
    //    const dataURL = canvasFabric.toDataURL({
    //        format: 'png',
    //        multiplier: 10
    //    });
    //
    //    const link = document.createElement('a');
    //    link.href = dataURL;
    //    link.download = 'image.png';
    //
    //    document.body.appendChild(link);
    //    link.click();
    //    document.body.removeChild(link);
    //
})

$("#picSave").click(function () {


    let canvasUrl = canvas.toDataURL({
        format: "png",
    })
    const createEl = document.createElement('a')
    createEl.href = canvasUrl


    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '');

    createEl.download = "BILD100_" + utc

    createEl.click()
    createEl.remove()

    $("#stepOne").css({
        marginLeft: "-200vw"
    })
})




$(".restart_button").click(function () {
    location.reload();
})

$("#delete").click(function () {
    Delete()
})

$("#duplicate").click(function () {
    Duplicate()
})


function Delete() {
    var active = canvasFabric.getActiveObject()
    if (active) {
        canvasFabric.remove(active)
        if (active.type == "activeSelection") {
            active.getObjects().forEach(x => canvasFabric.remove(x))
            canvasFabric.discardActiveObject().renderAll()
        }
    }
}

function Duplicate() {
    var active = canvasFabric.getActiveObject();
    if (active) {
        active.clone(function (clone) {
            canvasFabric.add(clone.set({
                left: active.left + 50,
                top: active.top
            }));
        });
    }

}

$("#random").click(function () {
    randomShuffle()
})

let current = randomNumber

function randomShuffle() {
    canvasFabric.clear()

    randomNumber = Math.floor(Math.random() * (layoutArr.length - 1))
    do {
        randomNumber = Math.floor(Math.random() * (layoutArr.length - 1))
    } while (randomNumber == current)
    current = randomNumber
    generateLayout()
    gridCreate()
    canvasContent = []
    canvasContent.push(h1)
    canvasContent.push(h2)
    canvasContent.push(pH)
    canvasContent.push(p)
    canvasContent.push(p2H)
    canvasContent.push(p2)
    canvasContent.push(p3H)
    canvasContent.push(p3)

    canvasFabric.setBackgroundImage(canvasUrl, canvasFabric.renderAll.bind(canvasFabric), {
        scaleX: .25,
        scaleY: .25,
    });

    canvasFabric.setBackgroundColor("white", canvasFabric.renderAll.bind(canvasFabric), {
        scaleX: .33,
        scaleY: .33
    });

    canvasContent.forEach(function (item, index) {
        canvasFabric.add(item)
        item.setControlsVisibility({
            mt: false,
            mb: false,
            ml: true,
            mr: true,
            rb: true,
            lb: true

        });

    })

}

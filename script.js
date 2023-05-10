

var letterSlider = document.getElementById('letter');
letterSlider.addEventListener('input', function letterFunction() {
    var letter = letterSlider.value;
    document.getElementById("editText").style.letterSpacing = letter + "px";
});

var wordSlider = document.getElementById('word');
wordSlider.addEventListener('input', function wordFunction() {
    var word = wordSlider.value;
    document.getElementById("editText").style.wordSpacing = word + "px";
});

var leadingSlider = document.getElementById('leading');
leadingSlider.addEventListener('input', function leadingFuntion() {
    var leading = leadingSlider.value;
    document.getElementById("editText").style.lineHeight = leading + "px";  
});
// console.log("Hello world!");

var fontSizeSlider = document.getElementById('size');
fontSizeSlider.addEventListener('input', function fontSizeFunction() {
    var fontSize = fontSizeSlider.value;
    document.getElementById("editText").style.fontSize = fontSize + "px";
});

var opacitySlider = document.getElementById('textOpacity');
opacitySlider.addEventListener('input', function textOpacityFunction() {
    var textOpacity = opacitySlider.value;
    document.getElementById("editText").style.opacity = textOpacity + "%";
});

var indentSlider = document.getElementById('indentation');
indentSlider.addEventListener('input', function indentationFunction() {
    var indentation = indentSlider.value;
    document.getElementById("editText").style.textIndent = indentation + "px";
});

var fontChange = ["Arial", "Courier", "Georgia", "Times", "akzidenz", "signifier", "gravur", "mondwest", "arialnarrow", "superstudio"];

function randomFont(e) {
    document.getElementById("editText").style.fontFamily = fontChange[Math.floor(Math.random() * fontChange.length)];
};

function verticalText() {
    var content = document.getElementById('editText');
    if (content.style.writingMode = "horizontal-tb") {
        content.style.writingMode = "vertical-rl";
    }
};

function horizontalText() {
    var content = document.getElementById('editText');
 if (content.style.writingMode = "vertical-rl") {
    content.style.writingMode = "horizontal-tb";
    }
};

var columnSlider = document.getElementById('columns');
columnSlider.addEventListener('input', function columnFunction() {
    var columns = columnSlider.value;
    document.getElementById("editText").style.columnCount = columns;
});

function alignCenter() {
    var content = document.getElementById('editText');
    content.style.textAlign = "center";
};

function alignLeft() {
    var content = document.getElementById('editText');
    content.style.textAlign = "left";
};

function alignRight() {
    var content = document.getElementById('editText');
    content.style.textAlign = "right";
};

function alignJustify() {
    var content = document.getElementById('editText');
    content.style.textAlign = "justify";
};

function randomLayout() {

    let lettervalue = document.getElementById("letter").value = Math.floor(Math.random()* 200-100);
    // console.log("yesworked");
    document.getElementById("editText").style.letterSpacing = lettervalue + "px";
    // console.log(lettervalue);
    let wordvalue = document.getElementById("word").value = Math.floor(Math.random()* 200-100);
    document.getElementById("editText").style.wordSpacing = lettervalue + "px";
    // console.log(wordvalue);
    let leadingvalue = document.getElementById("leading").value = Math.floor(Math.random()* 200);
    document.getElementById("editText").style.lineHeight = leadingvalue + "px";
    // console.log(leadingvalue);
    let fontsizevalue = document.getElementById("size").value = Math.floor(Math.random()* 100+4);
    document.getElementById("editText").style.fontSize = fontsizevalue + "px";
    // console.log(fontsizevalue);
    let opacityvalue = document.getElementById("textOpacity").value = Math.floor(Math.random()* 100);
    document.getElementById("editText").style.opacity = opacityvalue + "%";
    // console.log(opacityvalue);
    let indentvalue = document.getElementById("indentation").value = Math.floor(Math.random()* 500);
    document.getElementById("editText").style.textIndent = indentvalue + "px";
    // console.log(indentvalue);
    let fliptextvalue = Math.floor(Math.random()* 10);
    if (fliptextvalue > 5){
        document.getElementById("editText").style.writingMode = "vertical-rl";
    } else if (fliptextvalue < 5)
    {document.getElementById("editText").style.writingMode = "horizontal-tb"};
    // console.log(fliptextvalue);
    let columnvalue = document.getElementById("columns").value = Math.floor(Math.random()* 10+1);
    document.getElementById("editText").style.columnCount = columnvalue;
    // console.log(columnvalue);
    let alignvalue = Math.floor(Math.random()* 4 + 1);
    if (alignvalue == 1){
        document.getElementById("editText").style.textAlign = "center";
        // console.log("center");
    } else if (alignvalue == 2)
    {document.getElementById("editText").style.textAlign = "left";
    // console.log("left");
    } else if (alignvalue == 3)
    {document.getElementById("editText").style.textAlign = "right";
    // console.log("right");
    } else if (alignvalue == 4)
    // console.log("justify");
    {document.getElementById("editText").style.textAlign = "justify"};
    // console.log(alignvalue);
    var fontvalue = ["Arial", "Courier", "Georgia", "Times", "akzidenz", "signifier", "gravur", "mondwest", "arialnarrow", "superstudio"];
    document.getElementById("editText").style.fontFamily = fontvalue[Math.floor(Math.random() * fontChange.length)];
    // console.log(document.getElementById("editText").style.fontFamily);

};

function resetLayout() {
    document.getElementById("editText").style.fontFamily = "auto" ;
    document.getElementById("letter").value = "normal";
    document.getElementById("editText").style.letterSpacing = "normal" ;
    document.getElementById("word").value = "normal";
    document.getElementById("editText").style.wordSpacing = "normal" ;
    document.getElementById("leading").value = "normal";
    document.getElementById("editText").style.lineHeight = "normal" ;
    document.getElementById("size").value = "normal";
    document.getElementById("editText").style.fontSize = "18px" ;
    document.getElementById("textOpacity").value = "100%";
    document.getElementById("editText").style.opacity = "100%" ;
    document.getElementById("indentation").value = "none";
    document.getElementById("editText").style.textIndent = "0" ;
    document.getElementById("editText").style.writingMode = "horizontal-tb" ;
    document.getElementById("editText").style.textAlign = "left";
    document.getElementById("editText").style.columnCount = "1";

    console.log("yex");
}

function plainLayout() {
    document.getElementById("editText").style.fontFamily = "auto" ;
    document.getElementById("letter").value = "normal";
    document.getElementById("editText").style.lineHeight = "normal" ;
    document.getElementById("size").value = "normal";
    document.getElementById("editText").style.fontSize = "18px" ;
    document.getElementById("textOpacity").value = "100%";
    document.getElementById("editText").style.opacity = "100%" ;
};

function previewHide(){
    let hideheader = document.getElementById("header");
    let hideright = document.getElementById("slidertoolcontainer");
    let hideprint = document.getElementById("printbutton");
    let hidereset = document.getElementById("resetbutton");
    let hidecolophon = document.getElementById("colophon");

    hideheader.classList.toggle("noshow");
    hideright.classList.toggle("noshow");
    hideprint.classList.toggle("noshow");
    hidereset.classList.toggle("noshow");
    hidecolophon.classList.toggle("noshow");
};

let pepperParent = document.getElementById("pepper");

function dropPepper(){
    
    const xposition = Math.floor(Math.random()*window.innerWidth);
    const yposition = Math.floor(Math.random()*window.innerHeight);

    let pepperinput = document.getElementById("movetext").value;
    // pepperParent.innerText = pepperinput;

    const p = document.createElement("p");

    p.innerText = pepperinput;
    p.className = "pepper";
    p.style.top = xposition + 'px';
    p.style.left = yposition + 'px';
    // p.style.width = 'fit-content';
    // p.style.writingMode = 'horizontal-tb'
    pepperParent.appendChild(p);
    // console.log(xposition,yposition);
    // console.log(p);
}

function cleanPepper(){
    const collection = pepperParent.children;
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.visibility = "hidden";
      }
    // console.log ("yay");
}



let saltParent = document.getElementById("salt");
function dropSalt(){
    
    const xposition = Math.floor(Math.random()*window.innerWidth);
    const yposition = Math.floor(Math.random()*window.innerHeight);
    const s = document.createElement("span");
    s.innerText = ".";
    s.className = "salt";
    s.idName = 'salt';

    s.style.top = xposition + 'px';
    s.style.left = yposition + 'px';
    saltParent.appendChild(s);
    console.log(s);
}

// var saltSizeSlider = document.getElementById('saltsize');
// saltSizeSlider.addEventListener('input', function saltSizeFunction() {
//     var saltSize = saltSizeSlider.value;
//     const ss = document.getElementsByClassName("salt");
//     ss.idName = 'salt';
//     // document.getElementsByClassName("salt").idName = 'salt';
//     document.getElementById("salt").style.fontSize = saltSize + "px";
//     console.log(ss);
// });

function cleanSalt(){
    const collection = saltParent.children;
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.visibility = "hidden";
      }
    // console.log ("yay");
}


function colophon() {
    var x = document.getElementById("colophontext");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function animate1() {
    document.getElementById("editText").classList.toggle("animate");
    console.log("cool");
  }

  function highlight() {
    document.getElementById("editText").classList.toggle("highlight");
  }

  function underline() {
    document.getElementById("editText").classList.toggle("underline");
  }

  function cut() {

    let message =  document.getElementById("editText").innerText;
    const arr = message.split(' ');
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += "<p>" + arr[i] + "</p>"; 
      }
    console.log(text);

    document.getElementById("editText").innerHTML = text;
    // document.getElementById("editText").classList.toggle("play");
  }

  function stick() {

    let message =  document.getElementById("editText").innerText;
    const arr = message.split(' ');
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += "<span>" + arr[i] + "</span>"; 
      }
    console.log(text);
    // document.getElementById("editText").classList.toggle("play");
    document.getElementById("editText").innerHTML = text;
  }

  function blurtext() {
    let message =  document.getElementById("editText").innerText;
    const arr = message.split(' ');
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += "<span>" + arr[i] + "&nbsp;" + "</span>"; 
      }
    console.log(text);

    document.getElementById("editText").innerHTML = text;
    document.getElementById("editText").classList.toggle("blurtext");
    console.log("blurred");
  }

  function wavytext() {
    let message =  document.getElementById("editText").innerText;
    const arr = message.split(' ');
    let text = "";
    for (let i = 0; i < arr.length; i++) {
        text += "<span>" + arr[i] + "</span>"; 
      }

    document.getElementById("editText").innerHTML = text;
    document.getElementById("editText").classList.toggle("wavytext");
    console.log(text);
  }

//   function blurIt() {
//     console.log("yesssrr");
//     document.getElementById("editText").classList.toggle("blur");
//     // document.getElementById("editText").classList.toggle("play");
//   }
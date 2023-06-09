function OpenForm(){
    let form = document.getElementById("form");
    form.style.display = "block";
}


function LoadImage(index, selector){
    let mainImage = document.querySelector("." + selector + " .main-image img");
    let locationImage = document.querySelectorAll("." + selector + " .list-selected li img");

    mainImage.setAttribute("src", locationImage[index].src);
    mainImage.setAttribute("indexLocation", index);
}


function LoadText(index, selector){
    let mainText = document.querySelectorAll("." + selector + " .text-to-image");
    let locationText = document.querySelectorAll("." + selector + " .text-to-select")[index];
    
    for(let i = 0; i < mainText.length; i++){
        let tempM = mainText[i].firstChild;
        let tempL = locationText.firstChild;
        
        while(tempL != null){
            tempM.textContent = tempL.textContent;
            tempM = tempM.nextSibling;
            tempL = tempL.nextSibling;
        }
    }
}


function OpenSelectedBlock(index, nameSelector){
    LoadImage(index, nameSelector);
    LoadText(index, nameSelector);
}


function LoadWorld(nameWorld){
    let listWorlds = document.querySelectorAll(".list-location ul");
    for(let i = 0; i < listWorlds.length; i++){
        listWorlds[i].style.display = "none";
    }

    let selectedWorld = document.querySelector('.' + nameWorld);
    selectedWorld.style.display = "flex";

    let numberWorld = parseInt(nameWorld.slice(-1));
    let countLocation = 4;
    let indexFirstLocation = (numberWorld * countLocation) - countLocation;
    OpenSelectedBlock(indexFirstLocation, "previw-world");
}


function GoNextImage(index){
    let flexElements = Array.from(document.querySelectorAll(".list-location ul")).filter(elem => window.getComputedStyle(elem).display === "flex")[0];
    let mainImage = document.querySelector(".previw-world .main-image img");


    let indexLocation = parseInt(mainImage.getAttribute("indexLocation"));
    let numberWorld = parseInt(flexElements.classList[0].slice(-1));
    let countLocation = 4;
    let firstLocation = (numberWorld * countLocation) - countLocation;


    if(index + indexLocation === (numberWorld * countLocation))
        OpenSelectedBlock(firstLocation, "previw-world");
    else if(index + indexLocation < firstLocation)
        OpenSelectedBlock(firstLocation + countLocation - 1, "previw-world");
    else
        OpenSelectedBlock(index + indexLocation, "previw-world");
}


LoadWorld("alpha-1");
OpenSelectedBlock(0, 'previw-world');
OpenSelectedBlock(0, 'character-info');
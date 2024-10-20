var photos = ["boy", "cat", "rower", "squirrel", "wtc"];
let ul = document.getElementById("ul");
let li_list = ul.children;
// console.log(li_list);

let obrazek = document.querySelector("img");
let main = document.querySelector("main");
let index = 0;

function changePhoto(ind)
{
    li_list[index].style.fontSize = "18px";
    if(ind > photos.length-1)
    {
        index = 0;
    }
    else
    {
        index = ind;
    }
    li_list[index].style.fontSize = "24px";
    obrazek.setAttribute("src", `./images/${photos[index]}.jpg`);
}

function showNext() {
    li_list[index].style.fontSize = "18px";
    if(index < photos.length-1)
    {
        index++;
    }
    else
    {
        index = 0;
    }
    
    li_list[index].style.fontSize = "24px";
    obrazek.setAttribute("src", `./images/${photos[index]}.jpg`);
    // console.log(photos[index]);
}

let photosInterval = setInterval(function(){
    changePhoto(index+1);
}, 1500);

let flaga = true;
obrazek.addEventListener("click", function()
{
    if(flaga)
    {
        clearInterval(photosInterval);
        let p = document.createElement("p");
        p.innerText = "Pause";
        main.appendChild(p);
        setTimeout(function(){
            $("main p").fadeOut(500);
        },500);
        flaga = false;
    }
    else
    {
        photosInterval = setInterval(function(){
            changePhoto(index+1);
        }, 1500);
        let p = document.createElement("p");
        p.innerText = "Play";
        main.appendChild(p);
        setTimeout(function(){
            $("main p").fadeOut(500);
        },500);
        flaga = true;
    }
});

document.querySelectorAll("li").forEach((li) => li.addEventListener("click", function(){
    // index = parseInt(this.innerText) - 1;
    changePhoto(parseInt(this.innerText) - 1);
}));
btn.addEventListener("click", function(){
    let t = document.createElement("div");
    let te = document.createElement("p");
    te.innerHTML = task.value;
    
    let tick = document.createElement("img");
    tick.setAttribute("src","tick.png");
    tick.setAttribute("class","done");
    let ed = document.createElement("img");
    ed.setAttribute("src","pencil.png");
    ed.setAttribute("class","edit");
    t.appendChild(te);
    t.appendChild(tick);   
    t.appendChild(ed);   
    
    container.appendChild(t);
    
    
})

$(".done").addEventListener("click", function(){
    
 console.log("fsafsd");
    
})
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
    update();
    container.appendChild(t);
    update();
    
});

function update(){
    $(".done").click(function(){
        if($(this).attr("src")=="tick.png"){
            $(this).attr("src", "untick.png");
            $(this).parent().children().css("text-decoration", "line-through")
        }
        else{
            $(this).attr("src", "tick.png");
            $(this).parent().children().css("text-decoration", "none")
        }

    });
    
    $(".edit").click(function(){
       let info = prompt("Edytuj zadanie: ");
       $(this).parent().children().text(info);
    });
}








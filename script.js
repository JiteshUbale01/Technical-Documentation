function myItems() {
    var i=document.getElementById("menu-items");
    var intro=document.getElementById("Introduction");

    if(i.style.display==="block"){
        i.style.display="none";
        intro.style.marginTop="55px";
    }
    else{
        i.style.display="block";
        intro.style.marginTop="45rem";
        
    }

}


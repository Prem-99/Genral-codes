(function () { 
    let table = document.querySelector("#main-table");
    let element = document.querySelector("#main-table tr"); 
    
    element.style.backgroundcolor = "green" ;
    let allColumns = document.querySelectorAll("#main-table td");
   
    for(const elm of allColumns) {
       elm.style.color = "red";
       elm.style.backgroundcolor = "yellow";
    }
    let allheading = table.querySelectorAll("#main-table tr > .col-head");
    for (const elm of allHeading) {
       elm.style.fontSize = "22px";
    }
   
   }
   )();

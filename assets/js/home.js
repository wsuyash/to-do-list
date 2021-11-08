// Different Colors for different categories
var categories = $('.task-category').parent();
for(let i = 0; i < categories.length; i++) {
    if(categories[i].innerText === "PERSONAL") {
        categories[i].style.backgroundColor = "indigo";
    }else if(categories[i].innerText === "WORK") {
        categories[i].style.backgroundColor = "darkblue";
    }else if(categories[i].innerText === "SCHOOL"){
        categories[i].style.backgroundColor = "darkgreen";
    }else if(categories[i].innerText === "LEISURE"){
        categories[i].style.backgroundColor = "darkcyan";
    }else if(categories[i].innerText === "MISC"){
        categories[i].style.backgroundColor = "darkorange";
    }
}

// Change Color of Task Details when checkbox checked and unchecked
function colorTaskDetails() {
    var taskDetails = $('.task-details');
    var taskDetailsLeft = $('.task-details-left');
    for(let i = 0; i < taskDetailsLeft.length; i++) {
        if(taskDetailsLeft[i].firstElementChild.checked){
            taskDetails[i].style.backgroundColor = "lightgreen";
        }else {
            taskDetails[i].style.backgroundColor = "";
        }
    }
}
$('.checkbox').change(colorTaskDetails);
// Get the current date
var TodayDate = new Date();

// Format the date as "Day, Month Date, Year"
var options = { weekday: 'long', day: 'numeric', month: 'long'};
var Date = TodayDate.toLocaleDateString('en-US', options);

// Display the date in the paragraph with id="date"
document.getElementById('date').textContent = Date;



function remove(event) {
    if (event.target.value == "Add a task") {
        event.target.value = "";
    }
}

// Update

var result = document.getElementById("result");
function tasks(event) {
    if (event.key === 'Enter') {
        var items = document.createElement("li");  
        items.textContent = event.target.value;
        items.onclick = strikethrough;
        result.appendChild(items);
        event.target.value = ' ';
    }
}

    function strikethrough(event) {
        event.target.classList.toggle("strike")
    }



    function tasks(event) {
        if (event.key === 'Enter') {
            var items = document.createElement("li");  
            items.textContent = event.target.value;
            items.onclick = strikethrough;
    
            // Create a trash icon
            var trashIcon = document.createElement("span");
            trashIcon.classList.add("trash-icon");
            trashIcon.innerHTML = "&times;"; // Unicode for 'x'
    
            // Append the trash icon to the list item
            items.appendChild(trashIcon);
    
            // Add event listener to the trash icon
            trashIcon.onclick = function() {
                items.remove();
            };
    
            document.getElementById('result').appendChild(items);
            event.target.value = ' ';
        }
    }
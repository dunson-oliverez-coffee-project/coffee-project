(function () {

    "use strict"


// TABLE DISPLAY. SHOWS FILTERED COFFEES BY ROAST SELECTION//
    function renderCoffee(coffee) {
        var html = '<tr class="coffee">';
        html += '<td>' + coffee.id + '</td>';
        html += '<td>' + coffee.name + '</td>';
        html += '<td>' + coffee.roast + '</td>';
        html += '</tr>';

        var html = "<div class='coffee'>";
        var html = "<div class= 'coffee d block col-4 mx-auto p-auto'>"
        html += '<p>' + coffee.name + '</p>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';
        return html;
    }
<<<<<<< HEAD
    return html;
}


let searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', searchCoffees);

function searchCoffees(){
    let searchValue = searchInput.value.toLowerCase();
    let filteredCoffees = coffees.filter(function(coffee){
        return coffee.name.toLowerCase().includes(searchValue);
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if(selectedRoast === "all"){
        filteredCoffees = coffees
    }else{
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// ADDED ALL COFFEES TO 'ALL' OPTION
=======
        function renderCoffees(coffees) {
        var html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }
>>>>>>> 6b5764e2bfbcc838655f44454769c0441d9b63a3


    let searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('input', searchCoffees);

    function searchCoffees() {
        let searchValue = searchInput.value.toLowerCase();
        let filteredCoffees = coffees.filter(function (coffee) {
            return coffee.name.toLowerCase().includes(searchValue);
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }


    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];


    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');


    tbody.innerHTML = renderCoffees(coffees);
    submitButton.addEventListener('click', updateCoffees);


})();
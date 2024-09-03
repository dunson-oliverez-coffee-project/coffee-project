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

    function renderCoffees(coffees) {
        var html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }


    //  search by roast selection (dropdown)
    // let searchInput = document.querySelector('#search-input');
    // searchInput.addEventListener('input', updateCoffees);
    // searchInput.addEventListener('keyup', updateCoffees);



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
        var searchInput = searchInput.value;
        var filteredCoffees = [];

        // give searchinput a value


        console.log(selectedRoast);
        if(selectedRoast === "all"){
            filteredCoffees = coffees
        }else {
            coffees.forEach(function (coffee) {
                if (coffee.roast == selectedRoast) {
                    filteredCoffees.push(coffee);
                }
            });
        }

        tbody.innerHTML = renderCoffees(filteredCoffees);

        console.log(filteredCoffees)
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
    submitButton.addEventListener('click', updateCoffees);
    let searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('keyup', updateCoffees);
    console.log(searchInput.value);

    var roastSelection = document.querySelector('#roast-selection');

roastSelection.addEventListener('input', updateCoffees)

    tbody.innerHTML = renderCoffees(coffees);
    // submitButton.addEventListener('click', updateCoffees);

    let nameAdd = document.querySelector('#add-name');
    let coffeeAdd = document.querySelector('#add-coffee');


    // SERACH BY INPUT

    // // roastSearch -> coffee name
    // console.log(roastSearch);
    // roastSearch.addEventListener('keyup', searchCoffee);

    function addCoffee() {
        console.log('addCoffee fn triggered');
        console.log(nameAdd.value);
        if (nameAdd.value == '') {
        } else {
            let name = nameAdd.value;
            // let roast = document.querySelector('#add-roast').value;
            let roast = coffeeAdd.value;
            console.log(roast);
            let id = coffees.length + 1;
            let coffeeObj = {'id': id, 'name': name, 'roast': roast};
            coffees.push(coffeeObj);
            localStorage.setItem('coffees', JSON.stringify(coffees));
        }
    }
let submitButton1 = document.querySelector('#submit1');
    console.log('submitButton1: ', submitButton1);
    submitButton1.addEventListener('click', function (e) {
        e.preventDefault();
        addCoffee();
        updateCoffees(e);
    });

    let clearButton = document.querySelector('#submit2');
    clearButton.addEventListener('click', function () {
        localStorage.clear();
        updateCoffees();
    })


})();
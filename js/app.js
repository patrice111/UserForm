//Form Validation
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
//Clear form - form reset
    function myFunction() {
        document.getElementById("form").reset();
      }
//Get API to populate state & occupation dropdown
    let form = document.getElementsByTagName("form")[0];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form Submitted!");
      });

      let dropdown = document.getElementById('state');
      let occupationDropdown = document.getElementById('occupation');
            
      let defaultOption = document.createElement('option');
      defaultOption.text = 'Choose State';
      
      dropdown.add(defaultOption);
      dropdown.selectedIndex = 0;
      
      const url = 'https://frontend-take-home.fetchrewards.com/form';
      
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      
      request.onload = function() {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          console.log(data)
          let option;
          for (let i = 0; i < data.states.length; i++) {
            option = document.createElement('option');
            option.text = data.states[i].name;
            option.value = data.states[i].abbreviation;
            dropdown.add(option);
          }
          
           for (let i = 0; i < data.occupations.length; i++) {
            option = document.createElement('option');
            option.text = data.occupations[i];
            option.value = data.occupations[i];
            occupationDropdown.add(option);
          }
          
         } else {
          // Reached the server, but it returned an error
        }   
      }
      
      request.onerror = function() {
        console.error('An error occurred fetching the JSON from ' + url);
      };
      
      request.send();
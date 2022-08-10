function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let usernameInput = document.getElementById('username').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tncInput = document.getElementById('tnc').checked
    //console.log(firstNameInput,lastNameInput,usernameInput,cityInput,stateInput,zipInput,tncInput)

    let error = false

    if(firstNameInput.length >= 1){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error = true
    }

    if(lastNameInput.length >= 1){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error = true
    }

    // Conditions- 1) Whether exists(length) 2)Should contain "@" and "." 3)After last . ,there should atleast be 2 characters 4)First character cannot be "@"
    if(usernameInput.length >=1 && usernameInput.includes('@') && usernameInput.includes('.') && usernameInput.lastIndexOf('.') <= usernameInput.length-3 && usernameInput.indexOf('@') != 0){
        document.getElementById('username-valid').style.display='block'
        document.getElementById('username-invalid').style.display='none'
    }
    else{
        document.getElementById('username-invalid').style.display='block'
        document.getElementById('username-valid').style.display='none'
        error = true
    }

    if(cityInput.length >=3){
        document.getElementById('city-valid').style.display='block'
        document.getElementById('city-invalid').style.display='none'
    }
    else{
        document.getElementById('city-invalid').style.display='block'
        document.getElementById('city-valid').style.display='none'
        error = true
    }

    if(stateInput !== 'None'){
        document.getElementById('state-valid').style.display='block'
        document.getElementById('state-invalid').style.display='none'
        // error = true
    }
    else{
        document.getElementById('state-invalid').style.display='block'
        document.getElementById('state-valid').style.display='none'
        error = true
    }

    if(zipInput.length === 6 && !isNaN(parseInt(zipInput)) && zipInput.length === `${parseInt(zipInput)}`.length){
        document.getElementById('zip-valid').style.display='block'
        document.getElementById('zip-invalid').style.display='none'
    }
    else{
        document.getElementById('zip-invalid').style.display='block'
        document.getElementById('zip-valid').style.display='none'
        error = true
    }

    if(tncInput){
        document.getElementById('tnc-invalid').style.display='none'
    }
    else{
        document.getElementById('tnc-invalid').style.display='block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('username').value = ''
        document.getElementById('city').value = ''
        document.getElementById('state').value = 'None'
        document.getElementById('zip').value = ''
        document.getElementById('tnc').checked = false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('username-valid').style.display = 'none'
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('zip-valid').style.display = 'none'
    }
}


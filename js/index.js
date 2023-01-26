
function getUsername(){ return document.querySelector('#input-username').value; }

function getBirthdate(){ return document.querySelector('#input-birthdate').value; }

function getCEP(){ return document.querySelector('#input-cep').value; }

function getEmail(){ return document.querySelector('#input-email').value; }

function getPhone(){ return document.querySelector('#input-phone').value; }


function getConsultType(){ return document.querySelector('#input-consult-type').innerHTML; }

function getConsultDate(){ return document.querySelector('#input-consult-date').value; }

function getConsultTime(){ return document.querySelector('#input-consult-time').value; }

let button = document.querySelector('#button-submit');

button.addEventListener('click', function( event ){


    let userViewer = document.querySelector('#viewer-user');
    let expertViewer = document.querySelector('#viewer-expert');

    userViewer.innerHTML = "<li><p>" + getUsername() + "</p></li>" +
                            "<li><p>" + getBirthdate() + "</p></li>" +
                            "<li><p>" + getCEP() + "</p></li>" +
                            "<li><p>" + getEmail() + "</p></li>" +
                            "<li><p>" + getPhone() + "</p></li>";

    expertViewer.innerHTML = "<li><p>" + "Doutora Jaqueline Freitas" + "</p></li>" +
                            "<li><p>" + "Especialista em psiquiatria" + "</p></li>" +

                            "<li><p>" + getConsultType() + "</p></li>" +
                            "<li><p>" + getConsultDate() + "<span> às " + getConsultTime() + "</span>" + "</p></li>";

});
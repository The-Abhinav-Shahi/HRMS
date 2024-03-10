function menubar() {
    window.location = "index.html";
}

function notifications() {
    alert('You have notifications.');
}

function myAccount() {
    alert('Your account is great.')
}

function homePage() {
    window.location = "index.html";
}

function overViewPage() {
    window.location = "employeeOverViewPage.html";
}

// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });

const menu = document.querySelector('.sidenav')

menu.addEventListener('click', function() {
    expandSidenav()

})

function expandSidenav() {
    document.querySelector('body').classList.toggle('short')
}
// -------------------------------------- Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// -------------------------------------- Toast trigger
const toastTrigger = document.getElementById("liveToastBtn");
const toastLive = document.getElementById("liveToast");

if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLive);

    toast.show();
  });
}

// -------------------------------------- Form trigger
const formBody = document.getElementById("formBody");

const formTrigger = document.getElementById("formbtnsubmit");

formTrigger.addEventListener("submit", (e) => {
  e.preventDefault();
  const modalWindow = document.getElementById("exampleModal");
  var modal = bootstrap.Modal.getInstance(modalWindow);
  modal.hide();
  formBody.value = "";
});

// -------------------------------------- Opens grade tables
function openGrades(evt, chosenYear) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(chosenYear).style.display = "block";
  evt.currentTarget.className += " active";
}

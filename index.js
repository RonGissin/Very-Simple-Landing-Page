const myForm = document.querySelector("#my-form");
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // Prevent form submission
    event.preventDefault();

    alert("Searching for flights...");

    myForm.submit();
}
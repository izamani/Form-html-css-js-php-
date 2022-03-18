const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault(); // Preventing form from submitting
    statusTxt.style.color = "grey";
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); // Creating new xml object
    xhr.open("POST", "message.php", true); // sending post request to message.php file
    xhr.onload = () => { // once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is response
            let response = xhr.response; // storing ajax response in a response variable
            if(response.indexOf("Email and Password field is required") != -1 || response.indexOf("Enter a valid email adress!") != -1 ||response.indexOf("ESorry, failed to send your message")){
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); // creating new Form data obj. this obj is used to send from data
    xhr.send(formData);
}
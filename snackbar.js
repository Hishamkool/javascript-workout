/* snackbar */
function showSnackBar(message, isError = false, duration = 3000) {
    snackBar.textContent = message;
    if (isError == true) {
        snackBar.style.backgroundColor = "red";
        snackBar.style.color = "white";
    } else {
        snackBar.style.backgroundColor = "lightgreen";
        snackBar.style.color = "black";

    }
    snackBar.classList.add("showSnack");
    setTimeout(() => {
        snackBar.classList.remove("showSnack");
    }, duration);
}
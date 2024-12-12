function showProgress() {
    var button = document.getElementById("actionButton");
    var textView = document.getElementById("text");

    textView.style.display = "none";

    progressCircle.classList.remove("hidden");
        setTimeout(function() {
        textView.style.display = "block";
        progressCircle.classList.add("hidden");
    }, 3000); 
}

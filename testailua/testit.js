<script>
    const dropdownButton1 = 
    document.getElementById("dropdown-btn1");
    const showCards1 = 
    document.getElementById("cardsList1");

    showCards1.style.display = "none";

    dropdownButton1.addEventListener("click", (event) =>{
        if (showCards1.style.display == "none"){
            showCards1.style.display = "flex"
        }else {
            showCards1.style.display = "none"
        }
    });

    const dropdownButton2 = 
    document.getElementById("dropdown-btn2");
    const showCards2 = 
    document.getElementById("cardsList2");

    showCards2.style.display = "none";

    dropdownButton2.addEventListener("click", (event) =>{
        if (showCards2.style.display == "none"){
            showCards2.style.display = "flex"
        }else {
            showCards2.style.display = "none"
        }
    });

    const dropdownButton3 = 
    document.getElementById("dropdown-btn3");
    const showCards3 = 
    document.getElementById("cardsList3");

    showCards3.style.display = "none";

    dropdownButton3.addEventListener("click", (event) =>{
        if (showCards3.style.display == "none"){
            showCards3.style.display = "flex"
        }else {
            showCards3.style.display = "none"
        }
    });
</script>
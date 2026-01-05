var tempPageHTML = "";

// Modifies the main container to show a target element's content based on its ID
function changePage(targetElementId) {
    const container = document.getElementById("container");
    console.log("Container is " + container);
    const targetElement = document.getElementById(String(targetElementId));
    if (targetElement == null) {
        console.log("Target element is null");
    } else {
        container.innerHTML = targetElement.innerHTML;
        container.classList.add("loaded");
    }
}

// Initial page load
changePage("flipNote");
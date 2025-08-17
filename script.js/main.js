// Globales Variables
const tabsBtn = document.querySelectorAll(".tab");
const btnsTabs = [];
const containersPositionRelative = document.querySelectorAll("#portfolio-section .position-relative");

// Recover the tab buttons
for (let tab of tabsBtn) {
    btnsTabs.push(tab);

    // Added an event when the user clicks on the tab buttons
    tab.addEventListener("click", function() {

        btnsTabs.forEach(function(btn) {
            btn.classList.remove("active");
        })

        this.classList.add("active");
        const dataTarget = tab.getAttribute("data-target");
        
        // Manage the display of containers when the user clicks on tab buttons
        switch (dataTarget) {
            case "coder":
                containersPositionRelative[1].classList.add("visibility");
                containersPositionRelative[2].classList.add("visibility");
                containersPositionRelative[4].classList.add("visibility");
                break;
            case "construit":
                containersPositionRelative[5].classList.remove("visibility");
                containersPositionRelative[2].classList.remove("visibility");
                containersPositionRelative[3].classList.remove("visibility");
                containersPositionRelative[1].classList.remove("visibility");
                break;
            default:
                containersPositionRelative[0].classList.remove("visibility");
                containersPositionRelative[1].classList.remove("visibility");
                containersPositionRelative[2].classList.remove("visibility");
                containersPositionRelative[3].classList.remove("visibility");
                containersPositionRelative[4].classList.remove("visibility");
                containersPositionRelative[5].classList.remove("visibility");
                break
        } 
        
        
    })
}
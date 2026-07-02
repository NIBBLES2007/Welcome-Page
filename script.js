document.addEventListener("DOMContentLoaded", () => {
    // BUG 2: Intentional JS Bug for juniors to fix
    // Typo in method name: getElementByID instead of getElementById
    // This will cause a TypeError in console and the button click won't work.
    const actionBtn = document.getElementByID("action-btn"); 
    const clickMessage = document.getElementById("click-message");

    // BUG 3: Merge Conflict Setup.
    // Have juniors change the greeting message here on two different branches.
    // Example: 
    // - Branch A changes it to "Hello Junior!"
    // - Branch B changes it to "Welcome to the Team!"
    let greetingMessage = "Welcome to Our Platform";

    if(actionBtn) {
        actionBtn.addEventListener("click", () => {
            clickMessage.classList.remove("hidden");
            clickMessage.classList.add("visible");
            
            // Updating the h1 title on click
            const mainTitle = document.getElementById("main-title");
            if(mainTitle) {
                mainTitle.innerText = greetingMessage;
            }
        });
    }
});

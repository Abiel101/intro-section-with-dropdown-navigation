const body = document.getElementById("body");
const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featureDropdown = document.getElementById("feature_dropdown");
const companyDropdown = document.getElementById("company_dropdown");

// Selecting the arrows
const featureArrowDown = document.getElementById("feature-arrow-down");
const featureArrowUp = document.getElementById("feature-arrow-up");
const companyArrowDown = document.getElementById("company-arrow-down");
const companyArrowUp = document.getElementById("company-arrow-up");

let triggerClick;

// Reusable functions open and close
function openDropDown(dropdownLink, arrowDown, arrowUp){
    dropdownLink.classList.add("drop_down-animation");
    arrowDown.classList.add("display-none");
    arrowUp.classList.remove("display-none");
    triggerClick = true;
    console.log(triggerClick);
};
function closeDropDown(dropdownLink, arrowDown, arrowUp){
    dropdownLink.classList.remove("drop_down-animation");
    arrowDown.classList.remove("display-none");
    arrowUp.classList.add("display-none");
    triggerClick = false;
    console.log(triggerClick);
};


// Featured open and close
featuresBtn.onmouseover = function(){
    openDropDown(featureDropdown, featureArrowDown, featureArrowUp);
    // console.log("opened");
}
featureDropdown.onmouseleave = function(){
    closeDropDown(featureDropdown, featureArrowDown, featureArrowUp);
    // console.log("close");
}
// Company open and close
companyBtn.onmouseover = function(){
    openDropDown(companyDropdown, companyArrowDown, companyArrowUp);
    // console.log("opened");
}
companyDropdown.onmouseleave = function(){
    closeDropDown(companyDropdown, companyArrowDown, companyArrowUp);
    // console.log("close");
}



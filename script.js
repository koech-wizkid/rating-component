const popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add('open-modal');
}
function closePopup(){
    popup.classList.remove('open-modal');
    
}

function mouseOver() {
    document.getElementById("mybtn").style.backgroundColor= "orange";
  }
  function mouseOut() {
    document.getElementById("mybtn").style.backgroundColor= "rgba(45, 54, 71, 0.904)";
  }

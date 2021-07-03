let parentClicks = 0;
let childClicks = 0;

document
.getElementById("child")
.addEventListener("click", function(){
    document
    .getElementById("child-count")
    .innerText = (++childClicks) + "";
});

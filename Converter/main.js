const kgsInput = document.getElementById("kgsInput");
const lbsOutput = document.getElementById("lbsOutput");

kgsInput.addEventListener("input", onInput);

function onInput(e){
    let kgs = e.target.value;
    lbsOutput.innerText = kgs * 2.2046;
}

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})
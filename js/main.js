// dragstart dragover dragleave dragend drop

let dragItem = document.querySelectorAll("#dragArea .drag-item")
let dropArea = document.querySelector("#dropArea")

// console.log(dragItem);

for (let i = 0; i < dragItem.length; i++) {
    dragItem[i].addEventListener("dragstart", function (a) {
        // console.log(dragItem[i]);
        a.dataTransfer.setData("murad", this.id)
        this.style.background = "yellow"


    })
}


dropArea.addEventListener("dragover", function (e) {
    e.preventDefault()
    this.style.background = "blue"
})
dropArea.addEventListener("dragleave", function () {
    this.style.background = "transparent"
})
dropArea.addEventListener("drop",function(e){
    let myId=e.dataTransfer.getData("murad")
    // console.log(myId);
    let dragItem=document.getElementById(myId)
    dropArea.appendChild(dragItem)
    dragItem.style.background="red"

})
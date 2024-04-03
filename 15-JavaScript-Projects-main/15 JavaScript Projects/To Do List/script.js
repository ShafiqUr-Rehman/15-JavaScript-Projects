let inputBox = document.querySelector(".input")
let addBtn = document.querySelector(".btn")
let listContainer = document.querySelector(".listContainer")
let clearItems = document.querySelector(".clearBtn")

addBtn.addEventListener("click", () => {

    if (inputBox.value == "") {
        alert("WRite Something Here!")
    }
    else {
        
        // create list

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // create chekbox

        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        li.appendChild(checkBox)

        // check function

        checkBox.addEventListener("click", () => {
            if(checkBox.checked)
            {
                li.classList.add("checked")
            }
            else{
                li.classList.remove("checked")
            }
        })

        // create edit button

        let editbtn = document.createElement("span")
        editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        li.appendChild(editbtn)

        // edit button function 

        editbtn.addEventListener("click", () => {
            let newValue = prompt("Enter New Item", li.textContent)
            li.textContent = newValue;
            li.appendChild(editbtn)
            li.appendChild(deleteBtn)
            li.appendChild(checkBox)
        })

        // create delete button

        let deleteBtn = document.createElement("span")
        deleteBtn.innerHTML = `<i class="fa-solid fa-x"></i>`
        deleteBtn.classList.add("deleteIcon")
        li.appendChild(deleteBtn)

        // delete button function

        deleteBtn.addEventListener("click", () => {
            li.remove();
        })

        // clear all items

        clearItems.addEventListener("click", () => {
            listContainer.innerHTML = ""
        })

        inputBox.value = "";
    }
})

inputBox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addBtn.click();
    }
})
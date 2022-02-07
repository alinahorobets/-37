const btn =document.querySelector('.btn')
const inputText = document.querySelector('.input_text')
const list = document.querySelector('.list')
let listArr = []

if (!localStorage.listArr){
    listArr = []
} else{
    listArr = JSON.parse(localStorage.getItem('listArr'))
}

console.log(btn)
console.log(inputText)


btn.addEventListener('click', () =>{
    let textValute = inputText.value
    inputText.value = ''
    listArr.push(textValute)
    list.innerHTML += createElement(textValute)
    fillList()
    localStorage.setItem('listArr', JSON.stringify(listArr))
})

const fillList = () =>{
    list.innerHTML = ''
    if (listArr.length > 0) {
        listArr.forEach((item, index) => {
            list.innerHTML += createElement(item, index)
        })
    }
} 

const createElement = (text, index) =>{
    return `
    <li class="list_item">${text}
    <button onclick="deleteItem(${index})"  class="deletebtn btn"></button>
    </li>
    `

}

const deleteItem = index =>{
    listArr.splice(index, 1)
    fillList()
    localStorage.setItem('listArr', JSON.stringify(listArr))
}

fillList()
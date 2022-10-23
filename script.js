const date = new Date().toDateString()
document.getElementById("date").textContent = date; 

const time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time; 



    // GET THE DATA
    // const ordersList = document.getElementById('orders-list')
    // const menuItem = document.getElementById('menu-item')

    // USE THE DATA
    // const newListItem = document.createElement('li')


const menuItem = document.getElementById('menu-item')
const ordersList = document.getElementById('orders-list')

// const clickCard = (e) => {
//     console.dir(menuItem.children[1].children[0].textContent)
//     console.dir(menuItem.children[1].children[1].textContent)
//     console.dir(e.currentTarget)
// }

const makeItem = () => {

    // ordersList.innerHTML = '<li><div class="row invoice-line"><div class="col-sm-4"><p class="item">Item Name</p></div><div class="col-sm-1"><p class="item">QTY</p></div><div class="col-sm-2"><p class="item"><span class="dollar-sym">$</span>Price</p></div><div class="col-sm-2"><p class="item"><span class="dollar-sym">$</span>Total</p></div></div></li>'
    
    const newLI = document.createElement('li')
    ordersList.appendChild(newLI)
    
    const row = document.createElement('div')
    row.className = 'invoice-line row'
    newLI.appendChild(row)

    const col = document.createElement('div')
    col.className = 'col-sm-4'
    row.appendChild(col)

    const parag = document.createElement('p')
    parag.textContent = 'Hola'
    parag.className = 'item'
    
    col.appendChild(parag)


    


    // const newLI = document.createElement('li')
    // const newDiv = document.createElement('div')
    // const text = document.createElement('p')
    // const span = document.createElement('span')
    // ordersList.appendChild(newLI).appendChild(newDiv).className = 'new-line'
    // const newLine = document.querySelector('.new-line')
    // newLine.append(newDiv).className = 'element'
    // const newEl = document.querySelector('.element')
    // newEl.classList.add('col-sm-4')
    // newEl.textContent = 'Hey'



    // newLine.classList.add('invoice-line')
    // newLine.classList.add('row')
    // newLine.appendChild(document.createElement('div').className = 'element')
    // const newEl = document.querySelector('.element')
    // newEl.classList.add('col-sm-4')    
    // newEl.appendChild(document.createElement('p').className = 'item')
    // const item = document.querySelector('.item')
    // item.textContent = 'Haa'

}

function clickCard(e) {
    // const itemName = e.currentTarget.children[1].children[0].textContent
    // console.log(itemName)
    // const dollarSign = e.currentTarget.children[1].children[1].textContent
    // const itemPrice = e.currentTarget.children[1].children[2].textContent
    // console.log(dollarSign, itemPrice)
}



menuItem.addEventListener('click', makeItem)







// function refreshTime() {
//     const timeDisplay = document.getElementById("datetime");
//     const dateString = new Date().toLocaleString();
//     const formattedString = dateString.replace(", ", " - ");
//     timeDisplay.textContent = formattedString;
//   }
//     setInterval(refreshTime, 1000);
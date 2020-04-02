const addItemInHTML = (value) => {
    
    if (value == null){
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    // const content = document.createTextNode(value)
    const itemHTML = `${value} <button>hapus</button>`
    
    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
    // li.appendChild(content)
}

const addItem = () => {

   
    
    const itemInput = document.getElementsByName("itemInput")
    // console.log (itemInput[0].value);
    // let value = itemInput[0].value
    let itemInputValue = itemInput[0].value
    if (!itemInputValue){
        return;
    }
    
    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item");


    // const daftarList = document.getElementsByClassName("daftar-list")
    // const li = document.createElement("li")
    // const content = document.createTextNode(value)

    // daftarList[0].appendChild(li)

    // li.appendChild(content)

    if (itemArray == null ){
        itemArray = [itemInputValue]
    }else {
        
        itemArray = JSON.parse (itemArray)
        itemArray.push(itemInputValue)
    }
    
    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item",itemArrayStringify);
    
    itemInput[0].value = ""
}

const runNow = () => {
    const itemFromLS = localStorage.getItem("item")

    if (itemFromLS != null){

       const items = JSON.parse(itemFromLS);
        
       items.forEach(item => {
           addItemInHTML(item)
       })
    }

    // const daftarList = document.getElementsByClassName("daftar-list")
    // const li = document.createElement("li")
    // const content = document.createTextNode(value)

    
}

runNow();
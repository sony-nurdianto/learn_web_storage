
const KG_TO_G = () =>{
    const USER_INPUT_VALUE = window.prompt("silahkan masukan nilai")
    const VALUE = Number (USER_INPUT_VALUE)
    const HASIL = VALUE * 1000
    window.alert(HASIL)

}
const KG_TO_ONS = () => {
    const USER_INPUT_VALUE = window.prompt("silahkan masukan nilai")
    const VALUE = Number (USER_INPUT_VALUE)
    const HASIL = VALUE * 35.274
    window.alert(HASIL)
}
const KG_TO_PON = () => {
    const USER_INPUT_VALUE = window.prompt("silahkan masukan nilai")
    const VALUE = Number (USER_INPUT_VALUE)
    const HASIL = VALUE * 2.20462
    window.alert(HASIL)
}

function  KONVERSI (event){
    event.preventDefault()
    debugger;
    let dolar = parseFloat(document.getElementById("dolar").value)
    let hasil = dolar * 17000
    document.getElementById("hasil").value = hasil
}

      document.getElementById("formSubmitId").addEventListener("submit", KONVERSI)


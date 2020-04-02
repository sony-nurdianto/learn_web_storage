const rumusPersegiPanjang = () =>{
    const USER_INPUT_P = window.prompt("silahkan masukan nilai panjang")
    p = Number (USER_INPUT_P)
    const USER_INPUT_L = window.prompt ("silahkan masukan nilai luas")
    l = Number (USER_INPUT_L)

    const HASIL=p*l
    window.alert(HASIL)

    
}
const rumusLuasLingkaran = () =>{
    const USER_INPUT_R = window.prompt("silahkan masukan r (jari-jari)")
    r = Number (USER_INPUT_R)

    const HASIL = 3.14 * (r*r)
    window.alert(HASIL)
}
const rumusLuasSegitiga = () =>{
    const USER_INPUT_A = window.prompt ("silahkan masukan alas")
    a = Number (USER_INPUT_A)
    const USER_INPUT_T = window.prompt ("silahkan masukan tingi")
    t = Number (USER_INPUT_T)

    const HASIL = 0.5 * a * t
    window.alert (HASIL)

}



const USER_INPUT = window.prompt(`selamat datang di rumus matematika sederhana
silahkan pilih\n 1.rumus persegi panjang\n 2.rumus luas lingkaran\n 3.rumus luas segitiga`)

const INPUT_MENU = Number (USER_INPUT)
if (INPUT_MENU == 1) {
    rumusPersegiPanjang()
}else if (INPUT_MENU == 2){
    rumusLuasLingkaran()
}else if (INPUT_MENU == 3){
    rumusLuasSegitiga()
}else if (INPUT_MENU == false) {
    window.alert ("terimakasih")
}
else {
    window.alert ("data yang anda masukan salah silhakan coba lagi")
}




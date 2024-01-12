function KiemTraNamNhuan(nam) {
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        console.log("la nam nhuan", + nam);
    }else{
        console.log("Khong la nam nhuan", + nam)
    }
}
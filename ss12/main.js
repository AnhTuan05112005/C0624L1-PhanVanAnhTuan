let sanpham = new SanPham1("Chảo chống dính",100);
let sanpham1 = new SanPham1("Nồi inot",200);
let arr =[sanpham,sanpham1];

let manage = new SanPham(arr);

function nhansanpham(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;


    let sanpham = new SanPham1(name,number);
    manage.nhansanpham(sanpham);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById("name").value ="";
    document.getElementById("number").value ="";

}

function deleteSanpham(name) {
    manage.delete(name);
    manage.showList();
}

let sanphamId = 0;
function updateSanpham(name){
    let sanpham = manage.findSanphamById(name);
    document.getElementById("name").value = sanpham.name;
    document.getElementById("number").value = sanpham.number;

    sanphamId = name;
}

function luusanpham(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;

    let sanpham = manage.findSanphamById(sanphamId);
    manage.edit(sanpham,name,number);
    manage.showList();
    clear();
}

manage.showList();

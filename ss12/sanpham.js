class SanPham {
    constructor(arr) {
        this.sanpham = arr;
    }
    showList() {
        let table = "";
        for (let i = 0; i < this.sanpham.length; i++) {


            table += '<tr>';
            table += '<td>';
            table += this.sanpham[i].name;
            table += '</td>';

            table += '<td>';
            table += this.sanpham[i].number;
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteSanpham('+i+')">Xóa</button> ' +
                ' <button  style="background-color: blue ; color: white" type="button" onclick="updateSanpham('+i+')">Chỉnh sửa</button>' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById("Sanpham").innerHTML = table;
    }

    nhansanpham(sanpham) {
        this.sanpham.push(sanpham);
    }

    delete(name) {
        this.sanpham.splice(name, 1);
    }

    findSanphamById(name){
        return this.sanpham[name];
    }

    edit(sanpham,name,number){
        sanpham.edit(name,number);
    }

}
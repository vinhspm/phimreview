let data = JSON.parse(localStorage.getItem("data"));
let id = Number(localStorage.getItem("id")); 
let img_src = document.querySelector("#big-img img");
let title_h3 = document.querySelector("#big-img h3");
let title_p = document.querySelector("#big-img p");
let content_h3 = document.querySelector("#detail-content h3 strong");
let content_p = document.querySelector("#detail-content p");



img_src.src = data[id]["img_src"];
title_h3.innerHTML += data[id]["title_h3"];
title_p.innerHTML += data[id]["title_p"];
content_h3.innerHTML += data[id]["content_h3"];
content_p.innerHTML += data[id]["content_p"];

function detail(id1) {
    localStorage.setItem('id', id1)
    img_src.src = data[id1]["img_src"];
    title_h3.innerHTML = data[id1]["title_h3"];
    title_p.innerHTML = data[id1]["title_p"];
    content_h3.innerHTML = data[id1]["content_h3"];
    content_p.innerHTML = data[id1]["content_p"];
}
let sideul_a = document.querySelectorAll('.list-group a')
let sideul_p = document.querySelectorAll('.list-group p')
let sideul_img = document.querySelectorAll('.list-group img')
let resultArray = new Set()
while(resultArray.size <3){
    resultArray.add(data[Math.round(Math.random()*50)])
}
const iterator1 = resultArray.values();
for(let i=0;i<3;i++){
    // sideul_a['href'] = resultArray[i]['id']
    let side_li = iterator1.next().value
    sideul_a[i]['id'] = side_li.id
    sideul_p[i].innerHTML = side_li.title_h3
    sideul_img[i].src = side_li.img_src
    console.log(sideul_p[i])
}
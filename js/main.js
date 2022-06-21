import {Glasses} from './glasses.js';
import {GlassesList} from './glassesList.js';
let glassesList = new GlassesList();
let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];
const getEle = (id) => document.getElementById(id);
// const creatGlasses = (glasses, index) => {
//     let gl = new Glasses(glasses.id, glasses.)
// }

const showGlassesList = () => {
    let divGlassesList = getEle('vglassesList');
    dataGlasses.map((item,index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
        console.log(gl);
    })

    divGlassesList.innerHTML = glassesList.renderGlasses();

}
showGlassesList();  

let tryOnGlasses = (e) => {
    console.log(e);
    let object;
    let gID = e.target.getAttribute("data-id");
    for (let item of glassesList.gList) {
        if (gID == item.id){
            object = item;
        }
    }
    // console.log(object); 
    wearGlasses(object);

}

let wearGlasses = (glasses) => {
    let divAvatar = getEle('avatar');
    let divInfo = getEle('glassesInfo');

    let status = '';
    if (glasses.status) {
        status = "Stocking";
    } else {
        status = "Sold Out";
    }
    // Thêm nội dung vào các thẻ div
    divAvatar.innerHTML = `
        <img id="glasses" src= "${glasses.virtualImg}"></img>
    `;
    divInfo.innerHTML = `
        <h5>${glasses.name} - ${glasses.brand} (${glasses.color})</h5>
        <p>
            <span class="btn btn-danger btn-sm mr-3">$${glasses.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p>${glasses.desc}</p>
    `
    divInfo.style.display = "block";

}

let removeGlasses = (isDisplay) => {
    var glasses = getEle('glasses');
    // console.log(glasses); 
    console.log(isDisplay);
    if (glasses != null) {
        if (isDisplay) {
            glasses.style.opacity = "0.8";
        } else {
            glasses.style.opacity = "0";
        }
    }
}
// getEle('btnBefore').onclick = removeGlasses(false);
// getEle('btnAfter').onclick = removeGlasses(true);
window.tryOnGlasses = tryOnGlasses;
window.removeGlasses = removeGlasses;


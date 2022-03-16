document.body.style.cssText="background-color: rgb(229 223 223);box-sizing: border-box;padding: 0;margin: 0;";
// ------------ header -------------//
let headerNode=document.createElement("header");
headerNode.className="header";
headerNode.style.cssText="display: flex; align-items:center;justify-content:space-between;padding:6px;background-color:white";
// logo
let logo=document.createElement("div");
logo.className="logo";
logo.textContent="Elzero";
logo.style.cssText="font-weight: bold;font-size: 20px;color: green;";
headerNode.appendChild(logo);
// menu
let menu =document.createElement("div");
menu.className="menu";
let ulList=document.createElement("ul");
ulList.className="list";
ulList.style.cssText="display:flex;list-style:none; justify-content:space-between";
let list=[];
for (let index = 0; index < 4; index++) {
  list[index]=document.createElement("li");
  list[index].style.cssText="padding:5px;color:rgb(92 91 91)";
  ulList.appendChild(list[index]);
  menu.appendChild(ulList);
}
list[0].textContent="Home";
list[1].textContent="About";
list[2].textContent="Service";
list[3].textContent="Contact";

headerNode.appendChild(menu);
document.body.appendChild(headerNode);


//------------------------------- content -----------------------
let content =document.createElement("div");
content.className="content";
content.style.cssText="display: flex;flex-wrap: wrap;gap: 20px;margin-top:10px;margin-bottom:10px;justify-content: center; text-align:center";
let product=[];
let listSpan=[];
for (let index = 1; index <=15; index++) {
  product[index]=document.createElement("div");
  product[index].className="product";
  product[index].style.cssText="padding: 20px;font-size: 14px;color: rgb(92 88 88);background: white;display:block;width:calc((100% - 200px) / 3);";
  listSpan[index]=document.createElement("span");
  listSpan[index].className="span-class";
  listSpan[index].textContent=`${index}`;
  listSpan[index].style.cssText="color: black;font-size: 30px;display: block;margin-top: 8px;margin-bottom: 10px;";
  product[index].textContent="product";
  product[index].prepend(listSpan[index]);
  content.appendChild(product[index]);
}

document.body.appendChild(content);


// ----------------------------  footer ------------------------

let footerNode=document.createElement("footer");
footerNode.className="footer";
footerNode.innerHTML="&copy; 2022 By Akram19-Setif";
footerNode.style.cssText="display: flex; align-items:center;justify-content:center;padding-top:20px;padding-bottom:20px;background-color:green;color:white; font-size:20px";
document.body.appendChild(footerNode);
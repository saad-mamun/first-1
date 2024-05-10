// let menu = document.querySelector('#menu')
// // let lang = ['Python','java','php'];

// // let fragment = document.createDocumentFragment()

// // lang.forEach((language)=> {
// //     let li =document.createElement('li');
// //     li.textContent =language;
// //     fragment.appendChild(li)
// // })

// // menu.appendChild(fragment)



/////////////// BEFORE li////////////



// let menu = document.querySelector("#menu")

// let li = document.createElement("li")
// li.textContent="HOME"

// menu.insertBefore(li,menu.firstChild)


///////////////


let menu =document.querySelector("#menu");

let lang = ['Python','java','php'];

let DOMScript = lang.map((lang)=>{
    let li = document.createElement("li");
    li.textContent = lang;
    return li;
})

menu.append(...DOMScript);
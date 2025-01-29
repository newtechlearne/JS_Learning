

let h1 = document.getElementsByTagName('h1');

for(let item of h1){
    item.style.cssText = `

        color : red ;
        background-color : orange;
        font-size : 100px;
    `
}

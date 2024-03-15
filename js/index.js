// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

let mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.style.textAlign = 'center';
mainEl.classList.add("flex-ctr");

//part 2

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

//part 3

for (let i = 0; i < menuLinks.length; i++){
    let linkItem = menuLinks[i];
let aEl = document.createElement('a');
aEl.setAttribute('href', linkItem.href);
aEl.textContent = linkItem.text;
topMenuEl.appendChild(aEl);
}


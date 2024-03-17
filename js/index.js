// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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

for (let i = 0; i < menuLinks.length; i++) {
    let linkItem = menuLinks[i];
    let aEl = document.createElement('a');
    aEl.setAttribute('href', linkItem.href);
    aEl.textContent = linkItem.text;
    topMenuEl.appendChild(aEl);
}

//Lab 316.3.1

let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.style.height = '100%';
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = '0';

// const topMenuEl = document.getElementById('topMenu');
const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks);
const topMenuLinksArray = Array.from(topMenuLinks);
console.log(topMenuLinksArray);

topMenuEl.addEventListener('click', function (event) {
    event.preventDefault();

    const clickedEl = event.target.closest('a');
    if (!clickedEl) return;

    console.log(clickedEl.textContent);

    clickedEl.classList.toggle('active');

    // const mainEl = document.getElementById('main');
    // mainEl.innerHTML = '<h1>' + clickedEl.textContent + '</h1>';
    // console.log(mainEl);

    // clickedEl.classList.toggle('active');
    topMenuLinks.forEach(function (link) {
        if (link !== clickedEl) {
            link.classList.remove('active');
        }
    });


    if (!clickedEl.classList.contains('active')) {
        if (clickedEl.dataset.link !== 'about' && clickedEl.dataset.subLinks) {
            subMenuEl.style.top = '100%';
            buildSubmenu(JSON.parse(clickedEl.dataset.subLinks));
        } else {
            subMenuEl.style.top = '0';
        }
    }
    // buildSubmenu(clickedEl.dataset.subLinks);

    // function buildSubmenu(subLinks) {
    //     subMenuEl.innerHTML = '';
    //     if (subLinks){
    //             subLinks.forEach(function(link) {
    //             const submenuLink = document.createElement('a');
    //             submenuLink.setAttribute('href', link.href);
    //             submenuLink.textContent = link.text;
    //             subMenuEl.appendChild(submenuLink);
    //         });
    //     }
    // }
    function buildSubmenu(subLinks) {
        subMenuEl.innerHTML = ''; // Clear current contents of submenu
        subLinks.forEach(function (link) {
            const submenuLink = document.createElement('a');
            submenuLink.setAttribute('href', link.href);
            submenuLink.textContent = link.text;
            subMenuEl.appendChild(submenuLink); // Append submenu link to submenu
        });
    }
});

subMenuEl.addEventListener('click', function (event) {
    event.preventDefault();

    const clickedEl = event.target.closest('a');
    if (!clickedEl) return;

    subMenuEl.style.top = '0';

    topMenuLinks.forEach(function (link) {
        link.classList.remove('active');
    });
});


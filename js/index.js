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

// Part 4: Adding Menu Interaction
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenulinks = topMenuEl.querySelectorAll('a');

// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function (event) {
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    // event.preventDefault();


    //Lab 316.3.1

    let subMenuEl = document.getElementById("sub-menu");

    topMenuEl.addEventListener('click', function (event) {
        subMenuEl.innerHTML = '';

        var clickedMenuName = event.target.text;

        for (let i = 0; i < menuLinks.length; i++) {
            let linkItem = menuLinks[i];

            if (clickedMenuName == linkItem.text) {
                var subMenuLinks = linkItem.subLinks;

                console.log("subMenuLinks.length " + subMenuLinks.length)

                for (k = 0; k < subMenuLinks.length; k++) {
                    let aE2 = document.createElement('a');
                    aE2.setAttribute('href', subMenuLinks[k].href);
                    aE2.textContent = subMenuLinks[k].text;
                    subMenuEl.appendChild(aE2);
                }
            }
        }


        if (subMenuEl.style.display == "block") {
            subMenuEl.style.display = "none";

        } else {
            subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
            subMenuEl.style.height = '100%';
            subMenuEl.classList.add("flex-around");
            subMenuEl.style.display = "block";
        }
    })


    function buildSubmenu(subLinks) {

        subMenuEl.innerHTML = ''; // Clear current contents of submenu
        subLinks.forEach(function (link) {
            const submenuLink = document.createElement('a');
            submenuLink.setAttribute('href', link.href);
            submenuLink.textContent = link.text;
            subMenuEl.appendChild(submenuLink); // Append submenu link to submenu
        })
    }
});

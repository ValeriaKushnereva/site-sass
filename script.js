function renderNavbarLi() {
    const list = document.querySelector('#nav-list');
    const navbarLinks = [
        {title: "Home", icon: "bi bi-house"},
        {title: "About", icon: "bi bi-info-square"},
        {title: "Authorize", icon: "bi bi-person-fill"},
        {title: "User cart", icon: "bi bi-bag"}
    ];
    navbarLinks.forEach(function(value){
        var title = value.title;
        var icon = value.icon;
        var liMarkup = `<li class="nav-item">
        <a 
            class="nav-link active" 
            aria-current="page" 
            href="#" 
            data-bs-toggle="tooltip" 
            data-bs-placement="bottom" 
            title="${title}">
            <i class="${icon}"></i>
            <span class="d-none d-lg-inline">${title}</span>
        </a>
        </li>`;
        list.insertAdjacentHTML('beforeend', liMarkup);
    });
} 

function mediaQuerys() {
    const mediaQuery = window.matchMedia('(max-width:992px)');
    mediaQuery.addListener('change', function() {});
    // if (mediaQuery.matches) {

    // }    
}

function tooltipInit() {
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function init() {
    renderNavbarLi();
    mediaQuerys();
    tooltipInit();    
}

init();

// UI = user interface фронт
// UX = user experience бэк

// Accessing elements from the index.html file
const body = document.querySelector('body');
const login = document.querySelector('#login-btn');
const menubar = document.querySelector('#menu-bar');

login.addEventListener('click', () => {
    window.location.href = 'login.html';
});

function createNavElements() {
    // Check if nav elements already exist
    let navElements = document.querySelector('#nav-elements-small');
    if (navElements) {
        navElements.style.transform = 'translateX(0)';
        const closeIcon = document.querySelector('#xmark');
        closeIcon.style.opacity = '1';
        return;
    }

    // Create the main div
    navElements = document.createElement('div');
    navElements.id = 'nav-elements-small';
    navElements.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100%;
        background: #001a39;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 3rem;
        padding-top: 2.5rem;
        transition: transform 0.5s ease-in-out;
        transform: translateX(100%);
    `;

    // Create the close icon
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark';
    closeIcon.style.cssText = `
        font-size: 1.875rem;
        position: fixed;
        left: 1.5rem;
        top: 2.25rem;
        opacity: 1;
        cursor: pointer;
    `;
    closeIcon.id = 'xmark';
    navElements.appendChild(closeIcon);

    closeIcon.addEventListener('click', () => {
        navElements.style.transform = 'translateX(100%)';
        closeIcon.style.opacity = '0';
    });

    // Create the links
    const links = [
        { href: '#', text: 'RESEARCH' },
        { href: '#', text: 'GALLERY' },
        { href: '#', text: 'REACH US' }
    ];

    links.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.textContent = linkData.text;
        link.style.color = 'white';  // Set the link text color to white
        link.style.textDecoration = 'none';  // Set the link text color to white
        navElements.appendChild(link);
    });

    // Add the nav elements to the body
    body.appendChild(navElements);

    // Slide in the nav elements
    setTimeout(() => {
        navElements.style.transform = 'translateX(0)';
    }, 10);
}

menubar.addEventListener('click', () => {
    createNavElements();
});

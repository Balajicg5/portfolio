window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};

        // Fetch the current year
        const currentYear = new Date().getFullYear();
    
        // Update the footer with the current year
        document.querySelector('footer p').innerHTML = `Copyright &copy; ${currentYear} My Portfolio`;
    
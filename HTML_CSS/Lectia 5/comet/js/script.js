const menuBtn = document.getElementById('collapseBtnId');
const mobileMenu = document.getElementById('menuId');

menuBtn.onclick = () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('open');
    } else {
        mobileMenu.classList.add('active');
        menuBtn.classList.add('open');
    }
}
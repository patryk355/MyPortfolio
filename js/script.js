const btnsCode = [...document.querySelectorAll('.btn-code')];
const listsCode = [...document.querySelectorAll('.list-code')];

function displayListCode() {
    listsCode.forEach((listCode, idx) => {
        if (listCode.dataset.index === this.dataset.index) {
            listCode.classList.toggle('active');
            if (listCode.classList.contains('active')) {
                this.innerHTML = `<p>Kod</p> <i class="fas fa-chevron-up"></i>`;
            } else {
                this.innerHTML = `<p>Kod</p> <i class="fas fa-chevron-down"></i>`;
            }
        }
    })
}

btnsCode.forEach((btn, index) => {
    btn.addEventListener('click', displayListCode);
})
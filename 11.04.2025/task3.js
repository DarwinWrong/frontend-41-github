const wrapperHeader = document.querySelectorAll('.wrapper-header');

wrapperHeader.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling
        if (content.style.display === 'block') {
            content.style.display = 'none'
        } else {
            document.querySelectorAll('.wrapper-body').forEach(item => {
                item.style.display = 'none'
            })
            content.style.display = 'block'
        }
    })
})
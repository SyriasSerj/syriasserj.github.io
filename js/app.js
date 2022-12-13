const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

var hiddenElements = document.querySelectorAll('.hidden, .rPanel, .lPanel, .socialImgs');

hiddenElements.forEach((el) => observer.observe(el));
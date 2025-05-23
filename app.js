document.addEventListener("DOMContentLoaded", () => {
    const texts = ["Web Developer", "UI/UX Designer", "Coder"];
    const target = document.querySelector(".text-type");
    let i = 0, j = 0, del = false;

    (function animate() {
        target.textContent = texts[i].slice(0, j);
        j += del ? -1 : 1;

        if (!del && j === texts[i].length) {
            del = true;
            setTimeout(animate, 2000);
        } else if (del && j === 0) {
            del = false;
            i = (i + 1) % texts.length;
            setTimeout(animate, 300);
        } else {
            setTimeout(animate, del ? 50 : 100);
        }
    })();
});

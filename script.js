// Web.Trix — smooth interaction

document.addEventListener("DOMContentLoaded", () => {

    // Add subtle reveal animation when sections enter viewport
    const elements = document.querySelectorAll(
        ".service-card, .project, .process-item, .price-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // Close mobile-style navigation behavior when clicking links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", () => {
            const target = link.getAttribute("href");

            if (target === "#") return;

            const section = document.querySelector(target);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    });

});
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navItem = document.querySelectorAll(".nav__item"),
    header = document.getElementById("header");

// open and close menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu--open");
        changeIcon();
    });
}

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
    });
});

// Change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// Downloading Resume
// document.getElementsByClassName("btn btn--primary").addEventListener("click", function() {
//   window.location.href = "../../assets/Calvin Mwangi.pdf"
// })


// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        520: {
            slidesPerView: "auto",
        },
    },
});

// header scroll animation
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("header--scroll");
    } else {
        header.classList.remove("header--scroll");
    }
});

// ScrollReveal animations
const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
    ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content", {
        delay: 500,
        interval: 100,
    }
);

sr.reveal(".qualification__footer-text, .contact__content", {
    origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });


document.addEventListener("DOMContentLoaded", function() {
    // NAV TOGGLE (safe)
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navItem = document.querySelectorAll(".nav__item");
    const header = document.getElementById("header");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav__menu--open");
            changeIcon();
        });
    }
    navItem.forEach((item) => {
        item.addEventListener("click", () => {
            if (navMenu && navMenu.classList.contains("nav__menu--open")) {
                navMenu.classList.remove("nav__menu--open");
            }
            changeIcon();
        });
    });

    function changeIcon() {
        if (!navToggle || !navMenu) return;
        if (navMenu.classList.contains("nav__menu--open")) {
            navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
        } else {
            navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
        }
    }

    // EXPERIENCE MODAL
    const modal = document.getElementById("experience-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const modalTitle = document.getElementById("modal-title");

    // Map button IDs to collage IDs and titles
    const experienceMap = {
        "know-more-btn-1": { collage: "collage-1", title: "On the Job Training" },
        "know-more-btn-2": { collage: "collage-2", title: "CARSUMCO Plant Tour" },
        "know-more-btn-3": { collage: "collage-3", title: "CHE Lab in DLSU" }
    };

    function hideAllCollages() {
        document.querySelectorAll('.modal__images').forEach(div => {
            div.style.display = "none";
        });
    }

    document.querySelectorAll('.service__link').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const info = experienceMap[btn.id];
            if (info && modal && modalTitle) {
                hideAllCollages();
                const collageDiv = document.getElementById(info.collage);
                if (collageDiv) collageDiv.style.display = "flex";
                modalTitle.textContent = info.title;
                modal.style.display = "flex";
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
    if (modal) {
        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Image viewer for modal images
    const imageViewer = document.getElementById("image-viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerClose = document.getElementById("viewer-close");

    document.querySelectorAll('.modal__image-item').forEach(img => {
        img.addEventListener('click', function() {
            viewerImg.src = this.src;
            imageViewer.style.display = "flex";
        });
    });

    if (viewerClose) {
        viewerClose.addEventListener("click", function() {
            imageViewer.style.display = "none";
            viewerImg.src = "";
        });
    }
    window.addEventListener("click", function(e) {
        if (e.target === imageViewer) {
            imageViewer.style.display = "none";
            viewerImg.src = "";
        }
    });

    // Project modal popup logic
    document.querySelectorAll('.project__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'flex';
        });
    });

    // Close project modals
    document.querySelectorAll('.modal__close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.style.display = 'none';
        });
    });
});
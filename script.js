/* =========================================
   NOAH LI PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    '.project, .service, .design-item, .about-content, .contact-title'
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('reveal');

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   VIDEO AUTOPLAY
========================================= */

const videos = document.querySelectorAll('video');

const videoObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    },
    {
        threshold: 0 // Changed from 0.25 to 0
    }
);


videos.forEach((video) => {
    videoObserver.observe(video);
});


/* =========================================
   PROJECT HOVER
========================================= */

const projects = document.querySelectorAll('.project');

projects.forEach((project) => {

    const media = project.querySelector('.project-media');

    if (!media) return;

    project.addEventListener('mouseenter', () => {

        project.classList.add('active');

    });

    project.addEventListener('mouseleave', () => {

        project.classList.remove('active');

    });

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.createElement('div');

cursor.classList.add('custom-cursor');

document.body.appendChild(cursor);


document.addEventListener('mousemove', (event) => {

    cursor.style.left = `${event.clientX}px`;

    cursor.style.top = `${event.clientY}px`;

});


/* =========================================
   CURSOR CSS
========================================= */

const cursorStyle = document.createElement('style');

cursorStyle.innerHTML = `

    .custom-cursor {

        position: fixed;

        width: 8px;
        height: 8px;

        background: #111;

        border-radius: 50%;

        pointer-events: none;

        z-index: 9999;

        transform:
            translate(-50%, -50%);

        transition:
            width 0.2s ease,
            height 0.2s ease,
            background 0.2s ease;

        mix-blend-mode: difference;

    }


    .project:hover ~ .custom-cursor {

        width: 16px;
        height: 16px;

    }


    @media (max-width: 800px) {

        .custom-cursor {

            display: none;

        }

    }

`;

document.head.appendChild(cursorStyle);


/* =========================================
   SMOOTH PROJECT HOVER CURSOR
========================================= */

const projectMedia = document.querySelectorAll('.project-media');

projectMedia.forEach((media) => {

    media.addEventListener('mouseenter', () => {

        cursor.style.width = '18px';
        cursor.style.height = '18px';

    });


    media.addEventListener('mouseleave', () => {

        cursor.style.width = '8px';
        cursor.style.height = '8px';

    });

});


/* =========================================
   NAVIGATION BACKGROUND
========================================= */

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        nav.classList.add('scrolled');

    } else {

        nav.classList.remove('scrolled');

    }

});


/* =========================================
   IMAGE LAZY LOADING
========================================= */

const images = document.querySelectorAll('img');

images.forEach((image) => {

    image.loading = 'lazy';

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});
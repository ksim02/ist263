if (window.innerWidth > 700)
{
    const intro = document.querySelector(".intro");
    const video = intro.querySelector("video");


    const controller = new ScrollMagic.Controller();


    let scene = new ScrollMagic.Scene({
    duration: 14000,
    triggerElement: intro,
    triggerHook: 0
    })

    .setPin(intro)
    .addTo(controller);

    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
    delay += (scrollpos - delay) * accelamount;


    video.currentTime = delay;
    }, 33.3);
}
else {
    const intro = document.querySelector(".intro2");
    const video = intro.querySelector("video");
    const controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
    duration: 11000,
    triggerElement: intro,
    triggerHook: 0
    })

    .setPin(intro)
    .addTo(controller);

    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
    }, 33.3);
}
        document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.getElementById('hamburger');
        const navlinkid = document.getElementById('navlinkid');

        hamburger.addEventListener('click', () => {
            navlinkid.style.display = navlinkid.style.display === 'block' ? 'none' : 'block';
        });
    });


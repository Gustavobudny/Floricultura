let banners = [
    "../img/banner_ferramentas1.jpg",
    "../img/banner_ferramentas2.jpg",
    "../img/banner_ferramentas3.jpg"
];

let indexBanner = 0;

function iniciarBannerFerramentas() {
    const banner = document.getElementById("bannerFerramentas");
    banner.src = banners[indexBanner];

    setInterval(() => {
        indexBanner = (indexBanner + 1) % banners.length;
        banner.src = banners[indexBanner];
    }, 4000);
}
function openAnimate(callback) {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: false,
        })
        .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1300,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml12 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i
        });

    callback();

}

function hideAnimate() {
    let animation = document.querySelector('.animation');
    window.setTimeout(()=>{
        animation.classList.add('animation_hide');
    },1000)
}

openAnimate(hideAnimate);




var sections = new Swiper('.sections', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    mousewheel: true,
    pagination: {
        el: '.sections_pagination',
        clickable: true,
    },
});

var banner_sections = new Swiper('.banner_swiper_container', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

var menu_swiper = new Swiper('.menu_swiper_container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

let nav = document.querySelectorAll('li');
// window.setTimeout(() => {
//     nav.forEach(element => {
//         element.classList.remove('active');
//     });
//     nav[0].classList.add('active');
// }, 100)


let swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet');
let nav_clickable = document.querySelectorAll('li');
for (let i = 0; i < nav.length; i++) {
    nav_clickable[i].addEventListener("click", () => {
        swiperPaginationBullet[i].click();
        nav_clickable.forEach(element => {
            element.classList.remove('active');
        });
        nav_clickable[i].classList.add('active');
    })
}





{
    let arrow = document.querySelector('.arrow');
    let sections = document.querySelector('.sections');
    let section = document.querySelectorAll('section');

    function toggle() {
        //按鈕事件
        arrow.classList.toggle('arrow_trigger');
        sections.classList.toggle('sections_hide');
        window.setTimeout(() => {
            section.forEach(element => {
                element.classList.toggle('section_hide');
            });
        }, 300)
    }
}

//news
const news_index = document.querySelector('.news_index');
const news_details = document.querySelector('.news_details');
const news = [
    '<p>0即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>1即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>2即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>3即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>4即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>5即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>6即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>7即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
    '<p>7即日起,凡網路訂位用餐(商業午餐除外)，消費2人以上套餐贈送價值220元之主廚手工法國老麵長棍麵包1條(一桌限1條)；特殊節日(聖誕節、跨年夜、情人節、母親節等)不在此限.</p><span class = "time" > (2019 - 12 - 11) </span>',
]

function newsDetailShow(i) {
    news_index.style.opacity = "0";
    news_index.style.pointerEvents = "none";

    news_details.innerHTML = news[i] + `<div class="back" onclick="back()" style="width: 50px;height: auto"><svg                                          aria-hidden="true"
                                        focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left"
                                        class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="#816E4A"
                                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z">
                                        </path>
                                    </svg>
                                </div>`;
    news_details.style.opacity = "1";
    news_details.style.pointerEvents = "all";
}

function back() {
    news_index.style.opacity = "1";
    news_index.style.pointerEvents = "all";
    news_details.style.opacity = "0";
    news_details.style.pointerEvents = "none";
}

//model
{
    let index_now = 0;

    const mask_container = document.querySelector('.mask_container');
    const envPics = document.querySelectorAll('.env_pic');
    const mask = document.querySelector('.mask');
    const pre_btn = document.querySelector('.pre_btn');
    const next_btn = document.querySelector('.next_btn');
    const close_btn = document.querySelector('.close_btn');
    const banner = document.querySelector('.banner');
    const banner_swiper_container = document.querySelector('.banner_swiper_container');
    let nav = document.querySelectorAll('li');
    const banner_chef = document.querySelector('.banner_chef');
    const banner_env = document.querySelector('.banner_env');
    let swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet');
    let nav_index = document.querySelector('.nav_index');
    nav_index.innerHTML = 'Brand';

    var banner_env_5s;

    // for (let i = 0; i < nav.length; i++) {
    //     nav[i].addEventListener('click',()=>{
    //         swiperPaginationBullet[i].click();
    //     })

    // }

    let sections = document.querySelectorAll('section');
    const options = {
        threshold: .8,
    }

    let observer = new IntersectionObserver(navCheck, options);

    var x = 0;
    var first = true

    function navCheck(entries) {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].intersectionRatio > .8) {
                x = entries[i].target.getAttribute('data-index');
            }
        }

        if (x == 2) {
            banner_chef.style.opacity = 0;
            banner_chef.style.pointerEvents = "none";
            banner_env.style.opacity = 1;
            banner_env.style.pointerEvents = "all";
            banner_swiper_container.style.opacity = 0;
            banner_swiper_container.style.pointerEvents = "none";
        } else if (x == 3) {
            banner_chef.style.opacity = 1;
            banner_chef.style.pointerEvents = "all";
            banner_env.style.opacity = 0;
            banner_env.style.pointerEvents = "none";
            banner_swiper_container.style.opacity = 0;
            banner_swiper_container.style.pointerEvents = "none";
        } else {
            banner_chef.style.opacity = 0;
            banner_chef.style.pointerEvents = "none";
            banner_env.style.opacity = 0;
            banner_env.style.pointerEvents = "none";
            banner_swiper_container.style.opacity = 1;
            banner_swiper_container.style.pointerEvents = "all";
        }


        navche();
        initial();
        first = false;
        switch (x) {
            case '0':
                nav_index.innerHTML = 'Brand';
                break;
            case '1':
                nav_index.innerHTML = 'Menu';
                break;
            case '2':
                nav_index.innerHTML = 'Environment';
                break;
            case '3':
                nav_index.innerHTML = 'Chef';
                break;
            case '4':
                nav_index.innerHTML = 'News';
                break;
            case '5':
                nav_index.innerHTML = 'Contact us';
                break;
        }
    }


    function navche() {
        nav.forEach(element => {
            element.classList.remove('active');
        });
        nav[x].classList.add('active');
    }

    sections.forEach(section => {
        observer.observe(section);
    })

    function initial() {
        if (first == true) {
            nav[5].classList.remove('active');
            nav[0].classList.add('active');
        }
    }
    initial();

    function bannerEnv5s(i) {
        banner_env_5s = window.setInterval(() => {

            banner_env.style.backgroundImage = `url(${envPics[i].src})`;
            if (i == envPics.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }, 5000)
    };
    bannerEnv5s(1);


    for (let i = 0; i < envPics.length; i++) {
        envPics[i].addEventListener('click', () => {
            clearInterval(banner_env_5s);
            index_now = i;
            mask_container.style.backgroundImage = `url(${envPics[i].src})`;
            banner_env.style.backgroundImage = `url(${envPics[i].src})`;
            mask.classList.add('mask_show');
        })
    };

    pre_btn.addEventListener('click', pre);
    next_btn.addEventListener('click', next);
    close_btn.addEventListener('click', closeModel);

    function closeModel() {
        mask.classList.remove('mask_show');
        bannerEnv5s(index_now + 1);
    }

    function pre() {
        index_now--
        def_preI_nextI()
        mask_container.style.backgroundImage = `url(${envPics[index_now].src})`;
        banner_env.style.backgroundImage = `url(${envPics[index_now].src})`;
    }

    function next() {
        index_now++
        def_preI_nextI()
        mask_container.style.backgroundImage = `url(${envPics[index_now].src})`;
        banner_env.style.backgroundImage = `url(${envPics[index_now].src})`;
    }

    function def_preI_nextI() {
        if (index_now < 0) {
            index_now = envPics.length - 1;
        } else if (index_now > envPics.length - 1) {
            index_now = 0;
        } else {
            index_now = index_now;
        }
    }
}

{
    let mobile_menu = document.querySelector('.mobile_menu');
    let nav_list = document.querySelector('.nav_list');
    let header = document.querySelector('header');
    let top = document.querySelector('.top');
    let middle = document.querySelector('.middle');
    let bottom = document.querySelector('.bottom');
    mobile_menu.addEventListener("click", () => {
        nav_list.classList.toggle('nav_list_show');
        header.classList.toggle('header_show');
        top.classList.toggle('rotate45');
        middle.classList.toggle('hide');
        bottom.classList.toggle('rotateM45');
    })

    nav_list.addEventListener('click', () => {
        mobile_menu.click();
    })


}
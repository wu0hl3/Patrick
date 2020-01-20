AOS.init();

//動畫
window.onload = () => {
    if (document.body.clientWidth > 1023) {
        openAnimate();
    } else if (document.body.clientWidth > 769) {
        openAnimate1023to769()
    } else {
        openAnimateMobile();
    }


};

function openAnimate() {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const animation = document.querySelector('.animation');
    const animationLogo = document.querySelector('.animationLogo');
    //target
    const logo_header = document.querySelector('.logo_header');
    const coods = logo_header.getBoundingClientRect();

    let height = coods.height;
    let width = coods.width;
    let top = coods.top;
    let left = coods.left;

    animationLogo.style.width = width;


    //nav test
    let nav = [];
    const pc_lis = document.querySelectorAll('.pc_li');
    pc_lis.forEach(element => {

        nav.push(element.children[1]);
    });
    console.log(nav[0]);
    console.log(nav[1]);
    console.log(nav[2]);
    console.log(nav[3]);
    console.log(nav[4]);
    console.log(nav[5]);

    // nav.forEach(element => {
    //     console.log(element.getBoundingClientRect().width);
    // });
    const coods2 = nav.map((item, index, array) => {
        let tmp = item.getBoundingClientRect();
        return [window.getComputedStyle(item).fontSize, tmp.width, tmp.height, tmp.top, tmp.left]
    });
    // console.log(coods2)

    // for (let i = 0; i < nav.length; i++) {

    //     nav[i].style.fontSize = `${coods2[i][0]}px`;
    //     nav[i].style.width = coods2[i][1];
    //     nav[i].style.height = coods2[i][2];
    //     nav[i].style.top = `${coods2[i][3]}px`;
    //     nav[i].style.left = `${coods2[i][4]}px`;

    // }





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
        }).add({
            targets: '.animationLogo',
            opacity: [0, 1],
            easing: "easeOutQuart",
            duration: 1500,
        }).add({
            targets: '.animationLogo',
            opacity: [1, 0],
            easing: "easeInBack",
            duration: 1800,
        }).add({
            targets: '.animationLogo',
            opacity: [0, 1],
            easing: "easeOutQuart",
            delay: 1000,
            duration: 3000,
        }).add({
            targets: '.animationLogo',
            easing: "easeOutQuart",
            top: top,
            left: left,
            scale: ['2', '1'],
            translateX: ['-25%', '0'],
            translateY: ['-25%', '0'],
            duration: 3000,
        })
        .add({
            targets: '.ani_1',
            opacity: [0, 1],
            color: ['white', 'white'],
            fontSize: [coods2[0][0], coods2[0][0]],
            top: [coods2[0][3], coods2[0][3]],
            left: [coods2[0][4], coods2[0][4]],
            easing: "easeOutExpo",
            delay: 1000,
            duration: 1200,
        }).add({
            targets: '.ani_2',
            opacity: [0, 1],
            fontSize: [coods2[1][0], coods2[1][0]],
            top: [coods2[1][3], coods2[1][3]],
            left: [coods2[1][4], coods2[1][4]],
            easing: "easeOutExpo",
            delay: 600,
            duration: 1000,
        }).add({
            targets: '.ani_3',
            opacity: [0, 1],
            fontSize: [coods2[2][0], coods2[2][0]],
            top: [coods2[2][3], coods2[2][3]],
            left: [coods2[2][4], coods2[2][4]],
            easing: "easeOutExpo",
            delay: 800,
            duration: 800,
        }).add({
            targets: '.ani_4',
            opacity: [0, 1],
            fontSize: [coods2[3][0], coods2[3][0]],
            top: [coods2[3][3], coods2[3][3]],
            left: [coods2[3][4], coods2[3][4]],
            easing: "easeOutExpo",
            delay: 600,
            duration: 700,
        }).add({
            targets: '.ani_5',
            opacity: [0, 1],
            fontSize: [coods2[4][0], coods2[4][0]],
            top: [coods2[4][3], coods2[4][3]],
            left: [coods2[4][4], coods2[4][4]],
            easing: "easeOutExpo",
            delay: 400,
            duration: 600,
        }).add({
            targets: '.ani_6',
            opacity: [0, 1],
            fontSize: [coods2[5][0], coods2[5][0]],
            top: [coods2[5][3], coods2[5][3]],
            left: [coods2[5][4], coods2[5][4]],
            easing: "easeOutExpo",
            delay: 200,
            duration: 500,
        })
        .add({
            targets: '.ani_1',
            color: ['rgba(255, 255, 255)', 'rgba(255, 166, 0)'],
            easing: "easeOutExpo",
            delay: 200,
            // duration: 500,
        })
        .add({
            targets: '.animation',
            opacity: [1, 0],
            easing: "easeInQuart",
            delay: 500,
            duration: 3000,
        })
}

function openAnimate1023to769() {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const animation = document.querySelector('.animation');
    const animationLogo = document.querySelector('.animationLogo');

    animationLogo.style.width = '300px';

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
        }).add({
            targets: '.animationLogo',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 3000,
        })
        .add({
            targets: '.animation',
            opacity: [1, 0],
            easing: "easeOutExpo",
            // duration: 5000,
        })
}

function openAnimateMobile() {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const animation = document.querySelector('.animation');
    const animationLogo = document.querySelector('.animationLogo');
    //target
    const nav_index = document.querySelector('.nav_index');
    const coods = nav_index.getBoundingClientRect();

    let height = coods.height;
    let width = coods.width;
    let top = coods.top;
    let left = coods.left;

    animationLogo.style.width = width;

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
        }).add({
            targets: '.animationLogo',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
        }).add({
            targets: '.animationLogo',
            easing: "easeOutExpo",
            top: top,
            left: left,
            scale: ['1.5', '1'],
            translateX: ['-25%', '0'],
            translateY: ['-25%', '0'],
            duration: 3000,
        })
        .add({
            targets: '.animation',
            opacity: [1, 0],
            easing: "easeOutExpo",
            // duration: 5000,
        })
}


//初始化swiper

var sections = new Swiper('.sections', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    nested: true,
    // mousewheel: true,
    pagination: {
        el: '.sections_pagination',
        clickable: true,
    },
    on: {

        onSlideChangeStart: function (swiper) { //滑動父級需要激活滾輪事件
            swiper.enableMousewheelControl();
        }

    }
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
    slidesPerView: 1.25,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

var mobile_environment_swiper = new Swiper('.mobile_environment_swiper_container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.mobile_environment_swiper_pagination',
    },
});

var mobile_news_swiper = new Swiper('.mobile_news_swiper_container', {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.mobile_news_swiper_pagination',
        clickable: true,
    },
});

{
    // window.setTimeout(() => {
    //     nav.forEach(element => {
    //         element.classList.remove('active');
    //     });
    //     nav[0].classList.add('active');
    // }, 100)

    //nav和swiper點點連動
    let swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet');
    let nav_clickable = document.querySelectorAll('.pc_li');
    for (let i = 0; i < nav_clickable.length; i++) {
        nav_clickable[i].addEventListener("click", () => {
            swiperPaginationBullet[i].click();
            nav_clickable.forEach(element => {
                element.classList.remove('active');
            });
            nav_clickable[i].classList.add('active');
        })
    }
}



//section的收合
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

//消息展開
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
//退回
function back() {
    news_index.style.opacity = "1";
    news_index.style.pointerEvents = "all";
    news_details.style.opacity = "0";
    news_details.style.pointerEvents = "none";
}

//model
{
    let index_now = 0;
    //model最外層
    const mask_container = document.querySelector('.mask_container');
    // model最外層
    const mask = document.querySelector('.mask');
    // 環境圖
    const envPics = document.querySelectorAll('.env_pic');
    // model的控制
    const pre_btn = document.querySelector('.pre_btn');
    const next_btn = document.querySelector('.next_btn');
    const close_btn = document.querySelector('.close_btn');
    // Banner
    const banner = document.querySelector('.banner');
    const banner_swiper_container = document.querySelector('.banner_swiper_container');
    //nav li    
    let nav = document.querySelectorAll('li');
    // 廚師的背景    
    const banner_chef = document.querySelector('.banner_chef');
    // 環境的背景
    const banner_env = document.querySelector('.banner_env');
    //env背景圖的輪播事件名稱 
    var banner_env_5s;
    // 
    let swiperPaginationBullet = document.querySelectorAll('.swiper-pagination-bullet');

    //初始化
    // 環境的輪播
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

    if (document.body.clientWidth > 768) {
        bannerEnv5s(1);
    }


    //畫面監控
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
        // 判斷在哪個頁面
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
    // swiper初始化的時候因為都是同一頁 所以要更改nav
    function initial() {
        if (first == true) {
            nav[5].classList.remove('active');
            nav[0].classList.add('active');
        }
    }
    initial();



    // model的展示  控制
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

    {
        let x = 0;

        let titles = document.querySelectorAll('.title');
        const options = {
            threshold: .7,
        }

        let title_observer = new IntersectionObserver(titleCheck, options);
        titles.forEach(title => {
            title_observer.observe(title);
        })

        function titleCheck(entries) {
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (entry.intersectionRatio > .8) {
                    x = i;
                }
            }
            entries[x].target.classList.add('show_title')
        }

    }

    {
        let x = 0;

        let contents = document.querySelectorAll('.content');
        const options = {
            threshold: .7,
        }

        let content_observer = new IntersectionObserver(contentCheck, options);
        contents.forEach(content => {
            content_observer.observe(content);
        })

        function contentCheck(entries) {
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (entry.intersectionRatio > .8) {
                    x = i;
                }
            }

            entries[x].target.classList.add('show_content')
        }
    }


}

{

    // let mobile_menu = document.querySelector('.mobile_menu_toggle');
    // let mobile_nav = document.querySelector('.mobile_nav');
    // let mobile_lis = document.querySelectorAll('.mobile_li');
    // let top = mobile_menu.querySelector('.top');
    // let middle = mobile_menu.querySelector('.middle');
    // let bottom = mobile_menu.querySelector('.bottom');

    // mobile_menu.addEventListener('click', () => {
    //     top.classList.toggle('rotate45');
    //     middle.classList.toggle('hide');
    //     bottom.classList.toggle('rotateM45');
    //     mobile_nav.classList.toggle('mobile_nav_show');
    // })


    // mobile_lis.forEach(li => {
    //     li.addEventListener('click', () => {
    //         top.classList.toggle('rotate45');
    //         middle.classList.toggle('hide');
    //         bottom.classList.toggle('rotateM45');
    //         mobile_nav.classList.toggle('mobile_nav_show');
    //     })
    // });

}

{
    let triggers = document.querySelectorAll('.trigger');
    let nav_index = document.querySelector('.nav_index');
    let initial = true;

    const options = {
        threshold: .7,
    }

    let index_observer = new IntersectionObserver(indexCheck, options);


    triggers.forEach(content => {
        index_observer.observe(content);
    })

    function indexCheck(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting == true) {
                nav_index.innerHTML = entry.target.dataset.mobileindex;
            }
        });
        if (initial) {
            nav_index.innerHTML = "L'Atelier de Patrick";
            initial = false;
        }
    }

}

function mobile_toggle() {
    let mobile_nav = document.querySelector('.mobile_nav');
    let top = document.querySelector('.top');
    let middle = document.querySelector('.middle');
    let bottom = document.querySelector('.bottom');

    top.classList.toggle('rotate45');
    middle.classList.toggle('hide');
    bottom.classList.toggle('rotateM45');
    mobile_nav.classList.toggle('mobile_nav_show');
}
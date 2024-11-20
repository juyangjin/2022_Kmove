let cartList;

window.addEventListener('load', () => {
    const grid = new Isotope("section", {
        "itemSelector":"article",
        "columnWidth":"article",
        "transitionDuration":"0.5s"
    });

    // 분류 기능에 대한 코드
    const btns = document.querySelectorAll("main ul li");
    for (let el of btns) {
        el.addEventListener("click", (event)=> {
            //event.preventDefault();
            const sort = event.currentTarget.querySelector("a").getAttribute("data-filter");
            grid.arrange({
                "filter":sort
            });
            
            for (let el of btns) {
                el.classList.remove("on");
            }
            event.currentTarget.classList.add("on");
        });
    }

    // Session Storage 초기화
    if ("cartList" in window.sessionStorage == false ){
        cartList = [];
        window.sessionStorage['cartList'] = JSON.stringify(cartList);
    } else {
        cartList = JSON.parse(window.sessionStorage['cartList']);
    }

    const basket_addBtns = document.querySelectorAll("main section article a");
    for (let el of basket_addBtns){
        el.addEventListener("click", (event) => {            
            let data_key = event.currentTarget.getAttribute("data-key");
            
            
            let toastMsg = document.querySelector('.toastCartAdd');
            toastMsg.classList.add('msgon');
            setTimeout( () => {
                toastMsg.classList.remove('msgon');
            }, 1500);
        });
    }
});


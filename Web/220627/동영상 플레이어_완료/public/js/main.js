let items = document.querySelectorAll('article');
for (let article of items) {
    article.addEventListener("mouseenter", 
        function(event) {
            event.currentTarget.querySelector('video').play();
    });
    article.addEventListener("mouseleave",
        function(event) {
            event.currentTarget.querySelector('video').pause();
        });
    
    article.addEventListener("click", 
        function(event){
            let title = event.currentTarget
                        .querySelector("h2").innerText;
            let txt = event.currentTarget
            .querySelector("p").innerText;
            let vid = event.currentTarget
            .querySelector("video").getAttribute("src");
          

            let aside = document.querySelector("main aside");

            aside.querySelector("h1").innerText = title;
            aside.querySelector("p").innerText = txt;
            aside.querySelector("video").setAttribute("src", vid);

            aside.querySelector("video").play();

            aside.classList.add("on");
    });
}

let close = document.querySelector("main aside .txt span");
close.addEventListener("click", function(event) {
    let aside = document.querySelector("main aside");
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});
console.log(items);
/*
fetch('/getVideo')
.then( (res) => {return res.json();} )
.then( (data) => {
    let articleList= document.querySelectorAll("main section article");
    //for (let idx in articleList) {
    for (let idx = 0; idx < articleList.length; idx++) {
        articleList[idx].querySelector('h2').innerText = String(data[idx].id).padStart(3, "0"); // HTML ㄱㅐㄱㅊㅔ
        articleList[idx].querySelector('p').innerText = data[idx].txt;
        articleList[idx].querySelector('video').setAttribute('src', data[idx].src);
    }
    console.log(data);
})
.catch( (err) => {
    console.log(err);
});
*/
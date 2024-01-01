let openBtn=document.querySelector(".logo i");

let body=document.querySelector("body");

let sideBar=document.getElementById("sidebar");

let closeBtn=document.getElementById("close-btn");

let darkMode=document.querySelector(".switch input")

let whiteLinks=document.querySelectorAll("#sidebar a");

let switchBut=document.querySelector(".switch");

let pg2=document.querySelectorAll(".pg-2");

let navbar=document.querySelector(".navbar");

let scrollWatcher=document.querySelector(".scroll-watcher");

let socs=document.querySelectorAll(".soc i");

let lastP=document.querySelectorAll(".more p");

openBtn.addEventListener('click',()=>{
    sideBar.style.right="0";
    openBtn.style.display="none";
    closeBtn.style.display="block";
    switchBut.style.display="none";
})


let mode="light"

closeBtn.addEventListener('click',()=>{
    sideBar.style.right="-300px";
    openBtn.style.display="block";
    closeBtn.style.display="none"
    switchBut.style.display="block";
})

darkMode.addEventListener("click",()=>{
    if (mode==="light"){
        body.style.backgroundColor="black";
        body.style.color="white";
        for(link of whiteLinks){
            link.style.color="white";
        }
        for(page of pg2){
            page.style.backgroundColor="black";
        }

        /*for(med of socs){
            med.style.color="white";
        }*/
        navbar.style.backgroundColor="black"
        scrollWatcher.style.backgroundColor="gray";
        openBtn.style.color="cornflowerblue";
        mode="dark";
    }else{
        body.style.backgroundColor="white";
        body.style.color="black";
        for(link of whiteLinks){
            link.style.color="black";
        }
        for(page of pg2){
            page.style.backgroundColor="white";
        }
        /*for(med of socs){
            med.style.color="black";
        }*/
        navbar.style.backgroundColor="white";
        scrollWatcher.style.backgroundColor="black";
        openBtn.style.color="black";
        mode="light";
    }
})

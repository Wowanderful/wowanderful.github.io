const openButton=document.querySelector(".header__open-button"),menu=document.querySelector(".main-menu"),closeButton=document.querySelector(".header__close-button"),openMenu=()=>{openButton.addEventListener("click",(function(){menu.classList.contains("hidden")&&(menu.classList.remove("hidden"),closeButton.classList.remove("hidden"),openButton.classList.add("hidden"))}))},closeMenu=()=>{closeButton.addEventListener("click",(function(){menu.classList.containes("hidden")||(menu.classList.add("hidden"),closeButton.classList.add("hidden"),openButton.classList.remove("hidden"))}))};export{openMenu};export{closeMenu};
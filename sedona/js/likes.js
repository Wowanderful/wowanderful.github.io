const likeButtons=document.querySelectorAll(".card__likes-button"),likeCounts=document.querySelectorAll(".card__likes-count"),addLikeHandler=function(e,t){e.addEventListener("click",(function(){t.textContent++}))},addLikes=()=>{for(let e=0;e<=likeButtons.length;e++)addLikeHandler(likeButtons[e],likeCounts[e])};export{addLikes};
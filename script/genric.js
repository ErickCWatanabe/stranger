const botao= document.querySelector("button");
const auvio=new Audio("assets/sound/check.mp3");  
const autio=new Audio("assets/sound/bell.mp3");  
botao.addEventListener('click',function () {
 
    auvio.play();
    auvio.volume = 0.7; 
    if (document.body.classList.contains('dark-theme')) {
       autio.play();
       autio.volume=1.1;
        
    }
});

window.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
  })

  function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');


    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/sound/${music}`;
    audio.play();
    audio.volume = 0.2;
  }
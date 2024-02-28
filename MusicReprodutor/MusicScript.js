let anterior = document.querySelector('#anterior');
let play = document.querySelector('#play');
let posterior = document.querySelector('#posterior');
let titulo = document.querySelector('#titulo');
let artista = document.querySelector('#artista');
let volume = document.querySelector('#volumee');
let volumeNumero = document.querySelector('#volumeNumero');
let duracao_position = document.querySelector('#duracao');
let slider = document.querySelector('#duracaoMusica');
let list_imagens = document.querySelector('#list-imagens');
let auto_play = document.querySelector('#auto');
let totalMusic = document.querySelector('.total');
let contagem = document.querySelector('#contagem');

let timer;
let autoplay =0;

let index_no = 0;
let playing_song = false;

//Chamr musica, foto e msc
let track = document.createElement('audio');

//Toddos beats
let todasMusicas = [
    {
        name: "Can't Leave without it",
        path: "Musicas/21 Savage Can t Leave Without It Official Audio.mp3",
        img: "Imagens/13252.jpg",
        singer: "21 Savage ft Gunna"
    },
    {
        name: "Climax MoonLight",
        path: "Musicas/Climax Moonlight Young Thug and XXXTentacion Cover.mp3",
        img: "Imagens/13257.jpg",
        singer: "Young thug"
    },
    {
        name: "Dali",
        path: "Musicas/Sjava Dali.mp3",
        img: "Imagens/13424.jpg",
        singer: "Sjava"
    },
    {
        name: "Daddy's BirthDay",
        path: "Musicas/Young Thug Daddy s Birthday Official Audio.mp3",
        img: "Imagens/13174.jpg",
        singer: "Young Thug"
    },
    {
        name: "Price",
        path: "Musicas/Young Thug Ft Starrah Price.mp3",
        img: "Imagens/16288.jpg",
        singer: "Young Thug"
    } 
];

//Todas funcoes
//Lodar musicas
function lodarMusicas(index_no){
    clearInterval(timer);
    resetar();
    track.src = todasMusicas[index_no].path;
    titulo.innerHTML = todasMusicas[index_no].name;
    list_imagens.src =  todasMusicas[index_no].img;
    artista.innerHTML  = todasMusicas[index_no].singer;
    track.load();

    totalMusic.innerHTML = todasMusicas.length;
    contagem.innerHTML = index_no +1;
    timer = setInterval(range_slider , 1000);
}

lodarMusicas(index_no);



//Checahr os noems 
function tocarBeat(){
    if(playing_song==false){
        playSong();
    } else{
        pauseSong()
    }
}

//playear o beat
function playSong(){
    track.play();
    playing_song = true;
    play.innerHTML= '<i class="fa fa-pause"></i>';
}

function pauseSong(){
    track.pause();
    playing_song = false;
    play.innerHTML= '<i class="fa fa-play"></i>';
}


//musica A seguir
function musicaAseguir(){
    if( index_no < todasMusicas.length -1){
        index_no +=1;
        lodarMusicas(index_no);
        playSong();
    } else {
        index_no =0;
        lodarMusicas(index_no);
        playSong();
    }
}

//Musica anterior e repetir o beat
function musicaAnterior(){
    if( index_no > 0){
        index_no = 0 ;
        lodarMusicas(index_no);
        playSong();
    } else {
        index_no = todasMusicas.length;
        lodarMusicas(index_no);
        playSong();
    }
}
function musicaAnterior(){
    if( index_no > 0){
        index_no -= 1 ;
        lodarMusicas(index_no);
        playSong();
    } else {
        index_no = todasMusicas.length;
        lodarMusicas(index_no);
        playSong();
    }
}

//Sileciar o beat
function silenciar_som(){
    track.volume = 0;
    volume.value = 0;
    volumeNumero.innerHTML = 0;
    console.log("a funcionar");
}
//Funco de resetar as musicas quando o beats terminar
function resetar(){
    slider.value = 0;
}

//Ajustar o Volume
function ajusta_volume(){
    volumeNumero.innerHTML =  volume.value;
    track.volume = volume.value /100;
}

//Duracao do beat
function mostrarDuracao(){
    duracao_position = track.duration *(slider.value /100);
    track.currentTime = duracao_position;
}

//autoplay
function autoplay_swicth(){
    if(autoplay ==1){
        autoplay =0;
        auto_play.style.background = "rgba(255, 255, 255, 0.2"
    } else{
        autoplay=1;
        auto_play.style.background = "#FF8A65";

    }
}

function range_slider(){
    let position =0;
     
    //update slider Position
    if(!isNaN(track.duration)){
        position =track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    
    if(track.ended){
        play.innerHTML= '<i class="fa fa-play"></i>';
        if(autoplay==1){ 
            index_no += 1;
            lodarMusicas(index_no);
            playSong();
        }
    }
    
}
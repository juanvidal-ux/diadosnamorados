const memories=[
  {
    photos:["fotos/ponto1/foto1.jpg","fotos/ponto1/foto2.jpg","fotos/ponto1/foto3.jpg"],
    song:"musicas/musica1.mp3",
    songName:"A nossa primeira trilha",
    step:"Início · 06/02/2026",
    title:"O sim que mudou tudo",
    hint:"Foi aqui que a nossa história ganhou nome, sentido e um novo começo.",
    text:"06/02/2026 foi o dia em que tudo mudou para mim. O pedido de namoro não foi só um momento bonito, foi o início oficial da nossa história — daquelas que fazem o coração ficar mais leve só de lembrar.",
    question:"Você também sente que aquele dia foi o nosso verdadeiro começo?",
    stop:"O sim que mudou tudo",
    progress:0.00
  },
  {
    photos:["fotos/ponto2/foto1.jpg","fotos/ponto2/foto2.jpg","fotos/ponto2/foto3.jpg"],
    song:"musicas/musica2.mp3",
    songName:"Jantar de março",
    step:"Parada 2 · 06/03/2026",
    title:"Nosso primeiro brinde de amor",
    hint:"Um mês depois, a nossa história já tinha sabor de encontro especial.",
    text:"No Hannover, em Moema, a gente viveu um daqueles momentos simples que ficam enormes na memória. Boa conversa, clima gostoso e aquela sensação boa de estar exatamente onde eu queria estar: com você.",
    question:"O que mais te marcou naquela noite no Hannover?",
    stop:"Brinde em Moema",
    progress:0.13
  },
  {
    photos:["fotos/ponto3/foto1.jpg","fotos/ponto3/foto2.jpg","fotos/ponto3/foto3.jpg"],
    song:"musicas/musica3.mp3",
    songName:"Nosso lado japonês",
    step:"Parada 3 · 31/03/2026",
    title:"Sabores que viraram nós",
    hint:"Entre sabores e conversa boa, fomos criando nossos próprios costumes.",
    text:"A ida ao restaurante japonês na Liberdade ficou marcada não só pela comida, mas por tudo o que esse momento representou. Foi ali que percebi ainda mais como gosto de dividir descobertas com você — e como você me fez aprender a gostar ainda mais desse universo japonês.",
    question:"Você imaginava que a comida japonesa ia virar uma parte tão nossa?",
    stop:"Sabores da Liberdade",
    progress:0.28
  },
  {
    photos:["fotos/ponto4/foto1.jpg","fotos/ponto4/foto2.jpg","fotos/ponto4/foto3.jpg"],
    song:"musicas/musica4.mp3",
    songName:"Estrada para a serra",
    step:"Parada 4 · 03/04/2026",
    title:"Entre nuvens, frio e abraços",
    hint:"Toda viagem boa vira lembrança. Essa virou uma das mais bonitas.",
    text:"Campos do Jordão foi mais do que uma viagem: foi tempo de qualidade, paisagem bonita e mais uma confirmação de como é bom criar memórias com você. Foi um daqueles capítulos que a gente leva no coração e tem vontade de reviver.",
    question:"Qual foi o momento mais especial dessa viagem para você?",
    stop:"Nosso refúgio na serra",
    progress:0.43
  },
  {
    photos:["fotos/ponto5/foto1.jpg","fotos/ponto5/foto2.jpg","fotos/ponto5/foto3.jpg"],
    song:"musicas/musica5.mp3",
    songName:"Domingo em casa",
    step:"Parada 5 · 12/04/2026",
    title:"O amor mora nos detalhes",
    hint:"Nem todo momento especial precisa de produção. Às vezes ele mora na rotina que combina.",
    text:"Estar na minha casa assistindo ao jogo do Palmeiras, curtindo o tempo juntos, falando de treino, de academia e até de comida japonesa mostrou como a nossa conexão também vive nos detalhes do dia a dia. E talvez seja justamente isso que faz tudo ficar tão bom: a gente combina até nas coisas mais simples.",
    question:"Não é bonito quando até a rotina fica melhor ao lado da pessoa certa?",
    stop:"Nosso cantinho",
    progress:0.58
  },
  {
    photos:["fotos/ponto6/foto1.jpg","fotos/ponto6/foto2.jpg","fotos/ponto6/foto3.jpg"],
    song:"musicas/musica6.mp3",
    songName:"Nosso ritmo",
    step:"Parada 6 · 31/05/2026",
    title:"O nosso ritmo preferido",
    hint:"A nossa história também tem trilha, energia e momentos para curtir juntos.",
    text:"Shows e eventos têm tudo a ver com a gente, porque carregam energia, emoção e boas memórias. E esse momento de 31/05/2026 ficou ainda mais com a nossa cara por lembrar que a gente gosta de viver experiências juntos — inclusive aquelas que fazem a gente sair sorrindo e já querer a próxima.",
    question:"Qual evento nosso você repetiria mil vezes?",
    stop:"Nosso ritmo",
    progress:0.75
  },
  {
    photos:["fotos/ponto7/foto1.jpg","fotos/ponto7/foto2.jpg","fotos/ponto7/foto3.jpg"],
    song:"musicas/musica7.mp3",
    songName:"Destino: Buenos Aires",
    step:"Parada 7 · 11/08/2026",
    title:"Quando o nosso amor ganhou asas",
    hint:"No último trajeto, o Etios dá lugar ao avião — porque a nossa história agora também voa.",
    text:"Buenos Aires representa um novo capítulo da nossa história. Não é só uma viagem, é uma lembrança grande sendo construída: nós dois, vivendo algo novo, em outro país, com a mesma vontade de continuar somando momentos bonitos juntos.",
    question:"Pronta para viver essa nova lembrança comigo?",
    stop:"Buenos Aires, meu amor",
    progress:1.00
  }
];

let current=0,unlocked=0,isDriving=false,currentPhotoIndex=0;
const $=id=>document.getElementById(id);
const cover=$("cover"),mapScreen=$("mapScreen"),startBtn=$("startBtn"),pins=document.querySelectorAll(".pin");
const modal=$("memoryModal"),closeBtn=$("closeBtn"),returnToMapBtn=$("returnToMapBtn"),mapActionBtn=$("mapActionBtn");
const memoryPhoto=$("memoryPhoto"),songName=$("songName"),memoryStep=$("memoryStep"),memoryTitle=$("memoryTitle"),memoryText=$("memoryText"),memoryQuestion=$("memoryQuestion"),postcardTag=$("postcardTag");
const galleryPrev=$("galleryPrev"),galleryNext=$("galleryNext"),photoCounter=$("photoCounter"),photoThumbs=$("photoThumbs");
const audioPlayer=$("audioPlayer"),musicBtn=$("musicBtn"),progressLabel=$("progressLabel"),percentLabel=$("percentLabel"),progressFill=$("progressFill"),routeDone=$("routeDone"),routePath=$("routePath");
const mapInstruction=$("mapInstruction"),currentStopName=$("currentStopName"),guideEyebrow=$("guideEyebrow"),guideTitle=$("guideTitle"),guideText=$("guideText"),lockedToast=$("lockedToast"),arrivalToast=$("arrivalToast"),mapPaper=$("mapPaper");
const dashCurrent=$("dashCurrent"),dashNext=$("dashNext"),dashStatus=$("dashStatus");
const finalScreen=$("finalScreen"),restartBtn=$("restartBtn"),openLetterBtn=$("openLetterBtn"),letter=$("letter");
const helpBtn=$("helpBtn"),helpModal=$("helpModal"),closeHelp=$("closeHelp"),carMarker=$("carMarker");
const routeMessage=$("routeMessage"),routeMessageText=$("routeMessageText"),routeMessageSmall=$("routeMessageSmall"),visitedStamps=$("visitedStamps"),travelLabel=$("travelLabel");

let audioCtx=null;
function initAudioContext(){
  if(!audioCtx){
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(Ctx) audioCtx = new Ctx();
  }
  if(audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}

function playTone(freq=440, when=0, duration=0.22, type="sine", volume=0.035){
  if(!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + when);
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + when);
  gain.gain.exponentialRampToValueAtTime(volume, audioCtx.currentTime + when + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + when + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(audioCtx.currentTime + when);
  osc.stop(audioCtx.currentTime + when + duration + 0.03);
}

function playTransitionChime(finalFlight=false){
  if(!audioCtx) return;
  const notes = finalFlight ? [523.25, 659.25, 783.99, 1046.50] : [523.25, 659.25, 783.99];
  notes.forEach((note, i)=> playTone(note, i*0.13, finalFlight ? 0.38 : 0.28, i===notes.length-1 ? "triangle" : "sine", finalFlight ? 0.05 : 0.04));
}

function playIntroChime(){
  if(!audioCtx) return;
  [392.00, 523.25, 659.25].forEach((note, i)=> playTone(note, i*0.12, 0.24, "sine", 0.03));
}

function isFinalLeg(){
  return current === memories.length-1;
}

function setMarkerMode(mode="car"){
  carMarker.classList.toggle("plane-mode", mode === "plane");
  travelLabel.textContent = mode === "plane" ? "Voo GOL · Buenos Aires" : "Etios 2019";
}

function setCarAtProgress(progress){
  const pathLength=routePath.getTotalLength();
  const p=routePath.getPointAtLength(pathLength*progress);
  const p2=routePath.getPointAtLength(Math.min(pathLength,pathLength*progress+2));
  const angle=Math.atan2(p2.y-p.y,p2.x-p.x)*(180/Math.PI);
  carMarker.style.left=`${(p.x/1200)*100}%`;
  carMarker.style.top=`${(p.y/760)*100}%`;
  carMarker.style.transform=`translate(-50%,-50%) rotate(${angle}deg)`;
  travelLabel.style.transform=`rotate(${-angle}deg)`;
}

function animateCar(from,to,callback){
  const duration=2300,start=performance.now();
  const finalFlight = current === memories.length-1;
  isDriving=true;
  mapPaper.classList.add("driving");
  mapPaper.classList.toggle("flying", finalFlight);
  routeMessage.classList.remove("hidden");
  routeMessageSmall.textContent = finalFlight ? "Nosso amor ganhou asas" : "Etios em movimento";
  routeMessageText.textContent = finalFlight ? "Último trecho: rumo a Buenos Aires, com o coração lá no alto..." : "Indo para a próxima parada...";
  dashStatus.textContent = finalFlight ? "Embarcando para Buenos Aires" : "Etios em movimento";

  function frame(now){
    const t=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-t,3);
    setCarAtProgress(from+(to-from)*eased);
    if(t<1) requestAnimationFrame(frame);
    else{
      isDriving=false;
      mapPaper.classList.remove("driving");
      mapPaper.classList.remove("flying");
      routeMessage.classList.add("hidden");
      carMarker.classList.add("arrived");
      setTimeout(()=>carMarker.classList.remove("arrived"),1500);
      callback && callback();
    }
  }
  requestAnimationFrame(frame);
}

function updateMap(){
  pins.forEach((pin,index)=>{
    pin.classList.remove("active","completed","locked","shake");
    if(index<current) pin.classList.add("completed");
    else if(index===current) pin.classList.add("active");
    else if(index>unlocked) pin.classList.add("locked");
  });

  const percent=Math.round(((current+1)/memories.length)*100);
  progressLabel.textContent=`Parada ${current+1} de ${memories.length}`;
  percentLabel.textContent=`${percent}%`;
  progressFill.style.width=`${percent}%`;

  const routeLength=2000;
  routeDone.style.strokeDashoffset=routeLength-(routeLength*(current/(memories.length-1)));

  const m=memories[current];
  currentStopName.textContent=m.stop;
  guideTitle.textContent=m.title;
  guideText.textContent=m.hint;
  guideEyebrow.textContent= current === memories.length-1 ? "Destino final" : "Parada atual";
  mapInstruction.textContent= current === memories.length-1 ? "Agora é hora de embarcar na lembrança final." : "O mapa guiou a rota até esta parada.";
  mapActionBtn.textContent="Revelar lembrança";

  dashCurrent.textContent=m.stop;
  dashNext.textContent=current < memories.length-1 ? memories[current+1].stop : "Fim da rota";
  dashStatus.textContent=current === memories.length-1 ? "Destino alcançado" : "Pronto para revelar";

  setMarkerMode(current === memories.length-1 ? "plane" : "car");
}

function toast(el){
  el.classList.remove("hidden");
  setTimeout(()=>el.classList.add("hidden"),1600);
}

function addVisitedStamp(index){
  if(document.querySelector(`[data-stamp="${index}"]`)) return;
  const stamp=document.createElement("div");
  stamp.className="visited-stamp";
  stamp.dataset.stamp=index;
  stamp.textContent=`${memories[index].stop} visitado`;
  visitedStamps.appendChild(stamp);
}

function getPhotos(memory){
  return memory.photos || (memory.photo ? [memory.photo] : []);
}

function animatePhotoTransition(){
  memoryPhoto.classList.remove("photo-anim");
  void memoryPhoto.offsetWidth;
  memoryPhoto.classList.add("photo-anim");
}

function renderPhotoGallery(memory){
  const photos=getPhotos(memory).slice(0,3);
  if(!photos.length) return;
  currentPhotoIndex=Math.min(currentPhotoIndex,photos.length-1);
  memoryPhoto.src=photos[currentPhotoIndex];
  memoryPhoto.alt=`Foto ${currentPhotoIndex+1} da lembrança`;
  animatePhotoTransition();
  photoCounter.textContent=`${currentPhotoIndex+1}/${photos.length}`;
  photoThumbs.innerHTML="";
  photos.forEach((src,index)=>{
    const btn=document.createElement("button");
    btn.className=`photo-thumb ${index===currentPhotoIndex?"active":""}`;
    btn.type="button";
    btn.setAttribute("aria-label",`Abrir foto ${index+1}`);
    btn.innerHTML=`<img src="${src}" alt="Miniatura ${index+1}">`;
    btn.addEventListener("click",()=>{currentPhotoIndex=index;renderPhotoGallery(memory);});
    photoThumbs.appendChild(btn);
  });
  const showArrows=photos.length>1;
  galleryPrev.style.display=showArrows?"grid":"none";
  galleryNext.style.display=showArrows?"grid":"none";
}

function changePhoto(direction){
  const memory=memories[current];
  const photos=getPhotos(memory).slice(0,3);
  if(photos.length<=1) return;
  currentPhotoIndex=(currentPhotoIndex+direction+photos.length)%photos.length;
  renderPhotoGallery(memory);
}

function openMemory(index){
  initAudioContext();
  if(isDriving) return;
  if(index>unlocked || index!==current){
    pins[index]?.classList.add("shake");
    toast(lockedToast);
    setTimeout(()=>pins[index]?.classList.remove("shake"),350);
    return;
  }
  const m=memories[current];
  currentPhotoIndex=0;
  renderPhotoGallery(m);
  songName.textContent=m.songName;
  memoryStep.textContent=m.step;
  memoryTitle.textContent=m.title;
  memoryText.textContent=m.text;
  memoryQuestion.textContent=m.question;
  postcardTag.textContent=`Postal · ${m.step}`;
  audioPlayer.pause();
  audioPlayer.currentTime=0;
  audioPlayer.src=m.song;
  modal.classList.add("open");
  updateMap();
  audioPlayer.play().then(()=>musicBtn.textContent="Pausar").catch(()=>musicBtn.textContent="Tocar");
}

function closeMemory(){
  modal.classList.remove("open");
  audioPlayer.pause();
  audioPlayer.currentTime=0;
}

function completeCurrentAndReturnToMap(){
  closeMemory();
  addVisitedStamp(current);

  if(current < memories.length-1){
    const from=memories[current].progress;
    current+=1;
    unlocked=Math.max(unlocked,current);
    const to=memories[current].progress;
    updateMap();
    animateCar(from,to,()=>{
      updateMap();
      playTransitionChime(current === memories.length-1);
      toast(arrivalToast);
    });
  }else{
    finalScreen.classList.remove("hidden");
  }
}

function toggleMusic(){
  initAudioContext();
  if(audioPlayer.paused){
    audioPlayer.play();
    musicBtn.textContent="Pausar";
  }else{
    audioPlayer.pause();
    musicBtn.textContent="Tocar";
  }
}

startBtn.addEventListener("click",()=>{
  initAudioContext();
  playIntroChime();
  cover.classList.add("hidden");
  mapScreen.classList.remove("hidden");
  setMarkerMode("car");
  setCarAtProgress(memories[0].progress);
  updateMap();
  carMarker.classList.add("arrived");
  setTimeout(()=>carMarker.classList.remove("arrived"),1300);
});

pins.forEach(pin=>pin.addEventListener("click",()=>openMemory(Number(pin.dataset.index))));
mapActionBtn.addEventListener("click",()=>openMemory(current));
closeBtn.addEventListener("click",closeMemory);
returnToMapBtn.addEventListener("click",completeCurrentAndReturnToMap);
musicBtn.addEventListener("click",toggleMusic);
galleryPrev.addEventListener("click",()=>changePhoto(-1));
galleryNext.addEventListener("click",()=>changePhoto(1));
audioPlayer.addEventListener("ended",()=>musicBtn.textContent="Tocar novamente");
modal.addEventListener("click",e=>{if(e.target===modal)closeMemory()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMemory()});

openLetterBtn.addEventListener("click",()=>{
  letter.classList.toggle("hidden");
  openLetterBtn.textContent=letter.classList.contains("hidden")?"Abrir carta final":"Fechar carta final";
});

restartBtn.addEventListener("click",()=>{
  current=0;
  unlocked=0;
  isDriving=false;
  currentPhotoIndex=0;
  visitedStamps.innerHTML="";
  letter.classList.add("hidden");
  openLetterBtn.textContent="Abrir carta final";
  finalScreen.classList.add("hidden");
  cover.classList.remove("hidden");
  mapScreen.classList.add("hidden");
  routeMessage.classList.add("hidden");
  setMarkerMode("car");
  setCarAtProgress(memories[0].progress);
  updateMap();
});

helpBtn.addEventListener("click",()=>helpModal.classList.remove("hidden"));
closeHelp.addEventListener("click",()=>helpModal.classList.add("hidden"));

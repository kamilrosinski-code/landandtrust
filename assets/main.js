(()=>{
  const nav=document.getElementById('nav');
  const hs=document.getElementById('hscroll'),track=document.getElementById('track'),bar=document.getElementById('bar');
  const px=document.getElementById('parallax');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const narrow=matchMedia('(max-width:900px)');
  const slides=[...track.querySelectorAll('.slide img')];
  let ticking=false;
  function frame(){
    ticking=false;
    const y=scrollY;
    nav.classList.toggle('scrolled',y>40);
    if(reduce.matches) return;
    if(!narrow.matches){
      const r=hs.getBoundingClientRect();
      const total=hs.offsetHeight-innerHeight;
      const p=Math.min(1,Math.max(0,-r.top/total));
      const max=track.scrollWidth-innerWidth;
      track.style.transform=`translate3d(${-p*max}px,0,0)`;
      bar.style.transform=`scaleX(${p})`;
      slides.forEach(img=>{
        const b=img.getBoundingClientRect();
        const c=(b.left+b.width/2-innerWidth/2)/innerWidth;
        img.style.transform=`scale(1.14) translateX(${c*-6}%)`;
      });
    }
    if(px){
      const b=px.parentElement.getBoundingClientRect();
      const c=(b.top+b.height/2-innerHeight/2)/innerHeight;
      px.style.transform=`translate3d(0,${c*-9}%,0)`;
    }
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
  addEventListener('scroll',onScroll,{passive:true});
  addEventListener('resize',onScroll);
  frame();

  document.getElementById('form').addEventListener('submit',e=>{
    e.preventDefault();
    const f=e.target, note=document.getElementById('note');
    if(!f.name.value.trim()||!f.contact.value.trim()){note.textContent='Uzupełnij imię i dane kontaktowe.';return}
    note.textContent='To wersja demonstracyjna – formularz zostanie podłączony przy wdrożeniu strony.';
  });
})();

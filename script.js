const svg = document.getElementById('particles');
    const DOTS = [
      {x:8,y:12},{x:20,y:5},{x:35,y:18},{x:50,y:8},{x:65,y:22},{x:78,y:10},
      {x:90,y:30},{x:15,y:40},{x:42,y:45},{x:60,y:55},{x:82,y:48},{x:25,y:70},
      {x:55,y:75},{x:72,y:80},{x:88,y:65},{x:5,y:80},{x:38,y:88},{x:93,y:85},
      {x:48,y:28},{x:12,y:58}
    ];
    const LINES = [
      [0,1],[1,2],[2,18],[18,3],[3,4],[4,5],[5,6],[7,11],[11,15],[7,19],
      [8,9],[9,10],[12,13],[13,14],[12,11],[8,18],[9,4],[13,10]
    ];
    LINES.forEach(([a,b]) => {
      const l = document.createElementNS('http://www.w3.org/2000/svg','line');
      l.setAttribute('x1',DOTS[a].x); l.setAttribute('y1',DOTS[a].y);
      l.setAttribute('x2',DOTS[b].x); l.setAttribute('y2',DOTS[b].y);
      l.setAttribute('stroke','#7546e8'); l.setAttribute('stroke-width','0.15'); l.setAttribute('stroke-opacity','0.6');
      svg.appendChild(l);
    });
    DOTS.forEach((d,i) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',d.x); c.setAttribute('cy',d.y);
      c.setAttribute('r', i%4===0 ? '0.6' : '0.35');
      c.setAttribute('fill', i%3===0 ? '#c8b3f6' : '#7546e8');
      c.style.animation = `pulse-dot ${2.5+(i%4)*0.5}s ease-in-out infinite`;
      c.style.animationDelay = `${(i*0.3)%2}s`;
      svg.appendChild(c);
    });
    
    const typedEl = document.getElementById('typed-text');
    const fullText = 'Desenvolvedora Front-End em Formação';
    let i = 0, deleting = false;
    function tick() {
      if (!deleting) {
        i++;
        typedEl.textContent = fullText.slice(0, i);
        if (i === fullText.length) { setTimeout(() => { deleting = true; tick(); }, 2000); return; }
      } else {
        i--;
        typedEl.textContent = fullText.slice(0, i);
        if (i === 0) { deleting = false; setTimeout(tick, 500); return; }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    setTimeout(tick, 300);
    
    const root = document.getElementById('scroll-root');
    const navbar = document.getElementById('navbar');
    const backTop = document.getElementById('back-top');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    root.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', root.scrollTop > 30);
      backTop.classList.toggle('visible', root.scrollTop > 300);

      let current = '';
      sections.forEach(sec => {
        if (root.scrollTop >= sec.offsetTop - 200) current = sec.id;
      });
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === current));
    });

    navLinks.forEach(l => {
      l.addEventListener('click', () => {
        document.getElementById(l.dataset.target).scrollIntoView({ behavior: 'smooth' });
      });
    });

    backTop.addEventListener('click', () => root.scrollTo({ top: 0, behavior: 'smooth' }));

    
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObserver.observe(el));

    
    const projects = [
    {
        title: 'Web Music',
        desc: 'Interface intuitiva de um reprodutor de musica online.',
        tags: ['Figma', 'HTML', 'CSS', 'JavaScript'],
        img: 'img/projeto0.PNG',   
        link: 'https://beatrizcavalcante-dev.github.io/WebMusic/'  
    },
  
    {
      title: 'Stock — Sistema de Estoque',
      desc: 'Sistema web full-stack de gerenciamento de estoque com dashboard, cadastro de produtos, controle de entradas e saídas, histórico de movimentações e alertas de estoque baixo.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'SQLite'],
      img: 'img/projeto7.PNG',
      link: 'https://beatrizcavalcante-dev.github.io/estoque-app/'
    },  

    {
        title: 'Landing E-commerce',
        desc: 'Página de apresentação para startup de tecnologia com design moderno e responsivo.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        img: 'img/projeto1.PNG',
        link: 'https://beatrizcavalcante-dev.github.io/Landing-e-commerce/'
    },
    {
        title: 'Protótipo App Streaming',
        desc: 'Criação de um Protótipo de Aplicativo Streaming. Desenvolvido para trabalho da Faculdade.',
        tags: ['Figma', 'Design'],
        img: 'img/projeto3.PNG',
        link: 'https://www.figma.com/design/tIgTY8awAO0lw6nQLN2LN8/Prot%C3%B3tipo-Crunchyroll?node-id=0-1&m=dev&t=77SNFcqhYkpqY5N9-1'
    },
    {
        title: 'App Streaming',
        desc: 'Protótipo de Aplicativo Streaming Finalizado. Desenvolvido para trabalho da Faculdade.',
        tags: ['Figma', 'Design', 'HTML', 'CSS', 'JavaScrip'],
        img: 'img/projeto5.PNG',
        link: 'https://www.figma.com/design/tIgTY8awAO0lw6nQLN2LN8/Prot%C3%B3tipo-Crunchyroll?node-id=0-1&m=dev&t=77SNFcqhYkpqY5N9-1'
    },
    {
        title: 'Protótipo Portfólio',
        desc: 'Criação de designer do meu primeiro portfólio.',
        tags: ['Figma', 'Design'],
        img: 'img/projeto4.PNG',
        link: 'https://www.figma.com/design/MWYM1n4e1nvPY9u0pgNOgT/Portf%C3%B3lio?node-id=0-1&m=dev&t=9bnrXbFwHdDdwnsO-1'
    },
    {
        title: 'Primeiro Portfólio',
        desc: 'Interface finalizada após criação no Figma',
        tags: ['Figma', 'Design', 'HTML', 'CSS', 'JavaScrip'],
        img: 'img/projeto6.PNG',
        link: 'https://beatrizcavalcante-dev.github.io/Portfolio-BeatrizC/'
    },
    ];

    let current = 0;

    function renderProject() {
        const p = projects[current];

        const linkEl = document.getElementById('proj-link');
        linkEl.setAttribute('href', p.link);

        document.getElementById('proj-img').src = p.img;
        document.getElementById('proj-img').alt = p.title;
        document.getElementById('proj-title').textContent = p.title;
        document.getElementById('proj-desc').textContent = p.desc;
        
        const tagsEl = document.getElementById('proj-tags');
        tagsEl.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

        const dotsEl = document.getElementById('carousel-dots');
        dotsEl.innerHTML = projects.map((_,i) => `<button class="dot${i===current?' active':''}" onclick="goTo(${i})"></button>`).join('');
        
        document.getElementById('carousel-counter').textContent = `${current+1} / ${projects.length}`;
    }

    function goTo(n) { current = n; renderProject(); }
    document.getElementById('prev-btn').onclick = () => goTo((current - 1 + projects.length) % projects.length);
    document.getElementById('next-btn').onclick = () => goTo((current + 1) % projects.length);


    const colors = [
      '#e0b8f8',
      '#d63ad4', 
      '#9b4de0',
      '#c9b8f0',
      '#ffffff'
    ]

    let lastX = 0, lastY = 0

    document.addEventListener('mousemove', function(e) {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY)
      if (dist < 8) return // só cria partícula se o mouse mover o suficiente
    
      lastX = e.clientX
      lastY = e.clientY
    
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const p = document.createElement('div')
          const size = Math.random() * 5 + 2
          const color = colors[Math.floor(Math.random() * colors.length)]
          const angle = Math.random() * Math.PI * 2
          const dist = Math.random() * 25 + 8
        
          p.style.cssText = `
            position:fixed;
            width:${size}px;
            height:${size}px;
            background:${color};
            box-shadow:0 0 ${size * 2}px ${color};
            border-radius:50%;
            left:${e.clientX}px;
            top:${e.clientY}px;
            pointer-events:none;
            z-index:9999;
            transition:transform 0.8s ease-out, opacity 0.8s ease-out;
            will-change:transform,opacity;
          `
        
          document.body.appendChild(p)
        
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              p.style.transform = `translate(
                calc(-50% + ${Math.cos(angle) * dist}px),
                calc(-50% + ${Math.sin(angle) * dist}px)
              )`
              p.style.opacity = '0'
            })
          })
        
          setTimeout(() => p.remove(), 900)
        }, i * 40)
      }
    })


renderProject();

    




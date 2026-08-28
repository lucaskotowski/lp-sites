(() => {
  const WHATSAPP_NUMBER = '5555999990000';
  const MESSAGES = {
    hero: 'Olá! Vim pelo site e gostaria de agendar um serviço para meu carro.',
    orcamento: 'Olá! Gostaria de solicitar um orçamento para meu carro.',
    localizacao: 'Olá! Gostaria de saber mais sobre a oficina e os serviços.',
    final: 'Olá! Encontrei a oficina pelo site e gostaria de falar com vocês sobre meu carro.',
    revisao: 'Olá! Vim pelo site e gostaria de saber mais sobre a revisão preventiva.',
    diagnostico: 'Olá! Vim pelo site e gostaria de saber mais sobre o diagnóstico eletrônico.',
    oleo: 'Olá! Vim pelo site e gostaria de saber mais sobre a troca de óleo.',
    eletrica: 'Olá! Vim pelo site e gostaria de saber mais sobre bateria e sistema elétrico.',
  };

  function waLink(key) {
    const message = MESSAGES[key] || MESSAGES.hero;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  document.querySelectorAll('[data-wa-msg]').forEach((el) => {
    el.href = waLink(el.getAttribute('data-wa-msg'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  const waFloat = document.getElementById('waFloat');
  if (waFloat) {
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const hidden = y > 40 && y > lastY;
      waFloat.classList.toggle('hidden', hidden);
      lastY = y;
    }, { passive: true });
  }
})();

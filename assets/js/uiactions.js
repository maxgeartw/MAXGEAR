//數字跳動
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  let triggered = false;

  function parseTarget(raw) {
    const hasPlus = /\+/.test(raw);//辨識+
    const hasPercent = /%/.test(raw);//辨識%
    const num = parseInt(String(raw).replace(/\D/g, ''), 10) || 0;

    let suffix = '';
    if (hasPlus) suffix += '+';
    if (hasPercent) suffix += '%';

    return { num, suffix };
  }

  function animateCounters() {
    counters.forEach(counter => {
      const rawTarget = counter.getAttribute('data-target');
      const { num: target, suffix } = parseTarget(rawTarget);

      if (target === 0 && rawTarget !== '0') {
        counter.innerText = rawTarget;
        return;
      }

      // 動畫參數（可調）
      const duration = 1200; // 總動畫時間 (ms)
      const frameRate = 60;  // 約每秒更新次數
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;
      const start = 0;

      const counterTick = () => {
        frame++;
        const progress = frame / totalFrames;
        const eased = 1 - Math.pow(1 - progress, 3); 
        const current = Math.round(start + (target - start) * eased);

        counter.innerText = (current >= target ? target : current) + suffix;

        if (frame < totalFrames) {
          requestAnimationFrame(counterTick);
        } else {
          counter.innerText = target + suffix;
        }
      };

      requestAnimationFrame(counterTick);
    });
  }

  const statsSection = document.querySelector('#stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          animateCounters();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  } else {
    animateCounters();
  }

// 滑入動畫
  const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .fade-in');
  const slideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0; // 延遲
        setTimeout(() => {
        entry.target.classList.add('show');
        }, delay);
        slideObserver.unobserve(entry.target); 
      }
    });
    },{ threshold: 0.1 }
  );

  slideElements.forEach(el => slideObserver.observe(el));

});

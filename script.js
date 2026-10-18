(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Quotation enquiry from ${data.get('name')}`;
    const body = [
      'Hello Asarity Safety Wear Solutions Limited,', '',
      'I would like to enquire about PPE / workwear products.', '',
      `Name / Organisation: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Industry: ${data.get('industry') || 'Not specified'}`,
      `Delivery location: ${data.get('delivery') || 'Not specified'}`, '',
      'Products and requirements:', data.get('products'), '',
      'Kind regards,', data.get('name')
    ].join('\n');
    const mailto = `mailto:asaritysales@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = 'Your email application should open with the enquiry details. Review the message and send it to Asarity.';
    window.location.href = mailto;
  });
})();

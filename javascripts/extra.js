/* Wits MedWiki — Extra JavaScript
   Auto-injects Diataxis type badge based on page URL path
*/

document$.subscribe(function() {
  const path = window.location.pathname;
  const article = document.querySelector('.md-content article');
  if (!article) return;

  // Detect type from URL segment
  let type = null;
  if (path.includes('/tutorial-'))    type = 'tutorial';
  else if (path.includes('/howto-'))  type = 'howto';
  else if (path.includes('/ref-'))    type = 'reference';
  else if (path.includes('/explanation-')) type = 'explanation';

  if (!type) return;

  const config = {
    tutorial:    { icon: '🎓', label: 'Tutorial',     desc: 'Learning-oriented',      bg: '#E8F5E9', border: '#43A047', color: '#1B5E20' },
    howto:       { icon: '🔧', label: 'How-To Guide', desc: 'Task-oriented',           bg: '#E3F2FD', border: '#1E88E5', color: '#0D47A1' },
    reference:   { icon: '📖', label: 'Reference',    desc: 'Information-oriented',    bg: '#FFF3E0', border: '#FB8C00', color: '#E65100' },
    explanation: { icon: '💡', label: 'Explanation',  desc: 'Understanding-oriented',  bg: '#F3E5F5', border: '#8E24AA', color: '#4A148C' },
  };

  const c = config[type];
  const badge = document.createElement('div');
  badge.style.cssText = `
    background: ${c.bg};
    border-left: 4px solid ${c.border};
    color: ${c.color};
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.4rem 1rem;
    border-radius: 0 6px 6px 0;
    margin-bottom: 0.75rem;
    display: inline-block;
    font-family: 'IBM Plex Sans', sans-serif;
  `;
  badge.textContent = `${c.icon} ${c.label} — ${c.desc}`;

  const h1 = article.querySelector('h1');
  if (h1) {
    article.insertBefore(badge, h1);
  }
});

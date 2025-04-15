async function includeMetaTags() {
    const head = document.querySelector("head");
    try {
      const response = await fetch('../includes/page-meta.html');
      if (!response.ok) throw new Error(`Meta fetch error: ${response.status}`);
      const html = await response.text();
  
      // Add a temporary container
      const temp = document.createElement('div');
      temp.innerHTML = html;
  
      // Move all meta/link/script tags into <head>
      const tags = temp.querySelectorAll('meta, link, script');
      tags.forEach(tag => head.appendChild(tag.cloneNode(true)));
  
    } catch (err) {
      console.error("Meta tag error:", err);
    }
  }
  
  function replaceMetaPlaceholders() {
    const baseUrl = 'https://speedfixplumbing.co.uk';
    const path = window.location.pathname;
  
    const pageData = {
      '/pages/Home/home.html': {
        title: 'SpeedFix Plumbing | Emergency Plumbing in Cambridge',
        description: '24/7 plumbing services in Cambridge. Emergency repair, boiler installation, and more.',
        keywords: 'plumbing, emergency, Cambridge, leak repair',
        image: '/img/preview-home.jpg'
      },
      '/pages/Services/services.html': {
        title: 'Plumbing Services | SpeedFix Plumbing Cambridge',
        description: 'Explore our plumbing services: leak repair, boiler fix, pipe install & more.',
        keywords: 'boiler fix, plumbing services, leak detection',
        image: '/img/preview-services.jpg'
      },
      '/pages/Contact/contact.html': {
        title: 'Contact Us | SpeedFix Plumbing Cambridge',
        description: 'Need help? Contact SpeedFix Plumbing today — fast and reliable service.',
        keywords: 'contact plumber, call plumbing, Cambridge emergency',
        image: '/img/preview-contact.jpg'
      },
      '/pages/About/about.html': {
        title: 'About Us | SpeedFix Plumbing Cambridge',
        description: 'Need help? Contact SpeedFix Plumbing today — fast and reliable service.',
        keywords: 'contact plumber, call plumbing, Cambridge emergency',
        image: '/img/preview-contact.jpg'
      }
    };
  
    const data = pageData[path] || pageData['/pages/Home/home.html'];
  
    document.querySelectorAll('meta, link[rel="canonical"], script[type="application/ld+json"]').forEach(tag => {
      let content = tag.getAttribute('content') || tag.getAttribute('href') || tag.textContent;
      if (!content) return;
  
      content = content
        .replace(/\[PAGE_TITLE\]/g, data.title)
        .replace(/\[PAGE_DESCRIPTION\]/g, data.description)
        .replace(/\[PAGE_KEYWORDS\]/g, data.keywords)
        .replace(/\[PAGE_IMAGE\]/g, baseUrl + data.image)
        .replace(/\[PAGE_URL\]/g, baseUrl + path);
  
      if (tag.hasAttribute('content')) tag.setAttribute('content', content);
      else if (tag.hasAttribute('href')) tag.setAttribute('href', content);
      else tag.textContent = content;
    });
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    await includeMetaTags();
    replaceMetaPlaceholders();
  });
  
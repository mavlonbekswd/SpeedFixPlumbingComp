// Modern map section switching logic
// City data: update with your actual addresses and Google Maps embed links
const cityData = {
  cambridge: {
    name: "Cambridge",
    address: "Helen Close, Cambridge, CB5 5TW, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0479296724957!2d0.1196283!3d52.2053371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d85d89f32a012d%3A0x63a320e1a35e3d21!2sCambridge%2C%20UK!5e0!3m2!1sen!2suk!4v1709561533971!5m2!1sen!2suk"
  },
  peterborough: {
    name: "Peterborough",
    address: "Peterborough, PE1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456!2d-0.2405!3d52.5695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0x1234567890abcdef!2sPeterborough!5e0!3m2!1sen!2suk!4v1710000000000"
  },
  norwich: {
    name: "Norwich",
    address: "Norwich, NR1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.654321!2d1.2974!3d52.6309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d9e2b1b1b1b1%3A0xabcdef1234567890!2sNorwich!5e0!3m2!1sen!2suk!4v1710000000001"
  },
  ipswich: {
    name: "Ipswich",
    address: "Ipswich, IP1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.987654!2d1.1482!3d52.0567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9a2e2b1b1b1b1%3A0xabcdefabcdefabcd!2sIpswich!5e0!3m2!1sen!2suk!4v1710000000002"
  },
  bedford: {
    name: "Bedford",
    address: "Bedford, MK40, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.111111!2d-0.4668!3d52.1361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sBedford!5e0!3m2!1sen!2suk!4v1710000000003"
  },
  stevenage: {
    name: "Stevenage",
    address: "Stevenage, SG1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.222222!2d-0.2027!3d51.9022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sStevenage!5e0!3m2!1sen!2suk!4v1710000000004"
  },
  chelmsford: {
    name: "Chelmsford",
    address: "Chelmsford, CM1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.333333!2d0.4692!3d51.7355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sChelmsford!5e0!3m2!1sen!2suk!4v1710000000005"
  },
  colchester: {
    name: "Colchester",
    address: "Colchester, CO1, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.444444!2d0.8919!3d51.8959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sColchester!5e0!3m2!1sen!2suk!4v1710000000006"
  },
  ely: {
    name: "Ely",
    address: "Ely, CB7, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.555555!2d0.2621!3d52.3994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sEly!5e0!3m2!1sen!2suk!4v1710000000007"
  },
  thetford: {
    name: "Thetford",
    address: "Thetford, IP24, United Kingdom",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.666666!2d0.7477!3d52.4138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876654e2b1b1b1b%3A0xabcdefabcdefabcd!2sThetford!5e0!3m2!1sen!2suk!4v1710000000008"
  }
};

// DOM elements
const cards = document.querySelectorAll('.location-card');
let mapIframe = document.getElementById('map-iframe');
let mapAddress = document.getElementById('map-address');

// If iframe doesn't exist, create and insert it
if (!mapIframe) {
  const mapSectionMap = document.querySelector('.map-section__map .map-container');
  mapIframe = document.createElement('iframe');
  mapIframe.id = 'map-iframe';
  mapIframe.width = '100%';
  mapIframe.height = '100%';
  mapIframe.style.border = 'none';
  mapIframe.setAttribute('allowfullscreen', '');
  mapIframe.setAttribute('loading', 'lazy');
  mapIframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  if (mapSectionMap) mapSectionMap.appendChild(mapIframe);
}

// If address doesn't exist, create and insert it
if (!mapAddress) {
  mapAddress = document.createElement('div');
  mapAddress.id = 'map-address';
  const mapSectionMap = document.querySelector('.map-section__map .map-container');
  if (mapSectionMap) mapSectionMap.parentNode.insertBefore(mapAddress, mapSectionMap);
}

function setActiveCity(cityKey) {
  // Remove active from all
  cards.forEach(card => card.classList.remove('active'));
  // Add active to selected
  const activeCard = document.querySelector(`.location-card[data-location="${cityKey}"]`);
  if (activeCard) activeCard.classList.add('active');
  // Update address
  if (mapAddress && cityData[cityKey]) {
    mapAddress.innerHTML = `<div style="font-weight:600;color:var(--amber);font-size:1.1em;"><i class='fas fa-map-marker-alt'></i> ${cityData[cityKey].name}</div><div style="color:var(--navy);font-size:1em;">${cityData[cityKey].address}</div>`;
  }
  // Update map
  if (mapIframe && cityData[cityKey]) {
    mapIframe.src = cityData[cityKey].map;
  }
}

cards.forEach(card => {
  card.addEventListener('click', function() {
    const cityKey = this.dataset.location;
    setActiveCity(cityKey);
  });
});

// Trigger first city on load
if (cards.length) setActiveCity(cards[0].dataset.location); 
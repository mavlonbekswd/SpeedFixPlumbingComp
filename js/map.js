// document.addEventListener('DOMContentLoaded', function() {
//     const locationCards = document.querySelectorAll('.location-card');
//     const locationMarkers = document.querySelectorAll('.location-marker');
//     const mapIframe = document.querySelector('.map-container iframe');
//     const baseMapUrl = 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=';

//     // Updated location coordinates for East of England
//     const locations = {
//         cambridge: { lat: 52.2053, lng: 0.1218, name: 'Cambridge' },
//         peterborough: { lat: 52.5695, lng: -0.2405, name: 'Peterborough' },
//         norwich: { lat: 52.6309, lng: 1.2974, name: 'Norwich' },
//         ipswich: { lat: 52.0567, lng: 1.1482, name: 'Ipswich' },
//         bedford: { lat: 52.1361, lng: -0.4668, name: 'Bedford' },
//         stevenage: { lat: 51.9022, lng: -0.2027, name: 'Stevenage' },
//         chelmsford: { lat: 51.7355, lng: 0.4692, name: 'Chelmsford' },
//         colchester: { lat: 51.8959, lng: 0.8919, name: 'Colchester' },
//         luton: { lat: 51.8787, lng: -0.4200, name: 'Luton' },
//         stalbans: { lat: 51.7520, lng: -0.3343, name: 'St Albans' },
//         watford: { lat: 51.6565, lng: -0.3903, name: 'Watford' },
//         ely: { lat: 52.3994, lng: 0.2621, name: 'Ely' },
//         thetford: { lat: 52.4138, lng: 0.7477, name: 'Thetford' },
//         newmarket: { lat: 52.2453, lng: 0.4097, name: 'Newmarket' },
//         bury: { lat: 52.2429, lng: 0.7147, name: 'Bury St Edmunds' }
//     };

//     // Map styles
//     const mapStyles = [
//         {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
//         },
//         {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
//         },
//         {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [{"color": "#dedede"}, {"lightness": 21}]
//         },
//         {
//             "elementType": "labels.text.stroke",
//             "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
//         },
//         {
//             "elementType": "labels.text.fill",
//             "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
//         },
//         {
//             "elementType": "labels.icon",
//             "stylers": [{"visibility": "off"}]
//         },
//         {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
//         },
//         {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
//         }
//     ];

//     // Function to update active state
//     function updateActiveState(location) {
//         // Update cards
//         locationCards.forEach(card => {
//             card.classList.toggle('active', card.dataset.location === location);
//         });

//         // Update markers
//         locationMarkers.forEach(marker => {
//             marker.classList.toggle('active', marker.dataset.location === location);
//         });

//         // Update map location
//         if (locations[location]) {
//             mapIframe.src = baseMapUrl + encodeURIComponent(locations[location]);
//         }
//     }

//     // Add click event listeners to location cards
//     locationCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const location = this.dataset.location;
//             updateActiveState(location);

//             // Scroll marker into view on mobile
//             if (window.innerWidth <= 991) {
//                 const marker = document.querySelector(`.location-marker[data-location="${location}"]`);
//                 marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             }
//         });
//     });

//     // Add click event listeners to map markers
//     locationMarkers.forEach(marker => {
//         marker.addEventListener('click', function() {
//             const location = this.dataset.location;
//             updateActiveState(location);

//             // Scroll card into view on mobile
//             if (window.innerWidth <= 991) {
//                 const card = document.querySelector(`.location-card[data-location="${location}"]`);
//                 card.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             }
//         });
//     });

//     // Add hover effects
//     locationCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-4px)';
//             const location = this.dataset.location;
//             const marker = document.querySelector(`.location-marker[data-location="${location}"]`);
//             marker.querySelector('.marker-label').style.opacity = '1';
//         });

//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//             const location = this.dataset.location;
//             const marker = document.querySelector(`.location-marker[data-location="${location}"]`);
//             if (!marker.classList.contains('active')) {
//                 marker.querySelector('.marker-label').style.opacity = '0';
//             }
//         });
//     });

//     // Initialize the map when the DOM is loaded
//     async function initMap() {
//         // Map center coordinates (Cambridge)
//         const center = { lat: 52.2053, lng: 0.1218 };

//         // Create the map
//         const map = new google.maps.Map(document.getElementById('google-map'), {
//             zoom: 9,
//             center: center,
//             mapTypeId: 'roadmap',
//             styles: [
//                 {
//                     "featureType": "water",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
//                 },
//                 {
//                     "featureType": "landscape",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
//                 },
//                 {
//                     "featureType": "road.highway",
//                     "elementType": "geometry.fill",
//                     "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
//                 },
//                 {
//                     "featureType": "road.highway",
//                     "elementType": "geometry.stroke",
//                     "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
//                 },
//                 {
//                     "featureType": "road.arterial",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
//                 },
//                 {
//                     "featureType": "road.local",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
//                 },
//                 {
//                     "featureType": "poi",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
//                 },
//                 {
//                     "featureType": "poi.park",
//                     "elementType": "geometry",
//                     "stylers": [{"color": "#dedede"}, {"lightness": 21}]
//                 }
//             ],
//             disableDefaultUI: true,
//             zoomControl: true,
//             scrollwheel: false
//         });

//         // Define locations
//         const locations = [
//             { name: 'Cambridge', position: { lat: 52.2053, lng: 0.1218 }, active: true },
//             { name: 'Peterborough', position: { lat: 52.5695, lng: -0.2405 } },
//             { name: 'Norwich', position: { lat: 52.6309, lng: 1.2974 } },
//             { name: 'Ipswich', position: { lat: 52.0567, lng: 1.1482 } },
//             { name: 'Bedford', position: { lat: 52.1361, lng: -0.4668 } },
//             { name: 'Stevenage', position: { lat: 51.9022, lng: -0.2027 } },
//             { name: 'Chelmsford', position: { lat: 51.7355, lng: 0.4692 } },
//             { name: 'Colchester', position: { lat: 51.8959, lng: 0.8919 } },
//             { name: 'Ely', position: { lat: 52.3994, lng: 0.2621 } },
//             { name: 'Thetford', position: { lat: 52.4138, lng: 0.7477 } }
//         ];

//         // Load the marker library
//         const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//         // Create markers and circles for each location
//         locations.forEach(location => {
//             // Create marker element
//             const markerElement = document.createElement('div');
//             markerElement.className = 'custom-marker';
//             markerElement.innerHTML = `
//                 <div class="marker-pin" style="background-color: ${location.active ? '#FFD700' : '#003366'}">
//                     <span class="marker-icon">📍</span>
//                 </div>
//             `;

//             // Create advanced marker
//             const marker = new AdvancedMarkerElement({
//                 map,
//                 position: location.position,
//                 title: location.name,
//                 content: markerElement
//             });

//             // Create service area circle
//             const circle = new google.maps.Circle({
//                 map,
//                 center: location.position,
//                 radius: 15000, // 15km radius
//                 fillColor: '#003366',
//                 fillOpacity: 0.1,
//                 strokeColor: '#003366',
//                 strokeOpacity: 0.2,
//                 strokeWeight: 1
//             });

//             // Add click listener to marker
//             marker.addListener('click', () => {
//                 // Update marker colors
//                 locations.forEach(loc => {
//                     if (loc.marker) {
//                         const pin = loc.marker.content.querySelector('.marker-pin');
//                         pin.style.backgroundColor = (loc === location) ? '#FFD700' : '#003366';
//                     }
//                 });

//                 // Pan to location
//                 map.panTo(location.position);
//                 map.setZoom(11);

//                 // Update location cards
//                 document.querySelectorAll('.location-card').forEach(card => {
//                     if (card.querySelector('h3').textContent === location.name) {
//                         card.classList.add('active');
//                     } else {
//                         card.classList.remove('active');
//                     }
//                 });
//             });

//             // Store marker reference
//             location.marker = marker;
//         });

//         // Add click listeners to location cards
//         document.querySelectorAll('.location-card').forEach(card => {
//             card.addEventListener('click', () => {
//                 const locationName = card.querySelector('h3').textContent;
//                 const location = locations.find(loc => loc.name === locationName);

//                 if (location) {
//                     // Update marker colors
//                     locations.forEach(loc => {
//                         if (loc.marker) {
//                             const pin = loc.marker.content.querySelector('.marker-pin');
//                             pin.style.backgroundColor = (loc === location) ? '#FFD700' : '#003366';
//                         }
//                     });

//                     // Pan to location
//                     map.panTo(location.position);
//                     map.setZoom(11);

//                     // Update active state of cards
//                     document.querySelectorAll('.location-card').forEach(c => {
//                         c.classList.remove('active');
//                     });
//                     card.classList.add('active');
//                 }
//             });
//         });

//         // Fit map to show all locations
//         const bounds = new google.maps.LatLngBounds();
//         locations.forEach(location => {
//             bounds.extend(location.position);
//         });
//         map.fitBounds(bounds);
//     }

//     // Initialize the map
//     initMap();
// }); 
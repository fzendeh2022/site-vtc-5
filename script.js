// ---------- Nav background on scroll ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Translations ----------
const translations = {
  fr: {
    nav_services: "Services",
    nav_destinations: "Destinations",
    nav_pourquoi: "Pourquoi nous",
    nav_contact: "Réserver",
    nav_cta: "Réserver",

    hero_eyebrow: "Chauffeur privé — Normandie",
    hero_title: 'Votre trajet,<br><span class="gold-text">notre élégance.</span>',
    hero_sub: "Transferts aéroports, gares, événements et excursions vers les plus beaux sites de Normandie. Un chauffeur, une berline, une expérience sur mesure.",
    hero_cta_form: "Demande en ligne",

    strip_1: "Disponibilité sur réservation",
    strip_2: "Chauffeur professionnel VTC",
    strip_3_num: "Toute",
    strip_3: "la Normandie couverte",

    services_eyebrow: "Nos services",
    services_title: "Un chauffeur pour chaque instant",
    service1_title: "Transferts aéroport &amp; gare",
    service1_text: "Deauville, Caen, Rouen, Le Havre, Paris. Suivi de vol, accueil personnalisé, ponctualité garantie.",
    service2_title: "Excursions &amp; tourisme",
    service2_text: "Mont Saint-Michel, Étretat, plages du Débarquement, Honfleur. Circuits sur mesure, à la journée ou demi-journée.",
    service3_title: "Mise à disposition",
    service3_text: "Réservez votre chauffeur à l'heure ou à la journée pour vos rendez-vous professionnels et déplacements.",
    service4_title: "Événements &amp; mariages",
    service4_text: "Soirées, cérémonies, sorties en groupe. Un service discret et élégant pour vos moments importants.",

    dest_eyebrow: "Destinations",
    dest_title: "La Normandie, vue depuis votre siège",
    dest1_text: "L'îlot mythique, à la lumière du soir",
    dest2_text: "Les falaises emblématiques de la côte d'Albâtre",
    dest3_text: "Le vieux bassin et ses maisons de caractère",
    dest4_text: "Les planches, la plage et le charme balnéaire de la Côte Fleurie",

    pourquoi_eyebrow: "Pourquoi FZ VTC Normandie",
    pourquoi_title: "La rigueur d'un professionnel, le confort d'un ami",
    pourquoi_1: "Chauffeur VTC agréé, assurance professionnelle à jour",
    pourquoi_2: "Véhicule récent, propre, climatisé",
    pourquoi_3: "Tarifs clairs, communiqués avant la course",
    pourquoi_4: "Réservation simple par WhatsApp ou formulaire",
    pourquoi_quote: "« Je conduis chaque client comme je conduirais un proche : avec ponctualité, discrétion et attention. »",
    pourquoi_quote_by: "— Fondateur, FZ VTC Normandie",

    contact_eyebrow: "Réservation",
    contact_title: "Organisons votre trajet",
    contact_sub: "Le plus simple : un message direct. Sinon, remplissez le formulaire et je vous réponds rapidement.",
    contact_call: "Appeler",
    contact_zone_label: "Zone de service :",
    contact_zone_value: "Normandie (Calvados, Manche, Seine-Maritime, Eure, Orne)",
    contact_reply_label: "Réponse :",
    contact_reply_value: "rapide, 7j/7",

    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_phone: "Téléphone",
    form_date: "Date",
    form_time: "Heure",
    form_from: "Départ",
    form_from_ph: "Adresse ou lieu de départ",
    form_to: "Arrivée",
    form_to_ph: "Adresse ou destination",
    form_message: "Message (optionnel)",
    form_message_ph: "Nombre de passagers, bagages, demande particulière...",
    form_submit: "Envoyer la demande",
    form_note_sending: "Ouverture de WhatsApp avec votre demande pré-remplie...",

    footer_copy: "Chauffeur privé. Tous droits réservés.",

    wa_hero_text: "Bonjour, je souhaite réserver une course FZ VTC Normandie",
    wa_contact_text: "Bonjour, je souhaite réserver une course",
    wa_booking_intro: "Nouvelle demande de réservation FZ VTC Normandie",
    wa_label_name: "Nom",
    wa_label_phone: "Téléphone",
    wa_label_date: "Date",
    wa_label_from: "Départ",
    wa_label_to: "Arrivée",
    wa_label_message: "Message"
  },
  en: {
    nav_services: "Services",
    nav_destinations: "Destinations",
    nav_pourquoi: "Why us",
    nav_contact: "Book now",
    nav_cta: "Book now",

    hero_eyebrow: "Private chauffeur — Normandy",
    hero_title: 'Your journey,<br><span class="gold-text">our elegance.</span>',
    hero_sub: "Airport and station transfers, events and excursions to the most beautiful sites in Normandy. One driver, one sedan, a tailor-made experience.",
    hero_cta_form: "Book online",

    strip_1: "Available by reservation",
    strip_2: "Professional licensed driver",
    strip_3_num: "All of",
    strip_3: "Normandy covered",

    services_eyebrow: "Our services",
    services_title: "A driver for every moment",
    service1_title: "Airport &amp; station transfers",
    service1_text: "Deauville, Caen, Rouen, Le Havre, Paris. Flight tracking, personalised welcome, guaranteed punctuality.",
    service2_title: "Excursions &amp; sightseeing",
    service2_text: "Mont Saint-Michel, Étretat, the D-Day beaches, Honfleur. Custom routes, full day or half day.",
    service3_title: "Hourly &amp; daily hire",
    service3_text: "Book your driver by the hour or for the day for business meetings and errands.",
    service4_title: "Events &amp; weddings",
    service4_text: "Evenings out, ceremonies, group outings. A discreet and elegant service for your important moments.",

    dest_eyebrow: "Destinations",
    dest_title: "Normandy, seen from your seat",
    dest1_text: "The legendary islet, at dusk",
    dest2_text: "The iconic cliffs of the Alabaster Coast",
    dest3_text: "The old harbour and its characterful houses",
    dest4_text: "The boardwalk, the beach and seaside charm of the Côte Fleurie",

    pourquoi_eyebrow: "Why FZ VTC Normandie",
    pourquoi_title: "The rigour of a professional, the comfort of a friend",
    pourquoi_1: "Licensed private-hire driver, valid professional insurance",
    pourquoi_2: "Recent, clean, air-conditioned vehicle",
    pourquoi_3: "Clear pricing, confirmed before the ride",
    pourquoi_4: "Easy booking by WhatsApp or online form",
    pourquoi_quote: "\u201cI drive every client the way I'd drive someone close to me: on time, discreet, attentive.\u201d",
    pourquoi_quote_by: "— Founder, FZ VTC Normandie",

    contact_eyebrow: "Booking",
    contact_title: "Let's plan your journey",
    contact_sub: "The simplest way: a direct message. Otherwise, fill in the form and I'll reply quickly.",
    contact_call: "Call",
    contact_zone_label: "Service area:",
    contact_zone_value: "Normandy (Calvados, Manche, Seine-Maritime, Eure, Orne)",
    contact_reply_label: "Response time:",
    contact_reply_value: "fast, 7 days a week",

    form_name: "Name",
    form_name_ph: "Your name",
    form_phone: "Phone",
    form_date: "Date",
    form_time: "Time",
    form_from: "Pickup",
    form_from_ph: "Pickup address or location",
    form_to: "Drop-off",
    form_to_ph: "Destination address",
    form_message: "Message (optional)",
    form_message_ph: "Number of passengers, luggage, special request...",
    form_submit: "Send request",
    form_note_sending: "Opening WhatsApp with your pre-filled request...",

    footer_copy: "Private chauffeur. All rights reserved.",

    wa_hero_text: "Hello, I'd like to book a ride with FZ VTC Normandie",
    wa_contact_text: "Hello, I'd like to book a ride",
    wa_booking_intro: "New booking request — FZ VTC Normandie",
    wa_label_name: "Name",
    wa_label_phone: "Phone",
    wa_label_date: "Date",
    wa_label_from: "Pickup",
    wa_label_to: "Drop-off",
    wa_label_message: "Message"
  }
};

let currentLang = localStorage.getItem('fzvtc_lang') || 'fr';

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // WhatsApp links with pre-filled text
  const heroWa = document.querySelector('.hero-actions .btn-whatsapp');
  if (heroWa) heroWa.href = `https://wa.me/33627124804?text=${encodeURIComponent(dict.wa_hero_text)}`;

  const contactWa = document.querySelector('.contact-buttons .btn-whatsapp');
  if (contactWa) contactWa.href = `https://wa.me/33627124804?text=${encodeURIComponent(dict.wa_contact_text)}`;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
  localStorage.setItem('fzvtc_lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
});

applyTranslations(currentLang);

// ---------- Booking form -> builds a WhatsApp message with the details ----------
const form = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const dict = translations[currentLang];

  const lines = [
    dict.wa_booking_intro,
    `${dict.wa_label_name}: ${data.name}`,
    `${dict.wa_label_phone}: ${data.phone}`,
    `${dict.wa_label_date}: ${data.date} ${data.time}`,
    `${dict.wa_label_from}: ${data.from}`,
    `${dict.wa_label_to}: ${data.to}`,
    data.message ? `${dict.wa_label_message}: ${data.message}` : null
  ].filter(Boolean).join('\n');

  const whatsappUrl = `https://wa.me/33627124804?text=${encodeURIComponent(lines)}`;

  formNote.textContent = dict.form_note_sending;
  window.open(whatsappUrl, '_blank', 'noopener');
});

// Consent state + Google Consent Mode v2 wiring.
// Nothing beyond strictly necessary storage runs until the visitor opts in, and a
// Global Privacy Control signal always keeps advertising off.

const STORAGE_KEY = 'dssg_consent_v1';
const CHANGE_EVENT = 'dssg-consent-change';
export const OPEN_SETTINGS_EVENT = 'dssg-open-consent-settings';
const GOOGLE_TAG_ID = import.meta.env.VITE_GOOGLE_TAG_ID;

export const CATEGORIES = ['embeds', 'analytics', 'advertising'];

export const hasGpc = () =>
  typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;

const none = () => ({ embeds: false, analytics: false, advertising: false });

export const getConsent = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored === 'object') {
      return { ...none(), ...stored, advertising: stored.advertising === true && !hasGpc() };
    }
  } catch {
    // storage blocked or corrupt: treat as no decision
  }
  return null;
};

const gtag = (...args) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

const toGoogleState = (c) => {
  const v = (on) => (on ? 'granted' : 'denied');
  return {
    ad_storage: v(c.advertising),
    ad_user_data: v(c.advertising),
    ad_personalization: v(c.advertising),
    analytics_storage: v(c.analytics),
    functionality_storage: v(c.embeds),
    personalization_storage: v(c.advertising),
    security_storage: 'granted',
  };
};

const loadGoogleTag = () => {
  if (!GOOGLE_TAG_ID || document.getElementById('google-tag-script')) return;
  const script = document.createElement('script');
  script.id = 'google-tag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`;
  document.head.appendChild(script);
  gtag('js', new Date());
  gtag('config', GOOGLE_TAG_ID);
};

const applyToGoogle = (c) => {
  gtag('consent', 'update', toGoogleState(c));
  if (c.analytics || c.advertising) loadGoogleTag();
};

// Call once at startup, before any Google tag could load.
export const initConsent = () => {
  gtag('consent', 'default', { ...toGoogleState(none()), wait_for_update: 500 });
  const c = getConsent();
  if (c) applyToGoogle(c);
};

export const saveConsent = (choices) => {
  const c = { ...none(), ...choices };
  if (hasGpc()) c.advertising = false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, savedAt: new Date().toISOString() }));
  } catch {
    // storage blocked: choice applies for this page view only
  }
  applyToGoogle(c);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: c }));
  return c;
};

export const subscribeConsent = (callback) => {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
};

export const openConsentSettings = () =>
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT));

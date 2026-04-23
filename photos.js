// photos.js
// Photo slot registry for the BPB pitch mockup.
// Each slot maps a slot name to { src, alt }.
// When a slot's src is an empty string, the component renders the gradient
// placeholder. When src is a non-empty path, the component renders an <img>.
// Workflow: generate an AI photo, save it to photos/{slot}.webp, set the
// src here, commit, push. GitHub Pages rebuilds in seconds.
window.PHOTOS = {
  hero: {
    src: 'photos/hero.jpg',
    alt: 'Installed Hunter Douglas window treatments in a Treasure Valley living room'
  },
  'product-blinds': {
    src: '',
    alt: 'Hunter Douglas wood blinds installed in a Boise home'
  },
  'product-shades': {
    src: '',
    alt: 'Hunter Douglas cellular shades in a sunlit Boise room'
  },
  'product-shutters': {
    src: '',
    alt: 'Hunter Douglas plantation shutters in a Boise home'
  },
  'product-drapery': {
    src: '',
    alt: 'Hunter Douglas custom drapery on a motorized track in a Boise home'
  },
  'feature-powerview': {
    src: '',
    alt: 'Hunter Douglas PowerView automated shades in a Treasure Valley home'
  },
  'feature-portfolio': {
    src: '',
    alt: 'Duette Architella shades installed across eleven openings in an Eagle, Idaho great room'
  }
};

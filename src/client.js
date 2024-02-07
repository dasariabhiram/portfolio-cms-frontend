import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'rw3uohlf',
  dataset: 'production',
  apiVersion: '2024-02-07',
  useCdn: true,
  token: 'skbBssCyORpqGcMkKmpSLT68n90ylCTj8J6IO7E3ZYOEsnsUfgEx3DVsJGvJupPiU1aQ0pql7ppWDRSGH5QOZYb1d7Ie5Faw4OwdjhLAmXYsyjJqGN8BEu9FnQp1O6BDtR3kNzwIPh5PjiNm8AXWPulAl0ehvVE9GJIIzjrHr121ixAYKkzI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
/** @type {import('./$types').PageLoad} */


export const prerender = true;

import bike_brigade from '$lib/case-studies/bike_brigade.json';
import nfftt from '$lib/case-studies/not_far_from_the_tree.json';

const pages = {
  [bike_brigade.slug]: bike_brigade,
  [nfftt.slug]: nfftt.slug
}

export function load() {
  return pages
}

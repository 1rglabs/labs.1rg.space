/** @type {import('./$types').PageLoad} */

export const prerender = true;

import bike_brigade from '$lib/who-we-work-with/bike_brigade.json';
import nfftt from '$lib/who-we-work-with/not_far_from_the_tree.json';
import { error } from '@sveltejs/kit';

const pages = {
  "bike-brigade": bike_brigade,
  nfftt
}

export function load({ params }) {

  if (params.slug in pages) {
    return pages[params.slug];
  }

  throw error(404, 'Not found');
}

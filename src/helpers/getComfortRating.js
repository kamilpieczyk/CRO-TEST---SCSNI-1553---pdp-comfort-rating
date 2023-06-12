const mapping = {
  soft: [
    'sammy',
    'tamla',
    'jessie',
    'aurora',
    'county',
    'raleigh',
    'whisper',
    'hoxton',
    'hugo',
    'everett',
    'chicago',
    'heidi',
    'storm'
  ],
  medium: [
    'ashton',
    'lucca',
    'cloud',
    'nevada',
    'pittsburgh',
    'reuben',
    'pluto',
    'empire',
    'brodie',
    'claudius',
    'nero',
    'regency',
    'esme',
    'ferndale'
  ],
  firm: [
    'griffin',
    'staten',
    'roseland',
    'roman',
    'axel',
    'stratford',
    'hollywood',
    'newmarket',
    'westwood',
    'felix',
    'sovereign',
    'amalfi'
  ],
}

/**
 * @param { string } rangeName
 * @returns { 'soft' | 'medium' | 'firm' | null }
 */
export default ( rangeName ) => {
  /** @type { 'soft' | 'medium' | 'firm' } */
  let rating = null;

  if (mapping.soft.includes(rangeName))
    rating = 'soft';
  else if (mapping.medium.includes(rangeName))
    rating = 'medium';
  else if (mapping.firm.includes(rangeName))
    rating = 'firm';

  return rating;
}
import { Analysis } from '..';

import { parseXY } from './parseXY';

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {UInt8Array} blob - String containing the JCAMP data
 * @return {Analysis} - New class element with the given data
 */
export function fromXY(blob) {
  let parsed = parseXY(blob);
  let analysis = new Analysis();
  const variables = {
    x: {
      data: parsed.data.x,
      label: parsed.info.xUnits,
    },
    y: {
      data: parsed.data.y,
      label: parsed.info.yUnits,
    },
  };

  analysis.pushSpectrum(variables, {
    title: parsed.info.title,
    meta: parsed.meta,
    dataType: 'XRD pattern',
  });

  return analysis;
}

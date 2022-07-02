/* eslint-disable import/prefer-default-export */

/**
 * Utility function which does the following:
 *  - replace spaces with hyphens,
 *  - lower case
 */
export const hyphenate = (str: string) => (str && typeof str === 'string' ? str.replaceAll(' ', '-').toLowerCase() : '');

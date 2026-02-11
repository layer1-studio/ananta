/**
 * ==========================================
 * HOW TO ADD A MAINTAINED PAGE
 * ==========================================
 * 1. Copy an object from the list below.
 * 2. Paste it into the `maintainedPages` array.
 * 3. Update fields:
 *    - id: Unique identifier.
 *    - title: Client or page name.
 *    - url: The external link (e.g., 'https://client.com').
 *    - description: Brief details about the work.
 *    - thumbnail: Imported image variable.
 */

// Placeholder images using existing assets
import heroBg from '../assets/hero-bg.png';
import missionVisual from '../assets/mission-visual.png';
import empowerImg from '../assets/pages/empower.jpg';
import economistImg from '../assets/pages/economist.jpg';

export const maintainedPages = [
    {
        id: 'empower-lk',
        title: 'Empower.lk',
        url: 'https://www.instagram.com/empower.lk?igsh=MTdjcGZmYTBoNm1pZw==',
        description: 'Empower.lk focuses on strategic development and community impact through disciplined social initiatives.',
        thumbnail: empowerImg
    },
    {
        id: 'economist-lk',
        title: 'Economist.lk',
        url: 'https://www.instagram.com/economist.lk?igsh=MTExejh5cGU1b2tjbw==',
        description: 'Economist.lk provides rigorous analysis and insights into national and global economic trends.',
        thumbnail: economistImg
    }
];

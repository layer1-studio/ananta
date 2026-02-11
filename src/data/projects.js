/**
 * ==========================================
 * HOW TO ADD A NEW PROJECT
 * ==========================================
 * 1. Copy the structure of an existing object between { and }.
 * 2. Paste it into the `projects` array below.
 * 3. Update the fields:
 *    - id: A unique name (e.g., 'new-project-name'). Used in the URL.
 *    - title: Visible project name.
 *    - shortDescription: One sentence summary for the list page.
 *    - fullDescription: Detailed text. Use `\n` or breaks for paragraphs.
 *    - coverImage: Import an image at the top and use the variable name here.
 *    - galleryImages: An array of imported images [img1, img2].
 *    - videoUrl: Optional YouTube embed URL (or null).
 *    - videoFile: Optional imported local video file (e.g., .mp4). Takes precedence over videoUrl if both are present.
 *    - outcomes: Array of bullet points ['Outcome 1', 'Outcome 2'].
 *    - scope: String listing services provided.
 */

// Placeholder images - using Ananta's existing visual style
import heroBg from '../assets/hero-bg.png';
import missionVisual from '../assets/mission-visual.png';

// Valentina Project Assets (Functional)
import valentina1 from '../assets/projects/Valentina/valentina1.mp4';
import valentina2 from '../assets/projects/Valentina/valentina2.mp4';
import valentina3 from '../assets/projects/Valentina/valentina3.mp4';
import valentina4 from '../assets/projects/Valentina/valentina4.mp4';
import valentina5 from '../assets/projects/Valentina/valentina5.mp4';

// Placeholders for missing Valentina photos
const valImg1 = heroBg;
const valImg2 = heroBg;
const valImg3 = missionVisual;
const valImg4 = heroBg;
const valImg5 = missionVisual;
const valImg6 = heroBg;
const valImg7 = missionVisual;
const valImg8 = heroBg;
const valImg9 = missionVisual;
const valImg10 = heroBg;
const valImg11 = missionVisual;
const valImg12 = heroBg;
const valImg13 = missionVisual;
const valImg14 = heroBg;
const valImg15 = missionVisual;

// Placeholders for missing Valentina extra videos
const valVidExtra1 = valentina1;
const valVidExtra2 = valentina2;
const valVidExtra3 = valentina3;

// Placeholders for missing Brux Waffles assets
const bruxImg1 = heroBg;
const bruxImg2 = missionVisual;
const bruxImg3 = heroBg;
const bruxImg4 = missionVisual;
const bruxImg5 = heroBg;
const bruxImg6 = missionVisual;
const bruxImg7 = heroBg;
const bruxImg8 = missionVisual;
const bruxImg9 = heroBg;
const bruxImg10 = missionVisual;
const bruxImg11 = heroBg;
const bruxImg12 = missionVisual;
const bruxImg13 = heroBg;
const bruxImg14 = missionVisual;
const bruxImg15 = heroBg;
const bruxImg16 = missionVisual;
const bruxImg17 = heroBg;
const bruxImg18 = missionVisual;
const bruxImg19 = heroBg;
const bruxImg20 = missionVisual;
const bruxImg21 = heroBg;
const bruxImg22 = missionVisual;
const bruxImg23 = heroBg;
const bruxImg24 = missionVisual;
const bruxImg25 = heroBg;
const bruxImg26 = missionVisual;
const bruxImg27 = heroBg;
const bruxImg28 = missionVisual;
const bruxImg29 = heroBg;
const bruxImg30 = missionVisual;
const bruxImg31 = heroBg;
const bruxImg32 = missionVisual;
const bruxImg33 = heroBg;
const bruxImg34 = missionVisual;
const bruxImg35 = heroBg;
const bruxImg36 = missionVisual;
const bruxImg37 = heroBg;
const bruxImg38 = missionVisual;

const bruxVid1 = valentina1;

// Placeholders for missing Sigiriya Hornets assets
const sigiriyaVid1 = valentina1;
const sigiriyaVid2 = valentina2;
const sigiriyaVid3 = valentina3;
const sigiriyaVid5 = valentina4;
const sigiriyaVid6 = valentina5;
const sigiriyaVid7 = valentina1;
const sigiriyaVid8 = valentina2;

export const projects = [
    {
        id: 'brux-waffles',
        title: 'Brux Waffles',
        shortDescription: 'Elevating the sensory appeal of premium waffles through high-fidelity visual storytelling.',
        fullDescription: `
            Brux Waffles represents a convergence of culinary art and narrative precision. Our mandate was to capture the disciplined craftsmanship behind every waffle, translating taste and texture into a compelling visual language.
            
            We focused on the "sensory narrative" — the steam, the crunch, and the meticulous layering of ingredients. Through a series of high-definition video captures and macro photography, we built a presence for Brux that prioritises quality over volume.
            
            This case study demonstrates our capability in high-end lifestyle production, where every frame is strategically designed to communicate authority and desire.
        `,
        coverImage: bruxImg25,
        galleryImages: [
            bruxImg12, bruxImg13, bruxImg14, bruxImg15,
            bruxImg16, bruxImg17, bruxImg18, bruxImg19,
            bruxImg20, bruxImg21, bruxImg22, bruxImg23,
            bruxImg24, bruxImg25, bruxImg26, bruxImg27,
            bruxImg28, bruxImg29, bruxImg30, bruxImg31,
            bruxImg32, bruxImg33, bruxImg34, bruxImg35,
            bruxImg36, bruxImg37, bruxImg38,
            bruxImg1, bruxImg2, bruxImg3, bruxImg4,
            bruxImg5, bruxImg6, bruxImg7, bruxImg8,
            bruxImg9, bruxImg10, bruxImg11
        ],
        videoUrl: null,
        videoFile: bruxVid1,
        outcomes: [
            'High-fidelity visual asset library',
            'Sensory-driven narrative strategy',
            'Lifestyle and culinary positioning'
        ],
        scope: 'Photography, Video Production, Creative Direction'
    },
    {
        id: 'sigiriya-hornets',
        title: 'Sigiriya Hornets',
        shortDescription: 'Capturing the raw energy and discipline of the Sigiriya Hornets through dynamic motion.',
        fullDescription: `
            The Sigiriya Hornets represent more than just a team; they embody a spirit of resilience and collective drive. Our visual documentation focuses on this kinetic energy.
            
            Through a series of raw, unscripted video captures, we documented the intensity of their practice and the camaraderie that fuels their performance. This project strips away the polish to reveal the authentic grit of the sport.
        `,
        coverImage: missionVisual, // Placeholder as no images were found
        galleryImages: [],
        galleryVideos: [
            sigiriyaVid1, sigiriyaVid2, sigiriyaVid3,
            sigiriyaVid5, sigiriyaVid6,
            sigiriyaVid7, sigiriyaVid8
        ],
        videoUrl: null,
        videoFile: sigiriyaVid7, // Using one of the clips as the main video
        outcomes: [
            'Sports documentation',
            'Dynamic motion capture',
            'Team narrative building'
        ],
        scope: 'Videography, Documentary Coverage'
    },
    {
        id: 'valentina',
        title: 'Valentina by Winil Gems',
        shortDescription: 'A cinematic exploration of luxury craftsmanship and timeless elegance.',
        fullDescription: `
            Valentina by Winil Gems stands as a testament to the art of fine jewelry. Our visual narrative captures the intricate details and the luminous quality of their collection, highlighting the precision and passion embedded in every piece.
            
            Through a blend of high-definition cinematography and editorial photography, we crafted a brand presence that speaks to sophistication and enduring beauty. This project showcases our ability to translate the tangible allure of luxury goods into a digital experience that resonates with discerning audiences.
        `,
        coverImage: valImg3, // Selected an edited image for cover
        galleryImages: [
            valImg1, valImg2, valImg3, valImg4, valImg5,
            valImg6, valImg7, valImg8, valImg9, valImg10,
            valImg11, valImg12, valImg13, valImg14, valImg15
        ],
        galleryVideos: [
            valVidExtra1, valVidExtra2, valVidExtra3,
            valentina1, valentina2, valentina3, valentina4, valentina5
        ],
        videoUrl: null,
        videoFile: valVidExtra3, // Using one of the main optimized cuts
        outcomes: [
            'Luxury Brand Positioning',
            'High-End Product Photography',
            'Cinematic Campaign Production'
        ],
        scope: 'Creative Direction, Photography, Videography'
    }
];

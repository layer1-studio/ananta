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

// Valentina Project Assets
import valentina1 from '../assets/projects/Valentina/valentina1.mp4';
import valentina2 from '../assets/projects/Valentina/valentina2.mp4';
import valentina3 from '../assets/projects/Valentina/valentina3.mp4';
import valentina4 from '../assets/projects/Valentina/valentina4.mp4';
import valentina5 from '../assets/projects/Valentina/valentina5.mp4';

// Use placeholders for photos until they arrive
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

const valVidExtra1 = valentina4;
const valVidExtra2 = valentina5;
const valVidExtra3 = valentina3;

// Brux Waffles Project Assets
import bruxVid1 from '../assets/projects/BruxWaffles/brux1.mov';
import bruxVid2 from '../assets/projects/BruxWaffles/brux2.mov';
import bruxVid3 from '../assets/projects/BruxWaffles/brux3.mov';
import bruxVid4 from '../assets/projects/BruxWaffles/brux4.mov';
import bruxVid5 from '../assets/projects/BruxWaffles/brux5.mov';

// Import actual photos for Brux Waffles
import bruxImg1 from '../assets/projects/BruxWaffles/Photos/058A7388-Enhanced-NR.JPG';
import bruxImg2 from '../assets/projects/BruxWaffles/Photos/058A7395-Enhanced-NR.JPG';
import bruxImg3 from '../assets/projects/BruxWaffles/Photos/058A7414-Enhanced-NR.JPG';
import bruxImg4 from '../assets/projects/BruxWaffles/Photos/058A7481-Enhanced-NR.jpg';
import bruxImg5 from '../assets/projects/BruxWaffles/Photos/058A7526-Enhanced-NR.jpg';
import bruxImg6 from '../assets/projects/BruxWaffles/Photos/058A7537-Enhanced-NR.JPG';
import bruxImg7 from '../assets/projects/BruxWaffles/Photos/058A7561-Enhanced-NR.JPG';
import bruxImg8 from '../assets/projects/BruxWaffles/Photos/058A7575-Enhanced-NR.JPG';
import bruxImg9 from '../assets/projects/BruxWaffles/Photos/058A7573-Enhanced-NR.JPG';
import bruxImg10 from '../assets/projects/BruxWaffles/Photos/058A7609-Enhanced-NR.jpg';
import bruxImg11 from '../assets/projects/BruxWaffles/Photos/058A7623-Enhanced-NR.jpg';
import bruxImg12 from '../assets/projects/BruxWaffles/Photos/058A7654-Enhanced-NR.jpg';
import bruxImg13 from '../assets/projects/BruxWaffles/Photos/058A7661-Enhanced-NR.jpg';
import bruxImg14 from '../assets/projects/BruxWaffles/Photos/20260129_143703.jpg';
import bruxImg15 from '../assets/projects/BruxWaffles/Photos/058A7138-Enhanced-NR.jpg';
import bruxImg16 from '../assets/projects/BruxWaffles/Photos/058A7252-Enhanced-NR.jpg';
import bruxImg17 from '../assets/projects/BruxWaffles/Photos/058A7453-Enhanced-NR.jpg';
import bruxImg18 from '../assets/projects/BruxWaffles/Photos/058A7482-Enhanced-NR.jpg';
import bruxImg19 from '../assets/projects/BruxWaffles/Photos/058A7484-Enhanced-NR.jpg';
import bruxImg20 from '../assets/projects/BruxWaffles/Photos/058A7531-Enhanced-NR.jpg';
import bruxImg21 from '../assets/projects/BruxWaffles/Photos/058A7547-Enhanced-NR.JPG';
import bruxImg22 from '../assets/projects/BruxWaffles/Photos/058A7553-Enhanced-NR.JPG';
import bruxImg23 from '../assets/projects/BruxWaffles/Photos/058A7557-Enhanced-NR.JPG';
import bruxImg24 from '../assets/projects/BruxWaffles/Photos/058A7631-Enhanced-NR.JPG';
import bruxImg25 from '../assets/projects/BruxWaffles/Photos/058A7636-Enhanced-NR.jpg';
import bruxImg26 from '../assets/projects/BruxWaffles/Photos/058A7644-Enhanced-NR.jpg';
import bruxImg27 from '../assets/projects/BruxWaffles/Photos/058A6885.JPG';
import bruxImg28 from '../assets/projects/BruxWaffles/Photos/058A6888.JPG';
import bruxImg29 from '../assets/projects/BruxWaffles/Photos/058A6893.JPG';
import bruxImg30 from '../assets/projects/BruxWaffles/Photos/058A6900.JPG';
import bruxImg31 from '../assets/projects/BruxWaffles/Photos/058A6916.JPG';
import bruxImg32 from '../assets/projects/BruxWaffles/Photos/058A6919.JPG';
import bruxImg33 from '../assets/projects/BruxWaffles/Photos/058A6944.JPG';
import bruxImg34 from '../assets/projects/BruxWaffles/Photos/058A6947.JPG';
import bruxImg35 from '../assets/projects/BruxWaffles/Photos/058A6964.JPG';
import bruxImg36 from '../assets/projects/BruxWaffles/Photos/058A6965.JPG';
import bruxImg37 from '../assets/projects/BruxWaffles/Photos/058A6966.JPG';
import bruxImg38 from '../assets/projects/BruxWaffles/Photos/20260129_141918.jpg';


// Sigiriya Hornets Project Assets
// import sigiriyaVid1 from '../assets/projects/SigiriyaHornets/sigiriya1.mp4'; // Excluded (112MB)
import sigiriyaVid2 from '../assets/projects/SigiriyaHornets/sigiriya2.mp4';
import sigiriyaVid3 from '../assets/projects/SigiriyaHornets/sigiriya3.mp4';
import sigiriyaVid4 from '../assets/projects/SigiriyaHornets/sigiriya4.mp4';
import sigiriyaVid5 from '../assets/projects/SigiriyaHornets/sigiriya5.mp4';
import sigiriyaVid6 from '../assets/projects/SigiriyaHornets/sigiriya6.mp4';
import sigiriyaVid7 from '../assets/projects/SigiriyaHornets/sigiriya7.mp4';

const sigiriyaVid1 = sigiriyaVid2; // Use Vid2 as placeholder for Vid1

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
        galleryVideos: [
            bruxVid2, bruxVid3, bruxVid4, bruxVid5
        ],
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
            sigiriyaVid2, sigiriyaVid3, sigiriyaVid4, sigiriyaVid5, sigiriyaVid6, sigiriyaVid7
        ],
        videoUrl: null,
        videoFile: sigiriyaVid1, // Using one of the clips as the main video
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
        coverImage: missionVisual, // Using visual as no images found
        galleryImages: [],
        galleryVideos: [
            valVidExtra1, valVidExtra2, valentina1, valentina2, valentina4, valentina5
        ],
        videoUrl: null,
        videoFile: valVidExtra3, // Using optimized cut
        outcomes: [
            'Luxury Brand Positioning',
            'High-End Product Photography',
            'Cinematic Campaign Production'
        ],
        scope: 'Creative Direction, Photography, Videography'
    }
];

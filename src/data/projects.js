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

// Import actual photos for Valentina
import valPhoto1 from '../assets/projects/Valentina/Photos/058A0402.jpg';
import valPhoto2 from '../assets/projects/Valentina/Photos/058A0404.jpg';
import valPhoto3 from '../assets/projects/Valentina/Photos/058A0409-Edit.jpg';
import valPhoto4 from '../assets/projects/Valentina/Photos/058A0411-Edit.jpg';
import valPhoto5 from '../assets/projects/Valentina/Photos/058A0413-Edit.jpg';
import valPhoto6 from '../assets/projects/Valentina/Photos/058A0416-Edit.jpg';
import valPhoto7 from '../assets/projects/Valentina/Photos/058A0634.jpg';
import valPhoto8 from '../assets/projects/Valentina/Photos/058A0652.jpg';

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

// BIDTI Project Assets
import bidtiCourseOverview from '../assets/projects/BIDTI/Photos/bidti-course-overview-poster.png';
import bidtiWhyLearn from '../assets/projects/BIDTI/Photos/bidti-why-learn-cinematic-diplomacy.jpeg';
import bidtiMeetTrainers from '../assets/projects/BIDTI/Photos/bidti-meet-our-trainers.jpeg';
import bidtiTrainerProfile from '../assets/projects/BIDTI/Photos/bidti-trainer-george-cooke.jpeg';
import bidtiLastChance from '../assets/projects/BIDTI/Photos/bidti-last-chance-to-register.jpeg';
import bidtiCourseDetails from '../assets/projects/BIDTI/Photos/bidti-course-details.jpeg';

// Health & Organic Project Assets
import hoButterflyHero from '../assets/projects/HealthOrganic/Photos/health-organic-butterfly-pea-flower-hero.jpg';
import hoForestHoneyHero from '../assets/projects/HealthOrganic/Photos/health-organic-forest-honey-hero.jpg';
import hoMuesliHero from '../assets/projects/HealthOrganic/Photos/health-organic-9grain-crunch-muesli.jpg';
import hoForestHoneyLifestyle from '../assets/projects/HealthOrganic/Photos/health-organic-forest-honey-lifestyle.jpg';
import hoButterflyPour from '../assets/projects/HealthOrganic/Photos/health-organic-butterfly-pea-pour.jpg';
import hoButterflyBenefits from '../assets/projects/HealthOrganic/Photos/health-organic-butterfly-pea-benefits.jpg';
import hoMuesliDetail from '../assets/projects/HealthOrganic/Photos/health-organic-9grain-crunch-detail.jpg';

// Mongolian Street Project Assets
import msPoster from '../assets/projects/MongolianStreet/Graphics/mongolian-street-mixed-rice-poster.jpg';
import msWokTossed from '../assets/projects/MongolianStreet/Graphics/mongolian-street-wok-tossed-rice.jpg';
import msBrandLocations from '../assets/projects/MongolianStreet/Graphics/mongolian-street-brand-locations.jpg';
import msReel1 from '../assets/projects/MongolianStreet/Reels/mongolian-street-reel-01.mp4';
import msReel2 from '../assets/projects/MongolianStreet/Reels/mongolian-street-reel-02.mp4';
import msReel3 from '../assets/projects/MongolianStreet/Reels/mongolian-street-reel-03.mp4';
import msReel4 from '../assets/projects/MongolianStreet/Reels/mongolian-street-reel-04.mp4';

// Weligama Sharks Project Assets
import wsVichinthya from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-vichinthya-nilaweera.jpg';
import wsSquadLineup from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-squad-lineup.jpg';
import wsAnikaDraft from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-anika-draft-pick.jpg';
import wsVsGalleFort from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-vs-galle-fort-mariners.jpg';
import wsAnikaSeneviratne from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-anika-seneviratne.jpg';
import wsFixturesDay1 from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-fixtures-day1.jpg';
import wsScoreboardDay3 from '../assets/projects/WeligamaSharks/Graphics/weligama-sharks-scoreboard-day3.jpg';
import wsAnikaPractice from '../assets/projects/WeligamaSharks/Reels/weligama-sharks-anika-practice.mp4';
import wsAudienceClip from '../assets/projects/WeligamaSharks/Reels/weligama-sharks-audience-clip.mp4';
import wsImranSummary from '../assets/projects/WeligamaSharks/Reels/weligama-sharks-imran-summary.mp4';
import wsRakeshFinal from '../assets/projects/WeligamaSharks/Reels/weligama-sharks-rakesh-final.mp4';

// Sigiriya Hornets Project Assets
// import sigiriyaVid1 from '../assets/projects/SigiriyaHornets/sigiriya1.mp4'; // Excluded (112MB)
import sigiriyaVid2 from '../assets/projects/SigiriyaHornets/sigiriya2.mp4';
import sigiriyaVid3 from '../assets/projects/SigiriyaHornets/sigiriya3.mp4';
import sigiriyaVid4 from '../assets/projects/SigiriyaHornets/sigiriya4.mp4';
import sigiriyaVid5 from '../assets/projects/SigiriyaHornets/sigiriya5.mp4';
import sigiriyaVid6 from '../assets/projects/SigiriyaHornets/sigiriya6.mp4';
import sigiriyaVid7 from '../assets/projects/SigiriyaHornets/sigiriya7.mp4';

// Use a lifestyle image from BruxWaffles as a placeholder for Sigiriya Hornets cover
import sigiriyaCover from '../assets/projects/SigiriyaHornets/sigiriya Hornets.png';

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
        coverImage: sigiriyaCover, // Using lifestyle placeholder as cover
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
        coverImage: valPhoto1, // Using actual photo
        galleryImages: [
            valPhoto1, valPhoto2, valPhoto3, valPhoto4,
            valPhoto5, valPhoto6, valPhoto7, valPhoto8
        ], // Added photos to gallery
        galleryVideos: [
            valentina1, valentina2, valentina4, valentina5
        ],
        videoUrl: null,
        videoFile: valVidExtra3, // Using optimized cut
        outcomes: [
            'Luxury Brand Positioning',
            'High-End Product Photography',
            'Cinematic Campaign Production'
        ],
        scope: 'Creative Direction, Photography, Videography'
    },
    {
        id: 'bidti',
        title: 'BIDTI — Cinema & Public Diplomacy',
        shortDescription: 'A campaign visual system for a diplomatic training institute\'s course on soft power and cinematic influence.',
        fullDescription: `
            The Bandaranaike International Diplomatic Training Institute (BIDTI) approached us to build the visual identity for their "Cinema & Public Diplomacy" short course — a program exploring how film shapes soft power, cultural identity, and nation branding.

            Our task was to translate an academic subject into a promotional campaign that felt both authoritative and visually arresting. We developed a collage-driven aesthetic — blending archival cinema imagery, classical sculpture, and diplomatic iconography — deployed consistently across registration, faculty, and course-overview materials.

            The result is a cohesive multi-touchpoint campaign that communicates institutional credibility while standing out in a crowded feed.
        `,
        coverImage: bidtiCourseOverview,
        galleryImages: [
            bidtiCourseOverview, bidtiLastChance, bidtiMeetTrainers,
            bidtiTrainerProfile, bidtiWhyLearn, bidtiCourseDetails
        ],
        galleryVideos: [],
        videoUrl: null,
        videoFile: null,
        outcomes: [
            'Cohesive campaign visual system',
            'Faculty and course-detail asset series',
            'Institutional brand positioning'
        ],
        scope: 'Creative Direction, Graphic Design, Campaign Strategy'
    },
    {
        id: 'health-organic',
        title: 'Health & Organic',
        shortDescription: 'Product-led campaign visuals for a wellness brand spanning herbal teas, honey, and whole-grain nutrition.',
        fullDescription: `
            Health & Organic came to us with a growing catalogue of natural wellness products — Butterfly Pea Flower tea, Forest Honey, and 9 Grain Crunch Muesli among them — and a need for a consistent visual voice across their range.

            We built a flexible campaign system rooted in natural textures, warm lighting, and ingredient-forward photography, pairing hero product shots with benefit-driven infographics that make each product's story easy to grasp at a glance.

            The result is a scalable visual library that lets Health & Organic launch new products while staying instantly recognisable across their catalogue.
        `,
        coverImage: hoForestHoneyHero,
        galleryImages: [
            hoForestHoneyHero, hoButterflyHero, hoMuesliHero,
            hoForestHoneyLifestyle, hoButterflyPour, hoButterflyBenefits, hoMuesliDetail
        ],
        galleryVideos: [],
        videoUrl: null,
        videoFile: null,
        outcomes: [
            'Scalable multi-product visual system',
            'Benefit-driven infographic templates',
            'Consistent brand presence across catalogue'
        ],
        scope: 'Creative Direction, Product Photography, Graphic Design'
    },
    {
        id: 'mongolian-street',
        title: 'Mongolian Street',
        shortDescription: 'Bold, appetite-driven campaign visuals and reels for a wok-tossed street food brand.',
        fullDescription: `
            Mongolian Street needed a campaign that matched the energy of its food — bold, fast, and full of flavour. Operating across Colombo 06, Battaramulla, and Mt. Lavinia, the brand wanted its wok-tossed rice dishes to command attention on the feed.

            We paired high-contrast product photography with punchy, high-impact copy, then extended the system into a series of short-form video reels capturing the sizzle, toss, and plate-up of each dish in motion.

            The result is a campaign that reads as loud and appetising as the food itself, built to perform across both static posts and reels.
        `,
        coverImage: msPoster,
        galleryImages: [
            msPoster, msWokTossed, msBrandLocations
        ],
        galleryVideos: [
            msReel1, msReel2, msReel3, msReel4
        ],
        videoUrl: null,
        videoFile: msReel1,
        outcomes: [
            'High-impact product photography',
            'Short-form video reel series',
            'Multi-location brand presence'
        ],
        scope: 'Creative Direction, Photography, Videography'
    },
    {
        id: 'weligama-sharks',
        title: 'Weligama Sharks',
        shortDescription: 'Player launches, matchday graphics, and highlight reels for a Sri Lanka Padel League franchise.',
        fullDescription: `
            The Weligama Sharks entered the Sri Lanka Padel League (SLPL) needing a brand presence that could carry them from pre-season hype through matchday coverage. Our brief spanned player draft announcements, squad reveals, fixture cards, and live scoreboards.

            We built a consistent red-and-black identity system — bold typography over textured, high-contrast imagery — that flexed across individual player spotlights, team announcements, and match-result graphics, then extended it into short-form highlight reels from practice sessions and matchday courtside moments.

            The result is a franchise presence that stayed sharp and recognisable across an entire competitive season, from the pre-auction draft pick to the run into the final.
        `,
        coverImage: wsVsGalleFort,
        galleryImages: [
            wsVsGalleFort, wsSquadLineup, wsAnikaDraft, wsAnikaSeneviratne,
            wsVichinthya, wsFixturesDay1, wsScoreboardDay3
        ],
        galleryVideos: [
            wsAnikaPractice, wsAudienceClip, wsImranSummary, wsRakeshFinal
        ],
        videoUrl: null,
        videoFile: wsRakeshFinal,
        outcomes: [
            'Season-long matchday visual system',
            'Player launch and draft campaign assets',
            'Highlight reel production'
        ],
        scope: 'Creative Direction, Photography, Videography, Graphic Design'
    }
];

const narrative = 'https://i.ibb.co/fvkLCKQ/Narrative-Thumbnail.jpg'
const bashaesports = "https://i.ibb.co/KbLcCTc/basha.jpg"
const spongebobinfinity = 'https://i.ibb.co/6ypcSSG/Thumb.jpg'
const spongebobmin = 'https://i.ibb.co/fG71kcH/3ca9071f54138977943471d5046b6123.jpg';


const videos = [
    {
        src: 'Jg-HJ_OJnqY',
        img: bashaesports,
        title: 'Basha Esports Marketing Campaign',
        year: '2019',
        slug: 'basha-esports-video',
        role: 'Director, Head of Production',
        tools: ['Premiere Pro,  ', 'After Effects, ', 'Photoshop'],
        desc: 'Our Marketing Video for the Basha Esports Organization <br /> <br /> When two of my friends created the esports club at our high school, they designated myself to lead the production team on the marketing video. I was minaly tasked with acquiring clips for the video, designing logo animations through After Effects, and overlooking the entire process of the video production. As a result of our marketing campaign, the club size increased by over 50 members in its inagrual year. As it stands today, Basha Esports is recognized as a Varsity-level sport in Arizona.',
        id: 1
    },
    {
        src: 'hGBHlR1a-pI',
        img: spongebobinfinity,
        title: 'Spongebob Infinity War Trailer',
        year: '2021',
        slug: 'spongebob-infinity-war',
        role: 'Personal Project',
        tools: ['Premiere Pro, ', 'After Effects, ', 'Cinema 4D, ', 'Photoshop'],
        desc: 'A parody edit on the <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" target={`_blank`}>Avengers: Infinity War Trailer</a> that released in 2017. <br /> <br /> I took my own spin on the trailer featuring Spongebob and his beloved crew. The end card reveals were 3d models created in Cinema4D and rendered in After Effects.',
        id: 2
    },
    {
        src: '3GdGWUClDSU',
        img: narrative,
        title: 'Narrative',
        year: '2018',
        slug: 'narrative',
        role: 'Director, Writer',
        tools: ['Premiere Pro, ', 'Photoshop'],
        desc: 'A young boy has to overcome his writer&apos;s block in order to enlist in the regions writing competition. <br /> <br /> This microfilm was filmed in a one-location setting, having time as the main progressor for the setting. Filmed on the Canon EOS Rebel T3 DSLR.',
        id: 3
    },
    {
        src: '81jCGtlTvyI',
        img: spongebobmin,
        title: 'Spongebob - 20 Min Edit',
        year: '2020',
        slug: 'spongebob-20-min',
        role: 'Personal Project',
        tools: ['Premiere Pro, ', 'Photoshop'],
        desc: 'A small edit I made that takes Spongebob through the various locations in the series. It was an inspired take from a <a href="https://vm.tiktok.com/TTPdBmm3na/" target={`_blank`}>TikTok</a> I viewed over quarantine. Utilized keyframes and camera motion.',
        id: 4
    }
]

const getallVideos = () => videos;

const getVideoBySlug = (slug) => videos.find((e) => e.slug === slug);

const videoData = {
    getallVideos,
    getVideoBySlug,
    videos
};

export default videoData;
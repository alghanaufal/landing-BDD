import React, { useEffect, useRef } from 'react';

// --- Static Data for Blog Posts ---
const newsData = [
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Brand+Priorities',
        category: 'Digital Marketing',
        date: '23 May 2025',
        title: 'Jangan Cuma Kejar Tren! Ini Prioritas Brand yang Harus Diberesin di Awal Q2 2025',
        description: 'Prioritas brand di kuartal kedua 2025 bukan sekadar ngejar tren, tapi memperkuat fondasi, konsistensi, dan strategi agar siap beradaptasi!',
        link: 'https://bolehdicoba.com/news-blog/jangan-cuma-kejar-tren-ini-prioritas-brand-yang-harus-diberesin-di-awal-q2-2025/'
    },
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Brand+Strategy',
        category: 'All Article',
        date: '09 May 2025',
        title: 'Strategi Brand Naik Level: Integrasi Data CRM dan E-commerce',
        description: 'Optimalkan penjualan dengan integrasi CRM dan e-commerce. Meningkatkan konversi leads dan strategi pemasaran lebih terarah',
        link: 'https://bolehdicoba.com/news-blog/strategi-brand-naik-level-integrasi-data-crm-dan-e-commerce/'
    },
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Marketing+Strategy',
        category: 'Digital Marketing',
        date: '23 Apr 2025',
        title: 'Gak Harus Bakar Uang! Ini Strategi Marketing 2025 yang Efektif Buat Q2',
        description: 'Strategi marketing 2025 fokus pada efisiensi tanpa buang anggaran. Optimalkan Q2 dengan taktik low cost, high impact yang hasilnya nyata!',
        link: 'https://bolehdicoba.com/news-blog/gak-harus-bakar-uang-ini-strategi-marketing-2025-yang-efektif-buat-q2/'
    },
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Creative+Trends',
        category: 'Digital Marketing',
        date: '22 Apr 2025',
        title: 'Tren Kreatif di Indonesia: dari AI sampai Konten yang Rooted ke Budaya',
        description: 'Tren kreatif di Indonesia makin bergerak ke arah yang lebih bermakna. Brand wajib beradaptasi, dari AI hingga konten yang berakar ke budaya!',
        link: 'https://bolehdicoba.com/news-blog/tren-kreatif-di-indonesia-dari-ai-sampai-konten-yang-rooted-ke-budaya/'
    },
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Creative+Data',
        category: 'Digital Marketing',
        date: '21 Apr 2025',
        title: 'Bukan Cuma Estetika! Begini Cara Creative Data Bantu Kampanye Lebih Nendang',
        description: 'Creative data bisa bantu brand bikin konten yang relevan, berdampak, dan tetap berkarakter. Ini cara tingkatkan hasil tanpa buang idealisme!',
        link: 'https://bolehdicoba.com/news-blog/bukan-cuma-estetika-begini-cara-creative-data-bantu-kampanye-lebih-nendang/'
    },
    {
        image: 'https://placehold.co/600x450/F4F0EA/333?text=Soft+Power',
        category: 'Digital Marketing',
        date: '20 Apr 2025',
        title: 'Empathy is Power: Soft Power dan Dominasi Strategi Perempuan dalam Digital Marketing Modern',
        description: 'Pendekatan soft power dalam digital marketing bantu brand membangun hubungan yang lebih empatik, relevan, dan jangka panjang',
        link: 'https://bolehdicoba.com/news-blog/empathy-is-power-soft-power-dan-dominasi-strategi-perempuan-dalam-digital-marketing-modern/'
    }
];

// --- Arrow Icon Component ---
const ArrowIcon = () => (
    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path>
    </svg>
);


// --- News Card Component ---
const NewsCard = ({ post }) => (
    <div className="news-card">
        <div className="news-card-inner">
            <div className="news-card-image">
                <img loading="lazy" src={post.image} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450/eee/ccc?text=Image+Not+Found'; }} alt={post.title} />
            </div>
            <div className="news-card-body">
                <div className="news-card-category">
                    <p className="category">{post.category}</p>
                </div>
                <div className="news-card-date">
                    <p className="date">{post.date}</p>
                </div>
                <div className="news-card-title">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <h6 className="title">{post.title}</h6>
                    </a>
                </div>
                <div className="news-card-description">
                    <div className="description">{post.description}</div>
                </div>
                <div className="news-card-link">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowIcon />
                    </a>
                </div>
            </div>
            <div className="news-link">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)'}}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
            </div>
        </div>
    </div>
);

// --- Main App Component ---
export default function App() {
    // A ref to hold the swiper container element
    const swiperRef = useRef(null);

    useEffect(() => {
        // Load Swiper CSS via a <link> tag
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Load Swiper JS via a <script> tag
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.async = true;
        document.body.appendChild(script);

        // Initialize Swiper after the script has loaded
        script.onload = () => {
             // Check if the swiper container exists and if Swiper is available on the window
             if (swiperRef.current && window.Swiper) {
                const swiper = new window.Swiper(swiperRef.current, {
                    // Modules are included in the bundle, so we don't need to import them
                    spaceBetween: 30,
                    slidesPerView: 'auto',
                    freeMode: true,
                    scrollbar: {
                        el: '.swiper-scrollbar-news',
                        draggable: true,
                        dragSize: 100,
                    },
                });
             }
        };

        // Cleanup function to remove the added script and link tags on component unmount
        return () => {
            if(document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if(document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                /* --- Global Styles & Fonts --- */
                :root {
                    --color-primary: #513B6A;
                    --color-secondary: #E8A145;
                    --color-text: #222;
                    --color-background: #F4F0EA;
                    --color-white: #FFF;
                    --color-border: #222;
                    --font-main: 'Inter', sans-serif;
                }
                
                body {
                    font-family: var(--font-main);
                    background-color: #fff;
                    color: var(--color-text);
                }

                /* --- Main Section --- */
                .section-news-blog {
                    margin: 100px 0;
                    overflow: hidden; /* Prevent horizontal scroll from slider */
                }

                /* --- Header --- */
                .news-header {
                    max-width: 1140px;
                    margin: 0 auto 50px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding: 0 1rem;
                }
                
                .news-text {
                    flex: 1 0 auto;
                }

                .news-subtitle .subtitle {
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 500;
                    margin: 0 0 5px 0;
                }
                
                .news-title .title {
                    margin: 0;
                    font-size: 36px;
                    font-weight: 400;
                    line-height: 1.2;
                }

                .news-button .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    padding: 12px 24px;
                    background-color: var(--color-background);
                    border: 2px solid var(--color-border);
                    border-radius: 8px;
                    text-decoration: none;
                    color: var(--color-text);
                    font-weight: 500;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 4px 4px 0px 0px var(--color-border);
                }
                
                .news-button .btn:hover {
                    background-color: var(--color-secondary);
                    color: var(--color-text);
                }

                .news-button .btn svg {
                    width: 1em;
                    height: 1em;
                }
                
                /* --- News Body & Slider --- */
                .news-body {
                    display: flex;
                }

                .news-slider-desktop {
                    width: calc(100% - 195px);
                    margin-left: auto;
                    padding-right: 30px;
                    padding-bottom: 20px;
                }

                /* --- Swiper Custom Scrollbar --- */
                .swiper-scrollbar-news {
                    margin-top: 80px;
                    height: 2px !important;
                    background-color: #A9A59E !important;
                    position: relative;
                }

                .swiper-scrollbar-drag {
                    background-image: url('https://bolehdicoba.com/wp-content/uploads/2025/02/slide-indicator.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 100px !important;
                    border-radius: 0px !important;
                    top: -49px !important; /* Center the larger drag handle */
                    background-color: transparent !important;
                    cursor: grab;
                }
                
                 .swiper-scrollbar-drag:active {
                    cursor: grabbing;
                 }
                
                /* --- News Card --- */
                 .swiper-slide {
                    width: 320px !important;
                 }

                .news-card {
                    height: auto; 
                    display: flex; 
                    width: 100%;
                }

                .news-card-inner {
                    position: relative;
                    transition: 0.2s ease-in-out;
                    margin-bottom: 8px;
                    border: 2px solid var(--color-border);
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background-color: var(--color-background);
                    width: 100%; 
                }

                .news-card:hover .news-card-inner {
                    box-shadow: 6px 6px 0px 0px var(--color-border);
                    transform: translate(-3px, -3px);
                }
                 
                .news-card:hover .news-card-title .title {
                    text-decoration: underline;
                }
                
                .news-card:hover .news-link a {
                    background-color: #FFB14C;
                    box-shadow: 4px 4px 0px 0px var(--color-border);
                }

                .news-card-image img {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 4 / 3;
                    object-fit: cover;
                    border-radius: 6px 6px 0 0;
                }
                
                .news-card-body {
                    padding: 20px;
                    border-top: 2px solid var(--color-border);
                    border-radius: 0 0 6px 6px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1; 
                }

                .news-card-category {
                    margin-bottom: 15px;
                }
                
                .news-card-category .category {
                    font-size: 14px;
                    font-weight: 500;
                    padding: 6px 14px;
                    background-color: var(--color-white);
                    border: 2px solid var(--color-border);
                    border-radius: 100px;
                    width: fit-content;
                    margin: 0;
                }

                .news-card-date .date {
                    font-size: 16px;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin: 0 0 10px 0;
                }
                
                .news-card-title {
                    margin-bottom: 10px;
                }

                .news-card-title .title {
                    color: var(--color-text);
                    font-size: 24px;
                    font-weight: 500;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    line-height: 1.3;
                }

                .news-card-description {
                    margin-bottom: 20px;
                }
                
                .news-card-description .description {
                    font-size: 16px;
                    font-weight: 300;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    line-height: 1.4;
                }
                
                .news-card-link {
                    margin-top: auto;
                }

                .news-card-link a {
                    color: var(--color-text);
                    font-size: 18px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }
                
                .news-card-link a svg {
                    transform: rotate(-45deg);
                    width: 1em;
                    height: 1em;
                }
                
                .news-link {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
                
                .news-link a {
                    transition: 0.2s ease-in-out;
                    color: var(--color-text);
                    border: 2px solid var(--color-border);
                    border-radius: 50%;
                    background-color: var(--color-white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 64px;
                    height: 64px;
                    text-decoration: none;
                }
                
                /* --- Mobile & Tablet Specific --- */
                .news-list-mobile {
                    display: none; /* Hidden by default */
                    padding: 0 15px;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }

                /* --- Responsive Breakpoints --- */
                @media (max-width: 1367px) {
                    .news-slider-desktop {
                        width: calc(100% - 110px);
                    }
                }
                
                @media (max-width: 767px) {
                    .section-news-blog {
                        margin: 50px 0 70px;
                    }
                    
                    .news-header {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    
                    .news-title {
                        margin-bottom: 30px;
                    }
                    
                    .news-title .title {
                        font-size: 24px;
                        line-height: 1.3;
                    }

                    .news-slider-desktop {
                       display: none;
                    }

                    .news-list-mobile {
                        display: flex;
                    }
                    
                    .news-list-mobile .news-card {
                        width: 100%;
                    }
                    
                    @media (min-width: 480px) {
                       .news-list-mobile .news-card {
                          width: calc(50% - 10px);
                       }
                    }

                    .news-card-body {
                        padding: 15px;
                    }
                    
                    .news-card-title .title {
                        font-size: 18px;
                        -webkit-line-clamp: 4;
                    }
                    
                    .news-card-description .description {
                        font-size: 14px;
                    }
                    
                    .news-link {
                        top: 15px;
                        right: 15px;
                    }
                    
                    .news-link a {
                        width: 48px;
                        height: 48px;
                    }
                }
            `}</style>
            <section className="section-news-blog">
                <div className="news-header">
                    <div className="news-text">
                        <div className="news-subtitle">
                            <p className="subtitle">NEWS & BLOG</p>
                        </div>
                        <div className="news-title">
                            <h4 className="title">Your time is valuable.<br />Read our insightful article within 5 minutes.</h4>
                        </div>
                    </div>
                    <div className="news-button">
                        <a href="/news-blog/" className="btn" target="_blank" rel="noopener noreferrer">
                            Explore More Article
                            <ArrowIcon />
                        </a>
                    </div>
                </div>

                <div className="news-body">
                    {/* --- Slider for Desktop --- */}
                    <div className="news-slider-desktop">
                         {/* Swiper container */}
                         <div className="swiper" ref={swiperRef}>
                            {/* Additional required wrapper */}
                            <div className="swiper-wrapper">
                                {/* Slides */}
                                {newsData.map((post, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <NewsCard post={post} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Scrollbar */}
                        <div className="swiper-scrollbar-news"></div>
                    </div>

                    {/* --- Grid for Mobile --- */}
                    <div className="news-list-mobile">
                        {newsData.slice(0, 4).map((post, index) => ( // Show first 4 on mobile
                            <NewsCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

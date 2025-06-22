import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Impor gaya Swiper
import "swiper/css";
import "swiper/css/free-mode";

// Data testimonial
const testimonials = [
  {
    name: "Kitschy",
    avatarColor: "#676022",
    text: "“Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.”",
  },
  {
    name: "CRSL",
    avatarColor: "#df7d3c",
    text: "“Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.”",
  },
  {
    name: "COTTONINK",
    avatarColor: "#ce2bbc",
    text: "“BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus. Overall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.”",
  },
  {
    name: "Lotus Archi",
    avatarColor: "#d46aa2",
    text: "“Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.”",
  },
  {
    name: "Holycow",
    avatarColor: "#f53c6b",
    text: "“Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.”",
  },
  {
    name: "CRSL",
    avatarColor: "#5d342c",
    text: "“Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.”",
  },
  {
    name: "COTTONINK",
    avatarColor: "#9130e2",
    text: "“BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus. Overall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.”",
  },
  {
    name: "Lotus Archi",
    avatarColor: "#0a88cf",
    text: "“Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.”",
  },
  {
    name: "Holycow",
    avatarColor: "#b40455",
    text: "“Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.”",
  },
  {
    name: "Kitschy",
    avatarColor: "#65e14d",
    text: "“Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.”",
  },
];

const TestimonialSection = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    // Fungsi untuk menghitung tinggi maksimum dari item konten
    const calculateMaxHeight = () => {
      let currentMaxHeight = 0;
      const contentItems = document.querySelectorAll(
        ".section-testimoni-homepage .content-item"
      );
      contentItems.forEach((item) => {
        const height = item.offsetHeight;
        if (height > currentMaxHeight) {
          // Sesuaikan berdasarkan lebar layar seperti logika JS asli
          if (window.screen.width > 750) {
            currentMaxHeight = height + 20;
          } else {
            currentMaxHeight = height + 5;
          }
        }
      });
      setMaxHeight(currentMaxHeight);
    };

    // Hitung tinggi maksimum pada inisialisasi dan saat ukuran jendela berubah
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

    // Fungsi cleanup untuk menghapus event listener
    return () => {
      window.removeEventListener("resize", calculateMaxHeight);
    };
  }, []); // Dependensi kosong berarti efek hanya berjalan sekali setelah render awal

  return (
    <>
      <style>
        {`
          /* Gaya CSS yang diambil dari contoh HTML asli */
          #container-section-testimoni{
            border: 0.2vw solid #222;
            border-left: none;
            border-right: none;
          }
          .section-testimoni-homepage{
            display:flex;
            justify-content:center;
            width: 100%;
            overflow:hidden;
            font-family: 'Inter', sans-serif; /* Menggunakan font Inter */
          }
          .section-testimoni-homepage > .inner{
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .section-testimoni-homepage .content-marque .inner{
            width: 100vw;
            display:flex;
          }
          .section-testimoni-homepage .content-item {
            padding:30px;
            width: 40vw;
            margin:1.5vw 0;
            border:0.138vw solid #000;
            flex-direction:column;
            display: flex;
            border-radius:0.55vw;
            white-space: normal;
            box-shadow: 0.277vw 0.277vw 0px 0px #222;
            background-color:#fff;
            box-sizing: border-box; /* Pastikan padding tidak menambah lebar */
          }
          .section-testimoni-homepage .content-item-header{
            display:flex;
            align-items:center;
          }
          .section-testimoni-homepage .content-item > p{
            font-size:1.25vw;
            font-weight: 300;
            line-height: 1.576vw;
            margin-top: 1.5vw;
          }
          .section-testimoni-homepage .content-item .avatar{
            width: 3.05vw;
            height: 3.05vw;
            display: flex;
            border-radius: 3vw;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size:1.5vw;
          }
          .section-testimoni-homepage .content-item .information{
            margin-left:0.8vw;
          }
          .section-testimoni-homepage .content-item .information .name{
            font-weight:500;
            font-size:1.111vw;
            margin:0;
            padding:0;
          }
          .section-testimoni-homepage .content-item .information .company{
            font-size:0.972vw;
            margin:0;
            padding:0;
            font-weight:300;
          }
          .marquee-homepage {
            width: 100vw;
            margin: 0 auto;
            overflow: hidden;
            white-space: nowrap;
          }
          .marquee-homepage .box-content {
            display: inline-block;
            font-size: 20px;
            position: relative;
            left: 100%;
            /* Animasi ini tidak digunakan karena Swiper yang mengelola */
          }
          .marquee-homepage:hover .box-content {
            /* Animasi ini tidak digunakan karena Swiper yang mengelola */
          }
          .section-testimoni-homepage .content-heading h5{
            font-size:0.972vw;
            margin:0;
            padding:0;
            text-align:center;
          }
          .section-testimoni-homepage .content-heading h3{
            font-size:2.57vw;
            margin:0;
            padding:0;
            text-align:center;
            margin: 0.3vw 0 0.9vw 0;
            font-weight: 400;
          }
          .inner-marquee {
            position: relative;
            overflow: hidden;
            min-height: 20vh;
          }
          .box-marquee{
            display:flex;
            width:100vw;
          }
          /* Gaya Swiper */
          .swiper-container .swiper-wrapper, .swiper-container1 .swiper-wrapper {
            transition-timing-function: linear !important; /* Penting untuk animasi mulus */
            pointer-events: none; /* Mencegah interaksi mouse mengganggu animasi */
          }
          .swiper-container, .swiper-container1 {
            width: 100%;
            padding: 20px 0; /* Memberi sedikit ruang di atas/bawah slide */
            box-sizing: border-box;
          }

          @media (max-width: 768px) {
            .inner-marquee {
              min-height: 50vh;
            }
            .section-testimoni-homepage .content-heading h5{
              font-size:4.26vw;
            }
            .section-testimoni-homepage .content-heading h3{
              font-size:6.4vw;;
              margin: 2vw 0 7vw 0;
            }
            .section-testimoni-homepage .content-item .information .name{
              font-size:4.26vw;
            }
            .section-testimoni-homepage .content-item .information .company{
              font-size:3.2vw;
            }
            .section-testimoni-homepage .content-item > p{
              font-size:3.73vw;
              line-height:4.5vw;
            }
            .section-testimoni-homepage .content-item {
              width: 75vw;
              border: 0.5vw solid #000;
              border-radius: 2.55vw;
              padding: 3vw;
              margin: 0 3.5vw;
              box-shadow: 1.277vw 1.277vw 0px 0px #222;
            }
            .section-testimoni-homepage .content-item .avatar{
              width: 11.73vw;
              height: 11.73vw;
              border-radius:7vw;
              font-size:5.5vw;
            }
            .section-testimoni-homepage .content-item .information {
              margin-left: 3.8vw;
            }
            .section-testimoni-homepage .content-item > p{
              margin-top:5vw;
            }
            .swiper-container1{
              margin-top:7vw;
            }
            .content-heading{
              width: 100vw;
            }
            .hide-mobile {
              display: none; /* Sembunyikan Swiper kedua di perangkat mobile */
            }
          }

          /* Font Inter dari Google Fonts */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        `}
      </style>

      {/* Bagian testimonial utama */}
      <div
        className="elementor-element elementor-element-16a6fab e-con-full e-flex e-con e-parent"
        id="container-section-testimoni"
      >
        <div className="elementor-element elementor-element-3da2745 elementor-widget elementor-widget-section_Testimoni_Homepage">
          <div className="elementor-widget-container">
            <div className="section-testimoni-homepage">
              <div className="inner">
                {/* Bagian judul testimonial */}
                <div className="content-heading">
                  <div className="inner">
                    <h5>FROM OUR NOTABLE CLIENTS</h5>
                    <h3>800+ business have experienced the result</h3>
                  </div>
                </div>
                {/* Bagian marquee testimonial */}
                <div className="content-marque">
                  <div>
                    {/* Swiper pertama (biasanya untuk desktop, berjalan ke kanan) */}
                    <Swiper
                      modules={[Autoplay, FreeMode]}
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                      speed={10000}
                      loop={true}
                      slidesPerView={"auto"}
                      freeMode={true}
                      freeModeMomentum={false}
                      className="swiper-container"
                    >
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                          key={index}
                          className="content-item"
                          style={{ height: "300px" }}
                        >
                          <div className="content-item-header">
                            <div
                              className="avatar"
                              style={{
                                backgroundColor: testimonial.avatarColor,
                              }}
                            >
                              {testimonial.name.charAt(0)}
                            </div>
                            <div className="information">
                              <p className="name">{testimonial.name}</p>
                            </div>
                          </div>
                          <p>{testimonial.text}</p>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Swiper kedua (biasanya untuk desktop, berjalan ke kiri, disembunyikan di mobile) */}
                    <Swiper
                      modules={[Autoplay, FreeMode]}
                      spaceBetween={30}
                      direction="horizontal"
                      centeredSlides={true}
                      autoplay={{
                        reverseDirection: true, // Mengatur arah berlawanan
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                      speed={10000}
                      loop={true}
                      slidesPerView={"auto"}
                      freeMode={true}
                      freeModeMomentum={false}
                      className="swiper-container1 hide-mobile"
                    >
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                          key={index}
                          className="content-item"
                          style={{ height: "300px" }}
                        >
                          <div className="content-item-header">
                            <div
                              className="avatar"
                              style={{
                                backgroundColor: testimonial.avatarColor,
                              }}
                            >
                              {testimonial.name.charAt(0)}
                            </div>
                            <div className="information">
                              <p className="name">{testimonial.name}</p>
                            </div>
                          </div>
                          <p>{testimonial.text}</p>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

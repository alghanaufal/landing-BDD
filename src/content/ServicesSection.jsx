import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin ScrollTrigger di luar komponen untuk menghindari pendaftaran ulang setiap render
gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  // Ref untuk elemen DOM yang akan dimanipulasi oleh GSAP/ScrollTrigger
  const servicesListRef = useRef(null);
  const serviceCardsRefs = useRef([]);
  const pinSpacerRef = useRef(null);

  // Data layanan yang akan ditampilkan dalam kartu
  const servicesData = [
    {
      title: "Digital Advertising",
      description:
        "Capai pertumbuhan optimal Anda melalui Iklan Digital dengan strategi yang dapat ditindaklanjuti dan berdampak.",
      link: "https://bolehdicoba.com/services/digital-advertising/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Frame-770432-2.png",
      alt: "Digital Advertising",
      bgColor: "#C8D6EE",
      textColor: "#222",
    },
    {
      title: "Konten Kreatif & Live Shopping",
      description:
        "Kreatif kinerja menghadirkan proses berbasis data dan teknologi yang dirancang untuk memperkuat dampak dari materi kreatif itu sendiri.",
      link: "services/performance-creative",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40596-1.png",
      alt: "Konten Kreatif & Live Shopping",
      bgColor: "rgb(34, 34, 34)",
      textColor: "rgb(255, 255, 255)",
    },
    {
      title: "Pengembangan & Pemeliharaan Web",
      description:
        "Kami merancang dan mengembangkan situs web yang paling sesuai untuk bisnis Anda untuk membantu Anda menjual produk dan layanan Anda secara efektif.",
      link: "https://bolehdicoba.com/services/website-development/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40597-1.png",
      alt: "Pengembangan & Pemeliharaan Web",
      bgColor: "rgb(192, 233, 227)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Optimisasi Mesin Pencari (SEO)",
      description:
        "SEO adalah investasi jangka panjang dalam pemasaran untuk mendorong lalu lintas organik dan melambungkan peringkat situs web.",
      link: "https://bolehdicoba.com/services/seo/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40598-1.png",
      alt: "Optimisasi Mesin Pencari (SEO)",
      bgColor: "rgb(201, 194, 209)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Layanan Profesional",
      description:
        "Growth Hack adalah seni memilih audiens, penawaran, dan strategi yang tepat. Apakah Anda akan mempercayai kami untuk membimbing Anda melaluinya?",
      link: "https://bolehdicoba.com/services/professional-service/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40599-1.png",
      alt: "Layanan Profesional",
      bgColor: "rgb(254, 203, 199)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Pengembangan Program Komunitas",
      description:
        "Kami membantu bisnis untuk mempertahankan pelanggan, dan mendorong mereka untuk menjelajahi lebih banyak produk dan layanan Anda.",
      link: "https://bolehdicoba.com/services/community-program-development/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40600-1.png",
      alt: "Pengembangan Program Komunitas",
      bgColor: "rgb(255, 231, 200)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Pelatihan Pemasaran Digital oleh Boleh Belajar",
      description:
        "Program pelatihan yang disesuaikan dibimbing oleh para ahli dan profesional industri.",
      link: "https://bolehbelajar.com/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40601-1.png",
      alt: "Pelatihan Pemasaran Digital oleh Boleh Belajar",
      bgColor: "rgb(241, 237, 229)",
      textColor: "rgb(34, 34, 34)",
    },
  ];

  useEffect(() => {
    const servicesList = servicesListRef.current;
    const serviceCards = serviceCardsRefs.current.filter(Boolean); // Filter out nulls if any ref is not yet set
    const pinSpacer = pinSpacerRef.current;

    const setupScrollAnimations = () => {
      // Hentikan ScrollTrigger yang ada untuk mencegah duplikasi saat refresh
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Terapkan pinning kompleks hanya pada layar yang lebih besar (desktop)
      if (window.innerWidth > 750 && serviceCards.length > 0) {
        // Atur status awal untuk semua kartu (tersembunyi dan sedikit bergeser)
        gsap.set(serviceCards, { opacity: 0, translateY: 50 });

        // Kartu pertama harus segera terlihat
        gsap.set(serviceCards[0], {
          opacity: 1,
          translateY: 0,
          pointerEvents: "auto",
        });

        // Hitung jarak gulir yang diperlukan untuk setiap transisi kartu
        const cardRevealScrollAmount = window.innerHeight * 0.8; // Contoh: 80% tinggi viewport per kartu

        // Hitung total tinggi untuk `pin-spacer`
        const totalPinSpacerHeight =
          (serviceCards.length - 1) * cardRevealScrollAmount +
          servicesList.offsetHeight;
        pinSpacer.style.height = `${totalPinSpacerHeight}px`;

        // Buat ScrollTrigger utama untuk 'memin' wadah servicesList
        ScrollTrigger.create({
          trigger: pinSpacer,
          pin: servicesList,
          start: "top top",
          end: `bottom bottom`, // Pastikan akhiran trigger sesuai dengan akhir pin-spacer
          scrub: true,
          // markers: true, // Hapus komentar untuk debugging
          onUpdate: (self) => {
            const progressPerCard = 1 / serviceCards.length;
            serviceCards.forEach((card, i) => {
              const startProgress = i * progressPerCard;
              const endProgress = (i + 1) * progressPerCard;

              // Jika progres gulir berada dalam rentang untuk kartu ini, aktifkan
              if (
                self.progress >= startProgress &&
                self.progress < endProgress
              ) {
                card.classList.add("active");
              } else {
                card.classList.remove("active");
              }
            });
          },
        });

        // Buat timeline untuk mengatur animasi kartu individual
        const cardAnimationTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: pinSpacer,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        serviceCards.forEach((card, index) => {
          if (index > 0) {
            // Animasikan semua kartu kecuali yang pertama
            // Definisikan posisi gulir spesifik (sebagai persentase dari total gulir)
            const startScrollPoint = index / serviceCards.length;

            // Tambahkan animasi ke timeline
            cardAnimationTimeline.to(
              card,
              {
                opacity: 1,
                translateY: 0,
                duration: 0.2, // Pengungkapan cepat
                ease: "power1.out",
              },
              startScrollPoint
            ); // Posisikan animasi pada timeline

            // Saat kartu masuk, kartu sebelumnya mungkin memudar (opsional, menciptakan tumpang tindih)
            cardAnimationTimeline.to(
              serviceCards[index - 1],
              {
                opacity: 0,
                translateY: -50, // Geser ke atas dan keluar
                duration: 0.2,
                ease: "power1.in",
              },
              startScrollPoint + 0.05
            ); // Sedikit setelah kartu saat ini masuk
          }
        });
      } else {
        // Pada perangkat seluler atau layar yang lebih kecil, nonaktifkan pinning dan atur ulang gaya
        serviceCards.forEach((card) => {
          gsap.set(card, {
            opacity: 1,
            translateY: 0,
            position: "relative",
            top: "auto",
            bottom: "auto",
            pointerEvents: "auto",
          });
        });
        pinSpacer.style.height = "auto"; // Atur ulang tinggi pin-spacer
      }
    };

    // Pengaturan awal animasi
    setupScrollAnimations();

    // Refresh ScrollTrigger saat jendela diubah ukurannya untuk menghitung ulang tinggi dan menginisialisasi ulang
    // Gunakan addEventListener dan hapus saat cleanup untuk mencegah masalah
    ScrollTrigger.addEventListener("refreshInit", setupScrollAnimations);
    window.addEventListener("resize", ScrollTrigger.refresh);

    // Fungsi cleanup untuk saat komponen tidak lagi dipasang (unmount)
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.removeEventListener("refreshInit", setupScrollAnimations);
      window.removeEventListener("resize", ScrollTrigger.refresh);
      // Penting: Kosongkan ref array untuk menghindari masalah di render berikutnya jika komponen dipasang ulang
      serviceCardsRefs.current = [];
    };
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali saat komponen dipasang

  return (
    <div className="section-services">
      <div className="services-header">
        <div className="services-header-left">
          <div className="services-subtitle">
            <p className="subtitle">OUR SERVICES</p>
          </div>
          <div className="services-title">
            <h4 className="title">
              We Offer a Wide Services Aimed to Support your Business
            </h4>
          </div>
        </div>
        <div className="services-header-right">
          <div className="services-description">
            <p className="description">
              It may surprise you, but digital marketing is not a single
              strategy, it covers a lot of spectrum, but don’t worry, we got
              you!
            </p>
          </div>
        </div>
      </div>
      <div className="services-body">
        <div className="pin-spacer" ref={pinSpacerRef}>
          <div className="services-list" ref={servicesListRef}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`services-card services-card-${index}`}
                style={{
                  backgroundColor: service.bgColor,
                  color: service.textColor,
                }}
                // Menggunakan fungsi callback untuk mengisi ref array
                ref={(el) => (serviceCardsRefs.current[index] = el)}
              >
                <div className="services-card-inner">
                  <div className="services-card-text">
                    <div className="services-card-title">
                      <h4 className="title">{service.title}</h4>
                    </div>
                    <div className="services-card-description">
                      <div className="description">
                        <p>{service.description}</p>
                      </div>
                    </div>
                    <div className="services-card-button">
                      <a
                        href={service.link}
                        className="btn btn-branding-secondary"
                      >
                        See Detail Service
                        <svg
                          className="svg-inline--fa fa-arrow-right"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="arrow-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="services-card-image">
                    <img
                      decoding="async"
                      src={service.image}
                      alt={service.alt}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/400x250/cccccc/333333?text=Image+Not+Found";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

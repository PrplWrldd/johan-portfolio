import { TranslationDictionary } from '../types/portfolio';

export const ms: TranslationDictionary = {
  nav: {
    home: 'Utama',
    about: 'Tentang Saya',
    skills: 'Kemahiran',
    experience: 'Pengalaman',
    projects: 'Projek',
    achievements: 'Pencapaian',
    contact: 'Hubungi',
    resumeButton: 'Lihat Resume / CV',
  },
  hero: {
    greeting: 'Salam Sejahtera & Hai, Saya',
    name: 'Muhammad Johan Irfan bin Khairudin',
    headline: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan · Pelajar IT Pengkhususan Jaminan & Keselamatan Maklumat',
    hook: 'Memacu transformasi digital sektor awam dengan dokumentasi kejuruteraan keperluan yang teliti (BRS/SRS/SDS), seni bina web timbunan penuh (full-stack), dan jaminan keselamatan siber.',
    badgeGovTech: 'Pelatih GovTech Malaysia (Kementerian Digital)',
    badgeEducation: 'Tahun Akhir BIT @ IIUM Gombak',
    badgeCgpa: 'PNGK 3.54 · Senarai Dekan 5 Semester',
    ctaExperience: 'Lihat Pengalaman GovTech',
    ctaProjects: 'Terokai Projek Pilihan',
    ctaContact: 'Hubungi Saya',
    copiedEmail: 'Emel telah disalin ke papan keratan!',
    copyEmail: 'Salin Emel',
    downloadResume: 'Muat Turun Resume (PDF)',
  },
  about: {
    sectionTag: 'Profil Akademik & Profesional',
    title: 'Tentang Saya',
    subtitle: 'Menggabungkan analisis keperluan berstruktur dengan kejuruteraan perisian yang selamat bagi menghasilkan sistem berimpak tinggi.',
    educationTitle: 'Pendidikan & Latar Belakang Akademik',
    degree: 'Sarjana Muda Teknologi Maklumat (Kepujian)',
    institution: 'Universiti Islam Antarabangsa Malaysia (UIAM / IIUM), Gombak',
    expectedGrad: 'Okt 2022 – Okt 2026 (Jangkaan Graduasi)',
    cgpaLabel: 'Purata Nilai Gred Kumulatif (PNGK): 3.54 / 4.00 (Anugerah Dekan 5 Semester)',
    currentInternshipTitle: 'Latihan Industri Semasa — GovTech Malaysia',
    currentInternshipText: 'Berkhidmat sebagai Pelatih Jurutera Keperluan / Penganalisis Perniagaan di bawah Kementerian Digital dari Mac hingga September 2026. Berpengalaman menyediakan dokumentasi BRS, SRS, SDS, dan Manual Pengguna mengikut piawaian sektor awam bagi portal dan sistem kabinet berimpak nasional.',
    interestsTitle: 'Bidang Tumpuan & Minat Penyelidikan',
    interests: [
      'Penyelidikan Keperluan, Penulisan BRS, SRS & SDS',
      'Keselamatan Sistem, Audit Kerentanan & Pengurusan Risiko',
      'Analisis Impak Privasi (PIA) & Etika Pengkomputeran',
      'Pembangunan Web Timbunan Penuh (Ekosistem Laravel & React)',
      'Penyelesaian Masalah Sistem & Infrastruktur IT (Windows & macOS)'
    ],
    languagesTitle: 'Penguasaan Bahasa',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Penutur Asli (Native)', note: 'Bahasa kebangsaan — fasih dalam penggubalan dokumentasi rasmi kerajaan dan komunikasi profesional.' },
      { name: 'Bahasa Inggeris', level: 'Perbualan & Profesional', note: 'Penguasaan kerja penuh bagi penulisan teknikal, pembentangan, dan rundingan pihak berkepentingan.' }
    ],
    coreValues: [
      { title: 'Dokumentasi Berstruktur', desc: 'Menterjemah dasar dan kehendak pihak berkepentingan kepada spesifikasi teknikal yang jelas dan boleh diuji.' },
      { title: 'Keselamatan Sejak Awal (Security by Design)', desc: 'Menerapkan kawalan akses, integriti data, dan prinsip jaminan maklumat seawal fasa reka bentuk.' },
      { title: 'Empati Komunikasi', desc: 'Merapatkan jurang komunikasi antara pengguna bukan teknikal sektor awam dan pasukan jurutera perisian.' }
    ]
  },
  skills: {
    sectionTag: 'Keupayaan & Senjata Teknikal',
    title: 'Kemahiran & Kompetensi',
    subtitle: 'Gabungan seimbang antara dokumentasi analisis perniagaan, pembangunan perisian timbunan penuh, dan reka bentuk multimedia.',
    categories: {
      languages: {
        title: 'Bahasa Pengaturcaraan',
        description: 'Bahasa utama yang digunakan untuk perkhidmatan bahagian belakang, algoritma, dan pangkalan data.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Mahir (Proficient)', highlight: true },
          { name: 'SQL', level: 'Mahir (Proficient)', highlight: true },
          { name: 'JavaScript (ES6+)', level: 'Pertengahan (Intermediate)', highlight: true },
          { name: 'HTML5 / CSS3', level: 'Mahir (Proficient)' },
          { name: 'C', level: 'Asas Akademik' }
        ]
      },
      frameworks: {
        title: 'Rangka Kerja & Pustaka',
        description: 'Rangka kerja moden untuk membina aplikasi web yang pantas dan responsif.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Mahir (MVC, Eloquent, Blade)', highlight: true },
          { name: 'Tailwind CSS', level: 'Pertengahan (Tema Kustom & Responsif)', highlight: true },
          { name: 'React.js', level: 'Pertengahan (Hooks, State, Context)' },
          { name: 'Next.js', level: 'Pertengahan (App Router, Server Components)' }
        ]
      },
      dataTools: {
        title: 'Pangkalan Data & Alat Analitis',
        description: 'Pangkalan data hubungan, kecerdasan perniagaan, dan analisis data.',
        iconName: 'Database',
        skills: [
          { name: 'MySQL', level: 'Mahir (Proficient)', highlight: true },
          { name: 'Power BI', level: 'Pemodelan Data & Papan Pemuka' },
          { name: 'Tableau', level: 'Analisis Visual' },
          { name: 'Azure Data Studio', level: 'Pengurusan & Pertanyaan Data' },
          { name: 'Microsoft Excel', level: 'Formula Lanjutan & Analisis Data' }
        ]
      },
      documentation: {
        title: 'Dokumentasi & Kejuruteraan BA',
        description: 'Artifak kitaran hayat kejuruteraan perisian dan spesifikasi sistem sektor awam.',
        iconName: 'FileText',
        skills: [
          { name: 'Spesifikasi Keperluan Perisian (SRS)', level: 'Piawaian GovTech', highlight: true },
          { name: 'Spesifikasi Reka Bentuk Sistem (SDS)', level: 'Seni Bina & Skema', highlight: true },
          { name: 'Spesifikasi Keperluan Perniagaan (BRS)', level: 'Peringkat Pelbagai Agensi', highlight: true },
          { name: 'Kisah Pengguna & Kriteria Penerimaan', level: 'Agile / Scrum' },
          { name: 'Manual Pengguna & SOP', level: 'Latihan Sektor Awam' }
        ]
      },
      multimedia: {
        title: 'Multimedia & Reka Bentuk UI/UX',
        description: 'Prototaip interaktif, penghasilan aset visual, dan pasca-produksi video.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'Prototaip UI/UX & Sistem Reka Bentuk', highlight: true },
          { name: 'Canva', level: 'Pembentangan & Aset Visual' },
          { name: 'Adobe Premiere Pro', level: 'Penyuntingan Video' },
          { name: 'Adobe Lightroom', level: 'Pemprosesan Foto' },
          { name: 'Adobe After Effects', level: 'Grafik Gerakan (Motion Graphics)' }
        ]
      }
    }
  },
  experience: {
    sectionTag: 'Impak Sektor Awam',
    title: 'Pengalaman Kerja',
    subtitle: 'Memacu standard penyampaian digital dan spesifikasi sistem untuk agensi kerajaan Malaysia.',
    roleBadge: 'Latihan Industri',
    tenure: 'Mac 2026 – September 2026 (6 Bulan)',
    overview: 'Sebagai Pelatih Jurutera Keperluan / Penganalisis Perniagaan di GovTech Malaysia (Kementerian Digital), saya mengkhusus dalam mengumpul kehendak pengguna, memudahkan bengkel penyelarasan pihak berkepentingan, dan menulis dokumen spesifikasi teknikal berwibawa (SRS, SDS, BRS, serta Manual Pengguna) untuk platform berprofil tinggi kerajaan.',
    deliverablesTitle: 'Inisiatif & Sistem Kerajaan Yang Didokumentasikan',
    methodologiesTitle: 'Metodologi Utama Yang Digunakan',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital',
        role: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan',
        period: 'Mac 2026 – September 2026',
        location: 'Putrajaya / Kuala Lumpur, Malaysia',
        type: 'Transformasi Digital Sektor Awam',
        summary: 'Terlibat secara langsung dalam 5 inisiatif sistem digital kerajaan peringkat nasional, menghasilkan artifak kejuruteraan perisian yang menjadi panduan pembangunan pasukan teknikal dan pemegang taruh perkhidmatan awam.',
        projects: [
          {
            name: 'Portal Sekolahku (KPM)',
            tag: 'Kementerian Pendidikan Malaysia',
            description: 'Menyediakan Spesifikasi Keperluan Perisian (SRS), Spesifikasi Reka Bentuk Sistem (SDS), dan Manual Pengguna dwibahasa untuk portal sekolah kebangsaan.',
            deliverables: ['Dokumentasi lengkap SRS & SDS', 'Manual panduan pengguna langkah demi langkah', 'Matriks kebenaran peranan fungsi sistem']
          },
          {
            name: 'Hansard Parlimen',
            tag: 'Parlimen Malaysia',
            description: 'Menggubal dokumentasi teknikal (SRS, SDS, Manual Pengguna) untuk sistem rakaman verbatim dan capaian carian rasmi Parlimen Malaysia.',
            deliverables: ['Pemodelan aliran kerja transkrip perundangan', 'Spesifikasi sistem SRS & SDS', 'Manual operasi pegawai parlimen']
          },
          {
            name: 'GovSuiteDMS (Jemaah Menteri / Kabinet)',
            tag: 'Pengurusan Dokumen Kabinet',
            description: 'Mengetuai sesi pengumpulan keperluan bersama pegawai kanan sektor awam dan menghasilkan SRS/SDS bagi Sistem Pengurusan Dokumen selamat yang diguna pakai oleh Kabinet.',
            deliverables: ['Sesi temu bual & penemuan keperluan pihak berkepentingan', 'SRS kawalan kerahsiaan dan akses bertaraf kabinet', 'SDS seni bina sistem dan skema data']
          },
          {
            name: 'GovSuiteCMS',
            tag: 'CMS Berpusat Pelbagai Agensi',
            description: 'Mengumpul keperluan pelbagai agensi dan merangka Spesifikasi Keperluan Perniagaan (BRS) bagi Sistem Pengurusan Kandungan berpusat yang berskala besar untuk portal awam.',
            deliverables: ['Pengumpulan keperluan silang agensi', 'BRS sistem pengurusan kandungan pelbagai penyewa (multi-tenant)', 'Matriks aliran kerja kelulusan dan penerbitan']
          },
          {
            name: 'RDMKD (Kementerian Digital)',
            tag: 'Repositori Kementerian Digital',
            description: 'Merangka dokumen spesifikasi teras dan dokumentasi pengguna untuk repositori digital dan penjejakan aliran kerja dalaman Kementerian Digital.',
            deliverables: ['Penulisan SRS & SDS', 'Panduan pengguna dalaman & panduan penyelesaian masalah']
          }
        ],
        skillsAcquired: [
          'Pengumpulan Keperluan & Rundingan Pihak Berkepentingan',
          'Penulisan Teknikal BRS, SRS, dan SDS',
          'Pemodelan Proses & Carta Alir Sistem',
          'Pematuhan Keselamatan Sektor Awam',
          'Penyelarasan Pengujian Penerimaan Pengguna (UAT)'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Portfolio Kejuruteraan & Prototaip',
    title: 'Projek Pilihan',
    subtitle: 'Pembangunan web timbunan penuh, visualisasi grafik 3D interaktif, dan prototaip UI/UX berpusatkan manusia.',
    viewDetails: 'Lihat Terperinci',
    viewDetailsAria: 'Lihat perincian sistem untuk',
    githubButton: 'Repositori GitHub',
    prototypeButton: 'Prototaip / Demo Langsung',
    placeholderNotice: 'Pautan repositori dan tangkapan skrin demonstrasi adalah pemegang tempat (placeholder) sedia untuk dikemas kini dengan aset akhir anda.',
    modalClose: 'Tutup Dialog',
    modalOverview: 'Gambaran Keseluruhan Sistem',
    modalProblem: 'Penyataan Masalah & Konteks',
    modalSolution: 'Penyelesaian & Seni Bina Teknikal',
    modalFeatures: 'Ciri-Ciri Utama & Fungsi',
    modalTech: 'Timbunan Teknologi & Alat',
    modalDeliverables: 'Artifak & Hasil Kerja Utama',
    filterAll: 'Semua Projek',
    items: [
      {
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Sistem Pengurusan Tanah Perkuburan Digital & Penjejak Plot GPS',
        category: 'Aplikasi Web Full-Stack',
        summary: 'Platform pengurusan perkuburan berasaskan web yang dibangunkan untuk Masjid Al-Hidayah bagi mendigitalkan rekod kubur, navigasi plot berasaskan GPS, dan modul pentadbir yang selamat.',
        detailedOverview: 'MAQAM memodenkan kaedah penyimpanan rekod perkuburan berasaskan buku fizikal tradisional. Sistem ini menyediakan antara muka awam yang mesra pengguna di mana waris boleh mencari rekod arwah dan melihat lokasi tepat di atas peta interaktif, disokong oleh papan pemuka pentadbir berkomputer untuk jawatankuasa masjid menguruskan plot dan rekod pengebumian.',
        problemStatement: 'Pentadbir masjid bergantung pada buku log fizikal yang mudah rosak dan lapuk, menyukarkan waris mencari kubur keluarga serta merumitkan perancangan penempatan lot perkuburan baharu.',
        solutionAndArchitecture: 'Dibangunkan menggunakan seni bina Laravel MVC dengan skema pangkalan data MySQL yang dinormalkan. Mengintegrasikan Google Maps JavaScript API untuk memetakan sempadan tanah perkuburan dan koordinat GPS. Melaksanakan kawalan akses keselamatan bagi memastikan hanya pentadbir yang sah boleh mengemas kini status rekod.',
        keyFeatures: [
          'Peta perkuburan interaktif berasaskan GPS dengan carian dan penandaan lokasi',
          'Arkib pengebumian digital yang boleh dicari mengikut nama, nombor kad pengenalan, atau tarikh',
          'Portal pentadbiran berasaskan peranan untuk peruntukan plot dan status rekod',
          'Antara muka responsif yang dioptimumkan untuk peranti mudah alih semasa waris berada di lokasi perkuburan'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Ketua Pembangun Full-Stack & Arkitek Pangkalan Data',
        githubUrl: 'https://github.com/placeholder/maqam-cemetery-system',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/maqam',
        deliverables: ['Reka Bentuk Skema & ERD Pangkalan Data', 'Modul Integrasi Google Maps API', 'Portal Pentadbir & Pengesahan CRUD', 'Senarai Kes Ujian Pengujian Penerimaan Pengguna (UAT)'],
        imagePlaceholderText: 'MAQAM — Antara Muka Pengurusan Perkuburan & Carian GPS',
        accentColor: '#059669'
      },
      {
        id: 'restaurant-pos',
        title: 'Sistem POS Restoran',
        subtitle: 'Sistem Titik Jualan (POS) Web Masa Nyata & Penjejakan Pesanan Dapur',
        category: 'Aplikasi Web Full-Stack',
        summary: 'Sistem Titik Jualan (POS) berasaskan web yang responsif direka dengan Laravel dan AJAX untuk pemprosesan pesanan langsung, pengurusan menu dinamik, dan penjejakan status dapur.',
        detailedOverview: 'Dibina untuk melancarkan operasi harian restoran berkepadatan tinggi. Sistem ini menguruskan pesanan meja, penjanaan bil, dan penghantaran pesanan ke bahagian dapur secara langsung tanpa memerlukan muat semula halaman (page refresh).',
        problemStatement: 'Penggunaan pesanan kertas manual dan antara muka juruwang yang perlahan mengakibatkan kesilapan pesanan di dapur, kelewatan hidangan, dan ketidaktetapan pengiraan jualan harian.',
        solutionAndArchitecture: 'Dibangunkan mengikut seni bina MVC Laravel. mereka bentuk aliran pesanan tak segerak (asynchronous) menggunakan AJAX dan pemprosesan DOM JavaScript. Menyusun pertanyaan transaksi pangkalan data MySQL dengan kekangan kunci asing (foreign keys) bagi menjamin ketepatan laporan audit kewangan.',
        keyFeatures: [
          'Pengurusan menu CRUD dinamik dengan penapisan kategori dan harga hidangan',
          'Antara muka pesanan langsung berasaskan AJAX dengan pengiraan automatik jumlah dan cukai',
          'Skrin paparan pesanan dapur masa nyata dengan status penyediaan (Pending / Ready)',
          'Penjanaan resit automatik dan laporan perincian transaksi jualan harian'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript (AJAX)', 'CSS3', 'Blade Templating'],
        role: 'Pembangun Full-Stack & Pereka Sistem',
        githubUrl: 'https://github.com/placeholder/restaurant-pos-laravel',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/pos-system',
        deliverables: ['Seni Bina Pengawal & Laluan MVC', 'Enjin Penghantaran Pesanan Langsung AJAX', 'Skema & Prosedur Pangkalan Data MySQL', 'Antara Muka Paparan Dapur Masa Nyata'],
        imagePlaceholderText: 'Sistem POS — Papan Pemuka Langsung Juruwang & Dapur',
        accentColor: '#0284C7'
      },
      {
        id: 'networth-3d',
        title: 'Animasi Profil & Nilai Bersih 3D',
        subtitle: 'Visualisasi Data Interaktif Three.js & Papan Pemuka Google Auth',
        category: '3D & Grafik Web',
        summary: 'Papan pemuka visualisasi data 3D interaktif yang memaparkan data kewangan dan profil CSV secara langsung dari Google Sheets ke dalam susun atur Jadual, Sfera, Heliks, dan Grid dengan log masuk Google Identity Services.',
        detailedOverview: 'Projek pengkomputeran visual yang mempamerkan keupayaan grafik web 3D masa nyata. Ia bersambung terus kepada data Google Sheets melalui titik akhir CSV dan menjana zarah serta kad 3D dinamik menggunakan Three.js / CSS3DRenderer bersama pengesahan Google OAuth 2.0 yang selamat.',
        problemStatement: 'Hamparan data 2D tradisional sukar memberikan gambaran visual spatial yang menarik bagi set data kewangan dan demografi pelbagai atribut.',
        solutionAndArchitecture: 'Menggunakan Three.js dengan algoritma transformasi matematik untuk mengira koordinat spatial 3D bagi susunan Jadual (gaya berkala), Sfera (geodesik), Heliks (lingkaran berputar), dan Grid (matriks volumetrik). Mengintegrasikan Google Identity Services API untuk pengesahan token di bahagian klien.',
        keyFeatures: [
          'Kawalan kamera interaktif dengan pergerakan lancar dan kawalan zum OrbitControls',
          '4 Susun atur transformasi 3D dinamik: Jadual Berkala, Sfera 3D, Heliks Berganda, dan Grid Bertingkat',
          'Penyegerakan data masa nyata yang mengambil entri CSV terkini daripada Google Sheets',
          'Integrasi Google Identity Services OAuth untuk pengesahan profil pengguna yang selamat'
        ],
        techStack: ['Three.js', 'JavaScript (ES6+)', 'HTML5 Canvas', 'Tailwind CSS', 'Google Identity Services', 'Google Sheets API'],
        role: 'Pembangun Frontend & Grafik 3D',
        githubUrl: 'https://github.com/placeholder/profile-networth-3d-threejs',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/3d-networth',
        deliverables: ['Enjin Paparan Tiga Dimensi & Kamera Three.js', 'Algoritma Pemetaan Koordinat 3D', 'Integrasi Klien Google OAuth 2.0', 'Penghurai CSV Google Sheets Masa Nyata'],
        imagePlaceholderText: 'Visualizer 3D Three.js — Susun Atur Zarah Sfera & Heliks',
        accentColor: '#6366F1'
      },
      {
        id: 'iium-bus-tracker',
        title: 'Penjejak Bas Kampus IIUM',
        subtitle: 'Prototaip UI/UX Mobiliti & Jadual Bas Ulang-Alik Kampus Masa Nyata',
        category: 'UI/UX & Prototaip',
        summary: 'Prototaip UI/UX mudah alih berpusatkan pengguna yang direka dalam Figma bagi mengatasi masalah ketidakpastian jadual bas ulang-alik untuk ribuan pelajar dan kakitangan IIUM Gombak.',
        detailedOverview: 'Projek reka bentuk empirikal yang menumpukan kepada penyelesaian cabaran pengangkutan harian pelajar. Prototaip ini memaparkan penjejakan GPS bas secara langsung, peta kesesakan laluan, anggaran masa ketibaan (ETA), dan pemberitahuan jadual hasil daripada sesi temu bual bersama komuniti kampus.',
        problemStatement: 'Pelajar sering lewat ke kuliah akibat ketidakpastian jadual bas dan ketiadaan maklumat masa nyata mengenai kapasiti serta lokasi bas di kawasan berbukit kampus IIUM Gombak.',
        solutionAndArchitecture: 'Menjalankan pemetaan perjalanan pengguna (user journey mapping) dan kaji selidik pelajar untuk membina persona pengguna utama. Menghasilkan prototaip interaktif berketepatan tinggi dalam Figma dengan mikro-interaksi, mod gelap/terang, dan tipografi mesra kebolehcapaian mengikut piawaian WCAG 2.1.',
        keyFeatures: [
          'Peta lokasi bas masa nyata dengan kiraan detik ETA bagi setiap perhentian Mahallah (kolej kediaman)',
          'Penunjuk status laluan yang memaparkan amaran kesesakan trafik atau kelewatan pusingan bas',
          'Meter kapasiti muatan bas (Kosong, Sederhana, Penuh) untuk membantu perancangan perjalanan',
          'Pemberitahuan peringatan kustom sebelum waktu puncak kuliah bermula'
        ],
        techStack: ['Figma', 'Sistem Reka Bentuk UI/UX', 'Penyelidikan Pengguna', 'Pemikiran Reka Bentuk (Design Thinking)', 'Rangka Wayar (Wireframing)'],
        role: 'Ketua Penyelidik UI/UX & Pereka Produk',
        githubUrl: 'https://github.com/placeholder/iium-bus-tracker-design',
        liveDemoUrl: 'https://www.figma.com/proto/placeholder-iium-bus-tracker',
        deliverables: ['Persona Pengguna & Peta Empati', 'Rangka Wayar & Seni Bina Maklumat', 'Prototaip Figma Interaktif Berketepatan Tinggi', 'Sistem Reka Bentuk & Komponen UI'],
        imagePlaceholderText: 'Penjejak Bas IIUM — Antara Muka Aplikasi Mudah Alih Figma',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Kepimpinan & Pengiktirafan',
    title: 'Anugerah & Pencapaian',
    subtitle: 'Membuktikan kecemerlangan akademik, inovasi rentas disiplin, dan kepimpinan sukan kompetitif.',
    academicTab: 'Pencapaian Akademik',
    innovationTab: 'Simposium & Inovasi',
    sportsTab: 'Kepimpinan Sukan & Memanah',
    items: [
      {
        id: 'deans-list',
        title: 'Penerima Anugerah Senarai Dekan (5 Semester)',
        category: 'academic',
        organization: 'Kulliyyah Teknologi Maklumat & Komunikasi (KICT), UIAM',
        period: '2022 – Kini',
        description: 'Mengekalkan prestasi akademik cemerlang sepanjang program Sarjana Muda Teknologi Maklumat dengan purata nilai gred kumulatif (PNGK) 3.54.',
        highlightBadge: 'Penerima Anugerah Dekan 5 Kali',
        bullets: [
          'Diberi pengiktirafan kecemerlangan akademik merentasi lima semester pengajian berturut-turut.',
          'Konsisten meraih gred cemerlang dalam kursus teras kejuruteraan perisian, pengurusan data, dan keselamatan siber.',
          'Menjadi ketua kumpulan belajar rakan sebaya bagi subjek Jaminan & Keselamatan Maklumat.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Anugerah Emas & Projek Paling Bersepadu (Most Integrated Project)',
        category: 'innovation',
        organization: 'Simposium University In Action (UIA) Ke-7',
        period: 'Edisi Simposium Ke-7',
        description: 'Dianugerahkan Anugerah Emas berprestij dan gelaran Projek Paling Bersepadu untuk projek perdana "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Anugerah Emas & Projek Bersepadu Terbaik',
        bullets: [
          'Mereka bentuk dan membentangkan model pertanian bandar mampan rentas disiplin yang menggabungkan pemantauan sensor IoT bersama sistem akuaponik.',
          'Diiktiraf oleh panel juri akademik atas integrasi luar biasa antara teknologi penderiaan, kelestarian alam sekitar, dan kebolehlaksanaan ekonomi.',
          'Merangka kertas cadangan teknikal dan memimpin koordinasi pasukan pelbagai fungsi.'
        ]
      },
      {
        id: 'archery-captain',
        title: 'Kapten — Pasukan Memanah IIUM Mustang',
        category: 'sports',
        organization: 'Pusat Pembangunan Sukan UIAM / Pasukan Memanah IIUM Mustang',
        period: '2024 – 2025',
        description: 'Memimpin skuad memanah utama universiti dalam kejohanan kompetitif peringkat kebangsaan dan antarabangsa serta mengendalikan jadual latihan atlet.',
        highlightBadge: 'Kapten Pasukan & Pemenang Podium',
        bullets: [
          'Pemenang Tempat Ke-3 / 2nd Runner-Up (Kategori Antarabangsa) — SAAC Archery Championship 2025.',
          'Pemenang Tempat Ke-3 / 2nd Runner-Up (Kategori Kebangsaan) — UNITEN SULI Open Archery Tournament.',
          'Meraih beberapa kedudukan podium dan pusingan kelayakan dalam Kejohanan Memanah Varsiti Peringkat Kebangsaan (litar MASUM / SUKIPT).',
          'Menguruskan disiplin atlet, logistik penyelenggaraan peralatan memanah, dan strategi kejohanan.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Hubungan & Pertanyaan',
    title: 'Hubungi Saya',
    subtitle: 'Mencari Jurutera Keperluan, Penganalisis Perniagaan, atau Pembangun Perisian Full-Stack yang berdedikasi? Mari berbincang bagaimana saya boleh menyumbang kepada pasukan anda.',
    directReachout: 'Saluran Langsung',
    emailLabel: 'Alamat Emel',
    linkedinLabel: 'Profil LinkedIn',
    formTitle: 'Hantar Mesej',
    namePlaceholder: 'Nama Penuh Anda / Organisasi',
    emailPlaceholder: 'emel.anda@contoh.com',
    subjectPlaceholder: 'Peluang Kerjaya / Kolaborasi Projek / Pertanyaan',
    messagePlaceholder: 'Tulis mesej atau pertanyaan anda di sini...',
    sendButton: 'Hantar Mesej Melalui Emel',
    successMessage: 'Membuka perisian emel lalai anda dengan draf mesej yang lengkap!',
    openInEmailClient: 'Atau klik untuk mengarang mesej terus melalui penyedia emel pilihan anda:'
  },
  footer: {
    rights: 'Hak cipta terpelihara.',
    designedWith: 'Dibina dengan Next.js 14, React & Tailwind CSS. Dihoskan di Vercel.',
    backToTop: 'Kembali ke Atas',
    placeholdersNote: 'Prototaip portfolio dibina khas untuk Muhammad Johan Irfan. Nota: Pautan repositori dan imej pratonton adalah pemegang tempat (placeholder) demonstrasi yang boleh dikemas kini dengan aset sebenar.'
  }
};

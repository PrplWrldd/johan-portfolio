import { TranslationDictionary } from '../types/portfolio';

export const ms: TranslationDictionary = {
  nav: {
    home: 'Utama',
    about: 'Tentang',
    skills: 'Kemahiran',
    experience: 'Pengalaman',
    projects: 'Projek',
    achievements: 'Pencapaian',
    contact: 'Hubungi',
    resumeButton: 'Resume',
    themeToggleDark: 'Tukar ke Mod Gelap',
    themeToggleLight: 'Tukar ke Mod Cerah',
  },
  hero: {
    greeting: 'Hai, saya',
    name: 'Muhammad Johan Irfan',
    headline: 'Jurutera Keperluan & Pembangun Web Timbunan Penuh',
    hook: 'Membina perkhidmatan digital sektor awam yang selamat, seni bina sistem, dan aplikasi web moden.',
    badgeGovTech: 'Pelatih GovTech Malaysia',
    badgeEducation: 'Tahun Akhir IT @ UIAM',
    badgeCgpa: 'PNGK 3.54 · 5x Senarai Dekan',
    ctaExperience: 'Pengalaman',
    ctaProjects: 'Projek',
    ctaContact: 'Hubungi',
    copiedEmail: 'Emel disalin!',
    copyEmail: 'Salin Emel',
    downloadResume: 'Resume (PDF)',
  },
  about: {
    sectionTag: 'Profil',
    title: 'Tentang Saya',
    subtitle: 'Merapatkan keperluan sistem, jaminan keselamatan siber, dan kejuruteraan perisian.',
    educationTitle: 'Pendidikan',
    degree: 'Sarjana Muda Teknologi Maklumat (Kepujian) · Keselamatan Maklumat',
    institution: 'Universiti Islam Antarabangsa Malaysia (UIAM)',
    expectedGrad: '2022 – 2026',
    cgpaLabel: 'PNGK: 3.54 / 4.00 · 5x Senarai Dekan',
    currentInternshipTitle: 'GovTech Malaysia',
    currentInternshipText: 'Menyediakan BRS, SRS, SDS, dan panduan pengguna bagi portal kerajaan berimpak nasional dan sistem kabinet di bawah Kementerian Digital.',
    interestsTitle: 'Fokus Utama',
    interests: [
      'Kejuruteraan Keperluan (BRS / SRS / SDS)',
      'Keselamatan Sistem & Audit Kerentanan',
      'Analisis Impak Privasi (PIA)',
      'Pembangunan Web (Laravel & React)',
      'Infrastruktur IT & Sokongan Sistem'
    ],
    languagesTitle: 'Bahasa',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Penutur Asli', note: 'Dokumentasi rasmi kerajaan & komunikasi profesional.' },
      { name: 'Bahasa Inggeris', level: 'Fasih & Profesional', note: 'Penulisan teknikal, pembentangan & rundingan teknikal.' }
    ],
    coreValues: [
      { title: 'Spesifikasi Teliti', desc: 'Menterjemah dasar kompleks kepada spesifikasi teknikal yang boleh diuji.' },
      { title: 'Keselamatan Awal', desc: 'Menerapkan kawalan akses dan perlindungan data sejak fasa awal reka bentuk.' },
      { title: 'Penyelarasan Pasukan', desc: 'Merapatkan jurang komunikasi antara pemegang taruh dan jurutera perisian.' }
    ]
  },
  skills: {
    sectionTag: 'Kemahiran',
    title: 'Kemahiran & Teknologi',
    subtitle: 'Alatan teknikal merangkumi analisis sistem, pembangunan web, dan reka bentuk.',
    categories: {
      languages: {
        title: 'Pengaturcaraan',
        description: 'Bahasa teras untuk bahagian belakang, algoritma, dan pangkalan data.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Mahir', highlight: true },
          { name: 'SQL', level: 'Mahir', highlight: true },
          { name: 'JavaScript (ES6+)', level: 'Pertengahan', highlight: true },
          { name: 'HTML5 / CSS3', level: 'Mahir' },
          { name: 'C', level: 'Asas' }
        ]
      },
      frameworks: {
        title: 'Rangka Kerja',
        description: 'Rangka kerja moden untuk aplikasi web yang pantas dan berskala.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Mahir', highlight: true },
          { name: 'Tailwind CSS', level: 'Mahir', highlight: true },
          { name: 'React.js', level: 'Pertengahan' },
          { name: 'Next.js', level: 'Pertengahan' }
        ]
      },
      dataTools: {
        title: 'Pangkalan Data',
        description: 'Pangkalan data hubungan, BI, dan analisis data.',
        iconName: 'Database',
        skills: [
          { name: 'MySQL', level: 'Mahir', highlight: true },
          { name: 'Power BI', level: 'Papan Pemuka' },
          { name: 'Tableau', level: 'Analitis' },
          { name: 'Azure Data Studio', level: 'Pertanyaan' },
          { name: 'Microsoft Excel', level: 'Lanjutan' }
        ]
      },
      documentation: {
        title: 'Keperluan & BA',
        description: 'Spesifikasi sektor awam dan artifak agile.',
        iconName: 'FileText',
        skills: [
          { name: 'Spesifikasi SRS', level: 'Piawaian GovTech', highlight: true },
          { name: 'Reka Bentuk SDS', level: 'Seni Bina', highlight: true },
          { name: 'Spesifikasi BRS', level: 'Pelbagai Agensi', highlight: true },
          { name: 'Kisah Pengguna & UAT', level: 'Agile / Scrum' },
          { name: 'Manual Pengguna & SOP', level: 'Sektor Awam' }
        ]
      },
      multimedia: {
        title: 'Reka Bentuk & Media',
        description: 'Prototaip UI/UX, aset visual, dan penyuntingan video.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'UI/UX & Sistem Reka Bentuk', highlight: true },
          { name: 'Canva', level: 'Aset Visual' },
          { name: 'Premiere Pro', level: 'Penyuntingan Video' },
          { name: 'Lightroom', level: 'Pemprosesan Foto' },
          { name: 'After Effects', level: 'Grafik Gerakan' }
        ]
      }
    }
  },
  experience: {
    sectionTag: 'Pengalaman',
    title: 'Pengalaman Kerja',
    subtitle: 'Sistem digital dan spesifikasi teknikal bagi agensi kerajaan Malaysia.',
    roleBadge: 'Latihan Industri',
    tenure: 'Mac – September 2026',
    overview: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan di GovTech Malaysia (Kementerian Digital), menggubal spesifikasi teknikal (SRS, SDS, BRS, serta Manual Pengguna) untuk platform awam.',
    deliverablesTitle: 'Sistem Kerajaan Yang Didokumentasikan',
    methodologiesTitle: 'Metodologi Utama',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital',
        role: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan',
        period: 'Mac – September 2026',
        location: 'Putrajaya / Kuala Lumpur',
        type: 'Transformasi Digital Sektor Awam',
        summary: 'Menyediakan spesifikasi teknikal dan manual pengguna bagi 5 inisiatif sistem digital kerajaan peringkat nasional.',
        projects: [
          {
            name: 'Portal Sekolahku (KPM)',
            tag: 'Kementerian Pendidikan Malaysia',
            description: 'Menyediakan SRS, SDS, dan manual pengguna dwibahasa untuk portal sekolah kebangsaan.',
            deliverables: ['Dokumentasi SRS & SDS', 'Manual Panduan Pengguna', 'Matriks Kebenaran Peranan']
          },
          {
            name: 'Hansard Parlimen',
            tag: 'Parlimen Malaysia',
            description: 'Menggubal spesifikasi teknikal dan manual pengguna untuk sistem rakaman verbatim Parlimen.',
            deliverables: ['Pemodelan Aliran Transkrip', 'Spesifikasi SRS & SDS', 'Manual Operasi Pegawai']
          },
          {
            name: 'GovSuiteDMS',
            tag: 'Pengurusan Dokumen Kabinet',
            description: 'Mengetuai sesi penemuan keperluan dan merangka SRS/SDS untuk Sistem Pengurusan Dokumen Kabinet.',
            deliverables: ['Sesi Temu Bual Keperluan', 'SRS Kawalan Kerahsiaan', 'SDS Seni Bina & Skema']
          },
          {
            name: 'GovSuiteCMS',
            tag: 'CMS Berpusat Pelbagai Agensi',
            description: 'Merangka Spesifikasi Keperluan Perniagaan (BRS) bagi sistem CMS berpusat pelbagai agensi.',
            deliverables: ['Pengumpulan Keperluan Agensi', 'BRS Sistem Berpusat', 'Matriks Aliran Kelulusan']
          },
          {
            name: 'RDMKD',
            tag: 'Repositori Kementerian Digital',
            description: 'Merangka dokumen spesifikasi teras dan panduan pengguna bagi repositori dalaman Kementerian Digital.',
            deliverables: ['Penulisan SRS & SDS', 'Panduan Pengguna & SOP Masalah']
          }
        ],
        skillsAcquired: [
          'Pengumpulan Keperluan',
          'Penulisan BRS / SRS / SDS',
          'Pemodelan Proses',
          'Pematuhan Keselamatan',
          'UAT & Manual Pengguna'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Projek',
    title: 'Projek Pilihan',
    subtitle: 'Aplikasi web timbunan penuh, grafik 3D, dan prototaip UI/UX.',
    viewDetails: 'Lihat Butiran',
    viewDetailsAria: 'Lihat butiran untuk',
    githubButton: 'GitHub',
    prototypeButton: 'Demo Langsung',
    placeholderNotice: 'Pautan demo dan pratonton sedia untuk ditukar aset.',
    modalClose: 'Tutup',
    modalOverview: 'Gambaran Keseluruhan',
    modalProblem: 'Pernyataan Masalah',
    modalSolution: 'Penyelesaian & Seni Bina',
    modalFeatures: 'Keupayaan Utama',
    modalTech: 'Teknologi Digunakan',
    modalDeliverables: 'Artifak & Hasil',
    filterAll: 'Semua Projek',
    items: [
      {
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Pengurusan Perkuburan & Carian Plot GPS',
        category: 'Aplikasi Web Full-Stack',
        summary: 'Platform web untuk Masjid Al-Hidayah dengan navigasi plot GPS dan pengurusan rekod kubur.',
        detailedOverview: 'Memodenkan penyimpanan rekod kubur dengan carian GPS interaktif untuk orang awam dan portal pentadbiran selamat bagi jawatankuasa masjid.',
        problemStatement: 'Buku log fizikal menyukarkan pencarian lokasi kubur dan merumitkan peruntukan plot baharu.',
        solutionAndArchitecture: 'Dibina menggunakan Laravel dan MySQL, menyepadukan Google Maps API untuk koordinat GPS dan kawalan akses peranan.',
        keyFeatures: [
          'Peta GPS interaktif dengan carian plot tepat',
          'Arkib digital carian pantas mengikut nama atau tarikh',
          'Portal pentadbir berasaskan peranan untuk status plot',
          'Antara muka responsif mudah alih untuk pelawat di tapak'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Pembangun Web Utama',
        githubUrl: 'https://github.com/placeholder/maqam-cemetery-system',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/maqam',
        deliverables: ['Skema Pangkalan Data & ERD', 'Modul Integrasi Google Maps', 'Modul Pentadbir & Auth', 'Kes Ujian UAT'],
        imagePlaceholderText: 'MAQAM — Pengurusan Perkuburan & Carian Plot GPS',
        accentColor: '#059669'
      },
      {
        id: 'restaurant-pos',
        title: 'Restaurant POS System',
        subtitle: 'Sistem POS & Penjejakan Pesanan Dapur',
        category: 'Aplikasi Web Full-Stack',
        summary: 'Sistem POS web pantas menggunakan Laravel dan AJAX untuk pesanan langsung dan status dapur.',
        detailedOverview: 'Memperkemas pesanan meja, bil, dan penghantaran pesanan ke dapur tanpa muat semula halaman.',
        problemStatement: 'Pesanan kertas menyebabkan kesesakan komunikasi antara juruwang dan bahagian dapur.',
        solutionAndArchitecture: 'Seni bina Laravel MVC dengan pesanan tak segerak (AJAX) dan transaksi pangkalan data MySQL yang pantas.',
        keyFeatures: [
          'Pengurusan menu dengan penapisan kategori',
          'Pesanan langsung AJAX dengan pengiraan jumlah & cukai serta-merta',
          'Skrin dapur dengan penjejakan status siap/menunggu',
          'Penjanaan resit automatik dan laporan jualan harian'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript (AJAX)', 'CSS3', 'Blade Templating'],
        role: 'Pembangun Web & Reka Bentuk',
        githubUrl: 'https://github.com/placeholder/restaurant-pos-laravel',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/pos-system',
        deliverables: ['Seni Bina Pengawal MVC & Laluan', 'Enjin Pesanan Langsung AJAX', 'Skema & Transaksi MySQL', 'Papan Pemuka Tiket Dapur'],
        imagePlaceholderText: 'Restaurant POS — Papan Pemuka Juruwang & Dapur',
        accentColor: '#0284C7'
      },
      {
        id: 'networth-3d',
        title: 'Profile & Net Worth 3D Animation',
        subtitle: 'Visualisasi Data Interaktif Three.js',
        category: 'Grafik 3D & Web',
        summary: 'Papan pemuka 3D interaktif yang menukar data Google Sheets kepada susun atur Sfera, Heliks, dan Jadual.',
        detailedOverview: 'Memaparkan data CSV kewangan/demografi langsung ke dalam struktur zarah dan kad 3D menggunakan Three.js dan Google OAuth.',
        problemStatement: 'Jadual 2D konvensional kurang menarik untuk visualisasi data pelbagai atribut.',
        solutionAndArchitecture: 'Transformasi 3D Three.js (Berkala, Sfera, Heliks, Grid) dengan OrbitControls dan pengesahan Google Identity Services.',
        keyFeatures: [
          'Kawalan kamera OrbitControls dengan inersia lancar',
          '4 susun atur 3D: Jadual Berkala, Sfera, Heliks Ganda, Grid',
          'Penyegerakan data langsung dari Google Sheets',
          'Pengesahan profil selamat Google Identity Services'
        ],
        techStack: ['Three.js', 'JavaScript (ES6+)', 'HTML5 Canvas', 'Tailwind CSS', 'Google Auth', 'Google Sheets API'],
        role: 'Pembangun Grafik 3D & Frontend',
        githubUrl: 'https://github.com/placeholder/profile-networth-3d-threejs',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/3d-networth',
        deliverables: ['Enjin Adegan & Kamera Three.js', 'Algoritma Koordinat 3D', 'Integrasi Google OAuth', 'Penghurai CSV Google Sheets'],
        imagePlaceholderText: 'Visualizer 3D Three.js — Susun Atur Zarah Sfera & Heliks',
        accentColor: '#6366F1'
      },
      {
        id: 'iium-bus-tracker',
        title: 'IIUM Campus Bus Tracker',
        subtitle: 'Prototaip UI/UX Mobiliti Kampus & Bas',
        category: 'UI/UX & Prototaip',
        summary: 'Prototaip UI/UX Figma fideliti tinggi bagi penjejakan bas kampus waktu nyata di UIAM Gombak.',
        detailedOverview: 'Prototaip aplikasi mudah alih menampilkan peta GPS bas waktu nyata, status laluan, dan anggaran masa ketibaan (ETA).',
        problemStatement: 'Jadual bas yang tidak menentu menyukarkan pelajar merancang perjalanan ke kuliah.',
        solutionAndArchitecture: 'Penyelidikan pengguna dan tinjauan pelajar yang diterjemahkan ke dalam sistem reka bentuk Figma interaktif yang mematuhi piawaian kebolehcapaian.',
        keyFeatures: [
          'Peta lokasi bas langsung dengan unduran masa ETA setiap hentian',
          'Penunjuk status laluan dan amaran kelewatan',
          'Meter kapasiti muatan bas (Kosong, Sederhana, Penuh)',
          'Peringatan waktu pelepasan sebelum waktu puncak kelas'
        ],
        techStack: ['Figma', 'Sistem Reka Bentuk UI/UX', 'Penyelidikan Pengguna', 'Design Thinking', 'Wireframing'],
        role: 'Pereka Produk & Penyelidik UI/UX',
        githubUrl: 'https://github.com/placeholder/iium-bus-tracker-design',
        liveDemoUrl: 'https://www.figma.com/proto/placeholder-iium-bus-tracker',
        deliverables: ['Persona Pengguna & Peta Empati', 'Wireframe & Seni Bina Maklumat', 'Prototaip Interaktif Figma', 'Perpustakaan Sistem Reka Bentuk'],
        imagePlaceholderText: 'IIUM Bus Tracker — Paparan Aplikasi Mudah Alih Figma',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Pencapaian',
    title: 'Pencapaian & Kepimpinan',
    subtitle: 'Kecemerlangan akademik, anugerah simposium, dan kepimpinan sukan memanah.',
    academicTab: 'Akademik',
    innovationTab: 'Simposium',
    sportsTab: 'Kepimpinan Sukan',
    items: [
      {
        id: 'deans-list',
        title: "Anugerah Dekan (5 Semester)",
        category: 'academic',
        organization: 'KICT, UIAM',
        period: '2022 – Kini',
        description: 'Mengekalkan prestasi akademik cemerlang sepanjang pengajian BIT dengan PNGK kumulatif 3.54.',
        highlightBadge: '5x Senarai Dekan',
        bullets: [
          'Gred cemerlang dalam kursus kejuruteraan perisian, pangkalan data, dan keselamatan siber.',
          'Mengetuai kumpulan belajar bagi subjek Jaminan & Keselamatan Maklumat.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Anugerah Emas & Projek Paling Bersepadu',
        category: 'innovation',
        organization: 'Simposium UIA Ke-7',
        period: 'Edisi VII',
        description: 'Meraih Anugerah Emas dan Projek Paling Bersepadu untuk projek "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Anugerah Emas',
        bullets: [
          'Membina model pertanian bandar berasaskan pemantauan IoT, teknologi alam sekitar, dan ekonomi.',
          'Menulis kertas cadangan teknikal dan memimpin koordinasi pasukan pelbagai disiplin.'
        ]
      },
      {
        id: 'archery-captain',
        title: 'Kapten — IIUM Mustang Archery',
        category: 'sports',
        organization: 'Pusat Pembangunan Sukan UIAM',
        period: '2024 – 2025',
        description: 'Memimpin skuad memanah universiti dalam kejohanan kebangsaan dan antarabangsa.',
        highlightBadge: 'Kapten Universiti & Pemenang Podium',
        bullets: [
          'Tempat Ketiga (Kategori Antarabangsa) — Kejohanan Memanah SAAC 2025.',
          'Tempat Ketiga (Kategori Kebangsaan) — Kejohanan Memanah Terbuka UNITEN SULI.',
          'Mengurus latihan atlet, logistik peralatan, dan strategi perlawanan.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Hubungi',
    title: 'Hubungi Saya',
    subtitle: 'Sedia untuk peluang kerjaya, kerjasama teknikal, dan sebarang pertanyaan.',
    directReachout: 'Saluran Langsung',
    emailLabel: 'Alamat Emel',
    linkedinLabel: 'Profil LinkedIn',
    formTitle: 'Hantar Mesej',
    namePlaceholder: 'Nama / Organisasi Anda',
    emailPlaceholder: 'emel.anda@contoh.com',
    subjectPlaceholder: 'Peluang Kerjaya / Pertanyaan',
    messagePlaceholder: 'Tulis mesej anda di sini...',
    sendButton: 'Hantar Mesej',
    successMessage: 'Membuka aplikasi emel anda bersama draf mesej!',
    openInEmailClient: 'Atau hantar terus melalui aplikasi emel:'
  },
  footer: {
    rights: 'Hak cipta terpelihara.',
    designedWith: 'Dibina dengan Next.js, React & Tailwind CSS.',
    backToTop: 'Atas',
    placeholdersNote: 'Portfolio untuk Muhammad Johan Irfan · Sedia untuk penukaran aset.'
  }
};

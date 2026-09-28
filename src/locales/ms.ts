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
    themeToggleSystem: 'Selaras dengan Tema Sistem',
  },
  hero: {
    greeting: 'Hai, saya',
    name: 'Muhammad Johan Irfan',
    headline: 'Jurutera Keperluan & Pembangun Web Timbunan Penuh',
    hook: 'Membina perkhidmatan digital sektor awam yang selamat, seni bina sistem, dan aplikasi web moden.',
    badgeGovTech: 'Pelatih GovTech Malaysia',
    badgeEducation: 'Tahun Akhir IT @ UIAM',
    badgeCgpa: 'PNGK 3.57 · 5x Senarai Dekan',
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
    subtitle: 'Merapatkan keperluan sistem, jaminan keselamatan siber, dan kejuruteraan perisian moden.',
    educationTitle: 'Pendidikan',
    degree: 'Sarjana Muda Teknologi Maklumat (Kepujian) · Pengkhususan: Keselamatan dan Jaminan Maklumat',
    institution: 'Universiti Islam Antarabangsa Malaysia (UIAM), Gombak',
    expectedGrad: 'Okt 2022 – Dis 2026',
    cgpaLabel: 'PNGK: 3.57 / 4.00 · 5x Senarai Dekan',
    currentInternshipTitle: 'GovTech Malaysia (Kementerian Digital)',
    currentInternshipRole: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan',
    currentInternshipText: 'Graduan Sarjana Muda Teknologi Maklumat di UIAM dengan pengkhususan dalam Keselamatan dan Jaminan Maklumat, kini berkhidmat dalam latihan industri selama 6 bulan (Mac 2026 – September 2026) sebagai Pelatih Jurutera Keperluan / Penganalisis Perniagaan di GovTech Malaysia di bawah Kementerian Digital, di mana saya mengumpul keperluan serta menyediakan dokumentasi BRS, SRS, SDS, dan manual pengguna bagi sistem digital sektor awam. Mempunyai kemahiran kukuh dalam Pembangunan Web. Berpengalaman dalam projek akademik membabitkan keselamatan sistem, analisis impak privasi, dan isu etika pengkomputeran, serta bermotivasi mempelajari ancaman keselamatan terkini bagi membina teknologi yang selamat dan boleh dipercayai.',
    interestsTitle: 'Fokus Utama',
    interests: [
      'Kejuruteraan Keperluan (BRS / SRS / SDS & Manual Pengguna)',
      'Keselamatan Sistem & Audit Kerentanan',
      'Analisis Impak Privasi (PIA) & Pengkomputeran Beretika',
      'Pembangunan Web Timbunan Penuh (Laravel, Next.js, Node.js & React)',
      'Perancangan UAT, Resolusi Kecacatan & Bengkel ToT'
    ],
    languagesTitle: 'Bahasa',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Penutur Asli', note: 'Penguasaan asli dalam dokumentasi rasmi kerajaan & komunikasi pemegang taruh.' },
      { name: 'Bahasa Inggeris', level: 'Pertuturan / Perbualan', note: 'Penguasaan perbualan bagi dokumentasi teknikal, pembentangan & perbincangan.' }
    ],
    coreValues: [
      { title: 'Spesifikasi Teliti', desc: 'Menterjemah dasar kompleks kepada spesifikasi teknikal berketepatan tinggi (BRS, SRS, SDS).' },
      { title: 'Keselamatan Awal', desc: 'Menerapkan kawalan akses, integriti data, dan perlindungan privasi sejak peringkat awal seni bina.' },
      { title: 'Penyelarasan Pasukan', desc: 'Merapatkan jurang komunikasi antara pasukan perkhidmatan awam, ketua agensi, dan jurutera perisian.' }
    ]
  },
  skills: {
    sectionTag: 'Kemahiran',
    title: 'Kemahiran Teknikal',
    subtitle: 'Alatan teknikal merangkumi bahasa pengaturcaraan, rangka kerja, alatan data, dan kejuruteraan keperluan.',
    categories: {
      languages: {
        title: 'Bahasa Pengaturcaraan',
        description: 'Bahasa teras untuk bahagian belakang, aplikasi web, dan pangkalan data.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Mahir', highlight: true },
          { name: 'TypeScript', level: 'Pertengahan', highlight: true },
          { name: 'JavaScript', level: 'Mahir', highlight: true },
          { name: 'HTML', level: 'Mahir' },
          { name: 'SQL', level: 'Mahir', highlight: true }
        ]
      },
      frameworks: {
        title: 'Rangka Kerja & Pustaka',
        description: 'Rangka kerja moden untuk aplikasi web pantas, berskala, dan antaramuka.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Mahir', highlight: true },
          { name: 'Tailwind CSS', level: 'Mahir', highlight: true },
          { name: 'Node.js', level: 'Mahir', highlight: true },
          { name: 'Next.js', level: 'Pertengahan', highlight: true },
          { name: 'React', level: 'Pertengahan', highlight: true }
        ]
      },
      dataTools: {
        title: 'Data & Alatan',
        description: 'Pangkalan data hubungan, NoSQL, kecerdasan perniagaan, dan alatan produktiviti.',
        iconName: 'Database',
        skills: [
          { name: 'MongoDB', level: 'Mahir', highlight: true },
          { name: 'MySQL', level: 'Mahir', highlight: true },
          { name: 'Google Antigravity', level: 'Lanjutan', highlight: true },
          { name: 'Power BI', level: 'Papan Pemuka' },
          { name: 'Tableau', level: 'Analitis' },
          { name: 'Azure Data Studio', level: 'Pertanyaan' },
          { name: 'Microsoft Excel', level: 'Lanjutan' }
        ]
      },
      documentation: {
        title: 'Keperluan & Pengurusan',
        description: 'Pengumpulan keperluan, perancangan UAT, dan artifak sektor awam agile.',
        iconName: 'FileText',
        skills: [
          { name: 'Pengumpulan Keperluan', level: 'Teras', highlight: true },
          { name: 'Dokumentasi BRS, SRS & SDS', level: 'Piawaian GovTech', highlight: true },
          { name: 'UAT & Perancangan UAT', level: 'Menyeluruh', highlight: true },
          { name: 'Bengkel TOT', level: 'Amali', highlight: true },
          { name: 'Perancangan & Pengurusan Projek', level: 'Pelaksanaan', highlight: true },
          { name: 'Manual Pengguna Sistem', level: 'Diterbitkan' }
        ]
      },
      multimedia: {
        title: 'Reka Bentuk & Sistem Reka Bentuk',
        description: 'Prototaip UI/UX, sistem reka bentuk (MYDS), dan alatan kreatif.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'Aset UI & MYDS', highlight: true },
          { name: 'Kebolehcapaian WCAG', level: 'Pematuhan', highlight: true },
          { name: 'Canva', level: 'Aset Visual' },
          { name: 'Premiere Pro', level: 'Penerbitan Video' },
          { name: 'Lightroom', level: 'Pemprosesan Foto' },
          { name: 'After Effects', level: 'Grafik Gerakan' }
        ]
      }
    }
  },
  experience: {
    sectionTag: 'Pengalaman',
    title: 'Pengalaman Profesional',
    subtitle: 'Sistem digital dan spesifikasi teknikal bagi agensi kerajaan Malaysia.',
    roleBadge: 'Latihan Industri (Selesai)',
    tenure: 'Mac 2026 – September 2026',
    overview: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan di GovTech Malaysia (Kementerian Digital), mengumpul keperluan serta menggubal BRS, SRS, SDS, dan manual pengguna komprehensif bagi sistem digital sektor awam.',
    deliverablesTitle: 'Sistem Digital Sektor Awam Yang Didokumentasikan',
    methodologiesTitle: 'Tanggungjawab Teras & Metodologi',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital',
        role: 'Pelatih Jurutera Keperluan / Penganalisis Perniagaan',
        period: 'Mac 2026 – September 2026',
        location: 'Putrajaya / Kuala Lumpur',
        type: 'Sistem Digital Sektor Awam',
        summary: 'Terlibat bersama pemegang taruh merentasi projek sektor awam untuk mencungkil, menganalisis, dan mendokumentasikan keperluan perniagaan dan teknikal bagi dokumen SRS, SDS, dan BRS, merangka strategi ujian UAT, mengendalikan sesi UAT menyeluruh, serta mengarang Manual Pengguna Sistem.',
        projects: [
          {
            name: 'Hansard Parlimen',
            tag: 'Parlimen Malaysia',
            description: 'Aplikasi web dibangunkan untuk memodenkan pencarian dan penemuan rekod parlimen Malaysia (Hansard). Sebelum ini diterbitkan sebagai PDF statik, sistem ini mentransformasikan dokumen tersebut menjadi arkib digital boleh cari dan boleh dibaca mesin bagi meningkatkan ketelusan awam, kebertanggungjawaban, dan kebolehcapaian.',
            deliverables: [
              'Seni bina arkib digital boleh dibaca mesin',
              'Aliran penemuan dokumen Hansard boleh cari',
              'Spesifikasi teknikal SRS & SDS',
              'Garis panduan operasi & manual pengguna pegawai'
            ]
          },
          {
            name: 'Portal Sekolahku',
            tag: 'Kementerian Pendidikan Malaysia',
            description: 'Inisiatif yang menggantikan laman web sekolah pihak ketiga yang berpecah-belah dengan ekosistem web bersatu dan berstandard untuk semua sekolah awam seluruh negara. Melalui CMS berpusat yang dihubungkan dengan pangkalan data nasional, pentadbir sekolah boleh mengurus dengan mudah, memberikan ibu bapa dan orang awam akses yang boleh dipercayai kepada maklumat dan pengumuman rasmi sekolah.',
            deliverables: [
              'Seni bina ekosistem web sekolah awam bersatu',
              'CMS berpusat dihubungkan dengan pangkalan data nasional',
              'Dokumentasi SRS, SDS & manual panduan dwibahasa',
              'Matriks kebenaran peranan & kelulusan pengumuman'
            ]
          },
          {
            name: 'RDMKD',
            tag: 'Kementerian Digital Malaysia',
            description: 'Berfungsi sebagai arkib digital dan pangkalan pengetahuan berstruktur. Ia mengkategorikan dokumen Kementerian, set data, dan koleksi dalaman di satu tempat bagi memastikan maklumat terpelihara dengan baik, berstandard, dan mudah dicari oleh pemegang taruh dalaman.',
            deliverables: [
              'Arkib digital berstruktur & repositori pengetahuan',
              'Skema pengkategorian dokumen & set data Kementerian',
              'Spesifikasi teknikal SRS & SDS',
              'Panduan pengguna pemegang taruh dalaman & SOP masalah'
            ]
          },
          {
            name: 'GovSuiteDMS',
            tag: 'Bahagian Kabinet Malaysia',
            description: 'Platform berpusat yang direka untuk mendigitalkan, mengurus, menghala, dan mengarkibkan rekod rasmi kerajaan dan kabinet secara selamat merentasi kementerian dan agensi. Sistem ini bertujuan memperkemas pentadbiran antara agensi, meningkatkan keselamatan dokumen dan kebolehauditan, serta menyokong aliran kerja perkhidmatan awam tanpa kertas.',
            deliverables: [
              'Aliran kerja kelulusan & penghalaan antara agensi tanpa kertas',
              'SRS kawalan keselamatan dokumen berdarjah rahsia',
              'SDS pengurusan dokumen keselamatan tinggi',
              'Protokol jejak audit & verifikasi pematuhan'
            ]
          },
          {
            name: 'MYDS',
            tag: 'Sistem Reka Bentuk Kerajaan (GovTech)',
            description: 'Menyediakan pereka dan pembangun dengan garis panduan reka bentuk bersepadu, aset Figma, dan pustaka komponen UI boleh diguna semula. Matlamatnya adalah mempercepatkan pembangunan bahagian hadapan, memastikan kebolehcapaian web (pematuhan WCAG), dan memberikan pengalaman pengguna yang konsisten, moden, dan dipercayai merentasi semua platform digital kerajaan.',
            deliverables: [
              'Garis panduan reka bentuk bersatu & token reka bentuk',
              'Pustaka aset Figma & spesifikasi komponen UI',
              'Kriteria audit kebolehcapaian & pematuhan WCAG',
              'Dokumentasi pembangun & panduan komponen UI'
            ]
          },
          {
            name: 'GovSuiteCMS',
            tag: 'CMS Pelbagai Agensi Sektor Awam',
            description: 'Platform digital khusus yang direka untuk kerajaan dan agensi sektor awam bagi mengurus, menerbitkan, dan menyeragamkan kandungan web merentasi kementerian.',
            deliverables: [
              'Spesifikasi Keperluan Perniagaan (BRS) pelbagai agensi',
              'Aliran kerja penerbitan kandungan web berstandard',
              'Matriks kebenaran akses agensi berbilang penyewa',
              'Bahan latihan bengkel ToT & manual pengguna'
            ]
          }
        ],
        skillsAcquired: [
          'Pengumpulan Keperluan Pemegang Taruh (BRS, SRS, SDS)',
          'Strategi UAT & Formulasi Kes Ujian Menyeluruh',
          'Pelaksanaan UAT Hujung ke Hujung & Resolusi Kecacatan',
          'Bengkel Latihan Tenaga Pengajar (ToT)',
          'Pemantauan Garis Masa Projek & Penyerahan Hasil Kerja',
          'Penulisan Manual Pengguna Sistem Komprehensif'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Projek',
    title: 'Projek Pilihan',
    subtitle: 'Aplikasi web timbunan penuh, visualisasi data 3D, dan sistem digital moden.',
    viewDetails: 'Lihat Butiran',
    viewDetailsAria: 'Lihat butiran untuk',
    githubButton: 'GitHub',
    prototypeButton: 'Demo Langsung',
    placeholderNotice: 'Pautan repositori dan demo sedia untuk semakan.',
    modalClose: 'Tutup',
    modalOverview: 'Gambaran Keseluruhan',
    modalProblem: 'Pernyataan Masalah',
    modalSolution: 'Penyelesaian & Seni Bina',
    modalFeatures: 'Keupayaan Utama',
    modalTech: 'Timbunan Teknologi',
    modalDeliverables: 'Hasil Kerja',
    filterAll: 'Semua Projek',
    items: [
      {
        id: 'ianseo-pro',
        title: 'Ianseo Pro',
        subtitle: 'Pusat Kejohanan Memanah Moden & Bebas Iklan',
        category: 'Aplikasi Web Timbunan Penuh',
        summary: 'Membangunkan pengikis web berprestasi tinggi dan aplikasi web moden untuk mengekstrak dan memusatkan jadual kejohanan memanah, keputusan langsung, dan kedudukan kelayakan.',
        detailedOverview: 'Mentransformasikan laman kejohanan legasi Ianseo yang berselerak menjadi platform web moden, responsif, dan bebas iklan dengan pengikisan keputusan secara langsung, carta penyingkiran interaktif, penstriman PDF kemas, dan simulasi latihan sasaran.',
        problemStatement: 'Laman kejohanan legasi dipenuhi iklan invasif dan sepanduk penjejakan, mengakibatkan kelajuan muat halaman perlahan pada peranti mudah alih di lapangan serta navigasi carta perlawanan yang sukar dibaca atlet dan jurulatih.',
        solutionAndArchitecture: 'Dibina dengan Node.js, Express 5, dan Cheerio untuk pengikisan HTML sub-saat dan pengecaman memori pantas, digabungkan dengan antaramuka bebas iklan moden yang menampilkan visualisasi carta penyingkiran interaktif, radar langsung, dan eksport data bersih JSON/CSV.',
        keyFeatures: [
          'Membangunkan pengikis web berprestasi tinggi untuk mengekstrak dan memusatkan jadual kejohanan serta keputusan langsung',
          'Merekabentuk antaramuka bahagian hadapan responsif dan bebas iklan dengan HTML dan CSS bagi mengoptimumkan pengalaman digital peserta dan penonton memanah',
          'Carta penyingkiran interaktif dengan penyambung cabang dan pemarkahan perlawanan secara langsung',
          'Kad skor kelayakan dengan penjejakan kiraan 10s/Xs dan sorotan podium',
          'Penjelajah dokumen rasmi dengan penstriman PDF bersih secara langsung dalam aplikasi',
          'Dihoskan di Vercel / Heroku dengan tindak balas sub-saat'
        ],
        techStack: ['Node.js', 'Express 5', 'Cheerio', 'JavaScript', 'HTML5', 'CSS3', 'Python 3', 'FontAwesome', 'Google Fonts', 'Vercel / Heroku'],
        role: 'Pencipta & Arkitek Timbunan Penuh',
        githubUrl: 'https://github.com/lynx4444/ianseo-pro',
        liveDemoUrl: 'https://ianseo-pro.vercel.app',
        deliverables: [
          'Enjin Pengikis Web Berkuasa Cheerio',
          'Titik Akhir API Kejohanan RESTful',
          'Visualizer Carta Penyingkiran & Pokok Perlawanan',
          'Antaramuka Moden Bebas Iklan & Mod Gelap',
          'Utiliti Eksport Data JSON / CSV'
        ],
        imagePlaceholderText: 'Ianseo Pro — Pengikis Kejohanan Langsung & Carta Penyingkiran',
        accentColor: '#F59E0B'
      },
      {
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Pengurusan Qabr & Maqbarah Automatik Muslim',
        category: 'Aplikasi Web Timbunan Penuh',
        summary: 'Sistem pengurusan tanah perkuburan untuk mendigitalkan rekod kubur dan penjejakan bagi Masjid Al-Hidayah, melaksanakan pangkalan data boleh cari dengan pemetaan berasaskan GPS.',
        detailedOverview: 'Memodenkan penyimpanan rekod tanah perkuburan dengan carian plot GPS interaktif bagi pelawat dan pengurusan rekod simati yang selamat bagi pentadbir masjid.',
        problemStatement: 'Rekod fizikal tradisional atas kertas mengakibatkan kelewatan carian, kerosakan rekod, dan menyukarkan peruntukan plot kubur bagi pelawat dan pentadbir.',
        solutionAndArchitecture: 'Dibina menggunakan Laravel dan MySQL, menyepadukan Google Maps API untuk koordinat plot GPS interaktif dan kawalan pentadbiran berasaskan peranan.',
        keyFeatures: [
          'Sistem pengurusan kubur untuk mendigitalkan rekod kubur dan penjejakan bagi Masjid Al-Hidayah',
          'Melaksanakan pangkalan data boleh cari dengan pemetaan berasaskan GPS bagi membantu pengunjung mencari kubur melalui peta interaktif',
          'Portal pentadbir berasaskan peranan bagi peruntukan plot kubur dan kemas kini rekod',
          'Antaramuka mesra mudah alih untuk navigasi di tapak perkuburan'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Pembangun Utama Timbunan Penuh',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Skema Pangkalan Data & ERD Pengurusan Kubur',
          'Integrasi Penentu Plot GPS Google Maps API',
          'Modul Pengesahan & CRUD Pentadbir',
          'Pangkalan Data Rekod Boleh Cari'
        ],
        imagePlaceholderText: 'MAQAM — Pengurusan Kubur & Carian Plot GPS',
        accentColor: '#059669'
      },
      {
        id: 'networth-3d',
        title: 'Profil dan Animasi 3D Nilai Bersih',
        subtitle: 'Visualisasi Data Tiga Dimensi Interaktif Three.js',
        category: 'Grafik 3D & Web',
        summary: 'Menggunakan Three.js untuk memaparkan data dalam susun atur Jadual, Sfera, Heliks, dan Grid yang imersif, menampilkan peralihan gerakan lancar dengan pautan data CSV Google Sheets langsung.',
        detailedOverview: 'Memaparkan data kewangan dan demografi CSV langsung ke dalam struktur zarah dan kad 3D dinamik menggunakan Three.js, Tween.js, dan Google Identity Services OAuth.',
        problemStatement: 'Jadual 2D konvensional kurang menarik perhatian visual dan tidak memberikan kedalaman ruang bagi set data numerik berbilang sifat seperti nilai bersih.',
        solutionAndArchitecture: 'Membina saluran paip pemprosesan untuk mengambil dan menghuraikan data CSV langsung dari Google Sheets, menggunakan logik bersyarat khas untuk mewarnakan elemen secara dinamik mengikut metrik numerik.',
        keyFeatures: [
          'Menggunakan Three.js untuk memaparkan data dalam susun atur Jadual, Sfera, Heliks, dan Grid dengan peralihan gerakan lancar',
          'Membina saluran paip kukuh untuk mengambil dan menghuraikan data CSV langsung dari Google Sheets',
          'Logik bersyarat tersuai untuk mewarnakan elemen secara dinamik berdasarkan metrik numerik seperti Nilai Bersih',
          'Penyepaduan Google Identity Services (OAuth) untuk pengesahan selamat'
        ],
        techStack: ['HTML5', 'Vanilla JavaScript', 'Tailwind CSS', 'Three.js', 'Tween.js', 'Google Identity Services (OAuth)', 'Google Sheets CSV API'],
        role: 'Pembangun Grafik 3D & Bahagian Hadapan',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Enjin Peralihan Ruang Tiga Dimensi Three.js',
          'Saluran Paip Penghurai Data CSV Google Sheets',
          'Sistem Pewarnaan Metrik Bersyarat Dinamik',
          'Penyepaduan Pengesahan Google OAuth'
        ],
        imagePlaceholderText: 'Visualizer 3D Three.js — Susun Atur Zarah Sfera & Heliks',
        accentColor: '#6366F1'
      },
      {
        id: 'hansard-parliament',
        title: 'Hansard Parlimen',
        subtitle: 'Arkib Digital Parlimen Malaysia',
        category: 'Aplikasi Web Timbunan Penuh',
        summary: 'Aplikasi web dibangunkan untuk memodenkan pencarian dan penemuan rekod parlimen Malaysia (Hansard), mentransformasikan PDF statik menjadi arkib digital boleh cari.',
        detailedOverview: 'Mentransformasikan rekod parlimen Malaysia (Hansard) daripada PDF statik kepada arkib digital boleh dibaca mesin dan boleh dicari bagi meningkatkan ketelusan awam, kebertanggungjawaban, dan kebolehcapaian.',
        problemStatement: 'Rekod Hansard parlimen sebelum ini hanya diterbitkan sebagai PDF statik, menyukarkan pencarian kata kunci, rujukan silang ucapan, dan penyelidikan awam.',
        solutionAndArchitecture: 'Membangunkan arkib digital moden dengan pengekstrakan teks, metadata terindeks, dan penapis carian pantas untuk rakyat dan penyelidik parlimen.',
        keyFeatures: [
          'Arkib digital boleh dibaca mesin untuk rekod parlimen',
          'Enjin carian dan penemuan ucapan Hansard parlimen',
          'Meningkatkan ketelusan awam, akauntabiliti, dan kebolehcapaian',
          'Pengkategorian metadata berstruktur mengikut tarikh, pembahas, dan sidang'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Pengindeksan Carian', 'Piawaian GovTech'],
        role: 'Jurutera Keperluan & Penyumbang Frontend',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Sistem Arkib Digital Hansard Boleh Cari',
          'Dokumentasi Spesifikasi Teknikal SRS & SDS',
          'Antaramuka Carian & Penemuan Rekod Awam',
          'Manual Operasi Sistem Pegawai'
        ],
        imagePlaceholderText: 'Hansard Parlimen — Arkib Digital Parlimen Malaysia',
        accentColor: '#8B5CF6'
      },
      {
        id: 'portal-sekolahku',
        title: 'Portal Sekolahku',
        subtitle: 'Kementerian Pendidikan Malaysia',
        category: 'Sistem Sektor Awam',
        summary: 'Inisiatif menggantikan laman sekolah pihak ketiga dengan ekosistem web bersatu dan berstandard untuk semua sekolah awam kebangsaan dihubungkan ke pangkalan data nasional.',
        detailedOverview: 'Melalui CMS berpusat yang dihubungkan dengan pangkalan data nasional, pentadbir sekolah boleh mengurus kandungan dengan mudah, memberikan ibu bapa dan orang awam akses maklumat rasmi sekolah.',
        problemStatement: 'Laman web sekolah pihak ketiga yang berpecah-belah kekurangan penyeragaman reka bentuk, keselamatan berpusat, dan integrasi pangkalan data rasmi Kementerian.',
        solutionAndArchitecture: 'Merangka ekosistem web berbilang penyewa dengan tadbir urus berpusat, identiti visual bersatu, dan penyegerakan pangkalan data pendidikan nasional.',
        keyFeatures: [
          'Ekosistem web bersatu dan berstandard untuk sekolah awam seluruh negara',
          'CMS berpusat dihubungkan terus ke pangkalan data pendidikan kebangsaan',
          'Kemudahan pengurusan sekolah dan penerbitan pengumuman rasmi',
          'Akses orang awam dan ibu bapa kepada maklumat sekolah yang disahkan'
        ],
        techStack: ['CMS Berpusat', 'Seni Bina Multi-Tenant', 'TypeScript', 'Tailwind CSS', 'Integrasi DB Nasional'],
        role: 'Jurutera Keperluan & Penganalisis Sistem',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Spesifikasi Ekosistem Portal Sekolah Berstandard',
          'Seni Bina CMS Berpusat (SRS & SDS)',
          'Manual Pengguna & Panduan Pentadbir Sekolah',
          'Spesifikasi Integrasi Pangkalan Data Nasional'
        ],
        imagePlaceholderText: 'Portal Sekolahku — Ekosistem Web Sekolah Awam Kebangsaan',
        accentColor: '#0EA5E9'
      },
      {
        id: 'myds-system',
        title: 'MYDS',
        subtitle: 'Sistem Reka Bentuk Kerajaan Malaysia',
        category: 'Sistem Reka Bentuk & UI',
        summary: 'Garis panduan reka bentuk bersepadu, aset Figma, dan pustaka komponen UI boleh diguna semula yang memastikan pematuhan WCAG merentasi semua platform digital kerajaan.',
        detailedOverview: 'Menyediakan pereka dan pembangun dengan garis panduan reka bentuk bersepadu, aset Figma, dan pustaka komponen UI boleh diguna semula bagi mempercepatkan pembangunan antaramuka digital kerajaan.',
        problemStatement: 'Corak reka bentuk UI/UX yang tidak konsisten merentasi pelbagai portal agensi kerajaan menimbulkan pengalaman pengguna yang terasing dan tahap kebolehcapaian yang tidak sekata.',
        solutionAndArchitecture: 'Menyeragamkan token reka bentuk, komponen React yang boleh diakses dan mematuhi standard WCAG, serta dokumentasi reka bentuk menyeluruh.',
        keyFeatures: [
          'Garis panduan reka bentuk bersepadu dan ekosistem aset Figma UI',
          'Pustaka komponen UI boleh diguna semula untuk portal sektor awam',
          'Jaminan kebolehcapaian web (pematuhan piawaian WCAG)',
          'Mempercepatkan kitaran pembangunan bahagian hadapan agensi'
        ],
        techStack: ['Figma', 'React', 'Tailwind CSS', 'Kebolehcapaian WCAG', 'Token Reka Bentuk'],
        role: 'Penyumbang BA & Spesifikasi Komponen UI',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Dokumentasi Garis Panduan Reka Bentuk Bersepadu',
          'Spesifikasi Pustaka Komponen UI Boleh Diguna Semula',
          'Kriteria Pematuhan Kebolehcapaian WCAG',
          'Panduan Penerimagunaan & Integrasi Pembangun'
        ],
        imagePlaceholderText: 'MYDS — Sistem Reka Bentuk Kerajaan & Komponen UI Boleh Diguna Semula',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Pencapaian',
    title: 'Anugerah & Pencapaian Ko-Kurikulum',
    subtitle: 'Kecemerlangan akademik, kepimpinan kapten memanah universiti, dan kejuaraan kejohanan kebangsaan.',
    academicTab: 'Akademik',
    innovationTab: 'Simposium',
    sportsTab: 'Kepimpinan Memanah',
    items: [
      {
        id: 'deans-list',
        title: "Anugerah Senarai Dekan (5 Semester)",
        category: 'academic',
        organization: 'Jabatan ICT, UIAM Gombak',
        period: 'Okt 2022 – Dis 2026',
        description: 'Mengekalkan kedudukan akademik cemerlang sepanjang program Sarjana Muda Teknologi Maklumat (Pengkhususan Keselamatan dan Jaminan Maklumat) dengan PNGK kumulatif 3.57.',
        highlightBadge: '5x Senarai Dekan · PNGK 3.57',
        bullets: [
          'Penerima Anugerah Senarai Dekan sebanyak 5 semester berturut-turut.',
          'Gred kepujian tinggi dalam subjek Jaminan Maklumat, Keselamatan Sistem, Kejuruteraan Perisian, dan Pangkalan Data.',
          'Pengkhususan dalam keselamatan sistem, analisis impak privasi, dan pengkomputeran beretika.'
        ]
      },
      {
        id: 'archery-captain',
        title: "Kapten — Mustang Archery UIAM",
        category: 'sports',
        organization: 'Pusat Pembangunan Sukan UIAM',
        period: '2024 – 2025',
        description: 'Berkhidmat sebagai Kapten pasukan memanah universiti Mustang Archery UIAM, memimpin skuad universiti dalam kejohanan berprestij peringkat kebangsaan dan antarabangsa.',
        highlightBadge: 'Kapten Varsiti & Juara Kebangsaan',
        bullets: [
          'Tempat Pertama / Juara (Kebangsaan): Taylor’s Archery Indoor Competition 2026 (Pingat Emas).',
          'Tempat Ketiga / 2nd Runner-up (Antarabangsa): SAAC Archery Championship 2025.',
          'Tempat Ketiga / 2nd Runner-up (Kebangsaan): Kejohanan Memanah Terbuka UNITEN SULI.',
          'Menguruskan disiplin latihan atlet, strategi pertandingan, dan logistik kelengkapan sukan.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Anugerah Emas & Projek Paling Bersepadu',
        category: 'innovation',
        organization: 'Simposium UIA Ke-7',
        period: 'Edisi VII',
        description: 'Dianugerahkan Pingat Emas dan Projek Paling Bersepadu bagi projek "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Anugerah Emas & Projek Bersepadu',
        bullets: [
          'Merekabentuk model pemantauan IoT pertanian bandar yang menggabungkan teknologi alam sekitar dan kelestarian ekonomi.',
          'Mengarang kertas cadangan teknikal dan menyelaras persembahan projek antara disiplin.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Hubungi',
    title: 'Hubungi Saya',
    subtitle: 'Sedia berkhidmat serta-merta untuk pekerjaan sepenuh masa, peranan teknikal, dan kerjasama profesional.',
    directReachout: 'Saluran Terus',
    emailLabel: 'Alamat Emel',
    linkedinLabel: 'Profil LinkedIn',
    phoneLabel: 'Nombor Telefon',
    phoneValue: '+6013-2811976',
    locationLabel: 'Lokasi',
    locationValue: 'Kuala Langat, Selangor, Malaysia',
    availabilityTitle: 'Ketersediaan Pekerjaan',
    availabilityText: 'Sedia untuk pekerjaan sepenuh masa: Serta-merta',
    availabilityBadge: 'Sedia Serta-Merta',
    formTitle: 'Hantar Mesej',
    namePlaceholder: 'Nama Anda / Organisasi',
    emailPlaceholder: 'emel.anda@contoh.com',
    subjectPlaceholder: 'Peluang Pekerjaan / Pertanyaan',
    messagePlaceholder: 'Mesej anda...',
    sendButton: 'Hantar Mesej',
    successMessage: 'Membuka aplikasi emel anda dengan draf mesej yang ditulis!',
    openInEmailClient: 'Atau hantar terus melalui aplikasi emel:',
    referencesTitle: 'Rujukan Profesional',
    referencesSubtitle: 'Rujukan akademik dan industri sedia untuk pengesahan lanjut.',
    references: [
      {
        name: 'Ts. Dr. Hazwani Mohd Mohadis',
        title: 'Profesor Madya / Penolong Profesor, Jabatan ICT',
        organization: 'Universiti Islam Antarabangsa Malaysia (UIAM)',
        email: 'hazwanimohadis@iium.edu.my'
      },
      {
        name: 'Encik Aiman Hakim Bin Zulkarnain',
        title: 'Penganalisis Projek',
        organization: 'Revolabs',
        email: 'aiman.hakim01@gmail.com'
      }
    ]
  },
  footer: {
    rights: 'Hak cipta terpelihara.',
    designedWith: 'Dibina dengan Next.js, React & Tailwind CSS.',
    backToTop: 'Ke Atas',
    placeholdersNote: 'Portfolio Muhammad Johan Irfan bin Khairudin · Sedia untuk pekerjaan sepenuh masa: Serta-merta.'
  }
};

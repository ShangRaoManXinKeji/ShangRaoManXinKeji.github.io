window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-XFP6M5GN4H");

const prefersDark = window.matchMedia("(prefers-color-scheme: light)");

// Full translations object
const translations = {
  en: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Innovation Through Technology",
    "hero.subtitle":
      "Empowering businesses with cutting-edge solutions in AI, cloud computing, and cybersecurity.",
    "hero.cta": "Get Started",
    "services.title": "Our Services",
    "pricing.title": "Pricing Plans",
    "contact.title": "Contact Us",
    "contact.location":
      "Yongfeng Street, Guangfeng, Shangrao City, Jiangxi, China",
    "pricing.basic": "Basic",
    "pricing.professional": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.custom": "Contact for Price",
    "pricing.month": "/month",
    "reviews.title": "Customer Reviews"
  },
  zh: {
    "company.name": "上饶满星科技",
    "company.name.zh": "上饶满星科技",
    "hero.title": "科技创新",
    "hero.subtitle": "通过人工智能、云计算和网络安全赋能企业",
    "hero.cta": "立即开始",
    "services.title": "我们的服务",
    "pricing.title": "价格方案",
    "contact.title": "联系我们",
    "contact.location": "永丰街道广丰上饶市江西中国",
    "pricing.basic": "基础版",
    "pricing.professional": "专业版",
    "pricing.enterprise": "企业版",
    "pricing.custom": "联系获取价格",
    "pricing.month": "/月",
    "reviews.title": "客户评价"
  },
  de: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Innovation durch Technologie",
    "hero.subtitle":
      "Unternehmen mit modernsten Lösungen in den Bereichen KI, Cloud Computing und Cybersicherheit stärken.",
    "hero.cta": "Jetzt Starten",
    "services.title": "Unsere Dienstleistungen",
    "pricing.title": "Preispläne",
    "contact.title": "Kontakt",
    "contact.location":
      "Yongfeng Straße, Guangfeng, Shangrao Stadt, Jiangxi, China",
    "pricing.basic": "Basis",
    "pricing.professional": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.custom": "Preis auf Anfrage",
    "pricing.month": "/Monat",
    "reviews.title": "Kundenbewertungen"
  },
  fr: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "L'Innovation par la Technologie",
    "hero.subtitle":
      "Autonomiser les entreprises avec des solutions de pointe en IA, cloud computing et cybersécurité.",
    "hero.cta": "Commencer",
    "services.title": "Nos Services",
    "pricing.title": "Tarification",
    "contact.title": "Contact",
    "contact.location":
      "Rue Yongfeng, Guangfeng, Ville de Shangrao, Jiangxi, Chine",
    "pricing.basic": "Basique",
    "pricing.professional": "Professionnel",
    "pricing.enterprise": "Entreprise",
    "pricing.custom": "Prix sur Demande",
    "pricing.month": "/mois",
    "reviews.title": "Avis des Clients"
  },
  ru: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Инновации через Технологии",
    "hero.subtitle":
      "Расширение возможностей бизнеса с помощью передовых решений в области ИИ, облачных вычислений и кибербезопасности.",
    "hero.cta": "Начать",
    "services.title": "Наши Услуги",
    "pricing.title": "Тарифы",
    "contact.title": "Контакты",
    "contact.location": "Улица Юнфэн, Гуанфэн, город Шанжао, Цзянси, Китай",
    "pricing.basic": "Базовый",
    "pricing.professional": "Профессиональный",
    "pricing.enterprise": "Корпоративный",
    "pricing.custom": "Цена по Запросу",
    "pricing.month": "/месяц",
    "reviews.title": "Отзывы клиентов"
  },
  ms: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Inovasi Melalui Teknologi",
    "hero.subtitle":
      "Memperkasa perniagaan dengan penyelesaian terkini dalam AI, pengkomputeran awan, dan keselamatan siber.",
    "hero.cta": "Mulakan",
    "services.title": "Perkhidmatan Kami",
    "pricing.title": "Pelan Harga",
    "contact.title": "Hubungi Kami",
    "contact.location":
      "Jalan Yongfeng, Guangfeng, Bandar Shangrao, Jiangxi, China",
    "pricing.basic": "Asas",
    "pricing.professional": "Profesional",
    "pricing.enterprise": "Perusahaan",
    "pricing.custom": "Hubungi untuk Harga",
    "pricing.month": "/bulan",
    "reviews.title": "Ulasan Pelanggan"
  },
  ko: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "기술을 통한 혁신",
    "hero.subtitle": "AI, 클라우드 컴퓨팅 및 사이버 보안에서 최첨단 솔루션으로 비즈니스를 강화합니다.",
    "hero.cta": "시작하기",
    "services.title": "우리의 서비스",
    "pricing.title": "가격 계획",
    "contact.title": "문의하기",
    "contact.location": "중국 장시성 샹라오시 광펑 영펑 거리",
    "pricing.basic": "기본",
    "pricing.professional": "전문가",
    "pricing.enterprise": "기업",
    "pricing.custom": "가격 문의",
    "pricing.month": "/월",
    "reviews.title": "고객 리뷰"
  },
  ja: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "技術によるイノベーション",
    "hero.subtitle": "AI、クラウドコンピューティング、サイバーセキュリティの最先端ソリューションでビジネスを強化します。",
    "hero.cta": "始める",
    "services.title": "私たちのサービス",
    "pricing.title": "料金プラン",
    "contact.title": "お問い合わせ",
    "contact.location": "中国江西省上饶市広豊区永豊街",
    "pricing.basic": "基本",
    "pricing.professional": "プロフェッショナル",
    "pricing.enterprise": "エンタープライズ",
    "pricing.custom": "お問い合わせ",
    "pricing.month": "/月",
    "reviews.title": "顧客レビュー"
  },
  es: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Innovación a través de la Tecnología",
    "hero.subtitle":
      "Empoderando empresas con soluciones avanzadas en IA, computación en la nube y ciberseguridad.",
    "hero.cta": "Comenzar",
    "services.title": "Nuestros Servicios",
    "pricing.title": "Planes de Precios",
    "contact.title": "Contáctenos",
    "contact.location":
      "Calle Yongfeng, Guangfeng, Ciudad de Shangrao, Jiangxi, China",
    "pricing.basic": "Básico",
    "pricing.professional": "Profesional",
    "pricing.enterprise": "Empresarial",
    "pricing.custom": "Contacte para Precio",
    "pricing.month": "/mes",
    "reviews.title": "Reseñas de Clientes"
  },
  nl: {
    "company.name": "Man Xing Enterprise",
    "company.name.zh": "上饶满星科技",
    "hero.title": "Innovatie door Technologie",
    "hero.subtitle":
      "Bedrijven versterken met geavanceerde oplossingen in AI, cloud computing en cybersecurity.",
    "hero.cta": "Aan de slag",
    "services.title": "Onze Diensten",
    "pricing.title": "Prijzen",
    "contact.title": "Neem Contact Op",
    "contact.location":
      "Yongfengstraat, Guangfeng, Shangrao Stad, Jiangxi, China",
    "pricing.basic": "Basis",
    "pricing.professional": "Professioneel",
    "pricing.enterprise": "Onderneming",
    "pricing.custom": "Neem contact op voor de prijs",
    "pricing.month": "/maand",
    "reviews.title": "Klantbeoordelingen"
  }
};

// Services data from your JSON
const services = [
  {
    name: {
      en: "Mobile App Development",
      zh: "移动应用开发"
    },
    description: {
      en: "Cutting-edge mobile applications for iOS and Android platforms",
      zh: "为iOS和Android平台开发尖端移动应用"
    }
  }
  // ... other services
];

// Pricing data from your JSON
const pricing = {
  basic: {
    price: {
      rm: "4,499/mo",
      cny: "6,999/月"
    },
    features: [
      "1TB Cloud Storage",
      "Basic AI Analysis",
      "Standard Firewall",
      "Email Support"
    ]
  }
};

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// Language switcher
const langSelect = document.getElementById("langSelect");

langSelect.addEventListener("change", e => {
  setLanguage(e.target.value);
  localStorage.setItem("lang", e.target.value);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key] || translations["en"][key];
  });

  // Update services and pricing based on language
  updateServices(lang);
  updatePricing(lang);
}

function updateServices(lang) {
  const servicesGrid = document.getElementById("servicesGrid");
  servicesGrid.innerHTML = "";

  const servicesData = [
    {
      name: {
        en: "Mobile App Development",
        zh: "移动应用开发",
        de: "Mobile App Entwicklung",
        fr: "Développement d'applications mobiles",
        ru: "Разработка мобильных приложений",
        ms: "Pembangunan Apl Mudah Alih",
        ko: "모바일 앱 개발",
        ja: "モバイルアプリ開発",
        es: "Desarrollo de aplicaciones móviles",
        nl: "Mobiele app-ontwikkeling"
      },
      description: {
        en: "Cutting-edge mobile applications for iOS and Android platforms",
        zh: "为iOS和Android平台开发尖端移动应用",
        de:
          "Spitzentechnologie für mobile Anwendungen auf iOS- und Android-Plattformen",
        fr:
          "Applications mobiles de pointe pour les plateformes iOS et Android",
        ru: "Передовые мобильные приложения для платформ iOS и Android",
        ms: "Aplikasi mudah alih terkini untuk platform iOS dan Android",
        ko: "iOS 및 Android 플랫폼을 위한 첨단 모바일 애플리케이션",
        ja: "iOSおよびAndroidプラットフォーム向けの最先端モバイルアプリケーション",
        es: "Aplicaciones móviles de vanguardia para plataformas iOS y Android",
        nl: "Geavanceerde mobiele applicaties voor iOS- en Android-platforms"
      }
    },
    {
      name: {
        en: "Website Development",
        zh: "网站开发",
        de: "Webseitenentwicklung",
        fr: "Développement de sites web",
        ru: "Разработка сайтов",
        ms: "Pembangunan Laman Web",
        ko: "웹사이트 개발",
        ja: "ウェブサイト開発",
        es: "Desarrollo de sitios web",
        nl: "Websiteontwikkeling"
      },
      description: {
        en: "Custom responsive and dynamic websites tailored to your needs",
        zh: "根据您的需求定制响应式和动态网站",
        de:
          "Benutzerdefinierte, responsive und dynamische Websites, die auf Ihre Bedürfnisse zugeschnitten sind",
        fr:
          "Sites web personnalisés, réactifs et dynamiques, adaptés à vos besoins",
        ru:
          "Индивидуальные адаптивные и динамичные сайты, настроенные под ваши нужды",
        ms:
          "Laman web responsif dan dinamik yang disesuaikan dengan keperluan anda",
        ko: "귀하의 요구에 맞게 맞춤형 반응형 및 동적 웹사이트",
        ja: "ニーズに合わせたカスタムレスポンシブおよびダイナミックウェブサイト",
        es:
          "Sitios web personalizados, responsivos y dinámicos adaptados a sus necesidades",
        nl:
          "Op maat gemaakte responsieve en dynamische websites die zijn afgestemd op uw behoeften"
      }
    },
    {
      name: {
        en: "System Development",
        zh: "系统开发",
        de: "Systementwicklung",
        fr: "Développement de systèmes",
        ru: "Разработка систем",
        ms: "Pembangunan Sistem",
        ko: "시스템 개발",
        ja: "システム開発",
        es: "Desarrollo de sistemas",
        nl: "Systeemontwikkeling"
      },
      description: {
        en: "Custom software solutions to streamline your business processes",
        zh: "定制软件解决方案，以简化您的业务流程",
        de:
          "Individuelle Softwarelösungen zur Optimierung Ihrer Geschäftsprozesse",
        fr:
          "Solutions logicielles personnalisées pour rationaliser vos processus commerciaux",
        ru:
          "Индивидуальные программные решения для оптимизации ваших бизнес-процессов",
        ms:
          "Penyelesaian perisian tersuai untuk mempermudah proses perniagaan anda",
        ko: "귀하의 비즈니스 프로세스를 간소화하는 맞춤형 소프트웨어 솔루션",
        ja: "ビジネスプロセスを合理化するためのカスタムソフトウェアソリューション",
        es:
          "Soluciones de software personalizadas para agilizar sus procesos comerciales",
        nl:
          "Aangepaste software-oplossingen om uw bedrijfsprocessen te stroomlijnen"
      }
    },
    {
      name: {
        en: "AI & Machine Learning",
        zh: "人工智能与机器学习",
        de: "KI und maschinelles Lernen",
        fr: "IA et apprentissage automatique",
        ru: "ИИ и машинное обучение",
        ms: "AI dan Pembelajaran Mesin",
        ko: "인공지능 및 기계 학습",
        ja: "AIと機械学習",
        es: "IA y aprendizaje automático",
        nl: "AI en machine learning"
      },
      description: {
        en: "Intelligent systems that learn and adapt to your data",
        zh: "开发能够学习和适应您数据的智能系统",
        de:
          "Intelligente Systeme, die aus Ihren Daten lernen und sich anpassen",
        fr: "Systèmes intelligents qui apprennent et s'adaptent à vos données",
        ru:
          "Интеллектуальные системы, которые учат и адаптируются к вашим данным",
        ms: "Sistem pintar yang belajar dan menyesuaikan dengan data anda",
        ko: "데이터에 맞게 학습하고 적응하는 지능형 시스템",
        ja: "データに適応し学習するインテリジェントシステム",
        es: "Sistemas inteligentes que aprenden y se adaptan a tus datos",
        nl: "Intelligente systemen die leren en zich aanpassen aan uw gegevens"
      }
    },
    {
      name: {
        en: "Cybersecurity Solutions",
        zh: "网络安全解决方案",
        de: "Cybersicherheitslösungen",
        fr: "Solutions de cybersécurité",
        ru: "Решения по кибербезопасности",
        ms: "Penyelesaian Keselamatan Siber",
        ko: "사이버 보안 솔루션",
        ja: "サイバーセキュリティソリューション",
        es: "Soluciones de ciberseguridad",
        nl: "Cyberbeveiligingsoplossingen"
      },
      description: {
        en: "Protect your digital assets with our advanced security measures",
        zh: "使用我们的先进安全措施保护您的数字资产",
        de:
          "Schützen Sie Ihre digitalen Assets mit unseren fortschrittlichen Sicherheitsmaßnahmen",
        fr:
          "Protégez vos actifs numériques avec nos mesures de sécurité avancées",
        ru:
          "Защитите свои цифровые активы с помощью наших передовых мер безопасности",
        ms:
          "Lindungi aset digital anda dengan langkah keselamatan canggih kami",
        ko: "당사의 고급 보안 조치를 통해 디지털 자산을 보호하십시오",
        ja: "当社の高度なセキュリティ対策でデジタル資産を保護します",
        es:
          "Proteja sus activos digitales con nuestras medidas de seguridad avanzadas",
        nl:
          "Bescherm uw digitale activa met onze geavanceerde beveiligingsmaatregelen"
      }
    },
    {
      name: {
        en: "Cloud Services",
        zh: "云服务",
        de: "Cloud-Dienste",
        fr: "Services Cloud",
        ru: "Облачные сервисы",
        ms: "Perkhidmatan Awan",
        ko: "클라우드 서비스",
        ja: "クラウドサービス",
        es: "Servicios en la nube",
        nl: "Cloud-diensten"
      },
      description: {
        en: "Scalable cloud solutions for efficient data management",
        zh: "可扩展的云解决方案，实现高效的数据管理",
        de: "Skalierbare Cloud-Lösungen für effizientes Datenmanagement",
        fr: "Solutions cloud évolutives pour une gestion efficace des données",
        ru:
          "Масштабируемые облачные решения для эффективного управления данными",
        ms:
          "Penyelesaian awan yang boleh skala untuk pengurusan data yang cekap",
        ko: "효율적인 데이터 관리를 위한 확장 가능한 클라우드 솔루션",
        ja: "効率的なデータ管理のためのスケーラブルなクラウドソリューション",
        es:
          "Soluciones en la nube escalables para una gestión eficiente de datos",
        nl: "Schaalbare cloud-oplossingen voor efficiënte gegevensbeheer"
      }
    },
    {
      name: {
        en: "Blockchain Development",
        zh: "区块链开发",
        de: "Blockchain-Entwicklung",
        fr: "Développement Blockchain",
        ru: "Разработка блокчейнов",
        ms: "Pembangunan Blockchain",
        ko: "블록체인 개발",
        ja: "ブロックチェーン開発",
        es: "Desarrollo de blockchain",
        nl: "Blockchain-ontwikkeling"
      },
      description: {
        en:
          "Build secure, transparent distributed ledger technology applications",
        zh: "构建安全、透明的分布式账本技术应用",
        de:
          "Erstellen Sie sichere, transparente Anwendungen für verteilte Ledger-Technologien",
        fr:
          "Construisez des applications sécurisées et transparentes pour la technologie des registres distribués",
        ru:
          "Создайте безопасные и прозрачные приложения для распределенных технологий реестров",
        ms:
          "Bina aplikasi teknologi lejar terdistribusi yang selamat dan telus",
        ko: "안전하고 투명한 분산 원장 기술 애플리케이션을 구축하십시오",
        ja: "安全で透明な分散台帳技術アプリケーションを構築",
        es:
          "Cree aplicaciones seguras y transparentes para tecnologías de libro mayor distribuido",
        nl:
          "Bouw veilige, transparante toepassingen voor gedistribueerde grootboeksystemen"
      }
    },
    {
      name: {
        en: "IoT Solutions",
        zh: "物联网解决方案",
        de: "IoT-Lösungen",
        fr: "Solutions IoT",
        ru: "Решения IoT",
        ms: "Penyelesaian IoT",
        ko: "IoT 솔루션",
        ja: "IoTソリューション",
        es: "Soluciones IoT",
        nl: "IoT-oplossingen"
      },
      description: {
        en:
          "Connect and manage smart devices to optimize your business operations",
        zh: "连接和管理智能设备，优化您的业务运营",
        de:
          "Verbinden und Verwalten von Smart Devices zur Optimierung Ihrer Geschäftsprozesse",
        fr:
          "Connectez et gérez des appareils intelligents pour optimiser vos opérations commerciales",
        ru:
          "Подключайте и управляйте умными устройствами для оптимизации бизнес-операций",
        ms:
          "Sambungkan dan urus peranti pintar untuk mengoptimumkan operasi perniagaan anda",
        ko: "스마트 장치를 연결하고 관리하여 비즈니스 운영을 최적화하십시오",
        ja: "スマートデバイスを接続して管理し、ビジネス運営を最適化",
        es:
          "Conecte y gestione dispositivos inteligentes para optimizar las operaciones comerciales",
        nl:
          "Verbind en beheer slimme apparaten om uw bedrijfsvoering te optimaliseren"
      }
    }
  ];

  servicesData.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.style.animation = `fadeInUp 0.8s ${index * 0.1}s forwards`;

    card.innerHTML = `
                    <h3>${service.name[lang] || service.name.en}</h3>
                    <p>${service.description[lang] ||
                      service.description.en}</p>
                    <a href="#contact" class="btn">${translations[lang][
                      "hero.cta"
                    ]}</a>
                `;

    servicesGrid.appendChild(card);
  });
}

function updatePricing(lang) {
  const pricingGrid = document.getElementById("pricingGrid");
  pricingGrid.innerHTML = "";

  const pricingData = {
    landingPage: {
      name: {
        en: "6-Month Landing Page",
        zh: "6个月登陆页",
        de: "6-Monats-Landingpage",
        fr: "Page de destination de 6 mois",
        ru: "6-месячная целевая страница",
        ms: "Halaman Pendaratan 6 Bulan",
        ko: "6개월 랜딩 페이지",
        ja: "6ヶ月ランディングページ",
        es: "Página de destino de 6 meses",
        nl: "6-maanden Landingspagina"
      },
      price: { rm: "75/6mo", cny: "99/半年" },
      features: {
        en: [
          "Basic Landing Page Setup",
          "Customizable Template",
          "Basic SEO",
          "Domain Connection"
        ],
        zh: ["基本着陆页设置", "可自定义模板", "基础SEO", "域名连接"],
        de: [
          "Grundlegende Landingpage-Einrichtung",
          "Anpassbares Template",
          "Basis-SEO",
          "Domain-Verbindung"
        ],
        fr: [
          "Installation de la page de destination de base",
          "Template personnalisable",
          "SEO de base",
          "Connexion de domaine"
        ],
        ru: [
          "Основная настройка целевой страницы",
          "Настраиваемый шаблон",
          "Базовая SEO-оптимизация",
          "Подключение домена"
        ],
        ms: [
          "Penyiapan Halaman Pendaratan Dasar",
          "Template yang Dapat Disesuaikan",
          "SEO Dasar",
          "Sambungan Domain"
        ],
        ko: ["기본 랜딩 페이지 설정", "사용자 정의 가능한 템플릿", "기본 SEO", "도메인 연결"],
        ja: ["基本的なランディングページ設定", "カスタマイズ可能なテンプレート", "基本的なSEO", "ドメイン接続"],
        es: [
          "Configuración básica de página de destino",
          "Plantilla personalizable",
          "SEO básico",
          "Conexión de dominio"
        ],
        nl: [
          "Basisinstelling van de landingspagina",
          "Aangepast sjabloon",
          "Basis SEO",
          "Domeinverbinding"
        ]
      }
    },
    activism: {
      name: {
        en: "Activism",
        zh: "社会运动",
        de: "Aktivismus",
        fr: "Activisme",
        ru: "Активизм",
        ms: "Aktivisme",
        ko: "활동주의",
        ja: "活動主義",
        es: "Activismo",
        nl: "Activisme"
      },
      price: { rm: "29/mo", cny: "39/月" },
      features: {
        en: [
          "200GB Cloud Storage",
          "Basic AI Insights",
          "Standard Firewall",
          "Email Support",
          "Tools for Campaign Management"
        ],
        zh: ["200GB云存储", "基础AI分析", "标准防火墙", "电子邮件支持", "活动管理工具"],
        de: [
          "200GB Cloud-Speicher",
          "Grundlegende AI-Insights",
          "Standard-Firewall",
          "E-Mail-Support",
          "Werkzeuge für Kampagnenmanagement"
        ],
        fr: [
          "200 Go de stockage Cloud",
          "Informations de base sur l'IA",
          "Pare-feu standard",
          "Support par e-mail",
          "Outils pour la gestion de campagnes"
        ],
        ru: [
          "200 ГБ облачного хранилища",
          "Основные AI-аналитики",
          "Стандартный файрвол",
          "Поддержка по электронной почте",
          "Инструменты для управления кампаниями"
        ],
        ms: [
          "200GB Penyimpanan Awan",
          "Pencerahan AI Asas",
          "Firewall Standard",
          "Sokongan E-mel",
          "Alat untuk Pengurusan Kempen"
        ],
        ko: ["200GB 클라우드 저장소", "기본 AI 통찰력", "표준 방화벽", "이메일 지원", "캠페인 관리 도구"],
        ja: [
          "200GB クラウドストレージ",
          "基本的なAIインサイト",
          "標準的なファイアウォール",
          "メールサポート",
          "キャンペーン管理ツール"
        ],
        es: [
          "200GB de almacenamiento en la nube",
          "Información básica de AI",
          "Cortafuegos estándar",
          "Soporte por correo electrónico",
          "Herramientas para gestión de campañas"
        ],
        nl: [
          "200GB Cloud-opslag",
          "Basis AI-inzichten",
          "Standaard firewall",
          "E-mailondersteuning",
          "Hulpmiddelen voor campagnebeheer"
        ]
      }
    },
    ngo: {
      name: {
        en: "NGO",
        zh: "非政府组织",
        de: "NGO",
        fr: "ONG",
        ru: "НПО",
        ms: "NGO",
        ko: "NGO",
        ja: "NGO",
        es: "ONG",
        nl: "NGO"
      },
      price: { rm: "49/mo", cny: "69/月" },
      features: {
        en: [
          "500GB Cloud Storage",
          "Basic AI Insights",
          "Standard Firewall",
          "Email and Chat Support",
          "NGO-specific Integration"
        ],
        zh: ["500GB云存储", "基础AI分析", "标准防火墙", "电子邮件和聊天支持", "NGO特定集成"],
        de: [
          "500GB Cloud-Speicher",
          "Grundlegende AI-Insights",
          "Standard-Firewall",
          "E-Mail- und Chat-Support",
          "NGO-spezifische Integration"
        ],
        fr: [
          "500 Go de stockage Cloud",
          "Informations de base sur l'IA",
          "Pare-feu standard",
          "Support par e-mail et chat",
          "Intégration spécifique aux ONG"
        ],
        ru: [
          "500 ГБ облачного хранилища",
          "Основные AI-аналитики",
          "Стандартный файрвол",
          "Поддержка по электронной почте и чату",
          "Интеграция для НПО"
        ],
        ms: [
          "500GB Penyimpanan Awan",
          "Pencerahan AI Asas",
          "Firewall Standard",
          "Sokongan E-mel dan Sembang",
          "Integrasi Khusus NGO"
        ],
        ko: [
          "500GB 클라우드 저장소",
          "기본 AI 통찰력",
          "표준 방화벽",
          "이메일 및 채팅 지원",
          "NGO 특정 통합"
        ],
        ja: [
          "500GB クラウドストレージ",
          "基本的なAIインサイト",
          "標準的なファイアウォール",
          "メールおよびチャットサポート",
          "NGO向け統合"
        ],
        es: [
          "500GB de almacenamiento en la nube",
          "Información básica de AI",
          "Cortafuegos estándar",
          "Soporte por correo electrónico y chat",
          "Integración específica para ONG"
        ],
        nl: [
          "500GB Cloud-opslag",
          "Basis AI-inzichten",
          "Standaard firewall",
          "E-mail- en chatondersteuning",
          "NGO-specifieke integratie"
        ]
      }
    },
    basic: {
      name: {
        en: "Basic",
        zh: "基础",
        de: "Basic",
        fr: "De base",
        ru: "Базовый",
        ms: "Asas",
        ko: "기본",
        ja: "基本",
        es: "Básico",
        nl: "Basis"
      },
      price: { rm: "99/mo", cny: "129/月" },
      features: {
        en: [
          "1GB of data storage",
          "Basic AI Analysis",
          "Standard Firewall",
          "Email Support",
          "Landing Page",
          "Domain"
        ],
        zh: ["1GB数据存储", "基础AI分析", "标准防火墙", "电子邮件支持", "着陆页", "域名"],
        de: [
          "1 GB Datenablage",
          "Grundlegende AI-Analyse",
          "Standard-Firewall",
          "E-Mail-Support",
          "Landing Page",
          "Domain"
        ],
        fr: [
          "1 Go de stockage de données",
          "Analyse de base de l'IA",
          "Pare-feu standard",
          "Support par e-mail",
          "Page de destination",
          "Domaine"
        ],
        ru: [
          "1 ГБ хранения данных",
          "Базовый AI-анализ",
          "Стандартный файрвол",
          "Поддержка по электронной почте",
          "Целевая страница",
          "Домен"
        ],
        ms: [
          "1GB penyimpanan data",
          "Analisis AI Asas",
          "Firewall Standard",
          "Sokongan E-mel",
          "Halaman Pendaratan",
          "Domain"
        ],
        ko: ["1GB 데이터 저장소", "기본 AI 분석", "표준 방화벽", "이메일 지원", "랜딩 페이지", "도메인"],
        ja: [
          "1GBのデータストレージ",
          "基本的なAI分析",
          "標準的なファイアウォール",
          "メールサポート",
          "ランディングページ",
          "ドメイン"
        ],
        es: [
          "1GB de almacenamiento de datos",
          "Análisis básico de IA",
          "Cortafuegos estándar",
          "Soporte por correo electrónico",
          "Página de destino",
          "Dominio"
        ],
        nl: [
          "1GB gegevensopslag",
          "Basis AI-analyse",
          "Standaard firewall",
          "E-mailondersteuning",
          "Landingspagina",
          "Domein"
        ]
      }
    },
    professional: {
      name: {
        en: "Professional",
        zh: "专业版",
        de: "Professionell",
        fr: "Professionnel",
        ru: "Профессиональный",
        ms: "Profesional",
        ko: "전문가",
        ja: "プロフェッショナル",
        es: "Profesional",
        nl: "Professioneel"
      },
      price: { rm: "1,999/mo", cny: "2,999/月" },
      features: {
        en: [
          "5TB Cloud Storage",
          "Advanced AI Analysis",
          "Next-Gen Firewall",
          "24/7 Phone Support",
          "Custom Integration"
        ],
        zh: ["5TB云存储", "高级AI分析", "下一代防火墙", "24/7电话支持", "定制集成"],
        de: [
          "5 TB Cloud-Speicher",
          "Fortgeschrittene AI-Analyse",
          "Next-Gen Firewall",
          "24/7 Telefon-Support",
          "Benutzerdefinierte Integration"
        ],
        fr: [
          "5 To de stockage Cloud",
          "Analyse avancée de l'IA",
          "Pare-feu de nouvelle génération",
          "Support téléphonique 24/7",
          "Intégration personnalisée"
        ],
        ru: [
          "5 ТБ облачного хранилища",
          "Расширенный AI-анализ",
          "Следующее поколение файрволов",
          "Телефонная поддержка 24/7",
          "Пользовательская интеграция"
        ],
        ms: [
          "5TB Penyimpanan Awan",
          "Analisis AI Lanjutan",
          "Firewall Generasi Baru",
          "Sokongan Telefon 24/7",
          "Integrasi Khusus"
        ],
        ko: ["5TB 클라우드 저장소", "고급 AI 분석", "차세대 방화벽", "24/7 전화 지원", "맞춤형 통합"],
        ja: [
          "5TB クラウドストレージ",
          "高度なAI分析",
          "次世代ファイアウォール",
          "24/7 電話サポート",
          "カスタム統合"
        ],
        es: [
          "5TB de almacenamiento en la nube",
          "Análisis avanzado de IA",
          "Cortafuegos de nueva generación",
          "Soporte telefónico 24/7",
          "Integración personalizada"
        ],
        nl: [
          "5TB Cloud-opslag",
          "Geavanceerde AI-analyse",
          "Next-Gen firewall",
          "24/7 telefoonondersteuning",
          "Aangepaste integratie"
        ]
      }
    },
    enterprise: {
      name: {
        en: "Enterprise",
        zh: "企业版",
        de: "Unternehmen",
        fr: "Entreprise",
        ru: "Корпоративный",
        ms: "Perusahaan",
        ko: "기업",
        ja: "エンタープライズ",
        es: "Empresa",
        nl: "Enterprise"
      },
      price: "Custom",
      features: {
        en: [
          "Unlimited Cloud Storage",
          "Custom AI Solutions",
          "Advanced Threat Protection",
          "24/7 Dedicated Support",
          "On-Site Consultation",
          "Full System Integration"
        ],
        zh: ["无限云存储", "定制AI解决方案", "高级威胁保护", "24/7专用支持", "现场咨询", "完整的系统集成"],
        de: [
          "Unbegrenzter Cloud-Speicher",
          "Benutzerdefinierte AI-Lösungen",
          "Erweiterter Bedrohungsschutz",
          "24/7 dedizierter Support",
          "Vor-Ort-Beratung",
          "Vollständige Systemintegration"
        ],
        fr: [
          "Stockage Cloud illimité",
          "Solutions IA personnalisées",
          "Protection avancée contre les menaces",
          "Support dédié 24/7",
          "Consultation sur site",
          "Intégration complète du système"
        ],
        ru: [
          "Неограниченное облачное хранилище",
          "Пользовательские AI-решения",
          "Расширенная защита от угроз",
          "Круглосуточная поддержка",
          "Консультации на месте",
          "Полная интеграция системы"
        ],
        ms: [
          "Penyimpanan Awan Tanpa Had",
          "Penyelesaian AI Tersuai",
          "Perlindungan Ancaman Lanjutan",
          "Sokongan Khusus 24/7",
          "Perundingan Di Tapak",
          "Integrasi Sistem Penuh"
        ],
        ko: [
          "무제한 클라우드 저장소",
          "맞춤형 AI 솔루션",
          "고급 위협 보호",
          "24/7 전담 지원",
          "현장 상담",
          "전체 시스템 통합"
        ],
        ja: [
          "無制限のクラウドストレージ",
          "カスタムAIソリューション",
          "高度な脅威保護",
          "24/7専用サポート",
          "オンサイトコンサルティング",
          "完全なシステム統合"
        ],
        es: [
          "Almacenamiento en la nube ilimitado",
          "Soluciones personalizadas de IA",
          "Protección avanzada contra amenazas",
          "Soporte dedicado 24/7",
          "Consultoría en sitio",
          "Integración completa del sistema"
        ],
        nl: [
          "Onbeperkte cloud-opslag",
          "Aangepaste AI-oplossingen",
          "Geavanceerde dreigingsbescherming",
          "24/7 dedicated support",
          "Consultatie ter plaatse",
          "Volledige systeemintegratie"
        ]
      }
    }
  };

  Object.entries(pricingData).forEach(([tier, data], index) => {
    const card = document.createElement("div");
    card.className = "pricing-card";
    card.style.animation = `fadeInUp 0.8s ${index * 0.1}s forwards`;

    const price =
      data.price === "Custom"
        ? translations[lang]["pricing.custom"]
        : lang === "zh" ? data.price.cny : data.price.rm;

    card.innerHTML = `
                    <h3>${data.name[lang]}</h3>
                    <div class="price">${price}</div>
                    <ul class="features-list">
                        ${data.features[lang]
                          .map(feature => `<li>${feature}</li>`)
                          .join("")}
                    </ul>
                    <a href="#contact" class="btn">${translations[lang][
                      "hero.cta"
                    ]}</a>
                `;

    pricingGrid.appendChild(card);
  });
}

// Initialize social media links
function initializeSocialLinks() {
  const socialLinks = document.querySelector(".social-links");
  const socialData = {
    facebook: "https://www.facebook.com/ctkqiang/",
    instagram: "https://www.instagram.com/manxingenterprise/",
    linkedin:
      "https://www.linkedin.com/company/%E4%B8%8A%E9%A5%B6%E6%BB%A1%E6%98%9F%E7%A7%91%E6%8A%80/",
    weixin:
      "https://raw.githubusercontent.com/ctkqiang/ctkqiang/refs/heads/main/assets/IMG_9245.JPG",
    snapchat: "https://www.snapchat.com/add/ctkqiang",
    weibo: "https://weibo.com/u/7815275485",
    github: "https://github.com/ShangRaoManXinKeji"
  };

  Object.entries(socialData).forEach(([platform, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.className = "social-link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `<i class="fab fa-${platform}"></i>`;
    socialLinks.appendChild(link);
  });
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Intersection Observer for animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".service-card, .pricing-card").forEach(card => {
  observer.observe(card);
});

// Initialize
const savedTheme = localStorage.getItem("theme") || "light";
const savedLang =
  localStorage.getItem("lang") || navigator.language.split("-")[0] || "en";

if (savedTheme === "dark") {
  body.setAttribute("data-theme", "dark");
}

langSelect.value = savedLang;
setLanguage(savedLang);
initializeSocialLinks();

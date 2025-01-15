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
    "pricing.month": "/month"
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
    "pricing.month": "/月"
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
    "pricing.month": "/Monat"
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
    "pricing.month": "/mois"
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
    "pricing.month": "/месяц"
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
      name: { en: "Mobile App Development", zh: "移动应用开发" },
      description: {
        en: "Cutting-edge mobile applications for iOS and Android platforms",
        zh: "为iOS和Android平台开发尖端移动应用"
      }
    },
    {
      name: { en: "Website Development", zh: "网站开发" },
      description: {
        en: "Custom responsive and dynamic websites tailored to your needs",
        zh: "根据您的需求定制响应式和动态网站"
      }
    },
    {
      name: { en: "System Development", zh: "系统开发" },
      description: {
        en: "Custom software solutions to streamline your business processes",
        zh: "定制软件解决方案，以简化您的业务流程"
      }
    },
    {
      name: { en: "AI & Machine Learning", zh: "人工智能与机器学习" },
      description: {
        en: "Intelligent systems that learn and adapt to your data",
        zh: "开发能够学习和适应您数据的智能系统"
      }
    },
    {
      name: { en: "Cybersecurity Solutions", zh: "网络安全解决方案" },
      description: {
        en: "Protect your digital assets with our advanced security measures",
        zh: "使用我们的先进安全措施保护您的数字资产"
      }
    },
    {
      name: { en: "Cloud Services", zh: "云服务" },
      description: {
        en: "Scalable cloud solutions for efficient data management",
        zh: "可扩展的云解决方案，实现高效的数据管理"
      }
    },
    {
      name: { en: "Blockchain Development", zh: "区块链开发" },
      description: {
        en:
          "Build secure, transparent distributed ledger technology applications",
        zh: "构建安全、透明的分布式账本技术应用"
      }
    },
    {
      name: { en: "IoT Solutions", zh: "物联网解决方案" },
      description: {
        en:
          "Connect and manage smart devices to optimize your business operations",
        zh: "连接和管理智能设备，优化您的业务运营"
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
      name: translations[lang]["pricing.landingPage"] || "6-Month Landing Page",
      price: { rm: "75/6mo", cny: "99/半年" }, // Cheapest option specifically for landing pages
      features: [
        "Basic Landing Page Setup",
        "Customizable Template",
        "Basic SEO",
        "Domain Connection"
      ]
    },
    activism: {
      name: translations[lang]["pricing.activism"] || "Activism",
      price: { rm: "29/mo", cny: "39/月" }, // Focused on affordability for social change initiatives
      features: [
        "200GB Cloud Storage",
        "Basic AI Insights",
        "Standard Firewall",
        "Email Support",
        "Tools for Campaign Management"
      ]
    },
    ngo: {
      name: translations[lang]["pricing.ngo"] || "NGO",
      price: { rm: "49/mo", cny: "69/月" }, // Affordable for non-profit organizations
      features: [
        "500GB Cloud Storage",
        "Basic AI Insights",
        "Standard Firewall",
        "Email and Chat Support",
        "NGO-specific Integration"
      ]
    },
    basic: {
      name: translations[lang]["pricing.basic"] || "Basic",
      price: { rm: "99/mo", cny: "129/月" }, // Entry-level plan for individuals or small businesses
      features: [
        "1GB of data storage",
        "Basic AI Analysis",
        "Standard Firewall",
        "Email Support",
        "Landing Page",
        "Domain"
      ]
    },
    professional: {
      name: translations[lang]["pricing.professional"] || "Professional",
      price: { rm: "1,999/mo", cny: "2,999/月" }, // Advanced tier for mid-sized businesses
      features: [
        "5TB Cloud Storage",
        "Advanced AI Analysis",
        "Next-Gen Firewall",
        "24/7 Phone Support",
        "Custom Integration"
      ]
    },
    enterprise: {
      name: translations[lang]["pricing.enterprise"] || "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Cloud Storage",
        "Custom AI Solutions",
        "Advanced Threat Protection",
        "24/7 Dedicated Support",
        "On-Site Consultation",
        "Full System Integration"
      ]
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
                    <h3>${data.name}</h3>
                    <div class="price">${price}</div>
                    <ul class="features-list">
                        ${data.features
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

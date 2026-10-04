export const siteConfig = {
  company: {
    name: "SolarVolt",
    tagline: "India's Premier Rooftop Solar & Inverter Partner",
    description:
      "SolarVolt delivers premium rooftop solar energy solutions for homes and commercial properties across India. Authorized partner for Tata Power Solar, Waaree Energies, and Adani Solar panels and leading smart inverters.",
    founded: "2018",
    email: "contact@solarvolt.in",
    phone: "1800-890-3030",
    phoneSecondary: "+91 98765 43210",
    address: "DLF Cyber City, Tower B, Gurugram / Regional Hubs in Mumbai, Bengaluru, Hyderabad & Ahmedabad",
    industry: "Rooftop Solar EPC & Renewable Energy",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Calculator", href: "/#calculator" },
    { label: "Elevated Solar", href: "/#elevated-structure" },
    { label: "Subsidy Guide", href: "/#subsidy" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  socials: [
    { platform: "Facebook", href: "https://facebook.com/solarvolt" },
    { platform: "Twitter", href: "https://twitter.com/solarvolt" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/solarvolt" },
    { platform: "Instagram", href: "https://instagram.com/solarvolt" },
  ],

  hero: {
    badge: "⚡ PM Surya Ghar Muft Bijli Yojana Approved | Up to ₹78,000 Govt Subsidy",
    headline: "Switch to Solar. Cut Electricity Bills to ₹0.",
    subheadline:
      "India's most trusted rooftop solar partner. Powered by authorized Tata Power Solar, Waaree & Adani panels with elevated WindPro™ structures and 25-year performance warranty.",
    primaryCta: { label: "Book Free Rooftop Survey", href: "/contact" },
    secondaryCta: { label: "Calculate Solar Savings", href: "#calculator" },
    trustHighlights: [
      { text: "Up to ₹78,000 Direct Govt Subsidy" },
      { text: "25-Year Performance Warranty" },
      { text: "0-Down EMI from ₹1,499/month" },
      { text: "100% Usable Rooftop Space" },
    ],
    stats: [
      { value: "50,000+", label: "Happy Solar Homes" },
      { value: "₹140 Cr+", label: "Electricity Saved" },
      { value: "99.4%", label: "Customer Satisfaction" },
      { value: "180 MW+", label: "Capacity Installed" },
    ],
  },

  trustedBy: {
    heading: "Authorized Channel Partners & Certified Tier-1 Brands",
    logos: [
      { name: "Tata Power Solar", tag: "Authorized Partner", color: "from-blue-600 to-cyan-500" },
      { name: "Waaree Energies", tag: "India's #1 Module Maker", color: "from-emerald-600 to-teal-500" },
      { name: "Adani Solar", tag: "Tier-1 Manufacturer", color: "from-amber-600 to-yellow-500" },
      { name: "Havells Solar", tag: "Smart Inverters", color: "from-red-600 to-rose-500" },
      { name: "Growatt Inverters", tag: "Global Leader", color: "from-blue-700 to-indigo-600" },
      { name: "Microtek Solar", tag: "Power Backup", color: "from-purple-600 to-violet-500" },
      { name: "National Portal Solar", tag: "Govt Subsidy Verified", color: "from-orange-600 to-amber-600" },
    ],
  },

  products: {
    heading: "Premium Solar Panels & Inverters",
    subheading:
      "We install only Tier-1 ALMM & BIS approved solar panels and ultra-high efficiency smart inverters from India's most trusted brands.",
    solarPanels: [
      {
        id: "tata-solar",
        brand: "Tata Power Solar",
        model: "Tata Mono PERC Bifacial 550W+",
        badge: "Most Trusted Indian Brand",
        efficiency: "22.4%",
        powerOutput: "550W - 580W",
        warranty: "25 Years Linear Output",
        techType: "N-Type TOPCon / Bifacial Mono PERC",
        features: [
          "Bifacial generation: up to 25% extra energy from rear",
          "Engineered for extreme Indian weather & high temperatures",
          "ALMM listed & MNRE subsidy approved",
          "PID resistant & anti-reflective coated glass",
        ],
        idealFor: "Villas, Independent Homes & High-Performance Commercial Roofs",
      },
      {
        id: "waaree-energies",
        brand: "Waaree Energies",
        model: "Waaree Arka TOPCon Bifacial 575W",
        badge: "India's #1 Solar Manufacturer",
        efficiency: "22.8%",
        powerOutput: "545W - 590W",
        warranty: "30 Years Performance Guarantee",
        techType: "N-Type TOPCon 16BB Technology",
        features: [
          "Next-Gen 16-Busbar cell architecture for minimum micro-cracks",
          "Superior low-light performance (early morning & cloudy days)",
          "Tier-1 BloombergNEF rated module technology",
          "Ultra-durable 35mm anodized aluminium frame",
        ],
        idealFor: "Residential Rooftops, Societies & Factories",
      },
      {
        id: "adani-solar",
        brand: "Adani Solar",
        model: "Adani Shine Series Mono PERC 545W",
        badge: "Heavy Duty High-Wind Resistance",
        efficiency: "21.8%",
        powerOutput: "540W - 570W",
        warranty: "25 Years Performance Warranty",
        techType: "Multi-Busbar Half-Cut Mono PERC",
        features: [
          "Withstands extreme wind loads up to 5400 Pa & snow loads",
          "High conversion efficiency with zero potential induced degradation",
          "100% EL tested for zero hidden defect assurance",
          "Direct grid synchronization & zero maintenance design",
        ],
        idealFor: "Coastal Regions, High-Rise Terraces & Industrial Sheds",
      },
    ],
    inverters: [
      {
        id: "tata-inverter",
        brand: "Tata Power Solar Inverters",
        model: "Smart On-Grid Dual MPPT Series (3kW - 50kW)",
        efficiency: "98.6%",
        warranty: "10 Years Replacement Warranty",
        type: "On-Grid & Hybrid Smart Inverter",
        features: [
          "Built-in WiFi / 4G IoT module for live smartphone app monitoring",
          "Dual MPPT tracking for multi-angle rooftop orientations",
          "IP65 weather-proof rating for outdoor installation",
          "Type II surge protection and rapid shutdown safety",
        ],
      },
      {
        id: "growatt-inverter",
        brand: "Growatt Smart Inverters",
        model: "MIN & MID Series Smart Grid-Tie",
        efficiency: "98.4%",
        warranty: "10 Years Warranty",
        type: "Smart Grid-Tie Inverter",
        features: [
          "Global #1 residential inverter supplier",
          "OLED display with touch key control",
          "Integrated DC disconnect switch for maximum safety",
          "Smart online service (OSS) for remote diagnosis",
        ],
      },
      {
        id: "havells-inverter",
        brand: "Havells Enviro Solar Inverters",
        model: "Enviro GT Series Single & 3-Phase",
        efficiency: "98.2%",
        warranty: "10 Years Warranty",
        type: "On-Grid Smart Inverter",
        features: [
          "Engineered specifically for Indian electrical grid fluctuations",
          "High overload capability and wide MPPT voltage range",
          "Havells Sync Mobile App for real-time generation tracking",
          "Compact, lightweight wall-mountable chassis",
        ],
      },
      {
        id: "microtek-inverter",
        brand: "Microtek Solar Solutions",
        model: "Sun Saver Hybrid & Off-Grid Series",
        efficiency: "97.8%",
        warranty: "5-10 Years Warranty",
        type: "Hybrid & Battery Storage Inverter",
        features: [
          "Pure sine wave output with high surge capacity",
          "Intelligent battery charging algorithm (Lithium & Tubular)",
          "Automatic changeover during grid power cuts",
          "Extensive service network across 500+ Indian cities",
        ],
      },
    ],
  },

  subsidy: {
    badge: "PM Surya Ghar Muft Bijli Yojana",
    heading: "Claim Up to ₹78,000 Direct Bank Transfer Subsidy",
    subheading:
      "The Central Government of India provides direct cash subsidies for residential rooftop solar under the PM Surya Ghar initiative. SolarVolt handles 100% of the paperwork, DISCOM approvals, and subsidy filing for you.",
    tiers: [
      {
        capacity: "1 kW System",
        subsidyAmount: "₹30,000",
        suitableFor: "Monthly bill around ₹1,000 - ₹1,500",
        unitsPerMonth: "120 - 150 Units",
        netInvestment: "Starting at ₹35,000*",
      },
      {
        capacity: "2 kW System",
        subsidyAmount: "₹60,000",
        suitableFor: "Monthly bill around ₹2,000 - ₹3,500",
        unitsPerMonth: "240 - 300 Units",
        netInvestment: "Starting at ₹65,000*",
        popular: true,
      },
      {
        capacity: "3 kW to 10 kW System",
        subsidyAmount: "₹78,000 (Maximum)",
        suitableFor: "Monthly bill ₹4,000 - ₹15,000+",
        unitsPerMonth: "360 - 1,200+ Units",
        netInvestment: "Starting at ₹1,10,000*",
        recommended: true,
      },
    ],
    benefits: [
      "Direct DBT transfer straight into your bank account",
      "SolarVolt manages all DISCOM liaisoning & Net Metering approval",
      "Zero hassle: 100% digital documentation support",
      "Get up to 300 units of free electricity every single month",
    ],
  },

  elevatedStructure: {
    heading: "WindPro™ Elevated Structures: 100% Usable Rooftop",
    subheading:
      "Unlike traditional floor-mounted solar panels that block your terrace, SolarVolt's elevated galvanized steel structures sit 6 to 8 feet above your roof, keeping your entire rooftop 100% open for living, walking, and gatherings.",
    features: [
      {
        title: "100% Usable Terrace Area",
        description: "Walk, relax, host family barbecues, or build a terrace garden directly beneath your solar panels.",
      },
      {
        title: "Zero Roof Penetration & Leakage",
        description: "Specialized non-destructive foundation pedestals ensure zero civil damage and 100% waterproof guarantee.",
      },
      {
        title: "170 km/h Cyclone Windproof",
        description: "Hot-dip galvanized heavy gauge steel tested against extreme gale force winds and severe monsoons.",
      },
      {
        title: "Natural Home Cooling",
        description: "Acts as a thermal sun-shield, lowering your top floor room temperatures by 3°C to 5°C in summer.",
      },
    ],
  },

  calculatorData: [
    {
      monthlyBill: 2000,
      systemKw: 2,
      panels: 4,
      roofArea: 160,
      monthlySavings: 2000,
      yearlySavings: 24000,
      lifetimeSavings: 600000,
      subsidy: 60000,
      grossCost: 130000,
      netCost: 70000,
      monthlyEmi: 1499,
    },
    {
      monthlyBill: 3500,
      systemKw: 3,
      panels: 6,
      roofArea: 240,
      monthlySavings: 3500,
      yearlySavings: 42000,
      lifetimeSavings: 1050000,
      subsidy: 78000,
      grossCost: 195000,
      netCost: 117000,
      monthlyEmi: 2399,
    },
    {
      monthlyBill: 5500,
      systemKw: 4,
      panels: 8,
      roofArea: 320,
      monthlySavings: 5500,
      yearlySavings: 66000,
      lifetimeSavings: 1650000,
      subsidy: 78000,
      grossCost: 255000,
      netCost: 177000,
      monthlyEmi: 3499,
    },
    {
      monthlyBill: 8000,
      systemKw: 5,
      panels: 10,
      roofArea: 400,
      monthlySavings: 8000,
      yearlySavings: 96000,
      lifetimeSavings: 2400000,
      subsidy: 78000,
      grossCost: 310000,
      netCost: 232000,
      monthlyEmi: 4699,
    },
    {
      monthlyBill: 12000,
      systemKw: 8,
      panels: 16,
      roofArea: 640,
      monthlySavings: 12000,
      yearlySavings: 144000,
      lifetimeSavings: 3600000,
      subsidy: 78000,
      grossCost: 480000,
      netCost: 402000,
      monthlyEmi: 7999,
    },
    {
      monthlyBill: 18000,
      systemKw: 10,
      panels: 20,
      roofArea: 800,
      monthlySavings: 18000,
      yearlySavings: 216000,
      lifetimeSavings: 5400000,
      subsidy: 78000,
      grossCost: 590000,
      netCost: 512000,
      monthlyEmi: 9999,
    },
  ],

  services: [
    {
      id: "residential",
      title: "Rooftop Solar for Homes & Villas",
      description:
        "Complete turnkey solar solution with Tata, Waaree or Adani panels, elevated structures, net-metering DISCOM approval, and up to ₹78,000 PM Surya Ghar subsidy.",
      features: [
        "Free 3D shadow analysis & rooftop survey",
        "Elevated galvanized steel WindPro™ structure",
        "25-year linear performance warranty",
        "Complete PM Surya Ghar subsidy filing",
      ],
      icon: "Home",
    },
    {
      id: "housing-societies",
      title: "Housing Societies & Apartments",
      description:
        "High-capacity shared solar plants for common area lighting, lifts, water pumps, and clubhouses with zero disruption and massive maintenance cost savings.",
      features: [
        "Custom power distribution design",
        "Cut society electricity charges by up to 80%",
        "Special CAPEX & OPEX financing options",
        "Automated monthly generation auditing",
      ],
      icon: "Building2",
    },
    {
      id: "commercial",
      title: "Commercial & Industrial Solar",
      description:
        "Large-scale rooftop and ground installations for factories, warehouses, schools, and hospitals. Achieve rapid 3-4 year ROI with 40% accelerated tax depreciation.",
      features: [
        "Megawatt-scale EPC design & execution",
        "40% accelerated depreciation tax benefits",
        "Remote SCADA & IoT monitoring",
        "Dedicated industrial engineering team",
      ],
      icon: "Factory",
    },
    {
      id: "maintenance",
      title: "SolarCare™ Proactive Maintenance",
      description:
        "Comprehensive health checkups, robotic/high-pressure panel cleaning, thermal imaging, and 24/7 AI-based generation monitoring for peak lifetime yields.",
      features: [
        "24/7 generation tracking via SolarVolt App",
        "Periodic automated panel washing",
        "Quarterly safety and electrical audits",
        "Priority 4-hour breakdown technician dispatch",
      ],
      icon: "Wrench",
    },
  ],

  howItWorks: {
    heading: "How Going Solar Works with SolarVolt",
    subheading:
      "A 100% hassle-free 5-step process. We manage everything from engineering to government subsidies.",
    steps: [
      {
        step: 1,
        title: "Free Rooftop Survey & 3D Design",
        description:
          "Our solar engineer visits your property with drone shade-mapping to calculate exact solar generation and savings potential.",
      },
      {
        step: 2,
        title: "Transparent Proposal & Equipment Choice",
        description:
          "Choose between premium Tata, Waaree, or Adani solar modules and smart inverters with zero hidden charges.",
      },
      {
        step: 3,
        title: "2-Day Precision Installation",
        description:
          "Certified structural engineers install the heavy-duty elevated structure and panels with zero terrace damage.",
      },
      {
        step: 4,
        title: "Net Metering & DISCOM Inspection",
        description:
          "We handle all grid liaisoning and install the bi-directional net meter with your local electricity board.",
      },
      {
        step: 5,
        title: "₹78,000 Subsidy Credited & Savings Begin",
        description:
          "Your system goes live, your subsidy is credited straight to your bank account, and your electricity bill drops to zero.",
      },
    ],
  },

  testimonials: [
    {
      name: "Rajesh Kulkarni",
      role: "Villa Owner, Pune",
      quote:
        "We installed a 5kW Tata Solar setup with SolarVolt. Our monthly bill dropped from ₹8,500 to just ₹220! The elevated structure lets us enjoy our terrace garden every evening, and the ₹78,000 subsidy was credited within 45 days.",
      rating: 5,
      billBefore: "₹8,500/mo",
      billAfter: "₹220/mo",
      systemSize: "5 kW Tata Solar",
    },
    {
      name: "Dr. Ananya Singhal",
      role: "Homeowner, Greater Noida",
      quote:
        "Super impressed with the professionalism. They used Waaree TOPCon panels and a Growatt inverter. The entire installation took just 2 days without a single crack on my roof tiles. Highly recommended over local vendors!",
      rating: 5,
      billBefore: "₹12,400/mo",
      billAfter: "₹450/mo",
      systemSize: "7 kW Waaree TOPCon",
    },
    {
      name: "Vikram Mehta",
      role: "Secretary, Palm Meadows Society, Bengaluru",
      quote:
        "SolarVolt installed a 40kW commercial system for our society clubhouse and water pumps. Our common area electricity bill is down by 78%. Their mobile app gives daily real-time generation graphs.",
      rating: 5,
      billBefore: "₹92,000/mo",
      billAfter: "₹19,500/mo",
      systemSize: "40 kW Adani Solar",
    },
  ],

  faq: [
    {
      question: "How does the PM Surya Ghar ₹78,000 subsidy work?",
      answer:
        "Under the PM Surya Ghar Muft Bijli Yojana, residential consumers installing a 1kW system get ₹30,000, 2kW gets ₹60,000, and 3kW to 10kW systems get the maximum ₹78,000 subsidy. The amount is credited directly via Direct Benefit Transfer (DBT) into your linked bank account after net meter installation. SolarVolt handles the complete application and inspection process.",
    },
    {
      question: "Which solar panel brand is best between Tata, Waaree, and Adani?",
      answer:
        "All three are Tier-1, ALMM-approved Indian giants. Tata Power Solar is renowned for decades of proven reliability; Waaree Energies offers ultra-high efficiency TOPCon 16BB modules; Adani Solar excels in extreme wind load resistance and heavy-duty performance. Our solar engineer will recommend the best fit during your free rooftop survey based on your roof space and budget.",
    },
    {
      question: "Will installing solar panels ruin my rooftop space?",
      answer:
        "Not with SolarVolt! We specialize in WindPro™ elevated rooftop structures that stand 6 to 8 feet above your terrace. This keeps your entire roof 100% usable for walking, gardening, and gatherings, while keeping the rooms below significantly cooler.",
    },
    {
      question: "How long does the installation and net-metering process take?",
      answer:
        "Physical installation on your rooftop takes only 1–2 days. The net-metering approval and meter exchange with your state electricity board (DISCOM) typically takes 2–4 weeks. SolarVolt's dedicated liaison team manages all government paperwork.",
    },
    {
      question: "Is zero-down financing or monthly EMI available?",
      answer:
        "Yes! We offer 0-down solar loan financing with partner banks and NBFCs with interest rates as low as 6% to 7% per annum. Your monthly EMI is typically lower than the electricity savings you generate every month, making it cash-flow positive from Day 1.",
    },
    {
      question: "What warranties and guarantees are provided?",
      answer:
        "You get a 25 to 30-year linear power performance warranty on solar panels, a 10-year replacement warranty on smart inverters, a 10-year structural warranty on our galvanized WindPro™ mount, and 5 years of complimentary SolarCare™ maintenance and cleaning.",
    },
  ],

  cta: {
    heading: "Ready to Cut Your Electricity Bill to ₹0?",
    subheading:
      "Claim up to ₹78,000 under PM Surya Ghar Yojana. Get a custom 3D solar design and free rooftop survey today.",
    buttonLabel: "Book Free Rooftop Survey",
    buttonHref: "/contact",
  },

  about: {
    headline: "Transforming Indian Rooftops into Clean Energy Powerhouses",
    intro:
      "Founded with the vision to make clean solar energy simple, affordable, and accessible to every Indian household and enterprise. SolarVolt brings together Tier-1 global technology, elevated non-destructive engineering, and end-to-end government subsidy support.",
    mission:
      "To empower 1,000,000 Indian rooftops with clean, zero-cost solar energy by 2030, saving billions in electricity bills and millions of tons of CO2.",
    vision:
      "A self-sustaining India where every home and business generates its own clean power with zero reliance on fossil fuel grids.",
    values: [
      {
        title: "100% Tier-1 Equipment",
        description:
          "We never compromise on quality. Only genuine, ALMM-approved panels from Tata, Waaree, and Adani with certified smart inverters.",
      },
      {
        title: "Elevated Structural Safety",
        description:
          "Our galvanized steel structures are engineered by aerospace & civil experts to withstand 170 km/h cyclones with zero terrace damage.",
      },
      {
        title: "Guaranteed Subsidies",
        description:
          "Complete end-to-end DISCOM liaisoning ensuring 100% guaranteed DBT subsidy credit straight into your bank account.",
      },
      {
        title: "Lifetime SolarCare Support",
        description:
          "Real-time IoT generation tracking, automated cleaning reminders, and dedicated local technician support across 100+ cities.",
      },
    ],
    team: [
      {
        name: "Aakash Verma",
        role: "Co-Founder & CEO",
        bio: "IIT Delhi alumnus with 14+ years in renewable energy infrastructure. Passionate about bringing world-class rooftop solar technology to Indian homeowners.",
      },
      {
        name: "Priya Sharma",
        role: "Chief Technology Officer",
        bio: "PhD in Photovoltaic Systems. Leads our solar array optimization, 3D shadow mapping, and IoT smart inverter telemetry platform.",
      },
      {
        name: "Rajeev Singhal",
        role: "Head of Structural Engineering",
        bio: "20+ years designing cyclone-proof high-tensile structures. Architect behind our signature WindPro™ elevated rooftop solar mounting systems.",
      },
      {
        name: "Sneha Patel",
        role: "Head of Customer & Subsidy Success",
        bio: "Spearheaded DISCOM integrations across 18 states, ensuring seamless net-metering and fast subsidy clearance for over 50,000 customers.",
      },
    ],
    stats: [
      { value: "50,000+", label: "Installations Completed" },
      { value: "100+", label: "Cities Covered" },
      { value: "250+", label: "Certified Engineers" },
      { value: "4.9/5", label: "Google Review Rating" },
    ],
  },

  contact: {
    headline: "Book Your Free Rooftop Solar Survey",
    subheadline:
      "Get a customized 3D shadow report, exact quotation with Tata / Waaree / Adani modules, and claim up to ₹78,000 PM Surya Ghar subsidy.",
    formFields: {
      name: "Full Name",
      phone: "Mobile Number (for OTP & instant proposal)",
      city: "City / State",
      monthlyBill: "Average Monthly Electricity Bill",
      propertyType: "Property Type",
      panelPreference: "Preferred Solar Panel Brand",
      message: "Additional Details (Optional)",
    },
    serviceOptions: [
      "Residential Rooftop Solar (Home / Villa)",
      "Housing Society / High-Rise Apartment",
      "Commercial / Industrial Solar",
      "Solar Inverter & Battery Storage",
      "SolarCare Maintenance & Cleaning",
    ],
    panelOptions: [
      "Tata Power Solar (Mono PERC / Bifacial)",
      "Waaree Energies (TOPCon Bifacial)",
      "Adani Solar (Shine High-Wind Series)",
      "Expert Recommendation (Best Value)",
    ],
    officeHours: "Monday – Saturday: 8:30 AM – 7:30 PM IST",
  },

  footer: {
    description:
      "SolarVolt is India's premier rooftop solar EPC company. Authorized channel partners for Tata Power Solar, Waaree Energies, Adani Solar, and leading smart inverters. MNRE & PM Surya Ghar approved.",
    certifications: [
      "PM Surya Ghar Approved",
      "MNRE / ALMM Listed Tier-1",
      "ISO 9001:2015 Certified EPC",
      "100% DISCOM Net-Metering Guarantee",
    ],
    copyright: `© ${new Date().getFullYear()} SolarVolt Technologies India Pvt. Ltd. All rights reserved.`,
  },
} as const;

export type SiteConfig = typeof siteConfig;

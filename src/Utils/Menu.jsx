export const PRODUCTS = [
  { name: "Drag And Drop", link: "#" },
  { name: "Visual Studio X", link: "#" },
  { name: "Easy Content", link: "#" },
];
export const RESOURCES = [
  { name: "Industries and tools", link: "#" },
  { name: "Use cases", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Online evenet", link: "#" },
  { name: "Nostrud exercitation", link: "#" },
];
export const COMPANY = [
  { name: "Diversity & inclusion", link: "#" },
  { name: "About us", link: "#" },
  { name: "Press", link: "#" },
  { name: "Customer Stories", link: "#" },
  { name: "Online communities", link: "#" },
];
export const SUPPORT = [
  { name: "Documentation", link: "#" },
  { name: "Tutorials & guides", link: "#" },
  { name: "Webinars", link: "#" },
  { name: "Open-source", link: "#" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-github", link: "#" },
  { name: "logo-linkedin", link: "#" },
  { name: "logo-instagram", link: "#" },
];
export const parterImage = [
  {
    image: "/fao.jpeg",
  },
  { image: "/wfp.jpg" },
  { image: "/UNOCHA_logo_horizontal_text_blue_RGB_1200x630.jpg" },
  { image: "/fgs.png" },
];
 export const sectors = [
  {
    icon: "📚",
    image: "/reseach.png",
    href: "research",
    name: "Research Department",
    summary:
      "Our Research department drives evidence-based programming by conducting assessments, surveys, and evaluations that inform decision-making. By employing both quantitative and qualitative methods, we help humanitarian actors better understand the needs of affected communities and improve the design and delivery of aid.",
    objectives: [
      "Inform Programming: Use data-driven insights to guide humanitarian planning, design, and prioritization.",
      "Ensure Accountability: Monitor project performance and impact using robust tools and feedback loops.",
      "Strengthen Evidence Culture: Collaborate with academic partners to enhance the quality and utility of research outputs."
    ],
    actions:
      "In Somalia, where data scarcity hampers aid efficiency, our research team carries out needs assessments, baseline studies, and real-time evaluations. We use community-based approaches—like focus groups and participatory mapping—to ensure that voices from all segments of society are heard. This empowers agencies to adapt programs, target vulnerable populations, and respond more effectively to crises on the ground."
  },
  {
    icon: "💧",
    image: "/wash.png",
    href: "wash",
    name: "WASH, Health & Nutrition Department",
    summary:
      "Our WASH, Health & Nutrition department works to safeguard the health and dignity of communities by ensuring access to clean water, adequate sanitation, and essential healthcare and nutrition services. We integrate hygiene education with public health and nutrition outreach to improve overall wellbeing.",
    objectives: [
      "Improve Health Outcomes: Reduce waterborne diseases and malnutrition through clean water and food access.",
      "Strengthen Community Systems: Build local capacity for hygiene, nutrition, and disease prevention.",
      "Promote Behavioral Change: Use community engagement to foster sustainable hygiene and nutrition practices."
    ],
    actions:
      "Somalia faces a dual crisis of limited healthcare access and widespread malnutrition. Our teams establish safe water systems and sanitation infrastructure in underserved areas. We deliver nutrition screening and referrals, especially for children under five and pregnant women, and we train health workers on disease prevention, first aid, and maternal health. Through health awareness campaigns and hygiene promotion, we’re reducing the spread of preventable diseases and supporting healthier families."
  },
  {
    icon: "🎓",
    image: "/education_update.jpg",
    href: "education",
    name: "Education Department",
    summary:
      "The Education department is committed to expanding access to quality education, especially in communities affected by conflict and displacement. We work to rehabilitate learning environments, supply materials, and support inclusive and alternative learning pathways for vulnerable children and youth.",
    objectives: [
      "Enhance Access: Reopen and support schools in hard-to-reach or crisis-affected areas.",
      "Improve Quality: Train teachers and provide materials to boost learning outcomes.",
      "Ensure Inclusion: Advocate for marginalized groups including girls, children with disabilities, and pastoralist youth."
    ],
    actions:
      "In Somalia’s fragile education landscape, we rebuild schools, distribute essential learning materials, and provide safe spaces for learning. We run training for teachers on inclusive and participatory pedagogy and support Accelerated Basic Education (ABE) for older children who missed out on school. Through radio lessons and mobile classrooms, we bring learning closer to nomadic communities and displaced families, making education accessible and resilient."
  },
  {
    icon: "🧰",
    image: "/capacity_building.jpg",
    href: "capacity-building",
    name: "Capacity Building Department",
    summary:
      "Our Capacity Building department empowers local communities, institutions, and youth with the knowledge, tools, and skills they need to lead sustainable development and recovery efforts. We invest in training, mentorship, and leadership development for long-term resilience.",
    objectives: [
      "Support Local Governance: Train community leaders and local authorities on leadership and good governance.",
      "Empower Youth and Women: Provide vocational training, financial literacy, and mentorship opportunities.",
      "Foster Civic Engagement: Strengthen advocacy skills and community organizing for grassroots actors."
    ],
    actions:
      "To build lasting impact in Somalia, we deliver leadership and management training to community-based organizations (CBOs), offer entrepreneurship support to youth, and facilitate digital literacy programs. Women-led initiatives receive tailored support to ensure their participation in community decision-making. By linking trained individuals with mentors and resources, we’re helping communities build resilience from within."
  }
];


export const navItems = [
  { href: "/home", label: "Home", className: "tab_details" },
  { href: "/about", label: "Who We Are", className: "tab_details" },
  { href: "/our-work", label: "What We Do", className: "tab_details" },
  { href: "/contacts", label: "Contact Us", className: "tab_details" },
  { href: "/Resources", label: "Resources", className: "tab_details" },
  { href: "/partnerships", label: "Donate", className: "tab_details_donate" }
];
export const sections = [
  {
    id: "wash",
    title: "WASH Health, Nutrition, Water and Sanitation",
    items: [
      "Public Health Knowledge and awareness campaigns",
      "WASH facilities setup",
      "Food security awareness and consultancy",
      "Nutrition and health support"
    ]
  },
  {
    id: "research",
    title: "Research",
    items: [
      "Quantitative (questionnaires)",
      "Qualitative (FGDs, KII’s, and Document reviews’)",
      "Monitoring and evaluation"
    ]
  },
  {
    id: "education",
    title: "Education",
    items: [
      "Expand primary and secondary education access.",
      "Improve education quality through teacher development, better facilities, and school supplies.",
      "Ensure inclusive education for marginalized groups and provide gender-sensitive teaching materials.",
      "Offer vocational training and Accelerated Basic Education (ABE) programs to provide alternative educational pathways and practical skills."
    ]
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    items: [
      "Upskilling workshops",
      "Policy and advocacy training",
      "Mentoring partnerships",
      "Women and Youth empowerment",
      "Vocational training"
    ]
  }
];
export const categories = [
  { 
    id: "education",
    
    name: "Education" },
  {
    id: "research",
    name: "Research" },
  {
    id: "capacity-building",
    
    name: "Capacity Building" },
  { 
    id: "education",
    
    name: "Education" },
  { 
    id: "wash",
    
    name: "Water, Health, Nutrition and Sanitation" }
];
export const galleryData = [
  {
    title: "Gender Based Training and Advocacy in Banadir",
    images: [
      "./gallery/GBV PHOTOS JANUARY 2025/20250115212926_IMG_9556.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115213010_IMG_9559.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115213336_IMG_9571.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115213346_IMG_9572.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115213648_IMG_9573.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115214058_IMG_9592.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115214259_IMG_9595.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115215947_IMG_9608.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115220109_IMG_9613.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115220456_IMG_9617.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115220527_IMG_9619.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115220543_IMG_9620.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115220823_IMG_9624.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115221005_IMG_9629.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115221221_IMG_9632.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115221322_IMG_9636.JPG",
      "./gallery/GBV PHOTOS JANUARY 2025/20250115221406_IMG_9639.JPG",
    ],
  },
  {
    title: "NUTRITIONAL COOKING IN WABARI",
    images: [
      "./gallery/COOKING WABARI JANUARY 2025/20250114215920_IMG_9351.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114215941_IMG_9352.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114215955_IMG_9353.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220042_IMG_9354.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220123_IMG_9356.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220129_IMG_9357.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220145_IMG_9358.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220208_IMG_9359.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114220226_IMG_9360.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222610_IMG_9381.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222623_IMG_9382.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222633_IMG_9383.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222646_IMG_9384.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222655_IMG_9385.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222714_IMG_9386.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222722_IMG_9387.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114222740_IMG_9388.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223215_IMG_9391.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223240_IMG_9392.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223257_IMG_9393.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223408_IMG_9394.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223540_IMG_9395.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223548_IMG_9396.JPG",
      "./gallery/COOKING WABARI JANUARY 2025/20250114223657_IMG_9397.JPG",
    ],
  },
  {
    title: "PDAD/AID Diversion Training in Daynile District Banadir Region",
    images: [
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115225210_IMG_9672.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115225439_IMG_9680.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115225758_IMG_9685.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115230529_IMG_9699.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115230557_IMG_9700.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115230714_IMG_9703.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250115235525_IMG_9746.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250116000514_IMG_9759.JPG",
      "./gallery/PDAD PHOTOS JANUARY 2025/20250116001634_IMG_9772.JPG",
    ],
  },
];
export const availableOpportunities = [
  {
    title: "REQUEST FOR TENDER: PROCUREMENT OF FURNITURE AND ECD MATERIALS",
    issuedDate: "8th August 2024",
    closingDate: "21st August 2024",
    description: "RAWA invites eligible companies to submit bids for the supply of furniture and Early Childhood Development (ECD) materials. The selected suppliers will be responsible for providing high-quality items that meet RAWA’s operational and educational needs.",
    link: "./Bid Notice for Furniture and ECD Materials.pdf",
  },
  {
    title: "REQUEST FOR TENDER: VEHICLE RENTAL SERVICES",
    issuedDate: "7th July 2024",
    closingDate: "18th July 2024",
    description: "RAWA invites eligible individuals and companies to submit bids for the provision of vehicle rental services for a period of 12 months. The selected service provider(s) will be responsible for providing well-maintained and roadworthy vehicles to support RAWA’s operational needs.",
    link: "./BID_NOTICE_RASAWAD-Advertisement.pdf",
  }
];

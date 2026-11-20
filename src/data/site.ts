import {
  Globe2,
  PenTool,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Layers3,
  Users,
  BriefcaseBusiness,
  UserRound,
  Wrench,
} from 'lucide-react';

export const CONTACT_EMAIL = 'buildexnow@gmail.com';

export const NAV_LINKS = [
  { label: 'Services', href: '/#services', menu: true },
  { label: 'Work', href: '/work/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Assets', href: '/blog/', menu: true },
] as const;

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: typeof Globe2;
};

export const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Website Design & Development',
    description:
      'High-converting websites designed and developed around your brand, business and customers.',
    icon: Globe2,
  },
  {
    index: '02',
    title: 'Social Media & Content Marketing',
    description:
      'Strategic content and social media marketing that builds attention, trust and consistent growth.',
    icon: Megaphone,
  },
  {
    index: '03',
    title: 'Paid Ads',
    description:
      'Performance-focused advertising campaigns built to reach the right audience and drive measurable results.',
    icon: PenTool,
  },
  {
    index: '04',
    title: 'Branding',
    description:
      'Distinctive brand identities that make your business look professional, memorable and ready to grow.',
    icon: Palette,
  },
  {
    index: '05',
    title: 'SEO',
    description:
      'Improve your search visibility, attract relevant organic traffic and help the right customers discover your business.',
    icon: Search,
  },
  {
    index: '06',
    title: 'App Development',
    description:
      'User-focused mobile applications designed to make your services more accessible and support your business as it grows.',
    icon: Smartphone,
  },
];

export type Concept = {
  name: string;
  kind: string;
  description: string;
  image: string;
  tone: string;
};

export const CONCEPTS: Concept[] = [
  {
    name: 'Bloom Money',
    kind: 'Fintech · Product design',
    description: 'Empowering communities with financial solutions.',
    image: '/assets/ref/Rectangle-6338.png',
    tone: '#c6fb00',
  },
  {
    name: 'Ship Track',
    kind: 'Logistics · Mobile app',
    description: 'Real-time shipment tracking and delivery management at your fingertips.',
    image: '/assets/ref/2-1-2.png',
    tone: '#ff5a52',
  },
  {
    name: 'Gig Desk',
    kind: 'Platform · Dashboard',
    description: 'All-in-one dashboard to manage gigs, tours, venues, and payrolls.',
    image: '/assets/ref/3-1-2.png',
    tone: '#e9e9e9',
  },
  {
    name: 'Villa Vault',
    kind: 'Travel · Web platform',
    description: "Discover and book the world's finest luxury villas with ease",
    image: '/assets/ref/1-2.png',
    tone: '#b68a3e',
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  kind: string;
  description: string;
  image: string;
};

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery',
    kind: 'Research & Domain Analysis',
    description:
      "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
    image: '/assets/ref/home-process-1.webp',
  },
  {
    num: '02',
    title: 'Flows',
    kind: 'User Journey Map Sitemap',
    description:
      'Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.',
    image: '/assets/ref/home-process-2.webp',
  },
  {
    num: '03',
    title: 'Wireframes',
    kind: 'Low-Fidelity Design',
    description:
      'Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.',
    image: '/assets/ref/home-process-3.webp',
  },
  {
    num: '04',
    title: 'Mockups',
    kind: 'High-Fidelity Design',
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: '/assets/ref/home-process-4.webp',
  },
  {
    num: '05',
    title: 'Prototyping',
    kind: 'Interaction Design',
    description:
      'UX Designers create clickable prototypes for your product using tools like Figma to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.',
    image: '/assets/ref/home-process-5.webp',
  },
  {
    num: '06',
    title: 'Testing',
    kind: 'Usability Testing',
    description:
      'UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.',
    image: '/assets/ref/home-process-6.webp',
  },
];

export type CompareRow = {
  name: string;
  note: string;
  mobileNote?: string;
  icon: typeof Layers3;
  marks: [boolean, boolean, boolean, boolean, boolean];
  hero?: boolean;
};

// Columns: Speed, Flexibility, Quality, Scalability, Affordability
export const COMPARISON: CompareRow[] = [
  {
    name: 'BuildexNow',
    note: 'Strategy-driven digital growth with focused execution, premium quality and flexible support — without the overhead of building everything in-house.',
    mobileNote: 'Strategy-driven digital growth with focused execution, premium quality and flexible support.',
    icon: Layers3,
    marks: [true, true, true, true, true],
    hero: true,
  },
  {
    name: 'In-House Team',
    note: 'Full-time hiring gives direct control, but requires salaries, management and recruitment.',
    icon: Users,
    marks: [false, false, false, true, false],
  },
  {
    name: 'Creative Agencies',
    note: 'Structured processes can deliver quality, but often involve higher costs and less flexibility.',
    icon: BriefcaseBusiness,
    marks: [false, false, true, true, false],
  },
  {
    name: 'Freelancers',
    note: 'Affordable for individual tasks, but consistency and broader strategic support can vary.',
    icon: UserRound,
    marks: [false, true, false, false, true],
  },
  {
    name: 'Self-Service Tools',
    note: "Budget-friendly tools can help with basic execution, but don't replace strategy or expertise.",
    icon: Wrench,
    marks: [false, false, true, true, false],
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: 'What services does BuildexNow offer?',
    a: 'BuildexNow provides website design and development, branding, UI/UX design, SEO, social media marketing, and paid advertising through platforms like Google Ads and Meta Ads. We help businesses build their digital presence and grow online.',
  },
  {
    q: 'How much does a website cost at BuildexNow?',
    a: 'Website pricing depends on scope — the number of pages, the design work involved and the functionality you need. We share a transparent, tailored quote after a short discovery conversation, so there are no surprises later.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'A typical website takes a few weeks from discovery to launch; branding and larger product engagements take longer. We agree on a clear timeline up front and keep you in the loop at every stage.',
  },
  {
    q: 'Do you work with businesses outside Kanpur?',
    a: 'Yes. We work with teams across different markets and time zones. Most of the collaboration happens asynchronously, with scheduled calls where a conversation is more useful.',
  },
  {
    q: 'Can I hire BuildexNow for just one service?',
    a: 'Absolutely. You can start with a single service — a website, a brand identity, an SEO engagement or a paid-ads campaign — and add more as the work proves its value.',
  },
  {
    q: 'How do I get started with BuildexNow?',
    a: 'Reach out through the contact form or book a free call. We will talk about your goal, suggest the right starting point and follow up with a clear, scoped proposal.',
  },
];

export const TOOLS = ['React', 'Next.js', 'TypeScript', 'Figma', 'Tailwind', 'Node.js'] as const;

// Order and asset set mirror the reference's logo marquee exactly (10 marks,
// repeated for a seamless loop) — including Learndojo and Plentypay, which the
// earlier eight-logo static grid omitted.
export const TRUSTED_LOGOS = [
  { name: 'Oter', src: '/assets/ref/6885f15d6e8226dcdd42841f_Logo_oter_mono.png' },
  { name: 'Sift', src: '/assets/ref/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.png' },
  { name: 'Skillophy', src: '/assets/ref/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.png' },
  { name: 'Ways & Villas', src: '/assets/ref/6885f1e4306e3894a1466064_Logo_ways_mono.png' },
  { name: 'Y Combinator', src: '/assets/ref/6885f1f680fdbf02fa0eae57_Logo_Y-Combinator_mono.png' },
  { name: 'Addisoft', src: '/assets/ref/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.png' },
  { name: 'Fitmate', src: '/assets/ref/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.png' },
  { name: 'Docuseal', src: '/assets/ref/6885efa747ec9f1d1564f668_Logo_docuseal_mono.png' },
  { name: 'Learndojo', src: '/assets/ref/68dcdff13a553e58f8303e64_Logo_Learndojo_mono.png' },
  { name: 'Plentypay', src: '/assets/ref/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.png' },
];

export const CLIENTS = [
  'Staincode', 'Gravity Xpeditions', 'Vero Italy', 'Bin Farash', 'AB Bio',
  'Mantara Investments', 'Prospera UAE', 'Dar Al Shai', 'Bennex', 'Ateliex',
  'Wittelsbach', 'and more',
];

// Five unique client stories, in the order served by the reference site.
// (The live site renders them in a looping slider, so its DOM contains ten
// cards; the five below are the distinct records.)
export const TESTIMONIALS = [
  {
    tag: 'Website',
    quote: 'BuildexNow completely transformed our online presence. The new website looks premium, feels fast and has made our brand much more professional.',
    name: 'Rahul Sharma',
    role: 'Business Owner',
    initials: 'RS',
  },
  {
    tag: 'Branding',
    quote: 'What stood out was their attention to detail. From the brand identity to the final digital presence, everything felt consistent and thoughtfully designed.',
    name: 'Neha Kapoor',
    role: 'Marketing Head',
    initials: 'NK',
  },
  {
    tag: 'Social Media',
    quote: 'Our social media finally started looking like a real brand. The content became more consistent, the communication improved and we started getting much better engagement.',
    name: 'Arjun Mehta',
    role: 'Founder',
    initials: 'AM',
  },
  {
    tag: 'Paid Ads',
    quote: 'The biggest difference was the focus on results. Our campaigns became more structured, targeting improved and we finally had a much clearer view of where our ad spend was going.',
    name: 'Vikram Das',
    role: 'Director',
    initials: 'VD',
  },
  {
    tag: 'Digital Growth',
    quote: 'We were looking for more than just a website. BuildexNow helped us bring our branding, content and digital presence together into one connected system.',
    name: 'Sanya Mehta',
    role: 'Entrepreneur',
    initials: 'SM',
  },
];

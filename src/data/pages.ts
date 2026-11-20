import { Compass, Palette, Layers3, Code2, Smartphone, TrendingUp, Search, PenTool, BarChart3, Globe2, Share2, Megaphone } from 'lucide-react';

export type ServicePageData = {
  slug: string;
  label: string;
  title: string;
  description: string;
  icon: typeof Compass;
  capabilities: { title: string; body: string; icon: typeof Compass }[];
  split: { eyebrow: string; title: string; body: string; bullets: string[] };
  tabs: { label: string; title: string; body: string; points: string[] }[];
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'website-design-development',
    label: 'Website Design & Development',
    title: 'Web Design Services Built for Growth & Higher Conversions',
    description: 'We combine mobile-first design, fast page speed, and SEO-friendly code to build websites that rank well, load quickly, and convert.',
    icon: Code2,
    capabilities: [
      { title: 'Marketing sites', body: 'Landing pages and homepages that explain the value quickly and invite the right next step.', icon: Layers3 },
      { title: 'Multi-page platforms', body: 'Structured, scalable sites with a clear information architecture and a consistent visual system.', icon: Globe2 },
      { title: 'Responsive by default', body: 'Mobile-first layouts that feel intentional on every screen, not merely resized.', icon: Smartphone },
      { title: 'Conversion-focused', body: 'Clear hierarchy, considered calls to action and friction removed at the moments that matter.', icon: TrendingUp },
      { title: 'SEO-ready structure', body: 'Semantic markup, sensible headings and metadata that give your content a fair chance to be found.', icon: Search },
      { title: 'Design systems', body: 'Reusable components and tokens so the site stays coherent as your team adds to it.', icon: Palette },
    ],
    split: {
      eyebrow: 'A better starting point',
      title: 'Signs it is time for a new website partner.',
      body: 'The site looks dated, updates take too long, or the experience falls apart on a phone. If any of that sounds familiar, a considered rebuild can pay for itself quickly.',
      bullets: ['The site has grown without a clear structure', 'Updates require a developer for every change', 'Pages load slowly on mobile connections', 'The design no longer reflects the product you sell'],
    },
    tabs: [
      { label: 'Discover', title: 'Understand before designing', body: 'We map your audience, goals and content, then agree on what the site actually needs to achieve.', points: ['Stakeholder conversations', 'Content and IA review', 'Competitive reference scan'] },
      { label: 'Design', title: 'Make the important things obvious', body: 'Wireframes become high-fidelity screens with a clear hierarchy and a system behind them.', points: ['Key journey wireframes', 'High-fidelity screens', 'Reusable component library'] },
      { label: 'Build', title: 'Ship something durable', body: 'Accessible markup, quick load times and a content structure your team can work with.', points: ['Responsive implementation', 'Performance pass', 'Handover documentation'] },
    ],
  },
  {
    slug: 'seo-service',
    label: 'SEO',
    title: 'Dominate Search Results.',
    description: 'We help businesses improve their visibility across search engines through strategic SEO, technical improvements and content built around what their customers are searching for.',
    icon: Search,
    capabilities: [
      { title: 'SEO strategy & audit', body: 'An honest look at what is helping and what is holding you back, with a prioritised plan.', icon: Compass },
      { title: 'On-page SEO', body: 'Titles, headings, internal links and metadata that make each page easy to understand.', icon: PenTool },
      { title: 'Technical SEO', body: 'Crawlability, structured data, performance and the foundations search engines rely on.', icon: Code2 },
      { title: 'Local SEO', body: 'Consistent location signals and profiles that help nearby customers find you.', icon: Globe2 },
      { title: 'Content strategy', body: 'Topics grounded in real questions, mapped to the stages of your audience’s journey.', icon: BarChart3 },
      { title: 'Measurement', body: 'Dashboards and reviews that connect visibility to outcomes instead of vanity numbers.', icon: TrendingUp },
    ],
    split: {
      eyebrow: 'The essentials',
      title: 'Every part of the site matters.',
      body: 'Good SEO is the result of many small, correct decisions. We focus on the ones that compound — structure, speed, clarity and genuinely useful content.',
      bullets: ['Keyword and intent research', 'Site architecture and internal linking', 'Metadata and heading hierarchy', 'Indexing and crawlability'],
    },
    tabs: [
      { label: 'Foundation', title: 'Fix the foundations first', body: 'A fast, crawlable, well-structured site gives every other effort a better chance of working.', points: ['Technical audit', 'Core Web Vitals pass', 'Structured data'] },
      { label: 'Content', title: 'Answer real questions', body: 'We map content to intent, then write pages that are actually worth reading.', points: ['Topic mapping', 'Editorial calendar', 'On-page optimisation'] },
      { label: 'Review', title: 'Keep adjusting', body: 'Search is a moving target. Regular reviews keep the plan aligned with what the data says.', points: ['Monthly reporting', 'Rank and intent tracking', 'Iterative improvements'] },
    ],
  },
  {
    slug: 'app-development',
    label: 'App Development',
    title: 'Custom Mobile App Development',
    description: 'We design and develop mobile applications that help businesses connect with customers, simplify operations and turn ideas into useful digital products.',
    icon: Smartphone,
    capabilities: [
      { title: 'iOS & Android', body: 'Native-feeling experiences on both platforms, with the details that make each one feel at home.', icon: Smartphone },
      { title: 'Cross-platform', body: 'Shared engineering where it makes sense, without sacrificing the feel of the product.', icon: Layers3 },
      { title: 'Product design', body: 'Flows, prototypes and interfaces shaped around real thumbs and real moments.', icon: Palette },
      { title: 'Backend & data', body: 'APIs, storage and authentication built to scale with the product.', icon: Code2 },
      { title: 'Payments', body: 'Checkout and subscription flows that are clear, trustworthy and reliable.', icon: TrendingUp },
      { title: 'Care after launch', body: 'Monitoring, updates and iteration once real usage begins.', icon: Compass },
    ],
    split: {
      eyebrow: 'One idea, many devices',
      title: 'A product that fits the way people live.',
      body: 'Mobile is personal and impatient. We design for short sessions, variable networks and the small moments when an app either earns its place or gets deleted.',
      bullets: ['Fast first launch', 'Offline-aware interactions', 'Accessible, legible interfaces', 'Considered notification design'],
    },
    tabs: [
      { label: 'Define', title: 'Find the smallest useful version', body: 'We agree on the core job the app does and the smallest release that proves it.', points: ['Feature prioritisation', 'User journeys', 'Technical approach'] },
      { label: 'Design', title: 'Make it feel native', body: 'Prototypes let us test the interactions before committing to engineering.', points: ['Clickable prototype', 'Component system', 'Usability review'] },
      { label: 'Ship', title: 'Build, test, release', body: 'Iterative delivery with device testing and a rollout plan you can trust.', points: ['Device matrix testing', 'Store submission', 'Post-launch monitoring'] },
    ],
  },
  {
    slug: 'branding',
    label: 'Brand & Identity',
    title: 'Design That Makes People Stop Scrolling And Actually Look.',
    description: 'A brand is more than a logo. It is the complete experience people recognise, remember and associate with your business. We create thoughtful brand identities that bring your vision to life across every touchpoint.',
    icon: Palette,
    capabilities: [
      { title: 'Brand strategy', body: 'Positioning, voice and the idea everything else hangs from.', icon: Compass },
      { title: 'Logo & marks', body: 'Primary and secondary marks that are simple, legible and built to last.', icon: Palette },
      { title: 'Visual identity', body: 'Colour, type, imagery and graphic elements working as one language.', icon: Layers3 },
      { title: 'Guidelines', body: 'A practical reference so the brand stays consistent as more people use it.', icon: PenTool },
      { title: 'Digital application', body: 'Identity translated into interfaces, social templates and product surfaces.', icon: Smartphone },
      { title: 'Brand refresh', body: 'Evolution that keeps what works and sharpens what does not.', icon: TrendingUp },
    ],
    split: {
      eyebrow: 'More than a logo',
      title: 'A world of its own.',
      body: 'A strong identity is a system of decisions: how type behaves, how colour is used, how the voice sounds. We define those decisions so the brand holds together at every scale.',
      bullets: ['Primary & secondary marks', 'Type scale and hierarchy', 'Colour and graphic language', 'Usage guidelines'],
    },
    tabs: [
      { label: 'Think', title: 'Find the idea', body: 'We explore the positioning and personality before drawing anything.', points: ['Discovery workshop', 'Reference exploration', 'Concept direction'] },
      { label: 'Make', title: 'Build the system', body: 'The chosen direction becomes a flexible set of rules and assets.', points: ['Mark design', 'Type & colour system', 'Application samples'] },
      { label: 'Use', title: 'Put it to work', body: 'We apply the system to real touchpoints and hand over everything needed.', points: ['Digital templates', 'Brand guideline document', 'Asset library'] },
    ],
  },
  {
    slug: 'paid-ads',
    label: 'Paid Ads',
    title: 'Turn Ad Spend Into Predictable Growth',
    description: 'We build, manage and optimise high-performance Meta & Google Ads campaigns that put your brand in front of the right audience, generate qualified leads and turn advertising spend into measurable business growth.',
    icon: Megaphone,
    capabilities: [
      { title: 'Advertising strategy', body: 'Channel, audience and budget decisions grounded in the product and its market.', icon: Compass },
      { title: 'Audience research', body: 'Who to reach, what to say and where they are likely to pay attention.', icon: Globe2 },
      { title: 'Ad creative', body: 'Static and video assets designed to stop the scroll without promising what the product cannot deliver.', icon: Palette },
      { title: 'Copywriting', body: 'Clear, specific messages that match the intent behind each search or scroll.', icon: PenTool },
      { title: 'Campaign management', body: 'Setup, optimisation and a steady rhythm of testing.', icon: BarChart3 },
      { title: 'Tracking & reporting', body: 'Measurement that connects campaigns to the outcomes that matter.', icon: TrendingUp },
    ],
    split: {
      eyebrow: 'Spend with intent',
      title: 'Every campaign starts with a question.',
      body: 'Before launching anything, we agree on what success means and how we will measure it. That keeps creative decisions and budget decisions honest.',
      bullets: ['Defined objective and metric', 'Audience and intent mapping', 'Creative testing plan', 'Transparent reporting'],
    },
    tabs: [
      { label: 'Plan', title: 'Choose the right playing field', body: 'We pick channels that match the audience and the product, not the other way around.', points: ['Channel selection', 'Audience research', 'Measurement plan'] },
      { label: 'Create', title: 'Make something worth stopping for', body: 'Creative and copy are developed together and tested against the same hypothesis.', points: ['Static and video assets', 'Ad copy variants', 'Landing page alignment'] },
      { label: 'Optimise', title: 'Improve with evidence', body: 'Regular reviews, honest reporting and changes driven by what the data supports.', points: ['Weekly optimisation', 'Creative rotation', 'Clear performance reports'] },
    ],
  },
  {
    slug: 'social-media-content-marketing',
    label: 'Social & Content',
    title: 'Build An Audience That Pays Attention To Your Brand',
    description: 'We create strategic content and manage your social presence to help your brand stay consistent, build authority, connect with the right audience and turn attention into business opportunities.',
    icon: Share2,
    capabilities: [
      { title: 'Social strategy', body: 'Channels, formats and a content mix that match how your audience behaves.', icon: Compass },
      { title: 'Creative design', body: 'Posts and graphics that look like they belong to one brand, everywhere.', icon: Palette },
      { title: 'Reels & video', body: 'Short-form stories made for the way people actually watch.', icon: Smartphone },
      { title: 'Content writing', body: 'Captions and copy with a point of view — no filler, no filler hashtags.', icon: PenTool },
      { title: 'Community management', body: 'Replies and conversations handled in a voice that sounds like you.', icon: Share2 },
      { title: 'Performance review', body: 'A regular look at what resonated, so the next round is better.', icon: BarChart3 },
    ],
    split: {
      eyebrow: 'Consistency compounds',
      title: 'More than posts. A voice.',
      body: 'The brands people remember show up with a consistent point of view. We help you find yours, then make it repeatable across formats and channels.',
      bullets: ['A defined editorial voice', 'A sustainable publishing rhythm', 'Templates that keep quality high', 'Honest performance reviews'],
    },
    tabs: [
      { label: 'Listen', title: 'Understand the conversation', body: 'We look at the audience, the channels and what is already working.', points: ['Audience mapping', 'Content audit', 'Competitor reference'] },
      { label: 'Create', title: 'Build a repeatable system', body: 'A content framework and visual templates make consistency achievable.', points: ['Content pillars', 'Template library', 'Editorial calendar'] },
      { label: 'Grow', title: 'Learn from response', body: 'Regular reviews turn attention into a clearer, more effective voice.', points: ['Engagement review', 'Format experiments', 'Refined calendar'] },
    ],
  },
];

export const LEGAL_PAGES: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  'terms-conditions': {
    title: 'Terms & Conditions',
    sections: [
      { heading: 'Using this site', body: 'This website is provided for general information about BuildexNow and the services we offer. The content is not professional advice and should not be relied on as a substitute for a conversation about your specific situation.' },
      { heading: 'Engagements', body: 'The scope, timeline, fees and responsibilities for any project are agreed in a separate written proposal or agreement. Nothing on this page forms part of that agreement.' },
      { heading: 'Intellectual property', body: 'Unless otherwise agreed in writing, materials published on this site remain the property of BuildexNow. Work created for a client is governed by the terms of that client agreement.' },
      { heading: 'Changes', body: 'We may update these terms as the site and our services evolve. The current version is always the one published here.' },
      { heading: 'Contact', body: `Questions about these terms can be sent to buildexnow@gmail.com.` },
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    sections: [
      { heading: 'What we collect', body: 'When you contact us through this site, we receive the details you choose to send — typically your name, email address and the content of your message. We do not sell personal information.' },
      { heading: 'How we use it', body: 'We use those details to respond to your enquiry and to manage any engagement that follows. We keep them only as long as they are useful for that purpose.' },
      { heading: 'Analytics', body: 'We prefer privacy-friendly, aggregate measurement and avoid intrusive tracking. If analytics are enabled, they are used to understand overall site usage rather than to profile individuals.' },
      { heading: 'Your choices', body: 'You can ask us what information we hold about you, request a correction, or ask us to delete it by writing to buildexnow@gmail.com.' },
    ],
  },
  'cookies': {
    title: 'Cookie Policy',
    sections: [
      { heading: 'What cookies are', body: 'Cookies are small files stored by your browser. This site uses the minimum necessary to function and does not rely on advertising trackers.' },
      { heading: 'Essential storage', body: 'Essential storage keeps the site working as expected, for example remembering a preference you set. It cannot be switched off without affecting the site.' },
      { heading: 'Analytics', body: 'If measurement is enabled, it is aggregate and privacy-friendly. You can block cookies in your browser settings at any time.' },
    ],
  },
  'refund-policy': {
    title: 'Refund Policy',
    sections: [
      { heading: 'Project work', body: 'Project fees are governed by the payment schedule in your signed proposal. Because the work is bespoke, fees for completed and agreed stages are non-refundable.' },
      { heading: 'If something is not right', body: 'If you are unhappy with the work, tell us promptly. We will review the specific concern against the agreed scope and work with you on a reasonable remedy.' },
      { heading: 'Cancellation', body: 'Either party may end an engagement under the terms of the agreement. Work completed up to that point is invoiced at the agreed rate.' },
    ],
  },
  'delivery-policy': {
    title: 'Delivery Policy',
    sections: [
      { heading: 'Digital delivery', body: 'All work is delivered digitally. There are no physical goods shipped from this site.' },
      { heading: 'Timelines', body: 'Delivery dates are agreed in your project proposal and depend on timely feedback, content and approvals. We flag slippage early rather than at the deadline.' },
      { heading: 'Handover', body: 'At the end of an engagement we provide the agreed files, access and documentation, and walk your team through anything they need to manage.' },
    ],
  },
};

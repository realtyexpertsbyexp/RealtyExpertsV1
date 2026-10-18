export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string[];
  businessProblems: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  ctaLabel: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    name: 'Meta Ads & Performance Marketing',
    shortDesc: 'High-intent Facebook and Instagram campaigns engineered for residential, commercial, and luxury property buyers.',
    heroHeadline: 'Data-Driven Meta Advertising for High-Intent Property Buyers',
    heroSubheadline: 'Stop burning ad budget on untargeted leads. We build structured Meta campaigns with demographic filtering, creative testing, and multi-tier retargeting specifically for real estate.',
    targetAudience: ['Real Estate Developers', 'Channel Partners', 'Luxury Property Marketers'],
    businessProblems: [
      'High volume of junk or uninterested inquiries with non-working numbers',
      'Rising Cost Per Lead (CPL) without pipeline conversion',
      'Ad creative fatigue causing sharp performance drops after 2 weeks',
      'Inability to reach genuine HNI or NRI property investors'
    ],
    deliverables: [
      'Comprehensive buyer persona & audience targeting matrix',
      'High-converting ad copy, static carousels, and video ad formats',
      'Meta Instant Forms with custom qualifying logic & OTP verification hooks',
      'Pixel & Conversions API (CAPI) server-side integration',
      'A/B creative testing & audience exclusion frameworks',
      'Weekly transparent performance reports with CPA & qualification metrics'
    ],
    processSteps: [
      { title: 'Audience Architecture', desc: 'Segmenting by location intent, investment capability, lifestyle indicators, and NRI interest zones.' },
      { title: 'Asset & Creative Sprint', desc: 'Developing high-clarity architectural visuals, price-advantage hooks, and project USP messaging.' },
      { title: 'Structured Campaign Launch', desc: 'Deploying multi-adset tests across feed, stories, and reels with lead qualification fields.' },
      { title: 'Optimization & Retargeting', desc: 'Pruning low-converting segments, scaling winning adsets, and nurturing warm website visitors.' }
    ],
    faqs: [
      { question: 'How do you prevent fake or junk leads on Meta Ads?', answer: 'We implement higher-intent qualifying questions on Meta instant forms (such as budget range, purchase timeline, and preferred unit type) rather than relying on auto-filled fields, paired with CRM instant notification.' },
      { question: 'Can you target NRI buyers in GCC, US, or UK?', answer: 'Yes. We run geo-targeted NRI campaigns with localized time-zone scheduling and tailored messaging highlighting repatriation benefits, rental yields, and project delivery timelines.' }
    ],
    relatedServices: ['google-ads', 'project-marketing', 'crm-sales-automation'],
    ctaLabel: 'Discuss Meta Advertising Strategy'
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    name: 'Google Ads for Real Estate',
    shortDesc: 'Capture active property seekers at the exact moment they search for projects, locations, and developers.',
    heroHeadline: 'Capture High-Intent Search Traffic for Your Real Estate Projects',
    heroSubheadline: 'Google Search ads deliver the highest purchase intent in real estate. We manage Search, Display, and Performance Max campaigns with strict negative keyword lists to eliminate wasted spend.',
    targetAudience: ['Developers with active launches', 'Channel Partners selling premium inventory', 'Commercial leasing agencies'],
    businessProblems: [
      'Wasted spend on irrelevant searches (e.g. rent queries when selling luxury floors)',
      'High Cost Per Click (CPC) due to fierce bidding against aggregators',
      'Low landing page quality scores reducing ad rank',
      'Search leads taking too long to convert'
    ],
    deliverables: [
      'Granular keyword research focused on micro-markets & project names',
      'Extensive negative keyword lists (filtering out rentals, jobs, broker queries)',
      'High-scoring responsive search ads with all relevant extensions (callouts, sitelinks, location, call)',
      'Dedicated Google Ads landing page alignment for 9+ Quality Scores',
      'Performance Max & YouTube in-stream video campaigns for brand recall',
      'Full conversion tracking via Google Tag Manager and GA4'
    ],
    processSteps: [
      { title: 'Search Intent Mapping', desc: 'Identifying exact match and phrase match queries with explicit buying intent in specific localities.' },
      { title: 'Landing Page Alignment', desc: 'Ensuring 1:1 message match between ad copy and landing page headlines for maximum conversion rate.' },
      { title: 'Bid Strategy Calibration', desc: 'Utilizing Target CPA and Maximize Conversions bidding once statistically valid conversion data is gathered.' },
      { title: 'Continuous Search Term Pruning', desc: 'Daily reviews of search terms to block non-buyer traffic and double down on top converting terms.' }
    ],
    faqs: [
      { question: 'Why choose Google Ads over Meta Ads for real estate?', answer: 'Google Ads captures active demand from people currently searching for 3 BHK in Noida or Commercial Space in Lucknow, whereas Meta generates passive demand. Combining both creates a comprehensive capture and nurture ecosystem.' },
      { question: 'Do you manage competitor brand bidding?', answer: 'We strategize both defensive campaigns (protecting your project name) and selective alternative-intent campaigns within legal and platform guidelines.' }
    ],
    relatedServices: ['meta-ads', 'websites-landing-pages', 'real-estate-seo'],
    ctaLabel: 'Plan Your Google Ads Campaign'
  },
  {
    id: 'social-media',
    slug: 'social-media',
    name: 'Real Estate Social Media Marketing',
    shortDesc: 'Build an authoritative, trustworthy brand presence across Instagram, LinkedIn, and YouTube.',
    heroHeadline: 'Strategic Social Media That Builds Long-Term Real Estate Authority',
    heroSubheadline: 'Real estate is a high-trust purchase. We curate polished organic content, video walkthroughs, market updates, and leadership insights that convert casual followers into warm prospects.',
    targetAudience: ['Real Estate Builders', 'Channel Partner Firms', 'Independent Consultants'],
    businessProblems: [
      'Inconsistent posting with low organic engagement',
      'Generic flyer posts that look like every other broker page',
      'No clear brand voice or visual identity',
      'Social profiles that fail to reflect project quality or agency stature'
    ],
    deliverables: [
      'Monthly strategic content calendars aligned with sales milestones',
      'High-aesthetic static & carousel graphic designs matching brand identity',
      'Short-form video scripts (Reels & Shorts) for construction updates and amenities',
      'LinkedIn executive positioning for company leadership and developers',
      'Community management and direct message enquiry triaging',
      'Monthly analytics review detailing reach, profile visits, and inbound inquiries'
    ],
    processSteps: [
      { title: 'Brand Aesthetic Definition', desc: 'Establishing typographic hierarchy, palette guidelines, and professional image treatments.' },
      { title: 'Content Pillar Construction', desc: 'Balancing educational market insights, project spotlights, construction updates, and buyer testimonials.' },
      { title: 'Production & Scheduling', desc: 'Publishing optimized reels, carousels, and thought-leadership articles during peak engagement windows.' },
      { title: 'Inbound Conversation Routing', desc: 'Promptly qualifying and directing DM inquiries straight to your phone or sales team.' }
    ],
    faqs: [
      { question: 'Can organic social media generate real property sales?', answer: 'Yes, when used to build credibility. Most buyers who see a paid ad will research your Instagram or LinkedIn before visiting the site office. A polished profile dramatically increases visit show-up rates.' },
      { question: 'Do you visit site locations to shoot content?', answer: 'We coordinate with your on-site teams or provide structured shot lists and remote production guidelines, and can arrange dedicated video production sprints.' }
    ],
    relatedServices: ['video-creative-production', 'marketing-strategy-consulting', 'meta-ads'],
    ctaLabel: 'Elevate Your Social Presence'
  },
  {
    id: 'project-marketing',
    slug: 'project-marketing',
    name: 'Real Estate Project Marketing',
    shortDesc: 'End-to-end launch and sustainment marketing strategies for residential and commercial developments.',
    heroHeadline: 'Comprehensive Project Marketing from Pre-Launch to Sell-Out',
    heroSubheadline: 'Transform your development into a recognized landmark. We handle positioning, launch orchestrations, multi-channel media buys, site-branding, and sales collateral.',
    targetAudience: ['Real Estate Developers', 'Sole Selling Partners', 'Master Channel Partners'],
    businessProblems: [
      'Slow inventory absorption during post-launch sustainment phase',
      'Unclear differentiation in crowded micro-markets',
      'Misalignment between digital marketing and the on-site sales experience',
      'High dependence on uncoordinated channel partner promotions'
    ],
    deliverables: [
      'Comprehensive Project Marketing Dossier (USP, pricing strategy, buyer archetypes)',
      'Launch timeline roadmap: Teaser, Pre-Launch, Grand Launch, and Sustainment',
      'Full marketing collateral suite: digital brochures, pitch decks, floor plan sheets',
      'Integrated digital media buy across Google, Meta, and programmatic platforms',
      'Channel Partner sales enablement toolkits & digital marketing assets',
      'Real-time CRM lead attribution dashboard'
    ],
    processSteps: [
      { title: 'Project DNA & Positioning', desc: 'Deep-dive analysis of location advantages, competitor pricing, specifications, and buyer motivations.' },
      { title: 'Campaign Architecture', desc: 'Orchestrating phased media rollouts to build pre-launch anticipation and create urgency.' },
      { title: 'Omnichannel Activation', desc: 'Simultaneous deployment of performance ads, PR messaging, influencer walkthroughs, and CP kits.' },
      { title: 'Velocity Monitoring', desc: 'Monitoring unit absorption weekly and reallocating budget toward top-performing inventory tiers.' }
    ],
    faqs: [
      { question: 'When should a developer bring in Realty Experts for a project?', answer: 'Ideally 4 to 8 weeks before RERA launch. This allows sufficient time to develop collateral, build microsites, coordinate creative assets, and execute a structured teaser campaign.' },
      { question: 'Do you handle both residential and commercial projects?', answer: 'Yes. We have specialized messaging frameworks for residential homebuyers (lifestyle, connectivity, amenities) and commercial investors (rental yield, pre-lease commitments, capital appreciation).' }
    ],
    relatedServices: ['websites-landing-pages', 'video-creative-production', 'complete-marketing-outsourcing'],
    ctaLabel: 'Discuss Your Project Launch'
  },
  {
    id: 'websites-landing-pages',
    slug: 'websites-landing-pages',
    name: 'Website Development & Landing Pages',
    shortDesc: 'Fast, mobile-optimized, conversion-focused websites engineered to turn traffic into qualified project site visits.',
    heroHeadline: 'High-Converting Real Estate Websites & Project Microsites',
    heroSubheadline: 'Generic WordPress templates leak high-value real estate leads. We engineer custom, ultra-fast websites with intuitive unit browsers, floor plan downloads, and friction-free lead capture.',
    targetAudience: ['Real Estate Developers', 'Channel Partner Organizations', 'Property Consultants'],
    businessProblems: [
      'Slow mobile page load times causing high bounce rates on ad traffic',
      'Cluttered layouts that confuse buyers instead of driving inquiries',
      'Poor mobile responsiveness making floor plans impossible to view',
      'Lack of proper analytics tracking and CRM lead webhook triggers'
    ],
    deliverables: [
      'Custom project landing pages with sub-second loading performance',
      'Interactive floor plan viewers, master layouts, and price breakdown tables',
      'Direct WhatsApp click-to-chat with pre-filled unit configuration details',
      'RERA compliance disclosures and clear project disclaimers',
      'Mobile-first responsive design tested across all screen viewports',
      'Instant CRM webhooks and email notification triggers'
    ],
    processSteps: [
      { title: 'Wireframing & Conversion Flow', desc: 'Designing information hierarchy around the high-intent buyer journey: Location -> Specs -> Floor Plans -> Pricing -> Visit Request.' },
      { title: 'Visual & UI Design', desc: 'Creating clean architectural interfaces with high legibility and refined typography.' },
      { title: 'Engineering & Speed Optimization', desc: 'Clean semantic code, WebP image compression, and zero bloat for maximum Core Web Vitals scores.' },
      { title: 'Tracking & CRM Integration', desc: 'Setting up GA4 event tags, form tracking, and instantaneous lead delivery endpoints.' }
    ],
    faqs: [
      { question: 'How quickly can a project landing page be launched?', answer: 'Standard project landing pages with approved assets and floor plans are typically designed, approved, and deployed in 3 to 5 business days.' },
      { question: 'Are the landing pages compliant with RERA regulations?', answer: 'Yes. We ensure all official RERA registration numbers, QR codes, disclaimers, and developer credentials are prominently and accurately presented.' }
    ],
    relatedServices: ['meta-ads', 'google-ads', 'crm-sales-automation'],
    ctaLabel: 'Build Your High-Converting Page'
  },
  {
    id: 'real-estate-seo',
    slug: 'real-estate-seo',
    name: 'Real Estate SEO & Local Visibility',
    shortDesc: 'Dominate organic search rankings for project keywords, micro-market searches, and local commercial intent.',
    heroHeadline: 'Sustainable Organic Search Rankings for Real Estate Keywords',
    heroSubheadline: 'Stop relying solely on paid ads. We build long-term search visibility through technical optimization, micro-market content hubs, and Google Business Profile domination in Noida, Lucknow, and key regions.',
    targetAudience: ['Developers seeking organic visibility', 'Channel Partners building localized authority', 'Commercial leasing consultancies'],
    businessProblems: [
      'Complete invisibility on Google organic search results',
      'Aggregator portals dominating all high-volume search terms',
      'Poorly configured Google Business Profiles missing high-intent local calls',
      'Technical SEO debt and broken links on legacy real estate websites'
    ],
    deliverables: [
      'Comprehensive keyword mapping across micro-markets (e.g., Sector 150 Noida, Gomti Nagar Lucknow)',
      'Schema.org structured data (RealEstateListing, Organization, FAQ, LocalBusiness)',
      'Google Business Profile audit, optimization, and local review strategy',
      'On-page content optimization for project pages and location guides',
      'Technical SEO audit addressing Core Web Vitals, mobile usability, and crawlability',
      'Ethical, high-authority backlink acquisition within industry publications'
    ],
    processSteps: [
      { title: 'Technical Audit & Remediation', desc: 'Fixing crawl errors, slow render speeds, and mobile layout shifts.' },
      { title: 'Micro-Market Content Architecture', desc: 'Developing in-depth locality guides, infrastructure updates, and project comparison guides.' },
      { title: 'Local Search Optimization', desc: 'Calibrating NAP citations, geo-tagged imagery, and verified local profile positioning.' },
      { title: 'Authority & Link Building', desc: 'Securing citations and PR mentions across verified regional and real estate platforms.' }
    ],
    faqs: [
      { question: 'How long does real estate SEO take to show ranking improvements?', answer: 'Noticeable rank improvements for micro-market and long-tail terms typically appear within 60 to 90 days. High-competition generic keywords require 4 to 6 months of disciplined execution.' },
      { question: 'Can an independent agency outrank major property portals?', answer: 'Yes, specifically for localized, high-specificity search intent, brand name queries, and dedicated project review searches where aggregators offer thin or generic content.' }
    ],
    relatedServices: ['websites-landing-pages', 'marketing-strategy-consulting', 'google-ads'],
    ctaLabel: 'Request an SEO Audit'
  },
  {
    id: 'video-creative-production',
    slug: 'video-creative-production',
    name: 'Video Production & Creative Content',
    shortDesc: 'High-impact property walkthroughs, drone perspectives, cinematic project reels, and conversion ad creatives.',
    heroHeadline: 'Cinematic Visuals & Video That Sell High-Value Property',
    heroSubheadline: 'Property is sold through emotion and spatial clarity. We produce professional property walkthroughs, site progress updates, developer interviews, and dynamic ad creatives that command attention.',
    targetAudience: ['Real Estate Builders', 'Channel Partners', 'Luxury Independent Brokers'],
    businessProblems: [
      'Shaky, amateur phone videos that diminish project value',
      'Creative stagnation in paid campaigns leading to low click-through rates',
      'Out-of-station and NRI buyers unable to visualize unit layouts or construction status',
      'Lack of engaging video content for YouTube and Instagram Reels'
    ],
    deliverables: [
      'Full production scripts, storyboards, and shot lists',
      'Cinematic walkthrough videos with professional voiceover and lower thirds',
      'Short-form vertical video edits (Reels/Shorts) engineered for viral social reach',
      'Construction progress videos showcasing monthly project velocity',
      'High-converting video ad edits with strong 3-second visual hooks',
      'Digital brochure design, floor plan schematics, and sales pitch decks'
    ],
    processSteps: [
      { title: 'Concept & Storyboarding', desc: 'Defining the visual narrative: location connectivity, luxury finishes, community amenities, and pricing.' },
      { title: 'Shoot Direction & Coordination', desc: 'Organizing professional filming schedules, drone clearances, and walkthrough sequences.' },
      { title: 'Post-Production & Editing', desc: 'Color grading, architectural stabilization, motion graphics, and multi-format aspect ratios (16:9, 9:16, 1:1).' },
      { title: 'Campaign Integration', desc: 'Packaging video assets specifically for Meta ads, YouTube discovery, and WhatsApp sales follow-ups.' }
    ],
    faqs: [
      { question: 'What formats do you deliver video assets in?', answer: 'We deliver all videos in multiple tailored formats: 9:16 vertical for Instagram Reels/YouTube Shorts, 16:9 widescreen for YouTube/microsites, and 1:1 square for feed ads.' },
      { question: 'Can you work with existing footage provided by our team?', answer: 'Yes. We offer post-production and creative editing packages that transform raw site footage and photos into polished, branded marketing videos.' }
    ],
    relatedServices: ['social-media', 'meta-ads', 'project-marketing'],
    ctaLabel: 'Explore Video Production'
  },
  {
    id: 'marketing-strategy-consulting',
    slug: 'marketing-strategy-consulting',
    name: 'Marketing Strategy & Consulting',
    shortDesc: 'Senior-level commercial marketing strategy, competitor benchmarking, buyer persona definition, and budget allocation.',
    heroHeadline: 'Strategic Advisory for Real Estate Leadership & Developers',
    heroSubheadline: 'Before spending millions on advertising, ensure your positioning, pricing perception, and go-to-market plan are commercially sound. We provide actionable, data-backed strategic consulting.',
    targetAudience: ['Real Estate Promoters & MDs', 'Heads of Sales & Marketing', 'Channel Partner Founders'],
    businessProblems: [
      'High marketing spend with unpredictable sales results',
      'Internal marketing teams working in silos without unified strategy',
      'Unclear positioning against competing developments next door',
      'Lack of clear attribution between digital channels and final registry/bookings'
    ],
    deliverables: [
      'Micro-market competitor analysis and buyer sentiment research',
      'Target buyer persona profiles and purchasing triggers',
      'Annual or project-based marketing budget allocation model',
      'Channel partner commission and digital co-marketing frameworks',
      'Marketing and sales alignment playbook for on-site closing teams',
      'Quarterly executive review and strategy recalibration'
    ],
    processSteps: [
      { title: 'Discovery & Commercial Audit', desc: 'Deep examination of historical sales velocity, channel performance, and past marketing expenses.' },
      { title: 'Market & Competitor Benchmarking', desc: 'Analyzing competing inventory, amenities, pricing structures, and promotional intensity.' },
      { title: 'Strategy Blueprint Formulation', desc: 'Constructing actionable playbooks with channel budgets, expected CPLs, and conversion benchmarks.' },
      { title: 'Execution Governance', desc: 'Ongoing oversight and executive guidance to ensure marketing partners and in-house teams deliver.' }
    ],
    faqs: [
      { question: 'How is consulting different from full-service execution?', answer: 'Consulting focuses on strategic architecture, positioning, budgeting, and performance audits for businesses with internal teams or multiple agencies. Our execution services handle daily campaign management.' },
      { question: 'Do you offer one-time marketing audits?', answer: 'Yes. We provide comprehensive Real Estate Digital Marketing Audits evaluating your current campaigns, website, CRM workflows, and lead handling processes.' }
    ],
    relatedServices: ['complete-marketing-outsourcing', 'project-marketing', 'crm-sales-automation'],
    ctaLabel: 'Request a Strategic Consultation'
  },
  {
    id: 'crm-sales-automation',
    slug: 'crm-sales-automation',
    name: 'CRM & Sales Automation',
    shortDesc: 'Plug lead leaks. Automated lead routing, WhatsApp notifications, follow-up cadences, and conversion tracking.',
    heroHeadline: 'Eliminate Lead Leakage with Connected Real Estate Automation',
    heroSubheadline: 'Generating leads is only half the battle. A lead contacted in 5 minutes is 21x more likely to enter the sales pipeline. We connect your marketing campaigns directly to smart CRM workflows and WhatsApp triggers.',
    targetAudience: ['Real Estate Sales Teams', 'Channel Partners managing high lead volumes', 'Builders with multi-member sales floors'],
    businessProblems: [
      'Slow response times to new inquiries leading to lost deals',
      'Sales executives failing to log follow-up notes consistently',
      'Leads slipping through the cracks between marketing and sales teams',
      'No clear visibility on which marketing channel generated actual site visits'
    ],
    deliverables: [
      'Instant lead routing from Meta, Google, and website to your sales CRM',
      'Automated WhatsApp instant greeting with digital brochure attachment',
      'Lead qualification workflows (budget, timeframe, preference tags)',
      'Sales team SLA alerts for uncontacted leads within 15 minutes',
      'Re-engagement automated cadences for cold or uncontacted leads',
      'Closed-loop reporting connecting ad spend to physical site visits and bookings'
    ],
    processSteps: [
      { title: 'Pipeline Mapping', desc: 'Defining the exact sales stages: New Lead -> Contacted -> Qualified -> Site Visit Scheduled -> Visited -> Negotiating -> Booked.' },
      { title: 'Webhook & API Configuration', desc: 'Integrating lead sources directly into your chosen CRM (HubSpot, LeadSquared, Sell.Do, Zoho, or custom systems).' },
      { title: 'WhatsApp & SMS Workflow Setup', desc: 'Configuring immediate automated follow-ups and site visit reminder sequences.' },
      { title: 'Sales Training & SLA Auditing', desc: 'Training your tele-calling and sales representatives on speed-to-lead best practices.' }
    ],
    faqs: [
      { question: 'Which CRMs do you integrate with?', answer: 'We work with all leading real estate CRMs including LeadSquared, Sell.Do, Zoho CRM, Salesforce, HubSpot, and custom webhook-based databases.' },
      { question: 'Can you set up official WhatsApp Business API integration?', answer: 'Yes. We configure verified WhatsApp Business API integrations with automated templates, brochure delivery, and two-way agent chat assignment.' }
    ],
    relatedServices: ['meta-ads', 'google-ads', 'websites-landing-pages'],
    ctaLabel: 'Streamline Your Sales Pipeline'
  },
  {
    id: 'complete-marketing-outsourcing',
    slug: 'complete-marketing-outsourcing',
    name: 'Complete Marketing Outsourcing',
    shortDesc: 'A full-service, dedicated real estate marketing department functioning as an extension of your company.',
    heroHeadline: 'Your Full Real Estate Digital Marketing Department',
    heroSubheadline: 'Hiring, managing, and coordinating separate designers, media buyers, SEO specialists, copywriters, and video editors is expensive and inefficient. Realty Experts provides your entire specialized real estate marketing department.',
    targetAudience: ['Developers without an in-house digital team', 'Growing Channel Partner firms', 'Property conglomerates'],
    businessProblems: [
      'High overhead of recruiting, training, and retaining specialized real estate marketing talent',
      'Fragmented execution between multiple freelance vendors and disjointed agencies',
      'Lack of accountability for overall sales pipeline performance',
      'Executive time wasted managing marketing mechanics instead of closing deals'
    ],
    deliverables: [
      'Dedicated Account Director and dedicated real estate media buying squad',
      'Unlimited design and creative production capacity for campaigns and collateral',
      'Full management of paid search, social ads, SEO, website, and CRM integrations',
      'Weekly strategic executive syncs and transparent real-time KPI reporting',
      'On-site event and launch marketing support',
      'Predictable, cost-effective retainer model with aligned commercial incentives'
    ],
    processSteps: [
      { title: 'Onboarding & Asset Absorption', desc: 'Complete audit of existing brand guidelines, past campaign data, current inventory, and sales processes.' },
      { title: 'Squad Alignment & Roadmap', desc: 'Assigning dedicated specialists across performance marketing, design, copywriting, and CRM integration.' },
      { title: 'Integrated Execution', desc: 'Managing all daily digital marketing operations with zero friction for your executive leadership.' },
      { title: 'Continuous Commercial Review', desc: 'Evaluating unit absorption rates and continuously steering strategy to maximize ROI.' }
    ],
    faqs: [
      { question: 'How is complete outsourcing structured?', answer: 'We operate on a predictable monthly retainer model that covers all strategy, creative design, media management, SEO, and CRM automation, with transparent media spend billed directly to your ad accounts.' },
      { question: 'Do we still need an internal marketing point of contact?', answer: 'You typically only need one internal coordinator or sales director to approve key collateral and coordinate site updates. We handle all strategic formulation and tactical execution.' }
    ],
    relatedServices: ['marketing-strategy-consulting', 'project-marketing', 'crm-sales-automation'],
    ctaLabel: 'Discuss Complete Outsourcing'
  }
];

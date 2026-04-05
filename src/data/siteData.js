export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Peak Automotive Body Shop",
    legalName: "Peak Automotive Body Shop",
    tagline: "Peak Performance in Auto Body Repair",
    description: "Peak Automotive Body Shop delivers precision collision repair and spray painting from our Graniteside workshop. Insurance-approved, warranty-backed, and committed to getting you back on the road looking factory-fresh.",
    phone: "+263 77 761 2873",
    phoneRaw: "+263777612873",
    whatsappNumber: "263777612873",
    email: "info@peakautobody.co.zw",
    address: "Seke Rd Graniteside, 16911 Old SPCA, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 1,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "2800+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "peak-automotive-body-shop-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Peak",
    logoLine2: "Automotive Body",
  },

  hero: {
    badge: "Graniteside's Premium Auto Body Workshop",
    titleParts: [
      { text: "PEAK" },
      { text: "PRECISION", highlight: true },
      { text: "IN EVERY FINISH." },
    ],
    subtitle: "Peak Automotive Body Shop delivers precision collision repair and spray painting from our Graniteside workshop. Insurance-approved, warranty-backed, and committed to getting you back on the road looking factory-fresh.",
    ctaPrimary: "Free Assessment",
    ctaSecondary: "View Our Work",
    trustBadge: "2800+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Professional auto body workshop" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "Car being repaired in body shop" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Restored vehicle gleaming finish" },
    ],
  },

  stats: [
    { number: "2800+", label: "Vehicles Repaired" },
    { number: "8+", label: "Years of Expertise" },
    { number: "100%", label: "Insurance Approved" },
    { number: "5", label: "Google Rating" },
  ],

  servicesPreview: [
    { title: "Collision Repair", desc: "Complete structural and cosmetic repair for accident-damaged vehicles. Insurance-approved workmanship.", icon: "Star" },
    { title: "Spray Painting", desc: "Factory-match colour mixing and professional spray booths for flawless, durable paint finishes.", icon: "Heart" },
    { title: "Dent Removal", desc: "Paintless dent repair for minor dings and hail damage. Preserves your original factory paint.", icon: "Briefcase" },
    { title: "Frame Straightening", desc: "Computerised frame alignment to restore your vehicle's structural integrity after a collision.", icon: "Buildings" },
    { title: "Insurance Claims", desc: "We handle the entire insurance claims process. Assessment, quotation, authorisation, and direct billing.", icon: "Lightbulb" },
    { title: "Custom Bodywork", desc: "Body kit installation, wide-body conversions, and custom fabrication for the car enthusiast.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "Collision Repair",
        slug: "collision-repair",
        desc: "When accidents happen, you need a panel shop that restores your vehicle to its pre-accident condition -- not just cosmetically, but structurally. Our collision repair team uses manufacturer-approved techniques and premium materials to ensure every repair meets factory specifications.",
        features: ["Structural Repair", "Panel Replacement", "Bumper Repair", "Headlight Restoration", "Insurance Approved", "Written Warranty"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      },
      {
        title: "Spray Painting",
        slug: "spray-painting",
        desc: "Our computerised colour-matching system and professional downdraft spray booths deliver paint finishes indistinguishable from factory. Whether it is a single panel blend or a full respray, we use premium automotive paints with UV protection and clear coat durability.",
        features: ["Colour Matching", "Full Respray", "Panel Blending", "Clear Coat", "Metallic & Pearl", "Matte Finishes"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      },
      {
        title: "Dent Removal",
        slug: "dent-removal",
        desc: "Not every dent needs paint. Our paintless dent repair technicians use specialist tools to massage minor dents and dings back to their original shape, preserving your factory paint and saving you time and money.",
        features: ["Paintless Repair", "Hail Damage", "Door Dings", "Crease Removal", "Same-Day Service", "Paint Preserved"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
      {
        title: "Frame Straightening",
        slug: "frame-straightening",
        desc: "A bent frame compromises your vehicle's safety, handling, and tyre wear. Our computerised frame bench measures and corrects misalignment to manufacturer tolerances, restoring your vehicle's structural integrity.",
        features: ["Laser Measurement", "Hydraulic Correction", "Unibody & Chassis", "Tolerance Certified", "Safety Restored", "Alignment Check"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      },
      {
        title: "Insurance Claims",
        slug: "insurance-claims",
        desc: "Dealing with insurance after an accident is stressful. We remove that burden entirely. Our claims department handles assessment, quotation, authorisation, and direct billing with every major insurer in Zimbabwe.",
        features: ["All Insurers", "Free Assessment", "Direct Billing", "Courtesy Updates", "Towing Arranged", "Fast Processing"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      },
      {
        title: "Custom Bodywork",
        slug: "custom-bodywork",
        desc: "For car enthusiasts who want something unique. We install body kits, fabricate custom panels, widen arches, and create one-of-a-kind bodywork modifications with the same precision we bring to collision repair.",
        features: ["Body Kit Fitting", "Custom Fabrication", "Wide-Body Kits", "Spoiler Install", "Fiberglass Work", "Show Preparation"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "Complete Side Restoration",
        slug: "complete-side-restoration",
        category: "Collision",
        location: "Harare, Zimbabwe",
        desc: "Full side panel replacement and paint matching on a 2022 Toyota Hilux after T-bone collision.",
        client: "Insurance Claim",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"],
      },
      {
        title: "Fleet Respray Contract",
        slug: "fleet-respray-contract",
        category: "Painting",
        location: "Harare, Zimbabwe",
        desc: "Resprayed 12 delivery vans in corporate livery with 3-year durability guarantee.",
        client: "Logistics Company",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"],
      },
      {
        title: "Classic Car Restoration",
        slug: "classic-car-restoration",
        category: "Custom",
        location: "Harare, Zimbabwe",
        desc: "Full body restoration of a 1975 Datsun 240Z including rust repair, panel fabrication, and show-quality paint.",
        client: "Private Collector",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"],
      },
      {
        title: "Hail Damage Batch",
        slug: "hail-damage-batch",
        category: "Dent Repair",
        location: "Harare, Zimbabwe",
        desc: "Paintless dent removal on 20+ vehicles following a severe hailstorm in Borrowdale.",
        client: "Insurance Batch",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"],
      },
      {
        title: "Frame Straightening Save",
        slug: "frame-straightening-save",
        category: "Structural",
        location: "Harare, Zimbabwe",
        desc: "Computerised frame correction on a BMW 3 Series that saved the vehicle from write-off.",
        client: "Insurance Claim",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"],
      },
      {
        title: "Custom Wide-Body Build",
        slug: "custom-wide-body-build",
        category: "Custom",
        location: "Harare, Zimbabwe",
        desc: "Wide-body kit fabrication and installation on a Nissan GTR for a local car enthusiast.",
        client: "Private Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "Peak Automotive Body Shop repaired my car after a serious collision and you honestly cannot tell it was ever in an accident. The paint match is perfect and the finish is flawless.", name: "Tendai Maposa", role: "Insurance Claim Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We send all our fleet vehicles to Peak Automotive Body Shop for body repairs. Their turnaround time is the best in Harare and the quality is consistently excellent.", name: "Grace Nhamo", role: "Fleet Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Had my classic car restored by Peak Automotive Body Shop and the attention to detail was extraordinary. They treated it like their own and the result is show-quality.", name: "Robert Chimedza", role: "Classic Car Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "After the hailstorm, Peak Automotive Body Shop removed every dent from my car without repainting. Saved me a fortune and the car looks brand new again.", name: "Farai Mutizwa", role: "Hail Damage Client", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "Peak Automotive Body Shop has operated from our Graniteside workshop since 2016, delivering auto body repairs that meet the highest standards. Our name is our promise -- peak quality in every repair.",
      "With 2,800+ successful repairs and approval from Zimbabwe's major insurance companies, we have earned our reputation as one of Harare's most reliable body shops.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading Peak Automotive Body Shop with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "Peak Automotive Body Shop repaired my car after a serious collision and you honestly cannot tell it was ever in an accident. The paint match is perfect and the finish is flawless.", name: "Tendai Maposa", role: "Insurance Claim Client", rating: 5 },
      { text: "We send all our fleet vehicles to Peak Automotive Body Shop for body repairs. Their turnaround time is the best in Harare and the quality is consistently excellent.", name: "Grace Nhamo", role: "Fleet Manager", rating: 5 },
      { text: "Had my classic car restored by Peak Automotive Body Shop and the attention to detail was extraordinary. They treated it like their own and the result is show-quality.", name: "Robert Chimedza", role: "Classic Car Owner", rating: 5 },
      { text: "After the hailstorm, Peak Automotive Body Shop removed every dent from my car without repainting. Saved me a fortune and the car looks brand new again.", name: "Farai Mutizwa", role: "Hail Damage Client", rating: 5 },
      { text: "Turnaround time was incredible. Peak Automotive Body Shop had my car back in 4 days looking better than before the accident.", name: "Simba Karonga", role: "Quick Turnaround Client", rating: 5 },
      { text: "Insurance claim was handled entirely by Peak Automotive Body Shop. I did not have to make a single phone call to the insurer.", name: "Douglas Mhizha", role: "Insurance Client", rating: 5 },
      { text: "The custom bodywork Peak Automotive Body Shop did on my project car is magazine-worthy. True artisans.", name: "Linda Masuku", role: "Custom Car Client", rating: 5 },
      { text: "Fair pricing and no hidden charges. Peak Automotive Body Shop quoted accurately and the final bill matched exactly.", name: "Patrick Makoni", role: "Budget-Conscious Client", rating: 5 },
      { text: "My bumper repair was done same day. Quick, clean, and affordable. Could not ask for more.", name: "Angela Mhembere", role: "Minor Repair Client", rating: 5 },
      { text: "The spray booth at Peak Automotive Body Shop produces finishes that are genuinely indistinguishable from factory paint.", name: "Brian Mutema", role: "Full Respray Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "Seke Rd Graniteside, 16911 Old SPCA, Harare, Zimbabwe", phone: "+263 77 761 2873", email: "info@peakautobody.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR VEHICLE, AT ITS PEAK",
    subtitle: "Peak Automotive Body Shop delivers precision collision repair and spray painting from our Graniteside workshop. Insurance-approved, warranty-backed, and committed to getting you back on the road looking factory-fresh.",
    ctaPrimary: "Free Assessment",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Peak! I need an assessment for body repair.",
    backgroundImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85",
  },

  footer: {
    description: "Peak Automotive Body Shop delivers precision collision repair and spray painting from our Graniteside workshop. Insuranc...",
    copyright: "Peak Automotive Body Shop",
  },
};

export default siteData;
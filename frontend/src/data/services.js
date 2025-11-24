// Services Data - SEO-optimized service listings
export const serviceCategories = [
  "Wellness",
  "Surgery",
  "Diagnostics",
  "Dental",
  "Emergency",
  "Grooming",
  "Vaccinations",
  "Microchipping",
  "Behavior"
];

export const servicesData = [
  {
    id: "wellness-exams",
    slug: "wellness-exams",
    category: "Wellness",
    title: "Wellness Exams",
    shortDescription: "Comprehensive preventive care to keep your dog healthy and happy throughout every life stage with thorough physical examinations.",
    duration: "30-45 minutes",
    priceRange: "$75-$150",
    image: "https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg",
    featured: true,
    metaTitle: "Dog Wellness Exams | Pet Planet Dog Clinic San Francisco",
    metaDescription: "Comprehensive wellness exams for dogs in San Francisco. Preventive care, health screenings, and expert veterinary consultations. Book your appointment today.",
    fullDescription: `Our comprehensive wellness exams are designed to catch potential health issues early and keep your dog in optimal health. During each visit, our experienced veterinarians perform a thorough physical examination, checking vital signs, teeth, ears, eyes, skin, and internal organs.`,
    whatToExpect: [
      "Complete physical examination from nose to tail",
      "Vital signs monitoring (temperature, heart rate, respiration)",
      "Dental health assessment",
      "Weight and body condition evaluation",
      "Discussion of nutrition, behavior, and lifestyle",
      "Vaccination review and updates if needed",
      "Parasite screening and prevention recommendations"
    ],
    beforeCare: [
      "Bring any previous medical records",
      "List current medications and supplements",
      "Note any behavioral or health changes",
      "Bring a fresh stool sample if possible",
      "Have your dog fasted if bloodwork is planned"
    ],
    afterCare: [
      "Follow any medication instructions provided",
      "Schedule follow-up appointments as recommended",
      "Monitor for any changes in behavior or appetite",
      "Contact us immediately if concerns arise"
    ],
    faqs: [
      {
        question: "How often should my dog have a wellness exam?",
        answer: "Adult dogs should have annual wellness exams. Puppies need more frequent visits (every 3-4 weeks until 16 weeks), and senior dogs benefit from bi-annual checkups."
      },
      {
        question: "What should I bring to the appointment?",
        answer: "Bring previous medical records, current medications, a list of questions, and a fresh stool sample if possible. Also bring treats and a leash or carrier."
      },
      {
        question: "Are vaccinations included in wellness exams?",
        answer: "Vaccinations are reviewed during wellness exams and administered if needed. Core vaccines and lifestyle-specific vaccines are discussed based on your dog's needs."
      }
    ],
    relatedServices: ["vaccinations", "dental-cleaning", "senior-care"]
  },
  {
    id: "vaccinations",
    slug: "vaccinations",
    category: "Vaccinations",
    title: "Dog Vaccinations",
    shortDescription: "Complete immunization services to protect your pet from preventable diseases with core and lifestyle-specific vaccines.",
    duration: "15-30 minutes",
    priceRange: "$25-$100 per vaccine",
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg",
    featured: true,
    metaTitle: "Dog Vaccinations San Francisco | Core & Lifestyle Vaccines",
    metaDescription: "Protect your dog with essential vaccinations. Core vaccines (Rabies, Distemper, Parvo) and lifestyle vaccines. Expert veterinary care in San Francisco.",
    fullDescription: `Vaccinations are one of the most important preventive measures you can take to protect your dog's health. Our comprehensive vaccination program includes core vaccines that every dog needs and lifestyle vaccines tailored to your dog's specific risk factors and activities.`,
    whatToExpect: [
      "Review of vaccination history and schedule",
      "Brief health examination before vaccination",
      "Administration of recommended vaccines",
      "Monitoring for immediate reactions (15-20 minutes)",
      "Updated vaccination certificate",
      "Schedule for next vaccines or boosters"
    ],
    beforeCare: [
      "Ensure your dog is feeling well (no fever or illness)",
      "Bring previous vaccination records",
      "Inform us of any previous vaccine reactions",
      "Have your dog well-rested before the visit"
    ],
    afterCare: [
      "Monitor for mild side effects (lethargy, mild fever)",
      "Avoid strenuous activity for 24 hours",
      "Contact us if severe reactions occur (vomiting, facial swelling)",
      "Keep vaccination records in a safe place"
    ],
    faqs: [
      {
        question: "What are core vaccines for dogs?",
        answer: "Core vaccines include Rabies, Distemper, Parvovirus, and Adenovirus. These protect against serious, potentially fatal diseases and are recommended for all dogs."
      },
      {
        question: "What are lifestyle vaccines?",
        answer: "Lifestyle vaccines include Bordetella (kennel cough), Lyme disease, Leptospirosis, and Canine Influenza. These are recommended based on your dog's exposure risk and activities."
      },
      {
        question: "Are there side effects from vaccines?",
        answer: "Most dogs experience no side effects. Some may have mild lethargy or soreness at injection site for 24-48 hours. Serious reactions are rare but require immediate veterinary attention."
      }
    ],
    relatedServices: ["wellness-exams", "puppy-care", "microchipping"]
  },
  {
    id: "dental-cleaning",
    slug: "dental-cleaning",
    category: "Dental",
    title: "Professional Dental Cleaning",
    shortDescription: "Professional dental cleaning and oral health services to prevent tooth decay, gum disease, and maintain your dog's overall health.",
    duration: "2-3 hours",
    priceRange: "$300-$800",
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg",
    featured: true,
    metaTitle: "Dog Dental Cleaning San Francisco | Professional Pet Dentistry",
    metaDescription: "Professional dog dental cleaning in San Francisco. Prevent tooth decay and gum disease with expert veterinary dental care. Anesthesia-based cleaning for thorough results.",
    fullDescription: `Dental health is crucial to your dog's overall wellbeing. Our professional dental cleaning service includes comprehensive oral examination, scaling, polishing, and treatment of any dental issues under safe anesthesia.`,
    whatToExpect: [
      "Pre-anesthetic examination and bloodwork",
      "Safe anesthesia administration and monitoring",
      "Complete oral examination and charting",
      "Ultrasonic scaling above and below gum line",
      "Polishing to smooth tooth surfaces",
      "Fluoride treatment",
      "Dental X-rays if needed",
      "Extractions if necessary (with consent)"
    ],
    beforeCare: [
      "Fast your dog for 12 hours before procedure",
      "Water allowed until morning of procedure",
      "Administer any prescribed pre-medications",
      "Arrive at scheduled drop-off time",
      "Provide emergency contact information"
    ],
    afterCare: [
      "Soft food diet for 24-48 hours",
      "Administer pain medications as prescribed",
      "Monitor for bleeding or excessive drooling",
      "Avoid hard chew toys for one week",
      "Start home dental care routine",
      "Schedule follow-up examination"
    ],
    faqs: [
      {
        question: "Why does my dog need anesthesia for dental cleaning?",
        answer: "Anesthesia allows us to thoroughly clean below the gum line where most dental disease occurs, take X-rays, and perform any necessary treatments safely without stress or pain for your dog."
      },
      {
        question: "How often should my dog have dental cleaning?",
        answer: "Most dogs benefit from annual dental cleanings, but frequency depends on breed, age, and home dental care. Small breeds and seniors may need more frequent cleanings."
      },
      {
        question: "Is anesthesia safe for my dog?",
        answer: "Modern veterinary anesthesia is very safe. We perform pre-anesthetic bloodwork, use advanced monitoring equipment, and have trained staff monitoring your dog throughout the procedure."
      }
    ],
    relatedServices: ["wellness-exams", "senior-care", "oral-surgery"]
  },
  {
    id: "surgical-services",
    slug: "surgical-services",
    category: "Surgery",
    title: "Surgical Services",
    shortDescription: "Advanced surgical procedures including spay/neuter, soft tissue surgery, and orthopedic procedures with modern techniques and comprehensive care.",
    duration: "1-4 hours",
    priceRange: "$400-$3000+",
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg",
    featured: true,
    metaTitle: "Dog Surgery San Francisco | Veterinary Surgical Services",
    metaDescription: "Expert veterinary surgery for dogs in San Francisco. Spay/neuter, soft tissue, orthopedic procedures. State-of-the-art surgical suite and experienced surgeons.",
    fullDescription: `Our state-of-the-art surgical suite is equipped with advanced technology to perform a wide range of procedures safely and effectively. From routine spay/neuter to complex orthopedic surgeries, our experienced surgical team provides compassionate, expert care.`,
    whatToExpect: [
      "Pre-surgical consultation and examination",
      "Pre-operative bloodwork and diagnostics",
      "Detailed surgical plan discussion",
      "Safe anesthesia and pain management",
      "Sterile surgical environment",
      "Continuous monitoring during surgery",
      "Post-operative recovery monitoring",
      "Detailed home care instructions"
    ],
    beforeCare: [
      "Pre-surgical consultation 1-2 weeks before",
      "Fast for 12 hours before surgery",
      "Administer pre-medications as directed",
      "Ensure clean, quiet recovery space at home",
      "Arrange for post-operative care assistance"
    ],
    afterCare: [
      "Restrict activity for 10-14 days",
      "Use E-collar to prevent licking/chewing",
      "Administer medications as prescribed",
      "Monitor incision daily for swelling or discharge",
      "Attend all follow-up appointments",
      "Suture removal at 10-14 days if needed"
    ],
    faqs: [
      {
        question: "What types of surgeries do you perform?",
        answer: "We perform spay/neuter, mass removals, laceration repairs, foreign body removal, bladder stone surgery, orthopedic procedures, and many other soft tissue surgeries."
      },
      {
        question: "How long is recovery after surgery?",
        answer: "Recovery time varies by procedure. Most soft tissue surgeries require 10-14 days of restricted activity. Orthopedic surgeries may require 6-8 weeks of limited activity."
      },
      {
        question: "Will my dog be in pain after surgery?",
        answer: "We provide comprehensive pain management including pre-emptive pain medication, local blocks during surgery, and take-home pain medications to keep your dog comfortable."
      }
    ],
    relatedServices: ["emergency-care", "diagnostics", "post-op-care"]
  },
  {
    id: "emergency-care",
    slug: "emergency-care",
    category: "Emergency",
    title: "24/7 Emergency Care",
    shortDescription: "Round-the-clock emergency veterinary services for urgent situations and critical care needs with experienced emergency veterinarians.",
    duration: "Varies",
    priceRange: "$200-$5000+",
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg",
    featured: true,
    metaTitle: "24/7 Emergency Vet San Francisco | Pet Planet Dog Clinic",
    metaDescription: "24/7 emergency veterinary care for dogs in San Francisco. Immediate treatment for accidents, poisoning, trauma, and critical conditions. Call (555) 123-4567 now.",
    fullDescription: `Emergencies can happen at any time. Our 24/7 emergency service ensures your dog receives immediate, expert care when every minute counts. Our emergency veterinarians and support staff are trained to handle critical situations with skill and compassion.`,
    whatToExpect: [
      "Immediate triage assessment upon arrival",
      "Stabilization of critical conditions",
      "Diagnostic testing (bloodwork, X-rays, ultrasound)",
      "Emergency treatment and medications",
      "Continuous monitoring and supportive care",
      "Clear communication with you throughout",
      "Coordination with your regular veterinarian",
      "Hospitalization if needed"
    ],
    beforeCare: [
      "Call ahead if possible: (555) 123-4567",
      "Bring any medications your dog is taking",
      "Note time of incident and symptoms",
      "Bring a muzzle if your dog is in pain",
      "Have someone drive you if possible"
    ],
    afterCare: [
      "Follow all discharge instructions carefully",
      "Administer medications exactly as prescribed",
      "Monitor closely for changes",
      "Attend follow-up appointments",
      "Contact us immediately if condition worsens",
      "Follow up with regular vet within 24-48 hours"
    ],
    faqs: [
      {
        question: "What constitutes a veterinary emergency?",
        answer: "Emergencies include difficulty breathing, severe bleeding, seizures, inability to urinate, suspected poisoning, trauma, bloat, collapse, or any life-threatening condition."
      },
      {
        question: "Should I call before coming in?",
        answer: "If possible, call ahead so we can prepare for your arrival. However, if it's a true emergency, come immediately. Don't delay treatment to call."
      },
      {
        question: "How much does emergency care cost?",
        answer: "Emergency care costs vary based on the condition and treatment needed. We'll provide an estimate before proceeding with treatment. Payment is expected at time of service."
      }
    ],
    relatedServices: ["surgical-services", "diagnostics", "critical-care"]
  },
  {
    id: "diagnostic-imaging",
    slug: "diagnostic-imaging",
    category: "Diagnostics",
    title: "Diagnostic Imaging & Lab Services",
    shortDescription: "State-of-the-art diagnostic services including digital X-ray, ultrasound, and comprehensive laboratory testing for accurate diagnoses.",
    duration: "30-90 minutes",
    priceRange: "$150-$600",
    image: "https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg",
    featured: false,
    metaTitle: "Veterinary Diagnostics San Francisco | X-ray, Ultrasound, Lab Tests",
    metaDescription: "Advanced diagnostic imaging and laboratory services for dogs. Digital X-ray, ultrasound, bloodwork, and more. Accurate diagnoses for better treatment outcomes.",
    fullDescription: `Accurate diagnosis is the foundation of effective treatment. Our diagnostic services include digital radiography, ultrasound, in-house laboratory, and access to specialized testing to quickly identify health issues and guide treatment decisions.`,
    whatToExpect: [
      "Consultation to determine needed tests",
      "Non-invasive or minimally invasive procedures",
      "Sedation if needed for patient comfort",
      "Immediate results for many tests",
      "Detailed explanation of findings",
      "Treatment recommendations based on results",
      "Digital images available for referrals"
    ],
    beforeCare: [
      "Fasting may be required for some tests",
      "Bring previous diagnostic results if available",
      "List all current medications",
      "Note specific symptoms or concerns"
    ],
    afterCare: [
      "Follow treatment plan based on results",
      "Schedule any recommended follow-up tests",
      "Monitor for changes in condition",
      "Keep copies of all diagnostic reports"
    ],
    faqs: [
      {
        question: "What diagnostic services do you offer?",
        answer: "We offer digital X-rays, ultrasound, in-house bloodwork, urinalysis, fecal testing, cytology, and can send samples to reference labs for specialized testing."
      },
      {
        question: "How long does it take to get results?",
        answer: "Many tests provide immediate results. In-house bloodwork takes 15-30 minutes. Tests sent to reference labs typically return in 1-3 days."
      },
      {
        question: "Will my dog need sedation?",
        answer: "Most diagnostic procedures don't require sedation. However, sedation may be recommended for anxious dogs or for procedures requiring the dog to remain very still."
      }
    ],
    relatedServices: ["wellness-exams", "emergency-care", "surgical-services"]
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

// Helper function to get services by category
export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};

// Helper function to get featured services
export const getFeaturedServices = () => {
  return servicesData.filter(service => service.featured);
};

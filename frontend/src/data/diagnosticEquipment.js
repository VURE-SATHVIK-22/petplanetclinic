// Diagnostic Equipment Data - Interactive equipment catalogue
export const equipmentCategories = [
  { id: "imaging", name: "Imaging Equipment", icon: "Camera" },
  { id: "laboratory", name: "Laboratory", icon: "Microscope" },
  { id: "surgical", name: "Surgical Equipment", icon: "Activity" },
  { id: "monitoring", name: "Patient Monitoring", icon: "Heart" },
  { id: "anesthesia", name: "Anesthesia", icon: "Wind" },
  { id: "dental", name: "Dental Equipment", icon: "Smile" }
];

export const diagnosticEquipment = [
  {
    id: "digital-xray",
    category: "imaging",
    name: "Digital Radiography System",
    manufacturer: "Idexx",
    model: "DR-1417",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-10-15",
    images: [
      {
        url: "https://placehold.co/800x600/e0e7ff/1e40af?text=Digital+X-Ray+System&font=roboto",
        caption: "Main unit with digital detector",
        hotspots: [
          { x: 30, y: 40, label: "Digital Detector", description: "High-resolution flat panel detector for instant imaging" },
          { x: 60, y: 30, label: "X-Ray Tube", description: "Adjustable tube head for precise positioning" },
          { x: 50, y: 70, label: "Control Panel", description: "Touchscreen interface for exposure settings" }
        ]
      },
      {
        url: "https://placehold.co/800x600/dbeafe/0f766e?text=X-Ray+Control+Station&font=roboto",
        caption: "Control station and viewing monitor"
      }
    ],
    shortDescription: "State-of-the-art digital radiography for instant, high-quality diagnostic images",
    fullDescription: "Our digital radiography system provides immediate, high-resolution images for rapid diagnosis. The system eliminates the need for chemical processing, reduces radiation exposure, and allows for instant image enhancement and manipulation.",
    specifications: [
      "Resolution: 3.5 megapixels",
      "Detector size: 14\" x 17\"",
      "Exposure time: 0.001 - 6.3 seconds",
      "Image processing: Real-time",
      "DICOM compatible",
      "Wireless connectivity"
    ],
    purpose: "Diagnostic imaging of bones, chest, abdomen, and soft tissues for fractures, foreign bodies, organ evaluation, and disease detection.",
    applications: [
      "Orthopedic evaluation",
      "Chest radiographs",
      "Abdominal imaging",
      "Dental radiography",
      "Foreign body detection",
      "Pre-surgical screening"
    ],
    pdfManual: "/manuals/idexx-dr1417-manual.pdf",
    relatedServices: ["diagnostic-imaging", "emergency-care", "surgical-services"],
    tags: ["imaging", "diagnostic", "radiology", "critical"]
  },
  {
    id: "ultrasound",
    category: "imaging",
    name: "Veterinary Ultrasound System",
    manufacturer: "GE Healthcare",
    model: "Logiq V2",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-11-01",
    images: [
      {
        url: "https://placehold.co/800x600/f0fdfa/059669?text=Ultrasound+System&font=roboto",
        caption: "Portable ultrasound with multiple probes",
        hotspots: [
          { x: 40, y: 50, label: "Display Monitor", description: "High-resolution color display for real-time imaging" },
          { x: 70, y: 60, label: "Probe Selection", description: "Multiple frequency probes for different applications" },
          { x: 50, y: 80, label: "Control Panel", description: "Intuitive controls for image optimization" }
        ]
      }
    ],
    shortDescription: "Advanced ultrasound imaging for soft tissue evaluation and cardiac assessment",
    fullDescription: "Our veterinary ultrasound system provides real-time, non-invasive imaging of internal organs, blood flow, and cardiac function. Multiple probe frequencies allow for detailed evaluation of various body systems.",
    specifications: [
      "Display: 15\" LED color monitor",
      "Probes: 3.5 MHz, 7.5 MHz, 10 MHz",
      "Doppler: Color and spectral",
      "Image storage: 500+ studies",
      "Portable design",
      "Battery backup: 2 hours"
    ],
    purpose: "Non-invasive imaging of abdominal organs, cardiac evaluation, pregnancy diagnosis, and guided procedures.",
    applications: [
      "Abdominal organ evaluation",
      "Cardiac echocardiography",
      "Pregnancy diagnosis",
      "Bladder and kidney assessment",
      "Guided biopsies",
      "Fluid detection"
    ],
    pdfManual: "/manuals/ge-logiq-v2-manual.pdf",
    relatedServices: ["diagnostic-imaging", "cardiology", "emergency-care"],
    tags: ["imaging", "diagnostic", "ultrasound", "cardiac"]
  },
  {
    id: "blood-analyzer",
    category: "laboratory",
    name: "In-House Blood Chemistry Analyzer",
    manufacturer: "Idexx",
    model: "Catalyst One",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-10-20",
    images: [
      {
        url: "https://placehold.co/800x600/fed7aa/ea580c?text=Blood+Analyzer&font=roboto",
        caption: "Automated chemistry analyzer",
        hotspots: [
          { x: 50, y: 40, label: "Sample Port", description: "Automated sample loading and processing" },
          { x: 30, y: 60, label: "Reagent Carousel", description: "Multiple test panels available" },
          { x: 70, y: 50, label: "Results Display", description: "Results in 10-15 minutes" }
        ]
      }
    ],
    shortDescription: "Rapid in-house blood chemistry analysis for immediate diagnostic results",
    fullDescription: "Our in-house blood analyzer provides comprehensive chemistry panels in minutes, allowing for immediate diagnosis and treatment decisions. The system runs multiple tests simultaneously from a small blood sample.",
    specifications: [
      "Test time: 10-15 minutes",
      "Sample volume: 100 μL",
      "Test panels: 25+ chemistry tests",
      "Throughput: 4 samples/hour",
      "Quality control: Automated",
      "Connectivity: Cloud-based results"
    ],
    purpose: "Rapid assessment of organ function, electrolytes, and metabolic status for diagnosis and monitoring.",
    applications: [
      "Pre-anesthetic screening",
      "Emergency diagnostics",
      "Chronic disease monitoring",
      "Organ function assessment",
      "Electrolyte evaluation",
      "Medication monitoring"
    ],
    pdfManual: "/manuals/idexx-catalyst-manual.pdf",
    relatedServices: ["wellness-exams", "emergency-care", "surgical-services"],
    tags: ["laboratory", "diagnostic", "bloodwork", "critical"]
  },
  {
    id: "anesthesia-machine",
    category: "anesthesia",
    name: "Veterinary Anesthesia Machine",
    manufacturer: "Midmark",
    model: "Matrx VMR",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-09-15",
    images: [
      {
        url: "https://placehold.co/800x600/e0e7ff/1e40af?text=Anesthesia+Machine&font=roboto",
        caption: "Complete anesthesia delivery system",
        hotspots: [
          { x: 40, y: 40, label: "Vaporizer", description: "Precision isoflurane delivery" },
          { x: 60, y: 50, label: "Ventilator", description: "Mechanical ventilation support" },
          { x: 50, y: 70, label: "Scavenging System", description: "Waste gas removal for safety" }
        ]
      }
    ],
    shortDescription: "Advanced anesthesia delivery system with integrated ventilator and monitoring",
    fullDescription: "Our anesthesia machine provides safe, precise delivery of inhalant anesthesia with integrated ventilation support. The system includes active scavenging to protect staff from waste gases.",
    specifications: [
      "Gas delivery: Isoflurane",
      "Ventilator: Volume/pressure controlled",
      "Flow meters: Oxygen and air",
      "Vaporizer: Precision calibrated",
      "Scavenging: Active system",
      "Backup: Manual ventilation"
    ],
    purpose: "Safe delivery of inhalant anesthesia for surgical procedures and diagnostics requiring sedation.",
    applications: [
      "Surgical anesthesia",
      "Dental procedures",
      "Diagnostic imaging",
      "Emergency procedures",
      "Prolonged sedation"
    ],
    pdfManual: "/manuals/midmark-vmr-manual.pdf",
    relatedServices: ["surgical-services", "dental-cleaning", "emergency-care"],
    tags: ["anesthesia", "surgical", "critical", "monitoring"]
  },
  {
    id: "patient-monitor",
    category: "monitoring",
    name: "Multi-Parameter Patient Monitor",
    manufacturer: "Mindray",
    model: "BeneVet",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-11-10",
    images: [
      {
        url: "https://placehold.co/800x600/dbeafe/0f766e?text=Patient+Monitor&font=roboto",
        caption: "Comprehensive vital signs monitoring",
        hotspots: [
          { x: 50, y: 30, label: "Display Screen", description: "Real-time waveforms and values" },
          { x: 30, y: 60, label: "ECG Leads", description: "Continuous cardiac monitoring" },
          { x: 70, y: 60, label: "SpO2 Sensor", description: "Oxygen saturation monitoring" }
        ]
      }
    ],
    shortDescription: "Continuous monitoring of vital signs during anesthesia and critical care",
    fullDescription: "Our patient monitoring system tracks multiple vital parameters simultaneously, providing real-time data and alarms to ensure patient safety during procedures and hospitalization.",
    specifications: [
      "Parameters: ECG, SpO2, NIBP, Temp, Resp",
      "Display: 12.1\" color touchscreen",
      "Alarms: Audible and visual",
      "Trending: 72-hour data storage",
      "Battery: 4-hour backup",
      "Connectivity: Network capable"
    ],
    purpose: "Continuous monitoring of cardiovascular and respiratory function during anesthesia and critical care.",
    applications: [
      "Anesthesia monitoring",
      "Post-operative recovery",
      "Critical care patients",
      "Emergency stabilization",
      "Cardiac patients"
    ],
    pdfManual: "/manuals/mindray-benevet-manual.pdf",
    relatedServices: ["surgical-services", "emergency-care", "critical-care"],
    tags: ["monitoring", "anesthesia", "critical", "cardiac"]
  },
  {
    id: "dental-unit",
    category: "dental",
    name: "Veterinary Dental Unit",
    manufacturer: "iM3",
    model: "Elite",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-10-05",
    images: [
      {
        url: "https://placehold.co/800x600/f0fdfa/059669?text=Dental+Unit&font=roboto",
        caption: "Complete dental workstation",
        hotspots: [
          { x: 40, y: 40, label: "Ultrasonic Scaler", description: "High-frequency scaling for tartar removal" },
          { x: 60, y: 40, label: "High-Speed Handpiece", description: "For extractions and crown work" },
          { x: 50, y: 70, label: "Polisher", description: "Low-speed polishing for smooth finish" }
        ]
      }
    ],
    shortDescription: "Professional dental equipment for comprehensive oral care and surgery",
    fullDescription: "Our dental unit provides all necessary tools for professional dental cleaning, polishing, and oral surgery. The system includes ultrasonic scaling, high and low-speed handpieces, and integrated water delivery.",
    specifications: [
      "Ultrasonic scaler: 25-32 kHz",
      "High-speed handpiece: 400,000 RPM",
      "Low-speed handpiece: 20,000 RPM",
      "Water delivery: Integrated",
      "Foot pedal control",
      "LED illumination"
    ],
    purpose: "Professional dental prophylaxis, oral surgery, and dental disease treatment.",
    applications: [
      "Dental prophylaxis",
      "Tooth extractions",
      "Crown preparation",
      "Root canal therapy",
      "Oral surgery",
      "Periodontal treatment"
    ],
    pdfManual: "/manuals/im3-elite-manual.pdf",
    relatedServices: ["dental-cleaning", "oral-surgery", "wellness-exams"],
    tags: ["dental", "surgical", "preventive"]
  },
  {
    id: "microscope",
    category: "laboratory",
    name: "Laboratory Microscope",
    manufacturer: "Olympus",
    model: "CX23",
    status: "In-house",
    maintenanceStatus: "Good",
    lastMaintenance: "2024-08-20",
    images: [
      {
        url: "https://placehold.co/800x600/fed7aa/ea580c?text=Laboratory+Microscope&font=roboto",
        caption: "High-quality optical microscope"
      }
    ],
    shortDescription: "Professional microscope for cytology, parasitology, and hematology",
    fullDescription: "Our laboratory microscope provides high-quality optical imaging for examination of blood smears, cytology samples, fecal samples, and urine sediment.",
    specifications: [
      "Magnification: 40x to 1000x",
      "Objectives: 4x, 10x, 40x, 100x oil",
      "Illumination: LED",
      "Binocular head",
      "Mechanical stage",
      "Abbe condenser"
    ],
    purpose: "Microscopic examination of blood, urine, fecal, and cytology samples for disease diagnosis.",
    applications: [
      "Blood smear evaluation",
      "Fecal parasite detection",
      "Urine sediment analysis",
      "Cytology examination",
      "Ear cytology",
      "Skin scraping analysis"
    ],
    pdfManual: "/manuals/olympus-cx23-manual.pdf",
    relatedServices: ["diagnostic-imaging", "wellness-exams", "dermatology"],
    tags: ["laboratory", "diagnostic", "parasitology"]
  },
  {
    id: "surgical-laser",
    category: "surgical",
    name: "CO2 Surgical Laser",
    manufacturer: "Aesculight",
    model: "LX-20SP",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-09-30",
    images: [
      {
        url: "https://placehold.co/800x600/e0e7ff/1e40af?text=Surgical+Laser&font=roboto",
        caption: "CO2 laser surgical system"
      }
    ],
    shortDescription: "Precision CO2 laser for minimally invasive soft tissue surgery",
    fullDescription: "Our CO2 surgical laser provides precise cutting and coagulation with minimal bleeding and faster healing. The laser is ideal for soft tissue procedures and offers advantages over traditional scalpel surgery.",
    specifications: [
      "Wavelength: 10,600 nm",
      "Power: 0-20 watts",
      "Modes: Continuous and pulsed",
      "Delivery: Articulated arm",
      "Spot size: 0.2-2.0 mm",
      "Foot pedal control"
    ],
    purpose: "Minimally invasive soft tissue surgery with reduced bleeding, pain, and faster recovery.",
    applications: [
      "Mass removals",
      "Oral surgery",
      "Eyelid surgery",
      "Skin lesion removal",
      "Stenotic nares correction",
      "Soft palate resection"
    ],
    pdfManual: "/manuals/aesculight-lx20-manual.pdf",
    relatedServices: ["surgical-services", "oncology", "dermatology"],
    tags: ["surgical", "laser", "minimally-invasive"]
  },
  {
    id: "ecg-machine",
    category: "monitoring",
    name: "Veterinary ECG Machine",
    manufacturer: "Edan",
    model: "VE-100",
    status: "In-house",
    maintenanceStatus: "Excellent",
    lastMaintenance: "2024-10-25",
    images: [
      {
        url: "https://placehold.co/800x600/dbeafe/0f766e?text=ECG+Machine&font=roboto",
        caption: "Portable ECG with interpretation"
      }
    ],
    shortDescription: "Portable electrocardiography for cardiac rhythm and function assessment",
    fullDescription: "Our veterinary ECG machine provides detailed cardiac rhythm analysis and interpretation. The portable design allows for bedside monitoring and the system includes veterinary-specific interpretation algorithms.",
    specifications: [
      "Channels: 6-lead simultaneous",
      "Display: 7\" color touchscreen",
      "Interpretation: Automated",
      "Storage: 1000+ ECGs",
      "Printing: Thermal printer",
      "Battery: 3-hour operation"
    ],
    purpose: "Cardiac rhythm assessment, arrhythmia detection, and pre-anesthetic cardiac evaluation.",
    applications: [
      "Pre-anesthetic screening",
      "Arrhythmia diagnosis",
      "Cardiac disease monitoring",
      "Emergency cardiac assessment",
      "Medication monitoring",
      "Breed screening"
    ],
    pdfManual: "/manuals/edan-ve100-manual.pdf",
    relatedServices: ["cardiology", "wellness-exams", "emergency-care"],
    tags: ["monitoring", "cardiac", "diagnostic"]
  },
  {
    id: "centrifuge",
    category: "laboratory",
    name: "Laboratory Centrifuge",
    manufacturer: "Drucker",
    model: "Horizon 642E",
    status: "In-house",
    maintenanceStatus: "Good",
    lastMaintenance: "2024-07-15",
    images: [
      {
        url: "https://placehold.co/800x600/f0fdfa/059669?text=Centrifuge&font=roboto",
        caption: "High-speed laboratory centrifuge"
      }
    ],
    shortDescription: "High-speed centrifuge for blood and urine sample processing",
    fullDescription: "Our laboratory centrifuge processes blood and urine samples for analysis. The variable speed control and timer allow for precise separation of sample components.",
    specifications: [
      "Max speed: 4000 RPM",
      "Capacity: 12 tubes (15ml)",
      "Timer: 1-99 minutes",
      "Speed control: Variable",
      "Safety: Lid interlock",
      "Noise level: <60 dB"
    ],
    purpose: "Separation of blood components and urine sediment for laboratory analysis.",
    applications: [
      "Blood sample processing",
      "Urine sediment preparation",
      "Serum separation",
      "Plasma preparation",
      "Microhematocrit",
      "Fecal flotation"
    ],
    pdfManual: "/manuals/drucker-642e-manual.pdf",
    relatedServices: ["diagnostic-imaging", "wellness-exams"],
    tags: ["laboratory", "sample-processing"]
  }
];

// Helper functions
export const getEquipmentByCategory = (categoryId) => {
  return diagnosticEquipment.filter(eq => eq.category === categoryId);
};

export const getEquipmentById = (id) => {
  return diagnosticEquipment.find(eq => eq.id === id);
};

export const getInHouseEquipment = () => {
  return diagnosticEquipment.filter(eq => eq.status === "In-house");
};

export const getEquipmentByTag = (tag) => {
  return diagnosticEquipment.filter(eq => eq.tags.includes(tag));
};

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  documents: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "passport-services",
    title: "Passport Services",
    shortDescription: "Fresh passport, renewal, and corrections made simple.",
    description: "We provide comprehensive assistance for all types of passport services. Whether you are applying for a fresh passport, seeking a renewal, or need corrections in your existing passport, our experts handle the documentation and scheduling for a hassle-free experience.",
    icon: "Passport",
    image: "/images/passport-bg.png",
    documents: [
      "Proof of Identity (Aadhar Card, Voter ID)",
      "Proof of Address (Utility Bills, Rent Agreement)",
      "Proof of Date of Birth (Birth Certificate, School Leaving Certificate)",
      "Old Passport (for renewal cases)",
      "Passport size photographs"
    ],
    process: [
      "Consultation and Document Review",
      "Online Application Submission",
      "Appointment Scheduling at PSK",
      "Document Verification Assistance",
      "Police Verification Guidance"
    ]
  },
  {
    id: "2",
    slug: "visa-services",
    title: "Visa Services",
    shortDescription: "Expert assistance for Tourist, Business, and Student visas.",
    description: "Navigating visa requirements can be complex. We offer end-to-end support for Tourist, Business, and Student visas for countries across the globe. From document checklist to interview preparation, we ensure your application has the highest chance of success.",
    icon: "Visa",
    image: "/images/visa-bg.png",
    documents: [
      "Valid Passport with at least 6 months validity",
      "Recent photographs as per specifications",
      "Bank statements (Last 6 months)",
      "Income Tax Returns (Last 3 years)",
      "Invitation Letter or Hotel Booking",
      "Flight itinerary"
    ],
    process: [
      "Country-specific Requirement Analysis",
      "Document Collection and Verification",
      "Form Filling and Fee Payment",
      "Interview Slot Booking",
      "Interview Coaching (if required)"
    ]
  },
  {
    id: "3",
    slug: "air-ticket-booking",
    title: "Air Ticket Booking",
    shortDescription: "Domestic and international flight bookings at competitive rates.",
    description: "Book your domestic and international flights with Airwin India for the best deals. We provide real-time pricing, multiple airline options, and flexible cancellation policies to make your travel planning smooth and affordable.",
    icon: "Plane",
    image: "/images/ticket-bg.png",
    documents: [
      "Valid Passport (for international travel)",
      "Valid Visa for destination (if required)",
      "Proof of Identity"
    ],
    process: [
      "Flight Search based on Preferences",
      "Comparison of Fares and Routes",
      "Seat Selection and Special Requests",
      "Secure Payment and Instant E-ticket",
      "24/7 Support for Re-scheduling"
    ]
  },
  {
    id: "4",
    slug: "holiday-packages",
    title: "Holiday Packages",
    shortDescription: "Curated domestic and international tour packages for every budget.",
    description: "Discover the world with our curated holiday packages. From exotic international getaways to serene domestic retreats, we offer all-inclusive tours that cover flights, accommodation, sightseeing, and local transfers.",
    icon: "Palmtree",
    image: "/images/holiday-bg.png",
    documents: [
      "Travel Documents for all passengers",
      "Special dietary or medical requirements",
      "Insurance preference"
    ],
    process: [
      "Destination Consultation",
      "Itinerary Customization",
      "Booking of All Services",
      "Pre-departure Briefing",
      "On-trip Assistance"
    ]
  }
];

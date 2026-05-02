export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Business Traveler",
    content: "Airwin India made my business visa process for Germany incredibly smooth. Their attention to detail with the documentation was impressive."
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Student",
    content: "I was worried about my student visa for Canada, but the team at Airwin guided me through every step. Highly recommended for their transparency."
  },
  {
    id: "3",
    name: "Amit Patel",
    role: "Tourist",
    content: "Excellent service for passport renewal. I got my passport within a week without any hassle. Great team and very professional."
  }
];

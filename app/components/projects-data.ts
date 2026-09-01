export type Project = {
  slug: string;
  name: string;
  service: string;
  imageUrl: string;
  description: string[];
  servicesDelivered: string[];
  techStack: string[];
  crmDemoUrl?: string;
  website?: string;
};

// Placeholder entries — swap in the real projects. Shared between the list (projects.tsx)
// and the detail route (app/projects/[slug]/page.tsx) so both read from one source.
export const projects: Project[] = [
  {
    slug: "kitchen-worktops-experts",
    name: "Kitchen Worktops Experts",
    service: "Website / CRM / SEO",
    imageUrl: "/kitchen.webp",
    description: [
      "Kitchen Worktop Experts - A newly launched business specialising in supplying and fitting bespoke luxury stone worktops. The team needed a syst  em that reflected the elegance of their craftsmanship.",
      "I partnered closely with the client to understand it's internal structure and workflow. This helped me gain a clear vision of what systems could be put in place to automate repetative and tasks and reduce friction between a customers point of interest and final install.",
      "I built a mobile first front end with a submittion form. These details are pushed into a custom CRM with an intergrated job cost calculator and automated quoting system. The launch was supported by SEO for immediate impact and increased visibility.",
    ],
    servicesDelivered: ["Website", "Google Analytics", "SEO", "CRM",],
    techStack: ["React", "PostgreSQL", "GitHub", "Vercel", 'Railway'],
    crmDemoUrl: "https://crm-demo-xi-two.vercel.app/",
    website: "https://www.kitchenworktopexperts.co.uk/"
  },

];

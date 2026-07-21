import { getSite } from "@/lib/content";

/** LocalBusiness + Organization JSON-LD for Divine Jyothi. */
export function JsonLd() {
  const site = getSite();
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: site.brandName,
        url,
        logo: `${url}/images/logo.png`,
        description: site.philosophy,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        sameAs: [site.social.facebook, site.social.instagram, site.social.youtube].filter(
          Boolean,
        ),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#localbusiness`,
        name: site.brandName,
        image: `${url}/images/logo.png`,
        url,
        telephone: site.phone,
        email: site.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        areaServed: ["Hyderabad", "India", "Worldwide"],
        knowsLanguage: site.languages,
        founder: {
          "@type": "Person",
          name: site.consultantName,
          jobTitle: site.founderTitle,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Consultations",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "KP Astrology" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vastu" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Numerology" } },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

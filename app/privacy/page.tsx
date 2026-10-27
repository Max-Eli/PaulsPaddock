import { PageHero } from "@/app/components/PageHero";
import { BRAND } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Paul’s Paddock collects and uses information submitted through this website.",
  path: "/privacy",
});

const UPDATED = "October 26, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Privacy policy", href: "/privacy" }]}
        title="Privacy policy."
        intro={`Last updated ${UPDATED}.`}
      />
      <section className="bg-paper">
        <div className="wrap section-y">
          <div className="prose max-w-2xl">
            <p>
              This policy explains what information {BRAND.name} collects through
              paulspaddock.com and how we use it.
            </p>
            <h2>What we collect</h2>
            <p>
              When you use the booking or contact forms, we collect what you
              enter: your name, phone number, email address, vehicle details,
              preferred date and your message. We don’t ask for payment details
              on this website.
            </p>
            <h2>How we use it</h2>
            <p>
              We use it only to respond to your request: to confirm an
              appointment, answer a question or quote a repair. We don’t sell or
              rent your information, and we don’t use it for marketing without
              your permission.
            </p>
            <h2>Service providers</h2>
            <p>
              Form submissions are delivered to our inbox by an email provider,
              Resend. The map on our site is provided by Google Maps, which may
              set its own cookies under Google’s privacy policy. Our website host
              keeps standard server logs, such as IP addresses and browser type,
              for security and reliability.
            </p>
            <h2>Your choices</h2>
            <p>
              You can ask us to update or delete the information you sent us at
              any time by emailing <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>{" "}
              or calling <a href={BRAND.phoneHref}>{BRAND.phone}</a>.
            </p>
            <h2>Contact</h2>
            <p>
              {BRAND.name}, {BRAND.address.street}, {BRAND.address.unit},{" "}
              {BRAND.address.city}, {BRAND.address.region} {BRAND.address.zip}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

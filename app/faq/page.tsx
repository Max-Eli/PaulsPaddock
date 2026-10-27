import { CtaBand } from "@/app/components/CtaBand";
import { FaqList } from "@/app/components/FaqList";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { ALL_FAQS, FAQ_GROUPS } from "@/app/lib/faqs";
import { faqSchema, pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about booking, pricing, warranties, towing and the cars we work on at Paul’s Paddock in Palm Bay, FL.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS)} />
      <PageHero
        crumbs={[{ name: "FAQ", href: "/faq" }]}
        kicker="FAQ"
        title="Questions, answered."
        intro="Booking, pricing, warranties and the cars we work on. If your question isn’t here, call the shop."
      />

      <section className="bg-paper">
        <div className="wrap section-y space-y-20">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <h2 className="text-2xl font-semibold lg:col-span-4">{group.title}</h2>
              <div className="lg:col-span-8">
                <FaqList faqs={group.faqs} schema={false} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still have a question?" />
    </>
  );
}

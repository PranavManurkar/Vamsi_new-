import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/site/PageHeader";

export default function ContactPage() {
  return (
    <>
      {/* Header from the design ContactPage (pages.tsx L300). Its intro describes a mailto form, which this page does not have, so it is omitted. */}
      <PageHeader eyebrow="Contact" title="Start a conversation" />
      <ContactSection />
    </>
  );
}

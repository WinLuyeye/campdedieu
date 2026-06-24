// app/qui-sommes-nous/page.tsx
import AboutTabs from "@/components/AboutTabs";
import { tabContents } from "@/components/AboutTabContents";

export default function QuiSommesNousPage() {
  return (
    <main>
      <AboutTabs tabs={tabContents} />
    </main>
  );
}
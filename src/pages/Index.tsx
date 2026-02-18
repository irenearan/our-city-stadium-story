import ScrollProgress from "@/components/ScrollProgress";
import SectionBillboard from "@/components/sections/SectionBillboard";
import SectionOrigin from "@/components/sections/SectionOrigin";
import SectionEvolution from "@/components/sections/SectionEvolution";
import SectionVision from "@/components/sections/SectionVision";
import SectionProject from "@/components/sections/SectionProject";
import SectionLayers from "@/components/sections/SectionLayers";
import SectionUses from "@/components/sections/SectionUses";
import SectionProfileSelector from "@/components/sections/SectionProfileSelector";
import SectionClosing from "@/components/sections/SectionClosing";

const Index = () => {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <SectionBillboard />
      <SectionOrigin />
      <SectionEvolution />
      <SectionVision />
      <SectionProject />
      <SectionLayers />
      <SectionUses />
      <SectionProfileSelector />
      <SectionClosing />
    </main>
  );
};

export default Index;

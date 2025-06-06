import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    // RTL detection
    setIsRtl(document.body.getAttribute("data-rtl") === "true");
    const observer = new MutationObserver(() => {
      setIsRtl(document.body.getAttribute("data-rtl") === "true");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-rtl"],
    });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-svh flex items-center justify-center relative hero-gradient"
    >
      <div className="container mx-auto px-6 text-center rounded-md">
        <Badge variant="secondary" className="mb-6 font-mono">
          {t("tagline")}
        </Badge>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          {t("titleStart")} <br />
          {t("titleBr")}
          <span className="gradient-text font-serif not-italic">
            &nbsp;{t("titleSerif")}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 hover:cursor-pointer"
          >
            {t("seeImpact")}
            {isRtl ? (
              <ArrowLeft className="ml-2 h-5 w-5" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5" />
            )}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8 py-3 hover:cursor-pointer"
          >
            {t("startProject")}
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("mission")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
};

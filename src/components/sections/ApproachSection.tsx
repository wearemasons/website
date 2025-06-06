import { ApproachStep } from "../cards/ApproachStep";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";

export const ApproachSection = () => {
  const t = useTranslations("Approach");
  const [isRtl, setIsRtl] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsRtl(document.body.getAttribute("data-rtl") === "true");
    const observer = new MutationObserver(() => {
      setIsRtl(document.body.getAttribute("data-rtl") === "true");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-rtl"],
    });
    return () => observer.disconnect();
  }, [pathname]);

  const steps = [
    {
      step: "01",
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      step: "02",
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      step: "03",
      title: t("step3Title"),
      description: t("step3Desc"),
    },
    {
      step: "04",
      title: t("step4Title"),
      description: t("step4Desc"),
    },
  ];

  return (
    <section
      id="approach"
      className="py-20 bg-secondary dark:bg-secondary/30 scroll-mt-24"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {t("headlineStart")}{" "}
            <span className="gradient-text font-serif not-italic">
              {t("headlineSerif")}
            </span>
          </h2>

          <div
            className={`${isRtl ? "text-right" : "text-left"} mt-16 space-y-12`}
          >
            {steps.map((step, i) => (
              <ApproachStep key={i} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PNG_NAME = "roots-workflow-showcase.png";
const PLACEHOLDER = "/workflow-ui-placeholder.svg";

function resolveShowcaseImageSrc():
  | "/roots-workflow-showcase.png"
  | "/workflow-ui-placeholder.svg" {
  const pngPath = path.join(process.cwd(), "public", PNG_NAME);
  if (fs.existsSync(pngPath)) {
    return "/roots-workflow-showcase.png";
  }
  return PLACEHOLDER;
}

export function WorkflowShowcaseSection() {

  return (
    <section id="library" className="bg-black md:py-24 py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6">
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="font-display text-2xl font-bold uppercase leading-[1.5] tracking-[0.03em] text-white md:text-4xl">
            The smartest way to build afrobeats &amp; modern
            <br />
            <span className="text-[#42FF00]">African drums</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[38rem] text-sm font-normal leading-relaxed text-white/70 md:mt-2 md:text-base">
            See how ROOTS revolutionizes your drum workflow with intelligent AI
            recommendations
          </p>
        </div>

        <div className="w-[80%] lg:h-[500px]">
           <video src="/workflow.mp4"  controls loop muted className="h-auto w-full rounded-[20px] aspect-[800/640]" />
        </div>
      </div>
    </section>
  );
}

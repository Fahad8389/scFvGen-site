"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ArrowRight,
  Dna,
  Target,
  Flame,
  Wrench,
  ChevronDown,
  XCircle,
  Microscope,
  AlertTriangle,
  Github,
  Beaker,
  Layers,
} from "lucide-react";

import { ALL_19, FMC63_BASELINE, TOP_5, Design } from "./data";

const ACCENT = "#7AA0A0"; // teal, matches poster theme
const ACCENT_SOFT = "#A8C2C2";
const CORAL = "#FF6B6B";

// basePath fix: next/image with unoptimized=true does not auto-prepend basePath
// during static export, so we do it manually for every figure src.
const BASE = process.env.NODE_ENV === "production" ? "/scFvGen-site" : "";
const fig = (p: string) => `${BASE}${p}`;

export default function Home() {
  return (
    <main className="bg-[#05070A] text-[#F5F1EA] overflow-x-hidden">
      <BackgroundTexture />

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit">
        <div className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-full px-4 sm:px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.18em] whitespace-nowrap">
            <a href="#challenge" className="hover:text-[#7AA0A0] transition">Challenge</a>
            <a href="#design"    className="hover:text-[#7AA0A0] transition">Design</a>
            <a href="#losses"    className="hover:text-[#7AA0A0] transition">Losses</a>
            <a href="#results"   className="hover:text-[#7AA0A0] transition">Results</a>
            <a href="#limits"    className="hover:text-[#7AA0A0] transition">Limits</a>
            <a href="#next"      className="hover:text-[#7AA0A0] transition">Next</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,160,160,0.14),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-3 border border-[#7AA0A0]/30 bg-[#7AA0A0]/10 rounded-full px-5 py-2 mb-8 text-xs uppercase tracking-[0.2em] text-[#CFE0E0]">
              <Dna className="w-4 h-4" />
              CAR-T scFv Design  ·  Completed May 2026
            </div>

            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] leading-[0.9] font-black tracking-[-0.06em] uppercase">
              scFvGen
              <br />
              Designs
              <br />
              <span className="text-[#7AA0A0]">Anti-CD19 scFvs</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#BEB4A8] max-w-2xl">
              A friendly walkthrough of how we generated, scored, and shortlisted
              19 candidate single-chain Fvs against CD19, the same target every
              FDA-approved CAR-T drug hits today.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#results" className="group bg-[#7AA0A0] text-black rounded-full px-6 py-4 font-semibold flex items-center gap-3 hover:bg-[#A8C2C2] transition-all">
                See the 19 designs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="https://github.com/Fahad8389/scFvGen" target="_blank" rel="noopener" className="rounded-full border border-white/10 px-6 py-4 hover:bg-white/5 transition inline-flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} glareEnable glareMaxOpacity={0.08}>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <Image
                  src={fig("/figures/fmc63_scFv_cdrs.png")}
                  alt="FMC63 scFv with six colored CDRs"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#CFE0E0] mb-3">Starting Point</p>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight max-w-lg">
                    FMC63 scFv, six CDR loops we redesign
                  </h3>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#7AA0A0]">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* METRICS */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5">
          <MetricCard title="Designs Generated" value="19" subtitle="across 4 CDR-H3 lengths" />
          <MetricCard title="Top iPTM (CD19)"   value="0.906" subtitle="L12_d03  ·  FMC63 baseline 0.236" />
          <MetricCard title="Pass Tm ≥ 60 °C"   value="16 / 19" subtitle="post-design FabTm v0.1 filter" />
          <MetricCard title="Finalists"          value="5" subtitle="supervisor-approved shortlist" />
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="px-6 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#7AA0A0] mb-5">Why this is hard</p>
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.92]">
              scFv design is not just antibody design with a linker.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#BEB4A8]">
              CAR-T is the most successful cell therapy ever, four FDA drugs,
              and all four use the same ~250-aa scFv called FMC63. So "design
              a new one" sounds easy. It is not.
            </p>
          </div>
          <div className="space-y-8">
            <ConceptCard icon={<Target className="w-6 h-6" />}
              title="Multi-specificity"
              text="CD19 has three close paralogs (CD20, CD22, CD79a) on the same B cells. Bind any of them and you toxify healthy lineages." />
            <ConceptCard icon={<Flame className="w-6 h-6" />}
              title="Stability cliff"
              text="scFvs aggregate easily because the linker exposes hydrophobic interfaces that the parent Fab hides." />
            <ConceptCard icon={<Wrench className="w-6 h-6" />}
              title="No scFv toolkit"
              text="VHH and Fab have purpose-built nativeness, stability, and solubility scorers. scFv has almost none." />
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section id="design" className="px-6 py-28 bg-[linear-gradient(to_bottom,#090C10,#0F1216)] border-y border-white/10">
        <div className="max-w-7xl mx-auto space-y-24">
          <SectionHeader eyebrow="Two upfront choices" title="What we kept fixed, and why." />

          <FeatureFigure
            title="Why we kept the FMC63 framework"
            description="Every approved CAR-T drug (Kymriah, Yescarta, Tecartus, Breyanzi) ships FMC63. It has the lowest documented tonic signalling of any clinical scFv and no recorded FDA failure due to aggregation. Replacing the framework adds a risk we have no model for, so we redesigned only the six CDRs and kept all four framework regions (FR1, FR2, FR3, FR4) on both VL and VH frozen at the wild-type FMC63 sequence."
            image={fig("/figures/fmc63_scFv_cdrs.png")}
          />

          <div className="grid lg:grid-cols-[0.58fr_0.42fr] gap-12 items-start">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-[#7AA0A0] mb-5">Linker decision</p>
              <h3 className="text-4xl sm:text-5xl font-black uppercase leading-[0.95] mb-8">
                The (GGGGS)×3 linker stays in the sequence.
              </h3>
              <div className="space-y-5 text-[#BFB5A9] text-lg leading-relaxed">
                <p>
                  We bake the linker into the input sequence as fixed framework
                  before Protenix v2 sees it. The model folds the full assembled
                  scFv (VL + linker + VH) on every forward pass, so the predicted
                  complex reflects the real molecule, not a chopped fragment.
                </p>
                <p>
                  We never let the optimizer touch the linker because (a) native
                  (GGGGS)×3 is already optimal for VL/VH spacing, (b) designing
                  it costs gradient noise with zero binding payoff, and (c) the
                  downstream production assays expect a standard linker.
                </p>
              </div>
            </div>
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
              <div className="rounded-[2rem] border border-white/10 bg-[#0B0E12] p-8 font-mono text-sm leading-relaxed">
                <p className="text-[#7AA0A0] mb-3"># input to Protenix v2</p>
                <p className="text-[#F5F1EA]">
                  VL
                  <span className="text-[#FF6B6B]"> CDR-L1 CDR-L2 CDR-L3 </span>
                  <span className="text-[#7AA0A0]">(GGGGS)×3</span>
                  &nbsp;VH
                  <span className="text-[#FF6B6B]"> CDR-H1 CDR-H2 CDR-H3</span>
                </p>
                <p className="text-[#888] mt-5"># gradient touches only the coral residues</p>
                <p className="text-[#888]"># framework + linker are frozen as input</p>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* LOSSES (DROPPED) */}
      <section id="losses" className="px-6 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What we dropped" title="Two losses that looked obvious, but did not fit scFv." />

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <CutCard
              label="AbLang2"
              verdict="Dropped"
              body="AbLang2 is a paired heavy/light antibody language model. It expects a heavy_len argument to know where the two chains split. For an scFv the chains are fused as VL + (GGGGS)×3 + VH, so heavy_len is ambiguous: do we count the linker as heavy, light, or skip? The model was never trained on continuous scFv sequences, so any heavy_len choice puts the embedding off-manifold. We could not validate it gave a meaningful nativeness signal, so we cut it from the loss stack."
            />
            <CutCard
              label="ESM-C 300M"
              verdict="Dropped"
              body="ESM-C is a general protein language model, not antibody-specific. We ran it on all 19 designs as a nativeness scorer. Every design scored less native than FMC63, which is exactly what you would expect when you ask a general PLM to rate AI-novel CDRs against a thirty-year-old clinical scaffold. The signal is structural, not informative: it tells you the designs are not the wild-type, not that they are bad. We dropped it from the final story."
            />
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#7AA0A0]/30 bg-[#7AA0A0]/5 p-10">
            <p className="uppercase tracking-[0.25em] text-sm text-[#7AA0A0] mb-5">Final loss stack</p>
            <p className="text-2xl sm:text-3xl font-black leading-tight">
              Binding <span className="text-[#7AA0A0]">(Protenix v2 on CD19, w = 1.0)</span>
              &nbsp;+&nbsp;
              per-position contrastive Selectivity
              <span className="text-[#7AA0A0]"> (Protenix v2 on CD20, CD22, CD79a, w = -0.7 / 3 each)</span>.
            </p>
            <p className="mt-5 text-[#BEB4A8] text-lg">
              Two terms, four forward passes per Mosaic step. That is the whole loss.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="px-6 py-28 bg-[linear-gradient(to_bottom,#0F1216,#090C10)] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What came out" title="All 19 designs." />

          <p className="mt-8 text-lg leading-relaxed text-[#BEB4A8] max-w-3xl">
            Top-5 finalists are highlighted in <span style={{color: ACCENT}} className="font-semibold">teal</span>.
            Selection rule: iPTM beats FMC63 baseline AND positive selectivity margin AND predicted Tm ≥ 60 °C.
          </p>

          <div className="mt-12 rounded-[2rem] border border-white/10 overflow-hidden bg-white/[0.02]">
            <DesignTable />
          </div>

          <p className="mt-6 text-sm text-[#9E9387] italic">
            Columns shown: design ID, CDR-H3 length, Protenix v2 iPTM against each of the four
            B-cell antigens, pLDDT, selectivity margin (CD19 iPTM minus mean off-target iPTM),
            predicted Tm from scFvGen FabTm v0.1. AF3 and Fab columns omitted on this page,
            available in the supervisor report.
          </p>

          <FinalistGrid />
        </div>
      </section>

      {/* LIMITS */}
      <section id="limits" className="px-6 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What this page does not prove" title="The numbers above sit on a shaky predictor." />

          <div className="grid lg:grid-cols-2 gap-8 mt-20">
            <LimitCard
              icon={<Microscope className="w-6 h-6" />}
              title="scFv structure prediction is unreliable"
              text="AlphaFold 3, Protenix v2, and Chai-1 all struggle with antibody-antigen complexes. Hitawala & Gray 2025 (MAbs) report AF3 reaches high-accuracy only 10.2 percent of the time on Ab-Ag. On our own FMC63 + CD19 control, Protenix v2 scores iPTM 0.236 against a published crystal. The tool we use for selection cannot reliably predict the molecule we already know works." />

            <LimitCard
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Cross-predictor disagreement"
              text="We ran one design (L12_d00) through both Protenix v2 and Chai-1. The two predictors share zero CD19 contact residues (Jaccard = 0.000). Picking which predictor to trust is itself an open problem." />

            <LimitCard
              icon={<Layers className="w-6 h-6" />}
              title="Cascade problem"
              text="Every downstream score, selectivity, Tm filtering, hit ranking, sits on top of the complex prediction. If the complex is wrong, every score is contaminated. We mitigate by reporting multi-method consensus, not by claiming any single number is ground truth." />

            <LimitCard
              icon={<Wrench className="w-6 h-6" />}
              title="scFv tool desert"
              text="VHH design has NanoMelt for Tm and AbNatiV2 for nativeness. Paired Fab design has AbLang2, p-AbNatiV2, and the Sormanni FabTm head. scFv inherits almost none of these because the linker disrupts the assumptions each model makes about chain pairing. We trained our own FabTm v0.1 (IgBert + Ridge) to plug one of the holes." />
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section id="next" className="px-6 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Future work" title="Five next moves." />

          <div className="mt-20 space-y-8">
            <NextItem n="1" title="More CDR-H3 lengths"
              text="We only swept lengths 10 / 12 / 14 / 16. Clinical FMC63 H3 is 12. Lengths 8, 18, 20 are unexplored." />
            <NextItem n="2" title="More designs per length"
              text="n = 19 is too small to generalize. Target = 100+ per length to get a real distribution." />
            <NextItem n="3" title="Add losses as tools mature"
              text="When a paired scFv-aware nativeness model lands, slot it back in. Same for scFv-specific Tm and aggregation predictors." />
            <NextItem n="4" title="Wet-lab validation"
              text="ELISA + flow cytometry on CD19+ Raji cells for the 5 finalists. SPR or BLI for Kd. DSF for Tm. This is the only check that closes the predictor gap." />
            <NextItem n="5" title="Re-score on closed predictors"
              text="When Chai-2 opens access, re-rank the 5 finalists for cross-predictor consensus." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-20 border-t border-white/10 bg-[#040507]">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#7AA0A0] text-sm mb-4">
            Companion Site  ·  scFvGen v1.0
          </p>
          <h3 className="text-4xl font-black uppercase mb-5">
            AI-designed anti-CD19 scFv for CAR-T
          </h3>
          <p className="text-[#BFB4A8] max-w-2xl leading-relaxed">
            Graduate research project at Prince Sattam Bin Abdulaziz University,
            College of Pharmacy. Pipeline, scoring code, and design outputs open
            source. Supervisor-approved May 2026.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://github.com/Fahad8389/scFvGen" target="_blank" rel="noopener" className="rounded-full border border-white/10 px-6 py-3 hover:bg-white/5 transition inline-flex items-center gap-2">
              <Github className="w-4 h-4" /> Pipeline repo
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================== */
/* COMPONENTS                                                  */
/* =========================================================== */

function BackgroundTexture() {
  return (
    <>
      <motion.div
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-4xl">
      <p className="uppercase tracking-[0.3em] text-sm text-[#7AA0A0] mb-5">{eyebrow}</p>
      <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.92]">{title}</h2>
    </div>
  );
}

function MetricCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="uppercase tracking-[0.2em] text-xs text-[#AAA093] mb-5">{title}</p>
      <div className="text-5xl font-black text-[#F5F1EA]">{value}</div>
      <p className="mt-4 text-[#9E9387]">{subtitle}</p>
    </div>
  );
}

function ConceptCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <div className="w-14 h-14 rounded-2xl bg-[#7AA0A0]/15 text-[#7AA0A0] flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-3xl font-black uppercase mb-5">{title}</h3>
      <p className="text-[#BDB3A7] leading-relaxed text-lg">{text}</p>
    </div>
  );
}

function FeatureFigure({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-center">
      <div>
        <h3 className="text-4xl sm:text-5xl font-black uppercase leading-[0.95] mb-8">{title}</h3>
        <p className="text-lg sm:text-xl text-[#BDB4A9] leading-relaxed">{description}</p>
      </div>
      <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
        <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0B0E12]">
          <Image src={image} alt={title} width={1800} height={1200} className="w-full h-auto" />
        </div>
      </Tilt>
    </div>
  );
}

function CutCard({ label, verdict, body }: { label: string; verdict: string; body: string }) {
  return (
    <div className="rounded-[2rem] border border-[#FF6B6B]/30 bg-[#FF6B6B]/[0.04] p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/15 text-[#FF6B6B] flex items-center justify-center">
          <XCircle className="w-6 h-6" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-[#FF6B6B]">{verdict}</span>
      </div>
      <h3 className="text-3xl font-black uppercase mb-5">{label}</h3>
      <p className="text-[#BDB3A7] leading-relaxed text-lg">{body}</p>
    </div>
  );
}

function LimitCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
      <div className="w-14 h-14 rounded-2xl bg-[#7AA0A0]/15 text-[#7AA0A0] flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-black uppercase mb-5">{title}</h3>
      <p className="text-[#BDB3A7] leading-relaxed text-lg">{text}</p>
    </div>
  );
}

function NextItem({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="border-l-2 border-[#7AA0A0] pl-8 py-2 grid lg:grid-cols-[80px_1fr] gap-6">
      <div className="text-5xl font-black text-[#7AA0A0]">{n}</div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3">{title}</h3>
        <p className="text-[#BFB5A9] text-lg leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/* ---- Table + Finalists ---- */

function fmt(n: number | null, digits = 3): string {
  return n == null ? "—" : n.toFixed(digits);
}

function DesignTable() {
  const isTop = (id: string) => TOP_5.includes(id);
  const rows: Design[] = [FMC63_BASELINE, ...ALL_19];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[#9E9387] uppercase tracking-[0.18em] text-xs">
            <th className="text-left  px-5 py-4 font-semibold">Design</th>
            <th className="text-right px-3 py-4 font-semibold">H3</th>
            <th className="text-right px-3 py-4 font-semibold">CD19 ↑</th>
            <th className="text-right px-3 py-4 font-semibold">CD20</th>
            <th className="text-right px-3 py-4 font-semibold">CD22</th>
            <th className="text-right px-3 py-4 font-semibold">CD79a</th>
            <th className="text-right px-3 py-4 font-semibold">pLDDT</th>
            <th className="text-right px-3 py-4 font-semibold">Sel margin</th>
            <th className="text-right px-5 py-4 font-semibold">Tm (°C)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const top = isTop(r.id);
            const baseline = r.id.startsWith("FMC63");
            const passTm = r.tm != null && r.tm >= 60;
            return (
              <tr key={r.id}
                  className={
                    "border-t border-white/5 " +
                    (top ? "bg-[#7AA0A0]/10 " : baseline ? "bg-white/[0.04] " : "hover:bg-white/[0.02] ")
                  }>
                <td className="px-5 py-3 font-mono whitespace-nowrap">
                  {top && <span className="inline-block mr-2 px-2 py-0.5 rounded-full bg-[#7AA0A0]/20 text-[#7AA0A0] text-[10px] uppercase tracking-widest">Top 5</span>}
                  {baseline && <span className="inline-block mr-2 px-2 py-0.5 rounded-full bg-white/10 text-[#F5F1EA] text-[10px] uppercase tracking-widest">Baseline</span>}
                  <span className={top ? "text-[#A8C2C2] font-semibold" : ""}>{r.id}</span>
                </td>
                <td className="px-3 py-3 text-right text-[#BEB4A8]">{r.h3_len}</td>
                <td className={"px-3 py-3 text-right font-mono " + (top ? "text-[#7AA0A0] font-semibold" : "")}>
                  {fmt(r.cd19)}
                </td>
                <td className="px-3 py-3 text-right font-mono text-[#9E9387]">{fmt(r.cd20)}</td>
                <td className="px-3 py-3 text-right font-mono text-[#9E9387]">{fmt(r.cd22)}</td>
                <td className="px-3 py-3 text-right font-mono text-[#9E9387]">{fmt(r.cd79a)}</td>
                <td className="px-3 py-3 text-right font-mono text-[#BEB4A8]">{fmt(r.plddt, 1)}</td>
                <td className={"px-3 py-3 text-right font-mono " + (r.sel != null && r.sel > 0 ? "text-[#A8C2C2]" : "text-[#FF6B6B]")}>
                  {r.sel == null ? "—" : (r.sel > 0 ? "+" : "") + r.sel.toFixed(3)}
                </td>
                <td className={"px-5 py-3 text-right font-mono " + (passTm ? "text-[#A8C2C2]" : "text-[#FF6B6B]")}>
                  {fmt(r.tm, 1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function FinalistGrid() {
  const finalists = ALL_19.filter((d) => TOP_5.includes(d.id))
    .sort((a, b) => TOP_5.indexOf(a.id) - TOP_5.indexOf(b.id));
  return (
    <div className="mt-16">
      <p className="uppercase tracking-[0.25em] text-sm text-[#7AA0A0] mb-6">Top 5 finalists</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {finalists.map((d, i) => (
          <div key={d.id} className="rounded-[2rem] border border-[#7AA0A0]/30 bg-[#7AA0A0]/5 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-black text-[#7AA0A0]">#{i + 1}</span>
              <span className="text-xs uppercase tracking-widest text-[#9E9387]">H3 = {d.h3_len}</span>
            </div>
            <p className="font-mono text-lg mb-5">{d.id}</p>
            <div className="space-y-2 text-sm">
              <Row label="iPTM CD19"      value={d.cd19.toFixed(3)} />
              <Row label="Sel margin"     value={"+" + (d.sel ?? 0).toFixed(3)} />
              <Row label="Predicted Tm"   value={(d.tm ?? 0).toFixed(1) + " °C"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-white/5 py-1.5">
      <span className="text-[#9E9387] uppercase tracking-widest text-[10px]">{label}</span>
      <span className="font-mono text-[#F5F1EA]">{value}</span>
    </div>
  );
}

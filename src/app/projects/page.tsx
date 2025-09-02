// import Image from "next/image";
// import { useEffect, useState } from "react";

"use client";                // jika halaman ini belum client component
import Image from "next/image";
import { useEffect, useState } from "react";

type P = { title: string; context: string; href?: string; color: string; thumb: string; details: string; chips?: string[];};

const items: P[] = [

  {
    title: "Portal Sekolah Website",
    context: "",
    color: "bg-sky-50",
    thumb: "/projects/portalsekolah-logo.png",
    details: `
I serve as a Software Quality Assurance Engineer on the Website Portal Sekolah project, delivering end-to-end web QA from test design to release readiness. I author and maintain comprehensive test cases mapped to real user flows, execute manual, smoke, and full regression suites each cycle, and document clear, reproducible defects while partnering closely with engineers for triage, prioritization, and fix verification. My approach emphasizes risk-based coverage on mission-critical journeys to ensure stability before every release.

Feature coverage includes Assessment Creation for Admin and Teachers (validation, role permissions, publish flows), Assessment Taking for Students (start-to-submit, navigation, error handling), Anti-Cheat safeguards that protect exam integrity without degrading UX, and Firebase-backed Answer Sync with device failover, enabling students to switch devices mid-assessment without losing previously saved answers. As a result of this focus on reliability and data resilience, production issues have remained minimal across releases, boosting release confidence and delivering a consistent, trustworthy exam experience for all user roles.`,
    chips: ["Test Case", "Manual Testing", "Smoke Test", "Regression Test"],
    },
  {
    title: "Portal Sekolah Mobile App",
    context: "",
    href: "https://github.com/knmukaffa/PSPenilaian_Automation_Android",
    color: "bg-sky-50",
    thumb: "/projects/portalsekolah-logo.png",
    details: `As the Software Quality Assurance Engineer for the Portal Sekolah Mobile App (Android & iOS), I deliver end-to-end quality from test design to release readiness. I author and maintain comprehensive test cases mapped to real user journeys; execute manual, smoke, and regression suites; and implement Android automation using Appium (Java) to codify critical paths. I collaborate closely with engineers and product to triage, prioritize, and verify fixes so each build moves through the pipeline predictably.

My feature focus spans Assessment Taking & Submission, Anti-Cheat safeguards during student assessments, and Attendance Report, plus many supporting flows across roles. The automation suite I built significantly reduced regression effort and cycle time, enabling faster, more confident releases, while my risk-based coverage kept production issues to a minimum across versions.`,
    chips: ["Test Case", "Manual Testing", "Smoke Test", "Automation Testing", "Regression Test", "Android", "iOS", ],
  },
  {
    title: "Cookit (Web & API Testing)",
    context: "",
    href: "https://github.com/orgs/Alta-10-Capstone-Group-3-Cookit/repositories",
    color: "bg-sky-50",
    thumb: "/projects/cookit-thumbnail.png",
    details: `I performed end-to-end website and API testing for Cookit as part of a two-person team, with both members contributing across layers. On the website side, we designed and executed 63 test scenarios covering core user journeys and edge cases, achieving 100% scenario coverage and 100% successful execution through a blend of manual testing and web automation using Selenium (BDD) in Java. My focus included clear, reproducible defect reporting, risk-based prioritization of critical paths, and maintainable BDD scenarios that map closely to business requirements—resulting in reliable, repeatable regression runs before every release. This engagement served as the capstone project of my Alterra Academy bootcamp, structured to simulate a production-grade QA workflow.

For the API layer, we created 277 test scenarios with 100% manual coverage, and 18% of those were converted into automation using Rest Assured (BDD) in Java to codify high-value, high-risk endpoints first. Manual API testing leveraged Postman (collections, environments, and assertion scripts) to validate status codes, payload schemas, authorization, negative paths, and idempotency. The automated suite concentrated on regression-prone contracts and critical workflows to accelerate feedback loops and reduce repetitive verification effort. Tooling used: Postman (API manual testing), Rest Assured BDD (API automation), Selenium BDD (web automation), all implemented in Java.`,
    chips: ["Test Case", "Web Manual Testing", "API Manual Testing", "API Automation Testing", "Web Automation Testing"],
  },
  {
    title: "Go Rest (API Testing)",
    context: "",
    href: "https://github.com/knmukaffa/ALTA-QE10-GroupProject-TEAM4",
    color: "bg-sky-50",
    thumb: "/projects/gorest-thumbnail.png",
    details: `This was the capstone project of my Alterra Academy bootcamp. I performed end-to-end manual and automation testing for the Go Rest API in a two-person team, with both members contributing across the full testing lifecycle. We focused on the Users and Posts resources, designing a comprehensive, risk-based suite of 34 test scenarios that covered core CRUD paths, validations, and negative cases. We achieved 100% coverage for both manual and automation, and 100% successful execution of all scenarios—ensuring every critical flow was exercised and verified against expected behavior.

For tooling and implementation, we used Postman for API manual testing (collections, environments, request chaining, and assertions). Our automation was built in Java using Rest Assured with Serenity BDD and Cucumber, organizing tests as readable Gherkin scenarios with reusable step definitions and data-driven outlines. Serenity reports provided traceable, living documentation of results, while the BDD structure made the suite maintainable and CI-ready for fast regression checks. Source code for the API automation tests is available on GitHub.`,
    chips: ["Test Case", "API Manual Testing", "API Automation Testing",],
  },
];



export default function Projects() {

const [active, setActive] = useState<P | null>(null);

// Tutup modal dengan tombol ESC + kunci scroll saat modal terbuka
useEffect(() => {
  const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
  window.addEventListener("keydown", onKey);
  document.body.style.overflow = active ? "hidden" : "";
  return () => {
    window.removeEventListener("keydown", onKey);
    document.body.style.overflow = "";
  };
}, [active]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold italic tracking-tight text-[#ADD8E6]">
    Testing With <span className="whitespace-nowrap">Passion &amp; Precision</span>
  </p>
      <h1 className="text-3xl font-bold text-brand-navy">Projects</h1>

      {/* ⬇️ Tambahkan wrapper gradasi di sekitar grid */}
      <div className="mt-6 rounded-3xl p-6 md:p-8 shadow-soft bg-gradient-to-tr from-teal-50 via-indigo-50 to-amber-50">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((p) => (
            
            <article
            key={p.title}
            className={`rounded-3xl shadow-soft ${p.color} hover:shadow-md transition p-0 cursor-pointer`}
            onClick={() => setActive(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(p)}
          >
            {/* Thumbnail 16:9 agar tinggi konsisten */}
            <figure className="overflow-hidden rounded-3xl">
              <div className="aspect-[16/9]">
                <Image
                  src={p.thumb}         // contoh: "/projects/web-regression.png"
                  alt={p.title}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>

            {/* Konten card */}
            <div className="p-6">
              <h3 className="font-semibold text-brand-navy">{p.title}</h3>
              {/* Chips (fallback ke context jika chips tidak ada) */}
              {p.chips?.length ? (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-[inset_0_-1px_0_rgba(255,255,255,.6)]"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-zinc-700">{p.context}</p>
              )}
            </div>
          </article>
          ))}
        </div>
      </div>
      {/* ⬆️ Akhir wrapper gradasi */}
      {/* === MODAL (muncul saat active != null) === */}
{active && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    aria-modal="true"
    role="dialog"
    onClick={() => setActive(null)}            // klik area gelap = tutup
  >
    {/* Overlay gelap + blur */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

    {/* Dialog */}
    <div
      className="relative z-10 w-[min(900px,92vw)] max-h-[90dvh] rounded-3xl bg-white shadow-2xl flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}     // cegah klik isi menutup modal
    >

      {/* Body */}
      <div className="modal-body p-6 pt-10 md:p-8 overflow-y-auto grow pr-3 rounded-b-3xl">
        <h3 className="text-2xl font-bold text-brand-navy">{active.title}</h3>
        {/* Chips (fallback ke context jika chips tidak ada) */}
        {active.chips?.length && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {active.chips.map((c) => (
              <li key={c} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {c}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 space-y-4 text-zinc-700 leading-7 text-justify">
          {active.details
            .split(/\n\s*\n/)             // pisah per paragraf (baris kosong)
            .map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
        </div>


        <div className="mt-6 flex gap-3">
          {active.href && (
            <a
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-blue-600 text-blue-700 hover:bg-blue-50 hover:border-blue-700 focus-visible:outline-blue-700"
            >
              View Repo
            </a>
          )}
          <button
            onClick={() => setActive(null)}
            className="btn bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-700"
          >
            Close
          </button>
        </div>
      </div>

      {/* Tombol X */}
      <button
        onClick={() => setActive(null)}
        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow hover:bg-white"
        aria-label="Close"
        title="Close"
      >
        ✕
      </button>
    </div>
  </div>
)}
    </section>
  );
}

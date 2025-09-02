import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-[300px_1fr] items-start">
        {/* Left Profile Card */}
        {/* LEFT PROFILE CARD */}
<aside className="rounded-3xl shadow-soft overflow-hidden relative">
  {/* background dekorasi */}
  <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-white" />

  {/* konten kartu */}
  <div className="relative z-10 p-8 flex flex-col items-center">
    <div className="w-40 h-40 rounded-full bg-white/60 grid place-items-center shadow-soft">
      <img
        src="/avatar.jpg" /* atau /avatar.svg */
        alt="Avatar"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>

    <div className="mt-6 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy leading-tight">
        KHAIRUN NAJMI<br/>MUKAFFA
      </h2>
      <p className="mt-2 text-zinc-600">Software QA Engineer</p>
    </div>

    {/* === Ikon Sosial === */}
    <div className="mt-4 flex items-center gap-3">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/knmukaffa/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white hover:border-brand-navy hover:shadow-soft transition"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-navy" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.67V24h-5v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V24H8V8z"/>
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/knmukaffa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white hover:border-brand-navy hover:shadow-soft transition"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-navy" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
        </svg>
      </a>
    </div>
  </div>
</aside>


        {/* Right Content */}
        <div className="relative">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100"></div>
          <div className="pointer-events-none absolute right-24 -top-4 h-3 w-3 rounded-full bg-yellow-200"></div>
          <div className="pointer-events-none absolute right-10 top-6 h-3 w-3 rounded-full bg-teal-200"></div>

          {/* === SLOGAN === */}
            <p className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.1] text-[#ADD8E6]">
              FROM TEST PLAN <span className="block">TO PRODUCTION CONFIDENCE</span>
            </p>
          <br />
          <h1 className="text-4xl font-bold text-brand-navy">About Me</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 text-justify">
            Graduated from Alterra Academy with expertise in manual and automation testing across web, mobile, and API platforms. Proficient in Java, SerenityBDD, Cucumber, Maven, Rest Assured, and Gherkin, with hands-on experience using Postman for API testing and JMeter for performance testing.
          <br /><br />
            Currently working as a QA Engineer with 2 years of professional experience, delivering high-quality testing through strong attention to detail, a proactive approach, and adaptability to new tools and methodologies. Passionate about ensuring product quality and optimizing testing efficiency.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="btn bg-[#1E40AF] text-white hover:bg-[#1B3A99] focus-visible:outline-blue-700">Projects</Link>
            {/* <Link href="/contact" className="btn border-2 border-[#1E40AF] text-[#1B3A99] hover:bg-blue-50 hover:border-[#1D4ED8] focus-visible:outline-blue-700">Contact</Link> */}
            <a
                href="/Khairun-NM-CV.pdf"
                download="Khairun-NM-CV.pdf"
                className="btn border-2 border-[#1E40AF] text-[#1B3A99] hover:bg-blue-50 hover:border-[#1D4ED8] focus-visible:outline-blue-700"
                aria-label="Download CV (PDF)"
                >
                {/* icon download kecil */}
                <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 3a1 1 0 0 1 1 1v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.707 9.293L11 11.586V4a1 1 0 0 1 1-1z"/>
                  <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H7v-3a1 1 0 1 0-2 0v3z"/>
                </svg>
                Download CV
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

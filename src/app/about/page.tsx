import type { ReactNode } from "react";

type SkillCardProps = {
  title: string;
  desc: string;          
  color: string;
  icon: React.ReactNode;
};

function SkillCard({ title, desc, color, icon }: SkillCardProps) {
  return (
    <div className={`rounded-3xl ${color} p-5 md:p-6 shadow-soft`}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow">
          <span className="text-xl" aria-hidden>{icon}</span>
        </span>
        <div>
          <h3 className="font-semibold leading-none text-brand-navy translate-y-[2px]">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-700 text-left">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-brand-navy">About</h1>

      {/* KARTU GRADIENT – website bg tetap putih */}
      <div className="mt-6 rounded-3xl p-8 md:p-10 shadow-soft bg-gradient-to-tr from-teal-50 via-indigo-50 to-amber-50">
        <p className="text-lg leading-8 text-zinc-700 text-justify">
          Graduated from Alterra Academy with expertise in manual and automation testing
          across web, mobile, and API platforms. Proficient in Java, SerenityBDD, Cucumber,
          Maven, Rest Assured, and Gherkin, with hands-on experience using Postman for API
          testing and JMeter for performance testing.
        </p>

        <p className="mt-6 text-lg leading-8 text-zinc-700 text-justify">
          Currently working as a QA Engineer with 2 years of professional experience,
          delivering high-quality testing through strong attention to detail, a proactive
          approach, and adaptability to new tools and methodologies. Passionate about
          ensuring product quality and optimizing testing efficiency.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-brand-navy">QA Engineer</h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Test Case"
            color="bg-sky-50"
            icon="📝"
            desc="Create structured test scenarios to cover requirements."
          />
          <SkillCard
            title="Manual Testing"
            color="bg-amber-50"
            icon="✍️"
            desc="Perform functional checks through smoke and regression tests."
          />
          <SkillCard
            title="WEB Automation"
            color="bg-sky-50"
            icon="🖥️"
            desc="Automate testing flows for web applications."
          />
          <SkillCard
            title="Mobile Automation"
            color="bg-violet-50"
            icon="📱"
            desc="Automate testing processes for mobile apps."
          />
          <SkillCard
            title="API Testing"
            color="bg-green-50"
            icon="⚙️"
            desc="Validate functionality and reliability of APIs."
          />
          <SkillCard
            title="Performance Testing"
            color="bg-rose-50"
            icon="🚀"
            desc="Assess system speed, stability, and scalability."
          />
          <SkillCard
            title="JAVA"
            color="bg-green-50"
            icon="♨️"
            desc="Apply programming skills for test development."
          />
          <SkillCard
            title="Code Versioning"
            color="bg-rose-50"
            icon="👨🏻‍💻"
            desc="Control and manage changes in project source code."
          />
        </div>

        <h2 className="mt-10 text-2xl font-bold text-brand-navy">Tools</h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Selenium"
            color="bg-amber-50"
            icon={<img src="/icons/tool-icons/selenium.svg" alt="Selenium" className="h-7 w-7 block" />}
            desc="A framework for automating web application testing."
          />
          <SkillCard
            title="Appium"
            color="bg-sky-50"
            icon={<img src="/icons/tool-icons/appium.svg" alt="Appium" className="h-7 w-7 block" />}
            desc="A framework for automating mobile application testing."
          />
          <SkillCard
            title="REST Assured"
            color="bg-green-50"
            icon={<img src="/icons/tool-icons/rest-assured.svg" alt="REST Assured" className="h-7 w-7 block" />}
            desc="A Java framework for automating and validating API testing."
          />
          <SkillCard
            title="Postman"
            color="bg-rose-50"
            icon={<img src="/icons/tool-icons/postman.svg" alt="Postman" className="h-7 w-7 block" />}
            desc="A tool for testing, managing, and documenting APIs."
          />
          <SkillCard
            title="GitHub"
            color="bg-violet-50"
            icon={<img src="/icons/tool-icons/github.svg" alt="GitHub" className="h-7 w-7 block" />}
            desc="A platform for hosting, version control, and collaboration on code."
          />
          <SkillCard
            title="JMeter"
            color="bg-teal-50"
            icon={<img src="/icons/tool-icons/jmeter.svg" alt="JMeter" className="h-7 w-7 block" />}
            desc="A tool for testing application performance, load, and scalability."
          />
        </div>

      </div>
    </section>
  );
}

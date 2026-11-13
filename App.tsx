import { useState } from "react";

const portrait =
  "https://images.unsplash.com/photo-1772146345330-e35689b58b2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
      {open ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      ) : (
        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      )}
    </svg>
  );
}

const projects = [
  {
    number: "01",
    category: "品牌設計",
    title: "山序茶所",
    description: "為當代茶品牌建立一套安靜、富有觸感的視覺識別。",
    color: "bg-[#c9d7c1]",
    accent: "text-[#405440]",
    href: "https://www.behance.net/",
  },
  {
    number: "02",
    category: "數位體驗",
    title: "島嶼散步",
    description: "讓旅行者用自己的步調，重新認識一座島嶼的數位指南。",
    color: "bg-[#d8c7b8]",
    accent: "text-[#5b4736]",
    href: "https://www.behance.net/",
  },
  {
    number: "03",
    category: "編輯設計",
    title: "日常採集",
    description: "一本記錄城市微小片刻、氣味與聲音的獨立刊物。",
    color: "bg-[#bccbd2]",
    accent: "text-[#374d56]",
    href: "https://www.behance.net/",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f3f0e9] text-[#1e2723]">
      <header className="relative z-50 border-b border-[#1e2723]/15">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a className="group flex items-center gap-3" href="#home" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d95d39] text-sm font-semibold text-white transition-transform group-hover:rotate-12">
              Y
            </span>
            <span className="text-[15px] font-semibold tracking-[0.16em]">YU-AN LIN</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a className="nav-link" href="#about">
              關於我
            </a>
            <a className="nav-link" href="#work">
              精選作品
            </a>
            <a className="nav-link" href="#links">
              更多連結
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#1e2723] px-5 py-3 text-[#f3f0e9] transition hover:bg-[#d95d39]"
              href="mailto:hello@yuanlin.design"
            >
              聯絡我
              <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#1e2723]/30 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 top-20 flex w-full flex-col border-b border-[#1e2723]/15 bg-[#f3f0e9] px-5 py-6 text-lg font-medium shadow-xl md:hidden">
            <a className="border-b border-[#1e2723]/10 py-4" href="#about" onClick={closeMenu}>
              關於我
            </a>
            <a className="border-b border-[#1e2723]/10 py-4" href="#work" onClick={closeMenu}>
              精選作品
            </a>
            <a className="border-b border-[#1e2723]/10 py-4" href="#links" onClick={closeMenu}>
              更多連結
            </a>
            <a
              className="flex items-center justify-between py-4 text-[#d95d39]"
              href="mailto:hello@yuanlin.design"
            >
              聯絡我 <ArrowUpRight />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section
          className="mx-auto grid max-w-[1320px] gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.07fr_0.93fr] lg:items-center lg:px-12 lg:pb-28 lg:pt-20"
          id="home"
        >
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#66736d]">
              <span className="h-px w-10 bg-[#d95d39]" />
              Independent designer · Taipei
            </div>
            <h1 className="max-w-3xl text-[clamp(3.8rem,8vw,7.7rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              把想法，
              <br />
              <span className="serif italic text-[#d95d39]">變成風景。</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-[#53605a] sm:text-xl">
              嗨，我是予安，一位專注於品牌與數位體驗的設計師。相信好的設計不只解決問題，也能讓日常多一點溫度。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                className="group inline-flex items-center gap-3 rounded-full bg-[#d95d39] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#bb4729]"
                href="#work"
              >
                看我的作品
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </a>
              <a
                className="inline-flex items-center border-b border-[#1e2723]/50 py-2 text-sm font-semibold transition hover:border-[#d95d39] hover:text-[#d95d39]"
                href="mailto:hello@yuanlin.design"
              >
                hello@yuanlin.design
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:mr-0">
            <div className="absolute -left-8 top-14 hidden h-32 w-32 rounded-full border border-[#d95d39]/40 lg:block" />
            <div className="image-frame relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[180px_180px_24px_24px] bg-[#d8c7b8] sm:w-[82%]">
              <img
                alt="予安在暖色自然光中的個人肖像"
                className="h-full w-full object-cover object-center"
                src={portrait}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2723]/25 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-7 left-0 rounded-2xl border border-white/60 bg-[#f3f0e9]/95 px-5 py-4 shadow-[0_18px_50px_rgba(30,39,35,0.14)] backdrop-blur">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7770]">
                Currently
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#5c8b67]" />
                開放合作中
              </span>
            </div>
            <svg
              className="absolute -right-2 -top-8 h-24 w-24 text-[#d95d39]"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 8v84M8 50h84M20 20l60 60M80 20 20 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </div>
        </section>

        <section className="bg-[#1e2723] text-[#f3f0e9]" id="about">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12 lg:py-28">
            <div>
              <p className="section-label text-[#e38a6c]">01 — About</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                設計是我理解
                <br />
                世界的方式。
              </h2>
            </div>
            <div>
              <p className="serif text-2xl leading-relaxed text-[#e7e2d8] sm:text-3xl">
                我喜歡在策略與感性之間找到平衡，將複雜的資訊整理成清楚、有個性的視覺語言。
              </p>
              <div className="mt-12 grid gap-8 border-t border-white/15 pt-9 sm:grid-cols-3">
                {[
                  ["06+", "年設計經驗"],
                  ["42", "完成專案"],
                  ["08", "合作城市"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <strong className="serif block text-4xl font-normal text-[#e38a6c]">
                      {value}
                    </strong>
                    <span className="mt-2 block text-sm text-white/55">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-2.5">
                {["品牌策略", "視覺識別", "UI / UX", "藝術指導", "編輯設計"].map((skill) => (
                  <span
                    className="rounded-full border border-white/20 px-4 py-2 text-xs tracking-wide text-white/75"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" id="work">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label text-[#d95d39]">02 — Selected work</p>
              <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">精選作品</h2>
            </div>
            <a
              className="group flex w-fit items-center gap-2 border-b border-[#1e2723]/30 pb-1 text-sm font-semibold hover:text-[#d95d39]"
              href="https://www.behance.net/"
              rel="noreferrer"
              target="_blank"
            >
              在 Behance 查看全部
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight />
              </span>
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                className={`project-card group relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl p-7 ${project.color}`}
                href={project.href}
                key={project.title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] opacity-55">
                    {project.number}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f3f0e9]/80 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#1e2723] group-hover:text-white">
                    <ArrowUpRight />
                  </span>
                </div>
                <div aria-hidden="true" className={`project-mark ${project.accent}`}>
                  {project.number === "01" && <span className="leaf-mark" />}
                  {project.number === "02" && <span className="sun-mark" />}
                  {project.number === "03" && <span className="type-mark">日</span>}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-55">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">{project.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 opacity-65">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1e2723]/15" id="links">
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <p className="section-label text-[#d95d39]">03 — Find me online</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
                更多關於
                <br />
                <span className="serif italic">我的日常</span>
              </h2>
              <div className="border-t border-[#1e2723]/20">
                {[
                  ["Instagram", "設計、攝影與生活片刻", "https://www.instagram.com/"],
                  ["Behance", "完整專案與設計過程", "https://www.behance.net/"],
                  ["LinkedIn", "工作經歷與專業連結", "https://www.linkedin.com/"],
                  ["Medium", "關於設計的思考筆記", "https://medium.com/"],
                ].map(([name, detail, href]) => (
                  <a
                    className="link-row group flex items-center justify-between gap-5 border-b border-[#1e2723]/20 py-6"
                    href={href}
                    key={name}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                      <span className="text-xl font-semibold sm:text-2xl">{name}</span>
                      <span className="text-sm text-[#66736d]">{detail}</span>
                    </div>
                    <span className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d95d39]">
                      <ArrowUpRight size={22} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-3 mb-3 overflow-hidden rounded-[28px] bg-[#d95d39] text-white sm:mx-5 sm:mb-5">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-end lg:py-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                Have a project in mind?
              </span>
              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl">
                一起做點有意思的事。
              </h2>
            </div>
            <a
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f3f0e9] px-7 py-4 text-sm font-semibold text-[#1e2723] transition hover:bg-[#1e2723] hover:text-white"
              href="mailto:hello@yuanlin.design"
            >
              寫信給我
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-8 text-xs text-[#66736d] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© 2025 Yu-An Lin. All rights reserved.</p>
        <p>Designed with curiosity in Taipei.</p>
      </footer>
    </div>
  );
}

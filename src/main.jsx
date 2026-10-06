import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight, Code2, Mail, Menu, X, Gamepad2,
  ShieldCheck, Terminal, Sparkles, ChevronDown
} from 'lucide-react'
import './index.css'

const skills = ['HTML', 'CSS', 'Java', 'JavaScript', 'Laravel', 'Git', 'VS Code', 'GitHub', 'Bootstrap', 'Python', 'C#', 'Unity', 'Cybersecurity']

const projects = [
  {
    title: 'Modern Web Interface',
    description: 'A responsive frontend concept focused on clean UI, accessibility, and smooth interactions across desktop and mobile.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    icon: Code2,
  },
  {
    title: 'Unity Game Project',
    description: 'A game-development project exploring gameplay systems, interactive mechanics, and C# scripting in Unity.',
    tags: ['Unity', 'C#', 'Game Dev'],
    icon: Gamepad2,
  },
  {
    title: 'Cybersecurity Lab',
    description: 'A learning-focused security environment for practicing fundamentals, documenting findings, and improving defensive thinking.',
    tags: ['Cybersecurity', 'Python', 'Linux'],
    icon: ShieldCheck,
  },
]

function App() {
  const [open, setOpen] = React.useState(false)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => go('home')} className="text-lg font-black tracking-tight">Jonathan Lomboy<span className="text-zinc-500">.</span></button>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {['home','about','skills','projects','contact'].map((id) => (
              <button key={id} onClick={() => go(id)} className="capitalize transition hover:text-white">{id}</button>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Toggle menu">
            {open ? <X size={20}/> : <Menu size={20}/>} 
          </button>
        </nav>
        {open && <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
          {['home','about','skills','projects','contact'].map((id) => <button key={id} onClick={() => go(id)} className="block w-full py-3 text-left capitalize text-zinc-300">{id}</button>)}
        </div>}
      </header>

      <main>
        <section id="home" className="grid-bg relative flex min-h-screen items-start px-5 pt-24 lg:px-8">
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 py-0 md:grid-cols-[1.25fr_.75fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300">
                <Sparkles size={14}/> Building. Learning. Improving.
              </div>
              <p className="mb-4 font-mono text-sm text-zinc-500">Hello, I'm</p>
              <h1 className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl">Jonathan<span className="text-zinc-600">.</span></h1>
              <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-zinc-300 sm:text-3xl">Frontend Developer <span className="text-zinc-600">|</span> Unity Game Developer <span className="text-zinc-600">|</span> Aspiring Cybersecurity Professional</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">I create responsive web experiences, explore game development with Unity, and continuously build my cybersecurity skills through hands-on learning.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={() => go('projects')} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200">View Projects <ArrowUpRight size={17}/></button>
                <button onClick={() => go('contact')} className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-zinc-200 transition hover:bg-white/5">Let's Connect</button>
              </div>
            </div>
            <div className="float hidden md:block">
              <div className="glow rounded-3xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur">
                <div className="mb-5 flex items-center gap-2 font-mono text-xs text-zinc-500"><Terminal size={15}/> developer.json</div>
                <pre className="overflow-x-auto font-mono text-sm leading-7 text-zinc-300">{`{\n  "name": "Jonathan",\n  "focus": [\n    "Frontend",\n    "Unity",\n    "Cybersecurity"\n  ],\n  "status": "learning & building"\n}`}</pre>
              </div>
            </div>
          </div>
          <button onClick={() => go('about')} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-zinc-600 transition hover:text-white" aria-label="Scroll down"><ChevronDown size={24}/></button>
        </section>

        <section id="about" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-sm text-zinc-600">01 / ABOUT</p>
            <div className="mt-4 grid gap-10 md:grid-cols-2">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">A developer with a <span className="text-zinc-500">curious mindset.</span></h2>
              <div className="space-y-5 text-zinc-400 leading-7">
                <p>I enjoy turning ideas into practical digital experiences. My main focus is frontend development, where I care about responsive layouts, clean code, and user-friendly interfaces.</p>
                <p>Outside the browser, I explore Unity and C# for game development and cybersecurity to understand how systems can be built, tested, and protected.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 bg-white/[.015] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-sm text-zinc-600">02 / SKILLS</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Tools I work with.</h2>
            <div className="mt-10 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white">{skill}</span>)}</div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-sm text-zinc-600">03 / PROJECTS</p>
            <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Selected work.</h2><span className="text-sm text-zinc-600">Replace these cards with your real projects.</span></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map(({title, description, tags, icon: Icon}) => <article key={title} className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-white/20">
              <div className="flex items-start justify-between"><div className="rounded-xl border border-white/10 bg-white/5 p-3"><Icon size={21}/></div><ArrowUpRight className="text-zinc-700 transition group-hover:text-white" size={20}/></div>
              <h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{tag}</span>)}</div>
            </article>)}</div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-white/[.015] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="font-mono text-sm text-zinc-600">04 / CONTACT</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Let's build something <span className="text-zinc-500">meaningful.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-zinc-500">Have a project, collaboration, or opportunity in mind? Update the links below with your real accounts.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:jonathanlomboy41@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 hover:bg-zinc-200"><Mail size={17}/> Email Me</a>
              <a href="https://github.com/jonathanlomboy00-oss" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">GitHub</a>
              <a href="https://www.linkedin.com/in/jonathan-lomboy-761237436/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-7 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row"><span>© {new Date().getFullYear()}</span><span>Keep learning. Keep building.</span></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

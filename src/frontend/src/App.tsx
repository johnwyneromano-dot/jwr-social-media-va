import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart2,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Inbox,
  Mail,
  Menu,
  MessageSquare,
  Palette,
  Pencil,
  Smartphone,
  Users,
  Video,
  Workflow,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── NAV ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Sample Work", href: "#sample-work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="font-serif font-bold text-lg text-navy tracking-tight"
          data-ocid="nav.link"
        >
          JWR
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-navy text-white hover:bg-navy/90 rounded-full px-5"
            onClick={() => handleNav("#contact")}
            data-ocid="nav.primary_button"
          >
            Let&apos;s Chat
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-navy p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-border px-6 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm font-medium text-navy"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  className="w-full bg-navy text-white hover:bg-navy/90 rounded-full"
                  onClick={() => handleNav("#contact")}
                  data-ocid="nav.primary_button"
                >
                  Let&apos;s Chat
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 md:pt-20 bg-background overflow-hidden"
      data-ocid="hero.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <p className="text-sage font-medium tracking-widest text-sm uppercase">
              John Wayne Romano
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4rem] font-bold text-navy leading-tight">
              Social Media <span className="italic text-sage">Virtual</span>{" "}
              Assistant
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-md">
              Helping Small Businesses Grow Their Online Presence &amp; Reclaim
              Their Time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-navy text-white hover:bg-navy/90 rounded-full px-8 text-base font-medium shadow-card"
                onClick={() => handleScroll("#contact")}
                data-ocid="hero.primary_button"
              >
                Let&apos;s Work Together
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy/5 rounded-full px-8 text-base font-medium"
                onClick={() => handleScroll("#services")}
                data-ocid="hero.secondary_button"
              >
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Right: Headshot panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Sage background panel */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-sage/30" />
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-sage/10" />
              <img
                src="/assets/uploads/myxj_20250302230419063_save-019d3960-ef3b-73fd-932f-17ebfb62f9d3-1.jpg"
                alt="John Wayne Romano — Social Media Virtual Assistant"
                className="relative z-10 w-72 md:w-80 lg:w-96 h-auto rounded-2xl object-cover shadow-card-hover"
                style={{ maxHeight: "500px", objectPosition: "top" }}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-xl px-4 py-3 shadow-card flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sage animate-pulse" />
                <span className="text-xs font-semibold text-navy">
                  Available for projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white" data-ocid="about.section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: decorative image collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/uploads/myxj_20250302230419063_save-019d3960-ef3b-73fd-932f-17ebfb62f9d3-1.jpg"
                  alt="John Wayne Romano"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-sage-light -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-navy/5 -z-10" />
              {/* Stat chips */}
              <div className="absolute top-4 -right-8 bg-navy text-white rounded-xl px-4 py-3 shadow-card text-center">
                <p className="text-2xl font-serif font-bold">15+</p>
                <p className="text-xs opacity-80">Posts Curated</p>
              </div>
              <div className="absolute -bottom-2 left-4 bg-white rounded-xl px-4 py-3 shadow-card text-center">
                <p className="text-2xl font-serif font-bold text-sage">30</p>
                <p className="text-xs text-muted-foreground">Day Strategies</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-sage font-medium tracking-widest text-sm uppercase mb-2">
                About Me
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-snug">
                Turning Followers Into a{" "}
                <span className="italic">Community</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              I am a dedicated Social Media Virtual Assistant passionate about
              helping small business owners turn followers into a community.
              With an eye for aesthetic storytelling and a knack for
              organization, I specialize in creating consistent, high-quality
              content that reflects your brand&apos;s unique voice.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My goal is to handle the digital heavy lifting so you can focus on
              what you do best: growing your business.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Content Strategy", value: "✓" },
                { label: "Brand Storytelling", value: "✓" },
                { label: "Community Building", value: "✓" },
                { label: "Platform Management", value: "✓" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center text-sage text-xs font-bold">
                    {item.value}
                  </div>
                  <span className="text-sm font-medium text-navy">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Calendar,
    title: "Social Media Management",
    color: "bg-navy/5",
    iconColor: "text-navy",
    items: [
      "Content Calendar Planning & Scheduling",
      "Platform Management (Instagram, TikTok, Facebook)",
      "Caption Writing & Hashtag Research",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    color: "bg-sage/10",
    iconColor: "text-sage",
    items: [
      "Graphic Design for Posts & Stories (Canva-based)",
      "Short-form Video Editing (Reels/TikToks)",
      "Basic Photo Retouching & Aesthetic Curation",
    ],
  },
  {
    icon: Users,
    title: "Community Engagement",
    color: "bg-navy/5",
    iconColor: "text-navy",
    items: [
      "Inbox/DM Management",
      "Comment Moderation",
      "Outreach to Potential Collaborators",
    ],
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background"
      data-ocid="services.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sage font-medium tracking-widest text-sm uppercase mb-2">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            My Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.card.${i + 1}`}
            >
              <Card className="h-full border-0 shadow-card hover:shadow-card-hover transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 flex flex-col gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TOOLS ─────────────────────────────────────────────────────────────────────
const tools = [
  {
    category: "Design",
    tools: "Canva, Adobe Lightroom, CapCut",
    icon: Palette,
  },
  {
    category: "Scheduling",
    tools: "Metricool, Buffer, Meta Business Suite",
    icon: Calendar,
  },
  {
    category: "Organization",
    tools: "Notion, Trello, Google Workspace",
    icon: Workflow,
  },
  {
    category: "Communication",
    tools: "Slack, WhatsApp, Zoom",
    icon: MessageSquare,
  },
];

function ToolsSection() {
  return (
    <section id="tools" className="py-24 bg-white" data-ocid="tools.section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sage font-medium tracking-widest text-sm uppercase mb-2">
              My Toolkit
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-10">
              Tools I Work With
            </h2>
            <div className="flex flex-col gap-4">
              {tools.map((row, i) => (
                <motion.div
                  key={row.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-sage/50 transition-colors"
                  data-ocid={`tools.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-sage/15 flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider">
                      {row.category}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {row.tools}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl bg-sage/10 p-8 flex flex-col gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-navy mx-auto flex items-center justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    Platform Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Managing your brand across all major social channels
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Instagram",
                    "TikTok",
                    "Facebook",
                    "Canva",
                    "Notion",
                    "Zoom",
                  ].map((platform) => (
                    <div
                      key={platform}
                      className="bg-white rounded-lg py-2 px-1 text-center text-xs font-medium text-navy shadow-xs"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
                <div className="border-t border-sage/20 pt-4">
                  <p className="text-xs text-muted-foreground text-center italic">
                    &ldquo;The right tools make all the difference in delivering
                    consistent, quality content.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SAMPLE WORK ──────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    title: "Instagram Grid Mockup",
    label: "Brew & Bloom — Cohesive Grid Story",
    img: "/assets/generated/sample-instagram-grid.dim_800x800.jpg",
    icon: Camera,
    description:
      "A 3×3 cohesive Instagram grid for Brew & Bloom café, showcasing warm earthy tones, latte art, and a consistent visual mood.",
  },
  {
    id: 2,
    title: "Before & After",
    label: "Raw Photo → Branded Post Transformation",
    img: "/assets/generated/sample-before-after.dim_900x500.jpg",
    icon: Pencil,
    description:
      "Transforming a plain product photo into a fully branded, Instagram-ready post for Glow Rituals skincare.",
  },
  {
    id: 3,
    title: "Sample Carousel",
    label: "Glow Rituals — Educational Carousel",
    img: "/assets/generated/sample-carousel.dim_800x800.jpg",
    icon: Video,
    description:
      "A 3-slide educational carousel for Glow Rituals, teaching skincare mistakes in a consistent branded aesthetic.",
  },
];

function SampleWorkSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section
      id="sample-work"
      className="py-24 bg-background"
      data-ocid="sample_work.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sage font-medium tracking-widest text-sm uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Sample Work
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={slide.img}
                  alt={slide.label}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center">
                    <slide.icon className="w-5 h-5 text-sage" />
                  </div>
                  <span className="text-xs font-semibold text-sage uppercase tracking-widest">
                    {slide.id} / {slides.length}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy">
                  {slide.title}
                </h3>
                <p className="text-sage font-medium">{slide.label}</p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Previous slide"
              data-ocid="sample_work.pagination_prev"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-navy w-6" : "bg-navy/25"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  data-ocid={`sample_work.item.${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Next slide"
              data-ocid="sample_work.pagination_next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const projects = [
  {
    icon: BarChart2,
    title: "Project Alpha (Concept)",
    description:
      "Developed a 30-day content strategy for a startup focused on increasing engagement by 20% through interactive Stories and Reels.",
    tag: "Strategy",
  },
  {
    icon: Camera,
    title: "Visual Storytelling",
    description:
      "Managed a personal or mock account that achieved consistent aesthetic branding across 15+ posts.",
    tag: "Branding",
  },
  {
    icon: Workflow,
    title: "Efficiency",
    description:
      'Streamlined a workflow using Notion to track content from "Idea" to "Published" in under 4 hours a week.',
    tag: "Productivity",
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-white"
      data-ocid="projects.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sage font-medium tracking-widest text-sm uppercase mb-2">
            Work History
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`projects.card.${i + 1}`}
            >
              <Card className="h-full border-0 shadow-card hover:shadow-card-hover transition-all duration-300 rounded-2xl group cursor-default">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                      <project.icon className="w-6 h-6 text-sage" />
                    </div>
                    <span className="text-xs font-semibold bg-navy/8 text-navy rounded-full px-3 py-1">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "oklch(var(--sage) / 0.12)" }}
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sage font-medium tracking-widest text-sm uppercase">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-snug">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Send me a message, and let&apos;s chat about your goals!
            </p>
            <a
              href="mailto:johnwyneromano@gmail.com"
              className="flex items-center gap-3 text-navy font-medium hover:text-sage transition-colors group"
              data-ocid="contact.link"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center group-hover:bg-sage/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              johnwyneromano@gmail.com
            </a>
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="font-serif text-xl font-semibold mb-2">
                &ldquo;Your brand deserves to be seen.&rdquo;
              </p>
              <p className="text-white/70 text-sm">
                Let me handle your social media so you can focus on running your
                business.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sage">
                  <img
                    src="/assets/uploads/myxj_20250302230419063_save-019d3960-ef3b-73fd-932f-17ebfb62f9d3-1.jpg"
                    alt="John Wayne Romano"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">John Wayne Romano</p>
                  <p className="text-xs text-white/60">Social Media VA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="border-0 shadow-card rounded-2xl">
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 rounded-full bg-sage/20 mx-auto flex items-center justify-center mb-4">
                      <Heart className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you
                      shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    data-ocid="contact.modal"
                  >
                    <h3 className="font-serif text-xl font-bold text-navy">
                      Send a Message
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-navy"
                      >
                        Name
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, name: e.target.value }))
                        }
                        required
                        className="rounded-xl border-border focus:border-sage"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-navy"
                      >
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, email: e.target.value }))
                        }
                        required
                        className="rounded-xl border-border focus:border-sage"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-navy"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about your brand and goals..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        required
                        className="rounded-xl border-border focus:border-sage resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-navy text-white hover:bg-navy/90 rounded-xl py-3 text-base font-medium"
                      data-ocid="contact.submit_button"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-bold">John Wayne Romano</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Social Media Virtual Assistant helping small businesses grow their
              online presence.
            </p>
            <a
              href="mailto:johnwyneromano@gmail.com"
              className="text-sage hover:text-sage/80 text-sm transition-colors flex items-center gap-2"
            >
              <Mail size={14} />
              johnwyneromano@gmail.com
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Social Media Management",
                "Content Creation",
                "Community Engagement",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {year} John Wayne Romano. All rights reserved.</p>
          <p>
            Built with <Heart className="inline w-3.5 h-3.5 text-sage mx-0.5" />{" "}
            using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-sage/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ToolsSection />
        <SampleWorkSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

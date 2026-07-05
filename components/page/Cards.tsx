import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services";
import type { OdooApp } from "@/lib/odooApps";
import type { Industry } from "@/lib/industries";
import type { CaseStudy } from "@/lib/caseStudies";
import type { VideoItem } from "@/lib/videos";
import { cn } from "@/lib/cn";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <article className="group h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-700 text-white transition-colors group-hover:bg-sky-500">
        <service.icon className="h-6 w-6" />
      </span>
      <h2 className={cn("mt-5 font-display font-bold text-navy-800", detailed ? "text-2xl" : "text-lg")}>
        {service.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-navy-600/90">{service.summary}</p>
      {detailed && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <InfoBlock title="What it is" body={service.what} />
          <InfoBlock title="Who it is for" body={service.who} />
          <ListBlock title="Key benefits" items={service.benefits} />
          <ListBlock title="Typical deliverables" items={service.deliverables} />
        </div>
      )}
      <Link href="/demos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600">
        Book a Consultation <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function AppCard({ app }: { app: OdooApp }) {
  return (
    <article className="group h-full rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-mist text-navy-700 group-hover:bg-navy-700 group-hover:text-white">
          <app.icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="mt-1 font-display text-lg font-bold text-navy-800">{app.name}</h2>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy-600/90">{app.description}</p>
      <p className="mt-3 rounded-xl bg-mist/70 p-3 text-xs leading-relaxed text-navy-600">
        <strong className="text-navy-800">Use case:</strong> {app.useCase}
      </p>
    </article>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700">
        <industry.icon className="h-6 w-6" />
    </span><h2 className="mt-5 font-display text-xl font-bold text-navy-800">{industry.label}</h2>
      <p className="mt-3 text-sm leading-relaxed text-navy-600/90">{industry.summary}</p>
      <ListBlock title="Common problems" items={industry.problems} />
     <ListBlock title="Odoo solution areas" items={industry.solutions} />
      <p className="mt-4 text-sm leading-relaxed text-navy-700">{industry.approach}</p>
      <Link href="/demos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
        Discuss this industry <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{study.industry}</span>
       <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy-500">{study.industry}</span>
      </div>
      <h2 className="mt-5 font-display text-xl font-bold text-navy-800">{study.title}</h2>
      <InfoBlock title="Challenge" body={study.challenge} />
      <InfoBlock title="Solution" body={study.solution} />
      <ListBlock title="Results" items={study.results} />
      <p className="mt-4 text-xs font-semibold uppercase text-navy-400">{study.timeline}</p>
      <Link href={`/case-studies/${study.slug}`} className="mt-auto inline-flex pt-5 items-center gap-2 text-sm font-semibold text-sky-700">
        View Case Study <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-navy-900 via-navy-700 to-sky-700">
        <div className="absolute left-4 top-4 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {video.category}
        </div>
        <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-navy-800 shadow-lift">
          <Play className="h-7 w-7 fill-current" />
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-white">
          {video.duration}
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-display text-lg font-bold text-navy-800">{video.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy-600/90">{video.description}</p>
        <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700" type="button">
          Watch Video <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-4">
      <h3 className="text-xs font-semibold uppercase text-navy-400">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600/90">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4">
      <h3 className="text-xs font-semibold uppercase text-navy-400">{title}</h3>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-navy-600/90">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-sky-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


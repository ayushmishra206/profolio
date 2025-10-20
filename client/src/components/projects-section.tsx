import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Activity,
	ArrowUpRight,
	BarChart3,
	Database,
	ExternalLink,
	Github,
	Layers,
	Rocket,
	Sparkles,
	Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const filterOptions = [
	{ id: "all", label: "All Work" },
	{ id: "client", label: "Client Delivery" },
	{ id: "product", label: "Product Builds" },
	{ id: "opensource", label: "Open Source" },
	{ id: "experiment", label: "Experiments" },
] as const;

type FilterKey = (typeof filterOptions)[number]["id"];

type ProjectMetric = {
	label: string;
	value: string;
	icon: LucideIcon;
};

type Project = {
	id: string;
	title: string;
	tagline: string;
	summary: string;
	status: "Shipped" | "In Progress" | "Beta";
	hero?: boolean;
	filters: FilterKey[];
	tech: string[];
	highlights: string[];
	tags: string[];
	metrics?: ProjectMetric[];
	links?: {
		live?: string;
		repo?: string;
	};
};

const achievementMetrics = [
	{
		label: "Enterprise launches",
		value: "12",
		caption: "large migrations shipped with zero downtime",
		icon: Layers,
	},
	{
		label: "Monthly active users",
		value: "1.2M+",
		caption: "supported across client ecosystems",
		icon: Users,
	},
	{
		label: "Release cadence",
		value: "3× faster",
		caption: "average cycle time improvement",
		icon: Rocket,
	},
] satisfies Array<{
	label: string;
	value: string;
	caption: string;
	icon: LucideIcon;
}>;

const projects: Project[] = [
	{
		id: "splitwisely",
		title: "SplitWisely",
		tagline: "Group spending without the awkward spreadsheets.",
		summary:
			"Realtime expense splitting PWA with offline-first sync and guided settlement flows for friend groups and trips.",
		status: "Shipped",
		hero: true,
		filters: ["product"],
		tech: ["React 18", "TypeScript", "Supabase", "Tailwind CSS", "Vite"],
		highlights: [
			"Row level security keeps ledgers scoped to group membership while preserving realtime updates.",
			"Optimistic UI reconciles payments client-side and rolls back if Supabase policies reject mutations.",
			"Background workers collapse event streams so balance recalculations complete under 30ms.",
		],
		tags: ["Mobile-first", "PWA"],
		metrics: [
			{ label: "Active groups", value: "120+", icon: Users },
			{ label: "Sync latency", value: "<200ms", icon: Activity },
			{ label: "Automated tests", value: "92%", icon: BarChart3 },
		],
		links: {
			live: "https://split.ayushmishra.com/",
			repo: "https://github.com/ayushmishra206/splitwisely",
		},
	},
	{
		id: "washington-org",
		title: "Washington.org Migration",
		tagline: "Tourism replatform without SEO attrition.",
		summary:
			"Led Drupal 7 → 8 migration for Washington.org while introducing a Pattern Lab design system and content governance playbooks.",
		status: "Shipped",
		filters: ["client"],
		tech: ["Drupal", "Pattern Lab", "MySQL", "Varnish", "Memcached"],
		highlights: [
			"Replay-safe migration scripts moved 25k+ nodes while preserving canonical URLs and analytics tagging.",
			"Edge caching strategy kept the 1M+ monthly visitor pipeline performant during cutover.",
			"Component library unlocked 40% faster authoring cycles for the content team.",
		],
		tags: ["Enterprise", "Migration"],
		metrics: [{ label: "Traffic served", value: "1M+/mo", icon: Layers }],
	},
	{
		id: "civicrm-portal",
		title: "Carers UK Member Portal",
		tagline: "Self-service workflows for support networks.",
		summary:
			"Built a CiviCRM backed portal so carers can manage membership details and renewals without manual staff intervention.",
		status: "Shipped",
		filters: ["client"],
		tech: ["CiviCRM", "Drupal", "Next.js", "Tailwind"],
		highlights: [
			"Segment-driven onboarding sequences dynamically tailor resources for new carers.",
			"Accessible UI passes WCAG 2.1 AA with keyboard-first navigation safeguards.",
			"Workflow automation trims a full-time-equivalent of manual data entry each quarter.",
		],
		tags: ["Accessibility", "Member Experience"],
		metrics: [{ label: "Manual work saved", value: "1 FTE", icon: BarChart3 }],
	},
	{
		id: "profolio-kit",
		title: "Profolio UI Kit",
		tagline: "Composable resume blocks for indie builders.",
		summary:
			"Open source component kit powering this portfolio with focus on dark mode, motion primitives, and isomorphic rendering.",
		status: "Beta",
		filters: ["opensource", "product"],
		tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
		highlights: [
			"Theme tokens expose CSS variables for effortless brand alignment.",
			"Motion-safe animations respect reduced-motion preferences by default.",
			"Composable data schemas hydrate sections from CMS or static content interchangeably.",
		],
		tags: ["Design Systems"],
		metrics: [{ label: "Components", value: "28", icon: Sparkles }],
		links: {
			repo: "https://github.com/ayushmishra206/profolio",
		},
	},
	{
		id: "delivery-radar",
		title: "Delivery Radar",
		tagline: "Engineering health snapshots on demand.",
		summary:
			"Lightweight experiment that turns GitHub and Linear data into narrative briefs for stakeholders each Friday.",
		status: "Beta",
		filters: ["experiment", "opensource"],
		tech: ["Next.js", "tRPC", "PostgreSQL", "Tailwind"],
		highlights: [
			"Calculates deployment frequency, change fail rate, and MTTR in a single pass.",
			"Natural language summaries help non-technical partners grok progress without dashboards.",
			"Opinionated prompts keep weekly updates under five minutes of prep time.",
		],
		tags: ["Developer Experience"],
		metrics: [{ label: "Teams piloting", value: "4", icon: Rocket }],
	},
];

const statusVariants: Record<Project["status"], string> = {
	Shipped: "border-emerald-200 bg-emerald-100 text-emerald-800",
	"In Progress": "border-amber-200 bg-amber-100 text-amber-800",
	Beta: "border-sky-200 bg-sky-100 text-sky-800",
};

const StatusBadge = ({ status }: { status: Project["status"] }) => (
	<Badge
		variant="outline"
		className={cn(
			"rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
			statusVariants[status]
		)}
	>
		{status}
	</Badge>
);

const TechBadge = ({ tech, invert }: { tech: string; invert?: boolean }) => (
	<Badge
		variant="outline"
		className={cn(
			"rounded-full border px-3 py-1 text-xs font-medium",
			invert
				? "border-white/40 bg-white/10 text-white"
				: "border-slate-200 bg-white text-slate-700"
		)}
	>
		{tech}
	</Badge>
);

const HeroMetricCard = ({ metric }: { metric: ProjectMetric }) => {
	const Icon = metric.icon;
	return (
		<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur transition-transform duration-300 hover:-translate-y-1">
			<div>
				<p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
					{metric.label}
				</p>
				<p className="mt-1 text-lg font-semibold">{metric.value}</p>
			</div>
			<Icon className="h-5 w-5 text-white/70" />
		</div>
	);
};

const AchievementMetric = ({
	metric,
}: {
	metric: (typeof achievementMetrics)[number];
}) => {
	const Icon = metric.icon;
	return (
		<div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.24em] text-primary/70">
						{metric.label}
					</p>
					<p className="mt-2 text-3xl font-semibold text-slate-900">
						{metric.value}
					</p>
				</div>
				<Icon className="h-10 w-10 text-primary/60" />
			</div>
			<p className="mt-3 text-sm leading-relaxed text-slate-600">
				{metric.caption}
			</p>
		</div>
	);
};

const HeroProjectCard = ({ project }: { project: Project }) => (
	<Card className="relative overflow-hidden border-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
		<div
			className="pointer-events-none absolute inset-0 opacity-40"
			style={{
				backgroundImage:
					"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
				backgroundSize: "18px 18px",
			}}
		/>
		<CardHeader className="relative space-y-6">
			<div className="flex flex-wrap items-center gap-3">
				<StatusBadge status={project.status} />
				<Badge
					variant="outline"
					className="rounded-full border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white"
				>
					Featured Build
				</Badge>
				{project.tags.map((tag) => (
					<Badge
						key={tag}
						variant="secondary"
						className="rounded-full border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white"
					>
						{tag}
					</Badge>
				))}
			</div>
			<CardTitle className="text-3xl sm:text-4xl font-semibold text-white">
				{project.title}
			</CardTitle>
			<p className="text-lg text-white/80">{project.summary}</p>
		</CardHeader>
		<CardContent className="relative grid gap-10 lg:grid-cols-[1.6fr,1fr]">
			<div className="space-y-8">
				<p className="text-sm uppercase tracking-[0.32em] text-primary/40">
					{project.tagline}
				</p>
				<ul className="space-y-3 text-sm text-white/80">
					{project.highlights.map((item) => (
						<li key={item} className="flex gap-3">
							<Sparkles className="mt-0.5 h-4 w-4 text-primary/50" />
							<span>{item}</span>
						</li>
					))}
				</ul>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<TechBadge key={tech} tech={tech} invert />
					))}
				</div>
				<div className="flex flex-wrap gap-3">
					{project.links?.live && (
						<Button
							asChild
							size="lg"
							className="bg-white text-slate-900 hover:bg-white/90"
						>
							<a
								href={project.links.live}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2"
							>
								Visit Live App
								<ExternalLink className="h-4 w-4" />
							</a>
						</Button>
					)}
					{project.links?.repo && (
						<Button
							asChild
							size="lg"
							variant="outline"
							className="border-white/40 bg-white/10 text-white hover:bg-white/20"
						>
							<a
								href={project.links.repo}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2"
							>
								View Source
								<Github className="h-4 w-4" />
							</a>
						</Button>
					)}
				</div>
			</div>
			<div className="space-y-4">
				<div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
					<p className="text-sm text-white/70">
						Designed for iOS and Android home screens, featuring offline-ready caches and deterministic syncing so every participant stays in lockstep.
					</p>
				</div>
				{project.metrics && project.metrics.length > 0 && (
					<div className="grid gap-3 sm:grid-cols-2">
						{project.metrics.map((metric) => (
							<HeroMetricCard key={metric.label} metric={metric} />
						))}
					</div>
				)}
			</div>
		</CardContent>
	</Card>
);

const ProjectCard = ({ project }: { project: Project }) => {
	const headlineMetric = project.metrics?.[0];
	const HeadlineIcon = headlineMetric?.icon;

	return (
		<div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<div className="relative flex h-full flex-col gap-6 p-6">
				<div className="flex flex-wrap items-center gap-2">
					<StatusBadge status={project.status} />
					{project.tags.map((tag) => (
						<Badge
							key={tag}
							variant="secondary"
							className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
						>
							{tag}
						</Badge>
					))}
				</div>
				<div>
					<h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
					<p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-primary/70">
						{project.tagline}
					</p>
				</div>
				<p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
				<ul className="space-y-2 text-sm text-slate-600">
					{project.highlights.map((item) => (
						<li key={item} className="flex items-start gap-3">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
							<span>{item}</span>
						</li>
					))}
				</ul>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<Badge
							key={tech}
							variant="outline"
							className="rounded-full border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
						>
							{tech}
						</Badge>
					))}
				</div>
				<div className="mt-auto flex flex-wrap items-center gap-3">
					{project.links?.live && (
						<Button asChild size="sm">
							<a
								href={project.links.live}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2"
							>
								Live
								<ExternalLink className="h-4 w-4" />
							</a>
						</Button>
					)}
					{project.links?.repo && (
						<Button asChild size="sm" variant="outline">
							<a
								href={project.links.repo}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2"
							>
								Source
								<Github className="h-4 w-4" />
							</a>
						</Button>
					)}
					{headlineMetric && HeadlineIcon && (
						<div className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600">
							<HeadlineIcon className="h-3.5 w-3.5 text-primary/70" />
							<span>{headlineMetric.value}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default function ProjectsSection() {
	const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

	const filteredProjects = useMemo(() => {
		if (activeFilter === "all") {
			return projects;
		}
		return projects.filter((project) => project.filters.includes(activeFilter));
	}, [activeFilter]);

	const heroProject = filteredProjects.find((project) => project.hero);
	const supportingProjects = filteredProjects.filter(
		(project) => project.id !== heroProject?.id
	);

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			const offsetTop = element.offsetTop - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<section id="projects" className="relative py-24">
			<div
				className="pointer-events-none absolute inset-0 -z-20"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
					backgroundSize: "22px 22px",
				}}
			/>
			<div className="absolute inset-x-0 top-0 -z-30 h-64 bg-gradient-to-b from-white via-white/60 to-transparent" />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<Badge variant="secondary" className="rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em]">
						Build Journal
					</Badge>
					<h2 className="mt-6 text-3xl sm:text-4xl font-mono font-bold text-slate-900">
						Projects crafted with care
					</h2>
					<p className="mt-4 text-lg text-slate-600 sm:mx-auto sm:max-w-3xl">
						A snapshot of client engagements, personal products, and experiments where reliable engineering meets thoughtful experience design.
					</p>
				</div>

				<div className="mt-16 grid gap-6 md:grid-cols-3">
					{achievementMetrics.map((metric) => (
						<AchievementMetric key={metric.label} metric={metric} />
					))}
				</div>

				<div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-sm sm:px-12">
					<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm uppercase tracking-[0.28em] text-primary/70">
								Partnership style
							</p>
							<p className="mt-3 max-w-3xl text-lg text-slate-700">
								I embed with product and platform squads, pairing on architecture, design systems, and release discipline so improvements land with impact—not just polish.
							</p>
						</div>
						<Button
							variant="outline"
							className="inline-flex items-center gap-2 rounded-full border-slate-300 px-4 py-2 text-sm"
							onClick={scrollToContact}
						>
							Let’s collaborate
							<ArrowUpRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="sticky top-20 z-20 mt-12 flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/80 p-2 shadow-lg shadow-slate-200/40 backdrop-blur">
					{filterOptions.map((option) => (
						<Button
							key={option.id}
							variant={activeFilter === option.id ? "default" : "outline"}
							size="sm"
							className={cn(
								"rounded-full px-5 py-2 text-sm font-medium transition",
								activeFilter === option.id
									? "bg-primary text-white shadow shadow-primary/30"
									: "border-transparent bg-transparent text-slate-600 hover:border-primary/30 hover:bg-primary/5"
							)}
							onClick={() => setActiveFilter(option.id)}
						>
							{option.label}
						</Button>
					))}
				</div>

				<div className="mt-16 space-y-16">
					{heroProject && <HeroProjectCard project={heroProject} />}

					{supportingProjects.length > 0 && (
						<div className="space-y-12">
							<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<h3 className="text-2xl font-mono font-semibold text-slate-900">
										Additional Builds
									</h3>
									<p className="text-slate-600 sm:max-w-2xl">
										Delivery notes, internal tooling, and open source work that keeps teams shipping confidently and customers delighted.
									</p>
								</div>
								<Badge variant="secondary" className="self-start rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-700">
									{supportingProjects.length} projects
								</Badge>
							</div>

							<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
								{supportingProjects.map((project) => (
									<ProjectCard key={project.id} project={project} />
								))}
							</div>
						</div>
					)}
				</div>

				<div className="mt-20 text-center">
					<Button
						onClick={scrollToContact}
						size="lg"
						className="rounded-full bg-primary px-8 py-5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
					>
						Discuss Your Project
					</Button>
				</div>
			</div>
		</section>
	);
}


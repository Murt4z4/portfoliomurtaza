import { FaLinkedin, FaDribbble, FaTimes } from "react-icons/fa";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import AboutNavLinks from "./AboutNavLinks";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

import React, { useRef, useEffect, useState } from "react";

const achievements = [
	{
		number: "$225K+",
		label: "earned on Upwork across 30+ projects",
	},
	{
		number: "£50M+",
		label: "enterprise programs delivered",
	},
	{
		number: "2,800+",
		label: "hours across enterprise and startup engagements",
	},
	{
		number: "1.5M+",
		label: "end users impacted through deployed products",
	},
];

const aboutSections = [
	{ id: "expertise", label: "Expertise" },
	{ id: "tools", label: "Tool Stack" },
	{ id: "clients", label: "Enterprise Clients" },
	{ id: "achievements", label: "Achievements" },
];

const enterpriseClients = [
	{ name: "Vodafone", logo: "https://img.icons8.com/color/48/vodafone.png" },
	{ name: "Novartis", logo: "https://img.icons8.com/color/48/novartis.png" },
	{ name: "MUFG", logo: "https://img.icons8.com/color/48/bank.png" },
	{
		name: "Capita Asset Services",
		logo: "https://img.icons8.com/color/48/business.png",
	},
	{
		name: "Real Chemistry",
		logo: "https://img.icons8.com/color/48/chemistry.png",
	},
	{
		name: "Johnson & Johnson",
		logo: "https://img.icons8.com/color/48/johnson-and-johnson.png",
	},
	{
		name: "Quanta Dialysis Technologies",
		logo: "https://img.icons8.com/color/48/medical-heart.png",
	},
	{ name: "KOWA", logo: "https://img.icons8.com/color/48/company.png" },
];

const ProfileSection = () => {
	const [activeSection, setActiveSection] = useState("about");
	const sectionRefs = useRef({});

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			let current = "about";
			for (const sec of aboutSections) {
				const el = document.getElementById(sec.id);
				if (el) {
					const offsetTop = el.offsetTop - 140; // adjust for header
					if (scrollY >= offsetTop) {
						current = sec.id;
					}
				}
			}
			setActiveSection(current);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Layout>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.1 } },
				}}
				className="min-h-screen max-w-4xl mx-auto bg-transparent text-white px-6 md:px-12 lg:flex lg:gap-4">
				{/* Sidebar Navigation */}
				<motion.div variants={fadeUp} className="mb-8 lg:w-1/4">
					<AboutNavLinks
						activeSection={activeSection}
						onNavClick={(id) => {
							if (id === "about") {
								window.scrollTo({ top: 0, behavior: "smooth" });
							} else {
								document
									.getElementById(id)
									?.scrollIntoView({ behavior: "smooth", block: "start" });
							}
						}}
					/>
				</motion.div>

				{/* Main Content */}
				<div id="about" className="lg:w-full">
					{/* Intro Text */}
						<motion.h1
						variants={fadeUp}
						id="about"
						className="text-3xl md:text-4xl font-bold mb-4">
							About
					</motion.h1>
					<motion.p
						variants={fadeUp}
							className="text-white text-base mb-6 max-w-3xl leading-relaxed">
							<p>
	The first step in building something great is knowing what to create and what to avoid.
</p><br/>
<p>
	I help teams connect <strong>strategy, business, design, and technology</strong> to deliver products that solve real problems. With over 15 years of experience, I have led digital transformation, enterprise system delivery, and startup MVPs in fintech, healthcare, real estate, and telecom.
</p><br/>
<p>
	I work as a <strong>Product Manager, Business Analyst, UX/UI Designer, and Full-Stack Consultant.</strong> I help organizations define goals, document requirements, and manage the delivery from concept to launch. My work includes ERP and CRM systems like <strong>Oracle Fusion, SAP, Salesforce, and Odoo</strong>, along with MarTech platforms such as <strong>Salesforce Marketing Cloud and HubSpot.</strong>
</p><br/>
<p>
	I have worked with clients like <strong>MUFG Pensions & Funds (£300B+ AUM)</strong>, <strong>Johnson & Johnson Innovative Medicine ($85B)</strong>, <strong>Novartis ($53B)</strong>, <strong>Vodafone UK (£45.7B)</strong>, <strong>Real Chemistry ($555M)</strong>, and <strong>Quanta Dialysis Technologies ($70M)</strong> to modernize workflows, improve user experience, and drive measurable results.
</p><br/>

					</motion.p>

					{/* Contact Buttons */}
					<motion.div
						variants={fadeUp}
						className="flex flex-wrap items-center gap-4">
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="mailto:hello@murtaza.work"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200">
							hello@murtaza.work
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="https://www.upwork.com/freelancers/~011bb3aa35b3bd5e52"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200 flex items-center gap-2">
							Invite me on Upwork <span className="text-base">↗</span>
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.1 }}
							href="https://www.linkedin.com/in/murt4z4/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-6 h-6 flex items-center justify-center rounded-xl bg-[#343434] hover:bg-[#444] transition-colors duration-200"
							style={{ minWidth: 40, minHeight: 40 }}>
							<span className="sr-only">LinkedIn</span>
							<img
								src="/icon.png"
								alt="LinkedIn"
								className="w-5 h-5 object-contain"
							/>
						</motion.a>
					</motion.div>

					{/* What I Deliver Section */}
					<motion.div variants={fadeUp} className="my-8">
						<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
							Services & Focus Areas
						</h3>
						<p className="text-white text-base mb-6 max-w-3xl leading-relaxed">
							- Digital Transformation Consulting (ERP, CRM, AI Automation)<br/>
							- Product Management & Business Analysis<br/>
							- UX/UI Design & Prototyping<br/>
							- Full-Stack & Frontend Development<br/>
							- MarTech & CRM Integration (Salesforce, HubSpot)<br/>
							- Process Optimization & Change Management<br/>
							- No-Code & Low-Code MVP Development
						</p>
					</motion.div>

					{/* Why Clients Work With Me */}
					<motion.div variants={fadeUp} className="my-8">
						<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
							Tools & Platforms
						</h3>
						<div className="grid grid-cols-1 gap-3">
								{[
									"Jira • Confluence • ClickUp • Figma • Miro • Whimsical • Lucidchart",
									"Salesforce • SAP • Oracle • Odoo • HubSpot",
									"Webflow • Supabase • Next.js • Tailwind • Shadcn UI",
									"Zapier • OpenAI API",
									"Industry Experience: FinTech • HealthTech • PropTech / Real Estate • MarTech • Telecom • Logistics • Manufacturing • SaaS",
								].map((item, idx) => (
								<div key={idx} className="flex items-start gap-3">
									<span className="text-green-400 mt-1">•</span>
									<span className="text-gray-300 text-base leading-relaxed">
										{item}
									</span>
								</div>
							))}
						</div>
					</motion.div>

					{/* Experience Overview Section */}
					<motion.div variants={fadeUp} className="my-8">
						<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
							Experience Overview
						</h3>
						<div className="space-y-6 text-white text-base max-w-3xl leading-relaxed">
							<div>
								<h4 className="text-lg md:text-xl font-semibold text-white mb-1">
									Product Manager | Business Analyst | UX/UI | MVP Builder | Founder – Rovamo
								</h4>
								<p className="text-gray-400 text-sm mb-2">February 2015 – Present</p>
								<p className="text-gray-300 mb-2">
									Lead strategy and delivery for digital transformation programs and MVP development across fintech, healthcare, and enterprise sectors.
								</p>
								<p className="text-gray-300 mb-2">
									Delivered over 50 digital products from concept to launch, aligning stakeholders and improving delivery efficiency by 30%.
								</p>
								<p className="text-gray-300 mb-2">
									Worked with enterprise clients such as MUFG Pensions & Funds, Vodafone UK, Novartis, Johnson & Johnson Innovative Medicine, Real Chemistry, and Quanta Dialysis Technologies.
								</p>
								<p className="text-gray-300">
									Built investor-ready prototypes and scalable systems supporting cross-regional expansion.
								</p>
							</div>

							<div>
								<h4 className="text-lg md:text-xl font-semibold text-white mb-1">
									Senior Salesforce Business Analyst | Real Chemistry
								</h4>
								<p className="text-gray-400 text-sm mb-2">July 2021 – November 2022</p>
								<p className="text-gray-300 mb-2">
									Led requirement analysis and delivery for Salesforce programs across healthcare clients.
								</p>
								<p className="text-gray-300 mb-2">
									Improved patient engagement workflows and regulatory compliance, reducing approval cycles and improving release quality.
								</p>
								<p className="text-gray-300">
									Supported enterprise change management and aligned global delivery across the US and EU.
								</p>
							</div>

							<div>
								<h4 className="text-lg md:text-xl font-semibold text-white mb-1">
									Product Manager | ENGEO (US)
								</h4>
								<p className="text-gray-400 text-sm mb-2">October 2017 – March 2018</p>
								<p className="text-gray-300 mb-2">
									Directed roadmap and delivery for an AI-based internal document intelligence system.
								</p>
								<p className="text-gray-300">
									Improved operational efficiency through automation and measurable time savings across departments.
								</p>
							</div>

							<div>
								<h4 className="text-lg md:text-xl font-semibold text-white mb-1">
									Technical Business Analyst | Vodafone (UK)
								</h4>
								<p className="text-gray-400 text-sm mb-2">April 2016 – November 2016</p>
								<p className="text-gray-300 mb-2">
									Delivered documentation and process flows for Vodafone's mobile self-care platform serving over 1.5 million users.
								</p>
								<p className="text-gray-300">
									Enhanced onboarding and billing UX, reducing support tickets and improving retention metrics.
								</p>
							</div>

							<div>
								<h4 className="text-lg md:text-xl font-semibold text-white mb-1">
									Business Analyst | MUFG Pensions & Funds (formerly Capita & Link Asset Services, UK)
								</h4>
								<p className="text-gray-400 text-sm mb-2">September 2011 – January 2015</p>
								<p className="text-gray-300 mb-2">
									Led analysis and documentation for PRISM, a £40M shareholder and asset management platform.
								</p>
								<p className="text-gray-300">
									Enabled automation of corporate actions and compliance processes through Euroclear (CREST) integration.
								</p>
							</div>
						</div>
					</motion.div>

					{/* About Sections */}
					<div className="space-y-20 pt-8">
						{aboutSections.map((sec, idx) => (
							<motion.section
								key={sec.id}
								id={sec.id}
								ref={(el) => (sectionRefs.current[sec.id] = el)}
								className="scroll-mt-32"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: idx * 0.15 }}
								viewport={{ once: true, amount: 0.2 }}>
								<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
									{sec.label}
								</h2>
								{sec.id === "expertise" ? (
									<div>
										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Product Management & Business Analysis</h3>
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												"Product Management",
												"Business Analysis",
												"Agile Project Management",
												"Product Requirements Document (PRD)",
												"Requirements Analysis",
												"Requirements Specification",
												"Requirement Management",
												"Change Management",
												"Digital Transformation",
												"Enterprise Architecture",
												"Business Process Modeling",
												"Process Mapping",
												"Stakeholder Management",
												"User Stories & Acceptance Criteria",
												"Roadmap & Backlog Planning",
												"MVP Definition & Delivery",
												"UAT & QA Coordination",
												"Salesforce, SAP, and Oracle ERP Implementation",
												"AI Product Management",
												"SaaS & Enterprise Solutions",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>

										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">UX/UI Design & Experience Strategy</h3>
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												"UX/UI Design",
												"User Experience Strategy",
												"User Interface Design",
												"Information Architecture",
												"Interaction Design",
												"Wireframing & Prototyping",
												"Journey Mapping",
												"Usability Testing",
												"Heuristic Evaluation",
												"Visual Communication",
												"Design Systems & Style Guides",
												"Component Libraries",
												"Responsive Web Design",
												"Mobile App Design",
												"High-Fidelity & Interactive Prototypes",
												"Figma",
												"Miro",
												"Whimsical",
												"Lucidchart",
												"Webflow",
												"Framer",
												"Balsamiq",
												"Accessibility & Microinteractions",
												"Design Documentation & Developer Handoff",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>

										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Full-Stack & Front-End Development</h3>
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												"Full-Stack Development",
												"Frontend Development",
												"Web Application Development",
												"Website Redesign",
												"Next.js",
												"React",
												"TypeScript",
												"JavaScript",
												"Tailwind CSS",
												"Shadcn UI",
												"Framer Motion",
												"Node.js",
												"Supabase",
												"Firebase",
												"PostgreSQL",
												"Git",
												"API Integration",
												"REST",
												"Webhooks",
												"Payment Gateway Integration",
												"Chatbot & AI Agent Development",
												"OpenAI API",
												"LangChain",
												"Zapier Automation",
												"Website Optimization",
												"Database Architecture & Design",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>

										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">No-Code & Automation</h3>
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												"No-Code MVP Development",
												"Airtable",
												"Softr",
												"Odoo",
												"HubSpot",
												"AI Workflow Automation",
												"CRM & ERP System Setup",
												"Zapier & Automation Pipelines",
												"AI Model Integration",
												"AI Agent Development",
												"AI Consulting for Workflow Efficiency",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>

										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Tools & Collaboration</h3>
										<div className="flex flex-wrap gap-3 mb-8">
											{[
												"Jira",
												"Confluence",
												"ClickUp",
												"Notion",
												"Trello",
												"Slack",
												"Loom",
												"Microsoft Teams",
												"Lucidchart",
												"Figma",
												"Miro",
												"Whimsical",
												"Mixpanel",
												"Google Analytics (GA4)",
												"SQL (Basic Queries, Data Insights)",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>

										<h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Industry Domains</h3>
										<div className="flex flex-wrap gap-3">
											{[
												"FinTech",
												"HealthTech",
												"PropTech / Real Estate",
												"Telecom",
												"Logistics",
												"Manufacturing",
												"SaaS",
												"E-Commerce",
											].map((label) => (
												<span key={label} className="bg-[#343434] text-white text-sm px-4 py-2 rounded-xl font-medium">{label}</span>
											))}
										</div>
									</div>
								) : sec.id === "tools" ? (
									<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
										{[
											// Design & Planning Tools
											{
												name: "Figma",
												subtitle: "Design & prototyping platform",
												logo: "https://img.icons8.com/color/48/figma--v1.png",
											},
											{
												name: "Miro",
												subtitle: "Visual collaboration platform",
												logo: "/miro.svg",
											},
											{
												name: "Whimsical",
												subtitle: "Flowcharts & wireframing",
												logo: "/w.svg",
											},
											{
												name: "Notion",
												subtitle: "Docs, notes & knowledge base",
												logo: "/skills/notion.png",
											},
											{
												name: "Jira",
												subtitle: "Agile project & issue tracking",
												logo: "https://img.icons8.com/color/48/jira.png",
											},
											{
												name: "Confluence",
												subtitle: "Team documentation & wiki",
												logo: "https://img.icons8.com/color/48/confluence--v2.png",
											},
											// CRM & Automation
											{
												name: "Salesforce",
												subtitle: "CRM & customer platform",
												logo: "https://img.icons8.com/color/48/salesforce.png",
											},
											{
												name: "Make.com",
												subtitle: "Visual automation platform",
												logo: "https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg",
											},
											{
												name: "Zapier",
												subtitle: "Connect apps & automate workflows",
												logo: "https://img.icons8.com/fluency/48/zapier.png",
											},
											{
												name: "Softr",
												subtitle: "No-code apps on Airtable",
												logo: "https://cdn.prod.website-files.com/6772e8855f7859bc8df95c78/67a8cb58af31ced4a0dcda4c_Logo.svg",
											},
											{
												name: "Airtable",
												subtitle: "Database meets spreadsheet",
												logo: "https://img.icons8.com/stickers/100/airtable.png",
											},
											{
												name: "Supabase",
												subtitle: "Open-source Firebase alternative",
												logo: "https://img.icons8.com/fluency/48/supabase.png",
											},
											{
												name: "Framer",
												subtitle: "Design to website builder",
												logo: "https://img.icons8.com/plumpy/50/framer-logo.png",
											},
											// Development Tools
											{
												name: "React",
												subtitle: "UI library for building apps",
												logo: "https://img.icons8.com/plasticine/100/react.png",
											},
											{
												name: "Next.js",
												subtitle: "Full-stack React framework",
												logo: "/skills/nextjs.png",
											},
											{
												name: "Vercel",
												subtitle: "Frontend deployment platform",
												logo: "/vercel.svg",
											},
											{
												name: "Netlify",
												subtitle: "Web development platform",
												logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
											},
											// AI Tools
											{
												name: "LangChain",
												subtitle: "Framework for AI applications",
												logo: "/skills/langchain.svg",
											},
											{
												name: "Flowise",
												subtitle: "Visual tool for AI workflows",
												logo: "/skills/Logo.png",
											},
											{
												name: "OpenAI APIs",
												subtitle: "GPT, embeddings & AI tools",
												logo: "/skills/chatgpt.png",
											},
											{
												name: "LlamaIndex",
												subtitle: "Data framework for LLMs",
												logo: "https://img.icons8.com/color/48/llama.png",
											},
											{
												name: "Loveable",
												subtitle: "AI-powered app builder",
												logo: "/skills/lovable.png",
											},
											{
												name: "Bolt",
												subtitle: "AI coding assistant",
												logo: "/bolt.jpg",
											},
											{
												name: "Claude",
												subtitle: "AI assistant by Anthropic",
												logo: "/claude.svg",
											},
											{
												name: "Tempo AI",
												subtitle: "AI workflow automation",
												logo: "/tempo.svg",
											},
											{
												name: "Cursor",
												subtitle: "AI-powered code editor",
												logo: "/skills/cursor.png",
											},
											{
												name: "v0 by Vercel",
												subtitle: "AI UI generator",
												logo: "/vercel.svg",
											},
											{
												name: "Replit",
												subtitle: "AI-powered coding platform",
												logo: "/replit.svg",
											},
											{
												name: "GitHub Copilot",
												subtitle: "AI pair programmer",
												logo: "https://img.icons8.com/color/48/github.png",
											},
											{
												name: "Bubble",
												subtitle: "No-code app builder",
												logo: "/bubble.svg",
											},
											{
												name: "Webflow",
												subtitle: "Visual web development",
												logo: "/webflow.svg",
											},

											

											{
												name: "Midjourney",
												subtitle: "AI image generation",
												logo: "/skills/midjourney.png",
											},
											
											// {
											// 	name: "Hugging Face",
											// 	subtitle: "AI model hub",
											// 	logo: "https://img.icons8.com/color/48/hugging-face.png",
											// },

											
										].map((tool, idx) => (
											<div
												key={tool.name}
												className="flex items-center justify-between bg-[#343434] rounded-2xl px-4 py-4 md:px-2 md:py-2 hover:bg-[#444] transition group cursor-pointer">
												<div className="flex items-center gap-4 w-full">
													<img
														src={tool.logo}
														alt={tool.name}
														className="w-12 h-12 object-contain rounded-lg"
													/>
													<div>
														<div className="text-white font-semibold text-base md:text-lg leading-tight">
															{tool.name}
														</div>
														<div className="text-gray-400 text-xs md:text-sm font-normal">
															{tool.subtitle}
														</div>
													</div>
												</div>
												<div className="flex-shrink-0 ml-4">
													<svg
														width="22"
														height="22"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="text-gray-400 group-hover:text-white transition"
														viewBox="0 0 24 24">
														<path
															d="M9 5l7 7-7 7"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
											</div>
										))}
									</div>
								) : sec.id === "clients" ? (
									<div>
										<p className="text-gray-300 text-base leading-relaxed mb-6">
											I've had the privilege of working with leading enterprise
											clients across various industries:
										</p>
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											{enterpriseClients.map((client, idx) => (
												<motion.div
													key={client.name}
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.5, delay: idx * 0.1 }}
													viewport={{ once: true }}
													className="bg-[#343434] rounded-xl p-4 py-6 flex flex-col justify-center items-center text-center hover:bg-[#444] transition group cursor-pointer">
													{/* <img
														src={client.logo}
														alt={client.name}
														className="w-12 h-12 object-contain mb-3"
													/> */}
													<span className="text-white text-md font-medium leading-tight">
														{client.name}
													</span>
												</motion.div>
											))}
										</div>
									</div>
								) : sec.id === "achievements" ? (
									<div className="w-full relative overflow-hidden py-2">
										{/* Left Fade Overlay */}
										<div
											className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
											style={{
												background:
													"linear-gradient(90deg, #101010 60%, rgba(16,16,16,0.7) 80%, transparent 100%)",
											}}></div>

										{/* Right Fade Overlay */}
										<div
											className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
											style={{
												background:
													"linear-gradient(270deg, #101010 60%, rgba(16,16,16,0.7) 80%, transparent 100%)",
											}}></div>

										{/* Slider */}
										<div className="relative w-full overflow-hidden">
											<div
												className="flex gap-3 animate-achievement-slider"
												style={{ minWidth: "1200px" }}>
												{[...achievements, ...achievements].map((item, idx) => (
													<motion.div
														key={idx}
														initial={{ opacity: 0, y: 40 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.6, delay: idx * 0.18 }}
														viewport={{ once: true, amount: 0.2 }}
														className="relative bg-[#343434] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[10px] rounded-br-[10px] 
																	 py-5 px-7 flex flex-col justify-between items-start 
																	 min-h-[250px] w-[220px] max-w-xs overflow-hidden shadow-lg">
														{/* Number */}
														<span className="text-xl md:text-3xl font-bold text-white z-10">
															{item.number}
														</span>

														{/* Spacer */}
														<div className="flex-1 w-full"></div>

														{/* Text */}
														<span className="text-gray-300 text-sm font-medium z-10 whitespace-pre-line mt-auto mb-0 leading-snug break-words">
															{item.label}
														</span>
													</motion.div>
												))}
											</div>
										</div>
									</div>
								) : null}
							</motion.section>
						))}
					</div>
				</div>
			</motion.div>
		</Layout>
	);
};

export default ProfileSection;

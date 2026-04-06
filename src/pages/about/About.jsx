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
					<motion.div
						variants={fadeUp}
						className="text-white mb-8 max-w-3xl space-y-5">
						<p className="text-base md:text-lg text-gray-200 font-medium leading-snug tracking-tight">
							Business Analyst · Product Manager · UX/UI Designer · AI Solutions
							Consultant
						</p>
						<p className="text-base md:text-lg text-gray-300 leading-relaxed">
							15+ years delivering digital transformation, enterprise software,
							and change management for global organizations including Novartis
							(US), Vodafone (UK), and MUFG (UK). Experience spans healthcare,
							fintech, telecom, manufacturing, and logistics.
						</p>
					</motion.div>

					{/* Contact Buttons */}
					<motion.div
						variants={fadeUp}
						className="flex flex-wrap items-center gap-4">
						<motion.a
							whileHover={{ scale: 1.05 }}
							href="mailto:murtaza.akbar@gmail.com"
							className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200">
							murtaza.akbar@gmail.com
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
								{sec.id === "clients" ? (
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

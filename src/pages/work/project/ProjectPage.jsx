import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../../../data/projectsData";
import Layout from "../../../layout/Layout";

const ProjectPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projectsData.find((p) => p.id === id);

	// Scroll to top when component mounts or project ID changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	// Filter out the current project by id and ensure uniqueness by id
	const moreProjects = [];
	const seenIds = new Set();
	for (const p of projectsData) {
		if (p.id !== id && !seenIds.has(p.id)) {
			moreProjects.push(p);
			seenIds.add(p.id);
		}
	}

	if (!project) return <div className="text-white">Project not found.</div>;

	return (
		<Layout>
			<div className="min-h-screen bg-transparent text-white px-4 pb-6 md:px-14 md:py-6">
				<button
					className="mb-2 py-2 bg-transparent text-stone-300 cursor-pointer hover:text-white text-sm font-medium"
					onClick={() => navigate("/work")}>
					&larr; Back
				</button>
				<h1 className="text-3xl md:text-3xl font-base mb-6 md:mb-10">
					{project.title}
				</h1>
				<div className="mb-16">
					<img
						src={project.images[0]}
						alt={project.title}
						className="w-full rounded-xl shadow-md"
					/>
				</div>
				<div className="mb-12 w-full flex items-center justify-between ">
					<p className="text-lg leading-relaxed text-gray-300 mb-10 text-left max-w-2xl">
						{project.description}
					</p>
					<div className="flex gap-2">
						{project.prototype && (
							<a href={project.prototype} target="_blank">
								<button className="bg-[#343434] hover:bg-[#444] cursor-pointer text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2">
									Web Prototype
								</button>
							</a>
						)}

						{project.mobile && (
							<a href={project.prototype} target="_blank">
								<button className="bg-[#343434] hover:bg-[#444] cursor-pointer text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2">
									Mobile Prototype
								</button>
							</a>
						)}
						{project.link && (
							<a href={project.link} target="_blank">
								<button className="bg-[#343434] hover:bg-[#444] cursor-pointer text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2">
								{project.text?"MVP Link" :"Front End Prototype"}
								</button>
							</a>
						)}
					</div>
				</div>
				<h2 className="text-3xl font-base mb-4">More Work</h2>
				<motion.div
					className="w-full min-h-[60vh] px-4 py-6 md:px-14 md:py-6"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}>
					<div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
						{moreProjects.map((p) => (
							<div
								key={p.id}
								className="relative rounded-xl overflow-hidden shadow-lg group hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
								onClick={() => navigate(`/work/project/${p.id}`)}>
								{/* Image */}
								<img
									src={p.src}
									alt={p.title}
									className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300"
								/>

								{/* Hover Title with Glassmorphism */}
								<div
									className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl flex justify-between items-center
                   bg-black/30 backdrop-blur-md text-white text-sm shadow-md opacity-0 translate-y-4
                   group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
									<span>{p.title}</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 ml-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</Layout>
	);
};

export default ProjectPage;

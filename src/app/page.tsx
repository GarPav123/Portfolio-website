/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { WorldMap } from "@/components/ui/world-map";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Portfolio() {
	const [menuOpened, setMenuOpened] = useState(false);

	const updateMenuOpened = () => {
		setMenuOpened(!menuOpened);
	};
	return (
   
		<div className="bg-black min-h-screen text-white overflow-hidden font-sans">
      
			<BackgroundBeams />			<div className="w-full h-16 bg-black border-b border-gray-800 flex items-center px-6">
				<div className="text-xl font-bold">devteja.netlify.app</div>
				<div className="ml-auto flex space-x-4">{/* Bookmark icons */}</div>
			</div>

			{/* Main content */}

			<div className="container mx-auto px-6 py-8">
				{/* Header section */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left section: Name and title */}
					<div className="lg:col-span-1">
						<h1 className="text-5xl md:text-6xl font-bold mb-2">
							Garimella Pavan Teja{" "}
						</h1>
						<h2 className="text-xl text-gray-300 mb-6">
							{" "}
							Entrepreneur and Full-stack Developer
						</h2>

						<div className="flex items-center mb-4 bg-gray-800 bg-opacity-30 rounded-md w-fit">
							<div className="text-pink-400 mr-2">
								
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg> */}
							</div>
							<span>garimellapavanteja123@gmail.com</span>
						</div>

						<div className="mb-4 bg-gray-800 bg-opacity-30 rounded-md p-3 w-fit">
							<span>Well, Im running 20</span>
						</div>

						{/* Education section */}
						<div className="mt-8 relative">
							<div className="bg-pink-400 text-black font-bold px-4 py-2 rounded-md inline-block mb-4">
								Education
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md">
								<div className="mb-2">2022-2026 CGPA - 8.5/10</div>
								<div className="mb-2 text-gray-400">
									VIT (Vellore Institute Institute of Technology)
								</div>
								<div className="text-xl font-bold mb-4">
									B.Tech Computer Science
								</div>
								<p className="text-gray-300">
									Pursued a Bachelors degree in Computer Engineering. Part of
									various high output generating teams and led the Universitys
									Basketball team.
								</p>
							</div>
						</div>

						{/* Contact section */}
						<CardContainer className="inter-var w-[390px] -mt-[40px]">
							<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
								<CardItem
									translateZ="50"
									className="text-xl font-bold text-neutral-600 dark:text-white"
								>
									<span>Hey, I'm Pavan </span>
								</CardItem>
								<CardItem
									as="p"
									translateZ="60"
									className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
								>
									I Code and Solve and Play
								</CardItem>
								<CardItem
									translateZ="100"
									rotateX={20}
									rotateZ={-10}
									className="w-full mt-4"
								>
									<img
										src="/homeImg.jpeg"
										height="1000"
										width="1000"
										className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
										alt="thumbnail"
									/>
								</CardItem>
								<div className="flex justify-between items-center mt-8">
									<CardItem
										translateZ={20}
										translateX={40}
										as="button"
										className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
									>
										Follow me on Github
									</CardItem>
									<CardItem
										translateZ={20}
										translateX={40}
										as="button"
										className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
									>
										Connect with me
									</CardItem>
								</div>
							</CardBody>
						</CardContainer>
					</div>

					{/* Middle section: Experience */}
					<div className="lg:col-span-1">
						<div className="relative">
							<div className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-md inline-block mb-4">
								Portfolio
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md mb-6">
								<div className="text-gray-400 mb-2">
									July 2024 - PRESENT | Stealth Startup
								</div>
								<div className="text-xl font-bold mb-4">
									Full Stack Developer
								</div>
								<p className="text-gray-300 mb-4">
									Played a major role in helping build a seamless, fully
									responsive and dynamic product which is used by more than
									100K+ users.
								</p>
								<p className="text-gray-300">
									Designed an intuitive UI, reducing latency by 10% and boosting
									user experience.
								</p>
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md mb-6">
								<div className="text-gray-400 mb-2">
									June 2024 - July 2024 | Tech Mahindra
								</div>
								<div className="text-xl font-bold mb-4">
									Automation and Testing Engineer
								</div>
								<p className="text-gray-300 mb-4">
									Assisted industry experienced professionals to help automate
									100+ user test cases to create a better workflow experience
									and time+cost reduction.
								</p>
								<p className="text-gray-300">
									Implemented numerous OOPs concepts to create a better testing
									pipleline and reduced the duration of process by 30%.
								</p>
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md">
								<div className="text-gray-400 mb-2">
									January 2024 - May 2024 | Vicuna Kouture
								</div>
								<div className="text-xl font-bold mb-4">
									Tech Lead and Team Manager
								</div>
								<p className="text-gray-300 mb-4">
									Led a team of developers and designers to create an industry
									standard e-commerce platform. Integrated multiple APIs to make
									the product futuristic and self sufficient from logging in to
									payments.
								</p>
								<p className="text-gray-300">
									Delivered the product in line with business requirements,
									using design specifications and engineering standards.
								</p>
							</div>
						</div>
					</div>

					{/* Right section: Technology and Skills */}
					<div className="lg:col-span-1">
						<div className="relative mb-8">
							<div className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-md inline-block mb-4">
								Experience in
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md">
								<div className="grid grid-cols-1 gap-3">
									<div className="flex items-center">
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>UI and UX Design</span>

										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mx-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Responsive Web Pages</span>
									</div>

									<div className="flex items-center">
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Team Management and Pipelining</span>

										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mx-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Web Development</span>
									</div>

									<div className="flex items-center">
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Saas Dashboard Development</span>

										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mx-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>CI/CD Automation</span>
									</div>

									<div className="flex items-center">
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Unit Testing</span>

										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											className="h-5 w-5 text-pink-400 mx-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span>Deployment</span>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-pink-400 text-black font-bold px-4 py-2 rounded-md inline-block mb-4">
								Skills
							</div>

							<div className="bg-gray-800 bg-opacity-30 p-6 rounded-md">
								<div className="grid grid-cols-3 gap-4">
									{/* JavaScript */}
									<div className="flex flex-col items-center">
										<div className="bg-yellow-400 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-black text-xl font-bold">JS</span>
										</div>
										<span className="mt-2 text-sm">JavaScript</span>
									</div>

									{/* TypeScript */}
									<div className="flex flex-col items-center">
										<div className="bg-blue-400 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-black text-xl font-bold">TS</span>
										</div>
										<span className="mt-2 text-sm">TypeScript</span>
									</div>

									{/* HTML/CSS */}
									<div className="flex flex-col items-center">
										<div className="bg-pink-500 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-white text-xl font-bold">HTML</span>
										</div>
										<span className="mt-2 text-sm">HTML/CSS</span>
									</div>

									{/* Angular */}
									<div className="flex flex-col items-center">
										<div className="bg-red-500 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-white text-xl font-bold">D</span>
										</div>
										<span className="mt-2 text-sm">Docker</span>
									</div>

									{/* NextJS */}
									<div className="flex flex-col items-center">
										<div className="bg-green-400 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-black text-xl font-bold">N</span>
										</div>
										<span className="mt-2 text-sm">NextJS</span>
									</div>

									{/* React */}
									<div className="flex flex-col items-center">
										<div className="bg-blue-500 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-white text-xl font-bold">⚛️</span>
										</div>
										<span className="mt-2 text-sm">React</span>
									</div>

									{/* Express */}
									<div className="flex flex-col items-center">
										<div className="bg-yellow-600 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-white text-xl font-bold">PS</span>
										</div>
										<span className="mt-2 text-sm">PostgreSQL</span>
									</div>

									{/* Node */}
									<div className="flex flex-col items-center">
										<div className="bg-pink-600 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-white text-xl font-bold">N</span>
										</div>
										<span className="mt-2 text-sm">Node</span>
									</div>

									{/* MongoDB */}
									<div className="flex flex-col items-center">
										<div className="bg-gray-200 p-4 rounded-md w-16 h-16 flex items-center justify-center">
											<span className="text-black text-xl font-bold">J</span>
										</div>
										<span className="mt-2 text-sm">Java</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
     
			</div>
		</div>
   
	);
}

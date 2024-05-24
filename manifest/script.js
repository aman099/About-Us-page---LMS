import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/company_logo.svg",
												alt: "Company logo",
											},
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "nav-btn",
									},
									children: [
										{
											tag: "label",
											attributes: {
												for: "nav-check",
											},
											children: [
												{
													tag: "span",
												},
												{
													tag: "span",
												},
												{
													tag: "span",
												},
											],
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-2",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav2",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													attributes: {
														class: "active",
													},
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
																class: "active",
															},
															content: "About Us",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Careers",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Newsroom",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Alumni Speak",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Contact Us",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "hamburger-icon",
											},
											children: [
												{
													tag: "span",
												},
												{
													tag: "span",
												},
												{
													tag: "span",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "hero-img",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hero-img-container",
					},
					children: [
						{
							tag: "div",
							attributes: {
								id: "hero-img",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "h1",
									content: "About Us",
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "hero-cont",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hero container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "hero-section stars",
							},
							children: [
								{
									tag: "h1",
									attributes: {
										class: "hero-title",
									},
									content: "Who We Are?",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content:
										"Simplilearn is the world’s leading digital skills provider, enabling learners across the globe.",
								},
								{
									tag: "p",
									attributes: {
										class: "para-desc",
									},
									content:
										"Our programs and certifications empower learners to achieve their career goals faster. Founded in 2010 and based in San Francisco, California, and Bangalore, India, Simplilearn, a Blackstone company is the world’s #1 online Bootcamp for digital economy skills training. Our programs are designed and delivered with world-renowned universities, top corporations, and leading industry bodies via live online classes featuring top industry practitioners, sought-after trainers, and global leaders.",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "img-cont",
							},
							children: [
								{
									tag: "img",
									attributes: {
										src: "./assets/Youtube-thumbnail-2.png",
										alt: "Youtube thumbnail",
									},
								},
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-play",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "advancements",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "advancements-cont container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "cards",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "card card-1",
									},
									children: [
										{
											tag: "h2",
											content: "5,000,000+",
										},
										{
											tag: "p",
											content: "Careers Advanced",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "card card-2",
									},
									children: [
										{
											tag: "h2",
											content: "2,000+",
										},
										{
											tag: "p",
											content: "Qualified Trainers",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "card card-3",
									},
									children: [
										{
											tag: "h2",
											content: "2,500+",
										},
										{
											tag: "p",
											content: "Live Classes per month",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "card card-4",
									},
									children: [
										{
											tag: "h2",
											content: "400+",
										},
										{
											tag: "p",
											content: "Courses",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "card card-4",
									},
									children: [
										{
											tag: "h2",
											content: "40+",
										},
										{
											tag: "p",
											content: "Global Accreditations",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "mission",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "mission-cont",
					},
					children: [
						{
							tag: "div",
							attributes: {
								id: "mission",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "h4",
									content: "Mission",
								},
								{
									tag: "blockquote",
									children: [
										{
											tag: "p",
											content:
												'"We transform lives by empowering people via digital skills"',
										},
										{
											tag: "footer",
											children: [
												{
													tag: "cite",
													content: "",
												},
											],
										},
									],
								},
								{
									tag: "h4",
									attributes: {
										class: "core-values-title",
									},
									content: "Core Values",
								},
								{
									tag: "div",
									attributes: {
										class: "core-values",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "value value-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "value-img-cont",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/value-rocket.svg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content: "Enterpreneurship",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "value value-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "value-img-cont",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/value-handshake.svg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content: "Teamwork",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "value value-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "value-img-cont",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/value-piechart.svg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content: "Data-Driven",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "value value-4",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "value-img-cont",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/value-group.svg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content: "Transparency",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "through-years",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "through-years-cont container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "through-heading",
							},
							children: [
								{
									tag: "h4",
									content: "Simplilearn Through Years",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "through-content",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "btn-cont btn-left-cont",
									},
									children: [
										{
											tag: "span",
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-chevron-left",
													},
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-1",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-2",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-3",
									},
									children: [
										{
											tag: "p",
											content: "2022",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-4",
									},
									children: [
										{
											tag: "p",
											content: "November",
										},
										{
											tag: "h5",
											content: "2022",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-5",
									},
									children: [
										{
											tag: "p",
											content: "2009",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-6",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "through-circle circle-7",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "btn-cont btn-right-cont",
									},
									children: [
										{
											tag: "span",
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-chevron-right",
													},
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "through-title-cont",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-1",
									},
									children: [
										{
											tag: "h5",
											content: "simplilearn acquires new york based fullstack academy",
										},
										{
											tag: "p",
											content:
												"The acquisition accelerates Simplilearn's journey to become the largest digital skills provider globally.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-2",
									},
									children: [
										{
											tag: "h5",
											content: "a modest start",
										},
										{
											tag: "p",
											content:
												"Simplilearn begins its foray as a blog, sharing ideas on Project Management, and providing information and tips for aspirants.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-3",
									},
									children: [
										{
											tag: "h5",
											content: "Making headway in the industry",
										},
										{
											tag: "p",
											content:
												"Simplilearn get its first backer for further expansion, raising $3 Million in Series A funding.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-4",
									},
									children: [
										{
											tag: "h5",
											content: "elevates 20,000+ lives",
										},
										{
											tag: "p",
											content:
												"Simplilearn trains 20,000+ professionals across 50+ countries.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-5",
									},
									children: [
										{
											tag: "h5",
											content: "Finding more success",
										},
										{
											tag: "p",
											content:
												"Simplilearn raises $10 Million in Series B funding from Helion Venture Partners and Kalaari Capital.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-6",
									},
									children: [
										{
											tag: "h5",
											content: "large certification training provider",
										},
										{
											tag: "p",
											content:
												"Simplilearn reaches its next milestone, training 200,000+ professionals in 150+ countries, and becoming one of the world's largest certification training providers.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "through-title-content content-7",
									},
									children: [
										{
											tag: "h5",
											content: "the mission continues",
										},
										{
											tag: "p",
											content:
												"Simplilearn raises $15 Million in Series C funding from Mayfield Fund, Kalaari Capital, and Helion Venture Partners.",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "meet-leadership",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "meet-leadership-cont container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "leadership-title",
							},
							children: [
								{
									tag: "h4",
									content: "Meet the Leadership Team",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "btns",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "prev-btn",
									},
									children: [
										{
											tag: "span",
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-chevron-left",
													},
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "next-btn",
									},
									children: [
										{
											tag: "span",
											children: [
												{
													tag: "i",
													attributes: {
														class: "fa-solid fa-chevron-right",
													},
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "leadership-cards",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-1 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-1.png",
																alt: "Krishna Kumar's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-1.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"A successful entrepreneur and NITK alum with 20+ years of experience, Krishna is among the world's top business leaders. He co-founded TechUnified before Simplilearn and was its COO",
														},
													],
												},
												{
													tag: "h5",
													content: "Krishna Kumar",
												},
												{
													tag: "p",
													content: "Founder & Chief Executive Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-2 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-2.png",
																alt: "Kashyap Dalal's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-2.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"An internet entrepreneur with over 15 years of experience in building growth teams across functions, Kashyap has played an instrumental role in scaling Simplilearn’s Global Consumer business. An alumnus of IIT Bombay and IIM Lucknow, he began his career with Unilever in Sales and Marketing.",
														},
													],
												},
												{
													tag: "h5",
													content: "Kashyap Dalal",
												},
												{
													tag: "p",
													content: "Co-founder and Chief Business Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-3 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-3.png",
																alt: "Archana Krishna's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-3.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"A seasoned people leader, Archana drives the global HR function focused on establishing Simplilearn as a great workplace. An Alumni of IIM Calcutta, Archana was associated with Capgemini and HCL Technologies before joining the edtech major.",
														},
													],
												},
												{
													tag: "h5",
													content: "Archana Krishna",
												},
												{
													tag: "p",
													content: "Co-founder and Chief Human Resources Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-4 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-4.png",
																alt: "Anand Narayanan's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-4.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"Anand is a product leader with over 20 years of experience building products across industries. An NIT Surathkal Computer Engineering graduate with a Master’s in computer science from Texas A&M and an MBA from The University of Texas, he headed the compute portfolio for Rackspace's cloud division and played instrumental roles at Dell and National Instruments.",
														},
													],
												},
												{
													tag: "h5",
													content: "Anand Narayanan",
												},
												{
													tag: "p",
													content: "Chief Product Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-5 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-5.png",
																alt: "Mark Moran's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-5.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"A dynamic marketing leader with two decades of experience, Mark has driven 9-figure revenue streams for companies and Fortune 100 divisions. He holds a patent, has led marketing at Ebates, and even held executive roles at MyNewPlace and Wells Fargo. He's also an angel investor and startup adviser with a BA from Pomona College and an MBA from Stanford Business School.",
														},
													],
												},
												{
													tag: "h5",
													content: "Mark Moran",
												},
												{
													tag: "p",
													content: "Chief Marketing Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-6 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-6.png",
																alt: "Eric Martorano's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-6.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"A senior Business Executive with 25+ years of global revenue and go-to-market experience, Eric leads Simplilearn's commercial business. He has an MBA from Pepperdine University and has held key positions at Microsoft, Sage Software, and Intermedia.",
														},
													],
												},
												{
													tag: "h5",
													content: "Eric Martorano",
												},
												{
													tag: "p",
													content: "Chief Revenue Officer",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-7 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-7.png",
																alt: "Kapil Suri's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-7.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"Kapil, Simplilearn's Technology leader, has 20+ years of experience and drives its Engineering team, technology vision, and strategies. He previously led the R&D division of a SaaS-based company and was CTO of Eureka Offices. A Delhi University graduate in B.Tech, he had prior experiences at Bosch, TCS, SLK, and Aptean.",
														},
													],
												},
												{
													tag: "h5",
													content: "Kapil Suri",
												},
												{
													tag: "p",
													content: "Senior Vice President – Engineering",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-card card-8 card",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leader-img front",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-8.png",
																alt: "Veerasundar V's DP",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "back",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/leadership-8.png",
																alt: "",
															},
														},
														{
															tag: "p",
															attributes: {
																class: "leader-information",
															},
															content:
																"Experienced finance leader adept in maximizing enterprise value through strategic financial management and partnerships. Proven in driving growth, optimizing processes, managing fundraises, overseeing IPOs, facilitating exits to private equity, and collaborating on transformation and restructuring.",
														},
													],
												},
												{
													tag: "h5",
													content: "Veerasundar V",
												},
												{
													tag: "p",
													content: "Chief Financial Officer",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "investors",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "investors-cont container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "investors-title",
							},
							children: [
								{
									tag: "h4",
									content: "Our Investors",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "investors-cards",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "investors-card card1",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/investor-1.avif",
												alt: "Blackstone",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "investors-card card2",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/investor-2.avif",
												alt: "GSV Ventures",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "investors-card card3",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/investor-3.avif",
												alt: "ACQ",
											},
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "investors-card card4",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/investor-4.avif",
												alt: "CLAL Insurance & Finance",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "awards",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "awards-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "awards-title",
							},
							children: [
								{
									tag: "h4",
									content: "Awards & Recognitions",
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "awards-content",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "award-card card-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "awards-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-1.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											content: "Steview Gold Award for <br> Customer Service Success",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "award-card card-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "awards-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-2.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											content: "Steview Gold Award for <br> Customer Service Success",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "award-card card-3",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "awards-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-3.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											content: "Steview Gold Award for <br> Customer Service Success",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "award-card card-4",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "awards-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/award-3.avif",
														alt: "",
													},
												},
											],
										},
										{
											tag: "p",
											content: "Steview Gold Award for <br> Customer Service Success",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-container",
					},
					children: [
						{
							tag: "footer",
							attributes: {
								id: "footer",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-content content-1",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-title",
											},
											children: [
												{
													tag: "p",
													content: "Follow us",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "footer-sm-icons",
											},
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-facebook-f",
															},
														},
													],
												},
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-twitter",
															},
														},
													],
												},
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-instagram",
															},
														},
													],
												},
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-youtube",
															},
														},
													],
												},
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-linkedin-in",
															},
														},
													],
												},
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-brands fa-telegram",
															},
														},
													],
												},
											],
										},
										{
											tag: "p",
											attributes: {
												class: "learn-on",
											},
											content: "Learn On The Go!",
										},
										{
											tag: "div",
											attributes: {
												class: "btn-container",
											},
											children: [
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-android",
																	},
																},
															],
														},
														{
															tag: "span",
															content: " Get the Android App",
														},
													],
												},
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-brands fa-apple",
																	},
																},
															],
														},
														{
															tag: "span",
															content: " Get the iOS App",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "footer-content content-2",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-title",
											},
											children: [
												{
													tag: "p",
													content: "Company",
												},
											],
										},
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "/about-us",
															},
															content: "About Us",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Careers",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Newsroom",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Alumni Speak",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Grievance Redressal",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "",
															},
															content: "Contact Us",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "footer-content content-3",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-title",
											},
											children: [
												{
													tag: "p",
													content: "Work With Us",
												},
											],
										},
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Become an Instructor",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Blog as Guest",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "footer-content content-4",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-title",
											},
											children: [
												{
													tag: "p",
													content: "Discover",
												},
											],
										},
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Skill Up",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Skilup Sitemap",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Resources",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "RSS Feed",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "City Sitemap",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "footer-content content-5",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "footer-title",
											},
											children: [
												{
													tag: "p",
													content: "For Business",
												},
											],
										},
										{
											tag: "ul",
											children: [
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Corporate Training",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Partners",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "Digital Transformation",
														},
													],
												},
												{
													tag: "li",
													children: [
														{
															tag: "a",
															attributes: {
																href: "#",
															},
															content: "For Higher Ed",
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "section",
							attributes: {
								class: "privacy-policy container is-fullhd",
							},
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											content: "Terms of Use",
										},
										{
											tag: "li",
											content: "Privacy Policy",
										},
										{
											tag: "li",
											content: "Refund Policy",
										},
										{
											tag: "li",
											content: "Reschedule Policy",
										},
									],
								},
								{
									tag: "p",
									content:
										"© 2009-2024 – Simplilearn Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.",
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });

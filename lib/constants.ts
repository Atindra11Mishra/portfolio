export const RESUME_URL = 'https://drive.google.com/file/d/1WIIEnNoz1t0TQ_2oOHtRhkwd4yYt6G9E/view?usp=sharing'

export const featuredSkills = [
  { name: "Agentic AI & Orchestration", tier: "Expert", detail: "LangGraph, LangChain, AI agents, tool use, MCP, production RAG pipelines", icon: "sparkles" },
  { name: "LLM & RAG Systems", tier: "Expert", detail: "Hybrid BM25+vector retrieval, ChromaDB, Pinecone, pgvector, RAGAS evals", icon: "database" },
  { name: "AI Evaluation & LLMOps", tier: "Proficient", detail: "DeepEval, RAGAS, Langfuse, CI-gated eval pipelines, cost tracking", icon: "activity" },
  { name: "Python & FastAPI", tier: "Expert", detail: "Async APIs, JWT auth, WebSocket, production backend systems", icon: "code" },
  { name: "Full-Stack (React/Next.js)", tier: "Expert", detail: "React.js, Next.js, TypeScript, Tailwind CSS, Zustand", icon: "layout" }
]

export const skills = [
  {
    category: "Agentic AI & Orchestration",
    items: ["LangGraph", "LangChain", "AI Agents", "Tool Use & Function Calling", "MCP (Model Context Protocol)", "RAG Pipelines", "Hybrid Retrieval", "BM25"]
  },
  {
    category: "AI Evaluation & Observability",
    items: ["DeepEval", "RAGAS", "Langfuse", "LLMOps", "Prompt Engineering", "CI-Gated Eval Pipelines"]
  },
  {
    category: "LLMs & Model Infrastructure",
    items: ["OpenAI API", "Groq", "Ollama", "OpenRouter", "Qwen", "DeepSeek", "Pinecone", "ChromaDB", "pgvector"]
  },
  {
    category: "Backend & APIs",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "WebSocket", "JWT Authentication", "SQL"]
  },
  {
    category: "Frontend & Full-Stack",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand"]
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "Supabase", "MongoDB", "SQLAlchemy", "Docker", "Kubernetes", "AWS (EC2, S3)", "GitHub Actions", "Vercel", "Render"]
  }
]

export const projects = [
  {
    id: "concierge-support-adk",
    title: "Concierge Support ADK",
    description: "Portfolio-ready AI support concierge demo with a FastAPI backend and a Next.js frontend. Demonstrates a persistent support assistant built with Google ADK — creates support sessions, routes chat turns through specialist agents, answers documentation questions from a local RAG corpus, persists state, and exposes structured traces in the UI.",
    category: "AI Projects",
    techStack: ["Google ADK", "FastAPI", "Next.js", "Python", "Chroma", "SQLite"],
    highlights: [
      "Google ADK routing between knowledge and account specialist agents",
      "Local RAG over bundled Markdown docs with Chroma vector store",
      "Structured trace viewer with route, latency, tool calls, and retrieved chunks",
      "Session creation with user ID and plan tier, with full state persistence"
    ],
    links: { demo: "https://concierge-support-adk.vercel.app/", github: "https://github.com/Atindra11Mishra/Concierge_Support_ADK" }
  },
  {
    id: "ai-ad-intelligence",
    title: "AI Ad Analyzer",
    description: "Lightweight app for competitor ad intelligence. Creates a brand profile from a real website, fetches competitor ads from Meta Ad Library through Apify, analyzes copy and images with Groq models, persists structured intelligence in SQLite, and powers a grounded creative strategy chat.",
    category: "AI Projects",
    techStack: ["FastAPI", "Next.js", "Groq", "Apify", "Firecrawl", "SQLite", "SQLAlchemy"],
    highlights: [
      "Scrapes brand websites and extracts positioning, tone, audience, and value propositions",
      "Fetches real Meta Ad Library creatives and analyzes copy hooks, CTAs, and messaging angles",
      "Groq llama-4-scout vision analysis: style, UGC vs produced, product visibility",
      "Grounded creative strategy chat over brand profile and analyzed competitor ads"
    ],
    links: { demo: "https://ai-ad-intelligenence.vercel.app", github: "https://github.com/Atindra11Mishra/AI_Ad_Intelligenence" }
  },
  {
    id: "company-intelligence-agent",
    title: "Company Intelligence Agent",
    description: "A LangGraph-powered company research agent that generates structured intelligence reports from a company name, website URL, or LinkedIn link. Researches public web signals — funding, leadership, competitors, news, hiring trends, and tech stack — then outputs a clean markdown report with sources and an agent execution trace.",
    category: "AI Projects",
    techStack: ["LangGraph", "Next.js", "FastAPI", "Python", "TypeScript"],
    highlights: [
      "Accepts company name, website URL, or LinkedIn company link as input",
      "Researches funding, leadership, competitors, news, hiring trends, and tech stack signals",
      "Generates structured markdown intelligence report with confidence assessment and source list",
      "Exposes full LangGraph agent execution trace alongside the report"
    ],
    links: { demo: "https://company-intelligence-agent.vercel.app", github: "https://github.com/Atindra11Mishra/company-intelligence-agent" }
  }
]

export const experience = [
  {
    company: "Invasion Media",
    role: "Gen AI & Full Stack Developer",
    period: "Aug 2025 – Present",
    description: "Built and deployed production RAG pipelines using LangChain, OpenAI API, and open-source LLMs (Ollama, Groq) with vector databases (Pinecone, ChromaDB, pgvector) serving international clients with large-scale semantic search. Engineered AI agent workflows for Discord automation and email processing pipelines, integrating LLM routing between cloud and local models to optimize inference cost. Deployed and monitored applications on AWS EC2/S3, Vercel, and Render with CI/CD pipelines and observability instrumentation.",
    metrics: { teamSize: "International clients", projects: "RAG + agent pipelines", impact: "Reduced manual processing time" }
  },
  {
    company: "Cluster Protocol",
    role: "Full Stack Blockchain Developer Intern",
    period: "Feb 2025 – Jul 2025",
    description: "Built and deployed 3+ decentralized applications (DApps) with MetaMask and WalletConnect integrations using Solidity, Ethers.js, and Web3.js. Developed end-to-end fullstack DApps using MERN stack and Next.js, handling UI/UX through to smart contract integration.",
    metrics: { teamSize: "Remote team", projects: "3+ DApps deployed", impact: "MetaMask & WalletConnect" }
  },
  {
    company: "Real Space Group & RSVP Group",
    role: "Freelance Full Stack Developer",
    period: "Apr 2024 – Dec 2024",
    description: "Delivered 2 responsive real estate web platforms using React.js and Node.js with RESTful APIs, mobile-first design, and property listing management.",
    metrics: { teamSize: "Freelance", projects: "2 platforms delivered", impact: "Mobile-first, property listing" }
  }
]

export const certifications = [
  {
    organization: "NVIDIA Deep Learning Institute",
    certs: ["Generative AI with Diffusion Models", "Augment LLMs Using RAG", "Building LLM Applications With Prompt Engineering"]
  },
  {
    organization: "Google Cloud Skills",
    certs: ["Build Intelligent Agents with Agent Development Kit (ADK)"]
  }
]

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Atindra11Mishra/", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/atindra-mishra-ab0577202/", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/AtinMishra11", icon: "twitter" },
  { name: "Email", url: "mailto:atin.mishra11@gmail.com", icon: "mail" },
  { name: "Resume", url: "https://drive.google.com/file/d/1WIIEnNoz1t0TQ_2oOHtRhkwd4yYt6G9E/view?usp=sharing", icon: "download" }
]

export const heroStats = [
  { label: "Projects Deployed", value: "3+", icon: "briefcase" },
  { label: "Years in Software Dev", value: "2+", icon: "calendar" },
  { label: "Years in AI & Gen AI", value: "1+", icon: "star" },
  { label: "AI & Web Frameworks", value: "20+", icon: "layers" }
]

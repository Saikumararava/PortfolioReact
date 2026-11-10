import React, { useEffect, useState } from 'react';

const GITHUB = 'https://github.com/Saikumararava';
const LINKEDIN = 'https://linkedin.com/in/sai-kumar-arava-870505201';
const EMAIL = 'saikumararava23@gmail.com';
const PHONE = '+91 9000133390';
const RESUME = '/Sai-Kumar-Resume.pdf';

const skills = [
  {
    group: 'Frontend & UI Engineering',
    icon: 'code',
    summary: 'Modern, accessible, reactive user interfaces engineered for speed, clean state management, and responsiveness.',
    items: ['React 19', 'TypeScript', 'JavaScript (ESNext)', 'Vite', 'HTML5 & CSS3', 'Material UI', 'Tailwind CSS', 'Responsive Layouts'],
  },
  {
    group: 'Backend & API Architecture',
    icon: 'server',
    summary: 'Scalable RESTful microservices, secure authentication flows, and structured database persistence.',
    items: ['Node.js', 'Express 5', 'Python', 'FastAPI', 'REST APIs', 'MongoDB', 'Cloud Firestore', 'JWT & RBAC'],
  },
  {
    group: 'Cloud & DevOps Engineering',
    icon: 'cloud',
    summary: 'Containerized microservices, automated CI/CD pipelines, and cloud platform infrastructure.',
    items: ['Google Cloud (GCP)', 'Cloud Run', 'Cloud Storage', 'Docker', 'Cloud Build', 'Terraform', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    group: 'Machine Learning & AI Systems',
    icon: 'cpu',
    summary: 'Applied neural sequence modeling, feature preprocessing pipelines, and containerized model inference serving.',
    items: ['PyTorch', 'TensorFlow / Keras', 'Transformers', 'LSTM / RNN', 'CNNs', 'NumPy', 'Weights & Biases', 'Model Serving'],
  },
  {
    group: 'Security, Testing & Quality',
    icon: 'shield',
    summary: 'Identity trust boundaries, automated unit/integration test suites, and API contracts.',
    items: ['Firebase Auth', 'Enterprise IAM', 'Session Management', 'Vitest', 'pytest', 'Supertest', 'OpenAPI / Swagger'],
  },
  {
    group: 'Desktop Systems & Utilities',
    icon: 'terminal',
    summary: 'Windows-level background services, session state recovery, and automated system scripting.',
    items: ['C#', '.NET 8', 'Windows Services', 'Raw Input API', 'PowerShell Scripting', 'Regression Testing'],
  },
];

const projects = [
  {
    number: '01',
    category: 'Autonomous AI & Full Stack',
    eyebrow: 'MULTI-AGENT ORCHESTRATION · LOCAL LLM',
    title: 'DevTeam AI',
    subtitle: 'Autonomous 5-Agent Local Software Development Studio',
    description: 'A production-grade, privacy-first multi-agent software engineering workspace running 100% locally on standard consumer hardware via Ollama (qwen2.5-coder:7b/1.5b). A squad of 5 specialized agents (Planner, Developer, Reviewer, Tester, Documenter) plan, architect, code, test, and document complete applications with zero paid cloud API keys.',
    tags: ['Python 3.11+', 'FastAPI', 'React 18', 'TypeScript', 'LangGraph', 'Ollama (7B/1.5B)', 'Tailwind CSS', 'Docker', 'SQLite'],
    href: `${GITHUB}/devteam-ai`,
    linkText: 'View on GitHub',
    image: '/assets/devteam-dashboard.png',
    screenshots: [
      { label: 'Command Deck', src: '/assets/devteam-dashboard.png' },
      { label: 'Recent Projects', src: '/assets/devteam-projects.png' },
      { label: 'Project Wizard', src: '/assets/devteam-wizard.png' },
      { label: 'Code Review', src: '/assets/devteam-review.png' },
    ],
    alt: 'DevTeam AI command deck, agent workflow dashboard, and local model orchestration interface',
    highlights: [
      'LangGraph cyclical state machine with automatic review and test failure feedback loops',
      'Robust native code generator with markdown block parser & anti-placeholder guardrails',
      'Real-time Server-Sent Events (SSE) streaming terminal, AST review scoring & in-memory ZIP export',
    ],
    note: 'Engineered as a full-lifecycle autonomous development squad executing sequentially on consumer CPU with 16 GB RAM.',
  },
  {
    number: '02',
    category: 'Full Stack & Cloud',
    eyebrow: 'MULTI-TENANT SAAS ARCHITECTURE',
    title: 'HelpDesk Cloud',
    subtitle: 'Multi-Tenant SaaS Support Platform',
    description: 'An enterprise-grade, multi-tenant customer support platform designed with strict backend-derived organization boundaries, granular role-based permissions (RBAC), and tenant isolation.',
    tags: ['React 19', 'TypeScript', 'Express 5', 'Firebase Auth', 'Firestore', 'Vitest'],
    href: `${GITHUB}/multi-tenant-helpdesk-saas`,
    linkText: 'View on GitHub',
    image: '/assets/helpdesk-architecture.svg',
    alt: 'HelpDesk Cloud system architecture and tenant boundaries',
    highlights: [
      'Tenant & platform administration plane with isolation guarantees',
      'Ticket lifecycle state machine, real-time assignment & SLA tracking',
      'Scoped data streaming, audit logging & role-governed endpoints',
    ],
    note: 'Architected as a production-ready reference system with comprehensive automated testing.',
  },
  {
    number: '03',
    category: 'Full Stack & UI',
    eyebrow: 'EDITORIAL COMMERCE EXPERIENCE',
    title: 'Haven & Form',
    subtitle: 'High-Performance Design Studio Storefront',
    description: 'An editorial commerce experience for an interior design studio featuring dynamic catalog filtering, interactive cart state, wishlist persistence, and a reactive admin management dashboard.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Architecture', 'Vitest', 'LocalStorage API'],
    href: `${GITHUB}/haven-form`,
    linkText: 'View on GitHub',
    image: '/assets/haven-preview.svg',
    alt: 'Haven & Form storefront and catalog interface preview',
    highlights: [
      'Searchable project gallery with multi-criteria dynamic filtering',
      'Synchronous cart, wishlist, and inquiry-style order workflow',
      'Admin control panel with responsive inventory simulation',
    ],
    note: 'Developed as a high-fidelity frontend portfolio project demonstrating state architecture and polished CSS styling.',
  },
  {
    number: '04',
    category: 'Full Stack & AI',
    eyebrow: 'MERN + LLM INTEGRATION',
    title: 'AI Conversational Agent',
    subtitle: 'Intelligent Knowledge Assistant & Session Engine',
    description: 'A full-stack conversational platform integrating OpenAI APIs with a customized React interface, Express backend orchestration, MongoDB chat history persistence, and authenticated user contexts.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT'],
    href: `${GITHUB}/Chatbotwithopenai`,
    linkText: 'View on GitHub',
    image: '/assets/chatbot-preview.svg',
    alt: 'AI chatbot conversation and session interface',
    highlights: [
      'Streamlined chat interface with conversational markdown rendering',
      'Token-conscious backend proxy with rate-limiting and error recovery',
      'User session management, conversational history, and secure auth',
    ],
    note: 'Full-stack AI application prototype exploring contextual memory and API orchestration.',
  },
];

const workStreams = [
  {
    id: 'web-identity',
    number: '01',
    label: 'Full-Stack & Cloud Integration',
    title: 'Web Application & Authentication Flows',
    summary: 'Built responsive client interfaces and integrated backend service layers with identity verification pipelines, cloud databases, and private APIs.',
    responsibilities: [
      'Engineered interactive React/Vite interfaces featuring state-driven enrollment, validation screens, and error recovery states.',
      'Integrated Node.js & Express API services with Firebase Authentication and Cloud Firestore for resilient session management.',
      'Implemented secure request middleware, token authorization, input validation schemas, and automated API integration tests.',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Firebase Auth', 'Cloud Firestore', 'REST APIs'],
  },
  {
    id: 'inference-service',
    number: '02',
    label: 'Cloud & AI Microservices',
    title: 'High-Throughput Python Model Serving Service',
    summary: 'Converted machine learning models and data preprocessing pipelines into isolated, containerized microservices deployed on Google Cloud.',
    responsibilities: [
      'Developed high-performance FastAPI asynchronous endpoints to execute model preprocessing and real-time inference scoring.',
      'Containerized inference environments using multi-stage Docker builds and configured automated auto-scaling deployments on Google Cloud Run.',
      'Constructed schema validation pipelines, versioned model artifact storage on Cloud Storage, and health check / failure monitoring endpoints.',
    ],
    stack: ['Python', 'FastAPI', 'TensorFlow / Keras', 'Docker', 'Google Cloud Run', 'Cloud Storage', 'NumPy'],
  },
  {
    id: 'ml-pipelines',
    number: '03',
    label: 'Applied Deep Learning',
    title: 'Neural Architecture Training & Experiment Pipelines',
    summary: 'Developed sequence models, feature extraction utilities, and end-to-end evaluation pipelines for complex time-series and pattern recognition datasets.',
    responsibilities: [
      'Trained and evaluated Transformer attention-based sequence models and recurrent LSTM/RNN networks for continuous input representations.',
      'Engineered feature preparation pipelines, timing normalization algorithms, and CNN-based trajectory feature extractors.',
      'Implemented triplet-loss metric learning routines, GPU-accelerated training routines, and systematic experiment tracking using Weights & Biases.',
    ],
    stack: ['PyTorch', 'PyTorch Lightning', 'Transformers', 'LSTM / RNN', 'CNNs', 'NumPy', 'Weights & Biases'],
  },
  {
    id: 'endpoint-systems',
    number: '04',
    label: 'Systems & OS Engineering',
    title: 'Windows Background Service & Desktop Utilities',
    summary: 'Developed and maintained robust desktop software components for controlled session-level telemetry and system state detection.',
    responsibilities: [
      'Engineered C# and .NET 8 background Windows services handling session lifecycle, user presence detection, and clean installer sequencing.',
      'Investigated and resolved edge-case behaviors during desktop startup, sleep/wake cycles, logoff, and credential recovery.',
      'Authored automated regression suites and PowerShell deployment scripts to streamline desktop validation cycles.',
    ],
    stack: ['C#', '.NET 8', 'Windows Services', 'Raw Input API', 'PowerShell', 'Automated Testing'],
  },
  {
    id: 'web-platform',
    number: '05',
    label: 'Web Platform & Experience',
    title: 'Corporate Web Presence & Performance',
    summary: 'Developed modern, accessible web experiences communicating technical solutions and onboarding early-access users.',
    responsibilities: [
      'Constructed modern, responsive React pages with cross-device compatibility, fast initial loads, and smooth interactive animations.',
      'Designed structured inquiry and sign-up flows with client-side form validation and analytics event tracking.',
      'Optimized Core Web Vitals, accessibility standards, and SEO metadata across production pages.',
    ],
    stack: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Web Performance', 'Analytics Integration'],
  },
];

const repositoryContributions = [
  {
    id: 'windows-agent',
    number: '01',
    repo: 'SentraAuth/windows-Agent',
    category: 'Systems & OS',
    title: 'Windows Background Service & Endpoint Telemetry Agent',
    purpose: 'Collect high-fidelity hardware input telemetry from active user desktop sessions with strict privilege separation, session lifecycle handling, and durable storage controls.',
    stack: ['C#', '.NET 8', 'Windows Services', 'Raw Input API', 'Inter-Process Communication', 'PowerShell', 'Structured Logging'],
    whatIDid: [
      'Engineered and maintained the core C# and .NET 8 Windows background service running in Session 0, managing session state, lifecycle transitions, and reliable disk persistence.',
      'Constructed an isolated user-session desktop capture component using the Win32 Raw Input API, streaming telemetry events to the background service via secure inter-process communication (IPC).',
      'Engineered structured file persistence for session telemetry, implementing streaming writers with data integrity validation, session boundary sealing, and crash-resilient storage.',
      'Diagnosed and resolved edge-case session lifecycle defects during user logoff, sleep/wake, and disconnect events to guarantee clean writer finalization and prevent unsealed sessions.',
      'Hardened session state management and race-condition handling across asynchronous evaluation cycles, ensuring stale callbacks are safely invalidated upon session transitions.',
    ],
    boundaries: 'Does not reconstruct typed text, capture screenshots, or execute verification decisions on the endpoint. Keeps input callbacks strictly non-blocking.',
  },
  {
    id: 'demo-keystroke',
    number: '02',
    repo: 'SentraAuth/Demo-keystrokedynamics',
    category: 'Full-Stack & Cloud',
    title: 'Behavioral Verification Web Journey & API Orchestration',
    purpose: 'Deliver a complete multi-stage user journey for authentication, behavioral enrollment, and continuous verification, orchestrating client state with private AI inference.',
    stack: ['React', 'Vite', 'Node.js', 'Express 5', 'Firebase Auth', 'Cloud Firestore', 'Google Cloud Run', 'Terraform'],
    whatIDid: [
      'Engineered interactive React/Vite interfaces for passwordless email-link sign-in, guided input capture workflows, and real-time validation feedback.',
      'Built an Express backend gateway enforcing Firebase server-side ID token verification, user allowlisting, and tenant/role authorization before touching database state.',
      'Integrated Cloud Firestore persistence for enrolled user profiles and engineered backend distance-based similarity scoring against registered behavioral embeddings.',
      'Configured Cloud Run service deployments and separated Terraform infrastructure ownership between public web resources and private model-serving tiers.',
    ],
    boundaries: 'Browser presents prompts and captures raw event timing; backend owns policy, verification scoring, and thresholds. Browser never directly contacts the private AI service.',
  },
  {
    id: 'ai-engine-demo',
    number: '03',
    repo: 'SentraAuth/AIEngine-KeystrokeDynamics-Demo',
    category: 'Cloud & AI Microservices',
    title: 'Private Neural Model Inference Microservice',
    purpose: 'Expose a trained deep learning sequence encoder behind a secure private microservice, transforming raw input event batches into compact numerical embeddings.',
    stack: ['Python', 'FastAPI', 'TensorFlow / Keras', 'Docker', 'Google Cloud Run', 'Cloud Storage', 'NumPy'],
    whatIDid: [
      'Implemented high-throughput asynchronous FastAPI inference endpoints with Pydantic request/response schema validation and standardized error contracts.',
      'Constructed high-performance numerical preprocessing routines converting sequence event streams into structured temporal matrices with vectorized token and timing encodings.',
      'Automated secure model weight retrieval and artifact caching from Google Cloud Storage during service startup, leveraging IAM roles and container environment configurations.',
      'Containerized the inference service with multi-stage Docker builds for Google Cloud Run, configuring health check probes, graceful shutdown handling, and model version tracking.',
    ],
    boundaries: 'Returns numerical embedding representations; does not decide accept/reject or store user identity state. Keeps inference completely decoupled from web application logic.',
  },
  {
    id: 'enhanced-typenet',
    number: '04',
    repo: 'SentraAuth/Enhanced-TypeNet',
    category: 'Deep Learning & AI',
    title: 'Recurrent Neural Sequence Model (LSTM / RNN)',
    purpose: 'Learn compact, normalized sequence representations from behavioral timing dynamics using recurrent neural architectures trained via metric learning.',
    stack: ['Python', 'TensorFlow / Keras', 'LSTM / RNN', 'Metric Learning', 'pytest', 'NumPy'],
    whatIDid: [
      'Engineered a dual-branch neural architecture combining discrete categorical token embeddings with continuous multi-channel temporal timing sequences.',
      'Processed temporal inputs through multi-layer recurrent LSTM networks, fusing intermediate representations with dense projections and L2 feature normalization to output invariant embedding vectors.',
      'Implemented Triplet Loss with online mining strategies (hard-positive and semi-hard negative selection) to optimize embedding separation in metric space.',
      'Authored comprehensive automated test suites covering numerical correctness, gradient propagation, layer shape compatibility, and synthetic data contracts.',
    ],
    boundaries: 'Learns a metric comparison space for distance-based similarity rather than a static per-user classification head.',
  },
  {
    id: 'bigram-strokenet',
    number: '05',
    repo: 'SentraAuth/bigram-level-keystroke-auth',
    category: 'Deep Learning & AI',
    title: 'Bigram Transformer Sequence Architecture',
    purpose: 'Model adjacent transition dynamics explicitly with Transformer attention mechanisms to evaluate sequence authenticity and behavioral consistency.',
    stack: ['Python', 'PyTorch', 'PyTorch Lightning', 'Transformers', 'Weights & Biases', 'Safetensors'],
    whatIDid: [
      'Constructed a Transformer sequence pipeline encoding sequential token transitions and high-resolution timing features alongside contextual identity prefix tokens.',
      'Implemented Transformer architectures with multi-head self-attention and rotary positional embeddings (RoPE) to effectively capture relative temporal distance across sequence tokens.',
      'Engineered dual classification and metric heads to evaluate both local token-level transition validity and global sequence-level authenticity.',
      'Developed offline tensor caching and preprocessing pipelines in PyTorch Lightning, resolving learning rate scheduler and warmup synchronization issues across distributed validation steps.',
    ],
    boundaries: 'Leverages bidirectional attention to allow the sequence representation to attend across the entire temporal window for global context.',
  },
  {
    id: 'dualbranch-keystroke',
    number: '06',
    repo: 'SentraAuth/dualbranch-keystroke-auth',
    category: 'Deep Learning & AI',
    title: 'Dual-Branch Architecture & Population Baseline Pipeline',
    purpose: 'Model behavioral sequences by coupling observed dynamic features with normalized residual statistics derived from population-level baselines.',
    stack: ['Python', 'TensorFlow / Keras', 'Deep Learning', 'NumPy', 'Google Cloud Storage'],
    whatIDid: [
      'Maintained a multi-channel feature pipeline coupling observed raw timing dynamics with contextual residual channels computed against population baseline distributions.',
      'Identified and rectified a core temporal feature misalignment between key-press and key-release interval calculations across historical training datasets.',
      'Engineered data pipeline updates to preserve negative inter-key time intervals, accurately accounting for overlapping keystrokes common in high-speed input streams.',
      'Unified model weights, population baseline matrices, and evaluation artifacts in Google Cloud Storage with synchronized versioning.',
    ],
    boundaries: 'Requires strict version parity between trained model weights and population baseline reference artifacts to prevent feature drift.',
  },
  {
    id: 'clarkson-eda',
    number: '07',
    repo: 'SentraAuth/clarkson2-keystroke-eda',
    category: 'Data Engineering & EDA',
    title: 'Dataset Integrity Analysis & Temporal Modeling',
    purpose: 'Conduct large-scale data integrity audits, timing precision checks, duplicate detection, and windowing analysis across natural input datasets.',
    stack: ['Python', 'NumPy', 'Pandas', 'Data Preprocessing', 'Statistical Analysis'],
    whatIDid: [
      'Audited extensive natural typing data archives using checksum and prefix-matching algorithms, identifying duplicate event streams and ensuring strict dataset independence.',
      'Established a standardized multi-subject evaluation cohort filtered by rigorous activity thresholds, monotonic timestamp validation, and data completeness criteria.',
      'Engineered state machine event-pairing logic to isolate and handle operating system auto-repeat events without distorting true physical press durations.',
      'Demonstrated the prevalence of valid negative transition times caused by overlapping key presses, preventing destructive zero-clipping in downstream neural preprocessing.',
    ],
    boundaries: 'Establishes rigorous data validation standards ensuring that model training pipelines operate only on clean, non-duplicated, and temporally sound sequences.',
  },
  {
    id: 'mouse-image-model',
    number: '08',
    repo: 'SentraAuth/mouse-dynamics-continuous-authentication',
    category: 'Deep Learning & AI',
    title: 'Spatial Trajectory CNN Architecture',
    purpose: 'Transform continuous pointer trajectories and spatial interaction events into multi-channel 2D representations to evaluate behavioral consistency via CNNs.',
    stack: ['Python', 'TensorFlow', 'Convolutional Neural Networks', 'NumPy', 'Computer Vision'],
    whatIDid: [
      'Built a multi-stage preprocessing pipeline converting sliding temporal windows of pointer coordinates into multi-channel spatial trajectory images.',
      'Engineered rendering algorithms that map continuous pointer kinematics—such as velocity, drag paths, click locations, and scroll actions—into distinct color/spatial channels.',
      'Constructed a Convolutional Neural Network (CNN) featuring cascading convolutional and pooling blocks followed by dense embedding layers for spatial pattern extraction.',
      'Enforced strict session-isolated train/validation splitting strategies to eliminate data leakage across contiguous temporal recording sessions.',
    ],
    boundaries: 'Treats trajectory modeling as an offline vision representation task; maintains decoupled normalization layers tied to model weights.',
  },
  {
    id: 'verify-m50-product',
    number: '09',
    repo: 'SentraAuth/sentraauth-verify-demo',
    category: 'Full-Stack & Cloud',
    title: 'Multi-Service Verification Gateway & Model Orchestration',
    purpose: 'Production demonstration platform uniting web client interactions, backend authentication flows, and private Python model inference into an end-to-end verification journey.',
    stack: ['React', 'Node.js', 'Express', 'Python FastAPI', 'PyTorch', 'Google Cloud Run', 'Cloud Firestore'],
    whatIDid: [
      'Architected a containerized deployment topology orchestrating a public Node.js/Express API gateway with a co-located private Python FastAPI inference service.',
      'Implemented server-orchestrated multi-prompt enrollment and verification flows, utilizing cryptographic challenge tokens to prevent replay attacks.',
      'Engineered rapid per-user profile adaptation routines, updating personalized identity embeddings while keeping the shared Transformer backbone parameters frozen.',
      'Implemented statistical calibration routines evaluating user profile similarity against a reference background distribution to establish balanced decision boundaries before activating profiles.',
    ],
    boundaries: 'Separates enrollment profile generation, offline calibration, and real-time verification scoring into independent lifecycle stages.',
  },
  {
    id: 'identity-encoder',
    number: '10',
    repo: 'SentraAuth/keystroke-identity-encoder',
    category: 'Deep Learning & AI',
    title: 'Large-Scale Sequence Identity Encoder & Metric Learning Pipeline',
    purpose: 'Train deep sequence Transformer representations on large-scale population datasets using distributed GPU infrastructure and metric learning.',
    stack: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'A100 GPU', 'Weights & Biases', 'Metric Learning'],
    whatIDid: [
      'Constructed a deep Transformer sequence model with multi-head self-attention and learned temporal token embeddings to produce compact, invariant identity representations.',
      'Built a scalable GPU training pipeline using class-balanced multi-sample batching and Batch-All Triplet Loss to optimize embedding clusters.',
      'Executed large-scale training and evaluation across broad population benchmarks, evaluating false-accept and false-reject tradeoffs using Equal Error Rate (EER) metrics.',
      'Hardened experiment logging pipelines with Weights & Biases, isolating local model checkpointing and gradient state saves from remote network telemetry interruptions.',
    ],
    boundaries: 'Ensures reproducible model training through deterministic batch generation, strict dataset partitioning, and automated checkpoint validation.',
  },
  {
    id: 'mouse-sdk',
    number: '11',
    repo: 'SentraAuth/web-mouse-dynamics-sdk',
    category: 'Full-Stack & Client SDK',
    title: 'Client-Side Interaction Telemetry SDK & Streaming Pipeline',
    purpose: 'Provide a lightweight, zero-dependency browser SDK to capture pointer interaction dynamics, extract client-side motion kinematics, and batch events securely.',
    stack: ['TypeScript', 'tsup', 'JavaScript (ESNext)', 'Vite', 'Node.js', 'Firestore', 'Docker'],
    whatIDid: [
      'Authored a modular TypeScript client SDK capturing pointer coordinates, timestamp deltas, and device input types with adaptive sampling and spatial noise gating.',
      'Engineered real-time client-side kinematic feature extractors computing instantaneous velocity, acceleration, directional curvature, and path jitter.',
      'Built a configurable batching engine buffering events with time- and count-based triggers to optimize transmission efficiency and minimize network overhead.',
      'Developed an end-to-end integration test harness with Vite and a Node/Express backend to validate event streaming, schema compliance, and database persistence.',
    ],
    boundaries: 'Operates strictly as a lightweight, consent-governed client telemetry library; separates client data collection and batching from server-side verification decisions.',
  },
  {
    id: 'company-website',
    number: '12',
    repo: 'SentraAuth/sentraauth-website',
    category: 'Full-Stack & Web Platform',
    title: 'Corporate Web Platform & Onboarding Architecture',
    purpose: 'Engineer the public corporate web presence, communicating product solutions, demonstrating architectural workflows, and managing user onboarding.',
    stack: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Web Performance', 'Analytics Integration'],
    whatIDid: [
      'Built the public-facing corporate web presence with clean component modularity, fluid responsive layouts, and cross-browser accessibility.',
      'Engineered client-side navigation routing, deep-link state persistence, and responsive interactive product presentation sections.',
      'Constructed early-access inquiry submission workflows with client-side validation schemas, pending states, and feedback handling.',
      'Integrated privacy-conscious analytics event tracking to measure visitor journeys and feature interactions without capturing personal data.',
    ],
    boundaries: 'Dedicated to corporate communication and visitor onboarding; completely decoupled from authentication engines and private model execution services.',
  },
];

const aiProductionTools = [
  {
    name: 'OpenAI (ChatGPT & Codex)',
    role: 'API Scaffolding & Complex Problem Solving',
    desc: 'Utilized for rapid schema modeling, algorithmic optimization, and generating high-coverage unit & integration test suites.',
    badge: 'OpenAI / Codex',
    impact: 'Accelerates API scaffolding & boundary test generation.',
    icon: 'openai',
    themeClass: 'openai-theme',
  },
  {
    name: 'Google Gemini',
    role: 'Large-Context Code Analysis & Cloud Systems',
    desc: 'Leveraged for deep multi-file codebase comprehension, Google Cloud architecture planning, and multimodal technical documentation.',
    badge: 'Gemini Multimodal',
    impact: 'Ensures architectural coherence across distributed layers.',
    icon: 'gemini',
    themeClass: 'gemini-theme',
  },
  {
    name: 'Google Antigravity',
    role: 'Agentic Development & Workspace Automation',
    desc: 'Employed for multi-step agentic execution, workspace file transforms, terminal task orchestration, and rapid debugging.',
    badge: 'Agentic IDE',
    impact: 'Automates workspace refactoring & diagnostic verification.',
    icon: 'antigravity',
    themeClass: 'agy-theme',
  },
  {
    name: 'Claude Code',
    role: 'Terminal-Driven Agentic Engineering',
    desc: 'Used directly in terminal environments for repository-wide refactoring, deterministic verification, and git operations.',
    badge: 'CLI Agent',
    impact: 'Tightens CLI build-test-debug feedback cycles.',
    icon: 'claude',
    themeClass: 'claude-theme',
  },
  {
    name: 'Cursor',
    role: 'AI Code Editor & Contextual Pair Programming',
    desc: 'Daily development environment for full-stack feature delivery, predictive multi-file tab completions, and real-time diff audits.',
    badge: 'AI IDE',
    impact: 'Powers daily full-stack velocity with codebase awareness.',
    icon: 'cursor',
    themeClass: 'cursor-theme',
  },
];

function Icon({ name, size = 18, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `svg-icon ${className}`,
    'aria-hidden': true,
  };

  switch (name) {
    case 'arrow':
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case 'arrow-up':
      return <svg {...common}><path d="M12 19V5M5 12l7-7 7 7" /></svg>;
    case 'external':
      return <svg {...common}><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>;
    case 'github':
      return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 13 4a13 13 0 0 0-6 0C2.5 1.2 1.3 1.5 1.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0-.2 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 5 18.1V22" /></svg>;
    case 'linkedin':
      return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'mail':
      return <svg {...common}><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 7 9-7" /></svg>;
    case 'download':
      return <svg {...common}><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M4 20h16" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case 'spark':
      return <svg {...common}><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></svg>;
    case 'code':
      return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></svg>;
    case 'cloud':
      return <svg {...common}><path d="M20 16.5a4.5 4.5 0 0 0-1.5-8.7A6.5 6.5 0 0 0 6 9.5a3.5 3.5 0 0 0 .5 7H20Z" /></svg>;
    case 'cpu':
      return <svg {...common}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5M10 10h4v4h-4z" /></svg>;
    case 'server':
      return <svg {...common}><rect x="2" y="3" width="20" height="8" rx="2" /><rect x="2" y="13" width="20" height="8" rx="2" /><path d="M6 7h.01M6 17h.01" /></svg>;
    case 'terminal':
      return <svg {...common}><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>;
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'close':
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case 'check':
      return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case 'copy':
      return <svg {...common}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
    case 'briefcase':
      return <svg {...common}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>;
    case 'phone':
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case 'openai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`svg-icon ${className}`} aria-hidden="true">
          <path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.94 6.08 6.08 0 0 0-6.49-2.85 6.04 6.04 0 0 0-4.66-2.07c-3.1 0-5.74 2.1-6.43 5.09a6.04 6.04 0 0 0-4.04 2.93 6.08 6.08 0 0 0 .74 7.07 5.98 5.98 0 0 0 .52 4.94 6.08 6.08 0 0 0 6.49 2.85 6.04 6.04 0 0 0 4.66 2.07c3.1 0 5.74-2.1 6.43-5.09a6.04 6.04 0 0 0 4.04-2.93 6.08 6.08 0 0 0-.74-7.07Zm-8.77 12.02a4.48 4.48 0 0 1-2.84-1.02l.14-.08 4.67-2.7a.8.8 0 0 0 .4-.69v-6.58l1.97 1.14a.07.07 0 0 1 .04.06v5.43a4.5 4.5 0 0 1-4.38 4.44Zm-9.87-4.2a4.48 4.48 0 0 1-.53-2.97c.05-.3.16-.58.32-.84l.14.08 4.67 2.7a.8.8 0 0 0 .8 0l5.7-3.29v2.28a.07.07 0 0 1-.03.06l-4.7 2.72a4.5 4.5 0 0 1-6.37-.74Zm-1.1-10.45a4.48 4.48 0 0 1 2.3-1.95v5.55a.8.8 0 0 0 .4.69l5.7 3.29-1.97 1.14a.07.07 0 0 1-.07 0l-4.7-2.72a4.5 4.5 0 0 1-1.66-5.99Zm15.82 3.86-5.7-3.29 1.97-1.14a.07.07 0 0 1 .07 0l4.7 2.72a4.5 4.5 0 0 1 1.66 5.99 4.48 4.48 0 0 1-2.3 1.95v-5.55a.8.8 0 0 0-.4-.68Zm2.25 5.51a4.48 4.48 0 0 1-.32.84l-.14-.08-4.67-2.7a.8.8 0 0 0-.8 0l-5.7 3.29v-2.28a.07.07 0 0 1 .03-.06l4.7-2.72a4.5 4.5 0 0 1 6.8 3.7Zm-11.45-2.07-2.58-1.49 2.58-1.49 2.58 1.49-2.58 1.49Z" />
        </svg>
      );
    case 'gemini':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`svg-icon ${className}`} aria-hidden="true">
          <defs>
            <linearGradient id="geminiGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" fill="url(#geminiGradIcon)" />
        </svg>
      );
    case 'antigravity':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`svg-icon ${className}`} aria-hidden="true">
          <defs>
            <linearGradient id="agyGradIcon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="60%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#d7ff68" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="9.5" stroke="url(#agyGradIcon)" strokeWidth="1.8" strokeDasharray="3 3" />
          <path d="M12 4.5L18.5 16.5H5.5L12 4.5Z" stroke="url(#agyGradIcon)" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="12" cy="12.5" r="2.2" fill="#d7ff68" />
        </svg>
      );
    case 'claude':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`svg-icon ${className}`} aria-hidden="true">
          <path d="M13.2 2.6c-.4-.8-1.5-.8-1.9 0L9.4 6.8c-.2.4-.6.6-1 .6H4.2c-.9 0-1.5.8-1.1 1.6l2.1 3.9c.2.4.2.8 0 1.2l-2.1 3.9c-.4.8.2 1.6 1.1 1.6h4.2c.4 0 .8.2 1 .6l1.9 4.2c.4.8 1.5.8 1.9 0l1.9-4.2c.2-.4.6-.6 1-.6h4.2c.9 0 1.5-.8 1.1-1.6l-2.1-3.9c-.2-.4-.2-.8 0-1.2l2.1-3.9c.4-.8-.2-1.6-1.1-1.6h-4.2c-.4 0-.8-.2-1-.6L13.2 2.6Z" fill="#D97757" />
        </svg>
      );
    case 'cursor':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`svg-icon ${className}`} aria-hidden="true">
          <path d="M12 2.5L3.5 7.4V16.6L12 21.5L20.5 16.6V7.4L12 2.5Z" fill="#0c1d29" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 21.5V12M12 12L3.5 7.4M12 12L20.5 7.4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 7.5L8 9.8V14.2L12 16.5L16 14.2V9.8L12 7.5Z" fill="#d7ff68" opacity="0.9" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
  }
}

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);

  const navigate = (url) => {
    const target = new URL(url, window.location.origin);
    if (target.origin !== window.location.origin) return;

    window.history.pushState({}, '', target.pathname + target.search + target.hash);
    setPath(target.pathname);

    if (target.hash) {
      window.requestAnimationFrame(() => {
        const el = document.getElementById(target.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return [path, navigate];
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const isExperience = path.replace(/\/+$/, '') === '/experience';

  const onNav = (href) => (e) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="/" onClick={onNav('/')} className="brand" aria-label="Sai Kumar Homepage">
          <div className="brand-badge">
            <span>SK</span>
            <span className="brand-dot" />
          </div>
          <div className="brand-info">
            <span className="brand-name">SAI KUMAR</span>
            <span className="brand-title">SOFTWARE ENGINEER</span>
          </div>
        </a>

        <button
          className="mobile-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          <a
            href="/"
            onClick={onNav('/')}
            className={`nav-link ${!isExperience ? 'active' : ''}`}
          >
            Overview
          </a>
          <a
            href="/experience"
            onClick={onNav('/experience')}
            className={`nav-link ${isExperience ? 'active' : ''}`}
          >
            Work Experience
          </a>
          <a
            href={isExperience ? '/#projects' : '#projects'}
            onClick={onNav('/#projects')}
            className="nav-link"
          >
            Projects
          </a>
          <a
            href={isExperience ? '/#stack' : '#stack'}
            onClick={onNav('/#stack')}
            className="nav-link"
          >
            Tech Stack
          </a>
          <a
            href={isExperience ? '/#credentials' : '#credentials'}
            onClick={onNav('/#credentials')}
            className="nav-link"
          >
            Certifications
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="nav-link"
          >
            Contact
          </a>

          <div className="nav-actions-mobile">
            <a className="button button-sm button-ghost" href={RESUME} download>
              <Icon name="download" size={15} /> Resume (PDF)
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a className="button button-sm button-ghost nav-resume-btn" href={RESUME} download>
            <Icon name="download" size={15} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Kicker({ children, icon = 'spark' }) {
  return (
    <div className="kicker">
      <span className="kicker-pulse">
        <Icon name={icon} size={13} />
      </span>
      <span>{children}</span>
    </div>
  );
}

function HeroRadar() {
  return (
    <div className="hero-radar-card" aria-label="Sai Kumar Developer Architecture Radar">
      <div className="radar-glow" />
      <div className="radar-header">
        <div className="radar-pill">
          <span className="pulse-indicator" />
          <span>TECH RADAR · SKILLS MATRIX</span>
        </div>
        <span className="radar-code">GCP CERTIFIED</span>
      </div>

      <div className="radar-canvas">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-mid" />
        <div className="orbit orbit-inner" />

        <div className="core-hub">
          <div className="core-icon">
            <Icon name="code" size={30} />
          </div>
          <span className="core-title">SAI KUMAR</span>
          <span className="core-sub">FULL-STACK & ML</span>
        </div>

        <div className="radar-satellite sat-1">
          <Icon name="code" size={15} />
          <span>REACT 19 / TS</span>
        </div>
        <div className="radar-satellite sat-2">
          <Icon name="server" size={15} />
          <span>NODE / FASTAPI</span>
        </div>
        <div className="radar-satellite sat-3">
          <Icon name="cloud" size={15} />
          <span>GOOGLE CLOUD</span>
        </div>
        <div className="radar-satellite sat-4">
          <Icon name="cpu" size={15} />
          <span>PYTORCH / AI</span>
        </div>
      </div>

      <div className="radar-footer">
        <div className="radar-spec">
          <strong>FULL STACK</strong>
          <span>React · Node · Python</span>
        </div>
        <div className="radar-spec">
          <strong>CLOUD & DEVOPS</strong>
          <span>GCP · Docker · CI/CD</span>
        </div>
        <div className="radar-spec">
          <strong>APPLIED AI / ML</strong>
          <span>Inference · PyTorch</span>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, sub }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-email-btn ${copied ? 'is-copied' : ''}`}
      title="Click to copy email address"
      aria-label="Copy email address"
    >
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      <span>{copied ? 'Copied to clipboard!' : EMAIL}</span>
    </button>
  );
}

function ProjectCard({ project: p }) {
  const [activeImg, setActiveImg] = useState(p.image);

  return (
    <article className="project-card" key={p.number}>
      <div className="project-preview-wrapper">
        <img src={activeImg} alt={p.alt} loading="lazy" className="project-preview-img" />
        <div className="project-category-badge">{p.category}</div>
        {p.screenshots && p.screenshots.length > 1 && (
          <div className="project-screenshot-tabs">
            {p.screenshots.map((s) => (
              <button
                key={s.label}
                type="button"
                className={`screenshot-tab-btn ${activeImg === s.src ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImg(s.src);
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-meta-top">
          <span className="project-index">{p.number}</span>
          <span className="project-eyebrow">{p.eyebrow}</span>
        </div>

        <h3 className="project-title">{p.title}</h3>
        <div className="project-subtitle">{p.subtitle}</div>

        <p className="project-desc">{p.description}</p>

        <div className="project-tags">
          {p.tags.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-highlights">
          {p.highlights.map((h) => (
            <div key={h} className="highlight-item">
              <Icon name="check" size={14} className="accent-check" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="project-footer">
          <p className="project-note-text">{p.note}</p>
          <a href={p.href} target="_blank" rel="noreferrer" className="project-link-btn">
            <span>{p.linkText}</span>
            <Icon name="external" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Home({ navigate }) {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-content">
            <div className="hero-status-tag">
              <span className="live-beacon" />
              <span>Available for Full-Stack & ML Engineering Roles</span>
            </div>

            <h1 className="hero-title">
              Building software where <em>modern engineering</em>, high performance & intelligence meet.
            </h1>

            <p className="hero-description">
              I’m <strong>Sai Kumar</strong> — a software engineer building resilient full-stack applications,
              cloud microservices, and applied machine learning systems. Specializing in React, Node.js, Python,
              Google Cloud, and scalable API architectures.
            </p>

            <div className="hero-cta-group">
              <a
                href="/experience"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/experience');
                }}
                className="button button-primary"
              >
                <Icon name="briefcase" size={17} />
                <span>View Work Experience</span>
              </a>

              <a href="#projects" className="button button-ghost">
                <span>View Projects</span>
              </a>

              <a href={RESUME} download className="button button-ghost">
                <Icon name="download" size={16} />
                <span>Resume (PDF)</span>
              </a>
            </div>

            <div className="hero-social-links">
              <span className="social-label">Connect:</span>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="social-pill">
                <Icon name="github" size={16} />
                <span>GitHub</span>
                <Icon name="external" size={12} className="dim" />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="social-pill">
                <Icon name="linkedin" size={16} />
                <span>LinkedIn</span>
                <Icon name="external" size={12} className="dim" />
              </a>
              <a href={`mailto:${EMAIL}`} className="social-pill">
                <Icon name="mail" size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <HeroRadar />
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="stats-section">
        <div className="shell">
          <div className="stats-grid">
            <Stat value="GCP ACE" label="Google Cloud Certified" sub="Associate Cloud Engineer" />
            <Stat value="Full-Stack" label="Engineering Scope" sub="React 19, Node.js, FastAPI & Cloud" />
            <Stat value="Applied ML" label="Model Pipelines" sub="PyTorch, Transformers & Cloud Run" />
            <Stat value="B.Tech" label="Computer Science (KL Univ)" sub="CGPA 8.44 / 10 · 2020–2024" />
          </div>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="profile-section">
        <div className="shell">
          <div className="section-head">
            <Kicker icon="spark">CORE CAPABILITIES</Kicker>
            <h2>From the browser to the backend — and deep into the model pipeline.</h2>
            <p className="section-subtitle">
              My engineering focus centers on clean architectural boundaries, intuitive frontend user experiences,
              resilient microservices, and automated cloud deployments.
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="cap-icon">
                <Icon name="code" size={24} />
              </div>
              <div className="cap-number">01</div>
              <h3>Full-Stack Application Delivery</h3>
              <p>
                Developing modern, component-driven user interfaces with React 19, TypeScript, and Vite.
                Building robust RESTful API tiers with Express and FastAPI, backed by Firestore and MongoDB.
              </p>
              <div className="cap-tags">
                <span>React 19</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>FastAPI</span>
              </div>
            </div>

            <div className="capability-card">
              <div className="cap-icon">
                <Icon name="cloud" size={24} />
              </div>
              <div className="cap-number">02</div>
              <h3>Cloud Infrastructure & DevOps</h3>
              <p>
                Architecting containerized microservices on Google Cloud Run, setting up IAM access boundaries,
                writing infrastructure scripts, and automating deployments with GitHub Actions and Docker.
              </p>
              <div className="cap-tags">
                <span>Google Cloud</span>
                <span>Cloud Run</span>
                <span>Docker</span>
                <span>CI/CD</span>
              </div>
            </div>

            <div className="capability-card">
              <div className="cap-icon">
                <Icon name="cpu" size={24} />
              </div>
              <div className="cap-number">03</div>
              <h3>Applied Machine Learning & AI</h3>
              <p>
                Training and deploying sequence models (Transformers, LSTMs) and neural networks.
                Packaging feature preprocessing and inference services into scalable Docker containers on Cloud Run.
              </p>
              <div className="cap-tags">
                <span>PyTorch</span>
                <span>FastAPI</span>
                <span>Transformers</span>
                <span>Weights & Biases</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Spotlight on Home */}
      <section className="experience-teaser-section">
        <div className="shell">
          <div className="experience-teaser-card">
            <div className="teaser-content">
              <Kicker icon="briefcase">WORK EXPERIENCE</Kicker>
              <h2>Software Engineer</h2>
              <div className="teaser-role">
                <strong>SentraAuth Technologies Private Limited</strong>
                <span>CIE at IIIT Hyderabad · October 2025 – Present (Progressed from internship to full-time role)</span>
              </div>
              <p>
                Worked as a core Software Engineer developing full-stack web applications, private Python model inference
                microservices on Google Cloud, desktop agent services in C#/.NET 8, and machine learning pipelines.
              </p>

              <div className="teaser-pills">
                <span>React & Node.js Application Layer</span>
                <span>FastAPI & Cloud Run Inference</span>
                <span>PyTorch Deep Learning Pipelines</span>
                <span>C# & .NET 8 Desktop Services</span>
                <span>GCP Infrastructure & Testing</span>
              </div>

              <div className="teaser-actions">
                <a
                  href="/experience"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/experience');
                  }}
                  className="button button-primary"
                >
                  <span>Explore Detailed Work Experience</span>
                  <Icon name="arrow" size={17} />
                </a>
                <a href={RESUME} download className="button button-ghost">
                  <Icon name="download" size={16} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="shell">
          <div className="section-head-split">
            <div>
              <Kicker icon="code">FEATURED PROJECTS</Kicker>
              <h2>Personal Engineering Projects</h2>
              <p className="section-subtitle">
                Production-focused software projects demonstrating multi-tenancy, state architecture, and AI integration.
              </p>
            </div>
            <div className="filter-tabs">
              {['All', 'Full Stack', 'Cloud', 'AI'].map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.number} project={p} />
            ))}
          </div>

          <div className="projects-github-cta">
            <span>Explore more open-source repositories and code samples on GitHub:</span>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="button button-sm button-ghost">
              <Icon name="github" size={16} />
              <span>View GitHub Profile</span>
              <Icon name="external" size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="stack-section">
        <div className="shell">
          <div className="section-head">
            <Kicker icon="cpu">TECHNICAL SKILLS</Kicker>
            <h2>Tools & Technologies I Work With</h2>
            <p className="section-subtitle">
              Comprehensive full-stack, cloud, and machine learning toolkit categorized by engineering domain.
            </p>
          </div>

          <div className="stack-grid">
            {skills.map((skillGroup, idx) => (
              <div className="stack-card" key={skillGroup.group}>
                <div className="stack-card-head">
                  <div className="stack-icon-wrap">
                    <Icon name={skillGroup.icon} size={20} />
                  </div>
                  <span className="stack-index">0{idx + 1}</span>
                </div>

                <h3>{skillGroup.group}</h3>
                <p className="stack-card-summary">{skillGroup.summary}</p>

                <div className="skill-pills-list">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="credentials" className="credentials-section">
        <div className="shell">
          <div className="section-head">
            <Kicker icon="shield">CREDENTIALS & BACKGROUND</Kicker>
            <h2>Education & Professional Certifications</h2>
          </div>

          <div className="credentials-grid">
            <div className="credential-card featured">
              <div className="cred-icon-wrap">
                <Icon name="cloud" size={24} />
              </div>
              <div className="cred-body">
                <div className="cred-badge">OFFICIAL CERTIFICATION</div>
                <h3>Google Cloud Certified — Associate Cloud Engineer</h3>
                <div className="cred-issuer">Google Cloud · May 2026 — May 2029</div>
                <p>
                  Demonstrated competency in deploying applications, monitoring operations, managing enterprise IAM,
                  and configuring Google Cloud solutions including Cloud Run, Cloud Storage, and VPCs.
                </p>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-icon-wrap">
                <Icon name="code" size={24} />
              </div>
              <div className="cred-body">
                <div className="cred-badge">ACADEMIC DEGREE</div>
                <h3>B.Tech, Computer Science & Engineering</h3>
                <div className="cred-issuer">Koneru Lakshmaiah Education Foundation (KL University) · 2020 — 2024</div>
                <p>Graduated with CGPA 8.44 / 10. Core coursework in Data Structures, OS, Networks, DB Systems & AI.</p>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-icon-wrap">
                <Icon name="shield" size={24} />
              </div>
              <div className="cred-body">
                <div className="cred-badge">CERTIFICATION</div>
                <h3>Microsoft Certified: Azure Fundamentals</h3>
                <div className="cred-issuer">Microsoft · 2023</div>
                <p>Foundations of cloud concepts, Azure architectural components, security, privacy, and compliance.</p>
              </div>
            </div>

            <div className="credential-card">
              <div className="cred-icon-wrap">
                <Icon name="spark" size={24} />
              </div>
              <div className="cred-body">
                <div className="cred-badge">CERTIFICATION</div>
                <h3>ServiceNow Certified System Administrator (CSA)</h3>
                <div className="cred-issuer">ServiceNow · 2023</div>
                <p>Configuring, managing, and maintaining cloud workflows, access rules, and automated platform services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}

function SystemArchitectureSection() {
  return (
    <section className="architecture-showcase-section">
      <div className="shell">
        <div className="section-head">
          <Kicker icon="cpu">SYSTEM ARCHITECTURE & INTEGRATION BOUNDARIES</Kicker>
          <h2>End-to-End Software & Systems Architecture</h2>
          <p className="section-subtitle">
            Conceptual architectural topology illustrating how client web applications, secure identity verification,
            private microservices, machine learning inference, and endpoint background agents interconnect across strict boundaries.
          </p>
        </div>

        <div className="architecture-cards-grid">
          {/* Cloud & AI Microservices Pipeline */}
          <div className="arch-diagram-card">
            <div className="arch-card-header">
              <div className="arch-tag-group">
                <span className="arch-type-pill">FULL-STACK & CLOUD PIPELINE</span>
                <span className="arch-sub-pill">WEB APPLICATION & INFERENCE TOPOLOGY</span>
              </div>
              <h3>Cloud & Neural Inference Architecture</h3>
              <p>
                How requests journey from the responsive client interface through identity verification and API gateway tiers
                to private, containerized Python inference services and cloud storage.
              </p>
            </div>

            <div className="arch-flow-diagram">
              <div className="flow-step">
                <div className="flow-step-num">01</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">React + Vite Frontend</div>
                  <div className="flow-box-desc">Responsive Client UI · Event Stream Capture · Multi-Prompt Verification</div>
                  <div className="flow-tech-tags">
                    <span>React</span>
                    <span>Vite</span>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">02</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Node.js + Express Backend</div>
                  <div className="flow-box-desc">API Gateway · Auth Middleware · Request Validation · Policy Scoring</div>
                  <div className="flow-tech-tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">03</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Firebase Auth & Cloud Firestore</div>
                  <div className="flow-box-desc">Identity Token Verification · User Profile & Embedding Persistence</div>
                  <div className="flow-tech-tags">
                    <span>Firebase Auth</span>
                    <span>Firestore</span>
                    <span>IAM</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">04</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Private Python FastAPI Service</div>
                  <div className="flow-box-desc">Asynchronous Inference Endpoint · Pydantic Schema · Array Preprocessing</div>
                  <div className="flow-tech-tags">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>NumPy</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">05</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">TensorFlow / PyTorch Models</div>
                  <div className="flow-box-desc">Sequence Encoders (Transformers, LSTMs, CNNs) · Invariant Metric Spaces</div>
                  <div className="flow-tech-tags">
                    <span>TensorFlow</span>
                    <span>PyTorch</span>
                    <span>Inference</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">06</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Docker + Cloud Run + Cloud Storage</div>
                  <div className="flow-box-desc">Multi-Stage Containers · Cloud Run Autoscaling · Weight Artifacts · Terraform</div>
                  <div className="flow-tech-tags">
                    <span>Docker</span>
                    <span>Cloud Run</span>
                    <span>Cloud Storage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="arch-card-footer">
              <Icon name="shield" size={14} />
              <span>Architectural Boundary: Browser clients communicate solely with the public API gateway. Private inference services and model artifacts are isolated within internal VPC / Cloud IAM perimeters.</span>
            </div>
          </div>

          {/* Windows Desktop Systems Architecture */}
          <div className="arch-diagram-card">
            <div className="arch-card-header">
              <div className="arch-tag-group">
                <span className="arch-type-pill">SYSTEMS & OS ARCHITECTURE</span>
                <span className="arch-sub-pill">ENDPOINT TELEMETRY TOPOLOGY</span>
              </div>
              <h3>Windows Background Service & Telemetry Architecture</h3>
              <p>
                Strict privilege-separated architecture isolating Session 0 service management from interactive user desktop capture components.
              </p>
            </div>

            <div className="arch-flow-diagram">
              <div className="flow-step">
                <div className="flow-step-num">01</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Windows Background Service</div>
                  <div className="flow-box-desc">C# & .NET 8 Service · LocalSystem Session 0 Execution · Lifecycle Guard</div>
                  <div className="flow-tech-tags">
                    <span>C#</span>
                    <span>.NET 8</span>
                    <span>Session 0</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">02</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Session Lifecycle Management</div>
                  <div className="flow-box-desc">Session State Tracking · Logon, Lock, Unlock, Logoff, and Disconnect Handling</div>
                  <div className="flow-tech-tags">
                    <span>Session Events</span>
                    <span>State Machine</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">03</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">User Session Capture Component</div>
                  <div className="flow-box-desc">Interactive User Desktop Process · High-Precision Win32 Raw Input Producer</div>
                  <div className="flow-tech-tags">
                    <span>Raw Input API</span>
                    <span>Win32 API</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">04</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Inter-Process Communication</div>
                  <div className="flow-box-desc">Cross-Session Communication · Buffered Message Delivery · Non-Blocking Callbacks</div>
                  <div className="flow-tech-tags">
                    <span>IPC Stream</span>
                    <span>Process Isolation</span>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <Icon name="arrow" size={16} />
              </div>

              <div className="flow-step">
                <div className="flow-step-num">05</div>
                <div className="flow-step-box">
                  <div className="flow-box-title">Structured Session Data Storage</div>
                  <div className="flow-box-desc">Durable File Persistence · Checksum Validation · Crash Recovery Finalization</div>
                  <div className="flow-tech-tags">
                    <span>Structured Storage</span>
                    <span>Integrity Guard</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="arch-card-footer">
              <Icon name="shield" size={14} />
              <span>Architectural Boundary: Endpoint services never reconstruct text, inspect application content, or capture screens. Capture processes remain strictly non-blocking and isolated.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperiencePage({ navigate }) {
  const [repoFilter, setRepoFilter] = useState('All');
  const filteredRepos = repoFilter === 'All'
    ? repositoryContributions
    : repositoryContributions.filter((r) => r.category.toLowerCase().includes(repoFilter.toLowerCase()));

  return (
    <div className="experience-page">
      {/* Hero */}
      <section className="exp-hero-section">
        <div className="shell">
          <Kicker icon="briefcase">CAREER & WORK HISTORY</Kicker>
          <h1 className="exp-hero-title">
            Professional Work Experience.<br />
            <em>What I built, shipped & scaled.</em>
          </h1>
          <p className="exp-hero-lead">
            A comprehensive look at my engineering work as a Software Engineer at SentraAuth — detailing the full-stack
            interfaces, cloud microservices, inference pipelines, and desktop services I personally developed.
          </p>

          <div className="exp-meta-ribbon">
            <div className="meta-pill">
              <span className="meta-dot" />
              <span>ROLE: SOFTWARE ENGINEER</span>
            </div>
            <div className="meta-pill">
              <span>COMPANY: SENTRAAUTH TECHNOLOGIES</span>
            </div>
            <div className="meta-pill">
              <span>TENURE: OCTOBER 2025 – PRESENT</span>
            </div>
            <div className="meta-pill">
              <span>LOCATION: HYDERABAD, INDIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role Overview Card */}
      <section className="company-context-section">
        <div className="shell">
          <div className="company-info-card">
            <div className="company-logo-mark">
              <Icon name="briefcase" size={30} />
            </div>
            <div className="company-details">
              <div className="company-kicker">WORKPLACE & ROLE OVERVIEW</div>
              <h2>Software Engineer (AI / Cloud & Full Stack)</h2>
              <p className="company-sub">
                SentraAuth Technologies Private Limited · CIE at IIIT Hyderabad
              </p>
              <div className="company-badges">
                <span>October 2025 – Present</span>
                <span>Internship → Full-time Progression</span>
                <span>Full-Stack & Cloud Systems</span>
              </div>
            </div>
            <a href={RESUME} download className="button button-ghost company-ext-btn">
              <Icon name="download" size={15} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Work Streams */}
      <section className="tracks-timeline-section">
        <div className="shell">
          <div className="section-head-split">
            <div>
              <Kicker icon="code">RESPONSIBILITIES & CONTRIBUTIONS</Kicker>
              <h2>Key Engineering Workstreams</h2>
            </div>
            <span className="track-counter">WORKSTREAMS 01 — 05</span>
          </div>

          <div className="tracks-timeline">
            {workStreams.map((stream) => (
              <article className="track-card-item" key={stream.id}>
                <div className="track-left-col">
                  <div className="track-node-badge">{stream.number}</div>
                  <div className="track-connector-line" />
                </div>

                <div className="track-right-content">
                  <div className="track-label-tag">{stream.label}</div>
                  <h3 className="track-title">{stream.title}</h3>
                  <p className="track-summary-text">{stream.summary}</p>

                  <div className="responsibilities-list">
                    <h4 className="resp-heading">Key Achievements & Responsibilities:</h4>
                    <ul>
                      {stream.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <Icon name="check" size={14} className="accent-check" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="track-technologies-row">
                    <span className="tech-row-label">TECH STACK:</span>
                    <div className="tech-pills-row">
                      {stream.stack.map((s) => (
                        <span key={s} className="tech-pill-small">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture & Integration Boundaries */}
      <SystemArchitectureSection />

      {/* 12 Production Repositories Breakdown */}
      <section className="repo-breakdown-section">
        <div className="shell">
          <div className="section-head-split">
            <div>
              <Kicker icon="code">REPOSITORY HANDBOOK & ARCHITECTURE REGISTER</Kicker>
              <h2>12 Production & Research Codebases Engineered</h2>
              <p className="section-subtitle">
                A granular, codebase-by-codebase breakdown of all 12 repositories I developed and maintained at SentraAuth —
                detailing architectural responsibilities, technologies, features delivered, and critical boundary constraints.
              </p>
            </div>

            <div className="filter-tabs">
              {['All', 'Full-Stack', 'Deep Learning', 'Systems & OS', 'Data Engineering'].map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${repoFilter === cat ? 'active' : ''}`}
                  onClick={() => setRepoFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="repos-grid">
            {filteredRepos.map((r) => (
              <article className="repo-card" key={r.id}>
                <div className="repo-card-top">
                  <div className="repo-id-tag">
                    <Icon name="code" size={14} />
                    <span>{r.repo}</span>
                  </div>
                  <div className="repo-category-pill">{r.category}</div>
                </div>

                <div className="repo-card-main">
                  <div className="repo-num-title">
                    <span className="repo-number">{r.number}</span>
                    <h3 className="repo-title">{r.title}</h3>
                  </div>
                  <p className="repo-purpose">{r.purpose}</p>

                  <div className="repo-tech-stack">
                    <span className="stack-label">TECHNOLOGIES:</span>
                    <div className="tech-pills-row">
                      {r.stack.map((s) => (
                        <span key={s} className="tech-pill-small">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="repo-what-i-did">
                    <h4>What I Built & Contributed:</h4>
                    <ul>
                      {r.whatIDid.map((item, idx) => (
                        <li key={idx}>
                          <Icon name="check" size={14} className="accent-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="repo-boundary-callout">
                    <div className="boundary-head">
                      <Icon name="shield" size={13} />
                      <span>ARCHITECTURAL BOUNDARY & CONTRACT:</span>
                    </div>
                    <p>{r.boundaries}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engineering & Production Quality Tooling */}
      <section className="ai-production-section">
        <div className="shell">
          <div className="section-head">
            <Kicker icon="spark">PRODUCTION ENGINEERING VELOCITY</Kicker>
            <h2>AI & Agentic Tools Used in My Work</h2>
            <p className="section-subtitle">
              To deliver superior production quality, accelerate development cycles, and ensure thorough test coverage,
              I actively integrate advanced agentic AI environments and LLM reasoning engines into my daily workflow.
            </p>
          </div>

          <div className="ai-tools-grid">
            {aiProductionTools.map((tool) => (
              <div className="ai-tool-card" key={tool.name}>
                <div className="ai-tool-top">
                  <div className={`ai-tool-icon-box ${tool.themeClass}`}>
                    <Icon name={tool.icon} size={28} />
                  </div>
                  <span className="ai-tool-badge">{tool.badge}</span>
                </div>
                <h3 className="ai-tool-name">{tool.name}</h3>
                <div className="ai-tool-role">{tool.role}</div>
                <p className="ai-tool-desc">{tool.desc}</p>
                <div className="ai-tool-impact">
                  <Icon name="check" size={13} className="impact-check" />
                  <span>{tool.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return to Overview CTA */}
      <section className="exp-footer-cta">
        <div className="shell">
          <div className="cta-box">
            <div>
              <h2>Want to discuss a technical project or opportunity?</h2>
              <p>I am open to conversations regarding full-stack engineering, cloud architecture, and applied ML roles.</p>
            </div>
            <div className="cta-buttons">
              <a href={`mailto:${EMAIL}?subject=Job%20Opportunity%20-%20Sai%20Kumar`} className="button button-primary">
                <span>Get In Touch</span>
                <Icon name="arrow" size={17} />
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="button button-ghost"
              >
                <span>Back to Overview</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <div className="footer-hero">
          <div className="footer-headline-block">
            <Kicker icon="spark">GET IN TOUCH</Kicker>
            <h2>Let’s build something scalable and meaningful.</h2>
            <p>
              I am currently open to full-time Software Engineer opportunities across Full-Stack,
              Cloud Infrastructure, and Applied Machine Learning roles.
            </p>
          </div>

          <div className="footer-contact-actions">
            <CopyEmailButton />
            <a href={`mailto:${EMAIL}`} className="button button-primary email-direct-btn">
              <span>Send Direct Email</span>
              <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col-brand">
            <div className="brand-badge small">
              <span>SK</span>
              <span className="brand-dot" />
            </div>
            <div className="footer-brand-title">Arava Leela Naga Venkata Sai Kumar</div>
            <p className="footer-brand-role">Software Engineer · Full-Stack, Cloud & Applied ML</p>
            <div className="footer-location">📍 Hyderabad, India</div>
          </div>

          <div className="footer-col-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Overview</a></li>
              <li><a href="/experience">Work Experience</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#stack">Tech Stack</a></li>
              <li><a href="/#credentials">Certifications</a></li>
            </ul>
          </div>

          <div className="footer-col-social">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  <Icon name="github" size={16} />
                  <span>GitHub (@Saikumararava)</span>
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <Icon name="mail" size={16} />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s+/g, '')}`}>
                  <Icon name="phone" size={16} />
                  <span>{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={RESUME} download>
                  <Icon name="download" size={16} />
                  <span>Download Curriculum Vitae</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Sai Kumar. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll to top of page">
            <span>Back to top</span>
            <Icon name="arrow-up" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [path, navigate] = useRoute();
  const isExperience = path.replace(/\/+$/, '') === '/experience';

  useEffect(() => {
    document.title = isExperience
      ? 'Work Experience | Sai Kumar'
      : 'Sai Kumar | Software Engineer — Full-Stack, Cloud & Applied ML';
  }, [isExperience]);

  return (
    <div className="app-root">
      <Header path={isExperience ? '/experience' : '/'} navigate={navigate} />
      <main className="app-main">
        {isExperience ? <ExperiencePage navigate={navigate} /> : <Home navigate={navigate} />}
      </main>
    </div>
  );
}

export const painCards = [
  {
    icon: "🔍",
    title: "Suspicious Emails Create Uncertainty",
    description: "Your team receives a suspicious email. Nobody knows if it's a real threat or a false alarm. Uncertainty leads to inaction — or panic.",
  },
  {
    icon: "🚫",
    title: "No In-House Security Team",
    description: "Most SMEs can't afford a dedicated security analyst. That means security decisions fall on people who already have full-time jobs.",
  },
  {
    icon: "📋",
    title: "Security Gaps Stay Unresolved",
    description: "Even after an incident, follow-up actions get lost in daily priorities. Critical gaps remain open, and nobody tracks accountability.",
  },
];

export const solutionCards = [
  {
    icon: "📩",
    title: "Fast Suspicious-Message Intake",
    description: "Report a suspicious email in under 60 seconds. Just paste the content and ZeroT handles the initial assessment for you.",
  },
  {
    icon: "💬",
    title: "Plain-Language Triage",
    description: "Get a clear, jargon-free explanation of the risk level and what the message actually means for your business.",
  },
  {
    icon: "✅",
    title: "Guided Follow-Up & Accountability",
    description: "Receive step-by-step response actions, assign them to your team, and track completion so nothing falls through the cracks.",
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: "Report Suspicious Item",
    description: "Paste a suspicious email, link, or message into ZeroT. No technical knowledge required — just copy and submit.",
  },
  {
    step: 2,
    title: "Get Plain-Language Triage",
    description: "ZeroT analyzes the content and gives you a risk summary in plain English. You'll know what to worry about and what's safe.",
  },
  {
    step: 3,
    title: "Follow Guided Response Actions",
    description: "Receive a clear checklist of next steps — who to notify, what to change, and what to monitor — tailored to your situation.",
  },
  {
    step: 4,
    title: "Track Readiness Gaps",
    description: "See your overall security posture at a glance. Track which actions are done and where your biggest gaps remain.",
  },
];

export const features = [
  { icon: "📩", title: "Suspicious Message Intake", description: "One-click reporting for suspicious emails, links, and messages. No security expertise needed to get started.", tag: "Core" },
  { icon: "🔎", title: "Plain-Language Triage", description: "AI-powered risk assessment explained in words anyone can understand. Know the risk level in seconds, not hours.", tag: "AI-Powered" },
  { icon: "📖", title: "Guided Response Playbooks", description: "Step-by-step incident response actions designed for non-experts. Follow proven workflows without security training.", tag: "Actionable" },
  { icon: "📊", title: "Security Readiness Scorecard", description: "A simple score that shows your overall security posture. Track improvements over time and know where to focus.", tag: "Measurable" },
  { icon: "📰", title: "Founder-Ready Weekly Risk Brief", description: "A concise weekly summary of your security activity, open gaps, and recommended priorities — made for busy leaders.", tag: "Strategic" },
];

export const dashboardMetrics = [
  { label: "Readiness Score", value: "72%", trend: "up", change: "+5% this month", color: "teal" },
  { label: "Open Incidents", value: "3", trend: "neutral", change: "2 low, 1 medium", color: "blue" },
  { label: "Urgent Gaps", value: "2", trend: "down", change: "Down from 4 last week", color: "amber" },
  { label: "Actions Completed", value: "14", trend: "up", change: "This week", color: "teal" },
  { label: "Suspicious Reports", value: "7", trend: "neutral", change: "Last 30 days", color: "blue" },
];

export const trustCards = [
  { icon: "🏢", title: "Business Sector Context", description: "Public sector data helps benchmark cybersecurity readiness by industry, giving your business relevant context." },
  { icon: "📱", title: "Digital Adoption Context", description: "Understand how digital infrastructure trends affect SME risk exposure using publicly available indicators." },
  { icon: "⚙️", title: "SME Operations Context", description: "Operational data helps frame your company's security posture relative to similar-sized businesses." },
];

export const faqItems = [
  { question: "What is ZeroT?", answer: "ZeroT is an AI-powered cybersecurity readiness assistant built for small and medium businesses. It helps non-technical teams report suspicious messages, understand risk in plain language, follow guided response steps, and track their overall security posture — all without needing a dedicated security team." },
  { question: "Do I need cybersecurity experience to use ZeroT?", answer: "Not at all. ZeroT is specifically designed for founders, office managers, and IT generalists who don't have security training. Everything is explained in plain English with clear next steps." },
  { question: "How does ZeroT assess suspicious emails?", answer: "You paste the suspicious email content into ZeroT. Our AI analyzes it for common threat indicators and gives you a plain-language risk summary with a recommended action plan. No technical expertise required." },
  { question: "What is the Readiness Score?", answer: "The Readiness Score is a simple percentage that reflects your organization's overall cybersecurity posture. It improves as you complete recommended actions and close security gaps. Think of it as a health check for your business security." },
  { question: "Is my data safe with ZeroT?", answer: "Security and privacy are at the core of ZeroT's design. Suspicious message content is processed securely, and we follow industry best practices for data handling. Your data is never shared with third parties." },
  { question: "What does opendata.az have to do with ZeroT?", answer: "We reference publicly available data from opendata.az to provide contextual benchmarking — such as understanding digital adoption and SME trends in your region. This helps frame your security posture. The cybersecurity incidents shown in the MVP are synthetic sample data for demonstration purposes." },
  { question: "How much does ZeroT cost?", answer: "ZeroT is launching with early-access pricing for SMEs. Contact us through the platform for current pricing details and to discuss what plan fits your team size." },
];

export const quickPrompts = [
  "What happens after I report a suspicious email?",
  "How does ZeroT explain risk in plain language?",
  "What does the readiness score actually mean?",
  "How would this help a small business without a security team?",
  "How is public data from opendata.az used here?",
];

export const navLinks = [
  { label: "Threat Scanner", href: "/scanner" },
  { label: "Product", href: "/#features" },
  { label: "How It Works", href: "/#workflow" },
  { label: "Readiness", href: "/#dashboard" },
  { label: "FAQ", href: "/#faq" },
];

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Section from "@/components/section";
import FeatureCard from "@/components/feature-card";
import StepCard from "@/components/step-card";
import MetricCard from "@/components/metric-card";
import TrustCard from "@/components/trust-card";
import ChatWidget from "@/components/chat-widget";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Button from "@/components/button";
import {
  painCards,
  solutionCards,
  workflowSteps,
  features,
  dashboardMetrics,
  trustCards,
} from "@/lib/sample-data";

const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "#";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Problem / Solution */}
      <Section
        id="problems"
        title="The SME Security Challenge"
        subtitle="Small teams face big security moments every day — without the tools or expertise to handle them confidently."
      >
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            ZeroT makes it manageable
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From reporting to resolution — every step is guided, clear, and
            designed for people who aren't security experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutionCards.map((card, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover:bg-white/80 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Core Workflow */}
      <Section
        id="workflow"
        title="How ZeroT Works"
        subtitle="Four simple steps from suspicious message to confident resolution."
        className="bg-gradient-to-b from-slate-50/50 to-transparent"
      >
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-12 bottom-10 w-px bg-gradient-to-b from-zerot-300 to-teal-300 opacity-30" />

            {workflowSteps.map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Feature Highlights */}
      <Section
        id="features"
        title="Everything You Need — Nothing You Don't"
        subtitle="Focused tools that make cybersecurity manageable for small teams."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </Section>

      {/* 5. Dashboard Preview */}
      <Section
        id="dashboard"
        title="Your Security Posture at a Glance"
        subtitle="A clean, reassuring dashboard that shows what matters — without the complexity."
        className="bg-gradient-to-b from-slate-50/50 to-transparent"
      >
        <div className="glass-panel rounded-2xl p-6 md:p-8 max-w-4xl mx-auto float-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-teal-400" />
            <span className="text-sm font-medium text-slate-600">
              Dashboard Preview — Sample Data
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dashboardMetrics.map((metric, i) => (
              <MetricCard key={i} {...metric} />
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-slate-200/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-medium text-slate-700">
                  Recent Suspicious Reports
                </h4>
                <p className="text-xs text-slate-400">
                  Last 7 days · 3 resolved · 1 pending review
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                  3 Resolved
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                  1 Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Trusted Public Data */}
      <Section
        id="data-source"
        title="Grounded in Public Data Context"
        subtitle="ZeroT uses publicly available data from opendata.az for contextual benchmarking — not as live security telemetry."
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zerot-50 border border-zerot-100">
            <svg
              className="w-4 h-4 text-zerot-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-zerot-700">
              All cybersecurity incidents shown in the MVP are synthetic sample
              data for demonstration purposes
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {trustCards.map((card, i) => (
            <TrustCard key={i} {...card} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            href="https://opendata.az/en"
          >
            Explore Open Data
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Q&A Assistant has been moved to a global floating widget at the bottom */}

      {/* 8. FAQ */}
      <Section
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about ZeroT."
      >
        <FAQ />
      </Section>

      {/* 9. Final CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center float-shadow">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to make security manageable?
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Join SMEs who are taking control of their cybersecurity posture
              with calm, guided actions — no security team required.
            </p>
            <Button variant="primary" size="lg" href={loginUrl}>
              Get Started Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <p className="text-xs text-slate-400 mt-6">
              No credit card required · Setup in under 5 minutes · Cancel
              anytime
            </p>
          </div>
        </div>
      </section>

      <ChatWidget />
      {/* 10. Footer */}
      <Footer />
    </>
  );
}

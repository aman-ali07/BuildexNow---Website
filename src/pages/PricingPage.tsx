import { PageHero, CtaBand } from '../components/PageShell';
import { PriceGroups, type PriceTier } from '../components/Blocks';

const tier = (name: string, description: string, points: string[], featured = false): PriceTier => ({
  name, price: 'Tailored', unit: '', description, points, featured,
});

const GROUPS = [
  {
    title: 'Website Development',
    subtitle: 'Clear, fast websites built around the decisions that matter.',
    tiers: [
      tier('Starter Site', 'A focused first site for a new idea or a small business.', ['Up to 5 considered pages', 'Responsive, mobile-first design', 'Essential SEO structure', 'Handover and short training']),
      tier('Business Site', 'A complete site that explains the offer and converts interest.', ['Up to 10 pages', 'Custom visual design', 'Content structure and writing support', 'Analytics and measurement setup'], true),
      tier('Premium Platform', 'An advanced experience with deeper functionality.', ['Multi-page architecture', 'Custom interactions', 'Integration with your tools', 'Ongoing iteration plan']),
    ],
  },
  {
    title: 'Social Media',
    subtitle: 'A consistent voice and a rhythm your audience recognises.',
    tiers: [
      tier('Starter', 'Establish the basics and a repeatable format.', ['Channel and content strategy', 'Template library', 'A month of content', 'Monthly review']),
      tier('Growth', 'Build an audience with a steady publishing rhythm.', ['Full content pillars', 'Static and short-form creative', 'Managed publishing', 'Fortnightly performance review'], true),
      tier('Scale', 'A deeper content operation across formats.', ['Multi-channel planning', 'Video and UGC production', 'Community management', 'Creative testing cycle']),
    ],
  },
  {
    title: 'Paid Advertising',
    subtitle: 'Campaigns with a clear objective and honest measurement.',
    tiers: [
      tier('Starter', 'Get the foundations and a first campaign live.', ['Channel and objective selection', 'Audience research', 'Ad creative set', 'Two-week optimisation']),
      tier('Growth', 'A steady cycle of creative and measurement.', ['Multi-format creative', 'Landing page alignment', 'Weekly optimisation', 'Clear monthly reporting'], true),
      tier('Scale', 'A fuller programme across channels.', ['Cross-channel strategy', 'Video production', 'Retargeting journeys', 'Experiment roadmap']),
    ],
  },
  {
    title: 'Branding',
    subtitle: 'Identity systems that hold together everywhere they show up.',
    tiers: [
      tier('Starter Identity', 'The essentials for a credible first impression.', ['Brand direction', 'Primary mark', 'Colour and type basics', 'Short usage guide']),
      tier('Full Identity', 'A complete, flexible visual system.', ['Strategy and positioning', 'Primary and secondary marks', 'Full visual identity', 'Comprehensive guidelines'], true),
      tier('Brand System', 'An identity built to scale with a growing team.', ['Everything in Full Identity', 'Digital templates', 'Product application', 'Brand governance support']),
    ],
  },
  {
    title: 'Business Growth',
    subtitle: 'Design, build and marketing working as one programme.',
    tiers: [
      tier('Basic', 'A focused first step with clear scope.', ['One primary growth channel', 'Core assets', 'Measurement setup', 'Monthly check-in']),
      tier('Business', 'A connected programme across product and reach.', ['Website and brand foundations', 'Two growth channels', 'Shared content system', 'Fortnightly reviews'], true),
      tier('Business Pro', 'An embedded studio partner for ongoing work.', ['Full product and brand support', 'Multi-channel growth', 'Dedicated weekly rhythm', 'Quarterly planning sessions']),
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing"
        description="We scope every engagement around the outcome you need rather than a fixed menu. Explore the typical shapes below, then tell us what would actually help."
      />
      <PriceGroups
        groups={GROUPS}
        intro="Each band describes the kind of work usually involved. The exact scope and fee are agreed together before anything begins."
      />
      <section className="section section--tight">
        <div className="shell">
          <div className="cta-panel reveal">
            <div className="cta-layout">
              <div className="cta-copy">
                <h2>Not sure which shape fits?</h2>
                <p>Describe the problem in a sentence. We will suggest the smallest sensible starting point — even if that is not a full engagement.</p>
              </div>
              <div className="cta-band-actions">
                <a className="btn btn--primary" href="/contact/">Start a conversation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

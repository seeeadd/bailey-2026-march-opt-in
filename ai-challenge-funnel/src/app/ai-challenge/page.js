'use client';

import { useState } from 'react';
import styles from './registration.module.css';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with FEA Create API endpoint
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        window.location.href = '/vip';
      }
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.page}>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero}>
        {/* Background layers */}
        <div className={styles.heroBgBase} />
        <div className={`${styles.heroBgOrb} ${styles.orbCoral}`} />
        <div className={`${styles.heroBgOrb} ${styles.orbTeal}`} />
        <div className={`${styles.heroBgOrb} ${styles.orbGold}`} />
        <div className={styles.heroBgGrain} />

        <div className={styles.heroContent}>
          <div className={`${styles.heroContainer} container`}>

            {/* Eyebrow badge */}
            <div className={`${styles.heroBadge} animate-fade-up delay-1`}>
              <span className={styles.heroBadgeDot} />
              <span>FREE 5-Day Challenge</span>
            </div>

            {/* Headline */}
            <h1 className={`${styles.heroHeadline} animate-fade-up delay-2`}>
              Reveal The <span className={styles.heroAccent}>"Tried and True"</span> Secrets to Win{' '}
              <span className={styles.heroHighlight}>The ONE Funnel</span> Every Business Needs,{' '}
              <span className={styles.heroSub}>Even If You Suck At Marketing!</span>
            </h1>

            {/* Subhead */}
            <p className={`${styles.heroSubhead} animate-fade-up delay-3`}>
              Join Pedro Adao and thousands of entrepreneurs in this completely FREE masterclass
              that has helped 100,000+ businesses launch profitable challenge funnels.
            </p>

            {/* Hero image placeholder */}
            <div className={`${styles.heroImageWrap} animate-fade-up delay-3`}>
              <div className={styles.heroImagePlaceholder}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Hero Image Placeholder</span>
              </div>
            </div>

            {/* CTA Form */}
            <div className={`${styles.heroFormWrap} animate-fade-up delay-4`}>
              <div className={styles.heroFormCard}>
                <div className={styles.heroFormHeader}>
                  <span className={styles.heroFormBadge}>🔥 Limited Spots</span>
                  <h3 className={styles.heroFormTitle}>Register Now — 100% Free</h3>
                  <p className={styles.heroFormSub}>
                    Get instant access to the 5-Day Challenge Secrets Masterclass
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.heroForm}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your first name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your best email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <button
                    type="submit"
                    className={`cta-btn cta-btn--wide ${styles.heroCtaBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Registering...' : 'Join the Challenge Secrets for FREE!'}
                    {!isSubmitting && (
                      <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>

                <p className={styles.heroFormMicro}>
                  Your info is safe. We'll never spam you. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Social proof strip */}
            <div className={`${styles.trustStrip} animate-fade-up delay-5`}>
              <div className={styles.trustAvatars}>
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={styles.trustAvatar}>
                    <div className={styles.trustAvatarInner}>{String.fromCodePoint(0x1F464)}</div>
                  </div>
                ))}
              </div>
              <div className={styles.trustText}>
                <div className={styles.trustStars}>
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className={styles.trustCount}>Joined by 127,000+ entrepreneurs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ IS THIS FOR ME? ═══════════ */}
      <section className={styles.forMe}>
        <div className={`${styles.forMeInner} container`}>
          <div className={styles.forMeHeader}>
            <span className="eyebrow">Is This For Me?</span>
            <h2 className={`section-headline ${styles.forMeHeadline}`}>
              Is The <span className="accent">"Challenge Secrets"</span>{' '}
              For Me And My Business...??
            </h2>
          </div>

          <div className={styles.forMeGrid}>
            {[
              { icon: '🎯', title: 'Coaches & Consultants', desc: 'Turn your expertise into a challenge funnel that attracts premium clients on autopilot.' },
              { icon: '🛒', title: 'E-Commerce Sellers', desc: 'Launch challenge-driven product experiences that boost AOV and create raving fans.' },
              { icon: '💻', title: 'Course Creators', desc: 'Use challenges to warm up cold leads and sell your program without feeling salesy.' },
              { icon: '🚀', title: 'Agency Owners', desc: 'Add challenge funnels as a high-ticket service and 10x your client results.' },
              { icon: '📱', title: 'Content Creators', desc: 'Convert your audience into paying customers with an irresistible free challenge.' },
              { icon: '🆕', title: 'Complete Beginners', desc: 'Even if you\'ve never run a funnel — this step-by-step challenge makes it easy.' },
            ].map((item, i) => (
              <div key={i} className={styles.forMeCard}>
                <div className={styles.forMeCardIcon}>{item.icon}</div>
                <h3 className={styles.forMeCardTitle}>{item.title}</h3>
                <p className={styles.forMeCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SIGN UP TODAY ═══════════ */}
      <section className={styles.signUp}>
        <div className={`${styles.signUpInner} container container--narrow`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Don't Miss This</span>
          <h2 className={`section-headline ${styles.signUpHeadline}`}>
            Sign Up <span className="accent">Today...</span>
          </h2>
          <p className={styles.signUpSub}>
            I can't wait for you to see the secrets to creating, launching, and profiting from Challenge
            Funnels! All it takes is your name and email — and you'll get instant access.
          </p>

          <div className={styles.signUpFormCard}>
            <form onSubmit={handleSubmit} className={styles.signUpForm}>
              <input
                type="text"
                name="name"
                placeholder="Your first name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your best email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <button type="submit" className="cta-btn cta-btn--wide" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Join the Challenge Secrets Masterclass for FREE!'}
                {!isSubmitting && (
                  <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════ ONCE IN A LIFETIME MASTERCLASS ═══════════ */}
      <section className={styles.masterclass}>
        <div className={`${styles.masterclassInner} container`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            About The Presenter / Thank You For Challenging Us To Be
          </span>
          <h2 className={`section-headline ${styles.masterclassHeadline}`}>
            Once-In-A-Lifetime <span className="accent">Masterclass!</span>
          </h2>

          <div className={styles.masterclassContent}>
            <div className={styles.masterclassImages}>
              <div className={styles.masterclassImgPlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Presenter Photo</span>
              </div>
              <div className={styles.masterclassImgPlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Stage Photo</span>
              </div>
            </div>

            <div className={styles.masterclassText}>
              <p>
                From a place of near bankruptcy... to building a movement that has helped over{' '}
                <strong>100,000 entrepreneurs</strong> launch their businesses using the power of challenges.
              </p>
              <p>
                Pedro Adao has cracked the code on what it truly takes to build a profitable business fast —
                and he's distilled it all into this <strong>completely FREE</strong> 5-Day Masterclass.
              </p>
              <blockquote className={styles.masterclassQuote}>
                "I've helped people just like YOU start and scale 6 and 7-figure businesses using{' '}
                <strong>Challenge Funnels</strong> — and now I want to show you exactly how."
              </blockquote>
              <p className={styles.masterclassCredentials}>
                <strong>Pedro Adao</strong> — As seen on stage with Tony Robbins, Russell Brunson, Dean Graziosi,
                and featured by Entrepreneur, Forbes, and Inc. Magazine.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.masterclassCta}>
            <button
              onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-btn cta-btn--wide"
            >
              Join the Challenge Secrets for FREE!
              <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ DAY-BY-DAY BREAKDOWN ═══════════ */}
      <section className={styles.days}>
        <div className={`${styles.daysInner} container`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            5-Day Masterclass Breakdown
          </span>
          <h2 className={`section-headline ${styles.daysHeadline}`}>
            Here's What You Can Expect From{' '}
            <span className="accent">The 5-Day Challenge...</span>
          </h2>

          <div className={styles.daysTimeline}>
            {[
              {
                day: 'Day 1',
                title: 'What Is A "Challenge Funnel?"',
                desc: 'Discover why challenge funnels are the #1 funnel type for building authority, generating leads, and converting customers — even in crowded markets. You\'ll see real examples and understand the psychology behind why they work so well.',
                accent: '--coral',
              },
              {
                day: 'Day 2',
                title: 'Irresistible Challenge Offers',
                desc: 'Learn how to craft an offer so compelling that people feel STUPID saying no. We\'ll break down the anatomy of irresistible challenge offers and show you how to position yours for maximum conversions.',
                accent: '--teal-bright',
              },
              {
                day: 'Day 3',
                title: 'Creating An Irresistible Challenge',
                desc: 'The step-by-step blueprint for designing your challenge content, structure, and delivery. You\'ll map out your entire challenge in this session — titles, daily themes, engagement hooks, and more.',
                accent: '--gold',
              },
              {
                day: 'Day 4',
                title: 'Challenge Traffic Secrets!',
                desc: 'Where to find your ideal participants and how to fill your challenge with hungry, qualified leads — even with ZERO existing audience. Paid, organic, and partnership strategies revealed.',
                accent: '--coral',
              },
              {
                day: 'Day 5',
                title: 'The Secrets To Selling While Serving',
                desc: 'The ethical, high-converting framework for transitioning from free value to paid offer. You\'ll learn the exact close sequence that turns challenge participants into lifelong customers.',
                accent: '--teal-bright',
              },
            ].map((item, i) => (
              <div key={i} className={styles.dayCard}>
                <div className={styles.dayCardNumber} style={{ color: `var(${item.accent})` }}>
                  {item.day}
                </div>
                <div className={styles.dayCardBody}>
                  <h3 className={styles.dayCardTitle}>{item.title}</h3>
                  <p className={styles.dayCardDesc}>{item.desc}</p>
                </div>
                <div className={styles.dayCardImage}>
                  <div className={styles.dayCardImgPlaceholder}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Day */}
          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>BONUS DAY</div>
            <h3 className={styles.bonusTitle}>Crush It With Challenges</h3>
            <p className={styles.bonusDesc}>
              An exclusive bonus session with advanced challenge strategies, Q&A, and live hot-seat
              coaching to help you launch YOUR challenge with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ URGENCY ═══════════ */}
      <section className={styles.urgency}>
        <div className={`${styles.urgencyInner} container container--narrow`}>
          <h2 className={`section-headline ${styles.urgencyHeadline}`}>
            But Hurry! We're <span className="accent">Filling Up Fast...</span>
          </h2>
          <p className={styles.urgencySub}>
            We cap registration to keep the experience intimate and high-impact. Once spots are gone,
            you'll have to wait for the next round. Don't let this one pass you by.
          </p>
          <button
            onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-btn cta-btn--gold cta-btn--wide"
          >
            Join Challenge Secrets for FREE
            <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className={styles.testimonials}>
        <div className={`${styles.testimonialsInner} container`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            Your Hosts Serving This
          </span>
          <h2 className={`section-headline ${styles.testimonialsHeadline}`}>
            5-Day Challenge Secrets <span className="accent">Masterclass!</span>
          </h2>

          <div className={styles.testimonialGrid}>
            {[
              {
                name: 'Pedro Adao',
                role: 'Challenge Launch Expert',
                quote: 'I\'ve helped create over $100M in revenue using challenge funnels. This masterclass is the culmination of everything I\'ve learned.',
                tag: 'Video',
              },
              {
                name: 'Russell Brunson',
                role: 'Co-Founder, ClickFunnels',
                quote: 'Pedro\'s challenge framework is absolutely brilliant. He\'s cracked the code on turning cold audiences into raving buyers in just 5 days.',
                tag: 'Featured',
              },
            ].map((item, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialAvatar}>
                  <div className={styles.testimonialAvatarInner}>
                    {item.name.charAt(0)}
                  </div>
                </div>
                <div className={styles.testimonialTag}>{item.tag}</div>
                <blockquote className={styles.testimonialQuote}>"{item.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional proof */}
          <div className={styles.proofSection}>
            <h3 className={styles.proofTitle}>
              Your Chance To Achieve The Online Sales You've Always Wanted Is Right Here...
            </h3>
            <h2 className={`section-headline ${styles.proofHeadline}`}>
              <span className="accent-teal">Will</span> You Take It?
            </h2>
            <button
              onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-btn cta-btn--wide"
            >
              Join Challenge Secrets for FREE!
              <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ SOCIAL PROOF / WHAT FOLKS ARE SAYING ═══════════ */}
      <section className={styles.socialProof}>
        <div className={`${styles.socialProofInner} container`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            What Folks Are Saying About
          </span>
          <h2 className={`section-headline ${styles.socialProofHeadline}`}>
            Pedro's <span className="accent">Challenges!</span>
          </h2>

          <div className={styles.socialGrid}>
            {[
              { name: 'Sarah M.', text: 'I went from zero online presence to a $47K launch in 30 days using what I learned in the challenge. Mind-blowing.', stars: 5 },
              { name: 'Marcus T.', text: 'This completely changed how I think about selling. The challenge framework made it feel natural and fun — not pushy.', stars: 5 },
              { name: 'Jennifer K.', text: 'I was skeptical at first, but by Day 3 I had my entire challenge mapped out and by Day 5 I had my first 200 signups.', stars: 5 },
              { name: 'David L.', text: 'Pedro doesn\'t hold back. The amount of actionable value in this FREE masterclass is insane. Better than courses I\'ve paid $2K for.', stars: 5 },
              { name: 'Amanda R.', text: 'As a complete beginner, I was nervous. But the step-by-step approach made everything click. Launched my first challenge last month!', stars: 5 },
              { name: 'Chris P.', text: 'We added challenge funnels to our agency services after this masterclass. It\'s now our highest-revenue offer. Thank you Pedro!', stars: 5 },
            ].map((item, i) => (
              <div key={i} className={styles.socialCard}>
                <div className={styles.socialStars}>
                  {Array.from({ length: item.stars }, (_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className={styles.socialText}>"{item.text}"</p>
                <div className={styles.socialAuthor}>— {item.name}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-btn cta-btn--wide"
            >
              Join Challenge Secrets for FREE!
              <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ BEFORE / AFTER ═══════════ */}
      <section className={styles.beforeAfter}>
        <div className={`${styles.beforeAfterInner} container`}>
          <h2 className={`section-headline ${styles.beforeAfterHeadline}`}>
            What You Can Expect From The{' '}
            <span className="accent">'Challenge Secrets' Masterclass?</span>
          </h2>

          <div className={styles.beforeAfterGrid}>
            <div className={styles.beforeCol}>
              <div className={styles.beforeAfterLabel}>
                <span className={styles.labelBefore}>BEFORE The Challenge</span>
              </div>
              <ul className={styles.beforeList}>
                {[
                  'Confused about what funnel to build',
                  'Struggling to get leads and sales',
                  'Overwhelmed by all the marketing noise',
                  'No clear path to consistent revenue',
                  'Spending money on ads with no ROI',
                ].map((item, i) => (
                  <li key={i} className={styles.beforeItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E07A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.afterCol}>
              <div className={styles.beforeAfterLabel}>
                <span className={styles.labelAfter}>AFTER The Challenge</span>
              </div>
              <ul className={styles.afterList}>
                {[
                  'Crystal-clear challenge funnel mapped out',
                  'A proven system to attract ideal clients',
                  'Confidence to launch and sell authentically',
                  'A repeatable revenue engine for your business',
                  'A community of like-minded entrepreneurs',
                ].map((item, i) => (
                  <li key={i} className={styles.afterItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3DB8B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ EVERYTHING YOU GET ═══════════ */}
      <section className={styles.everything}>
        <div className={`${styles.everythingInner} container container--narrow`}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '16px' }}>
            Here's Everything You Get When You Sign Up For
          </span>
          <h2 className={`section-headline ${styles.everythingHeadline}`}>
            The <span className="accent">"Challenge Secrets Masterclass"</span> Today!
          </h2>

          <div className={styles.everythingStack}>
            {[
              { label: '5 Days of Expert Training', value: 'Priceless' },
              { label: 'Challenge Funnel Blueprint', value: '$497 Value' },
              { label: 'Fill-in-the-Blank Templates', value: '$297 Value' },
              { label: 'Private Community Access', value: '$197 Value' },
              { label: 'Live Q&A Sessions', value: '$997 Value' },
              { label: 'Bonus: Crush It With Challenges', value: '$497 Value' },
            ].map((item, i) => (
              <div key={i} className={styles.everythingRow}>
                <span className={styles.everythingLabel}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal-bright)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item.label}
                </span>
                <span className={styles.everythingValue}>{item.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.everythingTotal}>
            <div className={styles.totalLabel}>Total Value:</div>
            <div className={styles.totalStrike}>$2,485+</div>
            <div className={styles.totalPrice}>
              Today's Price: <span className={styles.totalFree}>100% FREE!</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className={styles.finalCta} id="final-form">
        <div className={styles.finalCtaBg}>
          <div className={`${styles.heroBgOrb} ${styles.orbCoral}`} />
          <div className={`${styles.heroBgOrb} ${styles.orbTeal}`} />
        </div>

        <div className={`${styles.finalCtaInner} container container--narrow`}>
          <h2 className={`section-headline ${styles.finalCtaHeadline}`}>
            Ready to Master <span className="accent">Challenge Funnels?</span>
          </h2>
          <p className={styles.finalCtaSub}>
            Join 127,000+ entrepreneurs who have transformed their businesses with challenge funnels.
            Your spot is waiting — claim it now.
          </p>

          <div className={styles.finalFormCard}>
            <form onSubmit={handleSubmit} className={styles.finalForm}>
              <div className={styles.finalFormRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your first name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your best email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="cta-btn cta-btn--wide" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Join the Challenge Secrets for FREE!'}
                {!isSubmitting && (
                  <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>
            <p className={styles.finalFormMicro}>
              🔒 Your information is 100% secure. We'll never share or sell your data.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className={styles.footer}>
        <div className={`${styles.footerInner} container`}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>Challenge Secrets Masterclass</div>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className={styles.footerDivider} />
          <p className={styles.footerDisclaimer}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site
            is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Bailey Vann Education. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

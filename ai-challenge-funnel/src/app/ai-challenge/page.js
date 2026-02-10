'use client';

import { useState } from 'react';
import styles from './registration.module.css';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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

  const scrollToForm = () => {
    document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const CtaButton = ({ text, onClick, type, gold }) => (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={type === 'submit' && isSubmitting}
      className={`${styles.ctaBtn} ${gold ? styles.ctaBtnGold : ''}`}
    >
      {type === 'submit' && isSubmitting ? 'Registering...' : text}
    </button>
  );

  const RegForm = ({ id }) => (
    <form onSubmit={handleSubmit} className={styles.regForm} id={id}>
      <input type="text" name="name" placeholder="Your First Name..." value={formData.name} onChange={handleChange} required className={styles.regInput} />
      <input type="email" name="email" placeholder="Your Best Email..." value={formData.email} onChange={handleChange} required className={styles.regInput} />
      <CtaButton text="Join The Challenge Secrets Masterclass For FREE!" type="submit" gold />
    </form>
  );

  return (
    <div className={styles.page}>

      {/* ═══ TOP BAR ═══ */}
      <div className={styles.topBar}>
        <span>🔥 Join The FREE Challenge — Limited Spots Available!</span>
        <button onClick={scrollToForm} className={styles.topBarBtn}>Register Now →</button>
      </div>

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* Hero group photo placeholder */}
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImage}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="0.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Hero Group Photo</span>
            </div>
          </div>

          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>Reveal The "Tried and True" Secrets to Win</p>
            <h1 className={styles.heroHeadline}>
              The <span className={styles.yellow}>ONE</span> Funnel Every Business Needs, <em>Even If You Suck At Marketing!</em>
            </h1>
            <p className={styles.heroSub}>
              Join Bailey and thousands of entrepreneurs in this completely FREE masterclass that has
              helped 100,000+ businesses launch profitable challenge funnels. Register now — it's 100% free.
            </p>
            <CtaButton text="Join The Challenge Secrets For FREE!" onClick={scrollToForm} gold />
            <p className={styles.heroMicro}>✓ 100% Free &nbsp;&nbsp; ✓ No Credit Card Required &nbsp;&nbsp; ✓ Instant Access</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: IS THIS FOR ME? ═══ */}
      <section className={styles.forMe}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Is The <span className={styles.yellow}>"Challenge Secrets"</span> For Me And My Business...??
          </h2>
          <div className={styles.forMeContent}>
            <div className={styles.forMeImage}>
              <div className={styles.imagePlaceholder}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>Photo Placeholder</span>
              </div>
            </div>
            <div className={styles.forMeText}>
              <p>Whether you're a coach, course creator, agency owner, e-commerce seller, or complete beginner — the Challenge Secrets Masterclass was built for YOU.</p>
              <ul className={styles.checkList}>
                <li><span className={styles.checkIcon}>✓</span> You want to launch a profitable online business but don't know where to start</li>
                <li><span className={styles.checkIcon}>✓</span> You've tried funnels before but couldn't get them to convert</li>
                <li><span className={styles.checkIcon}>✓</span> You want a proven, step-by-step system that actually works</li>
                <li><span className={styles.checkIcon}>✓</span> You're ready to stop guessing and start growing</li>
                <li><span className={styles.checkIcon}>✓</span> You want to build a real business — not just another side hustle</li>
              </ul>
              <p><strong>If you checked even ONE of these boxes</strong>, this FREE masterclass was made for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SIGN UP TODAY ═══ */}
      <section className={styles.signUp}>
        <div className={styles.sectionInnerNarrow}>
          <h2 className={styles.sectionTitleDark}>Sign Up <span className={styles.coral}>Today...</span></h2>
          <p className={styles.signUpSub}>
            I can't wait for you to see the secrets to creating, launching and profiting from Challenge
            Funnels! All it takes is your name and email and you'll get instant access.
          </p>
          <RegForm />
        </div>
      </section>

      {/* ═══ SECTION 4: ONCE IN A LIFETIME MASTERCLASS ═══ */}
      <section className={styles.masterclass}>
        <div className={styles.sectionInner}>
          <p className={styles.masterclassEyebrow}>Unlock The Potential That's Already Waiting for You In This</p>
          <h2 className={styles.sectionTitle}>Once-In-A-Lifetime <span className={styles.yellow}>Masterclass!</span></h2>

          <div className={styles.masterclassGrid}>
            {/* Images row */}
            <div className={styles.masterclassImages}>
              <div className={styles.masterclassImg}>
                <div className={styles.imagePlaceholderSmall}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Photo 1</span>
                </div>
              </div>
              <div className={styles.masterclassImg}>
                <div className={styles.imagePlaceholderSmall}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Photo 2</span>
                </div>
              </div>
              <div className={styles.masterclassImg}>
                <div className={styles.imagePlaceholderSmall}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>Photo 3</span>
                </div>
              </div>
            </div>

            <div className={styles.masterclassBody}>
              <p>From near bankruptcy to building a movement that has helped over <strong>100,000 entrepreneurs</strong> launch profitable businesses.</p>
              <p>Bailey has cracked the code on what it truly takes to build a profitable AI-powered business — and she's distilled it all into this <strong>completely FREE</strong> 5-Day Masterclass.</p>
              <blockquote className={styles.quote}>
                "I've helped people just like YOU start and scale businesses using <strong>Challenge Funnels</strong> — and now I want to show you exactly how."
              </blockquote>
              <p className={styles.credentials}>
                <strong>Bailey Vann</strong> — Featured entrepreneur, digital business strategist, and creator of the AI Design & Grow Experience.
              </p>
            </div>
          </div>

          <p className={styles.masterclassNote}>
            ⚡ Also attend and get access to the biggest <strong>bonus challenge training</strong> of the year at the end of the 5 days!
          </p>
        </div>
      </section>

      {/* ═══ SECTION 5: BLUE CTA BANNER ═══ */}
      <section className={styles.blueBanner}>
        <div className={styles.sectionInnerNarrow}>
          <p className={styles.blueBannerEyebrow}>Join Us For A Brand New Exclusive</p>
          <h2 className={styles.blueBannerTitle}>FREE Challenge Secrets Masterclass!</h2>
          <p className={styles.blueBannerSub}>Join now — it's 100% free. No credit card required. All you need is your name and email to claim your spot in the masterclass.</p>
          <CtaButton text="Join The Challenge Secrets Masterclass For FREE!" onClick={scrollToForm} gold />
        </div>
      </section>

      {/* ═══ SECTION 6: 5-DAY BREAKDOWN ═══ */}
      <section className={styles.days}>
        <div className={styles.sectionInner}>
          <p className={styles.daysEyebrow}>5-Day Masterclass Breakdown</p>
          <h2 className={styles.sectionTitleDark}>
            Here's What You Can Expect From <span className={styles.coral}>The 5-Day Challenge...</span>
          </h2>

          {[
            { day: 'DAY 1', title: 'What Is A "Challenge Funnel?"', desc: 'Discover why challenge funnels are the #1 funnel type for building authority, generating leads, and converting customers — even in crowded markets. You\'ll see real examples and understand the psychology behind why they work.' },
            { day: 'DAY 2', title: 'Irresistible Challenge Offers', desc: 'Learn how to craft an offer so compelling that people feel STUPID saying no. We\'ll break down the anatomy of irresistible challenge offers and show you how to position yours for maximum conversions.' },
            { day: 'DAY 3', title: 'Creating An Irresistible Challenge', desc: 'The step-by-step blueprint for designing your challenge content, structure, and delivery. You\'ll map out your entire challenge in this session — titles, daily themes, engagement hooks, and more.' },
            { day: 'DAY 4', title: 'Challenge Traffic Secrets!', desc: 'Where to find your ideal participants and how to fill your challenge — even with ZERO existing audience. Paid, organic, and partnership strategies all revealed.' },
            { day: 'DAY 5', title: 'The Secrets To Selling While Serving', desc: 'The ethical, high-converting framework for transitioning from free value to paid offer. Learn the exact close sequence that turns challenge participants into lifelong customers.' },
          ].map((item, i) => (
            <div key={i} className={styles.dayCard}>
              <div className={styles.dayCardLeft}>
                <div className={styles.imagePlaceholderDay}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>Video Thumbnail</span>
                </div>
              </div>
              <div className={styles.dayCardRight}>
                <span className={styles.dayLabel}>{item.day}</span>
                <h3 className={styles.dayTitle}>{item.title}</h3>
                <p className={styles.dayDesc}>{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Bonus */}
          <div className={styles.dayCard}>
            <div className={styles.dayCardLeft}>
              <div className={styles.imagePlaceholderDay}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="0.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>Video Thumbnail</span>
              </div>
            </div>
            <div className={styles.dayCardRight}>
              <span className={`${styles.dayLabel} ${styles.dayLabelBonus}`}>BONUS DAY</span>
              <h3 className={styles.dayTitle}>Crush It With Challenges</h3>
              <p className={styles.dayDesc}>
                An exclusive bonus session with advanced challenge strategies, Q&A, and live hot-seat
                coaching to help you launch YOUR challenge with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: URGENCY ═══ */}
      <section className={styles.urgency}>
        <div className={styles.sectionInnerNarrow}>
          <h2 className={styles.sectionTitleDark}>But Hurry! We're <span className={styles.coral}>Filling Up Fast...</span></h2>
          <p className={styles.urgencySub}>
            We cap registration to keep the experience intimate and high-impact. Once spots are gone,
            you'll have to wait for the next round. Don't let this one pass you by.
          </p>
          <CtaButton text="Join Challenge Secrets For FREE!" onClick={scrollToForm} gold />
        </div>
      </section>

      {/* ═══ SECTION 8: YOUR HOSTS ═══ */}
      <section className={styles.hosts}>
        <div className={styles.sectionInner}>
          <p className={styles.hostsEyebrow}>Your Hosts Serving This</p>
          <h2 className={styles.sectionTitle}>5-Day Challenge Secrets <span className={styles.yellow}>Masterclass!</span></h2>

          <div className={styles.hostsGrid}>
            {[
              { name: 'Bailey Vann', role: 'AI Business Strategist & Challenge Expert', bio: 'She\'s helped thousands of entrepreneurs build thriving digital businesses using AI-powered challenge funnels. Her mission: make online business accessible to everyone.', tag: 'Video' },
              { name: 'Guest Expert', role: 'Special Guest Presenter', bio: 'A renowned industry leader joining Bailey to share exclusive strategies, behind-the-scenes tactics, and the secrets that have generated millions in revenue.', tag: 'Featured' },
            ].map((item, i) => (
              <div key={i} className={styles.hostCard}>
                <div className={styles.hostAvatar}>
                  <div className={styles.hostAvatarInner}>{item.name.charAt(0)}</div>
                </div>
                <span className={styles.hostTag}>{item.tag}</span>
                <h3 className={styles.hostName}>{item.name}</h3>
                <p className={styles.hostRole}>{item.role}</p>
                <p className={styles.hostBio}>{item.bio}</p>
              </div>
            ))}
          </div>

          {/* Will You Take It? */}
          <div className={styles.willYou}>
            <p className={styles.willYouSub}>Your Chance To Achieve The Online Sales You've Always Wanted Is Right Here...</p>
            <h2 className={styles.sectionTitle}><span className={styles.yellow}>Will</span> You Take It?</h2>
            <CtaButton text="Join Challenge Secrets For FREE!" onClick={scrollToForm} gold />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: SOCIAL PROOF ═══ */}
      <section className={styles.socialProof}>
        <div className={styles.sectionInner}>
          <p className={styles.socialEyebrow}>What Folks Are Saying About</p>
          <h2 className={styles.sectionTitleDark}>Bailey's <span className={styles.coral}>Challenges!</span></h2>

          <div className={styles.socialGrid}>
            {[
              { name: 'Sarah M.', text: 'I went from zero online presence to a $47K launch in 30 days using what I learned in the challenge. Mind-blowing.' },
              { name: 'Marcus T.', text: 'This completely changed how I think about selling. The challenge framework made it feel natural and fun — not pushy.' },
              { name: 'Jennifer K.', text: 'I was skeptical at first, but by Day 3 I had my entire challenge mapped out. By Day 5 I had my first 200 signups.' },
              { name: 'David L.', text: 'The amount of actionable value in this FREE masterclass is insane. Better than courses I\'ve paid $2K for.' },
              { name: 'Amanda R.', text: 'As a complete beginner, I was nervous. But the step-by-step approach made everything click. Launched my first challenge last month!' },
              { name: 'Chris P.', text: 'We added challenge funnels to our agency services after this masterclass. It\'s now our highest-revenue offer.' },
            ].map((item, i) => (
              <div key={i} className={styles.socialCard}>
                <div className={styles.socialAvatar}>{item.name.charAt(0)}</div>
                <div className={styles.socialStars}>{'★★★★★'}</div>
                <p className={styles.socialText}>"{item.text}"</p>
                <p className={styles.socialName}>— {item.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.socialCta}>
            <CtaButton text="Join Challenge Secrets For FREE!" onClick={scrollToForm} gold />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: BEFORE / AFTER ═══ */}
      <section className={styles.beforeAfter}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            What You Can Expect From The <span className={styles.yellow}>'Challenge Secrets' Masterclass?</span>
          </h2>

          <div className={styles.baGrid}>
            <div className={styles.baCol}>
              <div className={styles.baHeader}>
                <span className={styles.baLabelRed}>❌ BEFORE The Challenge</span>
              </div>
              <ul className={styles.baList}>
                {['Confused about what funnel to build','Struggling to get leads and sales','Overwhelmed by all the marketing noise','No clear path to consistent revenue','Spending money on ads with no ROI'].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.baCol}>
              <div className={styles.baHeader}>
                <span className={styles.baLabelGreen}>✅ AFTER The Challenge</span>
              </div>
              <ul className={styles.baList}>
                {['Crystal-clear challenge funnel mapped out','A proven system to attract ideal clients','Confidence to launch and sell authentically','A repeatable revenue engine for your business','A community of like-minded entrepreneurs'].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11: EVERYTHING YOU GET / FINAL CTA ═══ */}
      <section className={styles.everything} id="final-form">
        <div className={styles.sectionInnerNarrow}>
          <p className={styles.everythingEyebrow}>Here's Everything You Get When You Sign Up For</p>
          <h2 className={styles.sectionTitleDark}>
            The <span className={styles.coral}>"Challenge Secrets Masterclass"</span> Today!
          </h2>

          <div className={styles.valueStack}>
            {[
              '5 Days of Expert Training',
              'Challenge Funnel Blueprint ($497 Value)',
              'Fill-in-the-Blank Templates ($297 Value)',
              'Private Community Access ($197 Value)',
              'Live Q&A Sessions ($997 Value)',
              'BONUS: Crush It With Challenges ($497 Value)',
            ].map((item, i) => (
              <div key={i} className={styles.valueRow}>
                <span className={styles.valueCheck}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.priceBlock}>
            <p className={styles.priceLabel}>Total Value: <span className={styles.priceStrike}>$2,485+</span></p>
            <p className={styles.priceFinal}>Today's Price: <span className={styles.priceFree}>100% FREE!</span></p>
          </div>

          <RegForm id="final-form-inputs" />

          <div className={styles.finalButtons}>
            <span className={styles.finalBtnLabel}>👇 YES — I Want In!</span>
            <span className={styles.finalBtnLabel}>🛒 BUY</span>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className={styles.footer}>
        <div className={styles.sectionInner}>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
          <p className={styles.footerDisclaimer}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site
            is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Bailey Vann Education. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

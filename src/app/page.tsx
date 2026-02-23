"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(`.${styles.animateHidden}`).forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoTop}>RG</div>
          <div className={styles.logoBottom}>SOCIAL MEDIA MANAGER</div>
        </div>
        <nav className={styles.nav}>
          <Link href="#about">אודות</Link>
          <Link href="#services">שירותים</Link>
          <Link href="#process">איך זה עובד</Link>
          <Link href="#results">תוצאות</Link>
          <Link href="https://wa.me/972587670637" className={styles.navContact}>צור קשר</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`${styles.heroContent} ${styles.animateHidden}`}>
            <h2 className={styles.subtitle}>ניהול סושיאל אסטרטגי</h2>
            <h1 className={styles.title}>אם אתם לא ברשת<br /><span>אתם לא קיימים</span></h1>
            <p className={styles.description}>
              ניהול סושיאל אסטרטגי שחוסך לכם זמן יקר, בונה מותג חזק ומביא לקוחות מדויקים לעסק שלכם, כל יום מחדש.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="https://wa.me/972587670637" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                בואו נדבר בוואטסאפ
              </Link>
            </div>

            <div className={styles.socials}>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          <div className={`${styles.heroVisuals} ${styles.animateHidden}`}>
            <div className={styles.portraitWrapper}>
              <div className={styles.greenShape}></div>
              <div className={styles.imagePlaceholder} style={{ position: 'absolute', overflow: 'hidden' }}>
                <Image src="/photos/roni1.jfif" alt="רוני גלעד בפוזה מחייכת" fill style={{ objectFit: 'cover' }} priority />
              </div>

              <div className={`${styles.floatingElement} ${styles.float1}`}>
                <div className={styles.puzzleWidget}>
                  <Image src="/icons/instagram.png" alt="Instagram" width={40} height={40} />
                </div>
              </div>
              <div className={`${styles.floatingElement} ${styles.float2}`}>
                <div className={styles.chatWidget}>
                  <Image src="/icons/tiktok.png" alt="TikTok" width={40} height={40} />
                </div>
              </div>
              <div className={`${styles.floatingElement} ${styles.float3}`}>
                <div className={styles.statsWidget}>
                  <Image src="/icons/facebook.png" alt="Facebook" width={40} height={40} />
                </div>
              </div>

              <svg className={styles.swoosh} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                {/* Thick black looping line */}
                <path d="M 150,200 C 300,50 650,0 750,250 C 850,550 450,850 150,750 C -150,650 0,300 250,150 C 500,0 800,200 700,500" fill="transparent" stroke="#1c1c1c" strokeWidth="5" strokeLinecap="round" />

                {/* 4-point Stars */}
                <path d="M 200,100 Q 210,120 230,130 Q 210,140 200,160 Q 190,140 170,130 Q 190,120 200,100 Z" fill="transparent" stroke="#1c1c1c" strokeWidth="3" strokeLinejoin="round" />
                <path d="M 700,200 Q 705,210 715,215 Q 705,220 700,230 Q 695,220 685,215 Q 695,210 700,200 Z" fill="transparent" stroke="#1c1c1c" strokeWidth="3" strokeLinejoin="round" />
                <path d="M 100,600 Q 105,610 115,615 Q 105,620 100,630 Q 95,620 85,615 Q 95,610 100,600 Z" fill="transparent" stroke="#1c1c1c" strokeWidth="3" strokeLinejoin="round" />
                <path d="M 650,700 Q 655,710 665,715 Q 655,720 650,730 Q 645,720 635,715 Q 645,710 650,700 Z" fill="transparent" stroke="#1c1c1c" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </section>

        {/* Why Professional Management Section */}
        <section id="services" className={styles.section}>
          <div className={`${styles.sectionHeader} ${styles.animateHidden}`}>
            <h2>למה העסק שלך צריך ניהול מקצועי?</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} ${styles.animateHidden}`}>
              <div className={styles.featureIcon}>⏳</div>
              <h3>חיסכון בזמן</h3>
              <p>במקום לשבור את הראש על מה להעלות מחר, אתם מתפנים לנהל את העסק שלכם בזמן שאני דואגת לנוכחות הדיגיטלית שלכם.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.animateHidden}`}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>דיוק קהל יעד</h3>
              <p>אנחנו לא יורים לכל הכיוונים. בעזרת אסטרטגיה מדויקת, התוכן מגיע בדיוק לאנשים שצריכים את השירות שלכם.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.animateHidden}`}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>תוצאות בשטח</h3>
              <p>לייקים זה נחמד, אבל מכירות זה יותר. המטרה שלנו היא להפוך עוקבים ללקוחות משלמים דרך משפך שיווקי חכם.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <div className={`${styles.aboutHeader} ${styles.animateHidden}`}>
            <h2 className={styles.bigTitle}>בואו נכיר קצת</h2>
            <p className={styles.bigSubtitle}>ניהול סושיאל | תוכן | נוכחות דיגיטלית</p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutContent} ${styles.animateHidden}`}>
              <h3>נעים להכיר! אני רוני</h3>
              <p className={styles.aboutParagraph}>רגע לפני שמתחילים אספר לכם קצת עליי כדי שתבינו מי אני :)</p>
              <p className={styles.aboutParagraph}>מאז ומתמיד אהבתי לצלם ולערוך והחלטתי לקחת את זה צעד קדימה.</p>
              <p className={styles.aboutParagraph}>השתחררתי מהצבא וישר התחלתי ללמוד ניהול סושיאל , כדי לעזור לבעלי עסקים לשווק את עצמם ברשתות החברתיות לבנות נוכחות לעסק שלהם.</p>
            </div>
            <div className={`${styles.aboutVisual} ${styles.animateHidden}`}>
              <div className={styles.imagePlaceholderAlt} style={{ position: 'relative', overflow: 'hidden' }}>
                <Image src="/photos/roni2.jfif" alt="תמונה של רוני גלעד" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className={`${styles.aboutPhilosophy} ${styles.animateHidden}`}>
            <h3 className={styles.highlightText}>כי היום, אם אתם לא ברשת אתם לא קיימים.</h3>
            <p className={styles.aboutParagraphCenter}>אני מאמינה שסרטון טוב הוא לא כזה שיש לו "הרבה לייקים", אלא כזה שיגרום לקהל היעד המדויק שלך לעצור ולהקשיב ולהבין שאת/ה הפתרון לבעיה שלו.<br />אני משלבת אסטרטגיה שיווקית כדי לבנות לך נוכחות דיגיטלית חזקה.</p>

            <div className={styles.aboutBottom}>
              <div className={styles.dividerFull}></div>
              <h3 className={styles.highlightText}>ניהול סושיאל הוא תהליך שלי ושלכם ביחד, שעוזר לכם להגיע למטרות שלכם!</h3>
              <h2>אז יאללה, מספיק דיבורים, שנתחיל?</h2>
              <div className={styles.arrowDown}>
                <svg width="40" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M5 15l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="process" className={styles.section}>
          <div className={`${styles.sectionHeader} ${styles.animateHidden}`}>
            <h2>אז איך זה עובד?</h2>
            <p>החבילה הזו תוכננה כדי לייצר לך שקט נפשי, תוך בניית מערכת תוכן שעובדת עבור העסק שלך 24/7.</p>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.processGridAlt}>
            {[
              { title: 'בניית אסטרטגיה ודיוק קהל היעד', desc: 'אנחנו לא יורים לכל הכיוונים. אני מנתחת מי הלקוח האידיאלי שלך, מה כואב לו ומה יגרום לו לבחור דווקא בך.', icon: '🎯' },
              { title: 'יצירת תוכן ממוקד קהל', desc: 'אני כותבת עבורך תסריטים שפונים ישירות לקהל היעד שנגדיר. כל תסריט נבנה כדי לייצר חיבור רגשי והנעה לפעולה.', icon: '✍️' },
              { title: 'יום צילום', desc: 'יום מרוכז שבו אנחנו הופכים את התסריטים הכתובים לסרטונים ויזואלים.', icon: '🎥' },
              { title: 'עריכות והעלאות', desc: 'אני יוצרת מכל חומרי הגלם שצילמנו 8 סרטונים, עם עריכה מעניינת שעוצרת גלילה, ומעלה אותם לרשתות שלך - אינסטגרם, פייסבוק וטיקטוק ובונה לך נוכחות דיגיטלית למשך כל החודש!', icon: '✂️' },
              { title: 'ניתוח נתונים ומעבר לחודש הבא', desc: 'העבודה שלי לא נגמרת לאחר שאני מעלה את הסרטונים. במשך כל החודש אני עושה מעקב אחר הסרטונים ברשתות ובודקת - מה משך את הקהל? מאיפה נכנסו יותר פניות? אני בונה דו"ח חודשי שמראה לכם את הנתונים, ועולים לשיחת אסטרטגיה לחודש הבא!', icon: '📊' },
              { title: 'מתנות', desc: 'אתם מקבלים ממני הדרכת סטורי אישית שיעזור לכם לשמר את הקהל שהגיע מהחשיפה של הסרטונים ולהפוך אותם לקהילה נאמנה דרך הסטורי היומיומי. ודיוק הביו והשם שלכם ברשתות שיעזור להקפיץ אותכם בחיפוש.', icon: '🎁' },
            ].map((step, idx) => (
              <div key={idx} className={`${styles.processStepAlt} ${styles.animateHidden}`}>
                <div className={styles.stepContentAlt}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className={styles.stepIconAlt}>{step.icon}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className={`${styles.section} ${styles.resultsSection}`}>
          <div className={`${styles.sectionHeader} ${styles.animateHidden}`}>
            <h2>תוצאות מהשטח</h2>
            <p>הצצה להצלחות האחרונות של הלקוחות שלי ברשתות החברתיות</p>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.resultsGrid}>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>עלייה של 300% בחשיפה</h3>
              <p>שימוש באסטרטגיית רילס ויראלית הביא למותג קוסמטיקה חשיפה של מאות אלפי צופים רלוונטיים תוך חודש אחד בלבד.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>מיתוג מחדש שהביא לקוחות</h3>
              <p>בניית שפה ויזואלית אחידה ויוקרתית למעצבת פנים, שהפכה את הפיד לחלון ראווה שמוכר פרויקטים בשווי מאות אלפי שקלים.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>קהילה של 10K עוקבים נאמנים</h3>
              <p>ניהול שוטף ומעורבות גבוהה בסטוריז יצרו קהילת עוקבים חמה עבור עסק בתחום הייעוץ העסקי, עם אחוזי המרה גבוהים במיוחד.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>זינוק באינטראקציה ובתגובות</h3>
              <p>כתיבת קופי אישי ומניע לפעולה שהעלה את כמות התגובות בפוסטים ב-150%, ויצר שיח אמיתי מול הלקוחות הפוטנציאליים.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>מפיד מבולגן למותג מנצח</h3>
              <p>תהליך "לפני ואחרי" שכלל מחיקת תכנים לא רלוונטיים ויצירת קו עיצובי נקי שמשדר אמינות ומקצועיות ללקוחות קצה.</p>
            </div>
            <div className={`${styles.resultCard} ${styles.animateHidden}`}>
              <h3>ירידה של 40% בעלות ליד</h3>
              <p>אופטימיזציה של מודעות ממומנות בשילוב תוכן אורגני איכותי, שהובילה להוזלה משמעותית בעלויות הפרסום של העסק.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
          <div className={`${styles.pricingContainer} ${styles.animateHidden}`}>
            <h2>חבילת ניהול חודשית במחיר התחלתי</h2>
            <div className={styles.priceTag}>
              <span className={styles.pricePrefix}>החל מ-</span>
              <span className={styles.priceAmount}>3,200</span>
              <span className={styles.priceCurrency}>ש״ח לחודש</span>
            </div>
            <p>ההשקעה העסקית שמחזירה את עצמה בחשיפה ולקוחות.</p>
            <div className={styles.ctaGroupLargePricing}>
              <Link href="https://wa.me/972587670637" target="_blank" rel="noopener noreferrer" className={styles.whatsappButtonLg}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                לשיחת ייעוץ והתאמה
              </Link>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className={`${styles.ctaSection} ${styles.animateHidden}`}>
          <h2>מוכנים לעשות רעש? 📣</h2>
          <p>השאירו הודעה ואחזור אליכם לשיחת ייעוץ קצרה (ולא מחייבת) לבדיקת התאמה.</p>
          <div className={styles.ctaGroupLarge}>
            <Link href="https://wa.me/972587670637" target="_blank" rel="noopener noreferrer" className={styles.whatsappButtonLg}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              שלחו לי הודעה בוואטסאפ
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

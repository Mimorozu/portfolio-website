"use client";

import { useEffect, useRef, useState } from "react";
import { TbArrowUpRight, TbBrandWhatsapp, TbMail } from "react-icons/tb";
import styles from "./contact.module.css";

const EMAIL = "mimorozu@gmail.com";
const PHONE_DISPLAY = "+44 7389 185503";
const WHATSAPP_NUMBER = "447389185503";

const channels = [
  {
    icon: TbMail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: TbBrandWhatsapp,
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
];

export function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    let timeoutId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => setTitleVisible(true), 50);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.section}>
      <div ref={titleRef} className={styles.title}>
        <span className={styles.label}>Contact</span>
        <div className={styles.headingGroup}>
          <h2 className={`${styles.heading} ${titleVisible ? styles.titleVisible : ""}`}>
            Let&apos;s Talk
          </h2>
          <p className={`${styles.subtitle} ${titleVisible ? styles.titleVisible : ""}`}>
            Fastest way to reach me is below.
          </p>
        </div>
      </div>

      <Panel />
    </div>
  );
}

// Same fade/rise/blur reveal used across the site's sections.
function Panel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.panel} ${visible ? styles.panelVisible : ""}`}>
      <div className={styles.channels}>
        {channels.map(({ icon: Icon, label, value, href }, i) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.channelRow}
            style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
          >
            <span className={styles.channelIcon}>
              <Icon aria-hidden />
            </span>
            <span className={styles.channelText}>
              <span className={styles.channelLabel}>{label}</span>
              <span className={styles.channelValue}>{value}</span>
            </span>
            <TbArrowUpRight className={styles.channelArrow} aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}

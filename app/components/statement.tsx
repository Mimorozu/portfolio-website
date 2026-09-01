"use client";

import { Fragment } from "react";
import { useScrollReveal } from "./use-scroll-reveal";
import styles from "./statement.module.css";

const LEAD =
  "The businesses growing fastest today aren't working harder—they're working smarter with technology.";
const SUPPORT =
  "I build custom software that automates repetitive tasks, streamlines operations, and helps businesses scale more efficiently.";

// Two-sentence statement whose words sharpen into focus as the section scrolls through the
// viewport — scrubbed continuously by scroll position (lead words resolve before support
// words start, purely from reading order) rather than triggered once as a block.
export function Statement() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.text_wrapper}>
        <p className={styles.lead}>
          <Words text={LEAD} />
        </p>
        <p className={styles.support}>
          <Words text={SUPPORT} />
        </p>
        <a
          href="https://wa.me/447389185503?text=Hi%20Ethan.%20I%20need..."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          data-word
        >
          <svg
            className={styles.whatsappIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.05 22h-.005a9.97 9.97 0 0 1-4.976-1.336L2 22l1.362-4.986A9.945 9.945 0 0 1 2.05 12.05C2.045 6.505 6.55 2 12.099 2c2.688.001 5.212 1.05 7.113 2.951A9.995 9.995 0 0 1 22.15 12.1c-.003 5.545-4.507 10.05-10.05 10.05zm0-18.267c-4.55 0-8.25 3.7-8.253 8.25a8.213 8.213 0 0 0 1.24 4.34l-.867 3.166 3.242-.85a8.229 8.229 0 0 0 4.632 1.42h.004c4.549 0 8.25-3.7 8.253-8.25a8.196 8.196 0 0 0-2.417-5.836 8.198 8.198 0 0 0-5.834-2.24z" />
          </svg>
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}

function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className={styles.word} data-word>
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}

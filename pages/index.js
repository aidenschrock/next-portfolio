import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function Home() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div>
      <Head>
        <title>Aiden Schrock</title>
        <meta name="description" content="Aiden Schrock: software & design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Aiden Schrock</h1>
            <p>
              <b>Present:</b> Sales Engineer at Vercel
              <br />
              <b>Past:</b> Software Developer/Designer at Recolude
              <br />
              <b>Future:</b> open to design positions
            </p>
          </div>
          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/aidenschrock"
                >
                  <svg
                    className={styles.socialIcon}
                    role="img"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 97.53"
                  >
                    <title>GitHub Logo</title>
                    <defs />
                    <path d="M50,0C22.39,0,0,22.38,0,50c0,22.09,14.33,40.83,34.19,47.44,2.5,.46,3.42-1.09,3.42-2.41,0-1.19-.05-5.13-.07-9.31-13.91,3.02-16.85-5.9-16.85-5.9-2.27-5.78-5.55-7.32-5.55-7.32-4.54-3.1,.34-3.04,.34-3.04,5.02,.35,7.66,5.15,7.66,5.15,4.46,7.64,11.7,5.43,14.55,4.16,.45-3.23,1.74-5.44,3.17-6.69-11.11-1.26-22.78-5.55-22.78-24.71,0-5.46,1.95-9.92,5.15-13.42-.52-1.26-2.23-6.34,.48-13.23,0,0,4.2-1.34,13.75,5.13,3.99-1.11,8.27-1.66,12.52-1.68,4.25,.02,8.53,.57,12.53,1.68,9.54-6.47,13.74-5.13,13.74-5.13,2.72,6.89,1.01,11.97,.49,13.23,3.21,3.5,5.15,7.96,5.15,13.42,0,19.2-11.7,23.43-22.83,24.67,1.79,1.55,3.39,4.59,3.39,9.26,0,6.69-.06,12.07-.06,13.72,0,1.33,.9,2.89,3.43,2.4,19.86-6.62,34.16-25.35,34.16-47.44C100,22.38,77.61,0,50,0Z" />
                    <path d="M18.94,71.79c-.11,.25-.5,.32-.86,.15-.36-.16-.57-.5-.45-.75,.11-.26,.5-.33,.86-.16,.36,.16,.57,.51,.44,.75h0Zm-.62-.46" />
                    <path d="M20.96,74.05c-.24,.22-.71,.12-1.02-.23-.33-.35-.39-.82-.15-1.04,.25-.22,.7-.12,1.03,.23,.33,.35,.39,.82,.14,1.04h0Zm-.48-.51" />
                    <path d="M22.93,76.93c-.31,.21-.81,.01-1.12-.43-.31-.44-.31-.98,0-1.19,.31-.21,.8-.02,1.12,.42,.31,.45,.31,.99,0,1.2h0Zm0,0" />
                    <path d="M25.64,79.71c-.27,.3-.86,.22-1.28-.19-.44-.4-.56-.98-.28-1.28,.28-.3,.87-.22,1.3,.19,.43,.4,.57,.98,.27,1.28h0Zm0,0" />
                    <path d="M29.36,81.33c-.12,.39-.68,.57-1.25,.4-.57-.17-.94-.63-.82-1.03,.12-.39,.68-.58,1.25-.4,.57,.17,.94,.63,.82,1.02h0Zm0,0" />
                    <path d="M33.45,81.62c.01,.41-.47,.75-1.06,.76-.6,.01-1.08-.32-1.09-.73,0-.42,.47-.75,1.07-.76,.59-.01,1.08,.32,1.08,.73h0Zm0,0" />
                    <path d="M37.26,80.98c.07,.4-.34,.82-.93,.93-.58,.11-1.12-.14-1.19-.54-.07-.41,.35-.83,.93-.93,.59-.1,1.12,.14,1.2,.55h0Zm0,0" />
                  </svg>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aiden-schrock/"
                >
                  <svg
                    className={styles.socialIcon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/AidenNSchrock"
                >
                  <svg
                    className={styles.socialIcon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 248 204"
                  >
                    <path
                      id="white_background"
                      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Link href="/balena">
              <AnimatePresence>
                <motion.div
                  className={styles.card}
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <Image
                    src="/balena.png"
                    alt="Balena Cloud logo"
                    width={80}
                    height={100}
                  />
                  <h4>Balena Extension</h4>
                  <p>Manage your IoT devices from VS Code</p>
                </motion.div>
              </AnimatePresence>
            </Link>
            <Link href="/recolude">
              <motion.div
                className={styles.card}
                whileHover={{ scale: 1.1, translateY: -20 }}
              >
                <Image
                  src="/recolude.png"
                  alt="Recolude logo"
                  width={80}
                  height={100}
                />
                <h4>Recolude</h4>
                <p>XR Analytics & Recordings</p>
              </motion.div>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@aidenschrock/allrecipes-ux-design-study-redesigning-the-most-popular-cooking-site-e04c73ed58a1"
            >
              <motion.div
                className={styles.card}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Image
                  src="/article.png"
                  alt="Article icon"
                  width={80}
                  height={100}
                />
                <h4>Medium Article</h4>
                <p>Allrecipes Product Redesign</p>
              </motion.div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

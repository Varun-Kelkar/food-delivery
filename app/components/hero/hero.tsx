"use client";

import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Delicious food, delivered to your door</h1>
        <p>
          Browse local restaurants, order your favorites, and enjoy fast home
          delivery.
        </p>
        <button className={styles.cta}>Explore Restaurants</button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/hero-food.jpg"
          alt="Food delivery"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

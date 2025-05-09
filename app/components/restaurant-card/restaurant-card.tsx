import Image from "next/image";
import styles from "./restaurant-card.module.scss";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  image: string;
}

export default function RestaurantCard({
  name,
  cuisine,
  rating,
  image,
}: RestaurantCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <span>⭐ {rating.toFixed(1)}</span>
      </div>
    </div>
  );
}

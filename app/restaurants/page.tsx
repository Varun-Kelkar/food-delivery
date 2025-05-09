import RestaurantCard from "../components/restaurant-card/restaurant-card";
import restaurants from "../mock-data/restaurants";
import styles from "./page.module.scss";
export default function RestaurantsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageHeader}>
        <h1>Restaurants</h1>
        <p>Explore our curated list of restaurants.</p>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {restaurants.map((r, index) => (
            <RestaurantCard key={index} {...r} />
          ))}
        </div>
      </section>
    </main>
  );
}

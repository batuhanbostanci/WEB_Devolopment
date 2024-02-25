import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, loading } = useCities();
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      ></Message>
    );

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city}></CityItem>
      ))}
    </ul>
  );
}

export default CityList;

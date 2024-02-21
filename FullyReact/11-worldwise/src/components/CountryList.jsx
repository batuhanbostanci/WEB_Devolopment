import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountriesList({ cities, loading }) {
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      ></Message>
    );

  const countries = cities.reduce((array, city) => {
    if (!array.map((el) => el.country).includes(city.country)) {
      return [
        ...array,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else {
      return array;
    }
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country}></CountryItem>
      ))}
    </ul>
  );
}

export default CountriesList;

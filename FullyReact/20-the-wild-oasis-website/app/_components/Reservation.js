import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  //Instead of making upper part, below part is better becasue upper ones will be created a waterfall effect. In that time user has to be wait while all the components are being created.
  //In the below part, all the components are created at the same time. So, the porcess is going to be parallel. But still, the process is going to be slow
  //For this reason there is a better way to do that. Which is creating their on components and making fetch request in their own components.
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;

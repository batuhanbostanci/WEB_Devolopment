import { getBooking, getCabin } from "@/app/_lib/data-service";
import { updateBooking } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SumbitButton";

export default async function Page({ params }) {
  const { bookingId } = params;

  const { numGuests, observations, cabinId } = await getBooking(bookingId);

  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2">
          <label>How many guests?</label>
          <select
            className="px-5 py-3 bg-primary-200 w-full shadow-sm rounded-sm"
            name="numGuests"
            defaultValue={numGuests}
            id="numGuests"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>

            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <labe htmlFor="observations">
            Anything we should know about your stay?
          </labe>

          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-800 w-full shadow-sm rounded-sm"
          ></textarea>
        </div>
        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update Reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

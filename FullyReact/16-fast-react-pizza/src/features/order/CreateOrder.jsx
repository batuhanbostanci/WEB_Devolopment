import { useState } from 'react';
import {
  Form,
  redirect,
  useActionData,
  useFetcher,
  useNavigation,
} from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { fetchAdress } from '../user/userSlice';
// https://uibakery.io/regex-library/phone-number

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const isLoadingAddress = addressStatus === 'loading';

  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart></EmptyCart>;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* Thoose are the 2 ways of making actions. React undertand staht closes action for this reason is up to you to use or not */}
      {/*<Form method="POST" action="/order/new"></Form> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          {/*Ussing this class name input should be the exception because making everything in the index.css will be the oldway of doing that for the learning path input would implement here!*/}
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-full bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className=" grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          <span className="absolute right-0 z-50">
            <Button
              disabled={isLoadingAddress}
              type="primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAdress());
              }}
            >
              Get Position
            </Button>
          </span>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 duration-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 "
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />

          <Button type="primary">
            {isSubmitting || isLoadingAddress
              ? 'Placing order....'
              : `Order now from ${formatCurrency(totalPrice)}€`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData.entries());

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = 'Invalid phone number';

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder(order);

  //Normally we use useDispatch but this is used only in components for this reason we use store in the function directly import the store.js file
  // Do not overuse this techinque because it's not a good practice and it will be cause some optimization problems with redux
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

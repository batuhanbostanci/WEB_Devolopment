import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
// https://uibakery.io/regex-library/phone-number

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = (navigation.state = 'submitting');

  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>
      {/* Thoose are the 2 ways of making actions. React undertand staht closes action for this reason is up to you to use or not */}
      {/*<Form method="POST" action="/order/new"></Form> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          {/*Ussing this class name input should be the exception because making everything in the index.css will be the oldway of doing that for the learning path input would implement here!*/}
          <input type="text" name="customer" required className="input grow" />
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

        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 duration-300  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 "
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {isSubmitting ? 'Packing order....' : 'Order now'}
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
    priority: data.priority === 'on',
  };

  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = 'Invalid phone number';

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // const newOrder = await createOrder(order);
  // return redirect(`/order/${newOrder.id}`);

  return null;
}

export default CreateOrder;

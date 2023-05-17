import React, { useState } from 'react';
import "./OrderNow"

const OrderCard = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit the order
    console.log('Order submitted:', {
      name,
      address,
      phone,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv
    });
    // Reset form fields
    setName('');
    setAddress('');
    setPhone('');
    setPaymentMethod('');
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
  };

  return (
    <div className='OrderNow'>
      <h1 className='order-tag'>Delivery Order</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='saurabh'>
          Name:
          <input
            type="text"
            value={name}
            id="" cols={30} rows={10}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
          />
        </label>
        <label className='saurabh'>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            textarea name="message" id="" cols={100} rows={100} placeholder="type here..."
          />
        </label>
        <label className='saurabh'>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="phone "
          />
        </label >
        <label className='saurabh'>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
          </select>
        </label>
        {paymentMethod && (
          <div>
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                placeholder="Card number"
              />
            </label>
            <label  className='saurabh'>
              Expiry Date:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="expiry date"
              />
            </label>
            <label  className='saurabh'>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                required
                placeholder=" CVV"
              />
            </label>
          </div>
        )}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderCard;

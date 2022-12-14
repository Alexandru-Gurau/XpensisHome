import CartItemMonthly from '../cart-item-monthly/cart-item-monthly.component';
import CartMonthlyTotal from '../cart-monthly-total/cart-monthly-total.component';

const CartItemMonthlyIncome = ({ salary, others, currency, totalIncome }) => (
  <CartItemMonthly>
    <div className='cart-item-monthly__box'>
      <h3 className='header h-large header-cart bk-green'>Monthly income</h3>
      <div className='cart-item-monthly__container'>
        <p className='p-cart-item'>Salary</p>
        <p className='p-cart-item'>+{salary}</p>
      </div>
      <div className='cart-item-monthly__container'>
        <p className='p-cart-item'>Others</p>
        <p className='p-cart-item'>+{others}</p>
      </div>
    </div>
    <CartMonthlyTotal
      total={totalIncome}
      symbol={'+'}
      currency={currency}
      type='income'
    />
  </CartItemMonthly>
);

export default CartItemMonthlyIncome;

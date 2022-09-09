import './overview.styles.scss';

import Bar from '../../components/bar/bar.component';
import CartItem from '../../components/cartItem/cart-item.component';
import CartItemContainer from '../../components/cartItem-container/cart-item-container.component';
import CartItemMonth from '../../components/cartItem-month/cart-item-month.component';
import CartItemBar from '../../components/cartItem-bar/cart-item-bar.component';
import CartItemBalance from '../../components/cartItem-balance/cart-item-balance.component';

import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const Overview = () => {
  const { accountDetails, setYear, currentYear } = useContext(UserContext);

  if (!accountDetails()) {
    setYear(currentYear);
    return;
  }

  const { salary, otherIncome, totalBills, outherOutcome } = accountDetails();

  return (
    <div className='body-container overview'>
      <Bar header='Overview' />

      <div className='body-box'>
        <CartItem
          title='Account details'
          month={<CartItemMonth />}
          balance={<CartItemBalance totalBalance='22.500,00' currency='RON' />}
          children={
            <CartItemContainer
              salary={salary.toFixed(2)}
              otherIncome={otherIncome.toFixed(2)}
              bills={totalBills.toFixed(2)}
              otherOutcome={outherOutcome.toFixed(2)}
              currency='RON'
            />
          }
          bar={<CartItemBar />}
        />
        <CartItem />
      </div>
    </div>
  );
};

export default Overview;

/**
 * make numbers to show comma and period
 */

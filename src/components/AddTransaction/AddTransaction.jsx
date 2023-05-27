import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  FormStyled,
  WrapStyled,
  BtnStyled,
  DatePickerStyled,
  CalendarBox,
  InputStyled,
} from './AddTransaction.styled';
import { selectionExpenses, selectionIncome } from 'shared/category';
import { getFilterDate } from 'redux/transaction/transactionSlice';
import { objectStyle } from './AddTransactionStyle';
import { NumericFormat } from 'react-number-format';

const AddTransaction = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const expenses = params.expenses;

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const selectInputRef = useRef();

  const [startDate, setStartDate] = useState(new Date());
  const curDate = startDate.toISOString().split('T')[0];

  const [form, setForm] = useState({
    date: '',
    amount: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    expenses !== 'income'
      ? setOptions(selectionExpenses)
      : setOptions(selectionIncome);
  }, [expenses]);

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'amount') value = Number(value);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form', form, curDate);
    expenses !== 'income'
      ? dispatch(addTransactionExpense(form))
      : dispatch(addTransactionIncome(form));
    setForm('');
  };

  const handleClickReset = () => {
    setForm(prev => ({ ...prev, amount: '', category: '' }));
    setSelected([]);
  };

  useEffect(() => {
    setForm(prev => ({ ...prev, date: curDate }));
    console.log('add', curDate);
    dispatch(getFilterDate(curDate));
  }, [curDate, dispatch]);

  console.log('form', form);

  return (
    <WrapStyled>
      <CalendarBox>
        <CalendarMonthIcon color="success" />
        <DatePickerStyled
          selected={startDate}
          onChange={date => setStartDate(date)}
          maxDate={new Date()}
          name="date"
        />
      </CalendarBox>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="description"
          placeholder="Product description"
          onChange={handleChange}
        />
        <Select
          options={options}
          placeholder="Product category"
          value={selected}
          styles={objectStyle}
          name="category"
          onChange={data =>
            setForm(prev => ({ ...form, category: data.trans }))
          }
        />
        <NumericFormat
          // defaultValue="1"
          placeholder="0.00 UAH"
          value={form.amount}
          allowEmptyFormatting={false}
          allowNegative={false}
          decimalScale={2}
          allowedDecimalSeparators={['.']}
          allowLeadingZeros={false}
          thousandSeparator=" "
          suffix=" UAH"
          displayType="input"
          onValueChange={({ floatValue }, sourceInfo) => {
            setForm(prev => ({ ...prev, amount: floatValue }));
          }}
        />
        <BtnStyled type="submit">Input</BtnStyled>
        <BtnStyled type="reset" onClick={handleClickReset}>
          Clear
        </BtnStyled>
      </FormStyled>
    </WrapStyled>
  );
};

export default AddTransaction;

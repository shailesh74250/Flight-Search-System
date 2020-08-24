import React, { useState, useContext } from 'react';
import CurrencyContext from '../../globalStorage/context';
import Label from '../../components/Label';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Date from '../../components/Date';

function ShowCurrency() {
  const [city, setCity] = useState('');
  const { state, dispatch } = useContext(CurrencyContext);
  const cities = Object.keys(state.flights);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="select">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Label value="Source" />
            <Select options={cities} name="city" setCity={setCity} />
          </div>
          <div className="form-group">
            <Label value="Destination" />
            <Select options={cities} name="city" setCity={setCity} />
          </div>
          <div className="form-group">
            <Label value="From" />
            <Date />
          </div>
          <div className="form-group">
            <Label value="To" />
            <Date />
          </div>
          <div className="form-group">
            <Label value="Passenger" />
            <Select
              options={state.passenger}
              name="passenger"
              setCity={setCity}
            />
          </div>
          <Button type="submit" label="Search" />
        </form>
      </section>
    </>
  );
}

export default ShowCurrency;

import DetailsContainer from './DetailsContainer';

function Country() {
  return (
    <DetailsContainer name="Ukraine">
      <div className="box">
        <h4>Country name</h4>
        <p>
          <img src="https://flagcdn.com/w320/ua.png" alt="flag" />
          <span>Ukraine</span>
        </p>
      </div>

      <div className="flex">
        <div className="box half">
          <h4>Capital</h4>
          <span>Kyiv</span>
        </div>
        <div className="box half">
          <h4>Region</h4>
          <span>Europe</span>
        </div>
      </div>
      <div className="box">
        <h4>Borders with</h4>
        <span>Poland, Slovakia</span>
      </div>
      <div className="box">
        <h4>Visited cities</h4>
        <span>Lviv, Dnipro, Kyiv</span>
      </div>
    </DetailsContainer>
  );
}

export default Country;

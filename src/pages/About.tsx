import styled from 'styled-components';

const AboutPage = styled.section`
  flex-grow: 1;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  & div {
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: end;

    h2 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    p {
      text-align: end;
      margin-bottom: 1rem;
    }
  }

  & img {
    width: 50rem;
    border-radius: 1rem;
  }
`;

function About() {
  return (
    <AboutPage>
      <div>
        <h2>About WorldWide.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          ratione veniam officia illo exercitationem. Nulla impedit provident et
          rerum ullam similique hic minima ducimus exercitationem, voluptatum
          ipsum non itaque dolore?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum totam
          quo, similique, error repudiandae modi dicta veniam eos sint laborum
          quibusdam aperiam. Eos, iusto?
        </p>
      </div>
      <img src="./map.jpg" alt="Map image" />
    </AboutPage>
  );
}

export default About;

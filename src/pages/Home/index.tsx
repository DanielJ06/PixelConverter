import React, {useState} from 'react';

import adjustments from '../../assets/adjustments.svg'

import { 
  Container, 
  Content, 
  ConvertArea,
  Result,
} from './styles';

const Home: React.FC = () => {
  const [rem, setRem] = useState<Number>(0);

  function calcRem(e: React.ChangeEvent<HTMLInputElement>) {
    const result = parseFloat(e.target.value) / 16;
    setRem(result);
  }

  return (
    <Container>
      <Content>
        <section>
          <h1>Pixel2Rem</h1>
          <p>Convert pixels to rem</p>
          <img src={adjustments} alt="adjustments"/>
        </section>
        <ConvertArea>
          <h3>Pixel value:</h3>
          <input onChange={calcRem} type="number"/>
            <Result>
              <h1>{rem} rem</h1>
            </Result>
        </ConvertArea>
      </Content>
      <a href="https://github.com/DanielJ06">{`© ${new Date().getFullYear()}, 💻 with ❤ by Daniel de Jesus`}</a>
    </Container>
  );
}

export default Home;
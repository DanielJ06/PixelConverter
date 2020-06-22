import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    margin-top: 12px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  > section img {
    width: 350px;
    height: 350px;
  }

  > section h1 {
    font-weight: bold;
    color: #35495e;
    text-align: center;
  }
  
  > section p {
    color: #35495e;
    text-align: center;
    margin-top: 10px;
  }
`;

export const ConvertArea = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    width: 100%;
    height: 60px;
    padding: 0 24px;

    color: #333;
    text-align: center;
    font-size: 18px;

    border: 1px solid #dcdce6;
    border-radius: 8px;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 21px;
  padding: 12px;
  
  cursor: pointer;
  background-color: #6C63FF;
  border-radius: 8px;
  transition: background-color .2s;
  
  :hover {
    background-color: #7f78d2;
  }

  h1 {
    font-weight: bold;
    color: #fff;
  }
`;
import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  padding: 50px 30px;

  width: 50%;
  color: white;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.32),
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);

  :nth-of-type(1) {
    margin-bottom: 50px;
  }

  :nth-of-type(2) {
    height: 420px;
  }
`;

export const SectionTitle = styled.p`
  font-size: 50px;
  margin: 0;
`;

import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const AmbientListContainer = styled.div`
  margin-top: 20px;
`;

export const AmbientCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AmbientName = styled.h2`
  font-size: 18px;
  color: #555;
  margin: 0;
`;

export const AmbientDetail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
`;
import styled from 'styled-components';

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: darkred;
  }
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;


export const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AdminTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const AdminSection = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #4caf50;
`;

export const CreateAmbient = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 20px;
`;

export const AmbientInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;
`;
export const AmbientInputImage = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 350px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;
`;

export const CreateButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const AmbientList = styled.div`
  margin-top: 20px;

  ul {
    list-style-type: none;
  }

  li {
    background-color: #f1f1f1;
    padding: 8px;
    border-radius: 4px;
    margin: 5px 0;
  }
`;

export const ReportsInfo = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

export const ReportsButton = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e88e5;
  }
`;

export const UpdateButton = styled.button`
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fb8c00;
  }
`;

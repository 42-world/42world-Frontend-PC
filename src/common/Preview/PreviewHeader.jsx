import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';

const PreviewHeader = ({ categoryName, onClick, path }) => {
  return (
    <StyledPreviewHeader onClick={() => onClick(path)}>
      <StyledCategoryName>
        <IoMdThumbsUp />
        <div>{categoryName}</div>
      </StyledCategoryName>
      <StyledMoreText>더보기{'>'}</StyledMoreText>
    </StyledPreviewHeader>
  );
};

const StyledPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 12.5px 10px 35px 10px;
  border-bottom: 1px solid ${props => props.theme.buttonGray2};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.buttonGray2};
    border-radius: 10px 10px 0 0;
  }
`;

const StyledCategoryName = styled.div`
  display: flex;
  justify-content: space-around;
  width: 8rem;
  height: 40px;
`;

const StyledMoreText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export default PreviewHeader;

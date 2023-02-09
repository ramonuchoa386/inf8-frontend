import styled, { css } from 'styled-components';
import {
  BiDownload,
  BiUpload,
  BiBlock,
  BiFilterAlt,
  BiCopy,
  BiLike,
} from 'react-icons/bi';
import {
  Button,
  Toaster as ToasterAtom,
  Input,
} from '../../../components/atoms';
import { styledButton } from '../../../components/atoms/button/style';
import { Table, Paginacao } from '../../../components/molecules';
import {
  ContentWrapper,
  SendFileFormModal,
} from '../../../components/templates';

export const FileForm = styled(SendFileFormModal)``;
export const SearchInput = styled(Input)``;
export const ReportTable = styled(Table)``;
export const PageControl = styled(Paginacao)``;
export const Toaster = styled(ToasterAtom)``;
export const PageWrapper = styled(ContentWrapper)``;
export const ToggleFilters = styled(styledButton)``;
export const DownloadBtn = styled(styledButton)``;
export const OpenFormBtn = styled(Button)``;
export const DownloadIcon = styled(BiDownload)``;
export const UploadIcon = styled(BiUpload)``;
export const BlockIcon = styled(BiBlock)``;
export const ThumbsUpIcon = styled(BiLike)``;
export const FilterAltIcon = styled(BiFilterAlt)``;
export const CopyIcon = styled(BiCopy)`
  &:hover {
    cursor: pointer;
  }
`;
export const PageTitle = styled.h2``;
export const ComboboxOption = styled.option``;

export const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Combobox = styled.select`
  color: ${(props) => props.theme.colors.Fuscous};
  border-radius: ${(props) => props.theme.effects.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.Cod};
  padding: 8px 12px 8px 4px;
`;

export const FileNameWrapper = styled.span`
  display: block;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TopBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
`;

export const TopBarBtnsWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface IFilterWrapperProps {
  showFilter?: boolean;
}

export const FilterWrapper = styled.section<IFilterWrapperProps>((props) => {
  const { showFilter = false } = props;

  return css`
    display: ${showFilter ? 'flex' : 'none'};
    gap: 16px;
    margin-bottom: 16px;
  `;
});

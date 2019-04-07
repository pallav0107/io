import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import {
  IconAlert,
  Button,
  InputAddon,
  AlertText,
  Select,
  Tabs
} from '@wdpui/react-gel';

export const ErrorIcon = styled(IconAlert)`
  color: ${({ theme }) => theme.color.danger};
  margin-bottom: 3px;
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  padding: 0px 20px;
`;

export const IconBlock = styled(Flex)`
  direction: row:
  justify-content:flex-end;
  align-items:center;
`;
export const Block = styled.div`
  background: #621a4b;
  border: 1px solid #ffffff;
  color: white;
  width: 6vh;
  border-radius: 5px;
  padding: 10px;
`;
export const InnerLabel = styled.span`
  border: 1px solid #ffffff;
  padding: 2px;
`;

export const FormWrapper = styled(Flex)`
  direction: row;
`;
// export const Formwrapper = styled(Flex)`
//   flex-direction: column;
//   ${({ theme }) => theme.breakpoint.sm`flex-direction: row;`};
// `;

export const FormWrapperCol = styled(Flex)`
  flex-direction: column;
`;

export const Wrapper = styled(Flex)`
  flex-direction: row;
  ${({ theme }) => theme.breakpoint.sm`flex-direction: row;`};
  background: #e8edf4;
  width: 50%;
  margin-top: 5px;
`;
export const Container = styled(Box)`
  border: 1px solid black;
  margin-top: 20px;
  width: 33%;
`;

export const Container2 = styled(Box)`
  
align-content: center;  
  justify-content:center;
  margin-top: 20px;
  width: 100%;
`;

export const Container1 = styled(Box)`
align-content: center;
justify-content:center;
width:100%;
`;

export const Wrapperc = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const OutWrapper = styled(Flex)`
  direction: row;
  ${({ theme }) => theme.breakpoint.sm`flex-direction: row;`};
  background: #e8edf4;
  width: 50%;
  margin-top: 5px;
`;
export const SearchContainer = styled(Flex)`
  border: 1px ${({ theme }) => theme.color.border} solid;
  border-radius: 3px;
  background-color: #fff;
  width: 100%;
  padding: 30px 30px 40px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;
export const SearchContainer1 = styled(Flex)`
  border: 1px ${({ theme }) => theme.color.border} solid;
  border-radius: 3px;
  background-color: #fff;
  width: 80vw;
  height: 45vw;
  padding: 30px 30px 40px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const PaddingContent = styled(Flex)`
 margin: 5px 5px 5px 5px;
`;

export const TestContainer = styled(Flex)`
  background-color: #fff;
  width: 100%;
  // padding: 30px 30px 40px;
  // margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;
export const Form_Wrapper = styled(Flex)`
  direction: row;
`;
export const AlignL = styled(Flex)`
  direction: row;
  align-items: center;
`;
export const AlignR = styled(Flex)`
  direction: row;
  align-items: right;
`;

export const Search_Container = styled(Flex)`
  border: 1px ${({ theme }) => theme.color.border} solid;
  border-radius: 3px;
  background-color: #fff;
  width: 100%;
  padding: 30px 30px 40px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const Wrappere = styled(Flex)`
  flex-direction: row
  justify-content: right;
  align-items: flex-end;
  float:right
  margin-bottom:20px;
  direction: rtl
  `;
export const Wrappere1 = styled(Flex)`
  flex-direction: row
  justify-content: right;
  align-items: flex-end;
  float:right
  margin-bottom:20px;
  // direction: rtl
  `;

export const SearchButton = styled(Button)`
  ${({ theme }) =>
    theme.breakpoint.sm` margin-left: 6px; margin-top: 0px;float: right;`};
  margin-top: 10px;
`;

export const Searchcontainer = styled(Flex)`
  background-color: #fff;
  width: 150%;
  padding: 30px 30px 40px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const Searchcontainer1 = styled(Flex)`
  background-color: #fff;
  width: 150%;
  padding: 100px 100px 100px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
`;

export const Formwrapper = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.sm`flex-direction: row;`};
`;

export const Searchbutton = styled(Button)`
  ${({ theme }) => theme.breakpoint.sm` margin-left: 6px; margin-top: 0px;`};
  margin-top: 6px;
`;

export const UIBlock = styled.ul`
  list-style: none;
  border-left: 2px solid;
  border-color: ${props => props.theme.color.heading};
  padding-left: 11px;
`;

export const LIBlock = styled.li`
  display: flex;
  margin-bottom: 5px;
`;

export const StyledInputAddon = styled(InputAddon)`
  font-family: ${props => props.theme.typography.common.fontFamily};
`;

export const InputErrorWrapper = styled.div`
  margin-top: 6px;
  height: 40px;
  overflow: hidden;
`;

export const ErrorText = styled(AlertText)`
  display: inline;
  margin-left: 6px;
`;
export const Styledselect = styled(Select)`
  font-family: ${props => props.theme.typography.common.fontFamily};
`;

export const ContentWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-around;
`;

export const FooterWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.color.hero};
  flex-direction: row;
`;

export const FloatRight = styled.span`
  margin-top: 10px;
  float: right;
`;

export const LabelText = styled(Text)`
  color: white;
`;

export const DateText = styled(TextBlock)`
width:50%;
height:20%;
`;

export const Tabes = styled(Tabs)`
width:100%;
`;


import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

export default styled(TableRow)`
  cursor: pointer;
  text-decoration: none;
  background: ${(props) => (props.unread ? "white" : "#F7FAFB")};
  &:hover {
    background: #fdf0f8;
  }
  #cell1 {
    text-align: left;
    width: 160px;
    font-weight: ${(props) => (props.unread ? "bold" : "normal")};
  }
  & > #cell2 {
    text-align: left;
  }
  & > #cell2 > div {
    width: 1000px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & > #subject {
      font-weight: ${(props) => (props.unread ? "bold" : "normal")};
    }
  }
  & > #cell3 {
    text-align: right;
  }
`;

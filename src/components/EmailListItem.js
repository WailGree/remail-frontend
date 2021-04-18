import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Row from "../elements/Row";
import { useStoreActions } from 'easy-peasy';

const EmailListItem = (props) => {
  const message = props.message;
  const unread = message.unread;

  let from = message.from;
  from = from.substring(0, from.indexOf("<")).replaceAll('"', "");
  from = from === "" ? "me" : from;

  const subject = message.subject;
  const snippet = message.body;

  let date = new Date(message.date);
  let copyOfDate = new Date(date);
  let todaysDate = new Date();
  if (copyOfDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)) {
    let options = { hour: "2-digit", minute: "2-digit" };
    date = date.toLocaleTimeString([], options);
  } else {
    let options = { month: "short", day: "numeric" };
    date = date.toLocaleDateString("en-US", options);
  }
  const setDisplayMessageTitle = useStoreActions(actions => actions.setDisplayMessageTitle);
  const setDisplayMessageFrom = useStoreActions(actions => actions.setDisplayMessageFrom);
  const setDisplayMessageDate = useStoreActions(actions => actions.setDisplayMessageDate);
  const setDisplayMessageBody = useStoreActions(actions => actions.setDisplayMessageBody);
  const setModalIsOpen = useStoreActions(actions => actions.setModalIsOpen);

  return (
    <Row onClick={() => {
      setDisplayMessageTitle(subject);
      setDisplayMessageFrom(from);
      setDisplayMessageDate(date);
      setDisplayMessageBody(snippet);
      setModalIsOpen(true);
    }} unread={unread}>

      <TableCell id="cell1">{from}</TableCell>
      <TableCell id="cell2">
        <div>
            <span id="subject">{subject}</span> - {snippet}
            </div>
      </TableCell>
      <TableCell id="cell3">{date}</TableCell>
    </Row>
  );
};

export default EmailListItem;

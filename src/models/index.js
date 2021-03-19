import { createStore, action } from "easy-peasy";

const store = createStore({
  displayedMessageTitle: null,
  displayedMessageFrom: null,
  displayedMessageDate: null,
  displayedMessageBody: null,
  setDisplayMessageTitle: action((state, title) => {
    state.displayedMessageTitle = title;
  }),
  setDisplayMessageFrom: action((state, from) => {
    state.displayedMessageFrom = from;
  }),
  setDisplayMessageDate: action((state, date) => {
    state.displayedMessageDate = date;
  }),
  setDisplayMessageBody: action((state, body) => {
    state.displayedMessageBody = body;
  }),
  modalIsOpen: false,
  setModalIsOpen: action((state, bool) => {
    state.modalIsOpen = bool;
  }),
  messages: [
    {
      date: "Tue, 09 Feb 2021 12:16:32 GMT",
      subject: "Biztonsági értesítés",
      from: "Google <no-reply@accounts.google.com>",
      id: "17786b8cff6d19c1",
      snippet:
        "Új eszköz jelentkezett be ide: tom1.wales2@gmail.c… hogy meggyőződhessünk arról, Ön jelentkezett be.",
    },
    {
      date: "Tue, 09 Feb 2021 12:16:32 GMT",
      subject: "Biztonsági értesítés",
      from: "Google <no-reply@accounts.google.com>",
      id: "17786b8cff6d19c1",
      snippet:
        "Új eszköz jelentkezett be ide: tom1.wales2@gmail.c… hogy meggyőződhessünk arról, Ön jelentkezett be.",
    },
  ], // should be null by default just for testing!!
  userName: null,
  loggedIn: false, // should be false by default just for testing!!
  toggle: action((state) => {
    state.loggedIn = !state.loggedIn;
  }),
  setMessages: action((state, messages) => {
    state.messages = messages;
  }),
  setUser: action((state, userName) => {
    state.userName = userName;
  }),
});

export default store;

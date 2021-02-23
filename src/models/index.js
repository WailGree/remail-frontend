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
    messages: null,
    userName: null,
    loggedIn: false,
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

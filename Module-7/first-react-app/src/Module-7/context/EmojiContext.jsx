import React, { createContext, useState, useContext } from "react";
// 1. Create the context
const EmojiContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const EmojiProvider = (props) => {
// store the current user in state at the top level
const [currentEmoji, setcurrentEmoji] = useState({});
// sets user object in state, shared via context
const handleUpdateEmoji = (user) => {
setCurrentEmoji(user);
}

return (
<EmojiContext.Provider value={{currentEmoji, handleUpdateEmoji}}>
{props.children}
</EmojiContext.Provider>
);
}

export const useEmojiContext = () => {
return useContext(EmojiContext);
}

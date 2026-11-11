
import { useState } from "react";
import {useEmojiContext} from "./EmojiContext.jsx"


function Emoji() {
    const {currentEmoji, handleUpdateEmoji} = useEmojiContext();

const handleEmojiChange = () => {
let newEmoji = '😫';
if (currentEmoji === '😫') newEmoji = '😰'
else if (currentEmoji === '😰') newEmoji = '😱';
setCurrentEmoji(newEmoji)
}


    return (
        <div className="Emoji componentBox">
            Emoji: {currentEmoji}
            <button onClick={handleUpdateEmoji}>Switch Emoji</button>
        </div>
    )
}
export default Emoji;





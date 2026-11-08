
import {createContext, useContext} from "react";
import { useEmojiContext } from "../../Module-7/context/EmojiContext.jsx";
function Emoji() {
const { mood, setMood } = useEmojiContext();

const handleLosingDeadlock = () => {
let newMood = '😫';
if (mood === '😫') newMood = '😰'
else if (mood === '😰') newMood = '😱';
setMood(newMood)
}

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}
<button onClick={handleLosingDeadlock}>Running Late</button>
</div>
)
}




export default Emoji;
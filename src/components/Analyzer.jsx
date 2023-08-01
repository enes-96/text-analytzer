const Analyzer = ({ text }) => {
    const wordCount = text.trim().split(/\s+/).filter((word) => word !== "").length;
    const timeCount = Math.round((wordCount / 200) * 1) / 1;

    const findLongestWord = (text) => {
        const words = text.trim().split(/\s+/).filter((word) => word !== "")
        let longestWord = ""
        for (const word of words) if (word.length > longestWord.length) longestWord = word
        return longestWord
    };

    const longestWord = findLongestWord(text)


    return (
        <div className="bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <div className="flex gap-2 items-center">
                <p className="text-gray-400">Average Reading Time: </p>
                <p>{timeCount < 1 ? " < 1 min" : `~ ${timeCount} min`}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-gray-400">Longest Word:</p>
                <p>{longestWord}</p>
            </div>
        </div>
    )
}




export default Analyzer
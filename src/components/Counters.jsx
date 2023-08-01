import PropTypes from "prop-types";


const Counters = ({ characters }) => {
    const characterCount = characters.trim().length
    const wordCount = characters.trim().split(/\s+/).filter((word) => word !== "").length;
    const sentenceCount = characters.split(/[.!?]+/).filter((sentence) => sentence !== "").length;

    return (
        <div className="bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Characters</p>
                <p>{characterCount}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Words</p>
                <p>{wordCount}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Sentences</p>
                <p>{sentenceCount}</p>
            </div>
        </div>
    )
}


Counters.propTypes = {
    characters: PropTypes.string.isRequired,
}

export default Counters
import PropTypes from 'prop-types'; // Import the PropTypes module

const Textarea = ({ text, changeFunction }) => {

    return (
        <div className="bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <textarea
                placeholder="Enter your Text"
                value={text}
                onChange={changeFunction}
                className="w-full outline-none resize-none h-80"
            ></textarea>
        </div>
    )
}

Textarea.propTypes = {
    text: PropTypes.string.isRequired,
    changeFunction: PropTypes.func.isRequired,
};

export default Textarea
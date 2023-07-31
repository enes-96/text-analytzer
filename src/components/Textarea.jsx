const Textarea = ({ text, changeFuntion }) => {

    return (
        <div className="bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <textarea
                value={text}
                onChange={changeFuntion}
                className="w-full outline-none resize-none h-80"
            ></textarea>
        </div>
    )
}
export default Textarea
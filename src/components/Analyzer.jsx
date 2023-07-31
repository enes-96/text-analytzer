const Analyzer = () => {
    return (
        <div className=" bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <div className="flex gap-2 items-center">
                <p className="text-gray-400">Average Read Time:</p>
                <p>0</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-gray-400">Longest Word:</p>
                <p>None</p>
            </div>
        </div>
    )
}
export default Analyzer
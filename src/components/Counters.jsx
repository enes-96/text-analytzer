
const Counters = () => {

    return (
        <div className="bg-white text-xl max-w-5xl p-6 font-bold my-4 rounded-xl mx-auto flex justify-between">
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Words</p>
                <p>0</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Characters</p>
                <p>0</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-gray-400">Sentences</p>
                <p>0</p>
            </div>
        </div>
    );
};

export default Counters;

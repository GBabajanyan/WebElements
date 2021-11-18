import { InformationCircleIcon, PlayIcon } from "@heroicons/react/solid";

const Trailer = () => {
    return (
        <div className=" relative min-w-full min-h-1/4 max-h-full bg-green-300">
            <div className="flex absolute w-5/12 h-full items-center z-30 p-5 ">
                 <div className="relative top-16 w-11/12 h-1/4 bg-opacity-50">
                    <div className="flex w-full h-3/5 ">
                        <img src="https://www.seekpng.com/png/detail/126-1264493_download-in-original-resolution-requiem-for-a-dream.png" className="max-w-full object-contain" />
                    </div>
                    <div className="flex
                    w-full h-2/5 items-center justify-start space-x-5 px-5x">
                        <button className="flex flex-row w-1/4 h-3/5 bg-white rounded-md items-center justify-center space-x-2 hover:bg-gray-300">
                            <PlayIcon className=" flex w-5 h-5" />
                            <text className="flex font-bold text-xs">Play</text>
                        </button>
                        <button className="flex flex-row w-1/3 h-3/5 bg-gray-300 bg-opacity-50 text-white rounded-md items-center justify-center space-x-1 hover:bg-gray-400 hover:bg-opacity-10">
                            <InformationCircleIcon className="w-5 h-5 " />
                            <text className="flex font-bold text-xs">More info</text>
                        </button>
                    </div>
                </div> 
            </div>
            <img className="relative min-w-full max-h-none object-cover z-10" alt="" src="https://occ-0-4923-3467.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABReI5z1bIkGlVRwUum__VEb8zJ_JNrKVcNooFOWD1M4hEWL2bON-BVjNzq1_miDHI_3npDLXlyrAVOJV12bgCkhTrJIO.webp?r=df5" /> 
        </div>
    );
}

export default Trailer;
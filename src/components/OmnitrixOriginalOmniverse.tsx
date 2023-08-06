import /* React, */ { useState, useEffect} from 'react'
import { ALL_ALIENS_OG_OMNIVERSE } from '../constants';
import { Alien } from '../types';
import og_recharged from '/omnitrixSoundEffects/og/og_recharged.mp3'
import og_openSelector from '/omnitrixSoundEffects/og/og_openSelector.mp3'
import og_selectOtherAlien from '/omnitrixSoundEffects/og/og_selectOtherAlien.mp3'
import og_transform from '/omnitrixSoundEffects/og/og_transform.mp3'
import og_untransform from '/omnitrixSoundEffects/og/og_untransform.mp3'


// const ALL_ALIENS: Alien[] = ALL_ALIENS_OG
const ALL_ALIENS: Alien[] = ALL_ALIENS_OG_OMNIVERSE

function OmnitrixOriginalOmniverse() {
    const [viewAlienSelection, setViewAlienSelection] = useState<boolean>(false)
    const [alienTransformed, setAlienSelected] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)
    const [flashingLights, setFlashingLights] = useState<boolean>(false)

    const [recharged, setRecharged] = useState(false)

    const [transformAnimation, setTransformAnimation] = useState<boolean>(false)

    useEffect(() => {
        if (alienTransformed || recharged === false) {
            setTransformAnimation(true)
            setInterval(() => {
                setTransformAnimation(false)
            }, 3500)
        }
    }, [alienTransformed, currentAlienInView, recharged])


    function changeAlienByNumber(num: number | null): void {
        if (num !== null) setCurrentAlienInView(ALL_ALIENS[num])
    }

    function selectNextAlien() {
        const nextAlien: number = ALL_ALIENS.reduce((acc, current, index) => {
            if (current.name === currentAlienInView?.name) acc = index + 1
            return acc
        }, 0)

        if (nextAlien === ALL_ALIENS.length) changeAlienByNumber(0)
        if (viewAlienSelection && nextAlien !== ALL_ALIENS.length) changeAlienByNumber(nextAlien)
    }

    function selectPreviousAlien() {
        const previousAlien: number = ALL_ALIENS.reduce((acc, current, index) => {
            if (current.name === currentAlienInView?.name) acc = index - 1
            return acc
        }, 0)

        if (previousAlien === -1) changeAlienByNumber(ALL_ALIENS.length - 1)
        if (viewAlienSelection && previousAlien > -1) changeAlienByNumber(previousAlien)
    }

    function activateFlashingLights() {
        if (!viewAlienSelection) {
            setCurrentAlienInView(null)
            setFlashingLights(true)
            setInterval(() => {
                setFlashingLights(false)
            }, 5000)
        }
    }

    function ButtonFunctions() {
        setViewAlienSelection(prev => !prev)
        setAlienSelected(false)
        if (!viewAlienSelection) setCurrentAlienInView(null)
        setFlashingLights(false)
    }

    function toogleRecharger() {
        setViewAlienSelection(false)
        setCurrentAlienInView(null)
        setAlienSelected(false)
        setRecharged(prev => !prev)
        if (!recharged) new Audio(og_recharged).play()
        if (recharged) new Audio(og_untransform).play()
    }

    return (
        <div data-theme="omnitrix_og" className='min-h-screen overflow-x-hidden px-0 mx-0'>
            <div className='flex gap-5 ml-5 pt-5'>
                <p>Toggle recharged</p>
                <input
                    checked={recharged}
                    type='checkbox'
                    className='toggle toggle-primary'
                    onChange={() => toogleRecharger()}
                />
            </div>
            <div className={`h-full md:max-h-screen w-full pt-[15rem]`}>
                {
                    alienTransformed && currentAlienInView ?
                        <AlienImage
                            currentAlienInView={currentAlienInView}
                        />
                        :
                        !currentAlienInView ?
                            <div
                                className='left-[40%] w-[20%] absolute z-50 h-[25rem] bg-transparent'
                                onClick={() => {
                                    setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length - 1)])
                                    setAlienSelected(true)
                                    new Audio(og_transform).play()
                                }}
                            />
                            :
                            null
                }

                <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-base-200 mx-auto h-full py-20  flex justify-center items-center `}>
                    <div className='bg-transparent border-transparent md:bg-black md:border-white border border-t-[2rem] border-b-[2rem] border-solid  mx-auto h-72 w-full p-20 rounded-md flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0'>
                        <div className='-mr-5 md:mr-[5rem] lg:mr-[2rem] rounded-full bg-accent w-14 h-14 lg:h-36 lg:w-36 flex justify-center items-center'>
                            <div
                                className={`${recharged ? "cursor-default btn-primary" : "cursor-not-allowed btn-error"} btn w-10 h-10 lg:w-28 lg:h-28 rounded-full ${viewAlienSelection ? "bg-secondary" : ""}`}
                                onClick={() => {
                                    if (recharged) {
                                        ButtonFunctions()
                                        new Audio(og_openSelector).play()
                                    }
                                }}
                            />
                        </div>
                        <div className='flex justify-center items-center m-0 md:mr-[10rem]'>
                            <div className='flex justify-center items-center'>
                                <div
                                    onClick={() => {
                                        selectPreviousAlien()
                                        if (!alienTransformed && viewAlienSelection) new Audio(og_selectOtherAlien).play()
                                        if (alienTransformed && viewAlienSelection) new Audio(og_transform).play()
                                    }}
                                    className={`bg-base-300 w-[35rem] h-[35rem] lg:w-[40rem] lg:h-[40rem] rounded-full grid grid-cols-2 gap-60 rotate-45`}
                                />
                                <OuterSelectorRing
                                    selectNextAlien={selectNextAlien}
                                    viewAlienSelection={viewAlienSelection}
                                    alienTransformed={alienTransformed}
                                    recharged={recharged}
                                />
                            </div>

                            <div
                                className={`absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-base-100 flex justify-center items-center  `}
                            />
                            <Ben10Logo
                                activateFlashingLights={activateFlashingLights}
                                flashingLights={flashingLights}
                                viewAlienSelection={viewAlienSelection}
                                recharged={recharged}
                            />

                            <AlienSelector
                                flashingLights={flashingLights}
                                viewAlienSelection={viewAlienSelection}
                                currentAlienInView={currentAlienInView}
                                alienTransformed={alienTransformed}
                                setAlienSelected={setAlienSelected}
                                recharged={recharged}
                                setCurrentAlienInView={setCurrentAlienInView}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {
                transformAnimation ?
                    <div className={`animate-transformIntoAlien absolute z-50 ${recharged ? "bg-primary translate-y-[-920px]" : "bg-error translate-y-[-800px]"} h-screen w-screen `} />
                    :
                    null
            }
        </div>
    )
}

type OuterSelectorRingProps = {
    selectNextAlien: () => void;
    viewAlienSelection: boolean;
    alienTransformed: boolean;
    recharged: boolean
}
function OuterSelectorRing({ selectNextAlien, viewAlienSelection, alienTransformed, recharged }: OuterSelectorRingProps) {
    return (
        <div
            onClick={() => {
                selectNextAlien()
                if (!alienTransformed && viewAlienSelection) new Audio(og_selectOtherAlien).play()
                if (alienTransformed && viewAlienSelection) new Audio(og_transform).play()
            }}
            className={` hover:border-black absolute border-[5rem] border-black bg-transparent ${viewAlienSelection ? "btn hover:border-black animate-spin-once" : "btn btn-disable bg-black"} ${alienTransformed ? "" : ""} w-[32rem] h-[32rem] lg:w-[35rem] lg:h-[35rem] rounded-full`}
        >
            <div className='absolute h-[30rem] w-[30rem] bg-transparent rounded-full flex flex-col gap-[13rem] lg:gap-[15rem] justify-center items-center'>
                <div className={`w-full flex justify-center bg-transparent`}>
                    <div className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full ${recharged ? "bg-primary" : "bg-error"}`} />
                </div>

                <div className='w-full flex justify-center items-center'>
                    <div className={`absolute w-full flex justify-start bg-transparent mr-0 lg:mr-16`}>
                        <div className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full ${recharged ? "bg-primary" : "bg-error"}`} />
                    </div>
                    <div className={`absolute w-full flex justify-end bg-transparent mr-0 lg:ml-16`}>
                        <div className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full ${recharged ? "bg-primary" : "bg-error"}`} />
                    </div>
                </div>

                <div className={`w-full flex justify-center bg-transparent`}>
                    <div className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full ${recharged ? "bg-primary" : "bg-error"}`} />
                </div>
            </div>
        </div>
    );
}


type Ben10LogoProps = {
    activateFlashingLights: () => void;
    flashingLights: boolean;
    viewAlienSelection: boolean;
    recharged: boolean
}
function Ben10Logo({ activateFlashingLights, flashingLights, viewAlienSelection, recharged }: Ben10LogoProps) {
    return (
        <div
            onClick={() => {
                if (recharged) {
                    activateFlashingLights()
                    new Audio(og_recharged).play()
                }
            }}
            className={`${recharged ? "cursor-default" : "cursor-not-allowed"} absolute w-[25rem] h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
        >
            <div className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${!recharged ? "animate-omnitrixFlashingLightsLogoUncharged" : flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutTop " : "animate-omnitrixInTop "}`} />
            <div className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${!recharged ? "animate-omnitrixFlashingLightsLogoUncharged" : flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutBottom" : "animate-omnitrixInBottom  "}`} />
        </div>
    );
}


type AlienSelectorProps = {
    flashingLights: boolean;
    viewAlienSelection: boolean;
    currentAlienInView: Alien | null;
    alienTransformed: boolean;
    setAlienSelected: React.Dispatch<React.SetStateAction<boolean>>;
    recharged: boolean
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>
}
function AlienSelector({ flashingLights, viewAlienSelection, currentAlienInView, alienTransformed, setAlienSelected, recharged, setCurrentAlienInView }: AlienSelectorProps) {
    return (
        <div
            className={`${!recharged && "hidden"} absolute w-[20rem] h-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full bg-transparent flex flex-col justify-center items-center ${flashingLights ? "hidden" : viewAlienSelection ? "animate-omnitrixInDiamond" : "animate-omnitrixOutDiamond"} `}
            onClick={() => {
                if (alienTransformed) {
                    setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length - 1)])
                    new Audio(og_transform).play()
                }
            }}
        >
            <div className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-b-[12rem] lg:border-b-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary -mb-0.5 `} />
            <div className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-t-[12rem] lg:border-t-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary`} />
            <div className='absolute flex rounded-box justify-center items-center'>
                <div className='carousel-item w-full'>
                    {currentAlienInView !== null ?
                        <img
                            className={`${currentAlienInView.height?.silouette !== undefined ? `${currentAlienInView.height.silouette}` : "h-[15rem] lg:h-[20rem]"} transition-all duration-1000 ${alienTransformed ? "hidden" : "brightness-0"}`}
                            src={currentAlienInView.img}
                            alt={`${currentAlienInView.img}`}
                            onClick={() => {
                                setAlienSelected(true);
                                new Audio(og_transform).play()
                            }}
                        />
                        : null
                    }
                </div>
            </div>
        </div>
    );
}


type AlienImageProps = { currentAlienInView: Alien }
function AlienImage({ currentAlienInView }: AlienImageProps) {
    return (
        <div className={`w-[90%] absolute z-50 h-0 flex justify-center items-center translate-y-64 translate-x-0 md:-translate-x-15 lg:translate-y-80 lg:translate-x-0`}>
            <img className={`${currentAlienInView.ultimate && "cursor-pointer"} ml-[5rem] lg:ml-[15rem] ${currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[40rem]"}  brightness-100 drop-shadow-2xl contrast-200 animate-alienRotateUpLittle lg:animate-alienRotateUp `} src={currentAlienInView.ultimate ? currentAlienInView.ultimate?.img : currentAlienInView.img} alt="alien_image" />
        </div>
    );
}
export default OmnitrixOriginalOmniverse
import /* React, */ { useEffect, useState } from 'react'
import { ALL_ALIENS_ULTIMATE } from '../constants';
import { Alien } from '../types';
import ultimate_openSelector from '/omnitrixSoundEffects/ultimate/ultimate_openSelector.mp3'
import ultimate_selectOtherAlien from '/omnitrixSoundEffects/ultimate/ultimate_selectOtherAlien.mp3'
import ultimate_transform from '/omnitrixSoundEffects/ultimate/ultimate_transform.mp3'
import ultimate_transformUltimate from '/omnitrixSoundEffects/ultimate/ultimate_transformUltimate.mp3'
import ultimate_untransform from '/omnitrixSoundEffects/ultimate/ultimate_untransform.mp3'

const ALL_ALIENS: Alien[] = ALL_ALIENS_ULTIMATE

function OmnitrixUltimate() {
    const [alienTransformed, setAlienTransformed] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)
    const [toogleInvertValue, setToogleInvertValue] = useState<boolean>(true)
    const [flashingLights, setFlashingLights] = useState<boolean>(false)

    const [activateUltimate, setActivateUltimate] = useState<boolean>(false)
    const [transformAnimation, setTransformAnimation] = useState<boolean>(false)


    useEffect(() => {
        if (!toogleInvertValue) {
            setTransformAnimation(true)
            setInterval(() => {
                setTransformAnimation(false)
            }, 5000)
        }
    }, [toogleInvertValue, currentAlienInView])

    function changeAlienByNumber(num: number | null): void {
        if (num !== null) setCurrentAlienInView(ALL_ALIENS[num])
    }

    function selectNextAlien() {
        const nextAlien: number = ALL_ALIENS.reduce((acc, current, index) => {
            if (current.name === currentAlienInView?.name) acc = index + 1
            return acc
        }, 0)

        if (nextAlien === ALL_ALIENS.length) changeAlienByNumber(0)
        if (nextAlien !== ALL_ALIENS.length) changeAlienByNumber(nextAlien)
    }

    function selectPreviousAlien() {
        const previousAlien: number = ALL_ALIENS.reduce((acc, current, index) => {
            if (current.name === currentAlienInView?.name) acc = index - 1
            return acc
        }, 0)

        if (previousAlien === -1) changeAlienByNumber(ALL_ALIENS.length - 1)
        if (previousAlien > -1) changeAlienByNumber(previousAlien)
    }

    function activateFlashingLights() {
        setFlashingLights(true)
        setInterval(() => {
            setFlashingLights(false)
        }, 5000)
    }


    return (
        <div
            data-theme="omnitrix_ultimate"
            className={`min-h-screen overflow-x-hidden px-0 mx-0`}
        // className='h-full w-full min-h-screen overflow-y-hidden'
        >
            <div className={`h-full lg:max-h-screen w-full ${alienTransformed ? "pt-[15rem]" : ""}`}>
                {
                    alienTransformed && currentAlienInView ?
                        <div className={`w-[100%] absolute z-50 h-0 flex justify-center items-center translate-y-80`}>
                            {ALL_ALIENS.map((currentAlien) => {
                                if (currentAlien === currentAlienInView) {
                                    return (
                                        //className='relative translate-y-[-100px] lg:translate-y-[-200px]'
                                        <>
                                            <img
                                                style={
                                                    toogleInvertValue ?
                                                        { filter: `invert(46%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(150%)` }
                                                        :
                                                        {}
                                                }
                                                //shadow-xl shadow-black 
                                                //h-[30rem] lg:h-[40rem]  
                                                // hover:brightness-110 
                                                // ${currentAlienInView.name === 'feedback' ? "hover:brightness-150" : ""}
                                                //ml-[5rem] lg:ml-[10rem]
                                                className={
                                                    `${currentAlienInView.ultimate && "cursor-pointer"} 
                                                    ${currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[40rem] "}
                                                    drop-shadow-2xl 
                                                    hover:contrast-200
                                                    ${activateUltimate ? "animate-alienNormalOut translate-y-[-100px] lg:translate-y-[-200px]" : toogleInvertValue ? "animate-alienFlickLittle lg:animate-alienFlick" : "animate-fadeIn translate-y-[-100px] lg:translate-y-[-200px]"}`
                                                }
                                                src={currentAlienInView.img}
                                                alt={currentAlienInView.name}
                                                onClick={() => {
                                                    if (currentAlienInView.ultimate && !toogleInvertValue) {
                                                        setActivateUltimate(prev => !prev)
                                                        if (!activateUltimate) {
                                                            new Audio(ultimate_transformUltimate).play()
                                                        } else {
                                                            new Audio(ultimate_untransform).play()
                                                        }
                                                    }
                                                }}
                                            />
                                            {
                                                (currentAlien === currentAlienInView && currentAlienInView.ultimate /* && activateUltimate  */&& !toogleInvertValue) ?
                                                    <img
                                                    // ${activateUltimate ? "animate-fadeInLowerSelector" : "animate-fadeOut transition-all ease-out"}
                                                        className={
                                                            `${currentAlienInView.ultimate && "cursor-pointer"} 
                                                            ${currentAlienInView.ultimate?.height?.character ? `${currentAlienInView.ultimate.height.character}` : "h-[30rem] lg:h-[40rem] "}
                                                            absolute
                                                            drop-shadow-2xl 
                                                            hover:contrast-200
                                                            translate-y-[-100px] lg:translate-y-[-200px] 
                                                            ${activateUltimate ? "animate-fadeInLowerSelector" : "hidden"}
                                                            `
                                                        }
                                                        src={currentAlienInView.ultimate.img}
                                                        alt={currentAlienInView.ultimate.name}
                                                        onClick={() => {
                                                            if (currentAlienInView.ultimate && !toogleInvertValue) {
                                                                setActivateUltimate(prev => !prev)
                                                                if (!activateUltimate) {
                                                                    new Audio(ultimate_transformUltimate).play()
                                                                } else {
                                                                    new Audio(ultimate_untransform).play()
                                                                }
                                                            }
                                                        }}
                                                    />
                                                    : null
                                            }
                                        </>
                                    )
                                }
                                return null
                            })}
                        </div>
                        : null
                }

                <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown " : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto h-full flex flex-col-reverse gap-10 md:gap-0 md:grid md:grid-cols-3`}>
                    <div className='flex md:flex-col justify-center items-center shrink gap-5'>
                        <div className={`h-56 w-[80%] hidden bg-black rounded-md md:flex md:flex-col gap-28 justify-center items-center`}>
                            <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                            <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                        </div>
                        <div className='self-center -mr-5 md:mr-[5rem] lg:mr-[2rem] rounded-md bg-accent w-[8rem] h-[12rem] lg:h-[10rem] lg:w-[15rem] flex justify-center items-center'>
                            <div
                                className={`btn w-[7rem] h-[10rem] lg:w-[12rem] lg:h-28 rounded-md btn-neutral`}
                                onClick={() => {
                                    setActivateUltimate(false)
                                    if (alienTransformed) {
                                        setAlienTransformed(false)
                                        new Audio(ultimate_untransform).play()
                                        setToogleInvertValue(true)
                                    }
                                    if (!alienTransformed) {
                                        setAlienTransformed(true)
                                        if (toogleInvertValue) {
                                            new Audio(ultimate_openSelector).play()
                                        } else {
                                            new Audio(ultimate_transform).play()
                                        }
                                    }
                                    setFlashingLights(false)
                                }}
                            />
                        </div>
                        <div className={`h-56 w-[80%] hidden bg-black rounded-md md:flex md:flex-col gap-28 justify-center items-center`}>
                            <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                            <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='relative flex justify-center items-center'>
                            <div 
                                className={`flex gap-5 ${activateUltimate ? "animate-scaleInCenter" : "animate-scaleOutCenter"}`}
                                // className={`flex gap-5 transition-all ${activateUltimate ? "animate-scaleInCenter scale-1" : "ease-out scale-0"} `}
                            >
                                <div className={`bg-gray-500 h-[50rem] w-[10rem] rotate-45 transition-all duration-500 `}></div>
                                <div className={`absolute bg-gray-500 h-[50rem] w-[10rem] -rotate-45 transition-all duration-500`}></div>
                            </div>
                            <div
                                onClick={() => {
                                    setActivateUltimate(false)
                                    if (!activateUltimate) {
                                        selectPreviousAlien()
                                        if (toogleInvertValue) new Audio(ultimate_selectOtherAlien).play()
                                        if (!toogleInvertValue) new Audio(ultimate_transform).play()
                                    }
                                }}
                                className={`absolute btn hover:bg-gray-400  ${alienTransformed ? "" : ""} w-[33rem] h-[33rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-accent flex justify-center items-center`}
                            />
                            <div
                                onClick={() => {
                                    setActivateUltimate(false)
                                    if (!activateUltimate) {
                                        selectNextAlien()
                                        if (toogleInvertValue) new Audio(ultimate_selectOtherAlien).play()
                                        if (!toogleInvertValue) new Audio(ultimate_transform).play()
                                    }
                                }}
                                className={`absolute btn bg-current hover:bg-current  ${alienTransformed ? "" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent flex justify-end items-end`}
                            />
                        </div>

                        <div
                            className={`absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-black flex justify-center items-center  `}
                        />
                        <Ben10Logo
                            activateFlashingLights={activateFlashingLights}
                            flashingLights={flashingLights}
                            toogleInvertValue={toogleInvertValue}
                            setToogleInvertValue={setToogleInvertValue}
                            alienTransformed={alienTransformed}
                            currentAlienInView={currentAlienInView}
                            setCurrentAlienInView={setCurrentAlienInView}
                        />
                    </div>
                </div>
            </div>

            {
                transformAnimation ?
                    <div className='animate-transformIntoAlien absolute z-50 bg-primary h-screen w-screen translate-y-[-950px]' />
                    :
                    null
            }
        </div >
    )
}

type Ben10LogoProps = {
    activateFlashingLights: () => void
    flashingLights: boolean
    toogleInvertValue: boolean
    setToogleInvertValue: React.Dispatch<React.SetStateAction<boolean>>
    alienTransformed: boolean;
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>;
    currentAlienInView: Alien | null;
}
function Ben10Logo({ activateFlashingLights, flashingLights, toogleInvertValue, setToogleInvertValue, alienTransformed, currentAlienInView, setCurrentAlienInView }: Ben10LogoProps) {
    function activate() {
        activateFlashingLights()
        if (alienTransformed) {
            setToogleInvertValue(prev => !prev)
            if (!toogleInvertValue) new Audio(ultimate_untransform).play()
            if (toogleInvertValue) new Audio(ultimate_transform).play()
        }

        if(currentAlienInView === null){
            setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length - 1)])
        }
    }

    return (
        <div
            onClick={() => activate()}
            className={`absolute w-[25rem] h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
        >
            <div className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`} />
            <div className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`} />
        </div>
    );
}

export default OmnitrixUltimate
import /* React, */ { useState, useEffect } from 'react'
import { ALL_ALIENS_ALIEN_FORCE } from '../constants';
import { Alien } from '../types';
import ultimate_openSelector from '/omnitrixSoundEffects/ultimate/ultimate_openSelector.mp3'
import ultimate_selectOtherAlien from '/omnitrixSoundEffects/ultimate/ultimate_selectOtherAlien.mp3'
import ultimate_transform from '/omnitrixSoundEffects/ultimate/ultimate_transform.mp3'
import ultimate_untransform from '/omnitrixSoundEffects/ultimate/ultimate_untransform.mp3'

const ALL_ALIENS: Alien[] = ALL_ALIENS_ALIEN_FORCE

function OmnitrixAlienForce() {
    const [alienTransformed, setAlienTransformed] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)
    const [toogleInvertValue, setToogleInvertValue] = useState<boolean>(true)
    const [flashingLights, setFlashingLights] = useState<boolean>(false)

    const [transformAnimation, setTransformAnimation] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     if (toogleInvertValue === false) {
    //         setInterval(() => {
    //             console.log(toogleInvertValue)
    //             setTransformAnimation(false)
    //         }, 5000)
    //     }
    // }, [toogleInvertValue, currentAlienInView])

    const handleButtonClick = () => {
        setTransformAnimation(true);
        setTimeout(() => {
            setTransformAnimation(false);
        }, 1000); // Set the duration of the animation
    };


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to track window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });


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
            data-theme="omnitrix_AlienForce"
            className={`min-h-screen overflow-x-hidden overflow-y-hidden px-0 mx-0 ${alienTransformed ? "animate-backgroundBen10" : ""}`}
        >

            <div className={`h-full lg:max-h-screen w-full  ${alienTransformed ? "pt-[15rem]" : ""}`}>
                {
                    alienTransformed && currentAlienInView ?
                        ALL_ALIENS.map((currentAlien) => {
                            if (currentAlien === currentAlienInView) {
                                return (
                                    <div key={currentAlienInView.name} className={`w-[100%] absolute z-50 h-0 flex justify-center items-center translate-y-80`}>
                                        <img
                                            style={
                                                toogleInvertValue ?
                                                    { filter: `invert(46%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(150%)` }
                                                    :
                                                    {}
                                            }
                                            className={
                                                `${windowWidth < 800 && currentAlienInView.little?.height?.character ? `${currentAlienInView.little.height.character}` : currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[28rem] md:h-[30rem] lg:h-[40rem]"}
                                                drop-shadow-2xl 
                                                contrast-200
                                                hover:contrast-100 
                                                ${toogleInvertValue ? "animate-alienFlick" : "animate-fadeIn"} translate-y-[-100px] lg:translate-y-[-200px]`
                                            }
                                            src={windowWidth < 800 && currentAlienInView.little ? (currentAlienInView.little.img ? currentAlienInView.little.img : "") : (currentAlienInView.img ? currentAlienInView.img : "")}
                                            alt={currentAlienInView.name}
                                        />
                                    </div>
                                )
                            }
                        })
                        : null
                }


                <div className={`mt-[10rem] transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto h-full py-20`}>
                    <div
                        className={
                            `bg-transparent md:bg-neutral 
                            mx-auto 
                            h-72 w-full p-20
                            rounded-md 
                            flex flex-row justify-center items-center gap-48 md:gap-60`
                        }
                    >
                        <div className='flex justify-center items-center'>
                            <div className='relative flex justify-center items-center'>
                                <div
                                    onClick={() => {
                                        setAlienTransformed(prev => !prev)
                                        if (alienTransformed) {
                                            new Audio(ultimate_untransform).play()
                                            setToogleInvertValue(true)
                                        }
                                        if (!alienTransformed) {
                                            if (toogleInvertValue) {
                                                new Audio(ultimate_openSelector).play()
                                            } else {
                                                new Audio(ultimate_transform).play()
                                            }
                                            setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length - 1)])
                                        }
                                        setFlashingLights(false)
                                    }}
                                    className={`absolute btn hover:bg-gray-400  ${alienTransformed ? "" : ""} w-[5rem] h-[45rem] lg:w-[50rem] lg:h-[5rem] bg-accent rounded-3xl`}
                                />
                                <div
                                    onClick={() => {
                                        selectPreviousAlien()
                                        if(!toogleInvertValue) handleButtonClick()
                                        if (toogleInvertValue) new Audio(ultimate_selectOtherAlien).play()
                                        if (!toogleInvertValue) new Audio(ultimate_transform).play()
                                    }}
                                    className={`absolute btn hover:bg-gray-400  ${alienTransformed ? "" : ""} w-[30rem] h-[30rem]  md:w-[33rem] md:h-[33rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-accent`}
                                />
                                <div
                                    onClick={() => {
                                        selectNextAlien()
                                        if(!toogleInvertValue) handleButtonClick()
                                        if (toogleInvertValue) new Audio(ultimate_selectOtherAlien).play()
                                        if (!toogleInvertValue) new Audio(ultimate_transform).play()
                                    }}
                                    className={`absolute btn bg-current hover:bg-current  ${alienTransformed ? "" : ""} w-[25rem] h-[25rem] md:w-[28rem] md:h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent`}
                                />
                            </div>

                            <div
                                className={`absolute w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-black flex justify-center items-center  `}
                            />
                            <Ben10Logo
                                activateFlashingLights={activateFlashingLights}
                                flashingLights={flashingLights}
                                toogleInvertValue={toogleInvertValue}
                                setToogleInvertValue={setToogleInvertValue}
                                alienTransformed={alienTransformed}
                                handleButtonClick={handleButtonClick}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                // className={`absolute z-50 bg-primary h-screen w-screen translate-y-[-850px] transition-transform ${transformAnimation ? 'animate-transformIntoAlien' : 'scale-0'}`}
                // className={`absolute z-50 bg-primary h-screen w-screen translate-y-[-850px] transition-all ${transformAnimation ? 'animate-transformIntoAlien' : 'scale-0'}`}
                className={`absolute z-50 bg-primary h-screen w-screen translate-y-[-850px] transition-all ${transformAnimation ? 'scale-100' : 'scale-0'}`}
            />
        </div>
    )
}

type Ben10LogoProps = {
    activateFlashingLights: () => void
    flashingLights: boolean
    toogleInvertValue: boolean
    setToogleInvertValue: React.Dispatch<React.SetStateAction<boolean>>
    alienTransformed: boolean;
    handleButtonClick: () => void
}
function Ben10Logo({ activateFlashingLights, flashingLights, toogleInvertValue, setToogleInvertValue, alienTransformed, handleButtonClick }: Ben10LogoProps) {
    function activate() {
        activateFlashingLights()
        if (alienTransformed) {
            setToogleInvertValue(prev => !prev)
            if (!toogleInvertValue) new Audio(ultimate_untransform).play()
            if (toogleInvertValue) new Audio(ultimate_transform).play()
            handleButtonClick()
        }
    }

    return (
        <div
            onClick={() => activate()}
            className={`absolute w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
        >
            <div className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`} />
            <div className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`} />
        </div>
    );
}

export default OmnitrixAlienForce

import /* React, */ { useState } from 'react'
import { ALL_ALIENS_ALIEN_FORCE, ALL_ALIENS_OG, ALL_ALIENS_OMNIVERSE, ALL_ALIENS_ULTIMATE } from '../constants';
import { Alien } from '../types/types';

function Omnitrixes() {
    const [viewAlienSelection, setViewAlienSelection] = useState<boolean>(false)
    const [alienTransformed, setAlienSelected] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)
    const [toogleInvertValue, setToogleInvertValue] = useState<boolean>(false)
    const [omnitrixSelected, setOmnitrixSelected] = useState<string>('omnitrix_ultimate')

    const [flashingLights, setFlashingLights] = useState<boolean>(false)


    const [activateUltimate, setActivateUltimate] = useState<boolean>(false)


    function changeAlienByNumber(num: number | null): void {
        switch (omnitrixSelected) {
            case 'omnitrix_og':
                if (num !== null) setCurrentAlienInView(ALL_ALIENS_OG[num])
                break;

            case 'omnitrix_AlienForce':
                if (num !== null) setCurrentAlienInView(ALL_ALIENS_ALIEN_FORCE[num])
                break;

            case 'omnitrix_omniverse':
                if (num !== null) setCurrentAlienInView(ALL_ALIENS_OMNIVERSE[num])
                break;

            case 'omnitrix_ultimate':
                if (num !== null) setCurrentAlienInView(ALL_ALIENS_ULTIMATE[num])
                break;

            default:
                break;
        }
    }

    function selectNextAlien() {
        switch (omnitrixSelected) {
            case 'omnitrix_og':
                const nextAlienOG: number = ALL_ALIENS_OG.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index + 1
                    return acc
                }, 0)

                if (nextAlienOG === ALL_ALIENS_OG.length) changeAlienByNumber(0)
                if (viewAlienSelection && nextAlienOG !== ALL_ALIENS_OG.length) changeAlienByNumber(nextAlienOG)
                break;

            case 'omnitrix_AlienForce':
                const nextAlienAF: number = ALL_ALIENS_ALIEN_FORCE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index + 1
                    return acc
                }, 0)

                if (nextAlienAF === ALL_ALIENS_ALIEN_FORCE.length) changeAlienByNumber(0)
                if (viewAlienSelection && nextAlienAF !== ALL_ALIENS_ALIEN_FORCE.length) changeAlienByNumber(nextAlienAF)
                break;

            case 'omnitrix_omniverse':
                const nextAlienOM: number = ALL_ALIENS_OMNIVERSE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index + 1
                    return acc
                }, 0)

                if (nextAlienOM === ALL_ALIENS_OMNIVERSE.length) changeAlienByNumber(0)
                if (viewAlienSelection && nextAlienOM !== ALL_ALIENS_OMNIVERSE.length) changeAlienByNumber(nextAlienOM)
                break;

            case 'omnitrix_ultimate':
                const nextAlienUL: number = ALL_ALIENS_ULTIMATE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index + 1
                    return acc
                }, 0)

                if (nextAlienUL === ALL_ALIENS_ULTIMATE.length) changeAlienByNumber(0)

                if (viewAlienSelection && nextAlienUL !== ALL_ALIENS_ULTIMATE.length) changeAlienByNumber(nextAlienUL)
                break;

            default:
                break;


        }
    }

    function selectPreviousAlien() {
        switch (omnitrixSelected) {
            case 'omnitrix_og':
                const previousAlienOG: number = ALL_ALIENS_OG.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index - 1
                    return acc
                }, 0)

                if (previousAlienOG === -1) changeAlienByNumber(ALL_ALIENS_OG.length - 1)
                if (viewAlienSelection && previousAlienOG > -1) changeAlienByNumber(previousAlienOG)
                break;

            case 'omnitrix_AlienForce':
                const previousAlienAF: number = ALL_ALIENS_ALIEN_FORCE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index - 1
                    return acc
                }, 0)

                if (previousAlienAF === -1) changeAlienByNumber(ALL_ALIENS_ALIEN_FORCE.length - 1)
                if (viewAlienSelection && previousAlienAF > -1) changeAlienByNumber(previousAlienAF)
                break;

            case 'omnitrix_omniverse':
                const previousAlienOM: number = ALL_ALIENS_OMNIVERSE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index - 1
                    return acc
                }, 0)

                if (previousAlienOM === -1) changeAlienByNumber(ALL_ALIENS_OMNIVERSE.length - 1)
                if (viewAlienSelection && previousAlienOM > -1) changeAlienByNumber(previousAlienOM)
                break;

            case 'omnitrix_ultimate':
                const previousAlienUL: number = ALL_ALIENS_ULTIMATE.reduce((acc, current, index) => {
                    if (current.name === currentAlienInView?.name) acc = index - 1
                    return acc
                }, 0)

                if (previousAlienUL === -1) changeAlienByNumber(ALL_ALIENS_ULTIMATE.length - 1)

                if (viewAlienSelection && previousAlienUL > -1) changeAlienByNumber(previousAlienUL)
                break;

            default:
                break;


        }
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

    return (
        <div data-theme={omnitrixSelected} className='min-h-screen overflow-x-hidden px-0 mx-0'>
            <div className='flex gap-5'>
                <select value={omnitrixSelected} onChange={(e) => {
                    setOmnitrixSelected(e.target.value)
                    setCurrentAlienInView(null)
                }} className='select w-full max-w-xs select-primary'>
                    <option value="omnitrix_og">Omnitrix Og ✅</option>
                    <option value="omnitrix_AlienForce">omnitrix_AlienForce ✅</option>
                    <option value="omnitrix_ultimate">omnitrix_ultimate ✅</option>
                    {/* <option value="omnitrix_reboot">omnitrix_reboot ⛔</option> */}
                    <option value="omnitrix_omniverse">omnitrix_omniverse ✅</option>
                </select>

                <div className='flex gap-5 ml-5 pt-5'>
                    <p>Toggle alien color</p>
                    <input
                        checked={toogleInvertValue}
                        type='checkbox'
                        className='toggle toggle-primary'
                        onChange={() => setToogleInvertValue(prev => !prev)}
                    />
                </div>
            </div>



            {/* <div className={` w-full  ${alienTransformed ? "pt-[15rem]" : omnitrixSelected !== "omnitrix_ultimate" ? "pt-[10rem]" : ""}`}> */}
            <div className={`h-full md:max-h-screen w-full  ${alienTransformed ? "pt-[15rem]" : omnitrixSelected !== "omnitrix_ultimate" ? "pt-[10rem]" : ""}`}>
                {
                    alienTransformed && currentAlienInView ?
                        <div className={`w-[90%] absolute z-50 h-0 flex justify-center items-center translate-y-80`}>
                            <img
                                style={
                                    toogleInvertValue ?
                                        { filter: `invert(46%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(88%)` }
                                        :
                                        {}
                                }
                                // className={`${filterColor()} h-[30rem] brightness-100 drop-shadow-2xl contrast-200 animate-alienRotateUp`}
                                className={` ${currentAlienInView.ultimate && "cursor-pointer"} ${omnitrixSelected !== "omnitrix_ultimate" ? "ml-[5rem] lg:ml-[15rem]" : " ml-[5rem] lg:ml-[10rem]"} ${(currentAlienInView.ultimate?.height?.character !== undefined && activateUltimate) ? `${currentAlienInView.ultimate.height.character}` : currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[40rem]"}  brightness-100 drop-shadow-2xl contrast-200 animate-alienRotateUpLittle lg:animate-alienRotateUp `}
                                src={currentAlienInView.ultimate && activateUltimate ? currentAlienInView.ultimate?.img : currentAlienInView.img}
                                alt="alien_image"
                                // onClick={() => setAlienSelected(true)}
                                onClick={() => {
                                    if (currentAlienInView.ultimate) {
                                        setActivateUltimate(prev => !prev)
                                    }
                                }}
                            />
                        </div>
                        : null
                }

                {
                    omnitrixSelected === "omnitrix_AlienForce" ?
                        <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto h-full py-20  flex justify-center items-center `}>
                            <div className='bg-transparent md:bg-neutral mx-auto h-72 w-full p-20 rounded-md flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0'>
                                <div className='-mr-5 md:mr-[5rem] lg:mr-[2rem] rounded-full bg-accent w-14 h-14 lg:h-36 lg:w-36 flex justify-center items-center'>
                                    <div
                                        className={`btn w-10 h-10 lg:w-28 lg:h-28 rounded-full btn-primary ${viewAlienSelection ? "bg-secondary" : ""}`}
                                        onClick={() => {
                                            setViewAlienSelection(prev => !prev)
                                            setAlienSelected(false)
                                            if (!viewAlienSelection) setCurrentAlienInView(null)
                                            setFlashingLights(false)
                                        }}
                                    />
                                </div>
                                <div className='flex justify-center items-center m-0 md:mr-[10rem]'>
                                    <div
                                        onClick={() => selectNextAlien()}
                                        className={`${viewAlienSelection ? "btn hover:bg-current" : ""} ${alienTransformed ? "bg-secondary" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent flex justify-center items-center `}
                                    />
                                    <div
                                        className={`absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-base-100 flex justify-center items-center  `}
                                    />
                                    <div
                                        onClick={() => activateFlashingLights()}
                                        className={`absolute w-[25rem] h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
                                    >
                                        <div
                                            className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo" : viewAlienSelection ? "animate-omnitrixOutTop" : "animate-omnitrixInTop"}`}
                                        />
                                        <div
                                            className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutBottom" : "animate-omnitrixInBottom"}`}
                                        />
                                    </div>


                                    <div
                                        className={`absolute w-[20rem] h-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full bg-transparent flex flex-col justify-center items-center ${flashingLights ? "hidden" : viewAlienSelection ? "animate-omnitrixInDiamond" : "animate-omnitrixOutDiamond"} `}
                                    >
                                        <div
                                            className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-b-[12rem] lg:border-b-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary -mb-0.5 `}
                                        />
                                        <div
                                            className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-t-[12rem] lg:border-t-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary`}
                                        />
                                        <div className='absolute flex rounded-box justify-center items-center'>
                                            <div className='carousel-item w-full'>
                                                {
                                                    currentAlienInView !== null ?
                                                        <img
                                                            className={`${currentAlienInView.height?.silouette !== undefined ? `${currentAlienInView.height.silouette}` : "h-[15rem] lg:h-[20rem]"} transition-all duration-1000 ${alienTransformed ? "hidden" : "brightness-0"}`}
                                                            src={currentAlienInView.img}
                                                            alt={`${currentAlienInView.img}`}
                                                            onClick={() => {
                                                                setAlienSelected(true)
                                                            }}
                                                        /> :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        omnitrixSelected === "omnitrix_og" ?
                            <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-base-200 mx-auto h-full py-20  flex justify-center items-center `}>
                                <div className='bg-transparent md:bg-black border border-t-[2rem] border-b-[2rem] border-solid border-white mx-auto h-72 w-full p-20 rounded-md flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0'>
                                    <div className='-mr-5 md:mr-[5rem] lg:mr-[2rem] rounded-full bg-accent w-14 h-14 lg:h-36 lg:w-36 flex justify-center items-center'>
                                        <div
                                            className={`btn w-10 h-10 lg:w-28 lg:h-28 rounded-full btn-primary ${viewAlienSelection ? "bg-secondary" : ""}`}
                                            onClick={() => {
                                                setViewAlienSelection(prev => !prev)
                                                setAlienSelected(false)
                                                if (!viewAlienSelection) setCurrentAlienInView(null)
                                                setFlashingLights(false)
                                            }}
                                        />
                                    </div>
                                    <div className='flex justify-center items-center m-0 md:mr-[10rem]'>
                                        <div className='flex justify-center items-center'>
                                            <div
                                                className={`bg-base-300 w-[35rem] h-[35rem] lg:w-[40rem] lg:h-[40rem] rounded-full grid grid-cols-2 gap-60 rotate-45`}
                                            />
                                            <div
                                                onClick={() => selectNextAlien()}
                                                className={` hover:border-black absolute border-[5rem] border-black bg-transparent ${viewAlienSelection ? "btn hover:border-black animate-spin-once" : "btn btn-disable bg-black"} ${alienTransformed ? "" : ""} w-[32rem] h-[32rem] lg:w-[35rem] lg:h-[35rem] rounded-full`}
                                            >
                                                <div className='absolute h-[30rem] w-[30rem] bg-transparent rounded-full flex flex-col gap-[13rem] lg:gap-[15rem] justify-center items-center'>
                                                    <div className={`w-full flex justify-center bg-transparent`}>
                                                        <div
                                                            className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full bg-primary`}
                                                        />
                                                    </div>

                                                    <div className='w-full flex justify-center items-center'>
                                                        <div
                                                            className={`absolute w-full flex justify-start bg-transparent mr-0 lg:mr-16`}
                                                        >
                                                            <div
                                                                className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full bg-primary`}
                                                            />
                                                        </div>
                                                        <div
                                                            className={`absolute w-full flex justify-end bg-transparent mr-0 lg:ml-16`}
                                                        >
                                                            <div
                                                                className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full bg-primary`}
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className={`w-full flex justify-center bg-transparent`}>
                                                        <div
                                                            className={`w-5 h-5 lg:w-5 lg:h-5 rounded-full bg-primary`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div

                                            className={`absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-base-100 flex justify-center items-center  `}
                                        />
                                        <div
                                            onClick={() => activateFlashingLights()}
                                            className={`absolute w-[25rem] h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
                                        >
                                            <div
                                                className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutTop " : "animate-omnitrixInTop "}`}
                                            />
                                            <div
                                                className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutBottom" : "animate-omnitrixInBottom  "}`}
                                            />
                                        </div>


                                        <div
                                            className={`absolute w-[20rem] h-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full bg-transparent flex flex-col justify-center items-center ${flashingLights ? "hidden" : viewAlienSelection ? "animate-omnitrixInDiamond" : "animate-omnitrixOutDiamond"} `}
                                        >
                                            <div
                                                className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-b-[12rem] lg:border-b-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary -mb-0.5 `}
                                            />
                                            <div
                                                className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-t-[12rem] lg:border-t-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary`}
                                            />
                                            <div className='absolute flex rounded-box justify-center items-center'>
                                                <div className='carousel-item w-full'>
                                                    {
                                                        currentAlienInView !== null ?
                                                            <img
                                                                className={`${currentAlienInView.height?.silouette !== undefined ? `${currentAlienInView.height.silouette}` : "h-[15rem] lg:h-[20rem]"} transition-all duration-1000 ${alienTransformed ? "hidden" : "brightness-0"}`}
                                                                src={currentAlienInView.img}
                                                                alt={`${currentAlienInView.img}`}
                                                                onClick={() => {
                                                                    setAlienSelected(true)
                                                                }}
                                                            /> :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            omnitrixSelected === "omnitrix_omniverse" ?
                                <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto h-full py-20  flex justify-center items-center `}>
                                    <div className='bg-transparent md:bg-neutral mx-auto h-72 w-full p-20 rounded-md flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0'>
                                        <div className='absolute h-[18rem] bg-transparent flex gap-16 mr-[80rem]' >
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                        </div>
                                        <div className='invisible z-10 -mr-5 md:mr-[5rem] lg:mr-[2rem] mt-16 md:mt-0 rounded-full bg-accent w-14 h-14 lg:h-36 lg:w-36 flex justify-center items-center'>
                                            <div
                                                className={`btn w-10 h-10 lg:w-28 lg:h-28 rounded-full btn-primary ${viewAlienSelection ? "bg-secondary" : ""}`}
                                            // onClick={() => {
                                            //     setViewAlienSelection(prev => !prev)
                                            //     setAlienSelected(false)
                                            //     if (!viewAlienSelection) setCurrentAlienInView(null)
                                            // }}
                                            />
                                        </div>

                                        <div className={`flex justify-center items-center m-0 md:mr-[10rem] `}>
                                            <div
                                                // onClick={() => selectNextAlien()}
                                                // className={`bg-base-200 ${viewAlienSelection ? "btn hover:bg-primary" : ""} ${alienTransformed ? "bg-secondary" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-2xl bg-accent flex justify-center items-center`}
                                                // className={`bg-base-200 ${viewAlienSelection ? "btn hover:bg-primary" : ""} ${alienTransformed ? "bg-secondary" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-2xl bg-accent flex justify-center items-center`}
                                                className={`bg-transparent border-[5rem] border-x-white border-y-secondary w-[30rem] h-[30rem] lg:w-[40rem] lg:h-[30rem] rounded-2xl bg-accent flex justify-center items-center`}
                                            />
                                            <div
                                                className={`bg-base-200 absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-none flex justify-center items-center`}
                                            />

                                            <div
                                                className={`absolute w-[20rem] h-[20rem] lg:h-[28rem] lg:w-[28rem] rounded-full bg-transparent flex flex-col justify-center items-center `}
                                            >
                                                <div
                                                    className={`absolute w-[20rem] h-[20rem] lg:h-[25rem] lg:w-[25rem] rounded-full  flex flex-col justify-center items-center overflow-hidden bg-black border-4 `}
                                                >
                                                    <div
                                                        className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[10rem]  border-t-[18rem] lg:border-t-[18rem]   border-l-[10rem] lg:border-l-[10rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 `}
                                                    />
                                                    <div
                                                        className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[10rem]  border-b-[18rem] lg:border-b-[18rem]  border-l-[10rem] lg:border-l-[10rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full`}
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                onClick={() => {
                                                    setViewAlienSelection(prev => !prev)
                                                    setAlienSelected(false)
                                                    if (!viewAlienSelection) setCurrentAlienInView(null)
                                                }}
                                                className={`absolute bg-black h-[25rem] w-[25rem] lg:h-[30rem] lg:w-[30rem] flex flex-row justify-center items-center  overflow-hidden ${viewAlienSelection ? "animate-omnitrixCoverOmniverseIn" : "animate-omnitrixCoverOmniverseOut"}`}
                                            >
                                                <div className='flex flex-col gap-[9.5rem]'>
                                                    <div className={`transition-color duration-[5000ms] h-14 w-[20rem] rotate-[50deg] rounded-none ${viewAlienSelection ? "bg-secondary " : "bg-secondary/100 animate-omnitrixFlashingLights"}`} />
                                                    <div className={`transition-color duration-[5000ms] h-14 w-[20rem] -rotate-[50deg] rounded-none' ${viewAlienSelection ? "bg-secondary" : "bg-secondary/100 animate-omnitrixFlashingLights"}`} />
                                                </div>
                                                <div className='flex flex-col gap-[9.5rem]'>
                                                    <div className={`transition-color duration-[5000ms] h-14 w-[20rem] -rotate-[50deg] rounded-none ${viewAlienSelection ? "bg-secondary" : "bg-secondary/100 animate-omnitrixFlashingLights"}`} />
                                                    <div className={`transition-color duration-[5000ms] h-14 w-[20rem] rotate-[50deg] rounded-none' ${viewAlienSelection ? "bg-secondary" : "bg-secondary/100 animate-omnitrixFlashingLights"}`} />
                                                </div>
                                            </div>



                                            <div
                                                onClick={() => selectNextAlien()}
                                                // className={`btn bg-[5rem] bg-primary/0 hover:bg-primary/80 absolute h-[40rem] w-[40rem]  rounded-full flex ${viewAlienSelection ? "animate-spin-once" : "animate-fadeOut"}`}
                                                // className={`btn bg-primary/0 hover:bg-primary/50 border-none absolute h-[40rem] w-[40rem]  rounded-full flex ${viewAlienSelection ? "animate-spin-once" : "animate-fadeOut"}`}
                                                className={`btn btn-outline bg-transparent hover:bg-transparent border-[5rem] border-primary/20 hover:border-primary/50 absolute h-[40rem] w-[40rem]  rounded-full flex ${viewAlienSelection ? "animate-spin-once" : "hidden"}`}
                                            >
                                                <div className=' h-full w-full flex flex-col items-center'>
                                                    <div className={`-mt-[4.8rem] h-fit w-fit p-3 bg-primary `}>
                                                        {
                                                            currentAlienInView !== null ?
                                                                <img
                                                                    className={`h-[3rem] lg:h-[3rem] transition-all duration-1000 ${alienTransformed ? "hidden" : "brightness-0"}`}
                                                                    src={currentAlienInView.img}
                                                                    alt={`${currentAlienInView.img}`}
                                                                />
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                onClick={() => selectNextAlien()}
                                                className={`mt-[20rem] h-[20rem] w-[40rem] bg-transparent absolute flex justify-end items-end ${viewAlienSelection ? "block" : "hidden"}`}
                                            >
                                                <div className='h-[20rem] w-[40rem] bg-transparent border-b-[5rem] border-l-[5rem]  border-r-[5rem] border-primary hover:border-secondary rounded-bl-full rounded-br-full' />
                                            </div>

                                            <div
                                                onClick={() => {
                                                    if (currentAlienInView) setAlienSelected(true)
                                                }}
                                                className={`absolute bg-primary/0 hover:bg-primary/50 w-[30rem] h-[30rem] rounded-full ${viewAlienSelection ? "animate-scaleRingCenter" : "hidden"}`}
                                            />
                                        </div>
                                        <div className='absolute h-[18rem] bg-transparent flex gap-16 ml-[80rem]' >
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                            <div className='h-full bg-black w-2' />
                                        </div>
                                    </div>
                                </div>
                                :
                                omnitrixSelected === "omnitrix_ultimate" ?
                                    <div className={`transition-all duration-700 ${alienTransformed ? "animate-omnitrixRotateDown " : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto h-full flex flex-col-reverse gap-10 md:gap-0 md:grid md:grid-cols-3`}>
                                        <div className='flex md:flex-col justify-center items-center shrink gap-5'>
                                            <div className={`h-56 w-[80%] hidden bg-black rounded-md md:flex md:flex-col gap-28 justify-center items-center`}>
                                                <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                                                <div className='h-[20%] w-[90%] rounded-full bg-lime-500'></div>
                                            </div>
                                            <div className='self-center -mr-5 md:mr-[5rem] lg:mr-[2rem] rounded-md bg-accent w-[8rem] h-[12rem] lg:h-[10rem] lg:w-[15rem] flex justify-center items-center'>
                                                <div
                                                    className={`btn w-[7rem] h-[10rem] lg:w-[12rem] lg:h-28 rounded-md btn-neutral ${viewAlienSelection ? "bg-neutral" : ""}`}
                                                    onClick={() => {
                                                        setActivateUltimate(false)
                                                        setViewAlienSelection(prev => !prev)
                                                        setAlienSelected(false)
                                                        if (!viewAlienSelection) setCurrentAlienInView(null)
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
                                                <div className={`flex gap-5 ${activateUltimate ? "animate-scaleInCenter" : "animate-scaleOutCenter"}`}>
                                                    <div className={`bg-gray-500 h-[50rem] w-[10rem] rotate-45 transition-all duration-500 `}></div>
                                                    <div className={`absolute bg-gray-500 h-[50rem] w-[10rem] -rotate-45 transition-all duration-500`}></div>
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setActivateUltimate(false)
                                                        if (!activateUltimate) selectPreviousAlien()
                                                    }}
                                                    className={`absolute btn hover:bg-gray-400 ${viewAlienSelection ? "" : ""} ${alienTransformed ? "" : ""} w-[33rem] h-[33rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-accent flex justify-center items-center`}
                                                />
                                                <div
                                                    onClick={() => {
                                                        setActivateUltimate(false)
                                                        if (!activateUltimate) selectNextAlien()
                                                    }}
                                                    className={`absolute btn bg-current hover:bg-current ${viewAlienSelection ? "" : ""} ${alienTransformed ? "" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent flex justify-end items-end`}
                                                />
                                            </div>
                                            
                                            <div
                                                className={`absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-full bg-black flex justify-center items-center  `}
                                            />
                                            <div
                                                onClick={() => activateFlashingLights()}
                                                className={`absolute w-[25rem] h-[25rem] lg:h-[30rem] lg:w-[30rem] rounded-full  flex flex-col justify-center items-center overflow-hidden`}
                                            >
                                                <div
                                                    className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo" : viewAlienSelection ? "animate-omnitrixOutTop" : "animate-omnitrixInTop"}`}
                                                />
                                                <div
                                                    className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : viewAlienSelection ? "animate-omnitrixOutBottom" : "animate-omnitrixInBottom"}`}
                                                />
                                            </div>


                                            <div
                                                className={`absolute w-[20rem] h-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full bg-transparent flex flex-col justify-center items-center ${flashingLights ? "hidden" : viewAlienSelection ? "animate-omnitrixInDiamond" : "animate-omnitrixOutDiamond"} `}
                                            >
                                                <div
                                                    className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-b-[12rem] lg:border-b-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary -mb-0.5 `}
                                                />
                                                <div
                                                    className={`mx-auto h-0 w-0 border-r-[8rem] lg:border-r-[12rem] border-t-[12rem] lg:border-t-[15rem] border-l-[8rem] lg:border-l-[12rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary`}
                                                />
                                                <div className='absolute flex rounded-box justify-center items-center'>
                                                    <div className='carousel-item w-full'>
                                                        {
                                                            currentAlienInView !== null ?
                                                                <img
                                                                    className={`${currentAlienInView.height?.silouette !== undefined ? `${currentAlienInView.height?.silouette}` : "h-[15rem] lg:h-[20rem]"} transition-all duration-1000 ${alienTransformed ? "hidden" : "brightness-0"}`}
                                                                    src={currentAlienInView.img}
                                                                    alt={`${currentAlienInView.img}`}
                                                                    onClick={() => {
                                                                        setAlienSelected(true)
                                                                    }}
                                                                /> :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                }
            </div>
        </div>
    )
}

export default Omnitrixes
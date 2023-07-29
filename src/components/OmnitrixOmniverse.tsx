import /* React, */ { useState, useEffect } from 'react'
import { ALL_ALIENS_OMNIVERSE } from '../constants';
import { usePagination } from '@mantine/hooks';

type Alien = {
    name: string;
    img: string;
    height?: {
        silouette?: string;
        character?: string;
    };
    color?: string;
}

const ALL_ALIENS: Alien[] = ALL_ALIENS_OMNIVERSE
console.log(ALL_ALIENS.length)

function OmnitrixOmniverse() {
    const [viewAlienSelection, setViewAlienSelection] = useState<boolean>(false)
    const [alienSelectedTransformed, setAlienSelectedTransformed] = useState<boolean>(false)
    const [transform, setTransform] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)

    const [recharged, setRecharged] = useState(false)
    const [typeOfcharging, setTypeOfcharging] = useState<string>("normal")

    const [animateBackground, setAnimateBackground] = useState("")

    useEffect(() => {
        // if (transform && currentAlienInView !== null) {
        setAnimateBackground("animate-backgroundBen10")
        setTimeout(() => {
            setAnimateBackground("")
        }, 1000)
        // }
    }, [alienSelectedTransformed])

    function getAnimationCharger(type: string): string {
        if (typeOfcharging === "ultra" && type === "border") {
            return "animate-omnitrixFlashingLightsLogoUncharged"
        }

        if (typeOfcharging === "ultra" && type === "background") {
            return "animate-omnitrixFlashingLightsUnCharged"
        }

        if (typeOfcharging === "normal" && type === "border") {
            return "animate-omnitrixFlashingLightsLogo2"
        }

        if (typeOfcharging === "normal" && type === "background") {
            return " animate-omnitrixFlashingLightsCharged"
        }
        return ""
    }

    function caseFunction() {
        if (recharged) {
            setViewAlienSelection(prev => !prev)
            setAlienSelectedTransformed(false)
            if (!viewAlienSelection) {
                setCurrentAlienInView(null)
            }
            setTransform(false)
        }
    }

    function toogleRecharger() {
        setViewAlienSelection(false)
        setAlienSelectedTransformed(false)
        setCurrentAlienInView(null)
        setRecharged(prev => !prev)
        setTransform(false)
    }

    return (
        <div
            data-theme="omnitrix_omniverse"
            className={`${animateBackground !== "" ? `${animateBackground}` : ""} min-h-screen overflow-hidden px-0 mx-0`}
        >
            <div className='flex gap-5 ml-5 pt-5'>
                <p>Toggle recharged</p>
                <input
                    checked={recharged}
                    type='checkbox'
                    className='toggle toggle-primary'
                    onChange={() => toogleRecharger()}
                />
                <select value={typeOfcharging} onChange={(e) => setTypeOfcharging(e.target.value)}>
                    <option value="ultra">ULTRA</option>
                    <option value="normal">NORMAL</option>
                </select>
            </div>

            {/* <div className={`h-full md:max-h-screen ${alienSelectedTransformed ? "pt-[15rem]" : "pt-[15rem]"} rotate-[270deg]`}> */}
            <div className={`h-full md:max-h-screen w-full ${alienSelectedTransformed ? "pt-[15rem]" : "pt-[15rem]"}`}>
                {
                    alienSelectedTransformed && currentAlienInView && transform ?
                        <AlienImage
                            currentAlienInView={currentAlienInView}
                            setCurrentAlienInView={setCurrentAlienInView}
                        />
                        : null
                }

                <div className={` ${alienSelectedTransformed ? "animate-omnitrixRotateDown mt-44" : "animate-omnitrixRotateUp"} bg-transparent md:bg-secondary mx-auto w-full h-full py-20  flex justify-center items-center `}>
                    <div
                        className={
                            `bg-transparent md:bg-neutral 
                            mx-auto h-72 w-full p-20 
                            rounded-md 
                            flex flex-col-reverse md:flex-row justify-center items-center 
                            gap-10 md:gap-0`
                        }
                    >
                        <div className='h-[20rem] w-[60%] border-black border-y-[2rem] -mx-[20rem] hidden md:flex justify-end items-center'>
                            <Lines
                                // margin={'ml-[30rem]'}
                                marginLine='-ml-[1rem]'
                                rotateDirection='left'
                                marginExternal="ml-5"
                            />
                        </div>

                        <ButtonActivateOmnitrix
                            viewAlienSelection={viewAlienSelection}
                            alienSelectedTransformed={alienSelectedTransformed}
                            setViewAlienSelection={setViewAlienSelection}
                            setAlienSelectedTransformed={setAlienSelectedTransformed}
                            setCurrentAlienInView={setCurrentAlienInView}
                            setTransform={setTransform}
                        />

                        {/* <div className={`flex justify-center items-center m-0 md:mr-[10rem] rotate-90`}> */}
                        <div className={`flex justify-center items-center m-0 md:mx-[10rem]`}>
                            <div
                                className={`bg-transparent border-[5rem] border-x-white ${recharged ? 'border-y-primary animate-omnitrixFlashingLightsLogo' : `border-y-secondary ${getAnimationCharger('border')}`} w-[30rem] h-[30rem] lg:w-[40rem] lg:h-[30rem] rounded-2xl bg-accent flex justify-center items-center`}
                            >
                                <GreenBoxesOnTheSidesOfTheHandlerOmnitrix />
                            </div>
                            <div
                                className={`bg-base-200 absolute w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-none flex justify-center items-center`}
                            />

                            <Ben10Logo
                                currentAlienInView={currentAlienInView}
                                setAlienSelectedTransformed={setAlienSelectedTransformed}
                                setCurrentAlienInView={setCurrentAlienInView}
                            />

                            <CaseForOmnitrix
                                caseFunction={caseFunction}
                                recharged={recharged}
                                getAnimationCharger={getAnimationCharger}
                                transform={transform}
                            />

                            <UpperRingAlienSelector
                                viewAlienSelection={viewAlienSelection}
                                currentAlienInView={currentAlienInView}
                                transform={transform}
                                setCurrentAlienInView={setCurrentAlienInView}
                                setViewAlienSelection={setViewAlienSelection}
                            />

                            <LowerRingAlienSelector
                                currentAlienInView={currentAlienInView}
                                viewAlienSelection={viewAlienSelection}
                                setTransform={setTransform}
                                transform={transform}
                                setCurrentAlienInView={setCurrentAlienInView}
                            />
                        </div>

                        <div className='h-[20rem] w-[55%] border-black border-y-[2rem] -mx-[10rem] hidden md:flex justify-start items-center'>
                            <Lines
                                // margin={'ml-[30rem]'}
                                marginLine='ml-[1rem]'
                                rotateDirection='right'
                                marginExternal="-ml-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


type LinesProps = {
    /* margin: string; */
    marginLine: string;
    rotateDirection: string;
    marginExternal: string;
}
function Lines({ /* margin, */ marginLine, rotateDirection, marginExternal }: LinesProps) {
    let howMany = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "h", "i", "j", "k", "l", "m", "m", "t", "u", "V", "w", "X", "y", "z"]

    return (
        // <div className={`${rotateDirection === 'right' ? "rotate-180" : ""} hidden md:absolute h-[18rem] w-[35%] bg-transparent md:flex gap-28  ${margin}`}>
        <div className={`hidden h-[18rem] bg-transparent md:flex gap-28 `}>
            {
                howMany.map((linePattern, index) => {
                    if (index !== 0 && index !== howMany.length - 1) {
                        return (
                            <div key={linePattern} className='bg-transparent flex flex-col justify-center items-center'>
                                <div className={`${marginExternal} h-[25%] bg-base-200 w-2 rounded-2xl`} />
                                <div className={`h-[14%] bg-base-200 -my-2 w-2 ${rotateDirection === "right" ? "-rotate-[50deg]" : "rotate-[40deg]"} rounded-2xl`} />
                                <div className={`${marginLine} -my-[0.1rem] h-[75%] bg-base-200 w-2 rounded-2xl`} />
                                <div className={`h-[14%] bg-base-200 -my-2 w-2 ${rotateDirection === "left" ? "-rotate-[50deg]" : "rotate-[40deg]"} rounded-2xl`} />
                                <div className={`${marginExternal} h-[25%] bg-base-200 w-2 rounded-2xl`} />
                            </div>
                        )
                    }
                    return (
                        <div key={linePattern} className='bg-transparent flex flex-col justify-center items-center'>
                            {/* THIS IS FOR AN EMPTY SPACE BETWEEN THE OMNITRIX AND THE LINES */}
                        </div>
                    )

                })
            }
        </div>
    );
}

type Ben10LogoProps = {
    currentAlienInView: Alien | null;
    setAlienSelectedTransformed: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>;
}
function Ben10Logo({ currentAlienInView, setCurrentAlienInView, setAlienSelectedTransformed/* , viewAlienSelection */ }: Ben10LogoProps) {
    return (
        <div
            className={`absolute w-[20rem] h-[20rem] lg:h-[28rem] lg:w-[28rem] rounded-full bg-transparent flex flex-col justify-center items-center `}
            onClick={() => {
                if (!currentAlienInView) {
                    setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length)]);
                }
                setAlienSelectedTransformed(true);
            }}
        >
            <div
                className={`absolute w-[20rem] h-[20rem] lg:h-[25rem] lg:w-[25rem] rounded-full  flex flex-col justify-center items-center overflow-hidden bg-base-200 border-4 `}
            >
                <div
                    className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[10rem]  border-t-[18rem] lg:border-t-[18rem]   border-l-[10rem] lg:border-l-[10rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 `} />
                <div
                    className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[10rem]  border-b-[18rem] lg:border-b-[18rem]  border-l-[10rem] lg:border-l-[10rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full`} />
            </div>
        </div>
    );
}


type UpperRingAlienSelectorProps = {
    viewAlienSelection: boolean
    currentAlienInView: Alien | null
    transform: boolean;
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>;
    setViewAlienSelection: React.Dispatch<React.SetStateAction<boolean>>
}
function UpperRingAlienSelector({ viewAlienSelection, currentAlienInView, setViewAlienSelection, transform, setCurrentAlienInView }: UpperRingAlienSelectorProps) {
    const ITEMS_PER_PAGE = 5
    const [visibleResults, setVisibleResults] = useState<Alien[]>(ALL_ALIENS.slice(0, ITEMS_PER_PAGE/* simultaneous */))

    const pagination = usePagination({
        total: Math.ceil(ALL_ALIENS.length / ITEMS_PER_PAGE),
        initialPage: 1,
        onChange(page) {
            const start = (page - 1) * ITEMS_PER_PAGE
            const end = start + ITEMS_PER_PAGE
            setVisibleResults(ALL_ALIENS.slice(start, end))

            /* const start = (page - 1) * ITEMS_PER_PAGE
            const end = start + ITEMS_PER_PAGE

            const lastPage = [...ALL_ALIENS.slice(start, end), ALL_ALIENS[0], ALL_ALIENS[1]]

            if (page === pagination.range[pagination.range.length - 1]) {
                setVisibleResults(lastPage)
            } else {
                setVisibleResults(ALL_ALIENS.slice(start, end))
            } */
        }
    })

    const lastPage = pagination.range[pagination.range.length - 1]

    function getMarginTop(index: number): string {
        switch (index) {
            case 0: return "mt-[5rem]"
            case 1: return "-mt-[2rem]"
            case 2: return "-mt-[4rem]"
            case 3: return "-mt-[2rem]"
            case 4: return "mt-[5rem]"
            default: throw new Error('MORE THAN 5 ALIENS PER PAGE')
        }
    }

    return (
        <div
            /* className={
                ` absolute 
                bg-transparent hover:bg-transparent 
                border-[5rem] border-success/80 
                h-[40rem] w-[40rem] 
                rounded-full 
                flex flex-col justify-center items-center ${viewAlienSelection && !transform ? "animate-scaleInCenter" : "animate-scaleOutCenter"}`
            } */
            className={
                ` absolute 
                bg-transparent hover:bg-transparent 
                border-[5rem] border-primary/80 
                h-[40rem] w-[40rem] 
                rounded-full 
                flex flex-col justify-center items-center ${viewAlienSelection && !transform ? "animate-scaleInCenter" : "animate-scaleOutCenter"}`
            }
        >
            <div className='bg-transparent flex gap-[0rem]'>
                <div
                    className={
                        `bg-transparent ${pagination.active !== 1 ? "btn border-transparent hover:btn-primary mt-40 rotate-[50deg] w-[10rem]" : "w-[10rem] invisible btn-disabled"} `
                    }
                    onClick={() => {
                        /* if (pagination.active !== 1) pagination.previous()
                        if (pagination.active === 1) pagination.last() */
                        pagination.previous()
                    }}
                />
                <div
                    className='btn border-transparent bg-transparent hover:bg-base-200 hover:border-y-base-200 mt-[8rem] h-[40%] w-[5rem]'
                    onClick={() => {
                        setViewAlienSelection(false)
                    }}
                />
                <div
                    className={
                        `bg-transparent ${pagination.active !== lastPage ? "btn border-transparent hover:btn-primary mt-40 -rotate-[50deg] w-[10rem]" : "w-[10rem] invisible btn-disabled"} `
                    }
                    onClick={() => {
                        /* if (pagination.active !== lastPage) pagination.next()
                        if (pagination.active === lastPage) pagination.first() */
                        pagination.next()
                    }}
                />
            </div>
            <div className={`h-full w-[50rem] flex flex-col items-center`}>
                <div className={`w-full flex flex-row justify-center gap-10 bg-transparent -mt-[15rem] ${viewAlienSelection && !transform ? "animate-scaleInCenter" : ""}`}>
                    {visibleResults.map((currentAlien, index) => {
                        return (
                            <div
                                key={`${currentAlien.name}-${index}`}
                                className={
                                    `${getMarginTop(index)}
                                    cursor-pointer
                                    rounded-2xl
                                    h-fit w-fit p-3 ${currentAlienInView === currentAlien ? "bg-primary" : "bg-secondary"}  
                                    hover:bg-primary`
                                }
                            >
                                <img
                                    className={`h-[4rem] lg:h-[4rem] w-[3rem] transition-all duration-1000 brightness-0`}
                                    src={currentAlien.img}
                                    alt={`${currentAlien.name}`}
                                    onClick={() => {
                                        if (!currentAlienInView) setCurrentAlienInView(currentAlien)
                                        if (currentAlienInView) setCurrentAlienInView(null)
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
}


type LowerRingAlienSelectorProps = {
    currentAlienInView: Alien | null
    viewAlienSelection: boolean;
    setTransform: React.Dispatch<React.SetStateAction<boolean>>;
    transform: boolean;
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>;
}
function LowerRingAlienSelector({ currentAlienInView, viewAlienSelection, setTransform, transform, setCurrentAlienInView }: LowerRingAlienSelectorProps) {
    return (
        <div
            onClick={() => {
                if (currentAlienInView) {
                    setTransform(true)
                } else {
                    setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length)])
                }
            }}
            className={`mt-[20rem] h-[20rem] w-[40rem] bg-transparent absolute flex justify-end items-end ${viewAlienSelection && !transform ? "animate-fadeInLowerSelector" : "hidden"}`}
        >
            <div
                /* className={
                    `btn  
                    border-t-transparent hover:border-t-transparent hover:bg-transparent 
                    h-[20rem] w-[40rem] 
                    bg-transparent 
                    border-b-[5rem] border-l-[5rem]  border-r-[5rem] ${currentAlienInView ? "btn-primary border-primary/80" : "btn-success border-success/80"}
                    rounded-bl-full rounded-br-full 
                    ${viewAlienSelection ? "" : "hidden"}`
                } */

                className={
                    `btn  
                    border-t-transparent hover:border-t-transparent hover:bg-transparent 
                    h-[20rem] w-[40rem] 
                    bg-transparent 
                    border-b-[5rem] border-l-[5rem]  border-r-[5rem] ${currentAlienInView ? "btn-primary border-primary/80" : "btn-primary border-primary/80"}
                    rounded-bl-full rounded-br-full 
                    ${viewAlienSelection ? "" : "hidden"}`
                }
            />
        </div>
    );
}


type CaseForOmnitrixProps = {
    caseFunction: () => void,
    recharged: boolean;
    getAnimationCharger: (type: string) => string;
    transform: boolean;
}
function CaseForOmnitrix({ caseFunction, recharged, getAnimationCharger, transform }: CaseForOmnitrixProps) {
    return (
        <div
            onClick={() => caseFunction()}
            className={`${recharged ? "cursor-default" : "cursor-not-allowed"} absolute bg-base-200 h-[25rem] w-[25rem] lg:h-[30rem] lg:w-[30rem] flex flex-row justify-center items-center  overflow-hidden ${transform ? "animate-omnitrixCoverOmniverseIn" : "animate-omnitrixCoverOmniverseOut"}`}
        >

            <div className='flex flex-col gap-[9.5rem]'>
                <div className={` h-14 w-[20rem] rotate-[50deg] rounded-none ${recharged ? "bg-primary/100 animate-omnitrixFlashingLightsCharged" : `bg-secondary ${getAnimationCharger('background')}`} `} />
                <div className={` h-14 w-[20rem] -rotate-[50deg] rounded-none' ${recharged ? "bg-primary animate-omnitrixFlashingLightsCharged" : `bg-secondary ${getAnimationCharger('background')}`} `} />
            </div>
            <div className='flex flex-col gap-[9.5rem]'>
                <div className={` h-14 w-[20rem] -rotate-[50deg] rounded-none ${recharged ? "bg-primary animate-omnitrixFlashingLightsCharged" : `bg-secondary ${getAnimationCharger('background')}`} `} />
                <div className={` h-14 w-[20rem] rotate-[50deg] rounded-none' ${recharged ? "bg-primary animate-omnitrixFlashingLightsCharged" : `bg-secondary ${getAnimationCharger('background')}`} `} />
            </div>
        </div>
    );
}


type ButtonActivateOmnitrixProps = {
    viewAlienSelection: boolean;
    alienSelectedTransformed: boolean;
    setViewAlienSelection: React.Dispatch<React.SetStateAction<boolean>>;
    setAlienSelectedTransformed: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>;
    setTransform: React.Dispatch<React.SetStateAction<boolean>>;
}
function ButtonActivateOmnitrix({ viewAlienSelection, alienSelectedTransformed, setViewAlienSelection, setAlienSelectedTransformed, setCurrentAlienInView, setTransform }: ButtonActivateOmnitrixProps) {
    return (
        <div className={`${alienSelectedTransformed ? 'visible' : "invisible"} z-10 -mr-5 md:mr-[5rem] lg:mr-[2rem] mt-16 md:mt-0 rounded-full bg-accent w-14 h-14 lg:h-36 lg:w-36 flex justify-center items-center`}>
            <div onClick={() => {
                setViewAlienSelection(prev => !prev);
                setAlienSelectedTransformed(false);
                if (!viewAlienSelection) {
                    setCurrentAlienInView(null)
                };
                setTransform(false)
            }} className={`btn w-10 h-10 lg:w-28 lg:h-28 rounded-full btn-primary ${viewAlienSelection ? "bg-secondary" : ""}`} />
        </div>
    );
}


function AlienImage({ currentAlienInView, setCurrentAlienInView }: { currentAlienInView: Alien; setCurrentAlienInView: React.Dispatch<React.SetStateAction<Alien | null>>; }) {
    const [hovering, setHovering] = useState(false)

    return (
        <div className={`w-[90%] absolute z-50 h-0 flex justify-center items-center translate-y-60 md:translate-y-80`}>
            <img
                style={
                    hovering ?
                        { filter: 
                            `drop-shadow(5px 5px 5px ${currentAlienInView.color ? `${currentAlienInView.color}` : "green"}) 
                            contrast(2)` 
                        }
                        :
                        {}
                }
                className={
                    `ml-[5rem] lg:ml-[5rem] 
                    ${currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[35rem] mt-5"}  
                    brightness-100
                    contrast-200 
                    animate-alienRotateUpLittle lg:animate-alienRotateUp`
                }
                src={currentAlienInView.img}
                alt={currentAlienInView.name}
                onClick={() => setCurrentAlienInView(ALL_ALIENS[Math.floor(Math.random() * ALL_ALIENS.length - 1)])}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            />
        </div >
    );
}


function GreenBoxesOnTheSidesOfTheHandlerOmnitrix({ }) {
    return (
        <div className='bg-transparent flex justify-start gap-[26rem] lg:gap-[35rem]'>
            <div className='bg-transparent flex flex-col justify-center gap-[2rem]'>
                <div className='bg-secondary h-8 w-8' />
                <div className='bg-secondary h-8 w-8' />
                <div className='bg-secondary h-8 w-8' />

            </div>
            <div className='bg-transparent flex flex-col justify-center gap-[2rem]'>
                <div className='bg-secondary h-8 w-8' />
                <div className='bg-secondary h-8 w-8' />
                <div className='bg-secondary h-8 w-8' />
            </div>
        </div>
    );
}
export default OmnitrixOmniverse
import /* React, */ { useState } from 'react'
import { ALL_ALIENS_ULTIMATE } from '../constants';

type Alien = {
    name: string;
    img: string;
    height?: {
        silouette?: string;
        character?: string;
    };
    ultimate?: Alien
}

const ALL_ALIENS: Alien[] = ALL_ALIENS_ULTIMATE

function OmnitrixUltimate() {
    const [alienTransformed, setAlienTransformed] = useState<boolean>(false)
    const [currentAlienInView, setCurrentAlienInView] = useState<Alien | null>(null)
    const [toogleInvertValue, setToogleInvertValue] = useState<boolean>(false)
    const [flashingLights, setFlashingLights] = useState<boolean>(false)

    const [activateUltimate, setActivateUltimate] = useState<boolean>(false)

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
        setCurrentAlienInView(null)
        setFlashingLights(true)
        setInterval(() => {
            setFlashingLights(false)
        }, 5000)
    }

    return (
        <div
            data-theme="omnitrix_ultimate"
            className={`min-h-screen overflow-x-hidden px-0 mx-0 ${alienTransformed || flashingLights ? "animate-backgroundBen10" : ""}`}
        // className='h-full w-full min-h-screen overflow-y-hidden'
        >
            <div className='flex gap-5'>
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

            <div className={`h-full lg:max-h-screen w-full  ${alienTransformed ? "pt-[15rem]" : ""}`}>
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
                                    //shadow-xl shadow-black 
                                    //h-[30rem] lg:h-[40rem]  
                                    className={
                                        `${currentAlienInView.ultimate && "cursor-pointer"} 
                                        shadow-xl shadow-black 
                                        ${" ml-[5rem] lg:ml-[10rem]"} 
                                        brightness-100 
                                        ${(currentAlienInView.ultimate?.height?.character !== undefined && activateUltimate) ? `${currentAlienInView.ultimate.height.character}` : currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[40rem]"}
                                        drop-shadow-2xl 
                                        contrast-200 
                                        animate-alienRotateUpLittle lg:animate-alienRotateUp `
                                    }
                                    src={currentAlienInView.ultimate && activateUltimate ? currentAlienInView.ultimate?.img : currentAlienInView.img}
                                    alt="alien_image"
                                    onClick={() => {
                                        if (currentAlienInView.ultimate) {
                                            setActivateUltimate(prev => !prev)
                                        }
                                    }}
                                />
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
                                    if (alienTransformed) setAlienTransformed(false)
                                    if (!alienTransformed) setAlienTransformed(true)
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
                                className={`absolute btn hover:bg-gray-400  ${alienTransformed ? "" : ""} w-[33rem] h-[33rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-accent flex justify-center items-center`}
                            />
                            <div
                                onClick={() => {
                                    setActivateUltimate(false)
                                    if (!activateUltimate) selectNextAlien()
                                }}
                                className={`absolute btn bg-current hover:bg-current  ${alienTransformed ? "" : ""} w-[28rem] h-[28rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-accent flex justify-end items-end`}
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
                                className={`mx-auto h-0 w-0 border-r-[10rem] lg:border-r-[15rem]  border-t-[18rem] lg:border-t-[23rem]   border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-t-primary rounded-full -mb-32 ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`}
                            />
                            <div
                                className={`mx-auto  h-0 w-0  border-r-[10rem] lg:border-r-[15rem]  border-b-[18rem] lg:border-b-[23rem]  border-l-[10rem] lg:border-l-[15rem] border-solid  border-r-transparent  border-l-transparent  border-b-primary rounded-full ${flashingLights ? "animate-omnitrixFlashingLightsLogo " : ""}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default OmnitrixUltimate


/*// <div className={`w-[90%] absolute z-50 h-0 flex justify-center items-center translate-y-80`}>
                        <div className={`w-[60%] h-[100%] absolute z-50 flex justify-center items-center translate-y-80`}></div> 
                    <div className={`card image-full object-contain w-full h-full`}>
                            <figure className='relative rounded-md w-full flex justify-center items-center'>
                                <img
                                    style={
                                        toogleInvertValue ?
                                            { filter: `invert(46%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(88%)` }
                                            :
                                            {}
                                    }
                                    // className={
                                    //     `shadow-xl shadow-black 
                                    //     ${currentAlienInView.ultimate && "cursor-pointer"} 
                                    //     ${" ml-[5rem] lg:ml-[10rem]"} 
                                    //     ${(currentAlienInView.ultimate?.height?.character !== undefined && activateUltimate) ? `${currentAlienInView.ultimate.height.character}` : currentAlienInView.height?.character !== undefined ? `${currentAlienInView.height.character}` : "h-[30rem] lg:h-[40rem]"}  
                                    //     brightness-100 
                                    //     drop-shadow-2xl 
                                    //     contrast-200 
                                    //     animate-alienRotateUpLittle lg:animate-alienRotateUp `
                                    // }
                                    className={
                                        `shadow-xl shadow-black 
                                        ${currentAlienInView.ultimate && "cursor-pointer"} 
                                        ${" ml-[5rem] lg:ml-[10rem]"} 
                                        w-full h-full
                                        brightness-100 
                                        drop-shadow-2xl 
                                        contrast-200 
                                        animate-alienRotateUpLittle lg:animate-alienRotateUp `
                                    }
                                    src={currentAlienInView.ultimate && activateUltimate ? currentAlienInView.ultimate?.img : currentAlienInView.img}
                                    alt={currentAlienInView.ultimate && activateUltimate ? currentAlienInView.ultimate?.name : currentAlienInView.name}
                                    onClick={() => {
                                        if (currentAlienInView.ultimate) {
                                            setActivateUltimate(prev => !prev)
                                        }
                                    }}
                                />
                            </figure>
                        </div> </div>*/
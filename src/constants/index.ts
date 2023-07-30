import { Alien } from "../types";

//https://www.google.com/search?q=all+ben+10+aliens+first+appearance&client=opera-gx&hs=awI&bih=927&biw=970&hl=en&sxsrf=AB5stBjj-1S2HzAALrtoDaEEh2lrLLrRWA%3A1690040313472&ei=-fe7ZLqxHIPj5NoPlIqosAg&oq=all+ben+10+aliens+first+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGFsbCBiZW4gMTAgYWxpZW5zIGZpcnN0ICoCCAAyBRAhGKABSIxYUMEdWPRNcAF4AZABAJgB-gGgAdcNqgEGMS4xMS4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAjGIoFGCfCAggQABiKBRiRAsICBRAAGIAEwgIFEC4YgATCAgcQIxiwAhgnwgIHEAAYDRiABMICBxAuGA0YgATCAgYQABgHGB7CAgcQABiKBRhDwgIKEAAYgAQYFBiHAsICBhAAGBYYHsICCBAAGIoFGIYD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp
export const ALL_ALIENS_OG: Alien[] = [
    {
        name: 'Wildmutt',
        img: '/aliens/og/Wildmutt.png',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'Way_Big',
        img: '/aliens/og/Way_Big.png',
        height: {
            // silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[50rem] -mt-[15rem] lg:-mt-[10rem]'
        }
    },
    {
        name: 'Diamondhead',
        img: '/aliens/og/Diamondhead.png'
    },
    {
        name: 'Heatblast',
        img: '/aliens/og/Heatblast.png'
    },
    {
        name: 'benvictor_Frankenstrike',
        img: '/aliens/og/benvictor_Frankenstrike.png'
    },
    {
        name: 'benwolf_Blitzwolfer',
        img: '/aliens/og/benwolf_Blitzwolfer.png'
    },
    {
        name: 'Cannonbolt',
        img: '/aliens/og/Cannonbolt.webp'
    },

    {
        name: 'Upgrade',
        img: '/aliens/og/Upgrade.webp'
    },
    {
        name: 'Buzzshock',
        img: '/aliens/og/Buzzshock.png',
        height: {
            // silouette: 'h-[15rem]',
            character: 'h-[15rem] mt-[17rem] lg:mt-[25rem]'
        }
    },
    {
        name: 'grey_matter',
        img: '/aliens/og/grey_matter.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[20rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'ghostfreak',
        img: '/aliens/og/ghostfreak.png'
    },
    {
        name: 'benmummy_snare_oh',
        img: '/aliens/og/benmummy_snare_oh.png'
    },
    {
        name: 'Four_arms',
        img: '/aliens/og/Four_arms.png'
    },
    {
        name: 'Ditto',
        img: '/aliens/og/Ditto.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'eye_guy',
        img: '/aliens/og/eye_guy.png',
    },
    {
        name: 'Upchuck',
        img: '/aliens/og/Upchuck.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Arctiguana',
        img: '/aliens/og/Arctiguana.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }

    },
    {
        name: 'XLR8',
        img: '/aliens/og/XLR8.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
    {
        name: 'Wildvine',
        img: '/aliens/og/Wildvine.png'
    },
    {
        name: 'Stinkfly',
        img: '/aliens/og/Stinkfly.png'
    },
    {
        name: 'Spitter',
        img: '/aliens/og/Spitter.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            // character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
    {
        name: 'Ripjaws',
        img: '/aliens/og/Ripjaws.png'
    },

].sort(() => Math.random() - 0.5) //shuffle array âœ…

export const ALL_ALIENS_OG_OMNIVERSE: Alien[] = [
    //fedback
    //clockwork
    {
        name: 'clockwork',
        img: '/aliens/omniverse/young/clockwork.png' //âœ…
    },
    {
        name: 'feedback',
        img: '/aliens/omniverse/young/feedback.png' //âœ…
    },
    {
        name: 'Diamondhead',
        img: '/aliens/omniverse/young/Diamondhead.png' //âœ…
    },
    {
        name: 'Way_Big',
        img: '/aliens/omniverse/Way_Big.png', //âœ…
        height: {
            // silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[50rem] -mt-[15rem] lg:-mt-[10rem]'
        }
    },
    /*{
        name: 'Spitter',
        img: '/aliens/omniverse/young/Spitter.png', //â­•
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            // character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
     */

    {
        name: 'Wildmutt',
        img: '/aliens/omniverse/young/Wildmutt.png', //âœ…
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        }
    },

    {
        name: 'Heatblast',
        img: '/aliens/omniverse/heatblast.png' //âœ…
    },
    {
        name: 'benvictor_Frankenstrike',
        img: '/aliens/omniverse/young/benvictor_Frankenstrike.png' //âœ…
    },
    {
        name: 'benwolf_Blitzwolfer',
        img: '/aliens/omniverse/young/benwolf_Blitzwolfer.png'//âœ…
    },
    {
        name: 'Cannonbolt',
        img: '/aliens/omniverse/young/Cannonbolt.png' //âœ…
    },

    {
        name: 'Upgrade',
        img: '/aliens/omniverse/young/Upgrade.png' //âœ…
    },
    {
        name: 'Buzzshock',
        img: '/aliens/omniverse/young/Buzzshock.png',//âœ…
        height: {
            // silouette: 'h-[15rem]',
            character: 'h-[15rem] mt-[17rem] lg:mt-[25rem]'
        }
    },
    {
        name: 'grey_matter',
        img: '/aliens/omniverse/young/grey_matter.png', //âœ…
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[20rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'ghostfreak',
        img: '/aliens/omniverse/young/ghostfreak.png'//âœ…
    },
    {
        name: 'benmummy_snare_oh',
        img: '/aliens/omniverse/young/benmummy_snare_oh.png' //âœ…
    },
    {
        name: 'Four_arms',
        img: '/aliens/omniverse/young/Four_arms.png' //âœ…
    },

    {
        name: 'Ditto',
        img: '/aliens/omniverse/young/Ditto.png', //âœ…
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'eye_guy',
        img: '/aliens/omniverse/young/eye_guy.png', //âœ…
        height: {
            // silouette: '',
            character: 'h-[30rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Upchuck',
        img: '/aliens/omniverse/young/Upchuck.png', //âœ…
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Arctiguana',
        img: '/aliens/omniverse/young/Arctiguana.png', //âœ…
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }

    },
    {
        name: 'XLR8',
        img: '/aliens/omniverse/young/XLR8.png', //âœ…
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
    {
        name: 'Wildvine',
        img: '/aliens/omniverse/young/Wildvine.png' //âœ…
    },
    {
        name: 'Stinkfly',
        img: '/aliens/omniverse/young/Stinkfly.png',//âœ…
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[45rem] lg:h-[50rem] -mt-[10rem] lg:-mt-[8rem]'
        }
    },

    {
        name: 'Ripjaws',
        img: '/aliens/omniverse/young/Ripjaws.png' //âœ…
    },


].sort(() => Math.random() - 0.5) //shuffle array âœ…

export const ALL_ALIENS_ALIEN_FORCE: Alien[] = [
    {
        name: 'cannonbolt',
        img: '/aliens/alien_force/cannonbolt.png'
    },
    {
        name: 'bigChill',
        img: '/aliens/alien_force/bigChill.png',
        height: {
            // silouette: 'h-[20rem] lg:h-[18rem]',
            character: 'h-[30rem] ml-[10rem] lg:ml-[30rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
        }
    },
    {
        name: 'Upchuck',
        img: '/aliens/alien_force/Upchuck.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Nanomech',
        img: '/aliens/alien_force/Nanomech.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[20rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'WayBig',
        img: '/aliens/alien_force/WayBig.png',
        height: {
            // silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[50rem] -mt-[15rem] lg:-mt-[10rem]'
        }
    },
    {
        name: 'Spidermonkey',
        img: '/aliens/alien_force/Spidermonkey.png',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'Goop',
        img: '/aliens/alien_force/Goop.png'
    },
    {
        name: 'Chromastone',
        img: '/aliens/alien_force/Chromastone.png'
    },
    {
        name: 'Brainstorm',
        img: '/aliens/alien_force/Brainstorm.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] mt-[8rem] lg:mt-[12rem]'
        }
    },
    {
        name: 'Humungousaur',
        img: '/aliens/alien_force/humungousaur.png'
    },
    {
        name: 'Rath',
        img: '/aliens/alien_force/rath.png'
    },
    {
        name: 'Swampfire',
        img: '/aliens/alien_force/swampfire.png'
    },
    {
        name: 'Diamondhead',
        img: '/aliens/alien_force/diamondhead.png'
    },

    {
        name: 'Alien X',
        img: '/aliens/alien_force/alienX.png'
    },

    {
        name: 'Lodestar',
        img: '/aliens/alien_force/Lodestar.webp'
    },
    {
        name: 'Jetray',
        img: '/aliens/alien_force/Jetray.webp',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[30rem] mt-[5rem] lg:mt-[10rem]'
        },
    },
    {
        name: 'echo_echo',
        img: '/aliens/alien_force/echo_echo.png',
        height: {
            // silouette: 'h-[10rem]',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
].sort(() => Math.random() - 0.5) //shuffle array âœ…

export const ALL_ALIENS_ULTIMATE: Alien[] = [
    //NEW
    {
        name: 'amphibian',
        img: '/aliens/ultimate/amphibian.png',
    },
    {
        name: 'Armodrillo',
        img: '/aliens/ultimate/Armodrillo.png',
    },
    {
        name: 'WaterHazard',
        img: '/aliens/ultimate/WaterHazard.png',
    },
    {
        name: 'NRG',
        img: '/aliens/ultimate/NRG.png',
    },
    {
        name: 'Terraspin',
        img: '/aliens/ultimate/Terraspin.png',
    },
    {
        name: 'eatle',
        img: '/aliens/ultimate/eatle.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[40rem] lg:h-[50rem] -mt-[5rem] lg:-mt-[5rem]'
        }
    },
    {
        name: 'Jury_Rigg',
        img: '/aliens/ultimate/Jury_Rigg.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'ChamAlien',
        img: '/aliens/ultimate/ChamAlien.png',
    },
    {
        name: 'Fasttrack',
        img: '/aliens/ultimate/Fasttrack.png',
        height: {
            // silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[40rem] mt-[0rem] lg:mt-[5rem]'
        },
    },
    {
        name: 'Clockwork',
        img: '/aliens/ultimate/Clockwork.png',
    },
    {
        name: 'Shocksquatch',
        img: '/aliens/ultimate/Shocksquatch.png',
    },


    //ULTIMATE
    {
        name: 'cannonbolt',
        img: '/aliens/alien_force/cannonbolt.png',
        ultimate: {
            name: 'Ultimate_Cannonbolt',
            img: '/aliens/ultimate/Ultimate_Cannonbolt.png'
        }
    },
    {
        name: 'WayBig',
        img: '/aliens/alien_force/WayBig.png',
        height: {
            // silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[50rem] -mt-[10rem] lg:-mt-[5rem]'
        },
        ultimate: {
            name: 'ultimate_wayBig',
            img: '/aliens/ultimate/ultimate_wayBig.png'
        }
    },
    {
        name: 'Spidermonkey',
        img: '/aliens/alien_force/Spidermonkey.png',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[15rem] lg:mt-[20rem]'
        },
        ultimate: {
            name: 'Ultimate_spidermonkey',
            img: '/aliens/ultimate/Ultimate_spidermonkey.png',
            height: {
                // silouette: 'h-[10rem]',
                character: 'h-[40rem] mt-[2rem] lg:mt-[5rem]'
            },
        }
    },
    {
        name: 'Humungousaur',
        img: '/aliens/alien_force/humungousaur.png',
        ultimate: {
            name: 'ultimate_Humungousaur',
            img: '/aliens/ultimate/ultimate_Humungousaur.png'
        }
    },
    {
        name: 'Swampfire',
        img: '/aliens/alien_force/swampfire.png',
        ultimate: {
            name: 'ultimate_swampfire',
            img: '/aliens/ultimate/ultimate_swampfire.png'
        }
    },
    {
        name: 'bigChill',
        img: '/aliens/alien_force/bigChill.png',
        height: {
            // silouette: 'h-[20rem] lg:h-[18rem]',
            character: 'h-[30rem] ml-[10rem] lg:ml-[25rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
        },
        ultimate: {
            name: 'Ultimate_Big_Chill',
            img: '/aliens/ultimate/Ultimate_Big_Chill.png',
            height: {
                // silouette: 'h-[20rem] lg:h-[18rem]',
                character: 'h-[30rem] ml-[10rem] lg:ml-[18rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
            },
        }
    },
    {
        name: 'echo_echo',
        img: '/aliens/alien_force/echo_echo.png',
        height: {
            // silouette: 'h-[10rem]',
            character: 'h-[23rem] mt-[15rem] lg:mt-[23rem]'
        },
        ultimate: {
            name: 'Ultimate_EchoEcho',
            img: '/aliens/ultimate/Ultimate_EchoEcho.png',
            height: {
                // silouette: 'h-[10rem]',
                character: 'h-[40rem] mt-[2rem] lg:mt-[5rem]'
            },
        }
    },
    {
        name: 'wildmutt',
        img: '/aliens/ultimate/wildmutt.png',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[15rem] lg:mt-[20rem]'
        },
        ultimate: {
            name: 'UltimateWildmuttOfficial',
            img: '/aliens/ultimate/UltimateWildmuttOfficial.png'
        }
    },

    //REPETEATED FROM PREVIOUS OMNITRIX
    //not founded/unused in the series
    //arctiguana
    //blitzwolfer
    //buzzshock
    //ditto
    //eye guy
    //frankerstrike
    //grey matter
    //heatblast
    //ripjaws
    //snare oh
    //spitter
    //stinkfly
    //upgrade
    //xlr8
    //ghostfreak

    {
        name: 'Nanomech',
        img: '/aliens/alien_force/Nanomech.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[28rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'Brainstorm',
        img: '/aliens/alien_force/Brainstorm.png',
        height: {
            // silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] ml-0 lg:ml-[20rem] mt-[15rem] lg:mt-[15rem] '
        }
    },
    {
        name: 'Upchuck',
        img: '/aliens/alien_force/Upchuck.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[23rem] mt-[15rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'FourArms',
        img: '/aliens/ultimate/FourArms.png',
    }
    , ...ALL_ALIENS_ALIEN_FORCE
].reduce((acc: Alien[], curr: Alien) => {
    let isIt: boolean = false
    acc.forEach(element => {
        if (element.name === curr.name) {
            isIt = true
        }
    });

    if (isIt === false) acc.push(curr)
    return acc
}, []).sort(() => Math.random() - 0.5) //shuffle array âœ…

export const ALL_ALIENS_OMNIVERSE: Alien[] = [
    // ORIGINAL -----------------------------------------------------------------------
    {
        name: 'Wildmutt',
        img: '/aliens/omniverse/Wildmutt.png',
        height: {
            silouette: 'h-[10rem] lg:h-[15rem]',
            character: 'h-[20rem] lg:h-[30rem] ml-[7rem] mt-[10rem] lg:mt-[5rem]'
        },
        color: 'orange'
    },
    {
        name: 'fourArms',
        img: '/aliens/omniverse/fourArms.png',
        color: 'red'
    },
    {
        name: 'GreyMatter',
        img: '/aliens/omniverse/GreyMatter.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'gray'
    },
    {
        name: 'XLR8',
        img: '/aliens/omniverse/XLR8.png',
        color: 'blue'
    },
    {
        name: 'Upgrade',
        img: '/aliens/omniverse/Upgrade.png'
    },
    {
        name: 'Diamondhead',
        img: '/aliens/omniverse/Diamondhead.png',
        color: 'cyan'
    },
    {
        name: 'Ripjaws',
        img: '/aliens/omniverse/Ripjaws.png'
    },
    {
        name: 'Stinkfly',
        img: '/aliens/omniverse/Stinkfly.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[45rem] lg:h-[50rem] -mt-[10rem] lg:-mt-[8rem]'
        }
    },
    {
        name: 'Ghostfreak',
        img: '/aliens/omniverse/Ghostfreak.png'
    },
    {
        name: 'Heatblast',
        img: '/aliens/omniverse/heatblast.png',
        color: 'yellow'
    },
    {
        name: 'Cannonbolt',
        img: '/aliens/omniverse/Cannonbolt.png',
        color: 'yellow'
    },
    {
        name: 'Wildvine',
        img: '/aliens/omniverse/Wildvine.png',
        color: 'lime'
    },
    {
        name: 'Blitzwolfer',
        img: '/aliens/omniverse/blitzwolfer.png',
        height: {
            silouette: 'h-[10rem] lg:h-[15rem]',
            character: 'h-[20rem] lg:h-[25rem] ml-[7rem] mt-[10rem] lg:mt-[10rem]'
        }
    },
    {
        name: 'snareOh',
        img: '/aliens/omniverse/snareOh.png',
        color: 'yellow'
    },
    {
        name: 'Frankenstrike',
        img: '/aliens/omniverse/Frankenstrike.png',
        color: 'blue'
    },
    {
        name: 'Upchuck1',
        img: '/aliens/omniverse/Upchuck1.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Ditto',
        img: '/aliens/omniverse/Ditto.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'EyeGuy',
        img: '/aliens/omniverse/EyeGuy.png'
    },
    {
        name: 'Way_Big',
        img: '/aliens/omniverse/Way_Big.png',
        height: {
            // silouette: 'h-[10rem] lg:h-[15rem]',
            character: 'h-[40rem] lg:h-[50rem] mr-[5rem] -mt-[10rem] lg:-mt-[10rem]'
        },
        color: 'red'
    },
    {
        name: 'spitter',
        img: '/aliens/omniverse/spitter.png'
    },
    {
        name: 'Buzzshock',
        img: '/aliens/omniverse/Buzzshock.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'blue'
    },
    {
        name: 'Arctiguana',
        img: '/aliens/omniverse/Arctiguana.png',
        color: 'cyan'
    },
    // ORIGINAL -----------------------------------------------------------------------




















    //ALIEN FORCE -----------------------------------------------------------------------
    {
        name: 'Swampfire',
        img: '/aliens/omniverse/Swampfire.png',
        color: 'red'
    },
    {
        name: 'Goop',
        img: '/aliens/omniverse/Goop.png'
    },
    {
        name: 'Spidermonkey',
        img: '/aliens/omniverse/Spidermonkey.png',
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        },
        color: 'blue'
    },
    {
        name: 'BigChill',
        img: '/aliens/omniverse/BigChill.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[45rem] lg:h-[50rem] -mt-[10rem] lg:-mt-[8rem]'
        },
        color: 'blue'
    },
    {
        name: 'Humungousaur',
        img: '/aliens/omniverse/Humungousaur.png',
        color: 'brown'
    },
    {
        name: 'brainstorm',
        img: '/aliens/omniverse/brainstorm.png',
        height: {
            silouette: 'h-[10rem] lg:h-[15rem]',
            character: 'h-[20rem] lg:h-[25rem] ml-[7rem] mt-[10rem] lg:mt-[10rem]'
        },
        color: 'brown'
    },
    {
        name: 'jetray',
        img: '/aliens/omniverse/jetray.png',
        color: 'red'
    },
    {
        name: 'Chromastone',
        img: '/aliens/omniverse/Chromastone.png',
        color: 'purple'
    },
    {
        name: 'EchoEcho',
        img: '/aliens/omniverse/EchoEcho.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'AlienX',
        img: '/aliens/omniverse/AlienX.png',
        color: 'white'
    },
    {
        name: 'Lodestar',
        img: '/aliens/omniverse/Lodestar.png',
        color: 'yellow'
    },
    {
        name: 'Rath',
        img: '/aliens/omniverse/Rath.png',
        color: 'orange'
    },
    {
        name: 'Upchuck2',
        img: '/aliens/omniverse/Upchuck2.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    //ALIEN FORCE -----------------------------------------------------------------------
    


















    

    //ULTIMATE -----------------------------------------------------------------------
    {
        name: 'Nanomech',
        img: '/aliens/omniverse/Nanomech.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'waterHazard',
        img: '/aliens/omniverse/waterHazard.png',
        color: 'blue'
    },
    {
        name: 'AmpFibian',
        img: '/aliens/omniverse/AmpFibian.png',
        color: 'cyan'
    },
    {
        name: 'Armodrillo',
        img: '/aliens/omniverse/Armodrillo.png',
        color: 'yellow'
    },
    {
        name: 'Terraspin',
        img: '/aliens/omniverse/Terraspin.png',
        color: 'brown'
    },
    {
        name: 'NRG',
        img: '/aliens/omniverse/NRG.png',
        color: 'orange'
    },
    {
        name: 'fastrack',
        img: '/aliens/omniverse/fastrack.png',
        color: 'blue'
    },
    {
        name: 'clockwork',
        img: '/aliens/omniverse/clockwork.png',
        color: 'yellow'
    },
    {
        name: 'ChamAlien',
        img: '/aliens/omniverse/ChamAlien.png',
        color: 'purple'
    },
    {
        name: 'Eatle',
        img: '/aliens/omniverse/Eatle.png',
        color: 'gray'
    },    
    {
        name: 'Jury_rigg',
        img: '/aliens/omniverse/Jury_rigg.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'red'
    },
    //ULTIMATE -----------------------------------------------------------------------
    










    
    
    
    
    
    
    
    
    



    //OMNIVERSE -----------------------------------------------------------------------
    {
        name: 'Shocksquatch',
        img: '/aliens/omniverse/Shocksquatch.png',
        color: 'yellow'
    },
    {
        name: 'Feedback',
        img: '/aliens/omniverse/Feedback.png',
        color: 'blue'
    },
    {
        name: 'Bloxx',
        img: '/aliens/omniverse/Bloxx.png',
        color: 'red'
    },
    {
        name: 'Gravattack_Pose',
        img: '/aliens/omniverse/Gravattack_Pose.png',
        color: 'red'
    },
    {
        name: 'Crashhopper',
        img: '/aliens/omniverse/Crashhopper.png',
        color: 'lime'
    },
    {
        name: 'Ball_Weevil',
        img: '/aliens/omniverse/Ball_Weevil.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'walkatrout',
        img: '/aliens/omniverse/walkatrout.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'cyan'
    },
    {
        name: 'Pesky_Dust',
        img: '/aliens/omniverse/Pesky_Dust.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'pink'
    },
    {
        name: 'Mole_Stache',
        img: '/aliens/omniverse/Mole_Stache.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'yellow'
    },
    {
        name: 'TheWorst',
        img: '/aliens/omniverse/TheWorst.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[5rem] lg:mt-[15rem]'
        },
        color: 'yellow'
    },
    {
        name: 'Kicken_Hawk',
        img: '/aliens/omniverse/Kicken_Hawk.png',
        color: 'brown'
    },
    {
        name: 'Astrodactyl',
        img: '/aliens/omniverse/Astrodactyl.png',
        color: 'brown'
    },
    {
        name: 'Gutrot',
        img: '/aliens/omniverse/Gutrot.png'
    },
    {
        name: 'Toepick',
        img: '/aliens/omniverse/Toepick.png'
    },
    {
        name: 'Bullfrag',
        img: '/aliens/omniverse/Bullfrag.png'
    },
    {
        name: 'Whampire',
        img: '/aliens/omniverse/whampire.png'
    },
    {
        name: 'Atomix',
        img: '/aliens/omniverse/atomix.png'
    },
    {
        name: 'atomix',
        img: '/aliens/omniverse/atomix.png'
    },
    {
        name: 'atomix',
        img: '/aliens/omniverse/atomix.png'
    },
]
// .sort(() => Math.random() - 0.5) //shuffle array ðŸ”ƒ
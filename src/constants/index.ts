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
        name: 'Four_arms',
        img: '/aliens/og/Four_arms.png'
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
        name: 'XLR8',
        img: '/aliens/og/XLR8.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
    {
        name: 'Upgrade',
        img: '/aliens/og/Upgrade.webp'
    },
    {
        name: 'Diamondhead',
        img: '/aliens/og/Diamondhead.png'
    },
    {
        name: 'Ripjaws',
        img: '/aliens/og/Ripjaws.png'
    },
    {
        name: 'Stinkfly',
        img: '/aliens/og/Stinkfly.png'
    },
    {
        name: 'ghostfreak',
        img: '/aliens/og/ghostfreak.png'
    },
    {
        name: 'Heatblast',
        img: '/aliens/og/Heatblast.png'
    },
    {
        name: 'Cannonbolt',
        img: '/aliens/og/Cannonbolt.webp'
    },
    {
        name: 'Wildvine',
        img: '/aliens/og/Wildvine.png'
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
        name: 'benwolf_Blitzwolfer',
        img: '/aliens/og/benwolf_Blitzwolfer.png'
    },
    {
        name: 'benmummy_snare_oh',
        img: '/aliens/og/benmummy_snare_oh.png'
    },
    {
        name: 'benvictor_Frankenstrike',
        img: '/aliens/og/benvictor_Frankenstrike.png'
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
        name: 'Spitter',
        img: '/aliens/og/Spitter.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            // character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
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
        name: 'Arctiguana',
        img: '/aliens/og/Arctiguana.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }

    },
    {
        name: 'eye_guy',
        img: '/aliens/og/eye_guy.png',
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
        name: 'feedback',
        img: '/aliens/og/feedback.png',
    },
]
.sort(() => Math.random() - 0.5) //shuffle array 

export const ALL_ALIENS_OG_OMNIVERSE: Alien[] = [
    {
        name: 'Wildmutt',
        img: '/aliens/omniverse/young/Wildmutt.png', //✅
        height: {
            silouette: 'h-[10rem] lg:h-[13rem]',
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'Four_arms',
        img: '/aliens/omniverse/young/Four_arms.png' //✅
    },
    {
        name: 'grey_matter',
        img: '/aliens/omniverse/young/grey_matter.png', //✅
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[20rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'XLR8',
        img: '/aliens/omniverse/young/XLR8.png', //✅
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        }
    },
    {
        name: 'Upgrade',
        img: '/aliens/omniverse/young/Upgrade.png' //✅
    },
    {
        name: 'Diamondhead',
        img: '/aliens/omniverse/young/Diamondhead.png' //✅
    },
    {
        name: 'Ripjaws',
        img: '/aliens/omniverse/young/Ripjaws.png' //✅
    },
    {
        name: 'Stinkfly',
        img: '/aliens/omniverse/young/Stinkfly.png',//✅
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[45rem] lg:h-[50rem] -mt-[10rem] lg:-mt-[8rem]'
        }
    },
    /* {
        name: 'ghostfreak',
        img: '/aliens/omniverse/young/ghostfreak.png'//✅
    }, */
    {
        name: 'ghostfreak2',
        img: '/aliens/omniverse/young/ghostfreak2.png'//✅
    },
    {
        name: 'Heatblast',
        img: '/aliens/omniverse/heatblast.png' //✅
    },
    {
        name: 'Cannonbolt',
        img: '/aliens/omniverse/young/Cannonbolt.png' //✅
    },
    {
        name: 'Wildvine',
        img: '/aliens/omniverse/young/Wildvine.png' //✅
    },
    {
        name: 'spitter',
        img: '/aliens/omniverse/young/spitter.png'/* , //✅
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            // character: 'h-[25rem] lg:h-[30rem] mt-[5rem] lg:mt-[8rem]'
        } */
    },
    {
        name: 'buzzshock2',
        img: '/aliens/omniverse/young/buzzshock2.png',//✅
        height: {
            // silouette: 'h-[15rem]',
            character: 'h-[15rem] mt-[17rem] lg:mt-[25rem]'
        }
    },
    {
        name: 'Arctiguana',
        img: '/aliens/omniverse/young/Arctiguana.png', //✅
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }

    },
    {
        name: 'benwolf_Blitzwolfer',
        img: '/aliens/omniverse/young/benwolf_Blitzwolfer.png'//✅
    },
    {
        name: 'benmummy_snare_oh',
        img: '/aliens/omniverse/young/benmummy_snare_oh.png' //✅
    },
    /* {
        name: 'benvictor_Frankenstrike',
        img: '/aliens/omniverse/young/benvictor_Frankenstrike.png' //✅
    }, */
    {
        name: 'benvictor_Frankenstrike2',
        img: '/aliens/omniverse/young/benvictor_Frankenstrike2.png' //✅
    },
    {
        name: 'Upchuck',
        img: '/aliens/omniverse/young/Upchuck.png', //✅
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Ditto',
        img: '/aliens/omniverse/young/Ditto.png', //✅
        height: {
            // silouette: 'h-8',
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'eye_guy',
        img: '/aliens/omniverse/young/eye_guy.png', //✅
        height: {
            // silouette: '',
            character: 'h-[30rem] mt-[10rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'Way_Big',
        img: '/aliens/omniverse/Way_Big.png', //✅
        height: {
            // silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[50rem] -mt-[15rem] lg:-mt-[10rem]'
        }
    },
    {
        name: 'feedback',
        img: '/aliens/omniverse/young/feedback.png' //✅
    },
    {
        name: 'clockwork',
        img: '/aliens/omniverse/young/clockwork.png' //✅
    },
]
.sort(() => Math.random() - 0.5) //shuffle array 

export const ALL_ALIENS_ALIEN_FORCE: Alien[] = [
    //OG
    {
        name: 'wildmutt',
        img: '/aliens/ultimate/wildmutt.png',
        height: {
            character: 'h-[22rem] mt-[15rem] lg:mt-[20rem]'
        },
    },
    {
        name: 'FourArms2',
        img: '/aliens/ultimate/FourArms2.png',
    },
    {
        name: 'grey_matter',
        img: '/aliens/ultimate/grey_matter.png',
        height: {
            character: 'h-[10rem] mt-[20rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'xlr8',
        img: '/aliens/ultimate/xlr8.png',
        height: {
            character: 'h-[20rem] lg:h-[30rem] mt-[10rem] lg:mt-[8rem]'
        },
    },
    {
        name: 'Upgrade',
        img: '/aliens/ultimate/upgrade.png',
    },
    {
        name: 'Ripjaws',
        img: '/aliens/ultimate/ripjaws.png',
    },
    {
        name: 'Diamondhead',
        img: '/aliens/alien_force/diamondhead.png'
    },
    {
        name: 'stikfly',
        img: '/aliens/ultimate/stikfly.png',
    },
    {
        name: 'ghostfreak',
        img: '/aliens/ultimate/ghostfreak.png',
        height: {
            character: 'h-[25rem] lg:h-[32rem] mt-[1rem] lg:mt-[10rem]'
        }
    },
    // {
    //     name: 'Ghostfreak2',
    //     img: '/aliens/ultimate/Ghostfreak2.png',
    // },
    {
        name: 'heatblast',
        img: '/aliens/ultimate/heatblast.png',
    },
    {
        name: 'cannonbolt',
        img: '/aliens/alien_force/cannonbolt.png',
    },
    {
        name: 'wildvine',
        img: '/aliens/ultimate/wildvine.png',
    },
    {
        name: 'spitter',
        img: '/aliens/ultimate/spitter.png',
    },
    {
        name: 'buzzshock',
        img: '/aliens/ultimate/buzzshock.png',
        height: {
            character: 'h-[15rem] mt-[17rem] lg:mt-[25rem]'
        }
    },
    {
        name: 'articguana',
        img: '/aliens/ultimate/articguana.png',
        height: {
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'blitzwolfer',
        img: '/aliens/ultimate/blitzwolfer.png',
    },
    {
        name: 'snareoh',
        img: '/aliens/ultimate/snareoh.png',
    },
    // {
    //     name: 'frankenstrike',
    //     img: '/aliens/ultimate/frankenstrike.png',
    // },
    {
        name: 'frankenstrike2',
        img: '/aliens/ultimate/frankenstrike2.png',
    },
    {
        name: 'Upchuck',
        img: '/aliens/alien_force/Upchuck.png',
        height: {
            character: 'h-[23rem] mt-[15rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'ditto',
        img: '/aliens/ultimate/ditto.png',
        height: {
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'eye_guy',
        img: '/aliens/ultimate/eye_guy.png',
    },
    {
        name: 'WayBig',
        img: '/aliens/alien_force/WayBig.png',
        height: {
            character: 'h-[50rem] -mt-[10rem] lg:-mt-[5rem]'
        },
    },
    {
        name: 'Swampfire',
        img: '/aliens/alien_force/swampfire.png'
    },
    {
        name: 'Goop',
        img: '/aliens/alien_force/Goop.png'
    },
    {
        name: 'Spidermonkey',
        img: '/aliens/alien_force/Spidermonkey.png',
        height: {
            character: 'h-[22rem] mt-[10rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'bigChill-L',
        img: '/aliens/alien_force/bigChill-L.png',
        height: {
            character: 'h-[40rem] ml-[10rem] lg:ml-[15rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
            // character: 'h-[35rem] lg:h-[40rem] mt-[5rem] lg:mt-[5rem]'
            
        },
        little: {
            name: 'bigChill',
            img: '/aliens/alien_force/bigChill.png',
            height: {
                // character: 'h-[30rem] ml-[10rem] lg:ml-[25rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
                character: 'h-[35rem] lg:h-[40rem] -mt-[5rem] lg:mt-[5rem]'
                
            },
        },
    },
    {
        name: 'Humungousaur',
        img: '/aliens/alien_force/humungousaur.png'
    },
    {
        name: 'Brainstorm',
        img: '/aliens/alien_force/Brainstorm.png',
        height: {
            character: 'h-[25rem] lg:h-[30rem] mt-[8rem] lg:mt-[12rem]'
        }
    },
    {
        name: 'Jetray',
        img: '/aliens/alien_force/Jetray.webp',
        height: {
            character: 'h-[30rem] mt-[5rem] lg:mt-[10rem]'
        },
    },
    {
        name: 'Chromastone',
        img: '/aliens/alien_force/Chromastone.png'
    },
    {
        name: 'echo_echo',
        img: '/aliens/alien_force/echo_echo.png',
        height: {
            character: 'h-[23rem] mt-[10rem] lg:mt-[15rem]'
        }
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
        name: 'Nanomech',
        img: '/aliens/alien_force/Nanomech.png',
        height: {
            character: 'h-[10rem] mt-[20rem] lg:mt-[20rem]'
        }
    },
    {
        name: 'Rath',
        img: '/aliens/alien_force/rath.png'
    },
]
// .sort(() => Math.random() - 0.5) //shuffle array

export const ALL_ALIENS_ULTIMATE: Alien[] = [
    //OG
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
    // {
    //     name: 'FourArms',
    //     img: '/aliens/ultimate/FourArms.png',
    // },
    {
        name: 'FourArms2',
        img: '/aliens/ultimate/FourArms2.png',
    },
    {
        name: 'grey_matter',
        img: '/aliens/ultimate/grey_matter.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[20rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'xlr8',
        img: '/aliens/ultimate/xlr8.png',
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[20rem] lg:h-[30rem] mt-[10rem] lg:mt-[8rem]'
        },
    },
    {
        name: 'Upgrade',
        img: '/aliens/ultimate/upgrade.png',
    },
    {
        name: 'Ripjaws',
        img: '/aliens/ultimate/ripjaws.png',
    },
    {
        name: 'Diamondhead',
        img: '/aliens/alien_force/diamondhead.png'
    },
    {
        name: 'stikfly',
        img: '/aliens/ultimate/stikfly.png',
    },
    {
        name: 'ghostfreak',
        img: '/aliens/ultimate/ghostfreak.png',
    },
    // {
    //     name: 'Ghostfreak2',
    //     img: '/aliens/ultimate/Ghostfreak2.png',
    // },
    {
        name: 'heatblast',
        img: '/aliens/ultimate/heatblast.png',
    },
    {
        name: 'cannonbolt',
        img: '/aliens/alien_force/cannonbolt.png',
        ultimate: {
            name: 'Ultimate_Cannonbolt',
            img: '/aliens/ultimate/Ultimate_Cannonbolt.png'
        }
    },
    {
        name: 'wildvine',
        img: '/aliens/ultimate/wildvine.png',
    },
    {
        name: 'spitter',
        img: '/aliens/ultimate/spitter.png',
    },
    {
        name: 'buzzshock',
        img: '/aliens/ultimate/buzzshock.png',
        height: {
            character: 'h-[15rem] mt-[17rem] lg:mt-[25rem]'
        }
    },
    {
        name: 'articguana',
        img: '/aliens/ultimate/articguana.png',
        height: {
            silouette: 'h-[13rem] lg:h-[18rem]',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'blitzwolfer',
        img: '/aliens/ultimate/blitzwolfer.png',
    },
    {
        name: 'snareoh',
        img: '/aliens/ultimate/snareoh.png',
    },
    // {
    //     name: 'frankenstrike',
    //     img: '/aliens/ultimate/frankenstrike.png',
    // },
    {
        name: 'frankenstrike2',
        img: '/aliens/ultimate/frankenstrike2.png',
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
        name: 'ditto',
        img: '/aliens/ultimate/ditto.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }
    },
    {
        name: 'eye_guy',
        img: '/aliens/ultimate/eye_guy.png',
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
            img: '/aliens/ultimate/ultimate_wayBig.png',
            height: {
                // silouette: 'h-[13rem] lg:h-[18rem]',
                character: 'h-[50rem] -mt-[10rem] lg:-mt-[5rem]'
            },
        }
    },
    

    //ALIEN FORCE
    {
        name: 'Swampfire',
        img: '/aliens/alien_force/swampfire.png',
        ultimate: {
            name: 'ultimate_swampfire',
            img: '/aliens/ultimate/ultimate_swampfire.png'
        }
    },
    {
        name: 'Goop',
        img: '/aliens/alien_force/Goop.png'
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
        name: 'bigChill-L',
        img: '/aliens/alien_force/bigChill-L.png',
        height: {
            // silouette: 'h-[20rem] lg:h-[18rem]',
            character: 'h-[40rem] ml-[10rem] lg:ml-[18rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
            // character: 'h-[35rem] lg:h-[40rem] mt-[5rem] lg:mt-[5rem]'
            
        },
        ultimate: {
            name: 'Ultimate_Big_Chill-L',
            img: '/aliens/ultimate/Ultimate_Big_Chill-L.png',
            height: {
                // silouette: 'h-[20rem] lg:h-[18rem]',
                character: 'h-[40rem] ml-[10rem] lg:ml-[15rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
                // character: 'h-[35rem] lg:h-[40rem] mt-[5rem] lg:mt-[5rem]'

            },
        },
        little: {
            name: 'bigChill',
            img: '/aliens/alien_force/bigChill.png',
            height: {
                // silouette: 'h-[20rem] lg:h-[18rem]',
                // character: 'h-[30rem] ml-[10rem] lg:ml-[25rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
                character: 'h-[35rem] lg:h-[40rem] mt-[5rem] lg:mt-[5rem]'
                
            },
            ultimate: {
                name: 'Ultimate_Big_Chill',
                img: '/aliens/ultimate/Ultimate_Big_Chill.png',
                height: {
                    // silouette: 'h-[20rem] lg:h-[18rem]',
                    // character: 'h-[30rem] ml-[10rem] lg:ml-[18rem] lg:h-[50rem] mt-[5rem] lg:-mt-[5rem]'
                    character: 'h-[35rem] lg:h-[40rem] mt-[5rem] lg:mt-[5rem]'
    
                },
            }
        },
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
        name: 'Brainstorm',
        img: '/aliens/alien_force/Brainstorm.png',
        height: {
            // silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[25rem] lg:h-[30rem] ml-0 lg:ml-[20rem] mt-[10rem] lg:mt-[15rem] '
        }
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
        name: 'Chromastone',
        img: '/aliens/alien_force/Chromastone.png'
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
        name: 'Alien X',
        img: '/aliens/alien_force/alienX.png'
    },
    {
        name: 'Rath',
        img: '/aliens/alien_force/rath.png'
    },
    {
        name: 'Lodestar',
        img: '/aliens/alien_force/Lodestar.webp'
    },

    //ULTIMATE
    {
        name: 'Nanomech',
        img: '/aliens/alien_force/Nanomech.png',
        height: {
            // silouette: 'h-8',
            character: 'h-[10rem] mt-[28rem] lg:mt-[28rem]'
        }
    },
    {
        name: 'amphibian',
        img: '/aliens/ultimate/amphibian.png'
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
        height: {
            // silouette: 'h-8',
            character: 'h-[28rem] mt-[5rem] lg:mt-[15rem]'
        }
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
    {
        name: 'feedback',
        img: '/aliens/ultimate/feedback.png',
        height: {
            character: 'h-[30rem] lg:h-[40rem] ml-[10rem]'
        }
    },
    // ...ALL_ALIENS_ALIEN_FORCE 
]
.sort(() => Math.random() - 0.5) //shuffle array 

export const ALL_ALIENS_OMNIVERSE: Alien[] = [
    // ORIGINAL -----------------------------------------------------------------------
    {
        name: 'Wildmutt',
        img: '/aliens/omniverse/Wildmutt.png',
        height: {
            silouette: 'h-[10rem] lg:h-[15rem]',
            character: 'h-[20rem] lg:h-[30rem] ml-[1rem] mt-[10rem] lg:mt-[5rem]'
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
        height: {
            silouette: 'h-[10rem] lg:h-[14rem]',
            character: 'h-[20rem] lg:h-[30rem] mt-[10rem] lg:mt-[8rem]'
        },
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
            character: 'h-[35rem] lg:h-[45rem] -mt-[5rem] lg:-mt-[8rem]'
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
            character: 'h-[40rem] lg:h-[50rem] mr-[0rem] -mt-[10rem] lg:-mt-[10rem]'
        },
        color: 'red'
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
            character: 'h-[30rem] lg:h-[50rem] -mt-[2rem] lg:-mt-[12rem]'
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
            character: 'h-[20rem] lg:h-[25rem] ml-[0rem] mt-[10rem] lg:mt-[10rem]'
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
        name: 'Feedback2',
        img: '/aliens/omniverse/Feedback.png'
    },
    {
        name: 'AlienX2',
        img: '/aliens/omniverse/AlienX.png'
    },
]

//TO ADD FEEDBACK TO ALL OMNITRIXES

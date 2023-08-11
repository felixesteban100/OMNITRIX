export const BEN10_KEYFRAMES = {
    omnitrixOutTop: {
        '0%': {
            transform: 'translateY(0px)',
            // opacity: 1,
        },
        '100%': {
            transform: 'translateY(-310px)',
            // opacity: 0,
        },
    },
    omnitrixOutBottom: {
        '0%': {
            transform: 'translateY(0)',
            // opacity: 1,
        },
        '100%': {
            transform: 'translateY(310px)',
            // opacity: 0,
        },
    },
    omnitrixInTop: {
        '0%': {
            transform: 'translateY(-310px)',
            // opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
        },
    },
    omnitrixInBottom: {
        '0%': {
            transform: 'translateY(310px)',
            // opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
        },
    },
    omnitrixInDiamond: {
        '0%': {
            transform: 'scale(0)',
            opacity: '1'
        },
        '100%': {
            transform: 'scale(1)',
            opacity: '1'
        }
    },
    omnitrixOutDiamond: {
        '0%': {
            transform: 'scale(1)',
            opacity: '1'
        },
        '100%': {
            transform: 'scale(0)',
            opacity: '1'
        }
    },
    omnitrixCoverOmniverseIn: {
        '0%': {
            transform: 'translateY(0px)',
            // opacity: 1,
        },
        '100%': {
            transform: 'translateY(-310px) rotateX(60deg)',
            // opacity: 0,
        },
    },
    omnitrixCoverOmniverseInLittle: {
        '0%': {
            transform: 'translateY(0px)',
            // opacity: 1,
        },
        '100%': {
            transform: 'translateY(-180px) rotateX(60deg)',
            // opacity: 0,
        },
    },
    omnitrixCoverOmniverseOut: {
        '0%': {
            transform: 'translateY(-310px) rotateX(60deg)',
            // opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
        },
    },
    omnitrixCoverOmniverseOutLittle: {
        '0%': {
            transform: 'translateY(-180px) rotateX(60deg)',
            // opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
        },
    },



    omnitrixRunOutTop: {
        '0%': {
            borderTopColor: "theme('colors.error')",
            // borderTopColor: "#FF0000",
        },
        '10%': {
            borderTopColor: "theme('colors.current')",
        },
        '20%': {
            borderTopColor: "theme('colors.error')",
        },
        '30%': {
            borderTopColor: "theme('colors.current')",
        },
        '40%': {
            borderTopColor: "theme('colors.error')",
        },
        '50%': {
            borderTopColor: "theme('colors.current')",
        },
        '60%': {
            borderTopColor: "theme('colors.error')",
        },
        '70%': {
            borderTopColor: "theme('colors.current')",
        },
        '80%': {
            borderTopColor: "theme('colors.error')",
        },
        '90%': {
            borderTopColor: "theme('colors.current')",
        },
        '100%': {
            borderTopColor: "theme('colors.error')",
        }
    },
    omnitrixRunOutBottom: {
        '0%': {
            // borderColor: "theme('colors.red-500')",
            borderBottomColor: "theme('colors.error')",
        },
        '10%': {
            // borderColor: "theme('colors.red-500')",
            borderBottomColor: "theme('colors.current')",
        },
        '20%': {
            borderBottomColor: "theme('colors.error')",
        },
        '30%': {
            borderBottomColor: "theme('colors.current')",
        },
        '40%': {
            borderBottomColor: "theme('colors.error')",
        },
        '50%': {
            borderBottomColor: "theme('colors.current')",
        },
        '60%': {
            borderBottomColor: "theme('colors.error')",
        },
        '70%': {
            borderBottomColor: "theme('colors.current')",
        },
        '80%': {
            borderBottomColor: "theme('colors.error')",
        },
        '90%': {
            borderBottomColor: "theme('colors.current')",
        },
        '100%': {
            borderBottomColor: "theme('colors.error')",
        }
    },
    omnitrixRotateDown: {
        '0%': {
            transform: 'rotateX(0)'
        },
        '100%': {
            transform: 'rotateX(60deg)'
        }
    },
    omnitrixRotateUp: {
        '0%': {
            transform: 'rotateX(60deg)'
        },
        '100%': {
            transform: 'rotateX(0)'
        }
    },
    alienRotateUp: {
        '0%': {
            transform: 'rotateX(60deg) translateY(-100px) scale(0.5)',
            // filter: 'brightness(0)',
        },
        '50%': {
            transform: 'rotateX(30deg) translateY(-50px) scale(0.8)',
            // filter: 'brightness(.5)',
        },
        '100%': {
            transform: 'rotateX(0) translateY(-200px) scale(1)',
            // filter: 'brightness(1.2)',
            // filter: 'contrast(0) grayscale(100%) sepia(100%) hue-rotate(100deg) brightness(1.4) saturate(0.28)',
            // filter: ' grayscale(100%) sepia(100%) hue-rotate(116deg) brightness(1.4) saturate(0.28)',
            // filter: 'invert(53%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(88%)',
        }
    },
    alienRotateUpLittle: {
        '0%': {
            transform: 'rotateX(60deg) translateY(100px) scale(0.5)',
            // filter: 'brightness(0)',
        },
        '50%': {
            transform: 'rotateX(30deg) translateY(50px) scale(0.8)',
            // filter: 'brightness(.5)',
        },
        '100%': {
            transform: 'rotateX(0) translateY(-100px) scale(1)',
            // filter: 'brightness(1.2)',
            // filter: 'contrast(0) grayscale(100%) sepia(100%) hue-rotate(100deg) brightness(1.4) saturate(0.28)',
            // filter: ' grayscale(100%) sepia(100%) hue-rotate(116deg) brightness(1.4) saturate(0.28)',
            // filter: 'invert(53%) sepia(37%) saturate(1007%) hue-rotate(71deg) brightness(112%) contrast(88%)',
        }
    },

    omnitrixFlashingLights: {
        '0%': {
            backgroundColor: "theme('colors.primary')",
            // borderTopColor: "#FF0000",
        },
        '10%': {
            backgroundColor: "theme('colors.current')",
        },
        '20%': {
            backgroundColor: "theme('colors.primary')",
        },
        '30%': {
            backgroundColor: "theme('colors.current')",
        },
        '40%': {
            backgroundColor: "theme('colors.primary')",
        },
        '50%': {
            backgroundColor: "theme('colors.current')",
        },
        '60%': {
            backgroundColor: "theme('colors.primary')",
        },
        '70%': {
            backgroundColor: "theme('colors.current')",
        },
        '80%': {
            backgroundColor: "theme('colors.primary')",
        },
        '90%': {
            backgroundColor: "theme('colors.current')",
        },
        '100%': {
            backgroundColor: "theme('colors.secondary')",
        }
    },

    omnitrixFlashingLightsLogo: {
        '0%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",
            // borderTopColor: "#FF0000",
        },
        '10%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",
        },
        '20%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",

        },
        '30%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '40%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",

        },
        '50%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '60%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",

        },
        '70%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '80%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",

        },
        '90%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '100%': {
            borderTopColor: "theme('colors.primary')",
            borderBottomColor: "theme('colors.primary')",
        }
    },
    omnitrixFlashingLightsCircle: {
        '0%': {
            borderTopColor: "trasnparent",
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderRightColor: "theme('colors.primary')",
            // borderTopColor: "#FF0000",
        },
        /* '10%': {
          // borderTopColor: "trasnparent",
          borderBottomColor: "theme('colors.current')",
          borderLeftColor: "theme('colors.current')",
          borderRightColor: "theme('colors.current')",
        }, */
        '20%': {
            borderTopColor: "trasnparent",
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderRightColor: "theme('colors.primary')",

        },
        /* '30%': {
          // borderTopColor: "trasnparent",
          borderBottomColor: "theme('colors.current')",
          borderLeftColor: "theme('colors.current')",
          borderRightColor: "theme('colors.current')",

        },
        '40%': {
          // borderTopColor: "trasnparent",
          borderBottomColor: "theme('colors.primary')",
          borderLeftColor: "theme('colors.primary')",
          borderRightColor: "theme('colors.primary')",

        }, */
        '50%': {
            borderTopColor: "trasnparent",
            borderBottomColor: "theme('colors.current')",
            borderLeftColor: "theme('colors.current')",
            borderRightColor: "theme('colors.current')",

        },
        /* '60%': {
          // borderTopColor: "trasnparent",
          borderBottomColor: "theme('colors.primary')",
          borderLeftColor: "theme('colors.primary')",
          borderRightColor: "theme('colors.primary')",

        },
        '70%': {
          // borderTopColor: "theme('colors.current')",
          borderBottomColor: "theme('colors.current')",
          borderLeftColor: "theme('colors.current')",
          borderRightColor: "theme('colors.current')",

        }, */
        '80%': {
            // borderTopColor: "trasnparent",
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderRightColor: "theme('colors.primary')",

        },
        /* '90%': {
          // borderTopColor: "trasnparent",
          borderBottomColor: "theme('colors.current')",
          borderLeftColor: "theme('colors.current')",
          borderRightColor: "theme('colors.current')",

        }, */
        '100%': {
            // borderTopColor: "trasnparent",
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderRightColor: "theme('colors.primary')",
        }
    },
    omnitrixFlashingLightsUnCharged: {
        '0%': {
            backgroundColor: "theme('colors.error')",
            // borderTopColor: "#FF0000",
        },
        '10%': {
            backgroundColor: "theme('colors.current')",
        },
        '20%': {
            backgroundColor: "theme('colors.error')",
        },
        '30%': {
            backgroundColor: "theme('colors.current')",
        },
        '40%': {
            backgroundColor: "theme('colors.error')",
        },
        '50%': {
            backgroundColor: "theme('colors.current')",
        },
        '60%': {
            backgroundColor: "theme('colors.error')",
        },
        '70%': {
            backgroundColor: "theme('colors.current')",
        },
        '80%': {
            backgroundColor: "theme('colors.error')",
        },
        '90%': {
            backgroundColor: "theme('colors.current')",
        },
        '100%': {
            backgroundColor: "theme('colors.error')",
        }
    },
    omnitrixFlashingLightsLogoUncharged: {
        '0%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",
            // borderTopColor: "#FF0000",
        },
        '10%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",
        },
        '20%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",

        },
        '30%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '40%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",

        },
        '50%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '60%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",

        },
        '70%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '80%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",

        },
        '90%': {
            borderTopColor: "theme('colors.current')",
            borderBottomColor: "theme('colors.current')",

        },
        '100%': {
            borderTopColor: "theme('colors.error')",
            borderBottomColor: "theme('colors.error')",
        }
    },
    transformIntoAlien: {
        '0%': {
            backgroundColor: "theme('colors.primary')",
            transform: 'scale(0) translateY(-850px)',
        },
        '25%': {
            backgroundColor: "theme('colors.primary')",
            transform: 'scale(0.5) translateY(-850px)',
        },
        '50%': {
            backgroundColor: "white",
            transform: 'scale(1) translateY(-850px)',
        },
        '75%': {
            backgroundColor: "theme('colors.primary')",
            transform: 'scale(0.5) translateY(-850px)',
        },
        '100%': {
            backgroundColor: "theme('colors.primary')",
            transform: 'scale(0) translateY(-1000px)',
        }
    },
    alienNormalOut: {
        "0%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0,
        }
    },

    ultimateAlienActivate: {
        "0%": {
            transform: "translateZ(-1400px) translateY(-200px) scaleY(0)",
        },
        "100%": {
            transform: "translateZ(0) translateY(-200px) scaleY(1)",
        }
    },

    alienFlick: {
        "0%": {
            // transform: 'rotateX(0) translateY(-200px) scale(1)',
            opacity: 0
        },
        "10%": {
            opacity: 0
        },
        "10.1%": {
            opacity: 1
        },
        "10.2%": {
            opacity: 0
        },
        "20%": {
            opacity: 0
        },
        "20.1%": {
            opacity: 1
        },
        "20.6%": {
            opacity: 0
        },
        " 30%": {
            opacity: 0
        },
        "30.1%": {
            opacity: 1
        },
        "30.5%": {
            opacity: 1
        },
        "30.6%": {
            opacity: 0
        },
        " 45% ": {
            opacity: 0
        },
        "45.1%": {
            opacity: 1
        },
        "50% ": {
            opacity: 1
        },
        "55%": {
            opacity: 1
        },
        "55.1%": {
            opacity: 0
        },
        "57%": {
            opacity: 0
        },
        "57.1%": {
            opacity: 1
        },
        "60%": {
            opacity: 1
        },
        "60.1%": {
            opacity: 0
        },
        "65%": {
            opacity: 0
        },
        "65.1%": {
            opacity: 1
        },
        "75%": {
            opacity: 1
        },
        "75.1%": {
            opacity: 0
        },
        "77% ": {
            opacity: 0
        },
        "77.1%": {
            opacity: 1
        },
        "85% ": {
            opacity: 1
        },
        "85.1%": {
            opacity: 0
        },
        "86% ": {
            opacity: 0
        },
        "86.1%": {
            opacity: 1
        },
        "100%": {
            // transform: 'rotateX(0) translateY(-200px) scale(1)',
            opacity: 1
        },
    },

    spinLeft: {
        'from': {
            transform: 'rotate(360deg)'
        },
        'to': {
            transform: 'rotate(0deg)'
        }
    },
    spinRight: {
        'from': {
            transform: 'rotate(0deg)'
        },
        'to': {
            transform: 'rotate(360deg)'
        }
    }
}

export const BEN10_ANIMATIONS = {
    "omnitrixFlashingLights": "omnitrixFlashingLights 2s ease-in-out 2 forwards",
    "omnitrixFlashingLightsCharged": "omnitrixFlashingLights 2s ease-in-out 1",
    "omnitrixFlashingLightsUnCharged": "omnitrixFlashingLightsUnCharged 2s ease-in-out 1 forwards",
    "omnitrixFlashingLightsLogo": "omnitrixFlashingLightsLogo 2s ease-in-out 1 forwards",
    "omnitrixFlashingLightsLogo2": "omnitrixFlashingLightsLogo 2s ease-in-out 1",
    "omnitrixFlashingLightsLogoUncharged": "omnitrixFlashingLightsLogoUncharged 2s ease-in-out 1 forwards",


    "omnitrixFlashingLightsCircle": "omnitrixFlashingLightsCircle 1s ease-in-out 2 forwards",
    "omnitrixInTop": "omnitrixInTop 2s ease-in-out 1 forwards",
    "omnitrixInBottom": "omnitrixInBottom 2s ease-in-out 1 forwards",
    "omnitrixOutTop": "omnitrixOutTop 2s ease-in-out 1 forwards",
    "omnitrixOutBottom": "omnitrixOutBottom 2s ease-in-out 1 forwards",
    'omnitrixInDiamond': 'omnitrixInDiamond 2s ease-in-out 1 forwards',
    'omnitrixOutDiamond': 'omnitrixOutDiamond 2s ease-in-out 1 forwards',
    "omnitrixCoverOmniverseIn": "omnitrixCoverOmniverseIn 1s ease-in-out 1 forwards",
    "omnitrixCoverOmniverseOut": "omnitrixCoverOmniverseOut 2s ease-in-out 1 forwards",
    "omnitrixCoverOmniverseInLittle": "omnitrixCoverOmniverseInLittle 1s ease-in-out 1 forwards",
    "omnitrixCoverOmniverseOutLittle": "omnitrixCoverOmniverseOutLittle 2s ease-in-out 1 forwards",
    'fadeIn': "fadeIn 1s ease-in-out 1 forwards",
    "fadeInLowerSelector": "fadeIn 2s ease-in-out forwards",
    'fadeOut': "fadeOut 1s ease-out 1 forwards",
    "omnitrixRunOutTop": "omnitrixRunOutTop 2s ease-in-out 1 forwards",
    "omnitrixRunOutBottom": "omnitrixRunOutBottom 2s ease-in-out 1 forwards",
    "omnitrixRotateDown": "omnitrixRotateDown 1s ease-in-out forwards",
    "omnitrixRotateUp": "omnitrixRotateUp 1s ease-in-out forwards",
    "alienRotateUpLittle": "alienRotateUpLittle 1s ease-in-out forwards",

    "alienFlick": "alienFlick 1s ease-in-out forwards",

    "alienNormalOut": "alienNormalOut 2s ease-in-out forwards",

    "alienRotateUp": "alienRotateUp 1s ease-in-out forwards",
    "scaleRingCenter": "fadeIn 2s ease-in-out forwards",

    "ultimateAlienActivate": "ultimateAlienActivate 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",

    "transformIntoAlien": "transformIntoAlien 0.5s ease-in-out forwards",

    "spinLeft" : "spinLeft 1s ease-in-out forwards", 
    "spinRight" : "spinRight 1s ease-in-out forwards", 
}

export const BEN10_THEMES = {
    omnitrix_AlienForce: {
        // "primary": "#e3fc9f",
        "primary": "lime",
        // "secondary": "#31bfa0",
        "secondary": "green",
        // "secondary": "black",
        // "accent": "#9eea10",
        "accent": "gray",
        // "accent": "#9eea10",
        // "neutral": "#1c2327",
        "neutral": "black",
        // "neutral": "white",
        // "base-100": "#363536",
        "base-100": "black",
        // "base-100": "gray",
        "info": "#618bf5",
        "success": "#25934f",
        "warning": "#f9bd62",
        "error": "#fb042d",
    },
    omnitrix_og: {
        "primary": "lime",
        "secondary": "green",
        "accent": "#9eea10",
        "neutral": "white",
        "base-100": "rgb(50,50,50)",
        "base-200": "black",
        "base-300": "rgb(75,75,75)",
        "info": "#618bf5",
        "success": "#25934f",
        "warning": "#f9bd62",
        "error": "#fb042d",
    },
    omnitrix_omniverse: {
        "primary": "lime",
        "secondary": "green",
        "accent": "#9eea10",
        "neutral": "white",
        // "base-100": "rgb(50,50,50)",
        "base-100": "rgb(20,70,45)",
        "base-200": "black",
        "base-300": "rgb(75,75,75)",
        "info": "#618bf5",
        "success": "#25934f",
        "warning": "#f9bd62",
        "error": "#fb042d",
        "current": "black"
    },
    omnitrix_ultimate: {
        // "primary": "#e3fc9f",
        "primary": "rgb(0,250,50)",
        // "secondary": "#31bfa0",
        "secondary": "rgb(50,200,50)",
        // "secondary": "black",
        // "accent": "#9eea10",
        "accent": "rgb(150,150,150)",
        // "accent": "#9eea10",
        // "neutral": "#1c2327",
        "neutral": "blue",
        // "neutral": "white",
        // "base-100": "#363536",
        "base-100": "rgb(0,50,0)",
        // "base-100": "gray",
        "info": "#618bf5",
        "success": "#25934f",
        "warning": "#f9bd62",
        "error": "#fb042d",
    },
}

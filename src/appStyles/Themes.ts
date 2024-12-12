import COLORS from "./colors"

const Themes = {
    LIGHT:{
        STATUS_BAR_COLOR : COLORS.white,
        STATUS_BAR_STYLE: 'dark-content' as const
    },
    DARK:{
        STATUS_BAR_COLOR : COLORS.black,
        STATUS_BAR_STYLE: 'light-content' as const
    }
}

export default Themes
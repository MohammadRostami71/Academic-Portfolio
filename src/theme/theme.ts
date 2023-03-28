import {createTheme} from '@mui/material/styles';
import { Theme } from "@mui/material/styles";


declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}


// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#48484b',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            default: '#fff',
        },

    },
    typography: {
        subtitle1: {
            fontSize: '.75rem',
            fontWeight: '700',
            lineHeight: '1.5rem',
        },

        subtitle2: {
            fontSize: '.75rem',
            fontWeight: '600',
            lineHeight: '1.5rem',
        },
        caption: {
            fontSize: '.875rem',
            fontWeight: '600',
            lineHeight: '0.75rem',
        },
    },

    components: {
        MuiTab: {
            defaultProps: {
                disableTouchRipple: true, disableRipple: true
            }
        },
        MuiSkeleton: {
            defaultProps: {
                animation: 'wave',
            },
        },
    }
});

export default theme;
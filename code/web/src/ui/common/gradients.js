// Gradients

// App Imports
import { primary as primaryColor,primaryAccent,grey as greyColor, grey1 , secondary as secondaryColor, secondaryAccent } from '../common/colors'

export const primary = `linear-gradient( 90deg, ${ primaryAccent } 10%, ${ primaryColor } 100%)`

export const grey = `linear-gradient( 90deg, ${ greyColor } 10%, ${ grey1 } 100%)`

export const secondary = `linear-gradient( 90deg, ${ secondaryAccent } 10%, ${ secondaryColor } 100%)`
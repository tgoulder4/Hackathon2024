import { TinyColor } from "@ctrl/tinycolor";
const primary = '#1b1b1b'
export const changeColour = (colour: string) => {
    return new TinyColor(colour)
}
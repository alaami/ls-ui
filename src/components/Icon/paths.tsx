
import { path as figmaPath } from './figma-icons'

export type IconName = keyof typeof path;
export const path = {
    ...figmaPath
}
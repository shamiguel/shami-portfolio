/* Interfaces */

export interface Section {
    name: string
    display: boolean 
    content: Content[]
}

export interface Content {
    name: string
    image: string
    position: string 
    text: string 
    link: string
}
export function gender(g) {
    switch (g) {
        case 1:
            g = "Galinha"
            break;
        case 2:
            g = "Galo"
            break;
        default:
            console.log(`Sorry`);
    }
    return g;
} export function rarity(r) {
    switch (r) {
        case 1:
            r = "Common"
            break;
        case 2:
            r = "Rare"
            break;
        case 3:
            r = "Super Rare"
            break;
        case 4:
            r = "Epic"
            break;
        case 5:
            r = "Legendary"
            break;
        default:
            console.log(`Sorry`);
    }
    return r
}
export function breed(b) {
    switch (b) {
        case 1:
            b = "Legorne"
            break;
        case 2:
            b = "Plymouth Rock"
            break;
        case 3:
            b = "Orpington"
            break;
        case 4:
            b = "Rhodia"
            break;
        case 5:
            b = "Kadaknath"
            break;
        case 6:
            b = "Brahma"
            break;
        case 7:
            b = "Sedosa"
            break;
        default:
            console.log(`Sorry`);
    }
    return b
}

export function renderImage(a, b) {
    return "gw" + a + "_" + b
}

export function renderBorder(a) {
    return "b" + a
}

export function renderColor(a) {
    return "c" + a
}
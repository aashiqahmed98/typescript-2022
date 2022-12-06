type Fishy = {
    swim: () => void
}

type Doggy = {
    bark: () => void
}

function isFishy(pet: Fishy | Doggy): pet is Fishy{
    return (pet as Fishy).swim !== undefined
}

function getFood(pet : Fishy | Doggy){
    if(isFishy(pet)){
        pet
        return 'Fish food'
    }
    pet

}

// Discriminated Union

interface Square {
    sides: number
    kind: 'square'
}

interface Circle{
    radius: number
    kind: 'circle'
}

interface Rectange{
    kind: 'rectangle'
    perimeter: number
    length: number
    width: number
}

type Shapy = Square | Circle | Rectange

function getShape( shape: Shapy){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius
    } 

    // return shape.sides * shape.sides
}

function getShapeBySwitch(shape: Shapy){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius
        case 'square':
            return shape.sides * shape.sides
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

getShapeBySwitch({
    kind: 'circle',
    radius: 2.3
})
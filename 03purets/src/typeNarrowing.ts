type Fishy = {
    swim: () => void
}

type Doggy = {
    bark: () => void
}

function isFishy(a: Fishy | Doggy): a is Fishy{
    return (a as Fishy).swim !== undefined
}

function getFood(pet : Fishy | Doggy){
    if(isFishy(pet)){
        pet
        return 'Fish food'
    }
    pet
    
}
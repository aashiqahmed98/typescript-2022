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
function newIdentity<Type>(val: Type): Type{
    return val
}

type name = {
    firstName: string
    lastName: string
}
// newIdentity('12')
newIdentity<name>({firstName: 'Aashiq', lastName: 'Ahmed'})

const searchMoreTerms = <T>(val: Array<T>) : T => {
    // do some operation
    return val[1]
}

function anotherFunction1<T, U extends number>(valOne: T, valTwo: U): object{
    return {
        valOne, 
        valTwo
    }
}

anotherFunction1(1, 4)
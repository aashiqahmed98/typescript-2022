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
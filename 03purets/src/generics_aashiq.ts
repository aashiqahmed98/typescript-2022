function newIdentity<Type>(val: Type): Type{
    return val
}

type name = {
    firstName: string
    lastName: string
}
// newIdentity('12')
newIdentity<name>({firstName: 'Aashiq', lastName: 'Ahmed'})
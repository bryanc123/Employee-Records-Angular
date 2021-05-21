interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: Company
}
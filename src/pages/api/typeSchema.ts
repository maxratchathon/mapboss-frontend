export type TUserFecthing = {
    data: TUsers[]
    total: number
}

export type TUsers = {
    id: string
    firstName: string
    lastName: string
    email: string
    username: string
    role: string
}
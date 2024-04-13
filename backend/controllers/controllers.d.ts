export interface ControllersDefault {
    findAll: () => void
    findOne: (id: string) => void
    create: (data: any) => void
    update: (id: string, data: any) => void
    delete: (id: string) => void
}
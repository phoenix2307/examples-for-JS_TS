export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov'
    }
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),

]

const dev3 = people.map(man => dimychTransformator)
const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
    })
)

const messages = people.map(man => {
    return `Hi ${man.name.split(' ')[0]}. Welcome to IT=Incubator`
})

export const createGreetingMessages = (people: Array<ManType>) => {
    return  people.map(man => `Hi ${man.name.split(' ')[0]}. Welcome to IT=Incubator`)
}
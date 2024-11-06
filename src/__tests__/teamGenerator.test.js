import { Team } from '../teamGenerator';

const characters = [];

class Character {
    constructor(name, level, strategy) {
        this.name = name;
        this.level = level;
        this.strategy = strategy;
        characters.push({
            name,
            level,
            strategy
        });
    }

}

test('Creation team container', () => {
    const team = new Team();
    const result = { members: new Set() };
    expect(team).toEqual(result);
});

test('method Add', () => {
    const character = new Character('John', 5, 'suppurt');
    const team = new Team();
    team.add(characters, 1);
    const result = [
        {
            level: 5, name: 'John', strategy: 'suppurt'
        }
    ];
    expect(result).toEqual(team.toArray());
});

test('Error in method add', () => {
    const character = new Character('John', 5, 'suppurt');

    const result = () =>
    {
        const team = new Team();
        team.add(characters, 1);
        team.add(characters, 1);
    };

    expect(result).toThrow('Персонаж John уже добавлен в команду');
});

test('method AddAll', () => {
    const character = new Character('John', 5, 'suppurt');
    const character1 = new Character('Math', 7, 'Buffer');
    const character2 = new Character('Ivan', 15, 'Healer');
    const team = new Team();
    team.AddAll(characters);
    const result = characters;
    expect(result).toEqual(team.toArray());
});

test('Method toArray', () => {
    const team = new Team();
    const result = [];
    expect(result).toEqual(team.toArray());
});
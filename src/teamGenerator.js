export class Team {
    constructor() {
        this.members = new Set();
    }

    add(characters, number) {
        if (this.members.has(characters[number-1])) {
            throw new Error(`Персонаж ${characters[number-1].name} уже добавлен в команду`);
        } else {
            this.members.add(characters[number-1]);
        }
    }

    AddAll(characters) {
        characters.forEach(character => {
            this.members.add(character);
        });
    }

    toArray() {
        return Array.from(this.members);
    }
};
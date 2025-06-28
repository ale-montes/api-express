import { Repository } from '../shared/repository.js';
import { Character } from './character.entity.js';

const characters = [
  new Character(
    'Darth Vader1',
    'Sith',
    11,
    101,
    21,
    11,
    ['Lightsaber', 'Death Star'],
    'a02b91bc-3769-4221-beb1-d7a3aeba7dad',
  ),
];

export class CharacterRepository implements Repository<Character> {
  public findAll(): Character[] | undefined {
    return characters;
  }
  public findOne(item: { id: string }): Character | undefined {
    return characters.find((character) => character.id === item.id);
  }
  public add(item: Character): Character | undefined {
    characters.push(item);
    return item;
  }
  public update(item: Character): Character | undefined {
    const index = characters.findIndex((character) => character.id === item.id);
    if (index !== -1) {
      characters[index] = { ...characters[index], ...item };
    }
    return characters[index];
  }
  public delete(item: { id: string }): Character | undefined {
    const index = characters.findIndex((character) => character.id === item.id);
    if (index !== -1) {
      const deletedcharacters = characters[index];
      characters.splice(index, 1);
      return deletedcharacters;
    }
    return undefined;
  }
}

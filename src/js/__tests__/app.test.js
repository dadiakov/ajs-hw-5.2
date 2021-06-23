import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Make Bowman from Character', () => {
  expect(new Character('Dima', 'Bowman')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Bowman',
  });
});

test('Wrong named character', () => {
  expect(() => new Character('Dima', 'BoBoBowman')).toThrow();
});

test('Make Bowman', () => {
  expect(new Bowman('Dima')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Bowman',
  });
});

test('Make Swordsman', () => {
  expect(new Swordsman('Dima')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Swordsman',
  });
});

test('Make Daemon', () => {
  expect(new Daemon('Dima')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Daemon',
  });
});

test('Make Magician', () => {
  expect(new Magician('Dima')).toEqual({
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Magician',
  });
});

test('Make Undead', () => {
  expect(new Undead('Dima')).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Undead',
  });
});

test('Make Zombie', () => {
  expect(new Zombie('Dima')).toEqual({
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Dima',
    type: 'Zombie',
  });
});

test('Throw error on short or long name', () => {
  expect(() => new Bowman('D')).toThrow();
  expect(() => new Bowman('DimaDimaDima')).toThrow();
});

test('levelUp', () => {
  const bow1 = new Bowman('Dima');
  bow1.health = 50;
  bow1.levelUp();
  expect(bow1).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Dima',
    type: 'Bowman',
  });
});

test('LevelUp on died', () => {
  const bow1 = new Bowman('Dima');
  bow1.health = 0;
  expect(() => bow1.levelUp()).toThrow();
});

test('Damage points per alive', () => {
  const bow1 = new Bowman('Dima');
  bow1.damage(50);
  expect(bow1.health).toBeCloseTo(62.5);
});

test('Fatal Damage', () => {
  const bow1 = new Bowman('Dima');
  expect(() => bow1.damage(200)).toThrow();
});

import { type Dummy } from 'component';
import { type Simplify } from 'type-fest';

type MyType = Simplify<Dummy & { aloha: true }>;

const object: MyType = {
  aloha: true,
  hello: 'World!'
};

console.log('It works.', object);

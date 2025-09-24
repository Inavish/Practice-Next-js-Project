import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  name: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' },
  ];

  findAll(): Item[] {
    return this.items;
  }
}

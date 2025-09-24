import { Controller, Get } from '@nestjs/common';
import { ItemsService, Item } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

@Get()
 getAll(): Item[] {      
    return this.itemsService.findAll();
  }
}

import { Body, Controller, Delete, Get, NotFoundException, Param, Put, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { NotFoundError } from 'rxjs';
import { replaceProductDTO } from './replaceProduct.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }


  #productList = [
    {
      name:  "Washing Machine",
      price: 2000
    },
    {
      name:  "Basketball",
      price: 4000
    },
    {
      name:    "Detergent",
      price: 1000
    }
     
      
    
  ]


  @Get("products")
  listProduct()
  {
    return this.#productList
  }


  @Get("products/:id")
  getProduct(@Param('id') id:string)
  {
    return JSON.stringify(this.#productList[id])
  }

  @Delete("products/:id")
  deleteProduct(@Param('id') id:string)
  {
    if(!this.#productList[id])
    {
      throw new NotFoundException("No product with id");
    }
    this.#productList.splice(Number(id),1)
  }

  @Put("products/:id")
  replaceProduct(@Param('id') id:string, @Body() data: replaceProductDTO)
  {
    if(!this.#productList[id])
    {
      throw new NotFoundException("No product with ID");
    }

    this.#productList[id] = data
    
  }



}

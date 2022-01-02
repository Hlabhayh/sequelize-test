import {
  Controller,
  Get,
  Param,
  Delete,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { Product } from './product.model';
import { ProductResponse } from './product.response';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // HTTP GET :  /mails

  @Get()
  @ApiTags('Products')
  @ApiOperation({
    summary: 'this called to get products ',
    description: 'returns all products',
  })
  @ApiResponse({
    status: 200,
    description: 'get all Products',
    type: [ProductResponse],
  })
  async index() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    description: 'Return product by id',
    type: [ProductResponse],
  })
  @ApiOperation({
    summary: 'Get products by ID',
    description: 'Returns only one product',
  })
  async getById(@Param('id') id: number) {
    return this.productService.getOne(id);
  }
  // HTTP POST : /mails
  @Post()
  @ApiTags('Products')
  /*@ApiResponse({
    status: 201,
    description: 'creating new product ',
    type: ProductResponse,
  })*/
  @ApiOperation({
    summary: 'Add new product to products list',
  })
  //@ApiConsumes('application/JSON')
  //@ApiCreatedResponse({ description: 'product creation' })
  /*@ApiParam({
    name: 'body',
    description: 'add new product here please',
    type: 'object',
  })*/
  @ApiBody({ type: ProductResponse })
  async incertProduct(@Body() data: Product) {
    return this.productService.addProduct(data);
  }

  // HTTP PUT : /mails + /:id => /mails/:id
  @Put('/:id')
  @ApiTags('Products')
  @ApiOperation({
    summary: 'Update a product by id',
  })
  @ApiBody({ type: ProductResponse })
  async updateProduct(@Param('id') id: string, @Body() data: any) {
    return this.productService.updateProduct(id, data);
  }

  @Delete('/:id')
  @ApiTags('Products')
  @ApiOperation({
    summary: 'Delete a product by id',
  })
  async deleteMail(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class ProductResponse {
  @ApiProperty({ required: false })
  product_id: number;

  @ApiProperty()
  product_name: string;

  @ApiProperty()
  product_status: boolean;

  @ApiProperty()
  product_description: string;

  @ApiProperty()
  product_price: number;
}

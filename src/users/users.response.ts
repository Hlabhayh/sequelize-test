import { ApiProperty } from '@nestjs/swagger';

export class UsersResponse {
  @ApiProperty()
  owner_id: number;

  @ApiProperty()
  owner_name: string;

  @ApiProperty()
  owner_city: string;

  @ApiProperty()
  owner_address: string;

  @ApiProperty()
  product_id: number;
}

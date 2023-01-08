import { PartialType } from '@nestjs/swagger';
import { CreateUidDto } from './create-uid.dto';

export class UpdateUidDto extends PartialType(CreateUidDto) {}

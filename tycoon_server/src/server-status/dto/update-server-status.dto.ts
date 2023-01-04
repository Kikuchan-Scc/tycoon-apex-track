import { PartialType } from '@nestjs/swagger';
import { CreateServerStatusDto } from './create-server-status.dto';

export class UpdateServerStatusDto extends PartialType(CreateServerStatusDto) {}

import { IsDefined, IsNegative, IsNumber, IsString, Min, MIN } from "class-validator";


export class replaceProductDTO
{
    @IsDefined({message: "A név megadás kötelező"})
    @IsString()
    name: string;
    @IsDefined({message : "Az ára megadása kötelező"})
    @IsNumber()
    @Min(1,
        {message: "Az ára nem lehet 1-nél kevesebb"}
    )
    price: number;
}
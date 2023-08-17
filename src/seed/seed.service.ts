import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) { }

  async runSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    //const insertPromisesArray = [];
    const pokemonToInsert: { name: string, pokeNumber: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const pokeNumber: number = +segments[segments.length - 2];
      // insertPromisesArray.push(
      //   this.pokemonModel.create({ name, pokeNumber })
      // );
      pokemonToInsert.push({ name, pokeNumber });
    });
    //await Promise.all(pokemonToInsert);
    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed succesfuly!';
  }
}

import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
public readonly API_ENDPOINT_TODO: string = 'https://localhost:7045/api/TodoItems'; 
public readonly API_ENDPOINT_WEATHER: string = 'https://localhost:7045/WeatherForecast'; 
public static TitleOfSite: string = "Full Stack Practice"; 
} 
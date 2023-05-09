import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
/*ToDd enpoint routes*/
public static API_ENDPOINT_TODO: string = 'https://localhost:7045/api/TodoItems'; 
public static API_ENDPOINT_TODO_VERSION: string = 'https://localhost:7045/api/TodoItems/Version'; 

/*Weather enpoint routes*/
public static API_ENDPOINT_WEATHER: string = 'https://localhost:7045/WeatherForecast'; 

/*Other Constants*/
public static TitleOfSite: string = "Full Stack Practice"; 
} 
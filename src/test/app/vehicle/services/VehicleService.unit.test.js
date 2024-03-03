"use strict";

const service = require("../../../../main/app/vehicle/services/VehicleService");
const {
  getAllVehicles,
  getAllVehiclesExternal,
  createVehicle,
  getVehicleByName,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} = require("../../../../main/app/vehicle/dao/VehicleDao");

jest.mock("../../../../main/app/vehicle/dao/VehicleDao");

describe("Servicios", () => {
  describe("Crear vehiculo", () => {
    test("Caso exito", async () => {
      const request = {
        nombre: "Snowspeeder",
        modelo: "t-47 airspeeder",
        fabricante: "Incom corporation",
        costo_en_creditos: "unknown",
        longitud: "4.5",
        maxima_velocidad_atmosferica: "650",
        equipo: "2",
        pasajeros: "0",
        capacidad_carga: "10",
        consumibles: "none",
        clase_vehiculo: "airspeeder",
        pilotos: [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/18/",
        ],
        peliculas: ["https://swapi.py4e.com/api/films/2/"],
        url: "https://swapi.py4e.com/api/vehicles/14/",
      };
      const responseDao = {
        nombre: "Snowspeederr",
        modelo: "t-47 airspeeder",
        fabricante: "Incom corporation",
        costo_en_creditos: "unknown",
        longitud: "4.5",
        maxima_velocidad_atmosferica: "650",
        equipo: "2",
        pasajeros: "0",
        capacidad_carga: "10",
        consumibles: "none",
        clase_vehiculo: "airspeeder",
        pilotos: [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/18/",
        ],
        peliculas: ["https://swapi.py4e.com/api/films/2/"],
        url: "https://swapi.py4e.com/api/vehicles/14/",
        id: "646433d0-282a-11ee-ae67-bb191e285ff1",
        creado: 1689987303310,
        editado: 1689987303310,
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo creado satisfactoriamente",
        number_records: 1,
        object: {
          nombre: "Snowspeederr",
          modelo: "t-47 airspeeder",
          fabricante: "Incom corporation",
          costo_en_creditos: "unknown",
          longitud: "4.5",
          maxima_velocidad_atmosferica: "650",
          equipo: "2",
          pasajeros: "0",
          capacidad_carga: "10",
          consumibles: "none",
          clase_vehiculo: "airspeeder",
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          url: "https://swapi.py4e.com/api/vehicles/14/",
          id: "646433d0-282a-11ee-ae67-bb191e285ff1",
          creado: 1689987303310,
          editado: 1689987303310,
        },
      };
      getVehicleByName.mockResolvedValue([]);
      createVehicle.mockResolvedValue(responseDao);
      const result = await service.createVehicle(request);
      expect(result).toEqual(responseService);
    });
    test("Caso error", async () => {
      const request = {
        nombre: "Snowspeeder",
      };
      const responseDao = { statusCode: 400, message: "Vehiculo existente" };
      const responseService = {
        statusCode: 400,
        message: "Vehiculo existente",
      };
      getVehicleByName.mockResolvedValue({ count: 1 });
      createVehicle.mockRejectedValue(responseDao);
      try {
        await service.createVehicle(request);
      } catch (error) {
        expect(error).toStrictEqual(responseService);
      }
    });
  });
  describe("Obtener vehiculo por Id", () => {
    test("Caso exito", async () => {
      const request = {
        id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
      };
      const responseDao = [
        {
          nombre: "Snowspeeder",
          capacidad_carga: "10",
          maxima_velocidad_atmosferica: "650",
          url: "https://swapi.py4e.com/api/vehicles/14/",
          equipo: "2",
          consumibles: "none",
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          costo_en_creditos: "unknown",
          modelo: "t-47 airspeeder",
          editado: "2023-07-22T00:21:27.491Z",
          fabricante: "Incom corporation",
          clase_vehiculo: "airspeeder",
          creado: "2023-07-22T00:21:27.491Z",
          id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
          longitud: "4.5",
          pasajeros: "0",
        },
      ];
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo encontrado",
        number_records: undefined,
        object: [
          {
            nombre: "Snowspeeder",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-22T00:21:27.491Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-22T00:21:27.491Z",
            id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
            longitud: "4.5",
            pasajeros: "0",
          },
        ],
      };
      getVehicleById.mockResolvedValue(responseDao);
      const result = await service.getVehicleById(request);
      expect(result).toEqual(responseService);
    });
    test("Caso error", async () => {
      const request = {
        id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
      };
      const responseDao = { count: 0 };
      const responseService = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      getVehicleById.mockResolvedValue(responseDao);
      try {
        await service.getVehicleById(request);
      } catch (error) {
        expect(error).toStrictEqual(responseService);
      }
    });
  });
  describe("Obtener todos los vehiculos", () => {
    test("Caso exito fuente externa", async () => {
      const request = {
        fuente: "externa",
      };
      const responseDao = {
        count: 39,
        next: "https://swapi.py4e.com/api/vehicles/?page=2",
        previous: null,
        results: [
          {
            name: "Sand Crawler",
            model: "Digger Crawler",
            manufacturer: "Corellia Mining Corporation",
            cost_in_credits: "150000",
            length: "36.8 ",
            max_atmosphering_speed: "30",
            crew: "46",
            passengers: "30",
            cargo_capacity: "50000",
            consumables: "2 months",
            vehicle_class: "wheeled",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/5/",
            ],
            created: "2014-12-10T15:36:25.724000Z",
            edited: "2014-12-20T21:30:21.661000Z",
            url: "https://swapi.py4e.com/api/vehicles/4/",
          },
          {
            name: "T-16 skyhopper",
            model: "T-16 skyhopper",
            manufacturer: "Incom Corporation",
            cost_in_credits: "14500",
            length: "10.4 ",
            max_atmosphering_speed: "1200",
            crew: "1",
            passengers: "1",
            cargo_capacity: "50",
            consumables: "0",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/1/"],
            created: "2014-12-10T16:01:52.434000Z",
            edited: "2014-12-20T21:30:21.665000Z",
            url: "https://swapi.py4e.com/api/vehicles/6/",
          },
          {
            name: "X-34 landspeeder",
            model: "X-34 landspeeder",
            manufacturer: "SoroSuub Corporation",
            cost_in_credits: "10550",
            length: "3.4 ",
            max_atmosphering_speed: "250",
            crew: "1",
            passengers: "1",
            cargo_capacity: "5",
            consumables: "unknown",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/1/"],
            created: "2014-12-10T16:13:52.586000Z",
            edited: "2014-12-20T21:30:21.668000Z",
            url: "https://swapi.py4e.com/api/vehicles/7/",
          },
          {
            name: "TIE/LN starfighter",
            model: "Twin Ion Engine/Ln Starfighter",
            manufacturer: "Sienar Fleet Systems",
            cost_in_credits: "unknown",
            length: "6.4",
            max_atmosphering_speed: "1200",
            crew: "1",
            passengers: "0",
            cargo_capacity: "65",
            consumables: "2 days",
            vehicle_class: "starfighter",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-10T16:33:52.860000Z",
            edited: "2014-12-20T21:30:21.670000Z",
            url: "https://swapi.py4e.com/api/vehicles/8/",
          },
          {
            name: "Snowspeeder",
            model: "t-47 airspeeder",
            manufacturer: "Incom corporation",
            cost_in_credits: "unknown",
            length: "4.5",
            max_atmosphering_speed: "650",
            crew: "2",
            passengers: "0",
            cargo_capacity: "10",
            consumables: "none",
            vehicle_class: "airspeeder",
            pilots: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            films: ["https://swapi.py4e.com/api/films/2/"],
            created: "2014-12-15T12:22:12Z",
            edited: "2014-12-20T21:30:21.672000Z",
            url: "https://swapi.py4e.com/api/vehicles/14/",
          },
          {
            name: "TIE bomber",
            model: "TIE/sa bomber",
            manufacturer: "Sienar Fleet Systems",
            cost_in_credits: "unknown",
            length: "7.8",
            max_atmosphering_speed: "850",
            crew: "1",
            passengers: "0",
            cargo_capacity: "none",
            consumables: "2 days",
            vehicle_class: "space/planetary bomber",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:33:15.838000Z",
            edited: "2014-12-20T21:30:21.675000Z",
            url: "https://swapi.py4e.com/api/vehicles/16/",
          },
          {
            name: "AT-AT",
            model: "All Terrain Armored Transport",
            manufacturer:
              "Kuat Drive Yards, Imperial Department of Military Research",
            cost_in_credits: "unknown",
            length: "20",
            max_atmosphering_speed: "60",
            crew: "5",
            passengers: "40",
            cargo_capacity: "1000",
            consumables: "unknown",
            vehicle_class: "assault walker",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:38:25.937000Z",
            edited: "2014-12-20T21:30:21.677000Z",
            url: "https://swapi.py4e.com/api/vehicles/18/",
          },
          {
            name: "AT-ST",
            model: "All Terrain Scout Transport",
            manufacturer:
              "Kuat Drive Yards, Imperial Department of Military Research",
            cost_in_credits: "unknown",
            length: "2",
            max_atmosphering_speed: "90",
            crew: "2",
            passengers: "0",
            cargo_capacity: "200",
            consumables: "none",
            vehicle_class: "walker",
            pilots: ["https://swapi.py4e.com/api/people/13/"],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:46:42.384000Z",
            edited: "2014-12-20T21:30:21.679000Z",
            url: "https://swapi.py4e.com/api/vehicles/19/",
          },
          {
            name: "Storm IV Twin-Pod cloud car",
            model: "Storm IV Twin-Pod",
            manufacturer: "Bespin Motors",
            cost_in_credits: "75000",
            length: "7",
            max_atmosphering_speed: "1500",
            crew: "2",
            passengers: "0",
            cargo_capacity: "10",
            consumables: "1 day",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/2/"],
            created: "2014-12-15T12:58:50.530000Z",
            edited: "2014-12-20T21:30:21.681000Z",
            url: "https://swapi.py4e.com/api/vehicles/20/",
          },
          {
            name: "Sail barge",
            model: "Modified Luxury Sail Barge",
            manufacturer: "Ubrikkian Industries Custom Vehicle Division",
            cost_in_credits: "285000",
            length: "30",
            max_atmosphering_speed: "100",
            crew: "26",
            passengers: "500",
            cargo_capacity: "2000000",
            consumables: "Live food tanks",
            vehicle_class: "sail barge",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/3/"],
            created: "2014-12-18T10:44:14.217000Z",
            edited: "2014-12-20T21:30:21.684000Z",
            url: "https://swapi.py4e.com/api/vehicles/24/",
          },
        ],
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculos encontrados",
        number_records: 39,
        object: [
          {
            name: "Sand Crawler",
            model: "Digger Crawler",
            manufacturer: "Corellia Mining Corporation",
            cost_in_credits: "150000",
            length: "36.8 ",
            max_atmosphering_speed: "30",
            crew: "46",
            passengers: "30",
            cargo_capacity: "50000",
            consumables: "2 months",
            vehicle_class: "wheeled",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/5/",
            ],
            created: "2014-12-10T15:36:25.724000Z",
            edited: "2014-12-20T21:30:21.661000Z",
            url: "https://swapi.py4e.com/api/vehicles/4/",
          },
          {
            name: "T-16 skyhopper",
            model: "T-16 skyhopper",
            manufacturer: "Incom Corporation",
            cost_in_credits: "14500",
            length: "10.4 ",
            max_atmosphering_speed: "1200",
            crew: "1",
            passengers: "1",
            cargo_capacity: "50",
            consumables: "0",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/1/"],
            created: "2014-12-10T16:01:52.434000Z",
            edited: "2014-12-20T21:30:21.665000Z",
            url: "https://swapi.py4e.com/api/vehicles/6/",
          },
          {
            name: "X-34 landspeeder",
            model: "X-34 landspeeder",
            manufacturer: "SoroSuub Corporation",
            cost_in_credits: "10550",
            length: "3.4 ",
            max_atmosphering_speed: "250",
            crew: "1",
            passengers: "1",
            cargo_capacity: "5",
            consumables: "unknown",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/1/"],
            created: "2014-12-10T16:13:52.586000Z",
            edited: "2014-12-20T21:30:21.668000Z",
            url: "https://swapi.py4e.com/api/vehicles/7/",
          },
          {
            name: "TIE/LN starfighter",
            model: "Twin Ion Engine/Ln Starfighter",
            manufacturer: "Sienar Fleet Systems",
            cost_in_credits: "unknown",
            length: "6.4",
            max_atmosphering_speed: "1200",
            crew: "1",
            passengers: "0",
            cargo_capacity: "65",
            consumables: "2 days",
            vehicle_class: "starfighter",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/1/",
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-10T16:33:52.860000Z",
            edited: "2014-12-20T21:30:21.670000Z",
            url: "https://swapi.py4e.com/api/vehicles/8/",
          },
          {
            name: "Snowspeeder",
            model: "t-47 airspeeder",
            manufacturer: "Incom corporation",
            cost_in_credits: "unknown",
            length: "4.5",
            max_atmosphering_speed: "650",
            crew: "2",
            passengers: "0",
            cargo_capacity: "10",
            consumables: "none",
            vehicle_class: "airspeeder",
            pilots: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            films: ["https://swapi.py4e.com/api/films/2/"],
            created: "2014-12-15T12:22:12Z",
            edited: "2014-12-20T21:30:21.672000Z",
            url: "https://swapi.py4e.com/api/vehicles/14/",
          },
          {
            name: "TIE bomber",
            model: "TIE/sa bomber",
            manufacturer: "Sienar Fleet Systems",
            cost_in_credits: "unknown",
            length: "7.8",
            max_atmosphering_speed: "850",
            crew: "1",
            passengers: "0",
            cargo_capacity: "none",
            consumables: "2 days",
            vehicle_class: "space/planetary bomber",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:33:15.838000Z",
            edited: "2014-12-20T21:30:21.675000Z",
            url: "https://swapi.py4e.com/api/vehicles/16/",
          },
          {
            name: "AT-AT",
            model: "All Terrain Armored Transport",
            manufacturer:
              "Kuat Drive Yards, Imperial Department of Military Research",
            cost_in_credits: "unknown",
            length: "20",
            max_atmosphering_speed: "60",
            crew: "5",
            passengers: "40",
            cargo_capacity: "1000",
            consumables: "unknown",
            vehicle_class: "assault walker",
            pilots: [],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:38:25.937000Z",
            edited: "2014-12-20T21:30:21.677000Z",
            url: "https://swapi.py4e.com/api/vehicles/18/",
          },
          {
            name: "AT-ST",
            model: "All Terrain Scout Transport",
            manufacturer:
              "Kuat Drive Yards, Imperial Department of Military Research",
            cost_in_credits: "unknown",
            length: "2",
            max_atmosphering_speed: "90",
            crew: "2",
            passengers: "0",
            cargo_capacity: "200",
            consumables: "none",
            vehicle_class: "walker",
            pilots: ["https://swapi.py4e.com/api/people/13/"],
            films: [
              "https://swapi.py4e.com/api/films/2/",
              "https://swapi.py4e.com/api/films/3/",
            ],
            created: "2014-12-15T12:46:42.384000Z",
            edited: "2014-12-20T21:30:21.679000Z",
            url: "https://swapi.py4e.com/api/vehicles/19/",
          },
          {
            name: "Storm IV Twin-Pod cloud car",
            model: "Storm IV Twin-Pod",
            manufacturer: "Bespin Motors",
            cost_in_credits: "75000",
            length: "7",
            max_atmosphering_speed: "1500",
            crew: "2",
            passengers: "0",
            cargo_capacity: "10",
            consumables: "1 day",
            vehicle_class: "repulsorcraft",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/2/"],
            created: "2014-12-15T12:58:50.530000Z",
            edited: "2014-12-20T21:30:21.681000Z",
            url: "https://swapi.py4e.com/api/vehicles/20/",
          },
          {
            name: "Sail barge",
            model: "Modified Luxury Sail Barge",
            manufacturer: "Ubrikkian Industries Custom Vehicle Division",
            cost_in_credits: "285000",
            length: "30",
            max_atmosphering_speed: "100",
            crew: "26",
            passengers: "500",
            cargo_capacity: "2000000",
            consumables: "Live food tanks",
            vehicle_class: "sail barge",
            pilots: [],
            films: ["https://swapi.py4e.com/api/films/3/"],
            created: "2014-12-18T10:44:14.217000Z",
            edited: "2014-12-20T21:30:21.684000Z",
            url: "https://swapi.py4e.com/api/vehicles/24/",
          },
        ],
      };
      getAllVehiclesExternal.mockResolvedValue(responseDao);
      const result = await service.getAllVehicles(request);
      expect(result).toEqual(responseService);
    });
    test("Caso exito fuente local", async () => {
      const request = {
        fuente: "",
      };
      const responseDao = [
        {
          nombre: "Snowspeederr",
          capacidad_carga: "10",
          maxima_velocidad_atmosferica: "650",
          url: "https://swapi.py4e.com/api/vehicles/14/",
          equipo: "2",
          consumibles: "none",
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          costo_en_creditos: "unknown",
          modelo: "t-47 airspeeder",
          editado: "2023-07-22T00:55:03.310Z",
          fabricante: "Incom corporation",
          clase_vehiculo: "airspeeder",
          creado: "2023-07-22T00:55:03.310Z",
          id: "646433d0-282a-11ee-ae67-bb191e285ff1",
          longitud: "4.5",
          pasajeros: "0",
        },
        {
          nombre: "Snowspeeder",
          capacidad_carga: "10",
          maxima_velocidad_atmosferica: "650",
          url: "https://swapi.py4e.com/api/vehicles/14/",
          equipo: "2",
          consumibles: "none",
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          costo_en_creditos: "unknown",
          modelo: "t-47 airspeeder",
          editado: "2023-07-22T00:21:27.491Z",
          fabricante: "Incom corporation",
          clase_vehiculo: "airspeeder",
          creado: "2023-07-22T00:21:27.491Z",
          id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
          longitud: "4.5",
          pasajeros: "0",
        },
        {
          nombre: "Snowspeederrr",
          capacidad_carga: "10",
          maxima_velocidad_atmosferica: "650",
          url: "https://swapi.py4e.com/api/vehicles/14/",
          equipo: "2",
          consumibles: "none",
          peliculas: ["https://swapi.py4e.com/api/films/2/"],
          pilotos: [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/18/",
          ],
          costo_en_creditos: "unknown",
          modelo: "t-47 airspeeder",
          editado: "2023-07-22T00:56:52.229Z",
          fabricante: "Incom corporation",
          clase_vehiculo: "airspeeder",
          creado: "2023-07-22T00:56:52.229Z",
          id: "a5501350-282a-11ee-a9cb-bb71518a2f55",
          longitud: "4.5",
          pasajeros: "0",
        },
      ];
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculos encontrados",
        number_records: undefined,
        object: [
          {
            nombre: "Snowspeederr",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-22T00:55:03.310Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-22T00:55:03.310Z",
            id: "646433d0-282a-11ee-ae67-bb191e285ff1",
            longitud: "4.5",
            pasajeros: "0",
          },
          {
            nombre: "Snowspeeder",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-22T00:21:27.491Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-22T00:21:27.491Z",
            id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
            longitud: "4.5",
            pasajeros: "0",
          },
          {
            nombre: "Snowspeederrr",
            capacidad_carga: "10",
            maxima_velocidad_atmosferica: "650",
            url: "https://swapi.py4e.com/api/vehicles/14/",
            equipo: "2",
            consumibles: "none",
            peliculas: ["https://swapi.py4e.com/api/films/2/"],
            pilotos: [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/18/",
            ],
            costo_en_creditos: "unknown",
            modelo: "t-47 airspeeder",
            editado: "2023-07-22T00:56:52.229Z",
            fabricante: "Incom corporation",
            clase_vehiculo: "airspeeder",
            creado: "2023-07-22T00:56:52.229Z",
            id: "a5501350-282a-11ee-a9cb-bb71518a2f55",
            longitud: "4.5",
            pasajeros: "0",
          },
        ],
      };
      getAllVehicles.mockResolvedValue(responseDao);
      const result = await service.getAllVehicles(request);
      expect(result).toEqual(responseService);
    });
    test("Caso error", async () => {
      const request = {
        fuente: "",
      };
      const responseService = {
        statusCode: 404,
        message: "Vehiculos no encontrados",
      };
      getAllVehicles.mockResolvedValue({ count: 0 });
      try {
        await service.getAllVehicles(request);
      } catch (error) {
        expect(error).toStrictEqual(responseService);
      }
    });
  });
  describe("Modificar vehiculo", () => {
    test("Caso exito", async () => {
      const request = {
        id: "4b2deb50-27f7-11ee-9531-c92103edf592",
        nombre: "Snowspeeder",
        modelo: "t-47 airspeeder",
        fabricante: "Incom corporation",
        costo_en_creditos: "unknown",
        longitud: "4.5",
        maxima_velocidad_atmosferica: "650",
        equipo: "2",
        pasajeros: "0",
        capacidad_carga: "10",
        consumibles: "none",
        clase_vehiculo: "airspeeder",
        pilotos: [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/18/",
        ],
        peliculas: ["https://swapi.py4e.com/api/films/2/"],
        url: "https://swapi.py4e.com/api/vehicles/14/",
      };
      const responseDao = {
        nombre: "Sail bargee",
        capacidad_carga: "2000000",
        maxima_velocidad_atmosferica: "100",
        url: "https://swapi.py4e.com/api/vehicles/24/",
        equipo: "26",
        consumibles: "Live food tanks",
        peliculas: ["https://swapi.py4e.com/api/films/3/"],
        pilotos: [],
        costo_en_creditos: "285000",
        modelo: "Modified Luxury Sail Barge",
        editado: "2023-07-22T04:49:18.058Z",
        fabricante: "Ubrikkian Industries Custom Vehicle Division",
        clase_vehiculo: "sail barge",
        id: "4b2deb50-27f7-11ee-9531-c92103edf592",
        longitud: "30",
        pasajeros: "500",
      };
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo modificado satisfactoriamente",
        number_records: 1,
        object: {
          nombre: "Sail bargee",
          capacidad_carga: "2000000",
          maxima_velocidad_atmosferica: "100",
          url: "https://swapi.py4e.com/api/vehicles/24/",
          equipo: "26",
          consumibles: "Live food tanks",
          peliculas: ["https://swapi.py4e.com/api/films/3/"],
          pilotos: [],
          costo_en_creditos: "285000",
          modelo: "Modified Luxury Sail Barge",
          editado: "2023-07-22T04:49:18.058Z",
          fabricante: "Ubrikkian Industries Custom Vehicle Division",
          clase_vehiculo: "sail barge",
          id: "4b2deb50-27f7-11ee-9531-c92103edf592",
          longitud: "30",
          pasajeros: "500",
        },
      };
      getVehicleByName.mockResolvedValue([]);
      updateVehicle.mockResolvedValue(responseDao);
      const result = await service.updateVehicle(request);
      expect(result).toEqual(responseService);
    });
    test("Caso error", async () => {
      const request = {
        id: "4b2deb50-27f7-11ee-9531-c92103edf592",
        nombre: "Snowspeeder",
        modelo: "t-47 airspeeder",
        fabricante: "Incom corporation",
        costo_en_creditos: "unknown",
        longitud: "4.5",
        maxima_velocidad_atmosferica: "650",
        equipo: "2",
        pasajeros: "0",
        capacidad_carga: "10",
        consumibles: "none",
        clase_vehiculo: "airspeeder",
        pilotos: [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/18/",
        ],
        peliculas: ["https://swapi.py4e.com/api/films/2/"],
        url: "https://swapi.py4e.com/api/vehicles/14/",
      };
      const responseDao = {
        statusCode: 400,
        message: "Nombre de vehiculo existente",
      };
      const responseService = {
        statusCode: 400,
        message: "Nombre de vehiculo existente",
      };
      getVehicleByName.mockResolvedValue({ count: 1 });
      updateVehicle.mockRejectedValue(responseDao);
      try {
        await service.updateVehicle(request);
      } catch (error) {
        expect(error).toStrictEqual(responseService);
      }
    });
  });
  describe("Eliminar vehiculo", () => {
    test("Caso exito", async () => {
      const request = {
        id: "4b2deb50-27f7-11ee-9531-c92103edf592",
      };
      const responseDao = [
        {
          nombre: "Sail bargee",
          capacidad_carga: "2000000",
          maxima_velocidad_atmosferica: "100",
          url: "https://swapi.py4e.com/api/vehicles/24/",
          equipo: "26",
          consumibles: "Live food tanks",
          peliculas: ["https://swapi.py4e.com/api/films/3/"],
          pilotos: [],
          costo_en_creditos: "285000",
          modelo: "Modified Luxury Sail Barge",
          editado: "2023-07-22T04:49:18.058Z",
          fabricante: "Ubrikkian Industries Custom Vehicle Division",
          clase_vehiculo: "sail barge",
          id: "4b2deb50-27f7-11ee-9531-c92103edf592",
          longitud: "30",
          pasajeros: "500",
        },
      ];
      const responseService = {
        status: "success",
        code: 200,
        message: "Vehiculo eliminado satisfactoriamente",
        number_records: 1,
        object: [
          {
            nombre: "Sail bargee",
            capacidad_carga: "2000000",
            maxima_velocidad_atmosferica: "100",
            url: "https://swapi.py4e.com/api/vehicles/24/",
            equipo: "26",
            consumibles: "Live food tanks",
            peliculas: ["https://swapi.py4e.com/api/films/3/"],
            pilotos: [],
            costo_en_creditos: "285000",
            modelo: "Modified Luxury Sail Barge",
            editado: "2023-07-22T04:49:18.058Z",
            fabricante: "Ubrikkian Industries Custom Vehicle Division",
            clase_vehiculo: "sail barge",
            id: "4b2deb50-27f7-11ee-9531-c92103edf592",
            longitud: "30",
            pasajeros: "500",
          },
        ],
      };
      getVehicleById.mockResolvedValue({ count: 1 });
      deleteVehicle.mockResolvedValue(responseDao);
      const result = await service.deleteVehicle(request);
      expect(result).toEqual(responseService);
    });
    test("Caso error", async () => {
      const request = {
        id: "b2dea220-2825-11ee-9794-c53ac4c0b16c",
      };
      const responseDao = { count: 0 };
      const responseService = {
        statusCode: 404,
        message: "Vehiculo no encontrado",
      };
      getVehicleById.mockResolvedValue(responseDao);
      try {
        await service.deleteVehicle(request);
      } catch (error) {
        expect(error).toStrictEqual(responseService);
      }
    });
  });
});

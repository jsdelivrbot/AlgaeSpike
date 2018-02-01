export class Lake {
  id: Number;
  lakeName: String;
  buoys: [
    {
      buoyId: Number;
      buoyLocation: String;
      currentConditionCode: String;
      measurements: [
        {
          time: Date;
          salinity: Number;
          turbidity: Number;
          pH: Number;
        }
      ];
    }
  ];
}

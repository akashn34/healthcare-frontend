import { OrderInfo } from "./order-info";

export class Orders {
    constructor(
      public oid: number | null,
      public emailid: string,
      public amount: number,
      public status: string,
      public orderdate: string,
      public listoforders: OrderInfo[]
    ) {}
  }
  
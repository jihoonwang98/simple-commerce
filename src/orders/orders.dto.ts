export class OrderCreateBody {
  member: {
    id: number;
  };
  orderItems: OrderItemCreateBody[];
  delivery: {
    address: {
      city: string;
      street: string;
      zipcode: string;
    };
  };
}

export class OrderItemCreateBody {
  itemId: number;
  count: number;
}

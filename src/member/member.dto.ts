export class MemberCreateBody {
  name: string;
  address?: {
    city: string;
    street: string;
    zipcode: string;
  };
}

export class MemberUpdateBody {
  name?: string;
  address?: {
    city?: string;
    street?: string;
    zipcode?: string;
  };
}

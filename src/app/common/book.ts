export interface Books {
    count: number;
    next: string;
    previous:[string,null];
    results:Books[]
  }
//   "count": <number>,
// "next": <string or null>,
// "previous": <string or null>,
// "results": <array of Books>

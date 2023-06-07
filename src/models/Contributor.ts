export class Contributor {
  constructor(
    public cid: string,
    public cycle: number,
    public org_name: string,
    public total: number,
    public pacs: number,
    public indivs: number,
  ) {}
}

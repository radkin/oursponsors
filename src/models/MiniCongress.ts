import { Sponsor } from "./Sponsor";

export interface MiniCongress {
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  party: string;
  image_url: string;
  state: string,
  sponsors: Sponsor[];
}

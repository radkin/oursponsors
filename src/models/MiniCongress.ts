import { Sponsor } from "./Sponsor";

export interface MiniCongress {
  rep_type: string;
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  party: string;
  image_url: string;
  state: string,
  crp_id: string;
  sponsors: Sponsor[];
}

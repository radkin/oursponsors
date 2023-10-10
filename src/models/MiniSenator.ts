import { Sponsor } from "./Sponsor";

export interface MiniSenator {
  rep_type: string;
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  party: string;
  state: string,
  image_url: string;
  crp_id: string;
  sponsors: Sponsor[];
}

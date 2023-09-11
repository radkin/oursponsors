import { Sponsor } from "./Sponsor";

export interface MiniSenator {
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  party: string;
  state: string,
  image_url: string;
  sponsors: Sponsor[];
}

/*
ToDo: Add partisan politics related numbers

    inOffice: boolean,
    //    @JsonProperty(value="cook_pvi")
    dwNominate: number,
    //    @JsonProperty(value="ideal_point")
    seniority: number,
    nextElection: string,
    totalVotes: number,
    missedVotes: number,
    totalPresent: number,
    lastUpdated: string,
    ocdId: string,
    office: string,
    phone: string,
    //    @JsonProperty(value="fax")
    senateClass: number,
    stateRank: string,
    lisId: string,
    missedVotesPct: number,
    votesWithPartyPct: number,
    votesAgainstPartyPct: number,
    imageUrl: string,
 */

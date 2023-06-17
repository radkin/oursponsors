export interface Senator {
  id: number;
  pro_publica_id: string;
  title: string;
  short_title: string;
  api_url: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  gender: string;
  party: string;
  leadership_role: string;
  twitter_account: string;
  facebook_account: string;
  crp_id: string;
  state: string,
  youtube_account: string,
  govtrack_id: number,
  cspan_id: number,
  votesmart_id: number,
  icpsr_id: number,
  google_entity_id: string,
  fecCandidateId: string,
  url: string,
  rssUrl: string,
  contact_form: string,
  image_url: string;
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
